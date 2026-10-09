// Les documents dans une langue donnée.
//
// ⚠️ LA CONFIDENTIALITÉ ET LES CONDITIONS N'EXISTENT QU'EN FRANÇAIS ET EN
// ANGLAIS, DÉLIBÉRÉMENT — c'est la règle de l'application (voir
// `politique_texte.dart`). Un texte juridique engage : une tournure
// approximative en arabe ou en chinois créerait une obligation que personne
// n'a voulue. Les autres langues reçoivent la version anglaise, et la page
// le dit en une ligne, dans la langue du lecteur, au lieu de le cacher.
// La sécurité et l'assistance, elles, sont traduites partout.
import type { Langue } from '../i18n';
import type { CleDoc, Docs, PageDoc } from './types';
import { fr } from './fr';
import { en } from './en';
import { de } from './de';
import { es } from './es';
import { it } from './it';
import { pt } from './pt';
import { ru } from './ru';
import { zh } from './zh';
import { ar } from './ar';
import { hi } from './hi';

const TRADUITS: Record<Exclude<Langue, 'fr' | 'en'>, Pick<Docs, 'security' | 'support'>> = {
  de, es, it, pt, ru, zh, ar, hi,
};

export const CLES_DOCS: CleDoc[] = ['support', 'security', 'privacy', 'terms'];

/** Le document, et la langue dans laquelle il est réellement écrit. */
export function doc(langue: Langue, cle: CleDoc): { page: PageDoc; ecritEn: Langue } {
  if (langue === 'fr') return { page: fr[cle], ecritEn: 'fr' };
  if (langue === 'en') return { page: en[cle], ecritEn: 'en' };
  if (cle === 'security' || cle === 'support') return { page: TRADUITS[langue][cle], ecritEn: langue };
  return { page: en[cle], ecritEn: 'en' };
}
