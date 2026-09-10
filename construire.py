#!/usr/bin/env python3
"""
CONSTRUIT LA VERSION DÉPLOYABLE DU SITE.

    python3 construire.py        →  produit ./public/

── ⚠️ POURQUOI CE SCRIPT EXISTE ────────────────────────────────────

`index.html` est écrit SANS enveloppe : il commence directement par son
<title>, sans <!doctype>, sans <html>, sans <head> ni <body>. C'est le
format d'un artifact Claude — pratique pour prévisualiser une seule
partie du site pendant qu'on la travaille.

Un hébergeur statique, lui, ne fournit rien. Livré tel quel, le fichier
s'afficherait (les navigateurs réparent le balisage manquant) mais SANS
<meta viewport> — rendu comme une page de bureau réduite sur téléphone —
et SANS <meta charset> — tous les accents cassés. Sur un site en
français lu surtout sur mobile, ces deux oublis suffisent à le rendre
inutilisable.

Plutôt que de maintenir deux copies qui divergeraient dès la première
correction, on garde UNE source (`index.html`) et on l'habille ici.

── DÉPLOIEMENT (Vercel) ────────────────────────────────────────────

`vercel.json` à la racine dit à Vercel :
    buildCommand      = python3 construire.py
    outputDirectory   = public
Chaque `git push` sur `main` redéploie donc le site tout seul. Les
en-têtes de sécurité et la redirection `/droplet.apk` vivent aussi dans
`vercel.json` (et non dans des fichiers `_headers` / `_redirects`, qui
sont un format Cloudflare Pages).
"""

import shutil
from pathlib import Path

SOURCE = Path(__file__).parent
SORTIE = SOURCE / "public"

ENVELOPPE = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Droplet — une messagerie qui fonctionne sans internet, sans opérateur et sans serveur. Vos messages passent de téléphone en téléphone, de proche en proche, chiffrés.">
<meta name="theme-color" content="#0066E0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#070E18" media="(prefers-color-scheme: dark)">
<meta property="og:title" content="Droplet">
<meta property="og:description" content="Le réseau tombe. Le message, non.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:image" content="/ecrans/1-discussions.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230066E0' d='M12 2.4c3.6 4.2 6.4 7.6 6.4 10.9A6.4 6.4 0 0 1 12 19.7a6.4 6.4 0 0 1-6.4-6.4C5.6 10 8.4 6.6 12 2.4Z'/%3E%3C/svg%3E">
<style>
  /* La remise à zéro que l'enveloppe d'artifact appliquait pour nous. */
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img { max-width: 100%; }
</style>
<!--TETE-->
</head>
<body>
<!--CORPS-->
</body>
</html>
"""


def construire() -> None:
    brut = (SOURCE / "index.html").read_text(encoding="utf-8")

    # Ce qui doit monter dans <head> : le titre et les feuilles de style.
    # Tout le reste — y compris les <script> — reste dans <body>, où il
    # se trouve déjà et où l'ordre d'exécution est correct.
    tete: list[str] = []
    corps = brut

    for balise in ("<title>", "<link ", "<style>"):
        while True:
            debut = corps.find(balise)
            if debut == -1:
                break
            fin_balise = {
                "<title>": corps.find("</title>", debut) + len("</title>"),
                "<style>": corps.find("</style>", debut) + len("</style>"),
                "<link ": corps.find(">", debut) + 1,
            }[balise]
            tete.append(corps[debut:fin_balise])
            corps = corps[:debut] + corps[fin_balise:]

    if SORTIE.exists():
        shutil.rmtree(SORTIE)
    SORTIE.mkdir(parents=True)
    (SORTIE / "index.html").write_text(
        ENVELOPPE.replace("<!--TETE-->", "\n".join(tete))
                 .replace("<!--CORPS-->", corps.strip()),
        encoding="utf-8",
    )

    # Le runtime d'animation, s'il a été déposé.
    lottie = SOURCE / "lottie_light.min.js"
    if lottie.exists():
        shutil.copy2(lottie, SORTIE / lottie.name)

    # ⚠️ LES CAPTURES D'ÉCRAN. `index.html` les charge depuis `ecrans/` —
    # sans ce dossier dans la sortie, la vitrine du téléphone s'affiche
    # vide sur le site déployé alors qu'elle marche en local.
    ecrans = SOURCE / "ecrans"
    if ecrans.is_dir():
        shutil.copytree(ecrans, SORTIE / "ecrans")

    poids = (SORTIE / "index.html").stat().st_size
    print(f"→ {SORTIE / 'index.html'}  ({poids / 1024:.1f} Ko)")
    for f in sorted(SORTIE.rglob("*")):
        if f.is_file() and f.name != "index.html":
            print(f"→ {f.relative_to(SORTIE)}  ({f.stat().st_size / 1024:.1f} Ko)")


if __name__ == "__main__":
    construire()
