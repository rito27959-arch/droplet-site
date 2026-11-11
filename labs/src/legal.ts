// ============================================================================
// Legal notice and privacy policy of this website (not of the apps: each app
// has its own policy, linked below).
//
// Facts checked on 11 November 2026:
//   • host: Vercel Inc., address from vercel.com/legal/privacy-policy;
//   • e-mail to contact@dropletmesh.app is forwarded by ImprovMX (DNS records
//     of dropletmesh.app);
//   • the site loads nothing from other servers: fonts, videos, images and
//     scripts are all served by the site itself; no cookie, no analytics;
//   • Cameroon: Law No. 2024/017 of 23 December 2024 on the protection of
//     personal data, in force since 23 June 2026.
// ============================================================================

import type { Lang } from './products';
import { contact, founder } from './config';

export type Block = { h: string; p: string[] };
export type LegalPage = { title: string; description: string; updated: string; intro: string; blocks: Block[] };

const mail = contact.general ?? '';
const who = founder.name ?? 'the founder of Droplet Labs';

export const legal: Record<Lang, LegalPage> = {
  en: {
    title: 'Legal notice',
    description: 'Who publishes the Droplet Labs website, who hosts it, and the rules that apply to it.',
    updated: 'Last updated: 11 November 2026',
    intro: 'Droplet Labs is an independent initiative. It is not yet a registered company: the website is published by its founder, as an individual.',
    blocks: [
      { h: 'Publisher', p: [`${who}, founder of Droplet Labs, Yaoundé, Cameroon.`, `Contact: ${mail}`, 'Director of publication: the publisher.'] },
      { h: 'Host', p: ['Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States. Website: vercel.com.'] },
      { h: 'Intellectual property', p: [
        'The texts, the Droplet Labs name and logo, the design of this site and the images of the products belong to Droplet Labs and its founder. Reproducing them requires written permission.',
        'The typeface Schibsted Grotesk is used under the SIL Open Font License. The icons come from Lucide, under the ISC license.',
      ] },
      { h: 'Accuracy', p: ['The status of each project is described as checked on the date shown on its page. Projects change quickly; if something here is out of date, write to us and we will correct it.'] },
      { h: 'Applicable law', p: ['This website is subject to the law of the Republic of Cameroon.'] },
    ],
  },
  fr: {
    title: 'Mentions légales',
    description: 'Qui publie le site de Droplet Labs, qui l’héberge, et les règles qui s’y appliquent.',
    updated: 'Dernière mise à jour : 11 novembre 2026',
    intro: 'Droplet Labs est une initiative indépendante. Ce n’est pas encore une société immatriculée : le site est publié par son fondateur, à titre personnel.',
    blocks: [
      { h: 'Éditeur', p: [`${founder.name ?? 'Le fondateur de Droplet Labs'}, fondateur de Droplet Labs, Yaoundé, Cameroun.`, `Contact : ${mail}`, 'Directeur de la publication : l’éditeur.'] },
      { h: 'Hébergeur', p: ['Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis. Site : vercel.com.'] },
      { h: 'Propriété intellectuelle', p: [
        'Les textes, le nom et le logo Droplet Labs, le design de ce site et les images des produits appartiennent à Droplet Labs et à son fondateur. Toute reproduction demande une autorisation écrite.',
        'La police Schibsted Grotesk est utilisée sous licence SIL Open Font License. Les icônes viennent de Lucide, sous licence ISC.',
      ] },
      { h: 'Exactitude', p: ['L’état de chaque projet est décrit tel que vérifié à la date indiquée sur sa page. Les projets évoluent vite ; si une information n’est plus à jour, écrivez-nous et nous la corrigerons.'] },
      { h: 'Droit applicable', p: ['Ce site est soumis au droit de la République du Cameroun.'] },
    ],
  },
};

export const privacy: Record<Lang, LegalPage> = {
  en: {
    title: 'Privacy policy',
    description: 'What the Droplet Labs website collects (almost nothing), why, and your rights.',
    updated: 'Last updated: 11 November 2026',
    intro: 'This website has no account, no form, no cookie, no advertising and no audience measurement. Here is everything that touches your data, and nothing else.',
    blocks: [
      { h: 'What the host records', p: [
        'Like every website, the server that delivers these pages keeps technical logs: your IP address, your browser, the page requested and the time. These logs are kept by our host, Vercel, to run the service and protect it from attacks, under its own privacy policy (vercel.com/legal/privacy-policy). We do not use them to identify you.',
      ] },
      { h: 'What stays in your browser', p: [
        'If you choose light or dark mode, that choice is saved in your browser only, so that it is remembered on your next visit. It is never sent to us. You can erase it by clearing your browser’s data.',
      ] },
      { h: 'Nothing loaded from elsewhere', p: [
        'Fonts, images, videos and scripts are all served by this site itself. No third-party service (social network, advertising, statistics) is loaded when you read these pages.',
      ] },
      { h: 'If you write to us', p: [
        `Messages sent to ${mail} are forwarded to the founder’s mailbox by an e-mail forwarding service (ImprovMX). We keep them as long as needed to answer you, and we never share them or use them for anything else.`,
      ] },
      { h: 'Your rights', p: [
        'Under Cameroonian Law No. 2024/017 of 23 December 2024 on the protection of personal data, you can ask to access, correct or delete data concerning you, and object to its use.',
        `Write to ${mail}; we answer within 30 days.`,
      ] },
      { h: 'The apps', p: [
        'This policy covers this website only. Each app has its own policy: Droplet Messenger at dropletmesh.app/privacy, Droplet Drop at drop.dropletmesh.app/privacy.',
      ] },
    ],
  },
  fr: {
    title: 'Politique de confidentialité',
    description: 'Ce que le site de Droplet Labs collecte (presque rien), pourquoi, et vos droits.',
    updated: 'Dernière mise à jour : 11 novembre 2026',
    intro: 'Ce site n’a ni compte, ni formulaire, ni cookie, ni publicité, ni mesure d’audience. Voici tout ce qui touche à vos données, et rien d’autre.',
    blocks: [
      { h: 'Ce que l’hébergeur enregistre', p: [
        'Comme pour tout site, le serveur qui distribue ces pages tient des journaux techniques : votre adresse IP, votre navigateur, la page demandée et l’heure. Ces journaux sont conservés par notre hébergeur, Vercel, pour faire fonctionner le service et le protéger des attaques, selon sa propre politique (vercel.com/legal/privacy-policy). Nous ne nous en servons pas pour vous identifier.',
      ] },
      { h: 'Ce qui reste dans votre navigateur', p: [
        'Si vous choisissez le mode clair ou sombre, ce choix est enregistré dans votre navigateur seulement, pour être retrouvé à votre prochaine visite. Il ne nous est jamais envoyé. Vous pouvez l’effacer en vidant les données de votre navigateur.',
      ] },
      { h: 'Rien n’est chargé d’ailleurs', p: [
        'Polices, images, vidéos et scripts sont tous servis par ce site lui-même. Aucun service tiers (réseau social, publicité, statistiques) n’est chargé quand vous lisez ces pages.',
      ] },
      { h: 'Si vous nous écrivez', p: [
        `Les messages envoyés à ${mail} sont transférés vers la boîte du fondateur par un service de redirection d’e-mails (ImprovMX). Nous les gardons le temps de vous répondre, et nous ne les partageons ni ne les utilisons pour autre chose.`,
      ] },
      { h: 'Vos droits', p: [
        'Selon la loi camerounaise n° 2024/017 du 23 décembre 2024 portant protection des données à caractère personnel, vous pouvez demander l’accès, la rectification ou l’effacement des données qui vous concernent, et vous opposer à leur utilisation.',
        `Écrivez à ${mail} ; nous répondons sous 30 jours.`,
      ] },
      { h: 'Les applications', p: [
        'Cette politique concerne ce site seulement. Chaque app a la sienne : Droplet Messenger sur dropletmesh.app/privacy, Droplet Drop sur drop.dropletmesh.app/privacy.',
      ] },
    ],
  },
};
