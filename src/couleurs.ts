// LES COULEURS DU THÈME — celles de toute la famille Droplet.
//
// Lues dans `design/droplet-design.json`, la source commune aux apps et aux
// sites (Droplet Design) : même liste, même ordre que dans les réglages
// d'apparence de Droplet. On prend la version sombre d'iOS, plus lumineuse,
// lisible sur les sections noires comme sur les claires ; la goutte, elle,
// garde la teinte exacte du logo. Elle ouvre la liste : c'est l'identité du
// site, celle qu'on voit sans rien choisir.
import design from '../design/droplet-design.json';

type Cle = (typeof design.accents.liste)[number]['cle'];

export const COULEURS: { cle: Cle; hex: string }[] = design.accents.liste.map((a) => ({
  cle: a.cle,
  hex: (a.cle === design.accents.defaut ? design.marque.goutte : a.sombre).toLowerCase(),
}));

export type CleCouleur = Cle;

/** La clé sous laquelle le navigateur se souvient du choix. */
export const CLE_STOCKAGE = 'droplet:couleur';
