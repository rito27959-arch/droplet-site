# Site vitrine de Droplet

Site statique en [Astro](https://astro.build), en 10 langues (le français à la
racine, les autres sous `/en/`, `/de/`, `/ar/`…).

## Lancer le site sur votre ordinateur

Il faut Node.js 20 ou plus récent.

```bash
npm install
npm run dev        # http://localhost:4321, se recharge à chaque modification
```

## Construire pour la mise en ligne

```bash
npm run build      # produit le dossier dist/
npm run preview    # pour vérifier dist/ avant de le publier
```

Le dossier `dist/` se publie tel quel sur Netlify, Vercel, Cloudflare Pages,
GitHub Pages ou n'importe quel hébergeur de fichiers.

## Ce qu'il faut modifier avant de publier

- `src/config.ts` : le lien du bouton « Télécharger » (fiche Play Store ou
  APK) et celui de la politique de confidentialité.
- `astro.config.mjs` : l'adresse définitive du site (`site:`), utilisée pour
  les aperçus de partage et les balises de langue.
- `public/apercu.png` : l'image affichée quand on partage le lien (1200 × 630).

## Où sont les choses

- `src/i18n/` : tous les textes, une langue par fichier. `fr.ts` est la
  référence ; les autres ont exactement les mêmes clés (TypeScript refuse de
  compiler s'il en manque une).
- `src/components/` : une section par fichier, dans l'ordre de la page :
  `Hero` (le titre et les trois téléphones qui s'écartent au défilement),
  `Galerie` (le carrousel « Les points forts »), `Zoom` (l'écran qui recule
  et révèle les téléphones autour), `Manifeste` (le texte qui s'allume mot
  après mot), `Parcours` (le message qui avance de relais en relais),
  `Fonctions`, `Confidentialite`, `Usages`, `Questions`, `Fin`.
- `src/components/Appareil.astro` et `Ecran.astro` : le téléphone et les
  écrans de l'application, dessinés en HTML (nets à toutes les tailles,
  traduits dans toutes les langues).
- `src/styles/global.css` : couleurs, typographie, boutons.

## Animations et accessibilité

- Le maillage du haut se met en pause hors de l'écran et quand l'onglet est
  caché ; le carrousel ne défile que lorsqu'il est visible, et s'arrête dès
  qu'on le touche.
- Avec « Réduire les animations » activé dans le système, tout est figé.
- Les questions fréquentes fonctionnent sans JavaScript.
- Les polices sont hébergées par le site : aucune requête vers Google.

## Couleur du thème

Les visiteurs choisissent la couleur du site (8 teintes, les mêmes que dans
l'application) depuis la pastille de la barre du haut ou sous les téléphones
de l'ouverture. Tout dérive de `--goutte` (`src/styles/global.css`) ; la
liste des teintes est dans `src/couleurs.ts`. Le choix est retenu par le
navigateur et réappliqué avant le premier affichage (`src/layouts/Base.astro`).

## Pages de documents

| Page | Français | Autres langues |
|---|---|---|
| Assistance | `/support/` | `/en/support/`, `/de/support/`… (traduite dans les 10 langues) |
| Sécurité | `/security/` | traduite dans les 10 langues |
| Confidentialité | `/privacy/` | français et anglais seulement ; les autres langues affichent l'anglais avec un bandeau qui l'explique |
| Conditions d'utilisation + mentions légales | `/terms/` | idem |

Le texte est dans `src/docs/<langue>.ts` (le français fait référence). Après
toute modification : `node --experimental-strip-types outils/verif_docs.mjs <langue>`
vérifie qu'une traduction a la même structure que le français.

**À régler avant la mise en ligne** (`src/config.ts`) : `EDITEUR` (le nom
juridiquement responsable) et `EMAIL_CONTACT` (une adresse que vous relevez).

## Publication

Le site est en ligne sur **https://dropletmesh.app**, publié par Vercel :
un `git push` sur `main` suffit, Vercel reconstruit et redéploie tout seul
(réglages dans `vercel.json`, dont la redirection `/droplet.apk` vers la
dernière version sur GitHub).

Pour construire en local : `npm install`, puis `npm run dev` (aperçu) ou
`npm run build` (le site final, dans `dist/`).
