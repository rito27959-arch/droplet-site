// Les documents, en anglais — deuxième langue de référence.
//
// Traduction fidèle de `fr.ts` : même structure, mêmes ancres, mêmes
// liens et champs. Toute modification du français se reporte ici le même jour.
import type { Docs } from './types';

export const en: Docs = {
  // ══ PRIVACY POLICY ══════════════════════════════════════════════════════
  privacy: {
    titre: "Privacy Policy",
    court: "Privacy",
    description:
      "What Droplet keeps on your phone, what goes through a server, and what no one ever sees.",
    chapo:
      "Droplet is built so that as little as possible is known about you. Here, line by line, is what stays on your phone, what goes through a server, and why.",
    sections: [
      {
        id: "essentiel",
        titre: "The essentials",
        blocs: [
          {
            liste: [
              "**No account.** No phone number, no email address, no address book. A username is all it takes.",
              "**Your messages are end-to-end encrypted.** Neither the phones that relay them, nor our servers, nor we can read them.",
              "**No ads, no trackers, no audience measurement.** Droplet contains no tools of that kind.",
              "**Without the internet, no server is involved.** Phones talk to each other directly, over Bluetooth and Wi‑Fi.",
              "**With the internet, a few servers help** find someone, hold a message until it can be delivered, and set up a call. They are named one by one below.",
            ],
          },
          "A policy that says “we collect nothing” and stops there doesn’t tell the whole story. What follows explains each exception.",
        ],
      },
      {
        id: "responsable",
        titre: "Who is responsible",
        blocs: [
          "The app and this site are published by {EDITEUR}, an independent project. For any question about this document or your data, write to {EMAIL}.",
          "Droplet has no data protection officer: the law only requires one beyond a certain scale of processing. The address above is the single point of contact.",
        ],
      },
      {
        id: "sur-le-telephone",
        titre: "What stays on your phone",
        blocs: [
          "**Your identity** is a key pair created on your phone the first time you open the app. The private key never leaves it; it is stored in Android’s key vault (Keystore).",
          "**Your messages, contacts, groups, photos and settings** are saved in the app’s private storage, which other apps cannot access. They are not encrypted a second time on the phone: protect it with a passcode or fingerprint, and lock your sensitive chats.",
          "**The error log** is a local file. It is never sent on its own: you decide whether to send it to us, after seeing what it contains.",
          {
            encadre:
              "Depending on your phone’s settings, Android backup may copy app data to your Google account. That copy is Google’s responsibility, not Droplet’s.",
          },
        ],
      },
      {
        id: "serveurs",
        titre: "What goes through our servers",
        blocs: [
          "Droplet’s internet features are on by default; you can turn them off in settings. They rely on three servers, hosted by Railway:",
          { intertitre: "The directory" },
          "It lets people find you by your username and wakes up your phone when a message arrives. As long as internet features are on, the app registers your **username**, your **public ID**, your **public key**, your **Tor address** and a **notification token** there, then renews this registration every ten minutes. The directory also keeps the public keys that allow an encrypted conversation to be started with you.",
          "When Tor is on, these exchanges go through Tor and the directory doesn’t see your IP address. Otherwise, it sees it, like any web server.",
          "The directory is also used for: the **invitation links** you share; **searching** for usernames; **reports** (the reported ID and the reason chosen); and, if you turn them on, **online backup** and **online mode** (described below).",
          { intertitre: "The mailbox" },
          "It holds a message for someone who can’t be reached, until they come back. It receives the sender’s ID, the recipient’s ID and the **encrypted** message, which it cannot open. Photos and videos go through it in pieces, also encrypted. A message is deleted as soon as it is picked up; if it never is, it disappears on its own.",
          { intertitre: "Call connection" },
          "It is used to set up a call or a voice room. It sees the IDs of both devices and their network addresses while connecting them. No voice and no images go through it.",
        ],
      },
      {
        id: "tiers",
        titre: "Services from other companies",
        blocs: [
          "Some features go through services we don’t run. Here is every one of them.",
          {
            tableau: {
              entetes: ["Service", "When", "What it receives"],
              lignes: [
                [
                  "**Firebase Cloud Messaging** (Google)",
                  "Notifications, with internet features",
                  "A token specific to your phone. A notification contains only an event type and an ID, never the message.",
                ],
                [
                  "**STUN servers** (Google, Cloudflare, FreeVoIP)",
                  "Calls over the internet",
                  "Your IP address, to find the most direct path between two phones.",
                ],
                [
                  "**TURN call relays** (Cloudflare, Metered, ExpressTURN)",
                  "Calls, when the direct connection fails",
                  "Your IP address and the **encrypted** audio or video, which they pass along without being able to open it.",
                ],
                [
                  "**Groq**",
                  "Online assistant, if you add your own key",
                  "The messages you write to the assistant, the memories you have shared with it and, in voice mode, the recording of your voice. They are processed under Groq’s policy.",
                ],
                [
                  "**MyMemory** (Translated)",
                  "Translation, if you turn on online mode",
                  "The text to translate, unencrypted.",
                ],
                [
                  "**Websites mentioned in a message**",
                  "Link previews, if you turn on online mode",
                  "A visit to the page, from your phone, to display its title and image.",
                ],
                [
                  "**CARTO**",
                  "When you open a map",
                  "Requests for map tiles, which reveal the area being displayed.",
                ],
                [
                  "**GitHub**",
                  "Just once, if you install the on-device assistant",
                  "The download of the artificial intelligence model. After that, the on-device assistant works without the internet.",
                ],
              ],
            },
          },
          "By default, the assistant runs **on your phone**: nothing you say to it leaves the device. It only goes through Groq if you add a Groq key yourself, which is kept in your phone’s key vault.",
        ],
      },
      {
        id: "relais",
        titre: "What relaying phones see",
        blocs: [
          "Without a network, a message hops from Droplet phone to Droplet phone. These phones carry a sealed envelope: they cannot read what’s inside.",
          "To route the envelope, however, they do see: the sender’s and recipient’s (or group’s) ID, the time it was sent, the number of hops already made, the message type and size, and its lifetime if it is disappearing.",
          {
            encadre:
              "Three things are **public by nature** and readable by phones in range: the statuses you share with “Everyone”, messages broadcast to everyone, and the “I’m safe” signal from the emergency screen, along with your approximate location if you choose to include it.",
          },
        ],
      },
      {
        id: "facultatif",
        titre: "What you choose to turn on",
        blocs: [
          {
            liste: [
              "**Online mode** (off by default) tells the directory you’re online, every two minutes while the app is open, and turns on translation and link previews.",
              "**Online backup** (off by default) sends a copy of your data to the directory every day, encrypted with a password only you know. Without that password, the copy is unreadable, including to us.",
              "**Backup to a file** creates an encrypted file that you can store wherever you like. It doesn’t go through any server.",
              "**Droplet announcements**: up to twice a day, the app downloads a short announcements file, signed so it can’t be tampered with. It sends nothing other than the request itself.",
            ],
          },
        ],
      },
      {
        id: "ne-collecte-pas",
        titre: "What Droplet never asks for",
        blocs: [
          {
            liste: [
              "Your phone number",
              "Your email address",
              "Your address book",
              "Your location, unless you send it yourself",
              "Advertising or tracking data",
              "Usage statistics",
            ],
          },
          "Droplet makes no automated decisions about you and builds no profile.",
        ],
      },
      {
        id: "autorisations",
        titre: "Permissions, and why",
        blocs: [
          {
            tableau: {
              entetes: ["Permission", "Why"],
              lignes: [
                ["Bluetooth and nearby devices", "To find Droplet phones around you and pass messages to them."],
                ["Location", "Android requires it to search for devices over Wi‑Fi. It is also used when you send your location or use the map."],
                ["Microphone", "Voice messages, calls, voice assistant."],
                ["Camera", "Photos, videos, scanning QR codes."],
                ["Photos, videos and audio", "To send a file from your phone."],
                ["Notifications", "To let you know about messages and calls."],
                ["Background service, battery", "To keep relaying and receiving when the app is closed."],
              ],
            },
          },
          "Each permission can be denied or revoked in Android settings. Droplet keeps working without it; only the feature that depends on it stops.",
        ],
      },
      {
        id: "conservation",
        titre: "How long",
        blocs: [
          {
            liste: [
              "**On your phone**: until you delete a message or a chat, the disappearing message expires, or you uninstall the app.",
              "**In the mailbox**: until the message is delivered, or expires.",
              "**In the directory**: as long as your phone keeps checking in. A registration that is no longer renewed eventually disappears.",
              "**Online backup**: the latest copy, as long as backup stays turned on.",
              "**Call connection and call relays**: nothing is kept after the call.",
            ],
          },
        ],
      },
      {
        id: "transferts",
        titre: "Where these servers are",
        blocs: [
          "Railway, Cloudflare, Google and Groq are American companies; their machines may be located outside the European Union. What reaches them is kept to the strict minimum, and messages remain encrypted there.",
        ],
      },
      {
        id: "droits",
        titre: "Your rights",
        blocs: [
          "Depending on the law that applies to you (the GDPR in Europe, for example), you can access your data, correct it, delete it, restrict its use, object to its processing and take it elsewhere.",
          "Since there is no account, almost everything is done from your phone:",
          {
            liste: [
              "**Take your data with you**: Settings › Back up my identity, including message history if you wish.",
              "**Leave the directory**: turn off internet features in settings. Your registration is no longer renewed and disappears.",
              "**Erase everything from your phone**: uninstall the app.",
              "**Immediately delete an online backup or a registration**: write to us at {EMAIL}.",
            ],
          },
          "If our response doesn’t satisfy you, you can file a complaint with the data protection authority in your country.",
        ],
      },
      {
        id: "mineurs",
        titre: "Children",
        blocs: [
          "Droplet is not intended for children under 13. It doesn’t ask anyone’s age, since it doesn’t ask anyone for anything.",
        ],
      },
      {
        id: "site",
        titre: "This site",
        blocs: [
          "This site uses no cookies, no trackers and no audience measurement tools, and its fonts are hosted with it. The only thing it remembers, in your browser, is the color you chose. Like any site, its host receives your IP address when you open it.",
        ],
      },
      {
        id: "modifications",
        titre: "If this policy changes",
        blocs: [
          "The date of the last update appears at the top of this page. A change that would alter what our servers see would be announced in the app, not slipped quietly into an update.",
        ],
      },
    ],
  },

  // ══ TERMS OF USE ════════════════════════════════════════════════════════
  terms: {
    titre: "Terms of Use",
    court: "Terms",
    description: "The rules for using Droplet, written to be read.",
    chapo:
      "The rules for using Droplet, written to be read. By installing the app, you accept them.",
    sections: [
      {
        id: "service",
        titre: "The service",
        blocs: [
          "Droplet is a messaging app that connects phones to each other over Bluetooth and Wi‑Fi, and uses the internet when it’s available. It is published by {EDITEUR}.",
          "The app is free. If paid options are ever offered, their price and terms will be presented before any purchase.",
        ],
      },
      {
        id: "acheminement",
        titre: "A message may not arrive",
        blocs: [
          "Without a network, a message only arrives if Droplet phones form a link between you and your recipient. Range depends on the number of devices around you, walls, battery and each phone’s settings.",
          {
            encadre:
              "**Droplet is not a substitute for emergency services.** We cannot guarantee that a message will arrive, or when. If you are in danger, call for help by any means available.",
          },
        ],
      },
      {
        id: "identite",
        titre: "Your identity and your keys",
        blocs: [
          "Your Droplet identity is a key created on your phone. We have no copy of it. If you lose your phone without having made a backup, we can neither recover your messages nor restore your identity.",
          "You are responsible for the security of your phone and of your backup password.",
        ],
      },
      {
        id: "usage",
        titre: "What is prohibited",
        blocs: [
          "By using Droplet, you agree not to:",
          {
            liste: [
              "break the law, or help anyone do so;",
              "harass, threaten or impersonate anyone;",
              "send unsolicited messages in bulk;",
              "share child abuse content, or content inciting violence or hatred;",
              "disrupt the network, overload the relays or servers, or attempt to bypass their security;",
              "copy, modify or redistribute the app beyond what its license allows.",
            ],
          },
          "You can report a user from the app. We may remove someone who breaks these rules from the directory and from Droplet’s internet services.",
        ],
      },
      {
        id: "contenus",
        titre: "Your content",
        blocs: [
          "What you write and send belongs to you. Because your messages are end-to-end encrypted, we cannot read them, and we do not use them for any purpose.",
          "You are responsible for what you send, and you guarantee that you have the right to share it.",
        ],
      },
      {
        id: "tiers",
        titre: "Third-party services",
        blocs: [
          "Some optional features rely on other companies: the online assistant (Groq), translation (MyMemory), maps (CARTO). Their use is subject to their own terms. The full list is in the [Privacy Policy](/privacy/#tiers).",
        ],
      },
      {
        id: "assistant",
        titre: "The assistant",
        blocs: [
          "The assistant’s answers are generated by an artificial intelligence model. They may be inaccurate or incomplete. Do not rely on them for a medical, legal, financial or safety decision.",
        ],
      },
      {
        id: "propriete",
        titre: "Intellectual property",
        blocs: [
          "The Droplet name, its logo, the app and this site are protected. You are free to talk about Droplet and share this site; you may not suggest that another product is Droplet.",
        ],
      },
      {
        id: "responsabilite",
        titre: "Limitation of liability",
        blocs: [
          "Droplet is provided as is. To the extent permitted by law, {EDITEUR} cannot be held liable for a lost or delayed message, a service interruption, or indirect damages related to its use.",
          "Nothing in these terms limits the rights that the law of your country grants you as a consumer.",
        ],
      },
      {
        id: "arret",
        titre: "Stopping Droplet",
        blocs: [
          "You can stop at any time: uninstalling the app erases your data from the phone. We may change, suspend or discontinue all or part of the service; features that work without the internet keep working between phones.",
        ],
      },
      {
        id: "modifications",
        titre: "If these terms change",
        blocs: [
          "A significant change will be announced in the app before it takes effect. Continuing to use Droplet after that date constitutes acceptance.",
        ],
      },
      {
        id: "droit",
        titre: "Governing law",
        blocs: [
          "These terms are governed by the law of the country where {EDITEUR} is established, without depriving you of the mandatory protections of the country where you live. If there is a disagreement, write to us first: most problems are resolved that way.",
        ],
      },
      {
        id: "mentions",
        titre: "Legal notice",
        blocs: [
          {
            tableau: {
              entetes: ["", ""],
              lignes: [
                ["Publisher", "{EDITEUR}"],
                ["Contact", "{EMAIL}"],
                ["Website", "{SITE}"],
                ["App servers", "Railway Corporation, United States"],
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ SECURITY ════════════════════════════════════════════════════════════
  security: {
    titre: "Security",
    court: "Security",
    description: "How Droplet protects your messages, and what it can’t protect.",
    chapo:
      "How Droplet protects your messages end to end, what those who carry them can see, and what no app can protect for you.",
    sections: [
      {
        id: "bout-en-bout",
        titre: "End-to-end encrypted",
        blocs: [
          "A message is encrypted on your phone and only becomes readable again on your recipient’s. In between, whether it travels through nearby phones or over the internet, it is nothing but a string of unreadable characters.",
          "Droplet uses the **Signal Protocol**, the same principle as the major encrypted messaging apps: every message has its own key, and the key changes with every exchange. Even if a key were stolen one day, it would unlock neither earlier messages nor later ones.",
          "Encryption relies on proven algorithms: **X25519** to agree on a key, **AES‑256‑GCM** to encrypt, **HMAC-SHA256** to advance the keys.",
        ],
      },
      {
        id: "groupes",
        titre: "Groups",
        blocs: [
          "In a group, each member has their own sending key, shared with the other members through messages that are themselves encrypted. It moves forward with every message. When an admin removes someone from the group, the keys are renewed: the removed person cannot read what is written afterward.",
        ],
      },
      {
        id: "identite",
        titre: "An identity without a number",
        blocs: [
          "Your identity is a key pair created on your phone. There is no phone number, no email address and no account password to steal from a server.",
          "To be sure you’re talking to the right person, compare your **safety code** with theirs, or scan their QR code: if the two match, no one has slipped in between you.",
        ],
      },
      {
        id: "relais",
        titre: "Blind relays",
        blocs: [
          "Phones that relay a message carry a sealed envelope. They know where it comes from and where it’s going, not what it contains. The details of what they see are in the [Privacy Policy](/privacy/#relais).",
          "To also hide **who is talking to whom** on the internet, Droplet can go through **Tor**: our servers then no longer see your IP address.",
        ],
      },
      {
        id: "appels",
        titre: "Calls",
        blocs: [
          "Audio and video calls are end-to-end encrypted and go directly from one phone to the other whenever possible. When that’s not possible, a relay passes along the encrypted audio and video, without being able to listen in.",
        ],
      },
      {
        id: "sur-le-telephone",
        titre: "On your phone",
        blocs: [
          {
            liste: [
              "**Locked chats**: a chat can be hidden behind your fingerprint or your face.",
              "**Disappearing messages**: they delete themselves, on both sides, after the time you choose.",
              "**View once**: a photo or video that can only be opened once.",
              "**Encrypted backups**: protected by your password (PBKDF2, 300,000 iterations, then AES‑GCM). Without it, no one can open them, not even us.",
              "**Keys kept safe**: your identity key is stored in Android’s key vault.",
            ],
          },
        ],
      },
      {
        id: "limites",
        titre: "What Droplet can’t protect",
        blocs: [
          "Being honest about security also means stating its limits:",
          {
            liste: [
              "Someone holding your **unlocked** phone can read your chats that aren’t locked. Protect it with a passcode.",
              "The person you’re talking to can take a **screenshot** or photograph their screen.",
              "The **metadata** needed for delivery (who is writing to whom, and when) remains visible to relays and to our servers, unless Tor is on for the internet part.",
              "**Public statuses** and emergency signals are meant to be read by everyone in range.",
              "The **online assistant** and **translation** send text to third-party services. They are off by default.",
            ],
          },
        ],
      },
      {
        id: "signaler",
        titre: "Report a vulnerability",
        blocs: [
          "Found a security vulnerability? Write to us at {EMAIL} before making it public, with what we need to reproduce it. We respond to every report and keep you updated on the fix.",
        ],
      },
    ],
  },

  // ══ SUPPORT ═════════════════════════════════════════════════════════════
  support: {
    titre: "Droplet Support",
    court: "Support",
    description: "Install Droplet, add contacts, stay reachable without a network, and fix common problems.",
    chapo: "Everything you need to get started, stay reachable when the network goes down, and fix small problems.",
    sections: [
      {
        id: "demarrer",
        titre: "Getting started",
        resume: "Install Droplet and choose a username.",
        icone: "telephone",
        blocs: [
          {
            liste: [
              "**Download Droplet** from this site, on your Android phone.",
              "**Allow the installation** if Android asks: by default, it blocks apps downloaded outside the Play Store.",
              "**Open Droplet and choose a username.** That’s it: no number, no email.",
              "**Allow Bluetooth and nearby devices.** Without them, Droplet can’t find the phones around you.",
            ],
          },
        ],
      },
      {
        id: "contacts",
        titre: "Adding someone",
        resume: "Up close, by QR code or by link.",
        icone: "personnes",
        blocs: [
          {
            liste: [
              "**Up close**: bring your phones near each other, with Droplet open. The person appears on their own.",
              "**By QR code**: open your QR code and have it scanned, or scan theirs.",
              "**From a distance**: share your invitation link, or search for their username in the directory.",
            ],
          },
          "To check that it really is the right person, compare your safety codes. See [Security](/security/#identite).",
        ],
      },
      {
        id: "sans-reseau",
        titre: "When the network goes down",
        resume: "The settings that keep Droplet awake.",
        icone: "ondes",
        blocs: [
          "Droplet works without cellular data or Wi‑Fi, as long as the phone lets it run:",
          {
            liste: [
              "**Leave Bluetooth on.**",
              "**Remove Droplet from battery optimization** when the app offers to. Otherwise, Android may put it to sleep and you stop relaying anything.",
              "**On some brands** (Xiaomi, Huawei, Oppo, Samsung…), also allow autostart or background activity in the battery settings.",
              "**Install Droplet for the people close to you before you need it.** The more phones there are around you, the farther messages go.",
            ],
          },
        ],
      },
      {
        id: "en-attente",
        titre: "A message is stuck waiting",
        resume: "Why, and what to do.",
        icone: "horloge",
        blocs: [
          "No one is in range, and there’s no internet. The message waits on your phone and goes out on its own as soon as a path opens up: you don’t need to do anything again.",
          "If it keeps waiting even though the person is nearby:",
          {
            liste: [
              "check that Bluetooth is on for both of you;",
              "check that Droplet isn’t restricted by battery optimization;",
              "open Droplet on both phones for a few seconds.",
            ],
          },
        ],
      },
      {
        id: "appels",
        titre: "Audio and video calls",
        resume: "On the same Wi‑Fi, or over the internet.",
        icone: "appel",
        blocs: [
          "A call works when you’re on the same Wi‑Fi, or when you both have internet. Calls don’t hop from phone to phone the way messages do: voice needs a data rate that Bluetooth can’t provide across several hops.",
          "If the call doesn’t connect, check that Droplet has access to the microphone (and to the camera for video), then try again.",
        ],
      },
      {
        id: "sauvegarde",
        titre: "Switching phones",
        resume: "Back up and restore.",
        icone: "sauvegarde",
        blocs: [
          "Your messages exist only on your phone. Before switching:",
          {
            liste: [
              "**Settings › Back up my identity**: create an encrypted file, checking “Include message history”, and keep its password safe.",
              "Copy this file to the new phone, install Droplet and import it.",
            ],
          },
          "You can also turn on daily online backup, encrypted with your password.",
          {
            encadre:
              "Without a backup, uninstalling Droplet erases everything, permanently. No one can restore your messages, not even us.",
          },
        ],
      },
      {
        id: "batterie",
        titre: "Battery",
        resume: "What uses power, and how to use less.",
        icone: "batterie",
        blocs: [
          "Searching for devices around you uses a little battery. In settings, you can reduce it, or keep it active only while Droplet is open. You will then relay less for others.",
        ],
      },
      {
        id: "assistant",
        titre: "The assistant",
        resume: "On your phone, or online with your key.",
        icone: "etincelle",
        blocs: [
          "The assistant runs on your phone, without the internet, once its model is downloaded (about 530 MB). For more in-depth answers, you can add your own Groq key in its settings: your conversations then go through Groq.",
        ],
      },
      {
        id: "iphone",
        titre: "What about iPhone?",
        resume: "Droplet is available on Android.",
        icone: "question",
        blocs: [
          "Droplet is available on Android for now. Keep it installed on your Android devices: it relays messages for everyone around you who uses it.",
        ],
      },
      {
        id: "contact",
        titre: "Contact us",
        resume: "A question, a problem, an idea.",
        icone: "message",
        blocs: [
          "Write to us at {EMAIL}. In the app, **Settings › Contact & support › Report a problem** shows you the exact text that will be sent, and lets you attach the error log if you wish.",
          "Droplet is made by a small team, not a call center. A reply may take a day or two; it will come.",
        ],
      },
    ],
  },
};
