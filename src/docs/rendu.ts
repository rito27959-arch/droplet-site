// Le texte des documents en HTML : gras, liens, champs de config, et la
// typographie française (espaces insécables avant ? ! : ; et dans « »).
import { EDITEUR, EMAIL_CONTACT, SITE_AFFICHE } from '../config';
import { chemin, type Langue } from '../i18n';

const echapper = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** « Bonjour ! » → espaces fines insécables, comme l'imprimerie française. */
function typographieFrancaise(s: string): string {
  return s
    .replace(/ ([?!;])/g, ' $1')
    .replace(/ :/g, ' :')
    .replace(/« /g, '« ')
    .replace(/ »/g, ' »');
}

/** Une chaîne de document → HTML sûr. `langue` est celle de la page (pour
 *  les liens), `ecritEn` celle du texte (pour la typographie). */
export function enLigne(brut: string, langue: Langue, ecritEn: Langue): string {
  let s = echapper(ecritEn === 'fr' ? typographieFrancaise(brut) : brut);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, texte: string, url: string) => {
    // Un lien interne (« /privacy/#tiers ») part vers la même langue.
    const href = url.startsWith('/') ? chemin(langue).replace(/\/$/, '') + url : url;
    return `<a href="${href}">${texte}</a>`;
  });
  s = s
    .replace(/\{EDITEUR\}/g, echapper(EDITEUR))
    .replace(/\{SITE\}/g, echapper(SITE_AFFICHE))
    .replace(/\{EMAIL\}/g, `<a href="mailto:${echapper(EMAIL_CONTACT)}">${echapper(EMAIL_CONTACT)}</a>`);
  return s;
}
