// ============================================================================
// THE PROJECTS — only what the code and the published releases show.
//
// Each fact here was checked against the project's own repository or its
// public website on 11 November 2026. A feature still being built is written
// as such ("roadmap"), never as available.
// ============================================================================

export type Lang = 'en' | 'fr';
type T = { en: string; fr: string };
type TList = { en: string[]; fr: string[] };

export type Product = {
  slug: string;
  name: string;
  /** One line, used in lists. */
  line: T;
  /** A short paragraph for the detail page. */
  description: T;
  objectives: TList;
  /** Technologies seen in the code — nothing assumed. */
  technologies: string[];
  status: T;
  /** Short status word for the index. */
  stage: T;
  roadmap: TList;
  website: string | null;
};

export const products: Product[] = [
  {
    slug: 'droplet-messenger',
    name: 'Droplet Messenger',
    line: {
      en: 'Encrypted messaging that keeps working when the network does not.',
      fr: 'Une messagerie chiffrée qui continue de marcher quand le réseau lâche.',
    },
    description: {
      en: 'Droplet Messenger explores resilient communication. Messages are end-to-end encrypted, and phones close to each other can exchange them directly over Bluetooth and local Wi-Fi, without the internet. When a recipient is offline, an encrypted copy waits on a mailbox server that cannot read it.',
      fr: 'Droplet Messenger explore une communication qui résiste aux coupures. Les messages sont chiffrés de bout en bout, et des téléphones proches peuvent se les passer directement par Bluetooth et Wi-Fi local, sans Internet. Quand le destinataire est hors ligne, une copie chiffrée l’attend sur un serveur boîte aux lettres qui ne peut pas la lire.',
    },
    objectives: {
      en: [
        'Keep people in touch when mobile data is expensive, slow or cut.',
        'Encrypt every message so that only its recipient can read it.',
        'Let one account follow its owner from the phone to the browser.',
      ],
      fr: [
        'Garder les gens en contact quand les données mobiles sont chères, lentes ou coupées.',
        'Chiffrer chaque message pour que seul son destinataire puisse le lire.',
        'Permettre à un même compte de suivre son propriétaire du téléphone au navigateur.',
      ],
    },
    technologies: ['Flutter', 'Dart', 'Kotlin', 'X25519', 'AES-256-GCM', 'Signal Protocol', 'Bluetooth LE', 'Wi-Fi local networks', 'WebRTC', 'Tor', 'PostgreSQL'],
    status: {
      en: 'In active development. The Android app can be downloaded from its website, and a web companion links to an existing account. A native interface for recent Android versions is being tested.',
      fr: 'En développement actif. L’app Android se télécharge depuis son site, et un compagnon web se relie à un compte existant. Une interface native pour les versions récentes d’Android est en cours d’essai.',
    },
    stage: { en: 'Android, in development', fr: 'Android, en développement' },
    roadmap: {
      en: [
        'Automated tests for the servers and the encryption code.',
        'A separate test environment before each production release.',
        'The mesh engine and the identity system as reusable modules.',
      ],
      fr: [
        'Des tests automatiques pour les serveurs et le code de chiffrement.',
        'Un environnement de test séparé avant chaque mise en production.',
        'Le moteur mesh et le système d’identité sous forme de modules réutilisables.',
      ],
    },
    website: 'https://dropletmesh.app',
  },
  {
    slug: 'droplet-drop',
    name: 'Droplet Drop',
    line: {
      en: 'Send files of any size to nearby devices, without the internet.',
      fr: 'Envoyer des fichiers de toute taille aux appareils proches, sans Internet.',
    },
    description: {
      en: 'Droplet Drop moves files between devices on the same local network: a phone to a laptop, a PC to a whole room. Transfers are encrypted, checked block by block, and resume where they stopped after a cut.',
      fr: 'Droplet Drop fait passer des fichiers entre appareils d’un même réseau local : d’un téléphone à un ordinateur, d’un PC à toute une salle. Les transferts sont chiffrés, vérifiés bloc par bloc, et reprennent là où ils s’étaient arrêtés après une coupure.',
    },
    objectives: {
      en: [
        'Make sharing between different systems as simple as on a single one.',
        'Never lose what has already arrived when a transfer is interrupted.',
        'Send to many devices at once without a server in between.',
      ],
      fr: [
        'Rendre le partage entre systèmes différents aussi simple que sur un seul.',
        'Ne jamais perdre ce qui est déjà arrivé quand un transfert est interrompu.',
        'Envoyer à plusieurs appareils à la fois, sans serveur au milieu.',
      ],
    },
    technologies: ['Rust', 'Flutter', 'TLS 1.3', 'BLAKE3', 'mDNS', 'SQLite'],
    status: {
      en: 'Available for Android, Windows, macOS and Linux. The macOS build is not yet signed by Apple. The iPhone and iPad version waits for App Store review.',
      fr: 'Disponible pour Android, Windows, macOS et Linux. La version macOS n’est pas encore signée par Apple. La version iPhone et iPad attend la validation de l’App Store.',
    },
    stage: { en: 'Available on four systems', fr: 'Disponible sur quatre systèmes' },
    roadmap: {
      en: ['Release on iPhone and iPad.', 'A signed macOS build.', 'Sign-in with the same identity as Droplet Messenger.'],
      fr: ['Sortie sur iPhone et iPad.', 'Une version macOS signée.', 'Connexion avec la même identité que Droplet Messenger.'],
    },
    website: 'https://drop.dropletmesh.app',
  },
  {
    slug: 'kunfox',
    name: 'Kunfox',
    line: {
      en: 'Interactive lessons, guided along a map by a small animated companion.',
      fr: 'Des leçons interactives, guidées sur une carte par un petit compagnon animé.',
    },
    description: {
      en: 'Kunfox is an educational app built around a path of lessons. Each step is a discovery, a picture to read, a lesson or a practice round, and Kabi, an animated mascot, reacts to how the learner is doing.',
      fr: 'Kunfox est une app éducative construite autour d’un parcours de leçons. Chaque étape est une découverte, une image à lire, une leçon ou un entraînement, et Kabi, une mascotte animée, réagit à la progression de l’élève.',
    },
    objectives: {
      en: ['Make regular practice feel like progress, not homework.', 'Show learners where they are and what comes next.'],
      fr: ['Faire de la pratique régulière une progression, pas une corvée.', 'Montrer à l’élève où il en est et ce qui l’attend.'],
    },
    technologies: ['Flutter', 'Dart', 'Rive', 'Astro'],
    status: {
      en: 'Version 1.0.5 has been released for Android.',
      fr: 'La version 1.0.5 est publiée pour Android.',
    },
    stage: { en: 'Version 1.0.5, Android', fr: 'Version 1.0.5, Android' },
    roadmap: {
      en: ['More lessons and subjects.', 'Testing with learners and teachers.'],
      fr: ['Davantage de leçons et de matières.', 'Des essais avec des élèves et des enseignants.'],
    },
    website: 'https://kunfox.dropletmesh.app',
  },
  {
    slug: 'parole',
    name: 'Parole',
    line: {
      en: 'Rehearse an oral defence in front of an AI jury that asks real questions.',
      fr: 'Répéter une soutenance devant un jury IA qui pose de vraies questions.',
    },
    description: {
      en: 'Parole helps students prepare an oral defence. They import their document, answer out loud, and an AI jury transcribes the answers, asks questions grounded in the document and gives feedback.',
      fr: 'Parole aide les étudiants à préparer une soutenance. Ils importent leur document, répondent à voix haute, et un jury IA transcrit les réponses, pose des questions tirées du document et donne un retour.',
    },
    objectives: {
      en: [
        'Give every student access to a realistic rehearsal, whatever their means.',
        'Base each question on the student’s own document, with the page it comes from.',
      ],
      fr: [
        'Donner à chaque étudiant accès à une répétition réaliste, quels que soient ses moyens.',
        'Fonder chaque question sur le document de l’étudiant, avec la page d’où elle vient.',
      ],
    },
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Authentication', 'Groq', 'Whisper'],
    status: {
      en: 'Beta 1.1.0. The Android app can be installed for testing; AI sessions are not yet open in production.',
      fr: 'Bêta 1.1.0. L’app Android peut s’installer pour des essais ; les séances IA ne sont pas encore ouvertes en production.',
    },
    stage: { en: 'Beta, Android', fr: 'Bêta, Android' },
    roadmap: {
      en: ['Open AI sessions in production.', 'Finish the cloud history of sessions.'],
      fr: ['Ouvrir les séances IA en production.', 'Terminer l’historique des séances dans le cloud.'],
    },
    website: null,
  },
  {
    slug: 'nextfleet',
    name: 'NextFleet',
    line: {
      en: 'Fleet management that joins vehicles, missions and GPS in one place.',
      fr: 'Une gestion de parc qui réunit véhicules, missions et GPS au même endroit.',
    },
    description: {
      en: 'NextFleet brings a vehicle fleet into one system: the vehicles and their deadlines, fuel and maintenance costs, missions authorised by a manager and started by the driver, and the GPS track of each mission.',
      fr: 'NextFleet rassemble un parc automobile dans un seul système : les véhicules et leurs échéances, le carburant et l’entretien, les missions autorisées par un gestionnaire et lancées par le conducteur, et le tracé GPS de chaque mission.',
    },
    objectives: {
      en: ['Know at any time where vehicles are and what they cost.', 'Replace scattered spreadsheets with one shared history.'],
      fr: ['Savoir à tout moment où sont les véhicules et ce qu’ils coûtent.', 'Remplacer des tableurs dispersés par un historique commun.'],
    },
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'JavaFX', 'Android', 'Traccar'],
    status: {
      en: 'Version 0.10.0, in development. The desktop and Android apps are built and tested automatically; field trials are still to come.',
      fr: 'Version 0.10.0, en développement. Les apps de bureau et Android sont construites et testées automatiquement ; les essais sur le terrain restent à faire.',
    },
    stage: { en: 'Version 0.10, in development', fr: 'Version 0.10, en développement' },
    roadmap: {
      en: ['Field trials with drivers and fleet managers.', 'A first production deployment.'],
      fr: ['Des essais sur le terrain avec des conducteurs et des gestionnaires.', 'Un premier déploiement en production.'],
    },
    website: null,
  },
];
