// LA FORME DES PAGES DE DOCUMENTS — confidentialité, conditions, sécurité,
// assistance.
//
// Chaque langue fournit un objet `Docs`. Le texte reste lisible d'un bloc,
// dans l'ordre où on le lit, comme la politique dans l'application : un
// document qu'on relit section par section, pas soixante clés éparpillées.
//
// Dans les chaînes :
//   • **gras**
//   • [texte](/security/#ancre) — un lien interne commence par « / » : il
//     est réécrit vers la langue de la page (« /en/security/#ancre »).
//   • {EDITEUR}, {EMAIL}, {SITE} — remplacés par les valeurs de config.ts.

export type Bloc =
  | string
  | { liste: string[] }
  | { intertitre: string }
  | { encadre: string }
  | { tableau: { entetes: string[]; lignes: string[][] } };

export interface Section {
  /** L'ancre de la section (#…). Identique dans toutes les langues. */
  id: string;
  titre: string;
  /** Pour les cartes de l'assistance : une phrase qui résume la section. */
  resume?: string;
  /** Pour les cartes de l'assistance : le nom d'une icône (voir DocPage). */
  icone?: string;
  blocs: Bloc[];
}

export interface PageDoc {
  titre: string;
  /** Le titre court, pour le fil d'Ariane et le pied de page. */
  court: string;
  chapo: string;
  description: string;
  sections: Section[];
}

export interface Docs {
  privacy: PageDoc;
  terms: PageDoc;
  security: PageDoc;
  support: PageDoc;
}

export type CleDoc = keyof Docs;

/** Les documents juridiques n'existent qu'en français et en anglais : voir
 *  `src/docs/index.ts`. */
export const DOCS_JURIDIQUES: CleDoc[] = ['privacy', 'terms'];

/** La date de dernière mise à jour des documents, au format ISO. */
export const MISE_A_JOUR = '2026-10-09';
