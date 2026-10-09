// LES COULEURS DU THÈME — les mêmes que dans l'application.
//
// Reprises de `ReglagesApparence.accents` (Flutter), dans leur version
// sombre d'iOS : plus lumineuses, elles restent lisibles sur les sections
// noires comme sur les claires. Le rose, la couleur de la goutte, ouvre la
// liste : c'est l'identité du site, celle qu'on voit sans rien choisir.

export const COULEURS = [
  { cle: 'rose', hex: '#ff2d55' },
  { cle: 'bleu', hex: '#0a84ff' },
  { cle: 'indigo', hex: '#5e5ce6' },
  { cle: 'violet', hex: '#bf5af2' },
  { cle: 'orange', hex: '#ff9f0a' },
  { cle: 'vert', hex: '#30d158' },
  { cle: 'menthe', hex: '#00c7be' },
  { cle: 'graphite', hex: '#8e8e93' },
] as const;

export type CleCouleur = (typeof COULEURS)[number]['cle'];

/** La clé sous laquelle le navigateur se souvient du choix. */
export const CLE_STOCKAGE = 'droplet:couleur';
