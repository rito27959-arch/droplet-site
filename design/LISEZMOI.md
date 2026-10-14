# Droplet Design

La source unique du design de la famille Droplet : **Droplet** (mobile), **Droplet Web**, **Droplet Drop**, **dropletmesh.app** et **drop.dropletmesh.app**.

On ne modifie qu'un fichier : `droplet-design.json`. Le générateur en tire le code de chaque plateforme.

```sh
node design/generer.mjs                       # écrit design/sorties/
node design/generer.mjs --css src/styles      # + le CSS de ce site
node design/generer.mjs --verifier            # échoue si une sortie n'est plus à jour
```

## Où va chaque sortie

| Sortie | Destination |
| --- | --- |
| `droplet-design.css` | `droplet-site/src/styles/` et `Drop-droplet/src/styles/`, importé en tête de `global.css` |
| `droplet_design.dart` | Droplet Drop : `apps/droplet_drop_flutter/lib/design/` |
| `droplet_design.dart` | Droplet et Droplet Web : `lib/design_system/` |

## Les règles

1. **Une couleur par produit, une liste d'accents pour tous.** La goutte (rose `#FF2D55`) est la couleur du logo, donc celle de Droplet. Le bleu liquide (`#168BFF` → `#34D8FF`) est celle de Droplet Drop. Quand on laisse choisir sa couleur, c'est la même liste, dans le même ordre, partout, et la goutte l'ouvre.
2. **Deux couches de neutres.**
   - **Système** : les gris d'Apple, pour l'interface de tous les jours (listes, réglages, discussions).
   - **Scène** : la nuit bleutée, le ciel étoilé et la lueur, pour les moments de marque (accueil, transferts, héros des sites).
3. **Inter Tight pour les titres, Inter pour le texte**, embarquées dans les apps (jamais téléchargées : les apps marchent sans Internet).
   - Les titres sont serrés de 2 %.
   - Au-delà de 48 px, ils passent en 600.
4. **Le contraste est une règle, pas un réglage.** `texte` et `texte2` tiennent 4,5:1 sur tous les fonds de leur couche. `texte3` ne porte jamais une information seule.
5. **Le mouvement décélère et reste court** (100 à 450 ms). Il ne dépasse sa cible que sous le doigt.
6. **La lueur** est la signature de la famille : un halo de la couleur du produit derrière ce qui compte.
