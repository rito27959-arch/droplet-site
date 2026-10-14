#!/bin/bash
# Rend le film dans chaque langue (paysage et vertical en parallèle), puis
# ajoute le son et prépare les versions web.
cd /tmp/claude-0/film2
mkdir -p final web
for L in "$@"; do
  LANGUE=$L python3 rendre.py h > log-$L-h.txt 2>&1 &
  LANGUE=$L python3 rendre.py v > log-$L-v.txt 2>&1 &
  wait
  for f in h v; do
    n=$([ $f = h ] && echo 16x9 || echo 9x16)
    ffmpeg -y -loglevel error -i muet-$L-$f.mp4 -i son-$f.wav -c:v copy -c:a aac -b:a 256k -shortest -movflags +faststart final/droplet-film-$L-$n.mp4
    ffmpeg -y -loglevel error -i final/droplet-film-$L-$n.mp4 -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -c:a aac -b:a 160k -movflags +faststart web/droplet-film-$L-$n.mp4
    ffmpeg -y -loglevel error -ss 5.8 -i web/droplet-film-$L-$n.mp4 -frames:v 1 -c:v libwebp -quality 85 web/droplet-film-$L-$n.webp
  done
  echo "$L fini $(date +%H:%M)" >> lot.log
done
echo TOUT >> lot.log
