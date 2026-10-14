# La bande-son du film, synthétisée de A à Z (aucun échantillon : libre de
# droits). 100 BPM : un temps = 0,6 s, une mesure = 2,4 s — les coupes du
# film tombent sur ces temps. Les bruitages reprennent les instants exacts
# de film.html.  Usage : python3 musique.py h|v sortie.wav
import sys, wave, numpy as np
fmt, sortie = sys.argv[1], sys.argv[2]
SR = 48000
DUREE = 60.0
N = int(DUREE * SR)
rng = np.random.default_rng(7)
L = np.zeros(N); R = np.zeros(N)
musique = np.zeros(N)   # la piste « musique » (ducking, réverbération)
sons = np.zeros(N)      # les bruitages

def ajouter(piste, t, x, g=1.0):
    i = int(t * SR)
    if i >= N: return
    n = min(len(x), N - i)
    piste[i:i + n] += g * x[:n]

def env_exp(n, d): return np.exp(-np.arange(n) / (d * SR))
def note(m): return 440 * 2 ** ((m - 69) / 12)

def lowpass(x, fc):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / np.sqrt(1 + (f / fc) ** 4)
    return np.fft.irfft(X, len(x))
def highpass(x, fc):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / np.sqrt(1 + (fc / np.maximum(f, 1)) ** 4)
    return np.fft.irfft(X, len(x))

# ── Les instruments ──────────────────────────────────────────────────────
def kick(g=1.0):
    n = int(.45 * SR); t = np.arange(n) / SR
    f = 45 + 95 * np.exp(-t / .045)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return g * np.sin(ph) * env_exp(n, .16) + g * .3 * rng.standard_normal(n) * env_exp(n, .004)
def clap(g=1.0):
    n = int(.3 * SR)
    x = highpass(rng.standard_normal(n), 900) * env_exp(n, .07)
    return g * lowpass(x, 6000) * .5
def hat(g=1.0):
    n = int(.08 * SR)
    return g * highpass(rng.standard_normal(n), 7000) * env_exp(n, .018) * .35
def pluck(m, g=1.0, d=.5):
    n = int(1.4 * SR); t = np.arange(n) / SR; f = note(m)
    x = sum(a * np.sin(2 * np.pi * f * k * t) * np.exp(-t / (d / k ** .7)) for k, a in [(1, 1), (2, .45), (3, .22), (4, .1)])
    return g * x * np.minimum(1, t / .004) * .35
def basse(m, longueur, g=1.0):
    n = int(longueur * SR); t = np.arange(n) / SR; f = note(m)
    e = np.minimum(1, t / .01) * np.minimum(1, (longueur - t) / .08)
    return g * (np.sin(2 * np.pi * f * t) + .25 * np.sin(4 * np.pi * f * t)) * e * .55
def nappe(accord, longueur, g=1.0):
    n = int(longueur * SR); t = np.arange(n) / SR
    e = np.sin(np.pi * np.clip(t / longueur, 0, 1)) ** .7
    x = np.zeros(n)
    for m in accord:
        for det in (-.07, 0, .07):
            f = note(m) * 2 ** (det / 12)
            x += sum((1 / k) * np.sin(2 * np.pi * f * k * t + k * det) for k in range(1, 6))
    return g * lowpass(x * e, 2200) * .05
def bulle(g=1.0):
    n = int(.12 * SR); t = np.arange(n) / SR
    f = 520 + 700 * (1 - np.exp(-t / .02))
    return g * np.sin(2 * np.pi * np.cumsum(f) / SR) * env_exp(n, .03) * .5
def touche(g=1.0):
    n = int(.03 * SR)
    return g * highpass(rng.standard_normal(n), 3000) * env_exp(n, .004) * .25
def souffle(longueur, g=1.0, monte=True):
    n = int(longueur * SR); t = np.arange(n) / SR
    bruit = rng.standard_normal(n)
    # Un filtre qui s'ouvre (ou se ferme) : on mélange deux coupures.
    a, b = lowpass(bruit, 600), lowpass(bruit, 7000)
    k = (t / longueur) if monte else 1 - t / longueur
    e = np.sin(np.pi * np.clip(t / longueur, 0, 1)) ** 2
    return g * (a * (1 - k) + b * k) * e * .3
def montee(longueur, g=1.0):
    n = int(longueur * SR); t = np.arange(n) / SR
    bruit = rng.standard_normal(n)
    a, b = lowpass(bruit, 400), highpass(bruit, 2000)
    k = (t / longueur) ** 2
    return g * (a * (1 - k) + b * k) * (t / longueur) ** 2.2 * .35
def impact(g=1.0):
    n = int(2.2 * SR); t = np.arange(n) / SR
    f = 38 + 60 * np.exp(-t / .08)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * env_exp(n, .55)
    x += lowpass(rng.standard_normal(n), 1800) * env_exp(n, .09) * .5
    return g * x * .9
def goutte(g=1.0):
    n = int(.35 * SR); t = np.arange(n) / SR
    f = 300 + 1500 * np.exp(-t / .03)
    return g * np.sin(2 * np.pi * np.cumsum(f) / SR) * env_exp(n, .06) * .6
def cloche(m, g=1.0, d=1.6):
    n = int(3 * SR); t = np.arange(n) / SR; f = note(m)
    x = sum(a * np.sin(2 * np.pi * f * r * t) * np.exp(-t / (d / r ** .5)) for r, a in [(1, 1), (2.0, .5), (2.76, .35), (5.4, .15)])
    return g * x * np.minimum(1, t / .002) * .25
def tic(m, g=1.0):
    n = int(.25 * SR); t = np.arange(n) / SR; f = note(m)
    return g * (np.sin(2 * np.pi * f * t) + .3 * np.sin(4 * np.pi * f * t)) * env_exp(n, .05) * .22

# ── La partition ────────────────────────────────────────────────────────
B = .6; M = 2.4
# Ré mineur 7 — Si♭ 7M — Fa 7M — Do (sus) : vi–IV–I–V en Fa.
grille = [([50, 53, 57, 60], 38), ([46, 50, 53, 57], 34), ([41, 45, 48, 52], 41), ([48, 52, 55, 60], 36)]
arpege = [[62, 65, 69, 72, 69, 65, 62, 65], [58, 62, 65, 69, 65, 62, 58, 62], [65, 69, 72, 76, 72, 69, 65, 69], [60, 64, 67, 72, 67, 64, 60, 67]]

# Section → (pad, basse, batterie, arpège) actifs
def section(t):
    if t < 2.4: return (0, 0, 0, 0)
    if t < 7.0: return (1, 0, 0, 1 if t > 4.2 else 0)
    if t < 19.0: return (1, 1, 1, 1)
    if t < 29.6: return (1, 1, 1, 1)
    if t < 44.2: return (1, 1, 2, 1)
    if t < 49.2: return (1, 0, 0, 0)
    if t < 58.0: return (1, 1, 1 if t < 53.6 else 0, 1)
    return (1, 0, 0, 0)

for i in range(int(DUREE / M) + 1):
    a = i * M
    acc, bm = grille[i % 4]
    p, bs, dr, ar = section(a + .01)
    if p: ajouter(musique, a, nappe(acc, M + .8), 1.0)
    if bs:
        for k in range(4):
            ajouter(musique, a + k * B, basse(bm, B * .92), .9 if k % 2 == 0 else .6)
    for k in range(8):
        tt = a + k * B / 2
        p2, bs2, dr2, ar2 = section(tt)
        if ar2: ajouter(musique, tt, pluck(arpege[i % 4][k], d=.35), .55 if k % 2 == 0 else .35)
        if dr2:
            if k % 2 == 0: ajouter(musique, tt, hat(), .8 if dr2 == 2 else .5)
            else: ajouter(musique, tt, hat(), .35)
            if k in (0, 4): ajouter(musique, tt, kick(), 1.0)
            if k in (2, 6) and dr2 == 2: ajouter(musique, tt, clap(), .8)
            if k == 6 and dr2 == 1: ajouter(musique, tt, clap(), .5)

# Les mots, chacun sur un coup
for k, tt in enumerate([44.4, 45.6, 46.8, 48.0]):
    ajouter(musique, tt, kick(), 1.1)
    ajouter(musique, tt, impact(), .35)
    ajouter(musique, tt, pluck([74, 77, 81, 84][k], d=.9), .9)

# La fin : un accord tenu, une cloche sur le logo
ajouter(musique, 53.9, nappe([41, 48, 53, 57, 60, 64], 6.0), 2.2)
ajouter(musique, 53.9, cloche(77), .9)
ajouter(musique, 54.5, cloche(84), .5)

# ── Les bruitages (mêmes instants que film.html) ─────────────────────────
ajouter(sons, .2, montee(1.0), .25)
ajouter(sons, 1.2, goutte(), 1.0)
ajouter(sons, 1.2, impact(), .8)
for k in range(4): ajouter(sons, 1.2 + k * .3, cloche(81 - k * 5, d=.8), .25 / (k + 1))
ajouter(sons, 2.4, impact(), .25)
ajouter(sons, 5.6, montee(1.4), .6)
ajouter(sons, 7.0, impact(), .55)
for tt in [7.0, 9.9, 12.9, 14.2, 15.0, 24.9]: ajouter(sons, tt, bulle(), .9)
for tt in np.arange(8.5, 9.6, .09): ajouter(sons, tt + rng.uniform(-.015, .015), touche(), .9)
for tt in np.arange(13.5, 14.0, .08): ajouter(sons, tt + rng.uniform(-.015, .015), touche(), .9)
for tt, d in [(10.1, 1.05), (11.3, 1.05), (14.4, .55), (15.0, .55)]: ajouter(sons, tt, souffle(d), .9)
ajouter(sons, 18.6, souffle(1.6, monte=False), 1.0)
ajouter(sons, 18.9, souffle(1.8), .9)
ajouter(sons, 23.6, souffle(1.3), .8)
ajouter(sons, 27.6, souffle(1.2, monte=False), .6)
ajouter(sons, 28.8, montee(1.0), .7)
ajouter(sons, 29.8, impact(), 1.0)
ajouter(sons, 29.8, cloche(69, d=2.4), .6)
for i in range(4): ajouter(sons, 33.8 + i * .55, souffle(1.1), .55)
ajouter(sons, 37.0, cloche(81), .7)
ajouter(sons, 37.1, cloche(88), .45)
ajouter(sons, 38.0, souffle(1.2, monte=False), .6)
COL = 5 if fmt == 'v' else 10
pas = .2 if fmt == 'v' else .13
g = 38.4
fins = sorted(g + 1.2 + (i // COL + i % COL) * pas + ((i * 37) % 7) * .05 + 1.4 for i in range(30))
gamme = [72, 74, 76, 79, 81, 84, 86, 88]
for k, tt in enumerate(fins): ajouter(sons, tt, tic(gamme[k % len(gamme)] + (12 if k > 20 else 0)), .55)
ajouter(sons, fins[-1] + .05, cloche(84), .5)
ajouter(sons, 43.2, montee(1.2), .8)
ajouter(sons, 49.2, souffle(1.4), .5)
ajouter(sons, 53.4, souffle(1.0, monte=False), .5)

# ── Le mixage ───────────────────────────────────────────────────────────
# La musique s'efface sous les coups de grosse caisse (le « pompage »).
temps = np.arange(N) / SR
pompe = np.ones(N)
for i in range(int(DUREE / (B))):
    tt = i * B
    if section(tt)[2] and i % 2 == 0:
        k0 = int(tt * SR); n = min(int(.3 * SR), N - k0)
        pompe[k0:k0 + n] = np.minimum(pompe[k0:k0 + n], 1 - .35 * np.exp(-np.arange(n) / (.08 * SR)))
# Réverbération : une réponse impulsionnelle de bruit qui s'éteint.
def reverb(x, duree=2.2, humide=.22):
    n = int(duree * SR)
    ir = rng.standard_normal(n) * np.exp(-np.arange(n) / (duree / 6.5 * SR))
    ir = lowpass(ir, 5000); ir /= np.sqrt(np.sum(ir ** 2))
    m = len(x) + n
    taille = 1 << (m - 1).bit_length()
    y = np.fft.irfft(np.fft.rfft(x, taille) * np.fft.rfft(ir, taille), taille)[:len(x)]
    return x + humide * y
mus = reverb(musique * pompe, 2.4, .28)
sfx = reverb(sons, 1.4, .18)
mix = mus * .9 + sfx * .8
# Une stéréo légère : les aigus un peu décalés.
haut = highpass(mix, 2500)
L = mix + .12 * haut; R = mix - .12 * haut
R = np.roll(R, int(.0007 * SR))
fondu = np.clip(temps / .05, 0, 1) * np.clip((DUREE - temps) / 1.6, 0, 1)
st = np.stack([L * fondu, R * fondu], 1)
st = np.tanh(st / (np.abs(st).max() * .6)) * .89
with wave.open(sortie, 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((st * 32767).astype(np.int16).tobytes())
print('ok', sortie)
