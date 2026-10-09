// Les documents, en français — LA VERSION DE RÉFÉRENCE.
//
// ⚠️ CHAQUE PHRASE DOIT CORRESPONDRE À DU CODE. La politique ci-dessous a
// été écrite à partir d'une lecture de l'application (serveurs dans
// `server_config.dart`, appels dans `webrtc_call_service.dart`, assistant
// dans `groq_service.dart`, etc.). Si l'application change ce qu'elle
// envoie, ce texte change le même jour.
import type { Docs } from './types';

export const fr: Docs = {
  // ══ POLITIQUE DE CONFIDENTIALITÉ ═══════════════════════════════════════
  privacy: {
    titre: 'Politique de confidentialité',
    court: 'Confidentialité',
    description:
      "Ce que Droplet garde sur votre téléphone, ce qui passe par un serveur, et ce que personne ne voit jamais.",
    chapo:
      "Droplet est fait pour qu'on sache le moins de choses possible sur vous. Voici, ligne par ligne, ce qui reste sur votre téléphone, ce qui passe par un serveur, et pourquoi.",
    sections: [
      {
        id: 'essentiel',
        titre: "L'essentiel",
        blocs: [
          {
            liste: [
              "**Pas de compte.** Ni numéro de téléphone, ni adresse e-mail, ni carnet d'adresses. Un pseudo suffit.",
              "**Vos messages sont chiffrés de bout en bout.** Ni les téléphones qui les relaient, ni nos serveurs, ni nous ne pouvons les lire.",
              '**Pas de publicité, pas de traceurs, pas de mesure d\'audience.** Droplet ne contient aucun outil de ce genre.',
              "**Sans Internet, aucun serveur n'intervient.** Les téléphones se parlent directement, en Bluetooth et en Wi‑Fi.",
              "**Avec Internet, quelques serveurs aident** à retrouver quelqu'un, à garder un message en attente et à établir un appel. Ils sont nommés un par un ci-dessous.",
            ],
          },
          "Une politique qui dit « nous ne collectons rien » et s'arrête là ne dit pas tout. La suite explique chaque exception.",
        ],
      },
      {
        id: 'responsable',
        titre: 'Qui est responsable',
        blocs: [
          "L'application et ce site sont publiés par {EDITEUR}, projet indépendant. Pour toute question sur ce document ou sur vos données, écrivez à {EMAIL}.",
          "Droplet n'a pas de délégué à la protection des données : la loi n'en impose qu'au-delà d'une certaine échelle de traitement. L'adresse ci-dessus est le point de contact unique.",
        ],
      },
      {
        id: 'sur-le-telephone',
        titre: 'Ce qui reste sur votre téléphone',
        blocs: [
          "**Votre identité** est une paire de clés fabriquée sur votre téléphone à la première ouverture. La clé privée ne le quitte jamais ; elle est rangée dans le coffre de clés d'Android (Keystore).",
          "**Vos messages, contacts, groupes, photos et réglages** sont enregistrés dans l'espace privé de l'application, auquel les autres applications n'ont pas accès. Ils ne sont pas chiffrés une seconde fois sur le téléphone : protégez-le par un code ou une empreinte, et verrouillez vos discussions sensibles.",
          "**Le journal d'erreurs** est un fichier local. Il ne part jamais tout seul : c'est vous qui décidez de nous l'envoyer, après avoir vu son contenu.",
          {
            encadre:
              "Selon les réglages de votre téléphone, la sauvegarde d'Android peut copier les données des applications vers votre compte Google. Cette copie relève de Google, pas de Droplet.",
          },
        ],
      },
      {
        id: 'serveurs',
        titre: 'Ce qui passe par nos serveurs',
        blocs: [
          "Les fonctions Internet de Droplet sont activées par défaut ; vous pouvez les couper dans les réglages. Elles s'appuient sur trois serveurs, hébergés chez Railway :",
          { intertitre: "L'annuaire" },
          "Il permet de vous retrouver par votre pseudo et de réveiller votre téléphone quand un message arrive. Tant que les fonctions Internet sont actives, l'application y inscrit votre **pseudo**, votre **identifiant public**, votre **clé publique**, votre **adresse Tor** et un **jeton de notification**, puis renouvelle cette inscription toutes les dix minutes. L'annuaire garde aussi les clés publiques qui permettent d'ouvrir une conversation chiffrée avec vous.",
          "Quand Tor est actif, ces échanges passent par Tor et l'annuaire ne voit pas votre adresse IP. Sinon, il la voit, comme tout serveur web.",
          "L'annuaire sert aussi : les **liens d'invitation** que vous partagez ; la **recherche** de pseudos ; les **signalements** (l'identifiant signalé et le motif choisi) ; et, si vous l'activez, la **sauvegarde en ligne** et le **mode en ligne** (décrits plus bas).",
          { intertitre: 'La boîte aux lettres' },
          "Elle garde un message pour quelqu'un qui n'est pas joignable, le temps qu'il revienne. Elle reçoit l'identifiant de l'expéditeur, celui du destinataire et le message **chiffré**, qu'elle ne peut pas ouvrir. Les photos et vidéos y passent en morceaux, chiffrés eux aussi. Un message est effacé dès qu'il est récupéré ; s'il ne l'est jamais, il disparaît de lui-même.",
          { intertitre: 'La mise en relation des appels' },
          "Elle sert à établir un appel ou un salon vocal. Elle voit les identifiants des deux appareils et leurs adresses réseau le temps de les mettre en contact. Aucune voix, aucune image n'y passe.",
        ],
      },
      {
        id: 'tiers',
        titre: 'Les services d\'autres entreprises',
        blocs: [
          "Certaines fonctions passent par des services que nous ne gérons pas. Les voici tous.",
          {
            tableau: {
              entetes: ['Service', 'Quand', 'Ce qu\'il reçoit'],
              lignes: [
                [
                  '**Firebase Cloud Messaging** (Google)',
                  'Notifications, avec les fonctions Internet',
                  "Un jeton propre à votre téléphone. Une notification ne contient qu'un type d'événement et un identifiant, jamais le message.",
                ],
                [
                  '**Serveurs STUN** (Google, Cloudflare, FreeVoIP)',
                  'Appels par Internet',
                  "Votre adresse IP, pour trouver le chemin le plus direct entre deux téléphones.",
                ],
                [
                  '**Relais d\'appel TURN** (Cloudflare, Metered, ExpressTURN)',
                  "Appels, quand la liaison directe échoue",
                  "Votre adresse IP et le son ou l'image **chiffrés**, qu'ils font suivre sans pouvoir les ouvrir.",
                ],
                [
                  '**Groq**',
                  'Assistant en ligne, si vous ajoutez votre propre clé',
                  "Les messages que vous écrivez à l'assistant, les souvenirs que vous lui avez confiés et, en mode vocal, l'enregistrement de votre voix. Ils sont traités selon la politique de Groq.",
                ],
                [
                  '**MyMemory** (Translated)',
                  'Traduction, si vous activez le mode en ligne',
                  'Le texte à traduire, en clair.',
                ],
                [
                  '**Sites web cités dans un message**',
                  'Aperçus de liens, si vous activez le mode en ligne',
                  "Une visite de la page, depuis votre téléphone, pour en afficher le titre et l'image.",
                ],
                [
                  '**CARTO**',
                  'Quand vous ouvrez une carte',
                  "Les demandes de fonds de carte, qui révèlent la zone affichée.",
                ],
                [
                  '**GitHub**',
                  "Une seule fois, si vous installez l'assistant local",
                  "Le téléchargement du modèle d'intelligence artificielle. Ensuite, l'assistant local fonctionne sans Internet.",
                ],
              ],
            },
          },
          "L'assistant fonctionne **sur votre téléphone** par défaut : rien de ce que vous lui dites ne sort. Il ne passe par Groq que si vous ajoutez vous-même une clé Groq, gardée dans le coffre de clés de votre téléphone.",
        ],
      },
      {
        id: 'relais',
        titre: 'Ce que voient les téléphones qui relaient',
        blocs: [
          "Sans réseau, un message saute de téléphone Droplet en téléphone Droplet. Ces téléphones transportent une enveloppe scellée : ils ne peuvent pas lire le contenu.",
          "Pour acheminer l'enveloppe, ils voient en revanche : l'identifiant de l'expéditeur et du destinataire (ou du groupe), l'heure d'envoi, le nombre de sauts déjà faits, le type et la taille du message, et sa durée de vie s'il est éphémère.",
          {
            encadre:
              "Trois choses sont **publiques par nature** et lisibles par les téléphones à portée : les statuts que vous partagez avec « Tout le monde », les messages diffusés à tous, et le signal « Je suis en sécurité » de l'écran d'urgence, avec votre position approximative si vous choisissez de la joindre.",
          },
        ],
      },
      {
        id: 'facultatif',
        titre: 'Ce que vous choisissez d\'activer',
        blocs: [
          {
            liste: [
              "**Le mode en ligne** (désactivé par défaut) signale à l'annuaire que vous êtes en ligne, toutes les deux minutes tant que l'application est ouverte, et active la traduction et les aperçus de liens.",
              "**La sauvegarde en ligne** (désactivée par défaut) envoie chaque jour à l'annuaire une copie de vos données, chiffrée avec un mot de passe que vous seul connaissez. Sans ce mot de passe, la copie est illisible, pour nous aussi.",
              "**La sauvegarde dans un fichier** crée un fichier chiffré que vous rangez où vous voulez. Il ne passe par aucun serveur.",
              '**Les annonces de Droplet** : l\'application télécharge au plus deux fois par jour un court fichier d\'annonces, signé pour qu\'on ne puisse pas le falsifier. Elle n\'envoie rien d\'autre que la requête elle-même.',
            ],
          },
        ],
      },
      {
        id: 'ne-collecte-pas',
        titre: 'Ce que Droplet ne demande jamais',
        blocs: [
          {
            liste: [
              'Votre numéro de téléphone',
              'Votre adresse e-mail',
              "Votre carnet d'adresses",
              'Votre position, sauf si vous l\'envoyez vous-même',
              'Des données de publicité ou de suivi',
              "Des statistiques d'utilisation",
            ],
          },
          'Droplet ne prend aucune décision automatisée à votre sujet et ne construit aucun profil.',
        ],
      },
      {
        id: 'autorisations',
        titre: 'Les autorisations, et pourquoi',
        blocs: [
          {
            tableau: {
              entetes: ['Autorisation', 'Pourquoi'],
              lignes: [
                ['Bluetooth et appareils à proximité', 'Trouver les téléphones Droplet autour de vous et leur passer les messages.'],
                ['Position', "Android l'exige pour chercher des appareils en Wi‑Fi. Elle sert aussi quand vous envoyez votre position ou utilisez la carte."],
                ['Micro', 'Messages vocaux, appels, assistant vocal.'],
                ['Appareil photo', 'Photos, vidéos, scan des codes QR.'],
                ['Photos, vidéos et audio', 'Envoyer un fichier de votre téléphone.'],
                ['Notifications', 'Vous prévenir des messages et des appels.'],
                ['Service en arrière-plan, batterie', "Continuer à relayer et recevoir quand l'application est fermée."],
              ],
            },
          },
          "Chaque autorisation se refuse ou se retire dans les réglages d'Android. Droplet continue de fonctionner sans elle ; seule la fonction qui en dépend s'arrête.",
        ],
      },
      {
        id: 'conservation',
        titre: 'Combien de temps',
        blocs: [
          {
            liste: [
              "**Sur votre téléphone** : jusqu'à ce que vous effaciez un message ou une discussion, que le message éphémère expire, ou que vous désinstalliez l'application.",
              "**Dans la boîte aux lettres** : jusqu'à la remise du message, ou son expiration.",
              "**Dans l'annuaire** : tant que votre téléphone se manifeste. Une inscription qui n'est plus renouvelée finit par disparaître.",
              "**Sauvegarde en ligne** : la dernière copie, tant que la sauvegarde reste activée.",
              "**Mise en relation et relais d'appel** : rien n'est gardé après l'appel.",
            ],
          },
        ],
      },
      {
        id: 'transferts',
        titre: 'Où se trouvent ces serveurs',
        blocs: [
          "Railway, Cloudflare, Google et Groq sont des entreprises américaines ; leurs machines peuvent se trouver hors de l'Union européenne. Ce qui leur parvient est réduit au strict nécessaire, et les messages y restent chiffrés.",
        ],
      },
      {
        id: 'droits',
        titre: 'Vos droits',
        blocs: [
          "Selon la loi qui s'applique à vous (le RGPD en Europe, par exemple), vous pouvez accéder à vos données, les corriger, les effacer, en limiter l'usage, vous opposer à leur traitement et les emporter ailleurs.",
          'Comme il n\'y a pas de compte, presque tout se fait depuis votre téléphone :',
          {
            liste: [
              "**Emporter vos données** : Réglages › Sauvegarder mon identité, en incluant l'historique des messages si vous le souhaitez.",
              "**Sortir de l'annuaire** : couper les fonctions Internet dans les réglages. Votre inscription n'est plus renouvelée et disparaît.",
              "**Tout effacer du téléphone** : désinstaller l'application.",
              "**Effacer tout de suite une sauvegarde en ligne ou une inscription** : écrivez-nous à {EMAIL}.",
            ],
          },
          "Si notre réponse ne vous satisfait pas, vous pouvez saisir l'autorité de protection des données de votre pays.",
        ],
      },
      {
        id: 'mineurs',
        titre: 'Les enfants',
        blocs: [
          "Droplet n'est pas destiné aux enfants de moins de 13 ans. Il ne demande l'âge de personne, puisqu'il ne demande rien à personne.",
        ],
      },
      {
        id: 'site',
        titre: 'Ce site',
        blocs: [
          "Ce site n'utilise ni cookie, ni traceur, ni outil de mesure d'audience, et ses polices sont hébergées avec lui. Il retient seulement, dans votre navigateur, la couleur que vous avez choisie. Comme tout site, son hébergeur reçoit votre adresse IP quand vous l'ouvrez.",
        ],
      },
      {
        id: 'modifications',
        titre: 'Si ce texte change',
        blocs: [
          "La date de dernière mise à jour figure en haut de cette page. Un changement qui modifierait ce que voient nos serveurs serait annoncé dans l'application, pas glissé discrètement dans une mise à jour.",
        ],
      },
    ],
  },

  // ══ CONDITIONS D'UTILISATION ═══════════════════════════════════════════
  terms: {
    titre: "Conditions d'utilisation",
    court: 'Conditions',
    description: "Les règles d'utilisation de Droplet, écrites pour être lues.",
    chapo:
      "Les règles d'utilisation de Droplet, écrites pour être lues. En installant l'application, vous les acceptez.",
    sections: [
      {
        id: 'service',
        titre: 'Le service',
        blocs: [
          "Droplet est une messagerie qui relie les téléphones entre eux par Bluetooth et Wi‑Fi, et passe par Internet quand il est disponible. Elle est publiée par {EDITEUR}.",
          "L'application est gratuite. Si des options payantes sont un jour proposées, leur prix et leurs conditions seront présentés avant tout achat.",
        ],
      },
      {
        id: 'acheminement',
        titre: 'Un message peut ne pas arriver',
        blocs: [
          "Sans réseau, un message n'arrive que si des téléphones Droplet font le lien entre vous et votre destinataire. La portée dépend du nombre d'appareils autour de vous, des murs, de la batterie et des réglages de chaque téléphone.",
          {
            encadre:
              "**Droplet ne remplace pas les services d'urgence.** Nous ne pouvons garantir ni qu'un message arrive, ni quand. En cas de danger, appelez les secours par tous les moyens disponibles.",
          },
        ],
      },
      {
        id: 'identite',
        titre: 'Votre identité et vos clés',
        blocs: [
          "Votre identité Droplet est une clé fabriquée sur votre téléphone. Nous n'en avons aucune copie. Si vous perdez votre téléphone sans avoir fait de sauvegarde, nous ne pouvons ni récupérer vos messages, ni vous rendre votre identité.",
          "Vous êtes responsable de la sécurité de votre téléphone et du mot de passe de vos sauvegardes.",
        ],
      },
      {
        id: 'usage',
        titre: 'Ce qui est interdit',
        blocs: [
          'En utilisant Droplet, vous vous engagez à ne pas :',
          {
            liste: [
              "enfreindre la loi, ni aider quelqu'un à le faire ;",
              'harceler, menacer ou usurper l\'identité de quelqu\'un ;',
              'envoyer des messages non sollicités en masse ;',
              "partager des contenus d'abus sur des enfants, ou incitant à la violence ou à la haine ;",
              "perturber le réseau, saturer les relais ou les serveurs, ou tenter d'en contourner la sécurité ;",
              "copier, modifier ou redistribuer l'application en dehors de ce que permet sa licence.",
            ],
          },
          "Vous pouvez signaler un utilisateur depuis l'application. Nous pouvons retirer de l'annuaire et des services Internet de Droplet quelqu'un qui enfreint ces règles.",
        ],
      },
      {
        id: 'contenus',
        titre: 'Vos contenus',
        blocs: [
          "Ce que vous écrivez et envoyez vous appartient. Comme vos messages sont chiffrés de bout en bout, nous ne pouvons pas les lire, et nous ne les utilisons à aucune fin.",
          "Vous êtes responsable de ce que vous envoyez, et vous garantissez avoir le droit de le partager.",
        ],
      },
      {
        id: 'tiers',
        titre: 'Les services tiers',
        blocs: [
          "Certaines fonctions facultatives s'appuient sur d'autres entreprises : l'assistant en ligne (Groq), la traduction (MyMemory), les cartes (CARTO). Leur usage est soumis à leurs propres conditions. La liste complète figure dans la [politique de confidentialité](/privacy/#tiers).",
        ],
      },
      {
        id: 'assistant',
        titre: "L'assistant",
        blocs: [
          "Les réponses de l'assistant sont produites par un modèle d'intelligence artificielle. Elles peuvent être inexactes ou incomplètes. Ne vous y fiez pas pour une décision médicale, juridique, financière ou de sécurité.",
        ],
      },
      {
        id: 'propriete',
        titre: 'Propriété intellectuelle',
        blocs: [
          "Le nom Droplet, son logo, l'application et ce site sont protégés. Vous pouvez parler de Droplet et partager ce site librement ; vous ne pouvez pas faire croire qu'un autre produit est Droplet.",
        ],
      },
      {
        id: 'responsabilite',
        titre: 'Limites de responsabilité',
        blocs: [
          "Droplet est fourni tel quel. Dans la mesure permise par la loi, {EDITEUR} ne peut être tenu responsable d'un message perdu ou retardé, d'une interruption du service, ni des dommages indirects liés à son utilisation.",
          "Rien dans ces conditions ne limite les droits que la loi de votre pays vous accorde en tant que consommateur.",
        ],
      },
      {
        id: 'arret',
        titre: 'Arrêter Droplet',
        blocs: [
          "Vous pouvez arrêter à tout moment : désinstaller l'application efface vos données du téléphone. Nous pouvons faire évoluer, suspendre ou arrêter tout ou partie du service ; les fonctions qui marchent sans Internet continuent de marcher entre téléphones.",
        ],
      },
      {
        id: 'modifications',
        titre: 'Si ces conditions changent',
        blocs: [
          "Un changement important sera annoncé dans l'application avant de s'appliquer. Continuer à utiliser Droplet après cette date vaut acceptation.",
        ],
      },
      {
        id: 'droit',
        titre: 'Droit applicable',
        blocs: [
          "Ces conditions sont régies par le droit du pays où {EDITEUR} est établi, sans vous priver des protections impératives du pays où vous résidez. En cas de désaccord, écrivez-nous d'abord : la plupart des problèmes se règlent ainsi.",
        ],
      },
      {
        id: 'mentions',
        titre: 'Mentions légales',
        blocs: [
          {
            tableau: {
              entetes: ['', ''],
              lignes: [
                ['Éditeur', '{EDITEUR}'],
                ['Contact', '{EMAIL}'],
                ['Site', '{SITE}'],
                ["Serveurs de l'application", 'Railway Corporation, États-Unis'],
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ SÉCURITÉ ════════════════════════════════════════════════════════════
  security: {
    titre: 'Sécurité',
    court: 'Sécurité',
    description: "Comment Droplet protège vos messages, et ce qu'il ne peut pas protéger.",
    chapo:
      "Comment Droplet protège vos messages de bout en bout, ce que voient ceux qui les transportent, et ce qu'aucune application ne peut protéger à votre place.",
    sections: [
      {
        id: 'bout-en-bout',
        titre: 'Chiffré de bout en bout',
        blocs: [
          "Un message est chiffré sur votre téléphone et ne redevient lisible que sur celui de votre destinataire. Entre les deux, qu'il passe par des téléphones voisins ou par Internet, il n'est qu'une suite de caractères illisibles.",
          "Droplet utilise le **protocole Signal**, le même principe que les grandes messageries chiffrées : chaque message a sa propre clé, et la clé change à chaque échange. Même si une clé était un jour dérobée, elle n'ouvrirait ni les messages d'avant, ni ceux d'après.",
          "Le chiffrement repose sur des algorithmes éprouvés : **X25519** pour s'accorder sur une clé, **AES‑256‑GCM** pour chiffrer, **HMAC-SHA256** pour faire évoluer les clés.",
        ],
      },
      {
        id: 'groupes',
        titre: 'Les groupes',
        blocs: [
          "Dans un groupe, chaque membre possède sa propre clé d'envoi, transmise aux autres membres par des messages eux-mêmes chiffrés. Elle avance à chaque message. Quand un administrateur retire quelqu'un du groupe, les clés sont renouvelées : la personne retirée ne peut pas lire ce qui s'écrit ensuite.",
        ],
      },
      {
        id: 'identite',
        titre: 'Une identité sans numéro',
        blocs: [
          "Votre identité est une paire de clés fabriquée sur votre téléphone. Il n'y a ni numéro de téléphone, ni adresse e-mail, ni mot de passe de compte à voler sur un serveur.",
          "Pour être sûr de parler à la bonne personne, comparez votre **code de sécurité** avec le sien, ou scannez son code QR : si les deux correspondent, personne ne s'est glissé entre vous.",
        ],
      },
      {
        id: 'relais',
        titre: 'Des relais aveugles',
        blocs: [
          "Les téléphones qui relaient un message transportent une enveloppe scellée. Ils savent d'où elle vient et où elle va, pas ce qu'elle contient. Le détail de ce qu'ils voient figure dans la [politique de confidentialité](/privacy/#relais).",
          "Pour cacher aussi **qui parle à qui** sur Internet, Droplet peut passer par **Tor** : nos serveurs ne voient alors plus votre adresse IP.",
        ],
      },
      {
        id: 'appels',
        titre: 'Les appels',
        blocs: [
          "Les appels audio et vidéo sont chiffrés de bout en bout et passent directement d'un téléphone à l'autre dès que c'est possible. Quand ce n'est pas possible, un relais fait suivre le son et l'image chiffrés, sans pouvoir les écouter.",
        ],
      },
      {
        id: 'sur-le-telephone',
        titre: 'Sur votre téléphone',
        blocs: [
          {
            liste: [
              "**Discussions verrouillées** : une discussion peut se cacher derrière votre empreinte ou votre visage.",
              "**Messages éphémères** : ils s'effacent tout seuls, des deux côtés, après le délai choisi.",
              "**Vue unique** : une photo ou une vidéo qui ne s'ouvre qu'une fois.",
              "**Sauvegardes chiffrées** : protégées par votre mot de passe (PBKDF2, 300 000 itérations, puis AES‑GCM). Sans lui, personne ne peut les ouvrir, nous non plus.",
              '**Clés à l\'abri** : votre clé d\'identité est rangée dans le coffre de clés d\'Android.',
            ],
          },
        ],
      },
      {
        id: 'limites',
        titre: 'Ce que Droplet ne peut pas protéger',
        blocs: [
          "Être honnête sur la sécurité, c'est aussi en dire les limites :",
          {
            liste: [
              "Quelqu'un qui tient votre téléphone **déverrouillé** peut lire vos discussions non verrouillées. Protégez-le par un code.",
              "Votre correspondant peut faire une **capture d'écran** ou photographier son écran.",
              "Les **métadonnées** nécessaires à l'acheminement (qui écrit à qui, quand) restent visibles des relais et de nos serveurs, sauf si Tor est actif pour la partie Internet.",
              "Les **statuts publics** et les signaux d'urgence sont faits pour être lus par tous ceux qui sont à portée.",
              "L'**assistant en ligne** et la **traduction** envoient du texte à des services tiers. Ils sont désactivés par défaut.",
            ],
          },
        ],
      },
      {
        id: 'signaler',
        titre: 'Signaler une faille',
        blocs: [
          "Vous avez trouvé une faille de sécurité ? Écrivez-nous à {EMAIL} avant de la rendre publique, avec de quoi la reproduire. Nous répondons à chaque signalement et vous tenons au courant de la correction.",
        ],
      },
    ],
  },

  // ══ ASSISTANCE ══════════════════════════════════════════════════════════
  support: {
    titre: 'Assistance Droplet',
    court: 'Assistance',
    description: 'Installer Droplet, ajouter des contacts, rester joignable sans réseau, et résoudre les problèmes courants.',
    chapo: 'Tout pour bien démarrer, rester joignable quand le réseau tombe, et régler les petits problèmes.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Bien démarrer',
        resume: 'Installer Droplet et choisir un pseudo.',
        icone: 'telephone',
        blocs: [
          {
            liste: [
              "**Téléchargez Droplet** depuis ce site, sur votre téléphone Android.",
              "**Autorisez l'installation** si Android vous le demande : il bloque par défaut les applications téléchargées hors du Play Store.",
              "**Ouvrez Droplet et choisissez un pseudo.** C'est tout : pas de numéro, pas d'e-mail.",
              "**Acceptez le Bluetooth et les appareils à proximité.** Sans eux, Droplet ne peut pas trouver les téléphones autour de vous.",
            ],
          },
        ],
      },
      {
        id: 'contacts',
        titre: 'Ajouter quelqu\'un',
        resume: 'De près, par code QR ou par lien.',
        icone: 'personnes',
        blocs: [
          {
            liste: [
              "**De près** : approchez vos téléphones, Droplet ouverts. La personne apparaît toute seule.",
              "**Par code QR** : ouvrez votre code QR et faites-le scanner, ou scannez le sien.",
              '**À distance** : partagez votre lien d\'invitation, ou cherchez son pseudo dans l\'annuaire.',
            ],
          },
          "Pour vérifier que c'est bien la bonne personne, comparez vos codes de sécurité. Voir [Sécurité](/security/#identite).",
        ],
      },
      {
        id: 'sans-reseau',
        titre: 'Quand le réseau tombe',
        resume: 'Les réglages qui gardent Droplet en éveil.',
        icone: 'ondes',
        blocs: [
          "Droplet fonctionne sans 4G ni Wi‑Fi, à condition que le téléphone le laisse tourner :",
          {
            liste: [
              '**Laissez le Bluetooth activé.**',
              "**Retirez Droplet de l'optimisation de batterie** quand l'application vous le propose. Sans cela, Android peut l'endormir et vous ne relayez plus rien.",
              "**Sur certaines marques** (Xiaomi, Huawei, Oppo, Samsung…), autorisez aussi le démarrage automatique ou l'activité en arrière-plan dans les réglages de batterie.",
              "**Installez Droplet chez vos proches avant d'en avoir besoin.** Plus il y a de téléphones autour de vous, plus les messages vont loin.",
            ],
          },
        ],
      },
      {
        id: 'en-attente',
        titre: 'Un message reste en attente',
        resume: "Pourquoi, et quoi faire.",
        icone: 'horloge',
        blocs: [
          "Personne n'est à portée, et Internet n'est pas là. Le message attend dans votre téléphone et part tout seul dès qu'un chemin s'ouvre : vous n'avez rien à refaire.",
          'Si l\'attente dure alors que la personne est proche :',
          {
            liste: [
              'vérifiez que le Bluetooth est activé des deux côtés ;',
              "vérifiez que Droplet n'est pas restreint par l'optimisation de batterie ;",
              "ouvrez Droplet sur les deux téléphones pendant quelques secondes.",
            ],
          },
        ],
      },
      {
        id: 'appels',
        titre: 'Appels audio et vidéo',
        resume: 'Sur le même Wi‑Fi, ou par Internet.',
        icone: 'appel',
        blocs: [
          "Un appel fonctionne quand vous êtes sur le même Wi‑Fi, ou quand vous avez Internet tous les deux. Les appels ne passent pas de téléphone en téléphone comme les messages : la voix demande un débit que le Bluetooth ne peut pas fournir sur plusieurs sauts.",
          "Si l'appel ne se connecte pas, vérifiez que Droplet a accès au micro (et à l'appareil photo pour la vidéo), puis réessayez.",
        ],
      },
      {
        id: 'sauvegarde',
        titre: 'Changer de téléphone',
        resume: 'Sauvegarder et restaurer.',
        icone: 'sauvegarde',
        blocs: [
          "Vos messages ne sont que sur votre téléphone. Avant d'en changer :",
          {
            liste: [
              "**Réglages › Sauvegarder mon identité** : créez un fichier chiffré, en cochant « Inclure l'historique des messages », et gardez bien son mot de passe.",
              "Copiez ce fichier sur le nouveau téléphone, installez Droplet et importez-le.",
            ],
          },
          "Vous pouvez aussi activer la sauvegarde en ligne quotidienne, chiffrée avec votre mot de passe.",
          {
            encadre:
              "Sans sauvegarde, désinstaller Droplet efface tout, définitivement. Personne ne peut restaurer vos messages, nous non plus.",
          },
        ],
      },
      {
        id: 'batterie',
        titre: 'Batterie',
        resume: 'Ce qui consomme, et comment réduire.',
        icone: 'batterie',
        blocs: [
          "La recherche d'appareils autour de vous consomme un peu de batterie. Dans les réglages, vous pouvez la réduire, ou ne la laisser active que lorsque Droplet est ouvert. Vous relaierez alors moins pour les autres.",
        ],
      },
      {
        id: 'assistant',
        titre: "L'assistant",
        resume: 'Sur le téléphone, ou en ligne avec votre clé.',
        icone: 'etincelle',
        blocs: [
          "L'assistant fonctionne sur votre téléphone, sans Internet, une fois son modèle téléchargé (environ 530 Mo). Pour des réponses plus poussées, vous pouvez ajouter votre propre clé Groq dans ses réglages : vos échanges passent alors par Groq.",
        ],
      },
      {
        id: 'iphone',
        titre: 'Et sur iPhone ?',
        resume: 'Droplet est disponible sur Android.',
        icone: 'question',
        blocs: [
          "Droplet est disponible sur Android pour le moment. Laissez-le installé sur vos appareils Android : il relaie les messages pour tous ceux qui l'utilisent autour de vous.",
        ],
      },
      {
        id: 'contact',
        titre: 'Nous contacter',
        resume: 'Une question, un problème, une idée.',
        icone: 'message',
        blocs: [
          "Écrivez-nous à {EMAIL}. Depuis l'application, **Réglages › Contact et assistance › Signaler un problème** vous montre le texte exact qui partira, et vous laisse joindre le journal d'erreurs si vous le souhaitez.",
          "Droplet est fait par une petite équipe, pas par un centre d'appels. La réponse peut prendre un jour ou deux ; elle arrive.",
        ],
      },
    ],
  },
};
