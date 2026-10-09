// Documentos em português (Brasil) — apenas segurança e suporte.
// Privacidade e termos ficam só em francês/inglês, por escolha.
import type { Docs } from './types';

export const pt: Pick<Docs, 'security' | 'support'> = {
  // ══ SEGURANÇA ═══════════════════════════════════════════════════════════
  security: {
    titre: 'Segurança',
    court: 'Segurança',
    description: "Como o Droplet protege suas mensagens e o que ele não consegue proteger.",
    chapo:
      "Como o Droplet protege suas mensagens de ponta a ponta, o que veem os celulares que as transportam e o que nenhum app pode proteger por você.",
    sections: [
      {
        id: 'bout-en-bout',
        titre: 'Criptografia de ponta a ponta',
        blocs: [
          "Uma mensagem é criptografada no seu celular e só volta a ser legível no celular de quem a recebe. No meio do caminho, seja por celulares próximos ou pela Internet, ela não passa de uma sequência de caracteres ilegíveis.",
          "O Droplet usa o **protocolo Signal**, o mesmo princípio dos grandes mensageiros criptografados: cada mensagem tem sua própria chave, e a chave muda a cada troca. Mesmo que uma chave fosse roubada um dia, ela não abriria nem as mensagens anteriores, nem as seguintes.",
          "A criptografia se baseia em algoritmos consagrados: **X25519** para combinar uma chave, **AES‑256‑GCM** para criptografar e **HMAC-SHA256** para fazer as chaves evoluírem.",
        ],
      },
      {
        id: 'groupes',
        titre: 'Os grupos',
        blocs: [
          "Em um grupo, cada integrante tem sua própria chave de envio, repassada aos outros por mensagens também criptografadas. Ela avança a cada mensagem. Quando um administrador remove alguém do grupo, as chaves são renovadas: quem saiu não consegue ler o que for escrito depois.",
        ],
      },
      {
        id: 'identite',
        titre: 'Uma identidade sem número',
        blocs: [
          "Sua identidade é um par de chaves criado no seu celular. Não há número de telefone, e-mail nem senha de conta para serem roubados de um servidor.",
          "Para ter certeza de que está falando com a pessoa certa, compare seu **código de segurança** com o dela, ou escaneie o código QR dela: se os dois forem iguais, ninguém se colocou entre vocês.",
        ],
      },
      {
        id: 'relais',
        titre: 'Retransmissores cegos',
        blocs: [
          "Os celulares que retransmitem uma mensagem carregam um envelope lacrado. Eles sabem de onde ele vem e para onde vai, mas não o que há dentro. Os detalhes do que eles veem estão na [política de privacidade](/privacy/#relais).",
          "Para esconder também **quem fala com quem** na Internet, o Droplet pode usar o **Tor**: nossos servidores deixam de ver seu endereço IP.",
        ],
      },
      {
        id: 'appels',
        titre: 'As chamadas',
        blocs: [
          "As chamadas de áudio e vídeo são criptografadas de ponta a ponta e vão direto de um celular ao outro sempre que possível. Quando não é possível, um retransmissor repassa o som e a imagem criptografados, sem conseguir ouvi-los.",
        ],
      },
      {
        id: 'sur-le-telephone',
        titre: 'No seu celular',
        blocs: [
          {
            liste: [
              "**Conversas trancadas**: uma conversa pode ficar escondida atrás da sua impressão digital ou do seu rosto.",
              "**Mensagens temporárias**: elas se apagam sozinhas, dos dois lados, depois do prazo escolhido.",
              "**Visualização única**: uma foto ou um vídeo que só abre uma vez.",
              "**Backups criptografados**: protegidos pela sua senha (PBKDF2, 300.000 iterações, depois AES‑GCM). Sem ela, ninguém consegue abri-los, nós também não.",
              "**Chaves protegidas**: sua chave de identidade fica guardada no cofre de chaves do Android.",
            ],
          },
        ],
      },
      {
        id: 'limites',
        titre: 'O que o Droplet não consegue proteger',
        blocs: [
          "Ser honesto sobre segurança também é dizer quais são os limites:",
          {
            liste: [
              "Quem estiver com o seu celular **desbloqueado** pode ler suas conversas não trancadas. Proteja-o com uma senha.",
              "Quem conversa com você pode fazer uma **captura de tela** ou fotografar a própria tela.",
              "Os **metadados** necessários para entregar a mensagem (quem escreve para quem, quando) continuam visíveis para os retransmissores e para nossos servidores, a menos que o Tor esteja ativo na parte pela Internet.",
              "Os **status públicos** e os sinais de emergência foram feitos para serem lidos por todos que estiverem ao alcance.",
              "O **assistente online** e a **tradução** enviam texto a serviços de terceiros. Eles vêm desativados por padrão.",
            ],
          },
        ],
      },
      {
        id: 'signaler',
        titre: 'Relatar uma falha',
        blocs: [
          "Encontrou uma falha de segurança? Escreva para {EMAIL} antes de torná-la pública, com o que for preciso para reproduzi-la. Respondemos a cada relato e mantemos você informado sobre a correção.",
        ],
      },
    ],
  },

  // ══ SUPORTE ═════════════════════════════════════════════════════════════
  support: {
    titre: 'Suporte do Droplet',
    court: 'Suporte',
    description: 'Instalar o Droplet, adicionar contatos, continuar acessível sem rede e resolver os problemas mais comuns.',
    chapo: 'Tudo para começar bem, continuar acessível quando a rede cai e resolver os pequenos problemas.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Para começar',
        resume: 'Instalar o Droplet e escolher um apelido.',
        icone: 'telephone',
        blocs: [
          {
            liste: [
              "**Baixe o Droplet** neste site, no seu celular Android.",
              "**Autorize a instalação** se o Android pedir: por padrão, ele bloqueia apps baixados de fora da Play Store.",
              "**Abra o Droplet e escolha um apelido.** Só isso: sem número, sem e-mail.",
              "**Aceite o Bluetooth e os dispositivos por perto.** Sem eles, o Droplet não encontra os celulares ao seu redor.",
            ],
          },
        ],
      },
      {
        id: 'contacts',
        titre: 'Adicionar alguém',
        resume: 'De perto, por código QR ou por link.',
        icone: 'personnes',
        blocs: [
          {
            liste: [
              "**De perto**: aproxime os celulares, com o Droplet aberto. A pessoa aparece sozinha.",
              "**Por código QR**: abra seu código QR e peça para escanearem, ou escaneie o da pessoa.",
              "**À distância**: compartilhe seu link de convite, ou procure o apelido da pessoa no diretório.",
            ],
          },
          "Para confirmar que é mesmo a pessoa certa, compare os códigos de segurança. Veja [Segurança](/security/#identite).",
        ],
      },
      {
        id: 'sans-reseau',
        titre: 'Quando a rede cai',
        resume: 'Os ajustes que mantêm o Droplet ativo.',
        icone: 'ondes',
        blocs: [
          "O Droplet funciona sem 4G nem Wi‑Fi, desde que o celular deixe o app rodando:",
          {
            liste: [
              "**Deixe o Bluetooth ligado.**",
              "**Tire o Droplet da otimização de bateria** quando o app sugerir. Sem isso, o Android pode colocá-lo para dormir e você deixa de retransmitir.",
              "**Em algumas marcas** (Xiaomi, Huawei, Oppo, Samsung…), autorize também a inicialização automática ou a atividade em segundo plano nos ajustes de bateria.",
              "**Instale o Droplet nos celulares de quem é próximo a você antes de precisar.** Quanto mais celulares ao seu redor, mais longe as mensagens chegam.",
            ],
          },
        ],
      },
      {
        id: 'en-attente',
        titre: 'Uma mensagem ficou na espera',
        resume: 'Por quê, e o que fazer.',
        icone: 'horloge',
        blocs: [
          "Ninguém está ao alcance e não há Internet. A mensagem espera no seu celular e sai sozinha assim que um caminho se abrir: você não precisa reenviar nada.",
          "Se a espera continuar mesmo com a pessoa por perto:",
          {
            liste: [
              "confira se o Bluetooth está ligado nos dois celulares;",
              "confira se o Droplet não está restrito pela otimização de bateria;",
              "abra o Droplet nos dois celulares por alguns segundos.",
            ],
          },
        ],
      },
      {
        id: 'appels',
        titre: 'Chamadas de áudio e vídeo',
        resume: 'No mesmo Wi‑Fi, ou pela Internet.',
        icone: 'appel',
        blocs: [
          "Uma chamada funciona quando vocês estão no mesmo Wi‑Fi, ou quando os dois têm Internet. As chamadas não passam de celular em celular como as mensagens: a voz exige uma velocidade que o Bluetooth não consegue oferecer em vários saltos.",
          "Se a chamada não conectar, confira se o Droplet tem acesso ao microfone (e à câmera, no caso de vídeo) e tente de novo.",
        ],
      },
      {
        id: 'sauvegarde',
        titre: 'Trocar de celular',
        resume: 'Fazer backup e restaurar.',
        icone: 'sauvegarde',
        blocs: [
          "Suas mensagens ficam apenas no seu celular. Antes de trocar:",
          {
            liste: [
              "**Ajustes › Fazer backup da minha identidade**: crie um arquivo criptografado, marcando “Incluir histórico de mensagens”, e guarde bem a senha dele.",
              "Copie esse arquivo para o celular novo, instale o Droplet e importe o arquivo.",
            ],
          },
          "Você também pode ativar o backup online diário, criptografado com a sua senha.",
          {
            encadre:
              "Sem backup, desinstalar o Droplet apaga tudo, de forma definitiva. Ninguém pode restaurar suas mensagens, nós também não.",
          },
        ],
      },
      {
        id: 'batterie',
        titre: 'Bateria',
        resume: 'O que consome e como reduzir.',
        icone: 'batterie',
        blocs: [
          "A busca por dispositivos ao seu redor consome um pouco de bateria. Nos ajustes, você pode reduzi-la ou deixá-la ativa só quando o Droplet estiver aberto. Assim, você retransmitirá menos para os outros.",
        ],
      },
      {
        id: 'assistant',
        titre: 'O assistente',
        resume: 'No celular, ou online com a sua chave.',
        icone: 'etincelle',
        blocs: [
          "O assistente funciona no seu celular, sem Internet, depois que o modelo é baixado (cerca de 530 MB). Para respostas mais elaboradas, você pode adicionar sua própria chave Groq nos ajustes dele: suas conversas passam então pelo Groq.",
        ],
      },
      {
        id: 'iphone',
        titre: 'E no iPhone?',
        resume: 'O Droplet está disponível para Android.',
        icone: 'question',
        blocs: [
          "Por enquanto, o Droplet está disponível para Android. Deixe-o instalado nos seus aparelhos Android: ele retransmite mensagens para todos que o usam ao seu redor.",
        ],
      },
      {
        id: 'contact',
        titre: 'Fale com a gente',
        resume: 'Uma dúvida, um problema, uma ideia.',
        icone: 'message',
        blocs: [
          "Escreva para {EMAIL}. No app, **Ajustes › Contato e suporte › Relatar um problema** mostra o texto exato que será enviado e permite anexar o registro de erros, se você quiser.",
          "O Droplet é feito por uma equipe pequena, não por uma central de atendimento. A resposta pode levar um ou dois dias, mas ela chega.",
        ],
      },
    ],
  },
};
