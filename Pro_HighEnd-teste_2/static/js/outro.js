console.log(window.produtos); // Verifica se a lista de produtos está disponível
window.produtos = [
  {
    id: "teclado-mecanico-pro",
    nome: "Teclado Mecânico Pro",
    preco: "R$ 349,90",
    imagens: ["/static/img/teclado1.jpg", "/static/img/teclado2.jpg", "/static/img/teclado3.jpg"],
    pagina: "teclado-mecanico-pro.html",
    descricaoCurta: "Teclado mecânico robusto para alta performance em jogos.",
    categoria: "Periféricos",
    detalhesTecnicos: {
        switches: "Blue Switches Táteis",
        layout: "ABNT2",
        iluminacao: "Retroiluminação LED azul",
        durabilidade: "50 milhões de cliques"
    },
    reviews: [
        { nome: "João S.", nota: 5, comentario: "O melhor teclado que já tive, o clique é perfeito!" },
        { nome: "Carla R.", nota: 4, comentario: "Muito bom, mas faz um pouco de barulho, como esperado de um mecânico." }
    ]
},
{
    id: "headset-surround-7-1",
    nome: "Headset Surround 7.1",
    preco: "R$ 299,90",
    imagens: ["/static/img/headset1.jpg", "/static/img/headset2.jpg"],
    pagina: "headset-surround-7-1.html",
    descricaoCurta: "Áudio imersivo com som surround 7.1 para total imersão.",
    categoria: "Periféricos",
    detalhesTecnicos: {
        som: "Virtual Surround 7.1",
        drivers: "50mm Neodímio",
        microfone: "Omnidirecional retrátil",
        conexao: "USB"
    },
    reviews: [
        { nome: "Pedro G.", nota: 5, comentario: "Qualidade de som excelente, ideal para identificar inimigos em jogos." },
        { nome: "Laura F.", nota: 4, comentario: "Confortável, mas o microfone poderia ser um pouco mais claro." }
    ]
},
{
    id: "cadeira-gamer-ultracomfort",
    nome: "Cadeira Gamer UltraComfort",
    preco: "R$ 1.199,90",
    imagens: ["/static/img/cadeira1.jpg", "/static/img/cadeira2.jpg", "/static/img/cadeira3.jpg"],
    pagina: "cadeira-gamer-ultracomfort.html",
    descricaoCurta: "Conforto extremo para longas sessões de jogo.",
    categoria: "Mobiliário Gamer",
    detalhesTecnicos: {
        material: "Couro PU de alta qualidade",
        ajustes: "Altura, inclinação, apoio de braço 4D",
        capacidade: "Até 150kg",
        almofadas: "Lombar e pescoço"
    },
    reviews: [
        { nome: "Felipe T.", nota: 5, comentario: "Nunca mais tive dores nas costas jogando, incrível!" },
        { nome: "Renata C.", nota: 4, comentario: "Um pouco cara, mas o conforto é inegável." }
    ]
},
{
    id: "rtx4070",
    nome: "Placa de Vídeo NVIDIA GeForce RTX 4070",
    preco: "R$ 4.299,90",
    imagens: ["/static/img/rtx4070-1.jpg", "/static/img/rtx4070-2.jpg", "/static/img/rtx4070-3.jpg"],
    pagina: "rtx4070.html",
    descricaoCurta: "Eleve seu desempenho gamer e criativo com a RTX 4070, uma placa gráfica poderosa da nova geração.",
    categoria: "Placas de Vídeo",
    detalhesTecnicos: {
        marca: "NVIDIA (Modelo de Referência / Parceiros)",
        memoria: "12GB GDDR6X",
        interface: "PCI Express 4.0",
        cudaCores: "5888",
        boostClock: "Até 2.47 GHz",
        saidasVideo: "DisplayPort 1.4a, HDMI 2.1",
        consumo: "TGP 200W",
        psuRecomendada: "650W ou superior"
    },
    reviews: [
        { nome: "João S.", nota: 5, comentario: "Placa excelente! Rodando todos os meus jogos no máximo sem problemas. Silenciosa e eficiente." },
        { nome: "Maria L.", nota: 4, comentario: "Ótimo upgrade, percebi uma melhora gigantesca no desempenho. O preço ainda é salgado, mas vale a pena." }
    ]
},
{
    id: "ryzen7-7800x3d",
    nome: "Processador AMD Ryzen 7 7800X3D",
    preco: "R$ 2.799,90",
    imagens: ["/static/img/ryzen7-7800x3d-1.jpg", "/static/img/ryzen7-7800x3d-2.jpg"],
    pagina: "ryzen7-7800x3d.html",
    descricaoCurta: "O melhor processador para jogos do mercado, com a tecnologia 3D V-Cache da AMD para performance inigualável.",
    categoria: "Processadores",
    detalhesTecnicos: {
        marca: "AMD",
        nucleosThreads: "8 Cores / 16 Threads",
        frequencia: "4.2 GHz / 5.0 GHz (Base/Boost)",
        cacheL3: "96MB (com 3D V-Cache)",
        soquete: "AMD AM5",
        tdp: "120W",
        graficosIntegrados: "Não (requer placa de vídeo dedicada)"
    },
    reviews: [
        { nome: "Carlos P.", nota: 5, comentario: "Simplesmente o melhor para jogos! Meus FPS dispararam. Vale cada centavo." },
        { nome: "Ana M.", nota: 5, comentario: "Chegou rápido e superou minhas expectativas. Jogo liso demais!" }
    ]
},
{
    id: "memoria-ram-ddr5",
    nome: "Memória RAM DDR5 32GB (2x16GB) 6000MHz",
    preco: "R$ 799,90",
    imagens: ["/static/img/ram-ddr5-1.jpg", "/static/img/ram-ddr5-2.jpg"],
    pagina: "memoria-ram-ddr5.html",
    descricaoCurta: "Otimize a performance do seu sistema com a velocidade e capacidade da memória DDR5.",
    categoria: "Memória RAM",
    detalhesTecnicos: {
        capacidade: "32GB (2 x 16GB)",
        tipo: "DDR5",
        frequencia: "6000MHz",
        latencia: "CL30",
        voltagem: "1.35V",
        formato: "UDIMM",
        tecnologias: "Suporte a AMD EXPO / Intel XMP"
    },
    reviews: [
        { nome: "Pedro R.", nota: 5, comentario: "Instalei fácil e senti uma melhora absurda no desempenho. Recomendo!" },
        { nome: "Julia C.", nota: 4, comentario: "Memória top, mas certifique-se que sua placa-mãe é compatível com DDR5." }
    ]
},
{
    id: "ssd-nvme-2tb",
    nome: "SSD NVMe M.2 2TB de Alta Velocidade",
    preco: "R$ 949,90",
    imagens: ["/static/img/ssd-nvme-1.jpg", "/static/img/ssd-nvme-2.jpg"],
    pagina: "ssd-nvme-2tb.html",
    descricaoCurta: "Carregue jogos e aplicativos em segundos com este SSD NVMe M.2 de 2TB.",
    categoria: "Armazenamento",
    detalhesTecnicos: {
        capacidade: "2TB",
        formato: "M.2 2280",
        interface: "PCIe Gen4 x4",
        velocidadeLeitura: "Até 7000 MB/s",
        velocidadeEscrita: "Até 6000 MB/s",
        durabilidade: "TBW alto para longa vida útil"
    },
    reviews: [
        { nome: "Fernando G.", nota: 5, comentario: "Meu PC virou um foguete! Jogos abrem em 5 segundos. Impressionante." },
        { nome: "Patrícia F.", nota: 5, comentario: "Chegou rápido e a instalação foi simples. Recomendo para quem quer velocidade." }
    ]
},
{
    id: "monitor-gamer-144hz",
    nome: "Monitor Gamer 24 Polegadas 144Hz Full HD",
    preco: "R$ 1.199,90",
    imagens: ["/static/img/monitor-gamer-1.jpg", "/static/img/monitor-gamer-2.jpg"],
    pagina: "monitor-gamer-144hz.html",
    descricaoCurta: "Experimente jogos mais fluidos e imersivos com este monitor gamer de 144Hz.",
    categoria: "Monitores",
    detalhesTecnicos: {
        tamanho: "24 polegadas",
        resolucao: "Full HD (1920x1080)",
        taxaAtualizacao: "144Hz",
        tempoResposta: "1ms (MPRT/GtG)",
        tipoPainel: "IPS ou VA",
        conectividade: "DisplayPort, HDMI",
        sincronizacao: "FreeSync / G-Sync Compatible"
    },
    reviews: [
        { nome: "Guilherme D.", nota: 5, comentario: "Excelente monitor, a diferença de 60Hz para 144Hz é absurda. Recomendo para quem joga FPS." },
        { nome: "Beatriz S.", nota: 4, comentario: "Cores muito boas para um monitor gamer e a fluidez é top. Chegou perfeito!" }
    ]
},
{
    id: "teclado-mecanico-tkl",
    nome: "Teclado Mecânico Gamer TKL RGB",
    preco: "R$ 499,90",
    imagens: ["/static/img/teclado-tkl-1.jpg", "/static/img/teclado-tkl-2.jpg"],
    pagina: "teclado-mecanico-tkl.html",
    descricaoCurta: "Compacto e poderoso, este teclado mecânico TKL com iluminação RGB é ideal para gamers.",
    categoria: "Periféricos",
    detalhesTecnicos: {
        layout: "ABNT2 / US",
        formato: "Tenkeyless (TKL)",
        switches: "Mecânicos (Ex: Outemu Red, Gateron Brown)",
        iluminacao: "RGB por tecla, personalizável",
        conexao: "USB 2.0/3.0",
        antiGhosting: "N-Key Rollover (NKRO)",
        durabilidade: "50 milhões de cliques por tecla"
    },
    reviews: [
        { nome: "Mariana V.", nota: 5, comentario: "Adorei o espaço extra na mesa! O teclado é super responsivo e as luzes RGB são lindas." },
        { nome: "Lucas H.", nota: 4, comentario: "Ótimo teclado, o som dos switches é agradável e a construção é sólida. Só senti falta de um software mais intuitivo." }
    ]
},
{
    id: "headset-gamer-wireless",
    nome: "Headset Gamer Wireless Surround 7.1",
    preco: "R$ 679,90",
    imagens: ["/static/img/headset-wireless-1.jpg", "/static/img/headset-wireless-2.jpg"],
    pagina: "headset-gamer-wireless.html",
    descricaoCurta: "Liberte-se dos cabos e mergulhe no áudio imersivo com este headset gamer sem fio.",
    categoria: "Periféricos",
    detalhesTecnicos: {
        conectividade: "Wireless (2.4GHz USB Dongle)",
        som: "Surround Virtual 7.1",
        drivers: "50mm Neodímio",
        microfone: "Unidirecional, Retrátil, com Cancelamento de Ruído",
        bateria: "Até 20 horas de duração",
        compatibilidade: "PC, PlayStation"
    },
    reviews: [
        { nome: "Diego C.", nota: 5, comentario: "O som é espetacular, consigo ouvir cada passo nos jogos. A liberdade do wireless é um diferencial." },
        { nome: "Roberta N.", nota: 4, comentario: "Muito confortável, mesmo para longas sessões. O microfone é claro. Só achei o alcance um pouco limitado." }
    ]
},
{
    id: "gabinete-gamer-airflow",
    nome: "Gabinete Gamer Mid-Tower com Alta Ventilação",
    preco: "R$ 549,90",
    imagens: ["/static/img/gabinete-airflow-1.jpg", "/static/img/gabinete-airflow-2.jpg"],
    pagina: "gabinete-gamer-airflow.html",
    descricaoCurta: "Mantenha seus componentes frios e exiba seu setup com este gabinete projetado para máximo fluxo de ar.",
    categoria: "Gabinetes",
    detalhesTecnicos: {
        tipo: "Mid-Tower",
        compatibilidadePlacaMae: "ATX, Micro-ATX, Mini-ITX",
        material: "Aço, Plástico, Vidro Temperado",
        suporteFans: "Frontal, Superior, Traseiro (até 6-7 fans)",
        suporteRadiador: "Hasta 360mm (Frontal/Superior)",
        baias: "2x 3.5\", 2x 2.5\"",
        comprimentoMaxGPU: "360mm",
        alturaMaxCoolerCPU: "165mm"
    },
    reviews: [
        { nome: "Marcos E.", nota: 5, comentario: "Ótimo fluxo de ar, minhas temperaturas caíram bastante. Fácil de montar e muito bonito." },
        { nome: "Clara B.", nota: 4, comentario: "Gostei muito do design e da qualidade. Só não veio com fans pré-instalados, mas isso é comum." }
    ]
},

{
    id: "manga-chainsaw-man",
    nome: "Chainsaw Man (Cap 1)",
    preco: "R$ 25,00",
    // >>> ATENÇÃO AQUI: Certifique-se que o nome do arquivo da imagem seja exatamente 'manga-chainsaw-man-1.jpg' na sua pasta 'img/'
    imagens: ["/static/img/manga-chainsaw-man-1.jpg"],
    pagina: "manga-chainsaw-man.html",
    descricaoCurta: "Leia o primeiro capítulo do aclamado mangá Chainsaw Man!",
    categoria: "Mangás",
    detalhesTecnicos: {
        autor: "Tatsuki Fujimoto",
        editora: "Panini",
        formato: "Físico",
        paginas: "200"
    },
    reviews: []
},
  {


      id: "mouse-gamer-rgb",
      nome: "Mouse Gamer RGB",
      preco: "R$ 199,90",
      imagens: ["/static/img/mouse1.jpg"],
      pagina: "mouse-gamer-rgb.html",
      descricaoCurta: "Mouse com iluminação RGB e alta precisão para jogos.",
      categoria: "Periféricos"
    },
    {
      id: "teclado-mecanico",
      nome: "Teclado Mecânico RGB",
      preco: "R$ 299,90",
      imagens: ["/static/img/teclado1.jpg"],
      pagina: "teclado-mecanico.html",
      descricaoCurta: "Teclado ideal para jogadores exigentes.",
      categoria: "Periféricos"
    },
    {
      id: "headset-wireless",
      nome: "Headset Gamer Wireless",
      preco: "R$ 649,90",
      imagens: ["/static/img/headset1.jpg"],
      pagina: "headset-gamer-wireless.html",
      descricaoCurta: "Liberdade sem fio com som imersivo.",
      categoria: "Periféricos"
    },
    {
    id: "Cadeira-Gamer-Otello-Preto-E-Vermelho",
    nome:"Cadeira Gamer Otello Preto E Vermelho",
    preco:"R$ 427,41",
    imagens:["https://a-static.mlcdn.com.br/800x560/cadeira-gamer-otello-preto-e-vermelho/magazineluiza/237019000/b3fc5faf334ec8354d4177f54df4e87a.jpg"],
    pagina:"Cadeira-Gamer-Otello-Preto-E-Vermelho.html",
    descricaoCurta:"Para você que é fanático por games, além de ter equipamentos eletrônicos que elevem o seu nível de jogabilidade, precisa de equipamentos que melhorem a ergonomia nos momentos dos jogos para não ser um momento desconfortável. E uma cadeira gamer pode ajudar e você terminar sua rodada de games sem sentir dores nas costas ou na região lombar. Você precisa conhecer a cadeira gamer Otello 100 nas cores preta e vermelha. ",
    categoria:"Periféricos"
    },
    {
    
    id: "Cadeira-Gamer-Rosa-Ergonômica-Reclinável-Apoio-Para-Pés-Led-Tools",
    nome:"Cadeira Gamer Rosa Ergonômica Reclinável Apoio Para Pés Led Tools",
    preco:"R$ 561,75",
    imagens:["https://http2.mlstatic.com/D_NQ_NP_635924-MLB84915862517_052025-O-cadeira-gamer-rosa-ergonmica-reclinavel-apoio-para-pes.webp"],
    pagina:"Cadeira-Gamer-Rosa-Ergonômica-Reclinável-Apoio-Para-Pés-Led-Tools.html",
    descricaoCurta:"É elogiada por seu conforto e capacidade de suportar até 110 quilos, sendo também fácil de montar para a maioria. Apesar de um relato de material rasgado, a satisfação geral é alta, com destaque para o design atraente e o bom custobenefício.",
    categoria:"Periféricos"
    },
   {
     id: "Mouse-Gamer-RGB-16000DPI-7-Botoes-Programaveis-XTech",
     nome: "Mouse Gamer RGB 16000 DPI 7 Botões Programáveis XTech",
     preco: "R$ 199,90",
     imagens: ["https://http2.mlstatic.com/D_NQ_NP_606930-MLU54977214845_042023-O.webp"],
     pagina: "Mouse-Gamer-RGB-16000DPI-7-Botoes-Programaveis-XTech.html",
     descricaoCurta: "Alto desempenho com iluminação RGB, sensor preciso e personalização via software. Ideal para jogos de FPS e MOBA.",
     categoria: "Periféricos"
   },
   {
     id: "Teclado-Mecanico-RGB-Azul-Switch-ABNT2-Kumara-Redragon",
     nome: "Teclado Mecânico RGB Switch Azul ABNT2 Kumara Redragon",
     preco: "R$ 289,90",
     imagens: ["https://tse3.mm.bing.net/th/id/OIP.Y4ADwneugNGajUeGBzX2PQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
     pagina: "Teclado-Mecanico-RGB-Azul-Switch-ABNT2-Kumara-Redragon.html",
     descricaoCurta: "Com estrutura metálica e iluminação RGB personalizável, oferece resposta tátil ideal para digitação e jogos competitivos.",
     categoria: "Periféricos"
   },
   {
     id: "Headset-Gamer-7.1-Surround-USB-Leds-Azul-Kotion-Each",
     nome: "Headset Gamer 7.1 Surround USB com Leds Azul Kotion Each",
     preco: "R$ 169,99",
     imagens: ["https://tse2.mm.bing.net/th/id/OIP.P3OPrJZfZTxtUlfUa0DFYAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
     pagina: "Headset-Gamer-7.1-Surround-USB-Leds-Azul-Kotion-Each.html",
     descricaoCurta: "Som imersivo com graves potentes, ideal para quem busca boa comunicação e desempenho em jogos online.",
     categoria: "Periféricos"
   },
   {
     id: "Mousepad-Gamer-XL-RGB-Antiderrapante-Speed-Control",
     nome: "Mousepad Gamer XL RGB Antiderrapante Speed/Control",
     preco: "R$ 89,00",
     imagens: ["https://http2.mlstatic.com/D_NQ_NP_600970-MLU54957808097_042023-O.webp"],
     pagina: "Mousepad-Gamer-XL-RGB-Antiderrapante-Speed-Control.html",
     descricaoCurta: "Superfície de alta precisão e base emborrachada, com iluminação RGB em 7 cores e modos variados.",
     categoria: "Periféricos"
   },
   {
     id: "Webcam-FullHD-1080p-Microfone-Embutido-Conexao-USB",
     nome: "Webcam Full HD 1080p com Microfone Embutido USB",
     preco: "R$ 149,99",
     imagens: ["https://tse4.mm.bing.net/th/id/OIP.XVL9VMtozzn_oE4cArNrVwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
     pagina: "Webcam-FullHD-1080p-Microfone-Embutido-Conexao-USB.html",
     descricaoCurta: "Ideal para streaming e reuniões, com imagem nítida e microfone com redução de ruído.",
     categoria: "Periféricos"
   },
   {
     id: "Cadeira-Gamer-Azul-Ergonomica-Reclinavel-Brx-Pro",
     nome: "Cadeira Gamer Azul Ergonômica Reclinável BRX Pro",
     preco: "R$ 649,90",
     imagens: ["https://s3-sa-east-1.amazonaws.com/pluggto/4173/4173_88b0f322-b67f-48b2-a20e-45e1266cf46f.jpg"],
          pagina: "Cadeira-Gamer-Azul-Ergonomica-Reclinavel-Brx-Pro.html",
          descricaoCurta: "Design moderno com apoio de braço ajustável e base resistente. Reclinável até 135°, ideal para longas sessões de uso.",
          categoria: "Periféricos"
        },
        {
          id: "Monitor-Gamer-24-FullHD-1ms-144Hz-HDMI-DisplayPort",
          nome: "Monitor Gamer 24'' Full HD 144Hz 1ms HDMI DisplayPort",
          preco: "R$ 1.199,00",
          imagens: ["https://tse1.mm.bing.net/th/id/OIP.F554kvLVIFqhMY2YaSu0DAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
          pagina: "Monitor-Gamer-24-FullHD-1ms-144Hz-HDMI-DisplayPort.html",
          descricaoCurta: "Alta taxa de atualização e baixo tempo de resposta, perfeito para jogos competitivos com imagens fluidas.",
          categoria: "Periféricos"
        },
        {
          id: "Suporte-Notebook-Ajustavel-Aluminio-Altura-e-Inclinacao",
          nome: "Suporte para Notebook Ajustável em Alumínio",
          preco: "R$ 89,50",
          imagens: ["https://tse4.mm.bing.net/th/id/OIP.mqwMw4EmRF4kHUUyyyO0zgHaHM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
          pagina: "Suporte-Notebook-Ajustavel-Aluminio-Altura-e-Inclinacao.html",
          descricaoCurta: "Leve e resistente, melhora a ergonomia no uso do notebook com ajuste de inclinação e ventilação.",
          categoria: "Periféricos"
        },
        {
          id: "Microfone-Condensador-USB-Podcast-Streaming-KoKo",
          nome: "Microfone Condensador USB para Podcast e Streaming KoKo",
          preco: "R$ 219,99",
          imagens: ["https://tse4.mm.bing.net/th/id/OIP.mkpqjRS2vIMRfk4KQPjS5wHaH6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
          pagina: "Microfone-Condensador-USB-Podcast-Streaming-KoKo.html",
          descricaoCurta: "Captação clara e profissional para podcasts, gravações ou reuniões, com tripé incluso.",
          categoria: "Periféricos"
        },
        {
          id: "Hub-USB-4-Portas-2.0-Alta-Velocidade-Compatível-Windows-Mac",
          nome: "Hub USB 4 Portas 2.0 Alta Velocidade",
          preco: "R$ 39,90",
          imagens: ["https://images-americanas.b2w.io/produtos/3277172041/imagens/hub-usb-2-0-alta-velocidade-4-portas-ate-480mbps/3277172041_1_xlarge.jpg"],
          pagina: "Hub-USB-4-Portas-2.0-Alta-Velocidade-Compatível-Windows-Mac.html",
          descricaoCurta: "Expanda suas conexões com 4 portas USB de alta velocidade, compatível com diversos dispositivos.",
          categoria: "Periféricos"
        },{
    id: "monitor-gamer-27-curvo",
    nome: "Monitor Gamer Curvo 27'' 165Hz - ASUS",
    preco: "R$ 1.799,90",
    imagens: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%23101920'/><rect x='40' y='300' width='720' height='120' rx='10' fill='%23000000' opacity='0.45'/><text x='50%' y='45%' font-family='Arial' font-size='36' fill='%23FFFFFF' text-anchor='middle'>Monitor Curvo 27\"</text><text x='50%' y='62%' font-family='Arial' font-size='18' fill='%23d0d0d0' text-anchor='middle'>ASUS • 165Hz • QHD</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%230b1f2b'/><circle cx='650' cy='130' r='60' fill='%23ff8a00' opacity='0.12'/><text x='40' y='120' font-family='Arial' font-size='20' fill='%23ffffff'>Detalhe: Curvatura 1500R</text><text x='40' y='150' font-family='Arial' font-size='16' fill='%23cfcfcf'>Tempo de resposta 1ms</text></svg>"
    ],
    pagina: "monitor-gamer-27-curvo.html",
    descricaoCurta: "Tela curva QHD 165Hz para jogatina fluida e imersiva.",
    categoria: "Monitores",
    detalhesTecnicos: {
      tamanho: "27 polegadas",
      tipoPainel: "VA Curvo",
      resolucao: "QHD (2560x1440)",
      taxaAtualizacao: "165Hz",
      tempoResposta: "1ms"
    },
    reviews: [
      { nome: "Rafael D.", nota: 5, comentario: "Cores e fluidez excelentes — ideal pra FPS." },
      { nome: "Letícia P.", nota: 4, comentario: "Ótimo custo-benefício, curvatura agradável." }
    ]
  },

  {
    id: "mouse-gamer-ultrapreciso",
    nome: "Mouse Gamer UltraPreciso - Logitech",
    preco: "R$ 249,90",
    imagens: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%2312171a'/><ellipse cx='500' cy='280' rx='180' ry='100' fill='%23ffffff' opacity='0.06'/><text x='50%' y='45%' font-family='Arial' font-size='32' fill='%23ffffff' text-anchor='middle'>Mouse UltraPreciso</text><text x='50%' y='62%' font-family='Arial' font-size='16' fill='%23d0d0d0' text-anchor='middle'>Logitech • 16000 DPI</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%23081215'/><text x='40' y='80' font-family='Arial' font-size='18' fill='%23ffffff'>Sensor: PixArt PMW3389</text><text x='40' y='110' font-family='Arial' font-size='16' fill='%23cfcfcf'>Botões programáveis: 8</text></svg>"
    ],
    pagina: "mouse-gamer-ultrapreciso.html",
    descricaoCurta: "Sensor de alta precisão e ergonomia pensada em longas sessões.",
    categoria: "Periféricos",
    detalhesTecnicos: {
      sensor: "Óptico PixArt PMW3389",
      dpiMaximo: "16000 DPI ajustável",
      conexao: "USB / Cabo trançado",
      botoesProgramaveis: "8",
      iluminacao: "RGB"
    },
    reviews: [
      { nome: "Gustavo N.", nota: 5, comentario: "Extremamente preciso e leve." },
      { nome: "Amanda V.", nota: 4, comentario: "Confortável, software simples." }
    ]
  },

  {
    id: "headset-surround-7-1",
    nome: "Headset Surround 7.1 - HyperX",
    preco: "R$ 299,90",
    imagens: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%230e1013'/><rect x='60' y='60' width='260' height='220' rx='18' fill='%23ffffff' opacity='0.06'/><text x='50%' y='48%' font-family='Arial' font-size='28' fill='%23fff' text-anchor='middle'>Headset 7.1</text><text x='50%' y='66%' font-family='Arial' font-size='14' fill='%23cfcfcf' text-anchor='middle'>HyperX • Surround Virtual</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%23071212'/><text x='40' y='120' font-family='Arial' font-size='16' fill='%23fff'>Drivers 50mm Neodímio</text><text x='40' y='150' font-family='Arial' font-size='16' fill='%23d0d0d0'>Microfone retrátil omnidirecional</text></svg>"
    ],
    pagina: "headset-surround-7-1.html",
    descricaoCurta: "Áudio imersivo para localizar passos e efeitos com precisão.",
    categoria: "Periféricos",
    detalhesTecnicos: {
      som: "Virtual Surround 7.1",
      drivers: "50mm Neodímio",
      microfone: "Omnidirecional retrátil",
      conexao: "USB"
    },
    reviews: [
      { nome: "Pedro G.", nota: 5, comentario: "Som top, muito confortável." },
      { nome: "Laura F.", nota: 4, comentario: "Microfone podia ser mais claro." }
    ]
  },

  {
    id: "cadeira-gamer-ultracomfort",
    nome: "Cadeira Gamer UltraComfort - DXRacer",
    preco: "R$ 1.199,90",
    imagens: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%23101818'/><rect x='80' y='70' width='200' height='320' rx='18' fill='%23ffffff' opacity='0.05'/><text x='50%' y='45%' font-family='Arial' font-size='28' fill='%23fff' text-anchor='middle'>Cadeira UltraComfort</text><text x='50%' y='66%' font-family='Arial' font-size='14' fill='%23cfcfcf' text-anchor='middle'>DXRacer • Ajustes 4D</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%230f1213'/><text x='40' y='120' font-family='Arial' font-size='16' fill='%23fff'>Material: Couro PU</text><text x='40' y='150' font-family='Arial' font-size='16' fill='%23d0d0d0'>Capacidade: até 150kg</text></svg>"
    ],
    pagina: "cadeira-gamer-ultracomfort.html",
    descricaoCurta: "Suporte lombar e ajustes precisos pra longas maratonas de jogo.",
    categoria: "Mobiliário Gamer",
    detalhesTecnicos: {
      material: "Couro PU de alta qualidade",
      ajustes: "Altura, inclinação, apoio de braço 4D",
      capacidade: "Até 150kg",
      almofadas: "Lombar e pescoço"
    },
    reviews: [
      { nome: "Felipe T.", nota: 5, comentario: "Adeus dor nas costas. Recomendo!" },
      { nome: "Renata C.", nota: 4, comentario: "Preço alto, mas entrega conforto." }
    ]
  },

  {
    id: "rtx4070",
    nome: "Placa de Vídeo NVIDIA GeForce RTX 4070 - ASUS TUF",
    preco: "R$ 4.299,90",
    imagens: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%230b0b0d'/><rect x='420' y='120' width='320' height='180' rx='16' fill='%23ffffff' opacity='0.04'/><text x='50%' y='45%' font-family='Arial' font-size='28' fill='%23fff' text-anchor='middle'>RTX 4070</text><text x='50%' y='64%' font-family='Arial' font-size='14' fill='%23cfcfcf' text-anchor='middle'>NVIDIA • 12GB GDDR6X</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%23060b0f'/><text x='40' y='120' font-family='Arial' font-size='16' fill='%23fff'>CUDA Cores: 5888</text><text x='40' y='150' font-family='Arial' font-size='16' fill='%23d0d0d0'>Recomendado PSU 650W+</text></svg>"
    ],
    pagina: "rtx4070.html",
    descricaoCurta: "Poder gráfico de nova geração para jogos e criação de conteúdo.",
    categoria: "Placas de Vídeo",
    detalhesTecnicos: {
      marca: "NVIDIA / ASUS TUF",
      memoria: "12GB GDDR6X",
      interface: "PCI Express 4.0",
      cudaCores: "5888",
      boostClock: "Até 2.47 GHz",
      saidasVideo: "DisplayPort 1.4a, HDMI 2.1",
      consumo: "TGP 200W",
      psuRecomendada: "650W ou superior"
    },
    reviews: [
      { nome: "João S.", nota: 5, comentario: "Roda tudo no máximo, desempenho absurdo." },
      { nome: "Maria L.", nota: 4, comentario: "Melhora gigante no FPS, mas caro." }
    ]
  },

  {
    id: "ryzen7-7800x3d",
    nome: "Processador AMD Ryzen 7 7800X3D - AMD",
    preco: "R$ 2.799,90",
    imagens: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%23111613'/><rect x='60' y='70' width='200' height='160' rx='12' fill='%23ffffff' opacity='0.04'/><text x='50%' y='45%' font-family='Arial' font-size='28' fill='%23fff' text-anchor='middle'>Ryzen 7 7800X3D</text><text x='50%' y='64%' font-family='Arial' font-size='14' fill='%23cfcfcf' text-anchor='middle'>AMD • 8C / 16T • 3D V-Cache</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%230d0f10'/><text x='40' y='120' font-family='Arial' font-size='16' fill='%23fff'>Frequência: 4.2 / 5.0 GHz</text><text x='40' y='150' font-family='Arial' font-size='16' fill='%23d0d0d0'>Soquete: AM5 • TDP 120W</text></svg>"
    ],
    pagina: "ryzen7-7800x3d.html",
    descricaoCurta: "Desempenho gamer de ponta com cache 3D para FPS estáveis.",
    categoria: "Processadores",
    detalhesTecnicos: {
      marca: "AMD",
      nucleosThreads: "8 Cores / 16 Threads",
      frequencia: "4.2 GHz / 5.0 GHz (Base/Boost)",
      cacheL3: "96MB (com 3D V-Cache)",
      soquete: "AMD AM5",
      tdp: "120W",
      graficosIntegrados: "Não"
    },
    reviews: [
      { nome: "Carlos P.", nota: 5, comentario: "Melhora absurda de FPS em jogos." },
      { nome: "Ana M.", nota: 5, comentario: "Instalação fácil, entrega performance." }
    ]
  },

  {
    id: "ssd-nvme-2tb",
    nome: "SSD NVMe M.2 2TB - Samsung",
    preco: "R$ 949,90",
    imagens: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%230d0d0f'/><rect x='520' y='120' width='220' height='120' rx='8' fill='%23ffffff' opacity='0.06'/><text x='50%' y='46%' font-family='Arial' font-size='28' fill='%23fff' text-anchor='middle'>SSD NVMe 2TB</text><text x='50%' y='64%' font-family='Arial' font-size='14' fill='%23cfcfcf' text-anchor='middle'>Samsung • PCIe Gen4 x4</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%230d0e10'/><text x='40' y='120' font-family='Arial' font-size='16' fill='%23fff'>Velocidade leitura: Até 7000 MB/s</text><text x='40' y='150' font-family='Arial' font-size='16' fill='%23d0d0d0'>Formato: M.2 2280 • Alta durabilidade</text></svg>"
    ],
    pagina: "ssd-nvme-2tb.html",
    descricaoCurta: "Carregamento instantâneo de jogos e aplicativos.",
    categoria: "Armazenamento",
    detalhesTecnicos: {
      capacidade: "2TB",
      formato: "M.2 2280",
      interface: "PCIe Gen4 x4",
      velocidadeLeitura: "Até 7000 MB/s",
      velocidadeEscrita: "Até 6000 MB/s",
      durabilidade: "Alta (TBW elevado)"
    },
    reviews: [
      { nome: "Fernando G.", nota: 5, comentario: "PC ficou rapidíssimo!" },
      { nome: "Patrícia F.", nota: 5, comentario: "Instalação simples e desempenho top." }
    ]
  }
        
    ];

    window.produts = [{
    id: "teclado-mecanico-pro",
    nome: "Teclado Mecânico Pro",
    preco: "R$ 349,90",
    imagens: ["/static/img/teclado1.jpg", "/static/img/teclado2.jpg", "/static/img/teclado3.jpg"],
    pagina: "teclado-mecanico-pro.html",
    descricaoCurta: "Teclado mecânico robusto para alta performance em jogos.",
    categoria: "Periféricos",
    detalhesTecnicos: {
        switches: "Blue Switches Táteis",
        layout: "ABNT2",
        iluminacao: "Retroiluminação LED azul",
        durabilidade: "50 milhões de cliques"
    },
    reviews: [
        { nome: "João S.", nota: 5, comentario: "O melhor teclado que já tive, o clique é perfeito!" },
        { nome: "Carla R.", nota: 4, comentario: "Muito bom, mas faz um pouco de barulho, como esperado de um mecânico." }
    ]
},
{
    id: "headset-surround-7-1",
    nome: "Headset Surround 7.1",
    preco: "R$ 299,90",
    imagens: ["/static/img/headset1.jpg", "/static/img/headset2.jpg"],
    pagina: "headset-surround-7-1.html",
    descricaoCurta: "Áudio imersivo com som surround 7.1 para total imersão.",
    categoria: "Periféricos",
    detalhesTecnicos: {
        som: "Virtual Surround 7.1",
        drivers: "50mm Neodímio",
        microfone: "Omnidirecional retrátil",
        conexao: "USB"
    },
    reviews: [
        { nome: "Pedro G.", nota: 5, comentario: "Qualidade de som excelente, ideal para identificar inimigos em jogos." },
        { nome: "Laura F.", nota: 4, comentario: "Confortável, mas o microfone poderia ser um pouco mais claro." }
    ]
},
{
    id: "cadeira-gamer-ultracomfort",
    nome: "Cadeira Gamer UltraComfort",
    preco: "R$ 1.199,90",
    imagens: ["/static/img/cadeira1.jpg", "/static/img/cadeira2.jpg", "/static/img/cadeira3.jpg"],
    pagina: "cadeira-gamer-ultracomfort.html",
    descricaoCurta: "Conforto extremo para longas sessões de jogo.",
    categoria: "Mobiliário Gamer",
    detalhesTecnicos: {
        material: "Couro PU de alta qualidade",
        ajustes: "Altura, inclinação, apoio de braço 4D",
        capacidade: "Até 150kg",
        almofadas: "Lombar e pescoço"
    },
    reviews: [
        { nome: "Felipe T.", nota: 5, comentario: "Nunca mais tive dores nas costas jogando, incrível!" },
        { nome: "Renata C.", nota: 4, comentario: "Um pouco cara, mas o conforto é inegável." }
    ]
},
{
    id: "rtx4070",
    nome: "Placa de Vídeo NVIDIA GeForce RTX 4070",
    preco: "R$ 4.299,90",
    imagens: ["/static/img/rtx4070-1.jpg", "/static/img/rtx4070-2.jpg", "/static/img/rtx4070-3.jpg"],
    pagina: "rtx4070.html",
    descricaoCurta: "Eleve seu desempenho gamer e criativo com a RTX 4070, uma placa gráfica poderosa da nova geração.",
    categoria: "Placas de Vídeo",
    detalhesTecnicos: {
        marca: "NVIDIA (Modelo de Referência / Parceiros)",
        memoria: "12GB GDDR6X",
        interface: "PCI Express 4.0",
        cudaCores: "5888",
        boostClock: "Até 2.47 GHz",
        saidasVideo: "DisplayPort 1.4a, HDMI 2.1",
        consumo: "TGP 200W",
        psuRecomendada: "650W ou superior"
    },
    reviews: [
        { nome: "João S.", nota: 5, comentario: "Placa excelente! Rodando todos os meus jogos no máximo sem problemas. Silenciosa e eficiente." },
        { nome: "Maria L.", nota: 4, comentario: "Ótimo upgrade, percebi uma melhora gigantesca no desempenho. O preço ainda é salgado, mas vale a pena." }
    ]
},
{
    id: "ryzen7-7800x3d",
    nome: "Processador AMD Ryzen 7 7800X3D",
    preco: "R$ 2.799,90",
    imagens: ["/static/img/ryzen7-7800x3d-1.jpg", "/static/img/ryzen7-7800x3d-2.jpg"],
    pagina: "ryzen7-7800x3d.html",
    descricaoCurta: "O melhor processador para jogos do mercado, com a tecnologia 3D V-Cache da AMD para performance inigualável.",
    categoria: "Processadores",
    detalhesTecnicos: {
        marca: "AMD",
        nucleosThreads: "8 Cores / 16 Threads",
        frequencia: "4.2 GHz / 5.0 GHz (Base/Boost)",
        cacheL3: "96MB (com 3D V-Cache)",
        soquete: "AMD AM5",
        tdp: "120W",
        graficosIntegrados: "Não (requer placa de vídeo dedicada)"
    },
    reviews: [
        { nome: "Carlos P.", nota: 5, comentario: "Simplesmente o melhor para jogos! Meus FPS dispararam. Vale cada centavo." },
        { nome: "Ana M.", nota: 5, comentario: "Chegou rápido e superou minhas expectativas. Jogo liso demais!" }
    ]
},
{
    id: "memoria-ram-ddr5",
    nome: "Memória RAM DDR5 32GB (2x16GB) 6000MHz",
    preco: "R$ 799,90",
    imagens: ["/static/img/ram-ddr5-1.jpg", "/static/img/ram-ddr5-2.jpg"],
    pagina: "memoria-ram-ddr5.html",
    descricaoCurta: "Otimize a performance do seu sistema com a velocidade e capacidade da memória DDR5.",
    categoria: "Memória RAM",
    detalhesTecnicos: {
        capacidade: "32GB (2 x 16GB)",
        tipo: "DDR5",
        frequencia: "6000MHz",
        latencia: "CL30",
        voltagem: "1.35V",
        formato: "UDIMM",
        tecnologias: "Suporte a AMD EXPO / Intel XMP"
    },
    reviews: [
        { nome: "Pedro R.", nota: 5, comentario: "Instalei fácil e senti uma melhora absurda no desempenho. Recomendo!" },
        { nome: "Julia C.", nota: 4, comentario: "Memória top, mas certifique-se que sua placa-mãe é compatível com DDR5." }
    ]
},
{
    id: "ssd-nvme-2tb",
    nome: "SSD NVMe M.2 2TB de Alta Velocidade",
    preco: "R$ 949,90",
    imagens: ["/static/img/ssd-nvme-1.jpg", "/static/img/ssd-nvme-2.jpg"],
    pagina: "ssd-nvme-2tb.html",
    descricaoCurta: "Carregue jogos e aplicativos em segundos com este SSD NVMe M.2 de 2TB.",
    categoria: "Armazenamento",
    detalhesTecnicos: {
        capacidade: "2TB",
        formato: "M.2 2280",
        interface: "PCIe Gen4 x4",
        velocidadeLeitura: "Até 7000 MB/s",
        velocidadeEscrita: "Até 6000 MB/s",
        durabilidade: "TBW alto para longa vida útil"
    },
    reviews: [
        { nome: "Fernando G.", nota: 5, comentario: "Meu PC virou um foguete! Jogos abrem em 5 segundos. Impressionante." },
        { nome: "Patrícia F.", nota: 5, comentario: "Chegou rápido e a instalação foi simples. Recomendo para quem quer velocidade." }
    ]
},
{
    id: "monitor-gamer-144hz",
    nome: "Monitor Gamer 24 Polegadas 144Hz Full HD",
    preco: "R$ 1.199,90",
    imagens: ["/static/img/monitor-gamer-1.jpg", "/static/img/monitor-gamer-2.jpg"],
    pagina: "monitor-gamer-144hz.html",
    descricaoCurta: "Experimente jogos mais fluidos e imersivos com este monitor gamer de 144Hz.",
    categoria: "Monitores",
    detalhesTecnicos: {
        tamanho: "24 polegadas",
        resolucao: "Full HD (1920x1080)",
        taxaAtualizacao: "144Hz",
        tempoResposta: "1ms (MPRT/GtG)",
        tipoPainel: "IPS ou VA",
        conectividade: "DisplayPort, HDMI",
        sincronizacao: "FreeSync / G-Sync Compatible"
    },
    reviews: [
        { nome: "Guilherme D.", nota: 5, comentario: "Excelente monitor, a diferença de 60Hz para 144Hz é absurda. Recomendo para quem joga FPS." },
        { nome: "Beatriz S.", nota: 4, comentario: "Cores muito boas para um monitor gamer e a fluidez é top. Chegou perfeito!" }
    ]
}]