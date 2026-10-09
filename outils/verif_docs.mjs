// Vérifie qu'une traduction des documents a exactement la structure du
// français : mêmes sections, mêmes ancres, mêmes types de blocs, mêmes
// liens internes et mêmes champs {EDITEUR}/{EMAIL}/{SITE}.
// Usage : node --experimental-strip-types outils/verif_docs.mjs en
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const langue = process.argv[2];
// Node lit le TypeScript directement (--experimental-strip-types) : les
// fichiers de documents n'importent que des types, effacés à la lecture.
async function charger(l) {
  return (await import(pathToFileURL(resolve(`src/docs/${l}.ts`)).href))[l];
}
const fr = await charger('fr');
const autre = await charger(langue);
const erreurs = [];
const motifs = (s) => [...(s.match(/\{(EDITEUR|EMAIL|SITE)\}|\]\(([^)]+)\)/g) ?? [])].sort().join(' ');
const nbGras = (s) => (s.match(/\*\*/g) ?? []).length;
function texte(b) { return typeof b === 'string' ? [b] : b.liste ?? (b.intertitre ? [b.intertitre] : b.encadre ? [b.encadre] : b.tableau ? [...b.tableau.entetes, ...b.tableau.lignes.flat()] : []); }
function genre(b) { return typeof b === 'string' ? 'p' : Object.keys(b)[0] + (b.liste ? b.liste.length : b.tableau ? `${b.tableau.lignes.length}x${b.tableau.entetes.length}` : ''); }
for (const cle of Object.keys(autre)) {
  const a = fr[cle], b = autre[cle];
  if (!a) { erreurs.push(`document inconnu ${cle}`); continue; }
  for (const k of ['titre', 'court', 'chapo', 'description']) if (!b[k]) erreurs.push(`${cle}.${k} manquant`);
  if (a.sections.length !== b.sections.length) erreurs.push(`${cle}: ${b.sections.length} sections au lieu de ${a.sections.length}`);
  a.sections.forEach((sa, i) => {
    const sb = b.sections[i];
    if (!sb) return;
    if (sa.id !== sb.id) erreurs.push(`${cle} section ${i}: id ${sb.id} ≠ ${sa.id}`);
    if (sa.icone !== sb.icone) erreurs.push(`${cle}#${sa.id}: icone`);
    if (!!sa.resume !== !!sb.resume) erreurs.push(`${cle}#${sa.id}: resume`);
    if (sa.blocs.length !== sb.blocs.length) erreurs.push(`${cle}#${sa.id}: ${sb.blocs.length} blocs au lieu de ${sa.blocs.length}`);
    sa.blocs.forEach((ba, j) => {
      const bb = sb.blocs[j];
      if (!bb) return;
      if (genre(ba) !== genre(bb)) erreurs.push(`${cle}#${sa.id} bloc ${j}: ${genre(bb)} au lieu de ${genre(ba)}`);
      const ta = texte(ba), tb = texte(bb);
      ta.forEach((x, k) => {
        const y = tb[k] ?? '';
        if (motifs(x) !== motifs(y)) erreurs.push(`${cle}#${sa.id} bloc ${j}.${k}: liens/champs « ${motifs(y)} » au lieu de « ${motifs(x)} »`);
        if (nbGras(y) % 2) erreurs.push(`${cle}#${sa.id} bloc ${j}.${k}: ** non refermé`);
        if (x && !y) erreurs.push(`${cle}#${sa.id} bloc ${j}.${k}: vide`);
      });
    });
  });
}
console.log(erreurs.length ? erreurs.join('\n') : `OK ${langue}`);
process.exit(erreurs.length ? 1 : 0);
