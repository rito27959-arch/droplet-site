// Documents « Sécurité » et « Assistance », en espagnol (la confidentialité et les conditions restent en français et en anglais).
import type { Docs } from './types';

export const es: Pick<Docs, 'security' | 'support'> = {
  // ══ SEGURIDAD ═══════════════════════════════════════════════════════════
  security: {
    titre: 'Seguridad',
    court: 'Seguridad',
    description: 'Cómo protege Droplet tus mensajes, y lo que no puede proteger.',
    chapo:
      'Cómo protege Droplet tus mensajes de extremo a extremo, qué ven quienes los transportan y qué no puede proteger por ti ninguna aplicación.',
    sections: [
      {
        id: 'bout-en-bout',
        titre: 'Cifrado de extremo a extremo',
        blocs: [
          'Un mensaje se cifra en tu teléfono y solo vuelve a ser legible en el de tu destinatario. Entre los dos, ya pase por teléfonos cercanos o por Internet, es solo una secuencia de caracteres ilegibles.',
          'Droplet usa el **protocolo Signal**, el mismo principio que las grandes aplicaciones de mensajería cifrada: cada mensaje tiene su propia clave, y la clave cambia en cada intercambio. Aunque algún día robaran una clave, no abriría ni los mensajes anteriores ni los posteriores.',
          'El cifrado se basa en algoritmos probados: **X25519** para acordar una clave, **AES‑256‑GCM** para cifrar y **HMAC-SHA256** para hacer evolucionar las claves.',
        ],
      },
      {
        id: 'groupes',
        titre: 'Los grupos',
        blocs: [
          'En un grupo, cada miembro tiene su propia clave de envío, que se transmite a los demás miembros mediante mensajes también cifrados. Avanza con cada mensaje. Cuando un administrador quita a alguien del grupo, las claves se renuevan: la persona quitada no puede leer lo que se escriba después.',
        ],
      },
      {
        id: 'identite',
        titre: 'Una identidad sin número',
        blocs: [
          'Tu identidad es un par de claves creado en tu teléfono. No hay número de teléfono, ni correo electrónico, ni contraseña de cuenta que puedan robarte de un servidor.',
          'Para asegurarte de que hablas con la persona correcta, compara tu **código de seguridad** con el suyo, o escanea su código QR: si coinciden, nadie se ha colado entre vosotros.',
        ],
      },
      {
        id: 'relais',
        titre: 'Relés a ciegas',
        blocs: [
          'Los teléfonos que retransmiten un mensaje llevan un sobre sellado. Saben de dónde viene y a dónde va, pero no qué contiene. El detalle de lo que ven está en la [política de privacidad](/privacy/#relais).',
          'Para ocultar también **quién habla con quién** en Internet, Droplet puede usar **Tor**: nuestros servidores dejan entonces de ver tu dirección IP.',
        ],
      },
      {
        id: 'appels',
        titre: 'Las llamadas',
        blocs: [
          'Las llamadas de audio y de vídeo están cifradas de extremo a extremo y van directamente de un teléfono a otro siempre que es posible. Cuando no lo es, un relé reenvía el sonido y la imagen cifrados, sin poder escucharlos.',
        ],
      },
      {
        id: 'sur-le-telephone',
        titre: 'En tu teléfono',
        blocs: [
          {
            liste: [
              '**Conversaciones bloqueadas**: una conversación puede quedar oculta tras tu huella o tu rostro.',
              '**Mensajes efímeros**: se borran solos, en ambos lados, tras el plazo que elijas.',
              '**Ver una sola vez**: una foto o un vídeo que solo se abre una vez.',
              '**Copias de seguridad cifradas**: protegidas por tu contraseña (PBKDF2, 300 000 iteraciones, y luego AES‑GCM). Sin ella, nadie puede abrirlas, nosotros tampoco.',
              '**Claves a salvo**: tu clave de identidad se guarda en el almacén de claves de Android.',
            ],
          },
        ],
      },
      {
        id: 'limites',
        titre: 'Lo que Droplet no puede proteger',
        blocs: [
          'Ser honestos sobre la seguridad también es decir cuáles son sus límites:',
          {
            liste: [
              'Quien tenga tu teléfono **desbloqueado** puede leer tus conversaciones no bloqueadas. Protégelo con un código.',
              'Tu interlocutor puede hacer una **captura de pantalla** o fotografiar su pantalla.',
              'Los **metadatos** necesarios para entregar el mensaje (quién escribe a quién, cuándo) siguen siendo visibles para los relés y para nuestros servidores, salvo que Tor esté activo en la parte de Internet.',
              'Los **estados públicos** y las señales de emergencia están hechos para que los lea cualquiera que esté al alcance.',
              'El **asistente en línea** y la **traducción** envían texto a servicios de terceros. Están desactivados de forma predeterminada.',
            ],
          },
        ],
      },
      {
        id: 'signaler',
        titre: 'Informar de una vulnerabilidad',
        blocs: [
          '¿Has encontrado una vulnerabilidad de seguridad? Escríbenos a {EMAIL} antes de hacerla pública, con lo necesario para reproducirla. Respondemos a cada aviso y te mantenemos al tanto de la corrección.',
        ],
      },
    ],
  },

  // ══ SOPORTE ═════════════════════════════════════════════════════════════
  support: {
    titre: 'Soporte de Droplet',
    court: 'Soporte',
    description: 'Instalar Droplet, añadir contactos, seguir localizable sin red y resolver los problemas más habituales.',
    chapo: 'Todo para empezar bien, seguir localizable cuando se cae la red y resolver los pequeños problemas.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Para empezar',
        resume: 'Instala Droplet y elige un seudónimo.',
        icone: 'telephone',
        blocs: [
          {
            liste: [
              '**Descarga Droplet** desde este sitio, en tu teléfono Android.',
              '**Permite la instalación** si Android te lo pide: de forma predeterminada bloquea las aplicaciones descargadas fuera de Play Store.',
              '**Abre Droplet y elige un seudónimo.** Eso es todo: sin número de teléfono, sin correo.',
              '**Acepta el Bluetooth y los dispositivos cercanos.** Sin ellos, Droplet no puede encontrar los teléfonos que tienes alrededor.',
            ],
          },
        ],
      },
      {
        id: 'contacts',
        titre: 'Añadir a alguien',
        resume: 'De cerca, con código QR o con un enlace.',
        icone: 'personnes',
        blocs: [
          {
            liste: [
              '**De cerca**: acerca los teléfonos con Droplet abierto. La persona aparece sola.',
              '**Con código QR**: abre tu código QR y pídele que lo escanee, o escanea el suyo.',
              '**A distancia**: comparte tu enlace de invitación, o busca su seudónimo en el directorio.',
            ],
          },
          'Para comprobar que es la persona correcta, comparad vuestros códigos de seguridad. Consulta [Seguridad](/security/#identite).',
        ],
      },
      {
        id: 'sans-reseau',
        titre: 'Cuando se cae la red',
        resume: 'Los ajustes que mantienen Droplet despierto.',
        icone: 'ondes',
        blocs: [
          'Droplet funciona sin datos móviles ni Wi‑Fi, siempre que el teléfono le deje seguir activo:',
          {
            liste: [
              '**Deja el Bluetooth activado.**',
              '**Quita Droplet de la optimización de batería** cuando la aplicación te lo proponga. Sin eso, Android puede dormirla y dejarás de retransmitir.',
              '**En algunas marcas** (Xiaomi, Huawei, Oppo, Samsung…), permite también el inicio automático o la actividad en segundo plano en los ajustes de batería.',
              '**Instala Droplet a tus allegados antes de necesitarlo.** Cuantos más teléfonos haya a tu alrededor, más lejos llegan los mensajes.',
            ],
          },
        ],
      },
      {
        id: 'en-attente',
        titre: 'Un mensaje se queda en espera',
        resume: 'Por qué, y qué hacer.',
        icone: 'horloge',
        blocs: [
          'No hay nadie al alcance y no hay Internet. El mensaje espera en tu teléfono y sale solo en cuanto se abre un camino: no tienes que repetir nada.',
          'Si la espera se alarga aunque la persona esté cerca:',
          {
            liste: [
              'comprueba que el Bluetooth está activado en ambos teléfonos;',
              'comprueba que la optimización de batería no restringe Droplet;',
              'abre Droplet en los dos teléfonos durante unos segundos.',
            ],
          },
        ],
      },
      {
        id: 'appels',
        titre: 'Llamadas de audio y de vídeo',
        resume: 'Con la misma red Wi‑Fi, o por Internet.',
        icone: 'appel',
        blocs: [
          'Una llamada funciona cuando estáis en la misma red Wi‑Fi, o cuando ambos tenéis Internet. Las llamadas no saltan de teléfono en teléfono como los mensajes: la voz necesita un caudal de datos que el Bluetooth no puede ofrecer a lo largo de varios saltos.',
          'Si la llamada no se conecta, comprueba que Droplet tiene acceso al micrófono (y a la cámara, para el vídeo) y vuelve a intentarlo.',
        ],
      },
      {
        id: 'sauvegarde',
        titre: 'Cambiar de teléfono',
        resume: 'Hacer una copia y restaurarla.',
        icone: 'sauvegarde',
        blocs: [
          'Tus mensajes solo están en tu teléfono. Antes de cambiarlo:',
          {
            liste: [
              '**Ajustes › Hacer copia de mi identidad**: crea un archivo cifrado, marcando «Incluir el historial de mensajes», y guarda bien su contraseña.',
              'Copia ese archivo al teléfono nuevo, instala Droplet e impórtalo.',
            ],
          },
          'También puedes activar la copia de seguridad diaria en línea, cifrada con tu contraseña.',
          {
            encadre:
              'Sin copia de seguridad, desinstalar Droplet lo borra todo, para siempre. Nadie puede restaurar tus mensajes, nosotros tampoco.',
          },
        ],
      },
      {
        id: 'batterie',
        titre: 'Batería',
        resume: 'Qué consume y cómo reducirlo.',
        icone: 'batterie',
        blocs: [
          'La búsqueda de dispositivos a tu alrededor consume algo de batería. En los ajustes puedes reducirla, o dejarla activa solo cuando Droplet esté abierto. Entonces retransmitirás menos mensajes para los demás.',
        ],
      },
      {
        id: 'assistant',
        titre: 'El asistente',
        resume: 'En el teléfono, o en línea con tu clave.',
        icone: 'etincelle',
        blocs: [
          'El asistente funciona en tu teléfono, sin Internet, una vez descargado su modelo (unos 530 MB). Para respuestas más completas, puedes añadir tu propia clave de Groq en sus ajustes: tus conversaciones pasarán entonces por Groq.',
        ],
      },
      {
        id: 'iphone',
        titre: '¿Y en iPhone?',
        resume: 'Droplet está disponible en Android.',
        icone: 'question',
        blocs: [
          'Por ahora, Droplet está disponible en Android. Déjalo instalado en tus dispositivos Android: retransmite los mensajes de todos los que lo usan a tu alrededor.',
        ],
      },
      {
        id: 'contact',
        titre: 'Contacta con nosotros',
        resume: 'Una pregunta, un problema, una idea.',
        icone: 'message',
        blocs: [
          'Escríbenos a {EMAIL}. Desde la aplicación, **Ajustes › Contacto y soporte › Informar de un problema** te muestra el texto exacto que se enviará y te permite adjuntar el registro de errores si quieres.',
          'Droplet lo hace un equipo pequeño, no un centro de llamadas. La respuesta puede tardar un día o dos; llega.',
        ],
      },
    ],
  },
};
