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
      'The ambition is Droplet ID: one identifier, no personal information, a key that never leaves your device, to sign in to every Droplet app. It already works in Droplet Messenger and Droplet Web; the rest is the roadmap, step by step.',
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
      'To build, from Cameroon, a complete connection infrastructure: one private identity that opens every Droplet app, without a phone number or an email. Then a team, a company, and apps built by others on the same foundations.',
  },

  vision: {
    title: 'Vision: one private identity for every Droplet app',
    description: 'Droplet Labs is building Droplet ID: one identifier, no personal information, a key that never leaves your device, to sign in to every app in the Droplet family. Values, how it works and the roadmap.',
    motto: 'Connected, never exposed.',
    lead: 'People should be able to talk, share and learn without handing over who they are. Droplet Labs is building the infrastructure for that: one identity, carried by your device, that opens every Droplet app and reveals nothing about you.',
    idTitle: 'Droplet ID',
    idLead: 'One identifier to connect to every app in the Droplet family. No phone number, no email address, no real name: your device creates a key, keeps it, and uses it to prove it is you.',
    idCenter: 'Your Droplet ID',
    idCenterSub: 'an identifier and a key that stays on your device',
    today: 'Today',
    planned: 'Planned',
    apps: [
      { name: 'Droplet Messenger', state: 'today' },
      { name: 'Droplet Web', state: 'today' },
      { name: 'Droplet Drop', state: 'planned' },
      { name: 'Kunfox', state: 'planned' },
      { name: 'Parole', state: 'planned' },
      { name: 'NexFleet', state: 'planned' },
    ],
    idNote: 'Today, Droplet ID signs you in to Droplet Messenger and Droplet Web. Bringing it to the other apps is the next step of the roadmap.',
    howTitle: 'How it works',
    how: [
      { title: 'Your device creates your key', text: 'When you start, the phone generates a key pair. The private half is stored in the phone’s secure storage and never leaves it.' },
      { title: 'You receive an identifier', text: 'You are known by an identifier and a display name you choose. Nothing else is needed to create the account.' },
      { title: 'Every request is signed', text: 'Servers check a signature made with your key. They can confirm it is you without ever seeing the key, and they reject any replayed request.' },
      { title: 'You decide which devices are yours', text: 'Link a computer by scanning a code; remove it at any moment. A removed device can no longer act in your name.' },
    ],
    neverTitle: 'What Droplet ID never asks for',
    never: ['A phone number', 'An email address', 'Your real name', 'Your date of birth'],
    valuesTitle: 'What we hold to',
    values: [
      {
        title: 'Privacy',
        text: 'We collect what the service needs and nothing more. Messages are encrypted on the device; servers carry them without being able to read them.',
        proof: 'Already in place: end-to-end encryption, an account without personal information.',
      },
      {
        title: 'Security',
        text: 'Proven cryptography, not home-made schemes. Every request is signed, short-lived and single-use; keys stay on the device.',
        proof: 'Already in place: X25519 and AES-256-GCM, signed requests, protection against replay.',
      },
      {
        title: 'Reliability',
        text: 'The service keeps working when parts of it fail: the local mesh when there is no internet, a mailbox when the recipient is away.',
        proof: 'Next: automated tests on every server and a test environment before each release.',
      },
    ],
    roadmapTitle: 'The roadmap, in four phases',
    roadmapLead: 'Only the first phase is under way. Each phase has its goal, its concrete steps and the sign that it is done.',
    current: 'Under way',
    plannedPhase: 'Planned',
    goal: 'Goal',
    steps: 'Steps',
    doneWhen: 'Done when',
    done: 'Done',
    inProgress: 'In progress',
    phases: [
      {
        title: 'Independent development and product experimentation',
        goal: 'Prove that the products are useful, with real people, before growing.',
        steps: [
          { text: 'Five projects built and published', state: 'done' },
          { text: 'Droplet ID working in Droplet Messenger and Droplet Web', state: 'done' },
          { text: 'Automated tests for the servers', state: 'progress' },
          { text: 'A test environment separate from production', state: 'progress' },
          { text: 'Droplet ID in Droplet Drop', state: 'todo' },
        ],
        doneWhen: 'People use the apps every week and Droplet ID works in at least two products.',
      },
      {
        title: 'A formal organisation',
        goal: 'Give Droplet Labs a legal existence so it can sign agreements, open accounts and protect its work.',
        steps: [
          { text: 'Register the company', state: 'todo' },
          { text: 'Publish clear terms of service and a privacy policy for each app', state: 'todo' },
          { text: 'Separate personal and company accounts', state: 'todo' },
        ],
        doneWhen: 'Droplet Labs is a registered company with its own accounts.',
      },
      {
        title: 'A team and new capabilities',
        goal: 'Do what one person cannot: more products, faster, with reviews and support.',
        steps: [
          { text: 'Bring in the first engineers and a designer', state: 'todo' },
          { text: 'An independent security review of Droplet ID', state: 'todo' },
          { text: 'Droplet ID in every app of the family', state: 'todo' },
        ],
        doneWhen: 'Every Droplet app signs in with Droplet ID, and its security has been reviewed by someone outside the team.',
      },
      {
        title: 'An international ecosystem',
        goal: 'Let others build on the same foundations: identity, mesh networking, file transfer.',
        steps: [
          { text: 'Public documentation and a developer kit for Droplet ID', state: 'todo' },
          { text: 'Third-party apps signing in with Droplet ID', state: 'todo' },
          { text: 'Partners outside Cameroon', state: 'todo' },
        ],
        doneWhen: 'Apps built by others use Droplet ID, in several countries.',
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
      'L’ambition s’appelle Droplet ID : un identifiant, aucune information personnelle, une clé qui ne quitte jamais votre appareil, pour se connecter à toutes les apps Droplet. Elle fonctionne déjà dans Droplet Messenger et Droplet Web ; le reste est la feuille de route, étape par étape.',
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
      'Construire, depuis le Cameroun, une infrastructure de connexion complète : une identité privée qui ouvre toutes les apps Droplet, sans numéro de téléphone ni e-mail. Puis une équipe, une société, et des apps construites par d’autres sur les mêmes fondations.',
  },

  vision: {
    title: 'Vision : une identité privée pour toutes les apps Droplet',
    description: 'Droplet Labs construit Droplet ID : un identifiant, aucune information personnelle, une clé qui ne quitte jamais votre appareil, pour se connecter à toutes les apps de la famille Droplet. Valeurs, fonctionnement et feuille de route.',
    motto: 'Connecté, jamais exposé.',
    lead: 'On devrait pouvoir parler, partager et apprendre sans livrer qui l’on est. Droplet Labs construit l’infrastructure pour cela : une seule identité, portée par votre appareil, qui ouvre toutes les apps Droplet et ne révèle rien de vous.',
    idTitle: 'Droplet ID',
    idLead: 'Un seul identifiant pour se connecter à toutes les apps de la famille Droplet. Ni numéro de téléphone, ni adresse e-mail, ni vrai nom : votre appareil crée une clé, la garde, et s’en sert pour prouver que c’est vous.',
    idCenter: 'Votre Droplet ID',
    idCenterSub: 'un identifiant et une clé qui reste sur votre appareil',
    today: 'Aujourd’hui',
    planned: 'Prévu',
    apps: [
      { name: 'Droplet Messenger', state: 'today' },
      { name: 'Droplet Web', state: 'today' },
      { name: 'Droplet Drop', state: 'planned' },
      { name: 'Kunfox', state: 'planned' },
      { name: 'Parole', state: 'planned' },
      { name: 'NexFleet', state: 'planned' },
    ],
    idNote: 'Aujourd’hui, Droplet ID connecte à Droplet Messenger et Droplet Web. L’étendre aux autres apps est la prochaine étape de la feuille de route.',
    howTitle: 'Comment ça marche',
    how: [
      { title: 'Votre appareil crée votre clé', text: 'Au premier lancement, le téléphone génère une paire de clés. La partie privée est rangée dans le coffre sécurisé du téléphone et n’en sort jamais.' },
      { title: 'Vous recevez un identifiant', text: 'On vous connaît par un identifiant et un pseudo que vous choisissez. Rien d’autre n’est nécessaire pour créer le compte.' },
      { title: 'Chaque requête est signée', text: 'Les serveurs vérifient une signature faite avec votre clé. Ils confirment que c’est vous sans jamais voir la clé, et refusent toute requête rejouée.' },
      { title: 'Vous choisissez vos appareils', text: 'Reliez un ordinateur en scannant un code ; retirez-le quand vous voulez. Un appareil retiré ne peut plus agir en votre nom.' },
    ],
    neverTitle: 'Ce que Droplet ID ne demande jamais',
    never: ['Un numéro de téléphone', 'Une adresse e-mail', 'Votre vrai nom', 'Votre date de naissance'],
    valuesTitle: 'Ce à quoi nous tenons',
    values: [
      {
        title: 'Confidentialité',
        text: 'Nous collectons ce dont le service a besoin, rien de plus. Les messages sont chiffrés sur l’appareil ; les serveurs les transportent sans pouvoir les lire.',
        proof: 'Déjà en place : chiffrement de bout en bout, un compte sans information personnelle.',
      },
      {
        title: 'Sécurité',
        text: 'Une cryptographie éprouvée, pas de procédés maison. Chaque requête est signée, valable peu de temps et une seule fois ; les clés restent sur l’appareil.',
        proof: 'Déjà en place : X25519 et AES-256-GCM, requêtes signées, protection contre le rejeu.',
      },
      {
        title: 'Fiabilité',
        text: 'Le service continue quand une partie tombe : le réseau local quand Internet manque, une boîte aux lettres quand le destinataire est absent.',
        proof: 'Prochaine étape : des tests automatiques sur chaque serveur et un environnement d’essai avant chaque publication.',
      },
    ],
    roadmapTitle: 'La feuille de route, en quatre phases',
    roadmapLead: 'Seule la première phase est en cours. Chaque phase a son objectif, ses étapes concrètes et le signe qu’elle est terminée.',
    current: 'En cours',
    plannedPhase: 'Prévue',
    goal: 'Objectif',
    steps: 'Étapes',
    doneWhen: 'Terminée quand',
    done: 'Fait',
    inProgress: 'En cours',
    phases: [
      {
        title: 'Développement indépendant et expérimentation des produits',
        goal: 'Prouver que les produits sont utiles, avec de vraies personnes, avant de grandir.',
        steps: [
          { text: 'Cinq projets construits et publiés', state: 'done' },
          { text: 'Droplet ID en service dans Droplet Messenger et Droplet Web', state: 'done' },
          { text: 'Des tests automatiques pour les serveurs', state: 'progress' },
          { text: 'Un environnement d’essai séparé de la production', state: 'progress' },
          { text: 'Droplet ID dans Droplet Drop', state: 'todo' },
        ],
        doneWhen: 'Des personnes utilisent les apps chaque semaine et Droplet ID fonctionne dans au moins deux produits.',
      },
      {
        title: 'Une organisation officielle',
        goal: 'Donner à Droplet Labs une existence légale pour signer des accords, ouvrir des comptes et protéger son travail.',
        steps: [
          { text: 'Immatriculer la société', state: 'todo' },
          { text: 'Publier des conditions d’utilisation et une politique de confidentialité claires pour chaque app', state: 'todo' },
          { text: 'Séparer les comptes personnels et ceux de la société', state: 'todo' },
        ],
        doneWhen: 'Droplet Labs est une société immatriculée, avec ses propres comptes.',
      },
      {
        title: 'Une équipe et de nouvelles capacités',
        goal: 'Faire ce qu’une personne seule ne peut pas : plus de produits, plus vite, avec relecture et assistance.',
        steps: [
          { text: 'Accueillir les premiers ingénieurs et un designer', state: 'todo' },
          { text: 'Un audit de sécurité indépendant de Droplet ID', state: 'todo' },
          { text: 'Droplet ID dans toutes les apps de la famille', state: 'todo' },
        ],
        doneWhen: 'Toutes les apps Droplet se connectent avec Droplet ID, et sa sécurité a été vérifiée par quelqu’un d’extérieur.',
      },
      {
        title: 'Un écosystème international',
        goal: 'Permettre à d’autres de bâtir sur les mêmes fondations : identité, réseau mesh, transfert de fichiers.',
        steps: [
          { text: 'Une documentation publique et un kit de développement pour Droplet ID', state: 'todo' },
          { text: 'Des apps tierces qui se connectent avec Droplet ID', state: 'todo' },
          { text: 'Des partenaires hors du Cameroun', state: 'todo' },
        ],
        doneWhen: 'Des apps construites par d’autres utilisent Droplet ID, dans plusieurs pays.',
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
