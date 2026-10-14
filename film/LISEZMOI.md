# Le film de la famille Droplet

Source du film de présentation affiché dans la section « Trois apps » des deux
sites (`public/video/droplet-film-*.mp4`).

- `film.html` : toutes les scènes, calculées par `rendu(t)` (60 i/s).
  `?f=h` = 1920×1080, `?f=v` = 1080×1920.
- `musique.py` : la bande-son et les bruitages, synthétisés (libres de droits),
  calés sur les instants de `film.html`.
- `rendre.py` : exporte les images avec Playwright et les assemble avec ffmpeg.

Rendu :

    cp /usr/share/fonts/truetype/noto/NotoColorEmoji.ttf .   # police des émojis
    python3 -m http.server 4430 &
    python3 rendre.py h && python3 rendre.py v
    python3 musique.py h son-h.wav && python3 musique.py v son-v.wav
    ffmpeg -i muet-h.mp4 -i son-h.wav -c:v copy -c:a aac -shortest droplet-film-16x9.mp4

## Les dix langues

Les textes sont dans `textes.js` (accroches reprises de `src/famille/textes.ts`).
`?l=en` choisit la langue ; `./lot.sh en es pt de it ru ar hi zh fr` rend tout
(paysage et vertical, son, versions web dans `web/`). Le chinois s'appuie sur la
police système « Noto Sans CJK SC ». Hors français, Droplet Web est montré en
anglais (son mode démonstration n'existe qu'en français et en anglais).
