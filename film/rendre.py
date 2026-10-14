# Rend le film : python3 rendre.py h|v [apercu t1,t2,...]
import sys, asyncio, subprocess
from playwright.async_api import async_playwright
f = sys.argv[1]
import os
L = os.environ.get('LANGUE', 'fr')
# Un petit serveur, servi depuis ce dossier, pour ce rendu seulement.
import threading, http.server, functools
class _Muet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
_srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(_Muet, directory=os.path.dirname(os.path.abspath(__file__))))
threading.Thread(target=_srv.serve_forever, daemon=True).start()
PORT = _srv.server_address[1]
apercu = sys.argv[2] if len(sys.argv) > 2 else None
W, H = (1920, 1080) if f == 'h' else (1080, 1920)
FPS = int(__import__("os").environ.get("FPS","60"))
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--force-color-profile=srgb'])
        pg = await b.new_page(viewport={'width': W, 'height': H}, device_scale_factor=1)
        pg.on('pageerror', lambda e: print('ERR', e))
        await pg.goto(f"http://127.0.0.1:{PORT}/film.html?f={f}&l={L}")
        await pg.evaluate('pret')
        await pg.wait_for_timeout(500)
        if apercu:
            for t in apercu.split(','):
                await pg.evaluate(f'rendu({t})')
                await pg.screenshot(path=f'apercu-{L}-{f}-{t}.png')
            await b.close(); return
        duree = await pg.evaluate('DUREE')
        n = int(duree * FPS)
        ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', str(FPS), '-c:v', 'mjpeg', '-i', '-',
                               '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', f'muet-{L}-{f}.mp4'],
                              stdin=subprocess.PIPE)
        for i in range(n):
            await pg.evaluate(f'rendu({i / FPS})')
            ff.stdin.write(await pg.screenshot(type='jpeg', quality=95))
            if i % 150 == 0: print(f, i, '/', n, flush=True)
        ff.stdin.close(); ff.wait()
        await b.close()
asyncio.run(main())
