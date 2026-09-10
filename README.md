# Site vitrine de Droplet

La page de présentation de **Droplet** — une messagerie qui fait passer les
messages de téléphone en téléphone, de proche en proche, sans antenne, sans
opérateur et sans serveur.

## Comment ça marche

- **`index.html`** est l'unique source. Il est écrit sans enveloppe HTML
  (`<!doctype>`, `<head>`, `<body>`) pour pouvoir être prévisualisé tel quel
  comme artifact pendant qu'on travaille une section.
- **`construire.py`** l'habille de l'enveloppe (meta charset, viewport,
  Open Graph, favicon), remonte `<title>` / `<link>` / `<style>` dans le
  `<head>`, et copie les captures d'écran + le runtime d'animation dans
  `public/`.
- **`vercel.json`** dit à Vercel de lancer `python3 construire.py` et de
  servir `public/`. Il porte aussi les en-têtes de sécurité et la
  redirection `/droplet.apk` → dernière release GitHub.

## Modifier le site

```sh
# éditer index.html, puis prévisualiser en local :
python3 construire.py
python3 -m http.server -d public 8000   # http://localhost:8000
```

Un `git push` sur `main` suffit ensuite : **Vercel reconstruit et
redéploie automatiquement**.

## Déploiement (première fois)

1. Sur [vercel.com](https://vercel.com) → **Add New… → Project** → importer
   ce dépôt (`rito27959-arch/droplet-site`).
2. Vercel lit `vercel.json` : rien à configurer (Framework = Other,
   Build = `python3 construire.py`, Output = `public`).
3. **Deploy.** Les push suivants se déploient tout seuls.
4. Domaine : Project → **Settings → Domains** → ajouter
   `proche-en-proche.xyz` (ou le domaine retenu) et suivre les
   instructions DNS.

## Contenu

| Fichier / dossier        | Rôle                                             |
|--------------------------|--------------------------------------------------|
| `index.html`             | Source unique de la page                          |
| `construire.py`          | Build : enveloppe + copie des assets → `public/`  |
| `vercel.json`            | Build command, output, en-têtes, redirections     |
| `ecrans/`                | Captures d'écran de l'app (vitrine du téléphone)  |
| `lottie_light.min.js`    | Runtime d'animation (chargé seulement si présent) |
