// Documents en allemand : sécurité et assistance seulement (les documents juridiques restent en français / anglais).
import type { Docs } from './types';

export const de: Pick<Docs, 'security' | 'support'> = {
  // ══ SICHERHEIT ══════════════════════════════════════════════════════════
  security: {
    titre: 'Sicherheit',
    court: 'Sicherheit',
    description: 'Wie Droplet Ihre Nachrichten schützt und was sich nicht schützen lässt.',
    chapo:
      'Wie Droplet Ihre Nachrichten Ende-zu-Ende schützt, was diejenigen sehen, die sie weiterleiten, und was keine App an Ihrer Stelle schützen kann.',
    sections: [
      {
        id: 'bout-en-bout',
        titre: 'Ende-zu-Ende-verschlüsselt',
        blocs: [
          'Eine Nachricht wird auf Ihrem Telefon verschlüsselt und ist erst auf dem Telefon Ihres Gegenübers wieder lesbar. Dazwischen, ob sie nun über Telefone in der Nähe oder über das Internet läuft, ist sie nur eine Folge unlesbarer Zeichen.',
          'Droplet verwendet das **Signal-Protokoll**, dasselbe Prinzip wie die großen verschlüsselten Messenger: Jede Nachricht hat ihren eigenen Schlüssel, und der Schlüssel ändert sich bei jedem Austausch. Selbst wenn ein Schlüssel eines Tages gestohlen würde, ließen sich damit weder frühere noch spätere Nachrichten öffnen.',
          'Die Verschlüsselung beruht auf bewährten Algorithmen: **X25519** zur Einigung auf einen Schlüssel, **AES‑256‑GCM** zum Verschlüsseln und **HMAC-SHA256**, um die Schlüssel weiterzuentwickeln.',
        ],
      },
      {
        id: 'groupes',
        titre: 'Gruppen',
        blocs: [
          'In einer Gruppe besitzt jedes Mitglied einen eigenen Sendeschlüssel, der den anderen Mitgliedern in ebenfalls verschlüsselten Nachrichten übermittelt wird. Er rückt mit jeder Nachricht weiter. Wenn ein Administrator jemanden aus der Gruppe entfernt, werden die Schlüssel erneuert: Die entfernte Person kann nicht lesen, was danach geschrieben wird.',
        ],
      },
      {
        id: 'identite',
        titre: 'Eine Identität ohne Telefonnummer',
        blocs: [
          'Ihre Identität ist ein Schlüsselpaar, das auf Ihrem Telefon erzeugt wird. Es gibt weder Telefonnummer noch E‑Mail-Adresse noch ein Konto-Passwort, das auf einem Server gestohlen werden könnte.',
          'Um sicherzugehen, dass Sie mit der richtigen Person sprechen, vergleichen Sie Ihren **Sicherheitscode** mit ihrem oder scannen Sie ihren QR-Code: Stimmen beide überein, hat sich niemand zwischen Sie geschaltet.',
        ],
      },
      {
        id: 'relais',
        titre: 'Blinde Relais',
        blocs: [
          'Die Telefone, die eine Nachricht weiterleiten, transportieren einen versiegelten Umschlag. Sie wissen, woher er kommt und wohin er geht, aber nicht, was darin steht. Die Einzelheiten dazu, was sie sehen, finden Sie in der [Datenschutzerklärung](/privacy/#relais).',
          'Um im Internet auch zu verbergen, **wer mit wem spricht**, kann Droplet über **Tor** laufen: Unsere Server sehen dann Ihre IP-Adresse nicht mehr.',
        ],
      },
      {
        id: 'appels',
        titre: 'Anrufe',
        blocs: [
          'Audio- und Videoanrufe sind Ende-zu-Ende-verschlüsselt und laufen, sobald es möglich ist, direkt von einem Telefon zum anderen. Ist das nicht möglich, leitet ein Relais Ton und Bild verschlüsselt weiter, ohne sie mithören zu können.',
        ],
      },
      {
        id: 'sur-le-telephone',
        titre: 'Auf Ihrem Telefon',
        blocs: [
          {
            liste: [
              '**Gesperrte Chats**: Ein Chat lässt sich hinter Ihrem Fingerabdruck oder Gesicht verbergen.',
              '**Selbstlöschende Nachrichten**: Sie verschwinden nach der gewählten Frist von selbst, auf beiden Seiten.',
              '**Einmalansicht**: ein Foto oder Video, das sich nur ein einziges Mal öffnen lässt.',
              '**Verschlüsselte Sicherungen**: geschützt durch Ihr Passwort (PBKDF2, 300.000 Iterationen, dann AES‑GCM). Ohne dieses Passwort kann niemand sie öffnen, auch wir nicht.',
              '**Sicher verwahrte Schlüssel**: Ihr Identitätsschlüssel liegt im Schlüsselspeicher von Android.',
            ],
          },
        ],
      },
      {
        id: 'limites',
        titre: 'Was Droplet nicht schützen kann',
        blocs: [
          'Ehrlich über Sicherheit zu sprechen heißt auch, ihre Grenzen zu nennen:',
          {
            liste: [
              'Wer Ihr **entsperrtes** Telefon in der Hand hält, kann Ihre nicht gesperrten Chats lesen. Schützen Sie es mit einem Code.',
              'Ihr Gegenüber kann einen **Screenshot** machen oder seinen Bildschirm abfotografieren.',
              'Die für die Zustellung nötigen **Metadaten** (wer wem wann schreibt) bleiben für die Relais und unsere Server sichtbar, außer Tor ist für den Internetteil aktiv.',
              '**Öffentliche Status** und Notfallsignale sind dafür gedacht, von allen in Reichweite gelesen zu werden.',
              'Der **Online-Assistent** und die **Übersetzung** senden Text an Dienste von Drittanbietern. Beide sind standardmäßig deaktiviert.',
            ],
          },
        ],
      },
      {
        id: 'signaler',
        titre: 'Sicherheitslücke melden',
        blocs: [
          'Sie haben eine Sicherheitslücke gefunden? Schreiben Sie uns an {EMAIL}, bevor Sie sie veröffentlichen, und legen Sie bitte genug bei, um sie nachvollziehen zu können. Wir antworten auf jede Meldung und halten Sie über die Behebung auf dem Laufenden.',
        ],
      },
    ],
  },

  // ══ SUPPORT ═════════════════════════════════════════════════════════════
  support: {
    titre: 'Droplet Support',
    court: 'Support',
    description: 'Droplet installieren, Kontakte hinzufügen, ohne Netz erreichbar bleiben und häufige Probleme lösen.',
    chapo: 'Alles für einen guten Start, für Erreichbarkeit bei Netzausfall und für die kleinen Probleme.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Erste Schritte',
        resume: 'Droplet installieren und einen Namen wählen.',
        icone: 'telephone',
        blocs: [
          {
            liste: [
              '**Laden Sie Droplet** von dieser Website auf Ihr Android-Telefon herunter.',
              '**Erlauben Sie die Installation**, wenn Android danach fragt: Apps, die nicht aus dem Play Store stammen, werden standardmäßig blockiert.',
              '**Öffnen Sie Droplet und wählen Sie einen Namen.** Das ist alles: keine Nummer, keine E‑Mail.',
              '**Erlauben Sie Bluetooth und Geräte in der Nähe.** Ohne diese kann Droplet die Telefone in Ihrer Umgebung nicht finden.',
            ],
          },
        ],
      },
      {
        id: 'contacts',
        titre: 'Jemanden hinzufügen',
        resume: 'Aus der Nähe, per QR-Code oder per Link.',
        icone: 'personnes',
        blocs: [
          {
            liste: [
              '**Aus der Nähe**: Halten Sie die Telefone nebeneinander, mit geöffnetem Droplet. Die Person erscheint von selbst.',
              '**Per QR-Code**: Öffnen Sie Ihren QR-Code und lassen Sie ihn scannen, oder scannen Sie den der anderen Person.',
              '**Aus der Ferne**: Teilen Sie Ihren Einladungslink oder suchen Sie den Namen der Person im Verzeichnis.',
            ],
          },
          'Um sicherzugehen, dass es die richtige Person ist, vergleichen Sie Ihre Sicherheitscodes. Siehe [Sicherheit](/security/#identite).',
        ],
      },
      {
        id: 'sans-reseau',
        titre: 'Wenn das Netz ausfällt',
        resume: 'Die Einstellungen, die Droplet wach halten.',
        icone: 'ondes',
        blocs: [
          'Droplet funktioniert ohne Mobilfunk und WLAN, sofern das Telefon es laufen lässt:',
          {
            liste: [
              '**Lassen Sie Bluetooth eingeschaltet.**',
              '**Nehmen Sie Droplet aus der Akkuoptimierung heraus**, wenn die App Sie dazu auffordert. Sonst kann Android sie schlafen legen, und Sie leiten nichts mehr weiter.',
              '**Bei einigen Herstellern** (Xiaomi, Huawei, Oppo, Samsung …) erlauben Sie in den Akkueinstellungen zusätzlich den automatischen Start oder die Aktivität im Hintergrund.',
              '**Installieren Sie Droplet bei Ihren Liebsten, bevor Sie es brauchen.** Je mehr Telefone um Sie herum sind, desto weiter kommen die Nachrichten.',
            ],
          },
        ],
      },
      {
        id: 'en-attente',
        titre: 'Eine Nachricht wartet noch',
        resume: 'Warum das so ist und was Sie tun können.',
        icone: 'horloge',
        blocs: [
          'Niemand ist in Reichweite, und es gibt kein Internet. Die Nachricht wartet auf Ihrem Telefon und wird von selbst gesendet, sobald sich ein Weg auftut: Sie müssen nichts erneut tun.',
          'Wenn das Warten andauert, obwohl die Person in der Nähe ist:',
          {
            liste: [
              'Prüfen Sie, ob Bluetooth auf beiden Seiten eingeschaltet ist;',
              'prüfen Sie, ob Droplet nicht durch die Akkuoptimierung eingeschränkt wird;',
              'öffnen Sie Droplet auf beiden Telefonen für einige Sekunden.',
            ],
          },
        ],
      },
      {
        id: 'appels',
        titre: 'Audio- und Videoanrufe',
        resume: 'Im selben WLAN oder über das Internet.',
        icone: 'appel',
        blocs: [
          'Ein Anruf funktioniert, wenn Sie im selben WLAN sind oder beide Internet haben. Anrufe laufen nicht wie Nachrichten von Telefon zu Telefon: Die Stimme braucht eine Datenrate, die Bluetooth über mehrere Stationen nicht liefern kann.',
          'Wenn sich der Anruf nicht verbindet, prüfen Sie, ob Droplet auf das Mikrofon zugreifen darf (und für Video auf die Kamera), und versuchen Sie es dann erneut.',
        ],
      },
      {
        id: 'sauvegarde',
        titre: 'Telefon wechseln',
        resume: 'Sichern und wiederherstellen.',
        icone: 'sauvegarde',
        blocs: [
          'Ihre Nachrichten befinden sich nur auf Ihrem Telefon. Bevor Sie es wechseln:',
          {
            liste: [
              '**Einstellungen › Meine Identität sichern**: Erstellen Sie eine verschlüsselte Datei, aktivieren Sie dabei „Nachrichtenverlauf einschließen“ und bewahren Sie das Passwort gut auf.',
              'Kopieren Sie diese Datei auf das neue Telefon, installieren Sie Droplet und importieren Sie sie.',
            ],
          },
          'Sie können auch die tägliche Online-Sicherung aktivieren, verschlüsselt mit Ihrem Passwort.',
          {
            encadre:
              'Ohne Sicherung löscht das Deinstallieren von Droplet alles, endgültig. Niemand kann Ihre Nachrichten wiederherstellen, auch wir nicht.',
          },
        ],
      },
      {
        id: 'batterie',
        titre: 'Akku',
        resume: 'Was Strom verbraucht und wie Sie ihn sparen.',
        icone: 'batterie',
        blocs: [
          'Die Suche nach Geräten in Ihrer Umgebung verbraucht etwas Akku. In den Einstellungen können Sie sie reduzieren oder nur dann aktiv lassen, wenn Droplet geöffnet ist. Dann leiten Sie allerdings weniger für andere weiter.',
        ],
      },
      {
        id: 'assistant',
        titre: 'Der Assistent',
        resume: 'Auf dem Telefon oder online mit Ihrem Schlüssel.',
        icone: 'etincelle',
        blocs: [
          'Der Assistent läuft auf Ihrem Telefon, ohne Internet, sobald sein Modell heruntergeladen ist (etwa 530 MB). Für ausführlichere Antworten können Sie in seinen Einstellungen Ihren eigenen Groq-Schlüssel hinzufügen: Ihre Unterhaltungen laufen dann über Groq.',
        ],
      },
      {
        id: 'iphone',
        titre: 'Und auf dem iPhone?',
        resume: 'Droplet ist für Android verfügbar.',
        icone: 'question',
        blocs: [
          'Droplet ist vorerst für Android verfügbar. Lassen Sie es auf Ihren Android-Geräten installiert: Es leitet Nachrichten für alle weiter, die es in Ihrer Umgebung nutzen.',
        ],
      },
      {
        id: 'contact',
        titre: 'Kontakt',
        resume: 'Eine Frage, ein Problem, eine Idee.',
        icone: 'message',
        blocs: [
          'Schreiben Sie uns an {EMAIL}. In der App zeigt Ihnen **Einstellungen › Kontakt & Support › Problem melden** den genauen Text, der gesendet wird, und lässt Sie auf Wunsch das Fehlerprotokoll anhängen.',
          'Droplet wird von einem kleinen Team gemacht, nicht von einem Callcenter. Die Antwort kann ein bis zwei Tage dauern; sie kommt.',
        ],
      },
    ],
  },
};
