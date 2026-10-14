// DROPLET DESIGN — le générateur.
//
// Lit `droplet-design.json` (la seule source) et écrit :
//   • sorties/droplet_design.dart — pour les trois apps Flutter ;
//   • sorties/droplet-design.css  — pour les deux sites (et Droplet Web
//     s'il en a besoin un jour).
//
//   node design/generer.mjs                 → écrit les deux sorties
//   node design/generer.mjs --dart <dest>…  → copie aussi le Dart dans
//                                              chaque <dest> (un dossier)
//   node design/generer.mjs --css <dest>…   → idem pour le CSS
//   node design/generer.mjs --verifier      → échoue si une sortie n'est
//                                              plus à jour (pour la CI)
//
// Les couleurs à huit chiffres s'écrivent #AARRGGBB, comme en Dart.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ici = dirname(fileURLToPath(import.meta.url));
const J = JSON.parse(readFileSync(join(ici, 'droplet-design.json'), 'utf8'));
const sansCommentaires = (o) => Object.fromEntries(Object.entries(o).filter(([k]) => !k.startsWith('$')));

// ── Couleurs ─────────────────────────────────────────────────────────────
function argb(hex) {
  const h = hex.replace('#', '').toUpperCase();
  if (h.length === 6) return 'FF' + h;
  if (h.length === 8) return h;
  throw new Error(`Couleur invalide : ${hex}`);
}
const dartCouleur = (hex) => `Color(0x${argb(hex)})`;
function cssCouleur(hex) {
  const h = argb(hex);
  const a = parseInt(h.slice(0, 2), 16);
  if (a === 255) return '#' + h.slice(2).toLowerCase();
  const [r, g, b] = [2, 4, 6].map((i) => parseInt(h.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${+(a / 255).toFixed(3)})`;
}
const kebab = (s) => s.replace(/[A-Z0-9]+/g, (m) => '-' + m.toLowerCase());
const nombre = (n) => (Number.isInteger(n) ? `${n}` : `${n}`);
const dartNombre = (n) => (Number.isInteger(n) ? `${n}.0` : `${n}`);

const entete = (com) =>
  `${com} GÉNÉRÉ par droplet-site/design/generer.mjs à partir de droplet-design.json\n` +
  `${com} (Droplet Design ${J.version}). Ne pas modifier à la main : modifier le JSON,\n` +
  `${com} relancer le générateur, recopier la sortie dans chaque app.\n`;

// ── Dart ─────────────────────────────────────────────────────────────────
function dart() {
  const L = [];
  L.push(entete('//'));
  L.push(`// ignore_for_file: constant_identifier_names\n`);
  L.push(`import 'package:flutter/animation.dart' show Cubic;`);
  L.push(`import 'package:flutter/painting.dart';\n`);

  L.push(`/// La version du système, affichable dans « À propos ».`);
  L.push(`const String versionDropletDesign = '${J.version}';\n`);

  L.push(`/// La couleur de chaque produit.`);
  L.push(`abstract final class DDMarque {`);
  for (const [k, v] of Object.entries(sansCommentaires(J.marque))) L.push(`  static const Color ${k} = ${dartCouleur(v)};`);
  L.push(`}\n`);

  L.push(`/// Une couleur d'accent, en version claire et sombre.`);
  L.push(`class DDAccent {`);
  L.push(`  const DDAccent(this.cle, this.clair, this.sombre);`);
  L.push(`  final String cle;`);
  L.push(`  final Color clair;`);
  L.push(`  final Color sombre;`);
  L.push(`  Color pour({required bool sombre}) => sombre ? this.sombre : clair;`);
  L.push(`}\n`);
  L.push(`/// Les accents proposés à l'utilisateur, dans l'ordre de la famille.`);
  L.push(`abstract final class DDAccents {`);
  L.push(`  static const List<DDAccent> liste = [`);
  for (const a of J.accents.liste) L.push(`    DDAccent('${a.cle}', ${dartCouleur(a.clair)}, ${dartCouleur(a.sombre)}),`);
  L.push(`  ];`);
  L.push(`  static const String defaut = '${J.accents.defaut}';`);
  L.push(`  static DDAccent parCle(String? cle) => liste.firstWhere((a) => a.cle == cle, orElse: () => liste.firstWhere((a) => a.cle == defaut));`);
  L.push(`}\n`);

  const bloc = (nom, doc, o) => {
    L.push(`/// ${doc}`);
    L.push(`abstract final class ${nom} {`);
    for (const [k, v] of Object.entries(sansCommentaires(o))) L.push(`  static const Color ${k} = ${dartCouleur(v)};`);
    L.push(`}\n`);
  };
  bloc('DDClair', 'Les neutres « système », en clair.', J.neutres.clair);
  bloc('DDSombre', 'Les neutres « système », en sombre.', J.neutres.sombre);
  bloc('DDScene', 'Les neutres « scène » : la nuit des moments de marque.', J.neutres.scene);
  bloc('DDEtatsClair', 'Les couleurs d\'état sur fond clair.', J.etats.clair);
  bloc('DDEtatsSombre', 'Les couleurs d\'état sur fond sombre.', J.etats.sombre);

  const T = J.typo;
  L.push(`/// La typographie : Inter Tight pour les titres, Inter pour le texte.`);
  L.push(`abstract final class DDTypo {`);
  L.push(`  static const String titres = '${T.titres}';`);
  L.push(`  static const String texte = '${T.texte}';`);
  L.push(`  static const List<String> secours = [${T.secours.map((s) => `'${s}'`).join(', ')}];\n`);
  for (const [k, s] of Object.entries(sansCommentaires(T.echelle))) {
    const fam = s.famille === 'titres' ? 'titres' : 'texte';
    const champs = [
      `fontFamily: ${fam}`,
      `fontFamilyFallback: secours`,
      `fontSize: ${dartNombre(s.taille)}`,
      `fontWeight: FontWeight.w${s.graisse}`,
      `height: ${s.interligne}`,
      `letterSpacing: ${+(s.taille * s.approche).toFixed(3)}`,
    ];
    if (s.chiffresFixes) champs.push(`fontFeatures: [FontFeature.tabularFigures()]`);
    L.push(`  static const TextStyle ${k} = TextStyle(${champs.join(', ')});`);
  }
  L.push(`}\n`);

  const nombres = (nom, doc, o) => {
    L.push(`/// ${doc}`);
    L.push(`abstract final class ${nom} {`);
    for (const [k, v] of Object.entries(sansCommentaires(o))) L.push(`  static const double ${k} = ${dartNombre(v)};`);
    L.push(`}\n`);
  };
  nombres('DDEspace', 'Les espacements (grille de 4 points).', J.espace);
  nombres('DDRayons', 'Les arrondis.', J.rayons);

  const M = J.mouvement;
  L.push(`/// Le mouvement.`);
  L.push(`abstract final class DDMouvement {`);
  for (const k of ['instant', 'rapide', 'standard', 'lent', 'scene']) L.push(`  static const Duration ${k} = Duration(milliseconds: ${M[k]});`);
  L.push(`  static const Cubic courbe = Cubic(${M.courbe.join(', ')});`);
  L.push(`  static const Cubic sortie = Cubic(${M.sortie.join(', ')});`);
  L.push(`}\n`);

  nombres('DDLueur', 'La lueur, signature de la famille.', J.lueur);
  return L.join('\n');
}

// ── CSS ──────────────────────────────────────────────────────────────────
function css() {
  const L = [];
  L.push('/*\n' + entete(' *') + ' */\n');
  L.push(':root {');
  for (const [k, v] of Object.entries(sansCommentaires(J.marque))) L.push(`  --dd-${kebab(k)}: ${cssCouleur(v)};`);
  for (const a of J.accents.liste) {
    L.push(`  --dd-accent-${a.cle}: ${cssCouleur(a.sombre)};`);
    L.push(`  --dd-accent-${a.cle}-clair: ${cssCouleur(a.clair)};`);
  }
  for (const [mode, o] of [['clair', J.neutres.clair], ['sombre', J.neutres.sombre], ['scene', J.neutres.scene]])
    for (const [k, v] of Object.entries(sansCommentaires(o))) L.push(`  --dd-${mode}-${kebab(k)}: ${cssCouleur(v)};`);
  for (const [mode, o] of [['clair', J.etats.clair], ['sombre', J.etats.sombre]])
    for (const [k, v] of Object.entries(o)) L.push(`  --dd-${k}-${mode}: ${cssCouleur(v)};`);
  const pile = (f) => [`'${f} Variable'`, `'${f}'`, '-apple-system', 'BlinkMacSystemFont', ...J.typo.secours.map((s) => `'${s}'`), 'sans-serif'].join(', ');
  L.push(`  --dd-f-titres: ${pile(J.typo.titres)};`);
  L.push(`  --dd-f-texte: ${pile(J.typo.texte)};`);
  for (const [k, v] of Object.entries(sansCommentaires(J.typo.site))) L.push(`  --dd-${k}: ${v};`);
  for (const [k, s] of Object.entries(sansCommentaires(J.typo.echelle))) {
    L.push(`  --dd-${kebab(k)}-taille: ${s.taille / 16}rem;`);
    L.push(`  --dd-${kebab(k)}-graisse: ${s.graisse};`);
    L.push(`  --dd-${kebab(k)}-approche: ${s.approche}em;`);
  }
  for (const [k, v] of Object.entries(sansCommentaires(J.espace))) L.push(`  --dd-espace-${kebab(k)}: ${v}px;`);
  for (const [k, v] of Object.entries(sansCommentaires(J.rayons))) L.push(`  --dd-rayon-${kebab(k)}: ${v}px;`);
  const M = J.mouvement;
  for (const k of ['instant', 'rapide', 'standard', 'lent', 'scene']) L.push(`  --dd-duree-${k}: ${M[k]}ms;`);
  L.push(`  --dd-courbe: cubic-bezier(${M.courbe.join(', ')});`);
  L.push(`  --dd-sortie: cubic-bezier(${M.sortie.join(', ')});`);
  L.push(`  --dd-lueur-opacite: ${J.lueur.opacite};`);
  L.push(`  --dd-lueur-flou: ${J.lueur.flou}px;`);
  L.push('}\n');
  return L.join('\n');
}

// ── Écriture ─────────────────────────────────────────────────────────────
const sorties = { 'droplet_design.dart': dart(), 'droplet-design.css': css() };
const dossier = join(ici, 'sorties');
mkdirSync(dossier, { recursive: true });

const args = process.argv.slice(2);
if (args.includes('--verifier')) {
  let ok = true;
  for (const [nom, contenu] of Object.entries(sorties)) {
    const p = join(dossier, nom);
    if (!existsSync(p) || readFileSync(p, 'utf8') !== contenu) {
      console.error(`✗ ${nom} n'est plus à jour : relancer node design/generer.mjs`);
      ok = false;
    }
  }
  process.exit(ok ? 0 : 1);
}

for (const [nom, contenu] of Object.entries(sorties)) writeFileSync(join(dossier, nom), contenu);
let cible = null;
for (const a of args) {
  if (a === '--dart' || a === '--css') { cible = a; continue; }
  if (!cible) continue;
  const nom = cible === '--dart' ? 'droplet_design.dart' : 'droplet-design.css';
  mkdirSync(a, { recursive: true });
  writeFileSync(join(a, nom), sorties[nom]);
  console.log(`→ ${join(a, nom)}`);
}
console.log(`Droplet Design ${J.version} : ${Object.keys(sorties).join(', ')} écrits dans design/sorties/`);
