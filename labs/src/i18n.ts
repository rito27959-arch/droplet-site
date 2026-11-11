// ============================================================================
// The words of the site, in English and French.
// ============================================================================

import type { Lang } from './products';
export type { Lang };

export const langs: Lang[] = ['en', 'fr'];

/** The address of a page in a language: '/about' → '/fr/about'. */
export function href(lang: Lang, path: string): string {
  const p = path === '/' ? '' : path;
  return lang === 'en' ? p || '/' : `/fr${p}`;
}

/** '/fr/vision.html' → '/fr/vision', '/index.html' → '/' (build output is .html files). */
export function cleanPath(pathname: string): string {
  return pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
}

/** The same page in the other language. */
export function switchHref(lang: Lang, pathname: string): string {
  const bare = pathname.replace(/^\/fr(?=\/|$)/, '') || '/';
  return href(lang === 'en' ? 'fr' : 'en', bare);
}

const en = {
  langName: 'English',
  otherLang: 'Français',
  skip: 'Skip to content',
  nav: {
    products: 'Projects',
    innovation: 'Innovation',
    vision: 'Vision',
    about: 'About',
    founder: 'Founder',
    contact: 'Contact',
    menu: 'Open menu',
    close: 'Close menu',
    home: 'Droplet Labs, home',
  },
  status: 'An independent technology initiative in development. Not yet a registered company.',
  footer: {
    tagline: 'Building technology for a more connected future.',
    rights: 'Droplet Labs',
  },
  theFounder: 'the founder',
  TheFounder: 'The founder',
  portraitAlt: 'Portrait of the founder of Droplet Labs',
  roleTitle: 'Founder and software developer',

  home: {
    title: 'Droplet Labs: technology for a more connected future',
    description:
      'Droplet Labs is an independent technology initiative from Yaoundé, Cameroon, building encrypted messaging, local file sharing, education and AI tools.',
    headline: 'Technology should move humanity forward.',
    lead: 'Droplet Labs is an independent initiative from Yaoundé that builds software for the moments when connection is scarce: messages that travel without the internet, files that move between nearby devices, learning that fits in a phone.',
    ctaProducts: 'Explore our projects',
    ctaFounder: 'Meet the founder',
    introTitle: 'Five projects, one question',
    intro:
      'Every project here starts from the same question: what does good software look like when data is expensive, power is unreliable and the nearest server is far away? The answers are working code, published and open to inspection.',
    manifesto:
      'Most software is built for a fast, cheap, permanent connection. Much of the world does not have one. We build for that world first: messages that hop from phone to phone, files that cross a room without the internet, learning that fits on a modest device.',
    scroll: 'Scroll',
    chapter: 'Project',
    discover: 'Discover',
    storyTitle: 'One idea, from a phone to a whole room',
    story: [
      { title: 'No signal. The message still arrives.', text: 'Droplet Messenger passes an encrypted message from phone to phone over Bluetooth and local Wi-Fi until it reaches the right person.', media: 'messenger', accent: '#ff3b5c' },
      { title: 'The same chats, on a bigger screen.', text: 'Droplet Web links to the phone’s account: photos, videos and voice notes, in both directions.', media: 'messenger-web', accent: '#ff3b5c' },
      { title: 'Any file, to any device nearby.', text: 'Droplet Drop sends folders straight over the local network, from Android to Windows, Mac or Linux.', media: 'drop', accent: '#2e8bff' },
      { title: 'A whole room, in a single send.', text: 'Group Drop sends the same files to thirty devices at once, each copy checked block by block.', media: 'drop-group', accent: '#2e8bff' },
    ],
    storyNote: 'Footage from the Droplet product film.',
    statsTitle: 'Measured, not claimed',
    stats: [
      { value: 5, suffix: '', label: 'projects built and published since July 2026' },
      { value: 500, suffix: '+', label: 'commits across the public repositories' },
      { value: 5, suffix: '', label: 'programming languages: Dart, Kotlin, Rust, Java, TypeScript' },
      { value: 4, suffix: '', label: 'systems Droplet Drop runs on: Android, Windows, macOS, Linux' },
    ],
    statsNote: 'Counted from the repositories on 11 November 2026.',
    timelineTitle: 'Four months of work',
    timeline: [
      { when: 'July 2026', what: 'Work begins on the learning app that becomes Kunfox.' },
      { when: 'August 2026', what: 'Droplet Messenger begins.' },
      { when: 'September 2026', what: 'First NexFleet version; Droplet servers go live.' },
      { when: 'October 2026', what: 'Droplet Drop, Droplet Web and Parole begin.' },
      { when: 'November 2026', what: 'Kunfox 1.0.5 is released. Droplet Labs gets its website.' },
    ],
    productsTitle: 'Projects',
    productsLead: 'What exists today, and how far along each one is.',
    allProducts: 'All projects',
    philosophyTitle: 'How we build',
    principles: [
      {
        title: 'Offline first',
        text: 'A feature that only works on a perfect connection is not finished. The local network, Bluetooth and a delayed mailbox are first-class paths.',
      },
      {
        title: 'Private by construction',
        text: 'Encryption happens on the device. Servers carry what they cannot read, and keep as little as they can.',
      },
      {
        title: 'Honest about progress',
        text: 'A beta is called a beta. What is planned is written as planned. Every claim on this site can be checked against the code.',
      },
    ],
    founderTitle: 'The person behind it',
    founderText:
      'Droplet Labs is, for now, the work of one developer who designs, writes, tests and ships each project, from the encryption code to the website you are reading.',
    founderLink: 'Read the founder’s page',
    visionTitle: 'Where this is going',
    visionText:
      'Today, Droplet Labs is an independent initiative. The plan is to become a formal organisation, then a team, then an ecosystem of tools that others can build on. None of those later steps has happened yet.',
    visionLink: 'See the roadmap',
    contactTitle: 'Get in touch',
    contactText: 'Questions, collaborations, partnerships or a project idea: write directly.',
    contactLink: 'Contact page',
  },

  about: {
    title: 'About Droplet Labs',
    description: 'How Droplet Labs started, what it believes about technology, and what it hopes to become.',
    headline: 'Built in Yaoundé, for the places networks forget.',
    originTitle: 'Origin',
    origin: [
      'Droplet Labs began with Droplet Messenger: an attempt to make a messaging app that keeps working when the network does not. Solving that one problem led to the others. Files needed to move between nearby devices, so Droplet Drop followed. Learning and preparation needed tools that respect a small budget, so Kunfox and Parole followed.',
      'The name groups these projects under one roof. It is not yet a company: there is no registration, no staff and no investors. There is a body of working software and a plan.',
    ],
    founderTitle: 'The founder',
    founder:
      'One developer leads every project, across mobile apps, servers, desktop software and websites, in Dart, Kotlin, Rust, Java and TypeScript.',
    founderLink: 'Read the full biography',
    motivationTitle: 'Why',
    motivation:
      'Much of the world’s software assumes a fast, cheap and permanent connection. Much of the world does not have one. Droplet Labs builds for that gap first, because software that works there tends to work everywhere.',
    philosophyTitle: 'A philosophy of technology',
    philosophy: [
      'Useful before impressive: a feature earns its place by solving a real problem.',
      'Private by default: the less a server knows, the less there is to leak.',
      'Measured, not assumed: performance and reliability claims come from tests that actually ran.',
    ],
    ambitionsTitle: 'Long-term ambitions',
    ambitions:
      'To turn the shared foundations of these projects, the encrypted identity, the mesh engine and the file transfer engine, into building blocks that other developers can use. The roadmap describes the steps, in order.',
    visionLink: 'Read the vision',
  },

  products: {
    title: 'Projects',
    description: 'Droplet Messenger, Droplet Drop, Kunfox, Parole and NexFleet: what each project does and how far along it is.',
    headline: 'Projects',
    lead: 'Each project is described as it stands today. Technologies are those found in its code; anything not yet available is listed under the roadmap.',
    statusLabel: 'Status',
    objectivesTitle: 'Objectives',
    technologiesTitle: 'Technologies',
    statusTitle: 'Current status',
    roadmapTitle: 'Roadmap',
    websiteTitle: 'Official website',
    noWebsite: 'No public website yet.',
    visit: 'Visit',
    back: 'All projects',
    next: 'Next project',
    checked: 'Facts checked on 11 November 2026.',
  },

  innovation: {
    title: 'Innovation and technology',
    description: 'The four strategic areas Droplet Labs intends to grow into, and what each one aims to achieve.',
    headline: 'Four areas to grow into',
    lead: 'These are strategic ambitions, not departments. Droplet Labs has no teams yet; each area describes where effort will go and what it should produce.',
    areas: [
      {
        icon: 'code',
        title: 'Software engineering',
        now: 'Today: mobile, desktop and server software shipped by one developer, with automated builds.',
        aim: 'Aim: shared libraries, automated tests on every component and a release process that catches errors before users do.',
      },
      {
        icon: 'brain',
        title: 'Artificial intelligence',
        now: 'Today: AI used where it helps a person directly, such as the question-asking jury in Parole.',
        aim: 'Aim: assistants that run with little bandwidth, explain their sources and never invent results.',
      },
      {
        icon: 'network',
        title: 'Digital infrastructure',
        now: 'Today: small servers for accounts, encrypted mailboxes and calls, and a peer-to-peer mesh between phones.',
        aim: 'Aim: infrastructure that degrades gracefully, scales step by step and keeps working when parts of it are cut off.',
      },
      {
        icon: 'flask',
        title: 'Research and development',
        now: 'Today: experiments in local networking, encrypted file transfer and native interfaces.',
        aim: 'Aim: publish what is learned, measure every claim and turn the experiments that work into products.',
      },
    ],
  },

  founder: {
    title: 'The founder of Droplet Labs',
    description: 'The founder and software developer behind Droplet Labs: biography, development philosophy, current projects and ambitions.',
    bioTitle: 'Biography',
    bio: [
      'Based in Yaoundé, Cameroon, the founder of Droplet Labs is a self-directed software developer. Every project on this site was designed and built by him, from the user interface to the servers that run it.',
      'The work spans several languages and platforms: Flutter and Dart for mobile apps, Kotlin for native Android, Rust for the file transfer engine, Java for fleet management, and TypeScript and Astro for the websites.',
    ],
    philosophyTitle: 'Development philosophy',
    philosophy: [
      'Start from the hardest real condition: no network, an old phone, a small budget.',
      'Ship, then measure. A feature is done when it has been tested, not when it has been written.',
      'Write it down: each project keeps its decisions and their reasons next to the code.',
    ],
    projectsTitle: 'Current projects',
    ambitionsTitle: 'Long-term ambitions',
    ambitions:
      'To turn Droplet Labs from an individual initiative into a formal organisation with a team, and to build technology from Cameroon that is used well beyond it.',
  },

  vision: {
    title: 'Vision and roadmap',
    description: 'The four phases Droplet Labs plans to go through, from independent development to an international technology ecosystem.',
    headline: 'A roadmap in four phases',
    lead: 'Only the first phase is under way. The others are plans, in the order they are meant to happen.',
    current: 'Under way',
    planned: 'Planned',
    phases: [
      {
        title: 'Independent development and product experimentation',
        text: 'Build, release and test the first products with real users. Learn which ones matter most.',
      },
      {
        title: 'Establishment of a formal organisation',
        text: 'Register Droplet Labs as a legal entity, with clear governance and accounts.',
      },
      {
        title: 'Team building and expanded capabilities',
        text: 'Bring in engineers and designers, and take on work that one person cannot do alone.',
      },
      {
        title: 'An international technology ecosystem',
        text: 'Offer the shared foundations, identity, mesh networking and file transfer, to developers and organisations beyond Cameroon.',
      },
    ],
  },

  contact: {
    title: 'Contact Droplet Labs',
    description: 'How to reach Droplet Labs for general questions, collaborations, partnerships and project inquiries.',
    headline: 'Write to us',
    lead: 'Every message is read by the founder. Replies may take a few days.',
    topics: [
      { key: 'general', title: 'General inquiries', text: 'Questions about Droplet Labs or one of its projects.' },
      { key: 'collaboration', title: 'Collaboration', text: 'Developers, designers or researchers who would like to work together.' },
      { key: 'partnerships', title: 'Partnerships', text: 'Organisations interested in a partnership. Droplet Labs is not yet incorporated; we will say so plainly in any discussion.' },
      { key: 'projects', title: 'Project inquiries', text: 'Ideas, bugs or requests about a specific project.' },
    ],
    subject: {
      general: 'General inquiry',
      collaboration: 'Collaboration',
      partnerships: 'Partnership',
      projects: 'Project inquiry',
    },
    write: 'Write an email',
    elsewhere: 'Elsewhere',
    noAddress: 'No address is published yet.',
  },

  notFound: {
    title: 'Page not found',
    description: 'This page does not exist.',
    headline: 'This page does not exist.',
    text: 'The link may be old, or the address mistyped.',
    back: 'Back to the home page',
  },
};

const fr: typeof en = {
  langName: 'Français',
  otherLang: 'English',
  skip: 'Aller au contenu',
  nav: {
    products: 'Projets',
    innovation: 'Innovation',
    vision: 'Vision',
    about: 'À propos',
    founder: 'Fondateur',
    contact: 'Contact',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
    home: 'Droplet Labs, accueil',
  },
  status: 'Une initiative technologique indépendante en développement. Pas encore une société immatriculée.',
  footer: {
    tagline: 'Construire la technologie d’un avenir plus connecté.',
    rights: 'Droplet Labs',
  },
  theFounder: 'le fondateur',
  TheFounder: 'Le fondateur',
  portraitAlt: 'Portrait du fondateur de Droplet Labs',
  roleTitle: 'Fondateur et développeur logiciel',

  home: {
    title: 'Droplet Labs : la technologie d’un avenir plus connecté',
    description:
      'Droplet Labs est une initiative technologique indépendante de Yaoundé, au Cameroun : messagerie chiffrée, partage de fichiers local, éducation et outils d’IA.',
    headline: 'La technologie doit faire avancer l’humanité.',
    lead: 'Droplet Labs est une initiative indépendante de Yaoundé qui construit des logiciels pour les moments où la connexion manque : des messages qui voyagent sans Internet, des fichiers qui passent d’un appareil proche à l’autre, un apprentissage qui tient dans un téléphone.',
    ctaProducts: 'Découvrir nos projets',
    ctaFounder: 'Rencontrer le fondateur',
    introTitle: 'Cinq projets, une question',
    intro:
      'Chaque projet part de la même question : à quoi ressemble un bon logiciel quand les données coûtent cher, que le courant est incertain et que le serveur le plus proche est loin ? Les réponses sont du code qui fonctionne, publié et ouvert à l’examen.',
    manifesto:
      'La plupart des logiciels sont faits pour une connexion rapide, bon marché et permanente. Une grande partie du monde n’en a pas. Nous construisons d’abord pour ce monde-là : des messages qui sautent d’un téléphone à l’autre, des fichiers qui traversent une salle sans Internet, un apprentissage qui tient sur un appareil modeste.',
    scroll: 'Défiler',
    chapter: 'Projet',
    discover: 'Découvrir',
    storyTitle: 'Une idée, d’un téléphone à toute une salle',
    story: [
      { title: 'Pas de réseau. Le message arrive quand même.', text: 'Droplet Messenger fait passer un message chiffré de téléphone en téléphone, par Bluetooth et Wi-Fi local, jusqu’à la bonne personne.', media: 'messenger', accent: '#ff3b5c' },
      { title: 'Les mêmes discussions, sur grand écran.', text: 'Droplet Web se relie au compte du téléphone : photos, vidéos et messages vocaux, dans les deux sens.', media: 'messenger-web', accent: '#ff3b5c' },
      { title: 'N’importe quel fichier, à tout appareil proche.', text: 'Droplet Drop envoie des dossiers directement par le réseau local, d’Android à Windows, Mac ou Linux.', media: 'drop', accent: '#2e8bff' },
      { title: 'Toute une salle, en un seul envoi.', text: 'Group Drop envoie les mêmes fichiers à trente appareils à la fois, chaque copie vérifiée bloc par bloc.', media: 'drop-group', accent: '#2e8bff' },
    ],
    storyNote: 'Images tirées du film de présentation de Droplet.',
    statsTitle: 'Mesuré, pas promis',
    stats: [
      { value: 5, suffix: '', label: 'projets construits et publiés depuis juillet 2026' },
      { value: 500, suffix: '+', label: 'commits dans les dépôts publics' },
      { value: 5, suffix: '', label: 'langages : Dart, Kotlin, Rust, Java, TypeScript' },
      { value: 4, suffix: '', label: 'systèmes pour Droplet Drop : Android, Windows, macOS, Linux' },
    ],
    statsNote: 'Compté dans les dépôts le 11 novembre 2026.',
    timelineTitle: 'Quatre mois de travail',
    timeline: [
      { when: 'Juillet 2026', what: 'Début de l’app d’apprentissage qui deviendra Kunfox.' },
      { when: 'Août 2026', what: 'Droplet Messenger commence.' },
      { when: 'Septembre 2026', what: 'Première version de NexFleet ; les serveurs Droplet sont en ligne.' },
      { when: 'Octobre 2026', what: 'Droplet Drop, Droplet Web et Parole commencent.' },
      { when: 'Novembre 2026', what: 'Kunfox 1.0.5 est publiée. Droplet Labs a son site.' },
    ],
    productsTitle: 'Projets',
    productsLead: 'Ce qui existe aujourd’hui, et où en est chacun.',
    allProducts: 'Tous les projets',
    philosophyTitle: 'Notre façon de construire',
    principles: [
      {
        title: 'Hors ligne d’abord',
        text: 'Une fonction qui ne marche qu’avec une connexion parfaite n’est pas finie. Le réseau local, le Bluetooth et une boîte aux lettres différée sont des chemins à part entière.',
      },
      {
        title: 'Privé par construction',
        text: 'Le chiffrement se fait sur l’appareil. Les serveurs transportent ce qu’ils ne peuvent pas lire, et gardent le moins possible.',
      },
      {
        title: 'Honnête sur l’avancement',
        text: 'Une bêta s’appelle une bêta. Ce qui est prévu est écrit comme prévu. Chaque affirmation de ce site se vérifie dans le code.',
      },
    ],
    founderTitle: 'La personne derrière',
    founderText:
      'Droplet Labs est, pour l’instant, le travail d’un seul développeur qui conçoit, écrit, teste et publie chaque projet, du code de chiffrement jusqu’au site que vous lisez.',
    founderLink: 'Lire la page du fondateur',
    visionTitle: 'Vers où nous allons',
    visionText:
      'Aujourd’hui, Droplet Labs est une initiative indépendante. Le projet est de devenir une organisation officielle, puis une équipe, puis un écosystème d’outils sur lesquels d’autres pourront bâtir. Aucune de ces étapes suivantes n’a encore eu lieu.',
    visionLink: 'Voir la feuille de route',
    contactTitle: 'Nous écrire',
    contactText: 'Questions, collaborations, partenariats ou idée de projet : écrivez directement.',
    contactLink: 'Page de contact',
  },

  about: {
    title: 'À propos de Droplet Labs',
    description: 'Comment Droplet Labs a commencé, ce qu’elle pense de la technologie et ce qu’elle espère devenir.',
    headline: 'Construit à Yaoundé, pour les endroits que les réseaux oublient.',
    originTitle: 'Origine',
    origin: [
      'Droplet Labs a commencé avec Droplet Messenger : une messagerie qui continue de marcher quand le réseau lâche. Résoudre ce problème a mené aux autres. Les fichiers devaient passer d’un appareil proche à l’autre : Droplet Drop a suivi. Apprendre et se préparer demandait des outils qui respectent un petit budget : Kunfox et Parole ont suivi.',
      'Le nom réunit ces projets sous un même toit. Ce n’est pas encore une société : ni immatriculation, ni salariés, ni investisseurs. Il y a un ensemble de logiciels qui fonctionnent, et un plan.',
    ],
    founderTitle: 'Le fondateur',
    founder:
      'Un seul développeur mène chaque projet, des apps mobiles aux serveurs, des logiciels de bureau aux sites web, en Dart, Kotlin, Rust, Java et TypeScript.',
    founderLink: 'Lire la biographie complète',
    motivationTitle: 'Pourquoi',
    motivation:
      'Beaucoup de logiciels supposent une connexion rapide, bon marché et permanente. Une grande partie du monde n’en a pas. Droplet Labs construit d’abord pour cet écart, parce qu’un logiciel qui marche là marche en général partout.',
    philosophyTitle: 'Une philosophie de la technologie',
    philosophy: [
      'Utile avant d’être impressionnant : une fonction mérite sa place en résolvant un vrai problème.',
      'Privé par défaut : moins un serveur en sait, moins il y a à fuiter.',
      'Mesuré, pas supposé : les promesses de performance et de fiabilité viennent de tests réellement exécutés.',
    ],
    ambitionsTitle: 'Ambitions à long terme',
    ambitions:
      'Faire des fondations communes de ces projets, l’identité chiffrée, le moteur mesh et le moteur de transfert de fichiers, des briques que d’autres développeurs pourront utiliser. La feuille de route décrit les étapes, dans l’ordre.',
    visionLink: 'Lire la vision',
  },

  products: {
    title: 'Projets',
    description: 'Droplet Messenger, Droplet Drop, Kunfox, Parole et NexFleet : ce que fait chaque projet et où il en est.',
    headline: 'Projets',
    lead: 'Chaque projet est décrit tel qu’il est aujourd’hui. Les technologies sont celles trouvées dans son code ; ce qui n’est pas encore disponible figure dans la feuille de route.',
    statusLabel: 'État',
    objectivesTitle: 'Objectifs',
    technologiesTitle: 'Technologies',
    statusTitle: 'État actuel',
    roadmapTitle: 'Feuille de route',
    websiteTitle: 'Site officiel',
    noWebsite: 'Pas encore de site public.',
    visit: 'Visiter',
    back: 'Tous les projets',
    next: 'Projet suivant',
    checked: 'Faits vérifiés le 11 novembre 2026.',
  },

  innovation: {
    title: 'Innovation et technologie',
    description: 'Les quatre domaines stratégiques que Droplet Labs veut développer, et ce que chacun doit accomplir.',
    headline: 'Quatre domaines à développer',
    lead: 'Ce sont des ambitions stratégiques, pas des départements. Droplet Labs n’a pas encore d’équipes ; chaque domaine décrit où ira l’effort et ce qu’il doit produire.',
    areas: [
      {
        icon: 'code',
        title: 'Ingénierie logicielle',
        now: 'Aujourd’hui : des logiciels mobiles, de bureau et serveur publiés par un seul développeur, avec des compilations automatiques.',
        aim: 'Objectif : des bibliothèques partagées, des tests automatiques sur chaque composant et une publication qui attrape les erreurs avant les utilisateurs.',
      },
      {
        icon: 'brain',
        title: 'Intelligence artificielle',
        now: 'Aujourd’hui : l’IA utilisée là où elle aide directement une personne, comme le jury qui pose des questions dans Parole.',
        aim: 'Objectif : des assistants qui fonctionnent avec peu de bande passante, citent leurs sources et n’inventent jamais de résultat.',
      },
      {
        icon: 'network',
        title: 'Infrastructure numérique',
        now: 'Aujourd’hui : de petits serveurs pour les comptes, les boîtes aux lettres chiffrées et les appels, et un réseau mesh entre téléphones.',
        aim: 'Objectif : une infrastructure qui se dégrade en douceur, grandit par étapes et continue de marcher quand une partie est coupée.',
      },
      {
        icon: 'flask',
        title: 'Recherche et développement',
        now: 'Aujourd’hui : des expériences sur les réseaux locaux, le transfert de fichiers chiffré et les interfaces natives.',
        aim: 'Objectif : publier ce qui est appris, mesurer chaque affirmation et transformer en produits les expériences qui marchent.',
      },
    ],
  },

  founder: {
    title: 'Le fondateur de Droplet Labs',
    description: 'Le fondateur et développeur de Droplet Labs : biographie, philosophie de développement, projets en cours et ambitions.',
    bioTitle: 'Biographie',
    bio: [
      'Installé à Yaoundé, au Cameroun, le fondateur de Droplet Labs est un développeur logiciel autodidacte. Chaque projet de ce site a été conçu et construit par lui, de l’interface jusqu’aux serveurs qui le font tourner.',
      'Son travail couvre plusieurs langages et plateformes : Flutter et Dart pour les apps mobiles, Kotlin pour Android natif, Rust pour le moteur de transfert de fichiers, Java pour la gestion de parc, TypeScript et Astro pour les sites web.',
    ],
    philosophyTitle: 'Philosophie de développement',
    philosophy: [
      'Partir de la condition réelle la plus dure : pas de réseau, un vieux téléphone, un petit budget.',
      'Publier, puis mesurer. Une fonction est finie quand elle a été testée, pas quand elle a été écrite.',
      'L’écrire : chaque projet garde ses décisions et leurs raisons à côté du code.',
    ],
    projectsTitle: 'Projets en cours',
    ambitionsTitle: 'Ambitions à long terme',
    ambitions:
      'Faire passer Droplet Labs d’une initiative individuelle à une organisation officielle avec une équipe, et construire depuis le Cameroun une technologie utilisée bien au-delà.',
  },

  vision: {
    title: 'Vision et feuille de route',
    description: 'Les quatre phases prévues par Droplet Labs, du développement indépendant à un écosystème technologique international.',
    headline: 'Une feuille de route en quatre phases',
    lead: 'Seule la première phase est en cours. Les autres sont des projets, dans l’ordre où ils doivent se réaliser.',
    current: 'En cours',
    planned: 'Prévue',
    phases: [
      {
        title: 'Développement indépendant et expérimentation des produits',
        text: 'Construire, publier et éprouver les premiers produits avec de vrais utilisateurs. Apprendre lesquels comptent le plus.',
      },
      {
        title: 'Création d’une organisation officielle',
        text: 'Immatriculer Droplet Labs comme entité juridique, avec une gouvernance et des comptes clairs.',
      },
      {
        title: 'Constitution d’une équipe et nouvelles capacités',
        text: 'Faire venir des ingénieurs et des designers, et entreprendre ce qu’une personne seule ne peut pas faire.',
      },
      {
        title: 'Un écosystème technologique international',
        text: 'Proposer les fondations communes, identité, réseau mesh et transfert de fichiers, à des développeurs et des organisations au-delà du Cameroun.',
      },
    ],
  },

  contact: {
    title: 'Contacter Droplet Labs',
    description: 'Comment joindre Droplet Labs pour une question, une collaboration, un partenariat ou un projet.',
    headline: 'Nous écrire',
    lead: 'Chaque message est lu par le fondateur. La réponse peut prendre quelques jours.',
    topics: [
      { key: 'general', title: 'Questions générales', text: 'Une question sur Droplet Labs ou l’un de ses projets.' },
      { key: 'collaboration', title: 'Collaboration', text: 'Développeurs, designers ou chercheurs qui souhaitent travailler ensemble.' },
      { key: 'partnerships', title: 'Partenariats', text: 'Les organisations intéressées par un partenariat. Droplet Labs n’est pas encore immatriculée ; nous le dirons clairement dans toute discussion.' },
      { key: 'projects', title: 'Demandes sur un projet', text: 'Idées, bugs ou demandes à propos d’un projet précis.' },
    ],
    subject: {
      general: 'Question générale',
      collaboration: 'Collaboration',
      partnerships: 'Partenariat',
      projects: 'Demande sur un projet',
    },
    write: 'Écrire un e-mail',
    elsewhere: 'Ailleurs',
    noAddress: 'Aucune adresse n’est encore publiée.',
  },

  notFound: {
    title: 'Page introuvable',
    description: 'Cette page n’existe pas.',
    headline: 'Cette page n’existe pas.',
    text: 'Le lien est peut-être ancien, ou l’adresse mal saisie.',
    back: 'Revenir à l’accueil',
  },
};

export const t = { en, fr };
export type Dict = typeof en;
