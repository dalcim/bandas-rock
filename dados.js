
let dados = [
    {
      titulo: "Linkin Park",
      descricao: "Linkin Park é uma banda americana de nu metal formada em Agoura Hills, Califórnia, em 1996. A banda se tornou mundialmente famosa por combinar elementos do heavy metal, rap e eletrônica, criando um som único que atraiu milhões de fãs ao redor do mundo. Suas letras, que frequentemente abordam temas como angústia, solidão e a busca por identidade, ressoaram com muitos jovens.",
      link: "https://pt.wikipedia.org/wiki/Linkin_Park",
      canalYoutube: "https://www.youtube.com/@LinkinPark",
      tags: "chester mike shinoda rob joe brad emily dave colin"
    },
    {
      titulo: "Red Hot Chili Peppers",
      descricao: "Red Hot Chili Peppers é uma banda americana de rock formada em Los Angeles, Califórnia, em 1983. Conhecidos por suas performances energéticas e letras muitas vezes irreverentes, o RHCP é um dos maiores nomes do rock alternativo. A banda é famosa por misturar elementos do funk, rock e punk rock.",
      link: "https://pt.wikipedia.org/wiki/Red_Hot_Chili_Peppers",
      canalYoutube: "https://www.youtube.com/@RedHotChiliPeppers",
      tags: "anthony kiedis john flea chad"
      
    },
    {
      titulo: "System of a Down",
      descricao: "System of a Down é uma banda americana de metal formada em Los Angeles, Califórnia, em 1995. A banda é conhecida por suas letras politicamente engajadas e por combinar elementos do metal pesado com influências do rock oriental e música tradicional armênia.",
      link: "https://pt.wikipedia.org/wiki/System_of_a_Down",
      canalYoutube: "https://www.youtube.com/@systemofadown",
      tags: "serj tankian daron malakian john shavo"
    },
   
  {
    titulo: "Iron Maiden",
    descricao: "Uma das bandas mais influentes do heavy metal, conhecida por suas letras épicas, mascotes icônicos (Eddie the Head) e solos de guitarra virtuosos.",
    link: "https://en.wikipedia.org/wiki/Iron_Maiden",
    canalYoutube: "https://www.youtube.com/user/ironmaiden",
    tags: "eddie bruce dickinson steve dave nicko adrian janic michael"
  },
  {
    titulo: "Foo Fighters",
    descricao: "Banda de rock alternativo liderada por Dave Grohl, ex-baterista do Nirvana. Conhecida por suas letras introspectivas e energia contagiante.",
    link: "https://en.wikipedia.org/wiki/Foo_Fighters",
    canalYoutube: "https://www.youtube.com/user/foofighters",
    tags: "dave grohl taylor pat josh chris nate rami"
  },
  {
    titulo: "Queen",
    descricao: "Queen foi uma banda de rock britânica formada em 1970 em Londres. Conhecidos por suas performances extravagantes e músicas com melodias complexas e harmonias vocais marcantes, o Queen é uma das bandas mais influentes da história do rock.",
    link: "https://en.wikipedia.org/wiki/Queen_%28band%29",
    canalYoutube: "https://www.youtube.com/@Queen",
    tags: "freddy mercury brian may john deacon roger"
  },
  {
    titulo: "Guns N' Roses",
    descricao: "Guns N' Roses é uma banda de hard rock americana formada em Los Angeles, Califórnia, em 1985. Conhecidos por suas letras provocativas e shows explosivos, os Guns N' Roses são um dos maiores nomes do rock dos anos 80.",
    link: "https://en.wikipedia.org/wiki/youtube.com/gunsnroses",
    canalYoutube: "https://www.youtube.com/@gunsnroses",
    tags: "axl rose slash duff richard"
  },
  {
    titulo: "The Beatles",
    descricao: "A banda mais popular de todos os tempos, revolucionou a música popular com suas canções inovadoras e letras que abordavam temas universais.",
    link: "https://en.wikipedia.org/wiki/The_Beatles",
    canalYoutube: "https://www.youtube.com/@TheBeatles",
    tags: "paul jhon george ringo"
  },
  {
    titulo: "Led Zeppelin",
    descricao: "Led Zeppelin foi uma banda de rock britânica formada em Londres em 1968. Considerados uma das bandas mais influentes de todos os tempos, o Led Zeppelin ajudou a definir o som do hard rock e heavy metal.",
    link: "https://en.wikipedia.org/wiki/Led_Zeppelin",
    canalYoutube: "https://www.youtube.com/@ledzeppelin",
    tags: "robert plant jimmy page john bonham paul jones"
  },
  {
    titulo: "Muse",
    descricao: "Muse é uma banda de rock alternativo britânica formada em 1994. Conhecidos por suas músicas com elementos de rock progressivo e eletrônico, o Muse é um dos maiores nomes do rock alternativo dos anos 2000.",
    link: "https://es.wikipedia.org/wiki/Muse",
    canalYoutube: "https://www.youtube.com/@muse",
    tags: "matthew christoper dominic morgan dan daniel alessandro"
  },
  {
    titulo: "Nirvana",
    descricao: "Nirvana foi uma banda de grunge americana formada em Aberdeen, Washington, em 1987. Liderada por Kurt Cobain, o Nirvana é considerado um dos principais responsáveis pela popularização do grunge nos anos 90.",
    link: "https://es.wikipedia.org/wiki/Nirvana_%28banda%29",
    canalYoutube: "https://www.youtube.com/@nirvana",
    tags: "kurt cobain dave grohl pat smear krist"
  },
  {
    titulo: "Kiss",
    descricao: "Kiss é uma banda de hard rock americana formada em Nova York em 1973. Conhecidos por suas maquiagens extravagantes e shows com pirotecnia, o Kiss é um dos maiores nomes do rock dos anos 70.",
    link: "https://en.wikipedia.org/wiki/Kiss_%28band%29",
    canalYoutube: "https://www.youtube.com/@KISS",
    tags: "gene paul ace peter eric"
  },
  {
    titulo: "Bon Jovi",
    descricao: "Bon Jovi é uma banda de hard rock americana formada em Nova Jersey em 1983. Conhecidos por suas baladas românticas e hinos de rock, o Bon Jovi é um dos maiores nomes do rock dos anos 80 e 90.",
    link: "https://en.wikipedia.org/wiki/Bon_Jovi",
    canalYoutube: "https://www.youtube.com/@bonjovi",
    tags: "jon bon jovi alec everett john phil x tico"
  },
  {
    titulo: "Evanescence",
    descricao: "Evanescence é uma banda de rock alternativo americana formada em Little Rock, Arkansas, em 1995. Conhecidos por suas músicas com elementos de metal e gótico, o Evanescence é um dos maiores nomes do rock alternativo dos anos 2000.",
    link: "https://en.wikipedia.org/wiki/Evanescence",
    canalYoutube: "https://www.youtube.com/@Evanescence",
    tags: "amy lee emma will tim troy rocky"
  },
  {
    titulo: "Aerosmith",
    descricao: "Aerosmith é uma banda de hard rock americana formada em Boston, Massachusetts, em 1970. Conhecidos por suas influências do blues e do rock and roll, o Aerosmith é um dos maiores nomes do hard rock de todos os tempos.",
    link: "https://en.wikipedia.org/wiki/Aerosmith",
    canalYoutube: "https://www.youtube.com/@aerosmith",
    tags: "steven tyler joe perry joey brad tom"
  },
  {
    titulo: "Metallica",
    descricao: "Metallica é uma banda de heavy metal americana formada em Los Angeles, Califórnia, em 1981. Considerados uma das bandas mais influentes do heavy metal, o Metallica ajudou a definir o som do thrash metal.",
    link: "https://en.wikipedia.org/wiki/Metallica",
    canalYoutube: "https://www.youtube.com/@metallica",
    tags: "james hetfield kirk lars robert cliff dave mustaine"
  },
  {
    titulo: "Scorpions",
    descricao: "Scorpions são uma banda de hard rock alemã formada em Hannover em 1965. Conhecidos por suas baladas e hinos de rock, os Scorpions são um dos maiores nomes do hard rock europeu.",
    link: "https://en.wikipedia.org/wiki/Scorpions_%28band%29",
    canalYoutube: "https://www.youtube.com/@scorpions",
    tags: "klaus rudolf matthias jabs mikkey michael Paweł herman joe"
  }
  ];

