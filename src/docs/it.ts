// Documents en italien : sécurité et assistance seulement (confidentialité et
// conditions restent en français / anglais, par choix).
import type { Docs } from './types';

export const it: Pick<Docs, 'security' | 'support'> = {
  // ══ SICUREZZA ═══════════════════════════════════════════════════════════
  security: {
    titre: "Sicurezza",
    court: "Sicurezza",
    description: "Come Droplet protegge i tuoi messaggi e ciò che non può proteggere.",
    chapo:
      "Come Droplet protegge i tuoi messaggi con la crittografia end-to-end, che cosa vede chi li trasporta e che cosa nessuna app può proteggere al posto tuo.",
    sections: [
      {
        id: "bout-en-bout",
        titre: "Crittografia end-to-end",
        blocs: [
          "Un messaggio viene cifrato sul tuo telefono e torna leggibile solo su quello del destinatario. Nel mezzo, che passi da telefoni vicini o da Internet, è soltanto una sequenza di caratteri illeggibili.",
          "Droplet usa il **protocollo Signal**, lo stesso principio delle grandi app di messaggistica cifrate: ogni messaggio ha la sua chiave, e la chiave cambia a ogni scambio. Anche se un giorno una chiave venisse sottratta, non aprirebbe né i messaggi precedenti né quelli successivi.",
          "La crittografia si basa su algoritmi collaudati: **X25519** per concordare una chiave, **AES‑256‑GCM** per cifrare, **HMAC-SHA256** per far evolvere le chiavi.",
        ],
      },
      {
        id: "groupes",
        titre: "I gruppi",
        blocs: [
          "In un gruppo, ogni membro ha la propria chiave di invio, trasmessa agli altri membri con messaggi a loro volta cifrati. La chiave avanza a ogni messaggio. Quando un amministratore rimuove qualcuno dal gruppo, le chiavi vengono rinnovate: la persona rimossa non può leggere ciò che viene scritto dopo.",
        ],
      },
      {
        id: "identite",
        titre: "Un'identità senza numero",
        blocs: [
          "La tua identità è una coppia di chiavi creata sul tuo telefono. Non c'è alcun numero di telefono, alcun indirizzo e-mail, alcuna password di account che si possa rubare da un server.",
          "Per essere sicuro di parlare con la persona giusta, confronta il tuo **codice di sicurezza** con il suo, oppure scansiona il suo codice QR: se i due corrispondono, nessuno si è messo in mezzo.",
        ],
      },
      {
        id: "relais",
        titre: "Relay ciechi",
        blocs: [
          "I telefoni che inoltrano un messaggio trasportano una busta sigillata. Sanno da dove arriva e dove va, non che cosa contiene. Trovi il dettaglio di ciò che vedono nell'[informativa sulla privacy](/privacy/#relais).",
          "Per nascondere anche **chi parla con chi** su Internet, Droplet può passare da **Tor**: i nostri server, allora, non vedono più il tuo indirizzo IP.",
        ],
      },
      {
        id: "appels",
        titre: "Le chiamate",
        blocs: [
          "Le chiamate audio e video sono cifrate end-to-end e passano direttamente da un telefono all'altro quando è possibile. Quando non lo è, un relay inoltra audio e video cifrati, senza poterli ascoltare.",
        ],
      },
      {
        id: "sur-le-telephone",
        titre: "Sul tuo telefono",
        blocs: [
          {
            liste: [
              "**Conversazioni bloccate**: una conversazione può nascondersi dietro la tua impronta o il tuo volto.",
              "**Messaggi effimeri**: si cancellano da soli, da entrambe le parti, dopo il tempo che hai scelto.",
              "**Visualizzazione singola**: una foto o un video che si apre una sola volta.",
              "**Backup cifrati**: protetti dalla tua password (PBKDF2, 300.000 iterazioni, poi AES‑GCM). Senza la password nessuno può aprirli, nemmeno noi.",
              "**Chiavi al sicuro**: la tua chiave di identità è custodita nel portachiavi di Android.",
            ],
          },
        ],
      },
      {
        id: "limites",
        titre: "Ciò che Droplet non può proteggere",
        blocs: [
          "Essere onesti sulla sicurezza significa anche dirne i limiti:",
          {
            liste: [
              "Chi ha in mano il tuo telefono **sbloccato** può leggere le tue conversazioni non bloccate. Proteggilo con un codice.",
              "La persona con cui parli può fare uno **screenshot** o fotografare il proprio schermo.",
              "I **metadati** necessari all'inoltro (chi scrive a chi, quando) restano visibili ai relay e ai nostri server, a meno che Tor non sia attivo per la parte su Internet.",
              "Gli **stati pubblici** e i segnali di emergenza sono fatti per essere letti da tutti quelli che sono nelle vicinanze.",
              "L'**assistente online** e la **traduzione** inviano testo a servizi di terze parti. Sono disattivati per impostazione predefinita.",
            ],
          },
        ],
      },
      {
        id: "signaler",
        titre: "Segnalare una vulnerabilità",
        blocs: [
          "Hai trovato una falla di sicurezza? Scrivici a {EMAIL} prima di renderla pubblica, con tutto ciò che serve per riprodurla. Rispondiamo a ogni segnalazione e ti teniamo aggiornato sulla correzione.",
        ],
      },
    ],
  },

  // ══ SUPPORTO ════════════════════════════════════════════════════════════
  support: {
    titre: "Supporto Droplet",
    court: "Supporto",
    description: "Installare Droplet, aggiungere contatti, restare raggiungibile senza rete e risolvere i problemi più comuni.",
    chapo: "Tutto per iniziare bene, restare raggiungibile quando la rete cade e risolvere i piccoli problemi.",
    sections: [
      {
        id: "demarrer",
        titre: "Per iniziare",
        resume: "Installa Droplet e scegli un nome utente.",
        icone: "telephone",
        blocs: [
          {
            liste: [
              "**Scarica Droplet** da questo sito, sul tuo telefono Android.",
              "**Consenti l'installazione** se Android te lo chiede: per impostazione predefinita blocca le app scaricate al di fuori del Play Store.",
              "**Apri Droplet e scegli un nome utente.** Tutto qui: niente numero di telefono, niente e-mail.",
              "**Accetta Bluetooth e dispositivi nelle vicinanze.** Senza, Droplet non può trovare i telefoni intorno a te.",
            ],
          },
        ],
      },
      {
        id: "contacts",
        titre: "Aggiungere qualcuno",
        resume: "Da vicino, con un codice QR o con un link.",
        icone: "personnes",
        blocs: [
          {
            liste: [
              "**Da vicino**: avvicina i telefoni, con Droplet aperto. La persona compare da sola.",
              "**Con un codice QR**: apri il tuo codice QR e fallo scansionare, oppure scansiona il suo.",
              "**A distanza**: condividi il tuo link di invito, oppure cerca il suo nome utente nell'elenco.",
            ],
          },
          "Per verificare che sia proprio la persona giusta, confronta i vostri codici di sicurezza. Vedi [Sicurezza](/security/#identite).",
        ],
      },
      {
        id: "sans-reseau",
        titre: "Quando la rete cade",
        resume: "Le impostazioni che tengono Droplet attivo.",
        icone: "ondes",
        blocs: [
          "Droplet funziona senza 4G né Wi‑Fi, a patto che il telefono lo lasci attivo:",
          {
            liste: [
              "**Lascia il Bluetooth attivo.**",
              "**Escludi Droplet dall'ottimizzazione della batteria** quando l'app te lo propone. Senza, Android può metterlo in pausa e non inoltrerai più nulla.",
              "**Su alcune marche** (Xiaomi, Huawei, Oppo, Samsung…), consenti anche l'avvio automatico o l'attività in background nelle impostazioni della batteria.",
              "**Installa Droplet sui telefoni dei tuoi cari prima di averne bisogno.** Più telefoni ci sono intorno a te, più lontano arrivano i messaggi.",
            ],
          },
        ],
      },
      {
        id: "en-attente",
        titre: "Un messaggio resta in attesa",
        resume: "Perché succede e che cosa fare.",
        icone: "horloge",
        blocs: [
          "Nessuno è nelle vicinanze e Internet non c'è. Il messaggio aspetta nel tuo telefono e parte da solo non appena si apre una strada: non devi rifare nulla.",
          "Se l'attesa si prolunga anche se la persona è vicina:",
          {
            liste: [
              "controlla che il Bluetooth sia attivo su entrambi i telefoni;",
              "controlla che Droplet non sia limitato dall'ottimizzazione della batteria;",
              "apri Droplet su entrambi i telefoni per qualche secondo.",
            ],
          },
        ],
      },
      {
        id: "appels",
        titre: "Chiamate audio e video",
        resume: "Sulla stessa rete Wi‑Fi, o tramite Internet.",
        icone: "appel",
        blocs: [
          "Una chiamata funziona quando siete sulla stessa rete Wi‑Fi, oppure quando avete entrambi Internet. Le chiamate non passano da telefono a telefono come i messaggi: la voce richiede una velocità che il Bluetooth non può offrire su più salti.",
          "Se la chiamata non si connette, controlla che Droplet abbia accesso al microfono (e alla fotocamera per il video), poi riprova.",
        ],
      },
      {
        id: "sauvegarde",
        titre: "Cambiare telefono",
        resume: "Eseguire il backup e ripristinare.",
        icone: "sauvegarde",
        blocs: [
          "I tuoi messaggi sono solo sul tuo telefono. Prima di cambiarlo:",
          {
            liste: [
              "**Impostazioni › Esegui il backup della mia identità**: crea un file cifrato, selezionando «Includi la cronologia dei messaggi», e conserva con cura la password.",
              "Copia il file sul nuovo telefono, installa Droplet e importalo.",
            ],
          },
          "Puoi anche attivare il backup online quotidiano, cifrato con la tua password.",
          {
            encadre:
              "Senza un backup, disinstallare Droplet cancella tutto, in modo definitivo. Nessuno può ripristinare i tuoi messaggi, nemmeno noi.",
          },
        ],
      },
      {
        id: "batterie",
        titre: "Batteria",
        resume: "Che cosa consuma e come ridurre il consumo.",
        icone: "batterie",
        blocs: [
          "La ricerca di dispositivi intorno a te consuma un po' di batteria. Nelle impostazioni puoi ridurla, oppure lasciarla attiva solo quando Droplet è aperto. In quel caso inoltrerai meno messaggi per gli altri.",
        ],
      },
      {
        id: "assistant",
        titre: "L'assistente",
        resume: "Sul telefono, oppure online con la tua chiave.",
        icone: "etincelle",
        blocs: [
          "L'assistente funziona sul tuo telefono, senza Internet, una volta scaricato il suo modello (circa 530 MB). Per risposte più approfondite puoi aggiungere la tua chiave Groq nelle sue impostazioni: le tue conversazioni passeranno allora da Groq.",
        ],
      },
      {
        id: "iphone",
        titre: "E su iPhone?",
        resume: "Droplet è disponibile su Android.",
        icone: "question",
        blocs: [
          "Per il momento Droplet è disponibile su Android. Lascialo installato sui tuoi dispositivi Android: inoltra i messaggi per tutti quelli che lo usano intorno a te.",
        ],
      },
      {
        id: "contact",
        titre: "Contattaci",
        resume: "Una domanda, un problema, un'idea.",
        icone: "message",
        blocs: [
          "Scrivici a {EMAIL}. Dall'app, **Impostazioni › Contatti e assistenza › Segnala un problema** ti mostra il testo esatto che verrà inviato e ti lascia allegare il registro degli errori, se vuoi.",
          "Droplet è fatto da un piccolo team, non da un call center. La risposta può richiedere un giorno o due, ma arriva.",
        ],
      },
    ],
  },
};
