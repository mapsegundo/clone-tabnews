// phrases.js
const motivationalMessages = [
  "Acredite no seu potencial. Você é capaz de grandes coisas!",
  "Cada pequeno passo te leva mais perto dos seus sonhos.",
  "Persistência é o caminho do êxito. Continue firme!",
  "Você é mais forte do que imagina. Não desista!",
  "O sucesso começa com a decisão de tentar.",
  "Transforme desafios em oportunidades. Você consegue!",
  "Pequenas vitórias diárias constroem grandes conquistas.",
  "Sua jornada é única. Valorize cada momento.",
  "Confie no processo. Tudo tem o seu tempo.",
  "Coragem é agir mesmo com medo. Siga em frente!",
  "Grandes mudanças começam com pequenas ações.",
  "Seu esforço de hoje é o sucesso de amanhã.",
  "Foque no que você pode controlar e siga firme.",
  "Seja a sua própria inspiração. Você é incrível!",
  "Tudo o que você precisa já está dentro de você.",
  "Não compare seu capítulo 1 com o capítulo 20 de alguém.",
  "O melhor ainda está por vir. Acredite!",
  "Você já superou tantas coisas. Continue lutando.",
  "Cada novo dia é uma nova oportunidade para vencer.",
  "Suas ações constroem a sua história. Faça valer a pena!",
  "Tudo começa com a confiança em si mesmo.",
  "Persistência transforma fracassos em vitórias.",
  "Não pare até se orgulhar de si mesmo.",
  "Pequenos progressos diários trazem grandes resultados.",
  "O impossível só existe até alguém provar o contrário.",
  "O sucesso não é o resultado do que fazemos de vez em quando, mas do que fazemos consistentemente todos os dias.",
  "Grandes realizações são feitas de pequenos passos dados com dedicação e perseverança.",
  "Trabalhe com propósito, pois quando você encontra significado no que faz, o esforço se transforma em realização.",
  "O trabalho duro vence o talento quando o talento não trabalha duro.",
  "A melhor maneira de prever o futuro é construí-lo todos os dias com suas próprias mãos.",
  "Não foque apenas no que você ganha, mas no que você aprende e se torna durante o processo.",
  "Cada desafio que você supera é uma versão mais forte de você que surge. O trabalho molda o caráter.",
  "Não tenha medo de falhar. Tenha medo de não tentar e deixar o seu potencial adormecido.",
  "Sua dedicação de hoje abrirá portas que muitos sonham alcançar amanhã.",
  "O trabalho não é apenas uma forma de ganhar a vida, mas também uma maneira de dar sentido à sua existência.",
  "O esforço pode ser cansativo, mas a recompensa do seu trabalho nunca decepciona.",
  "Quando você ama o que faz, a paixão se transforma em energia, e o impossível se torna apenas um obstáculo passageiro.",
  "Lembre-se: o talento pode abrir portas, mas é o esforço diário que mantém você lá dentro.",
  "O caminho pode ser difícil, mas os frutos do seu trabalho valem cada gota de suor.",
  "Não espere pela oportunidade perfeita. Transforme o momento presente na chance de fazer a diferença.",
  "Cada projeto concluído, cada meta alcançada, é uma prova de que o esforço nunca é em vão.",
  "O verdadeiro profissionalismo não está em sempre vencer, mas em dar o seu melhor todos os dias.",
  "O trabalho mais significativo é aquele que, ao final do dia, faz você sentir orgulho do que fez.",
  "A motivação pode fazer você começar, mas é o hábito e a disciplina que te mantêm no caminho do sucesso.",
  "A paciência e o foco no trabalho são como sementes: no começo parecem pequenas, mas com o tempo se tornam árvores fortes e frondosas.",
  "O segredo do sucesso? Faça o que precisa ser feito, mesmo quando ninguém está olhando.",
  "Você é capaz de grandes feitos quando combina esforço, inteligência e resiliência no seu trabalho.",
  "Grandes oportunidades surgem disfarçadas de tarefas difíceis. Enfrente-as com determinação.",
  "Quem faz mais do que o esperado hoje, amanhã colherá mais do que imaginava.",
  "As vitórias no trabalho não são apenas sobre dinheiro, mas sobre o crescimento, a confiança e o legado que você deixa.",
  "Transforme cada dia de trabalho em uma chance de aprender, evoluir e se aproximar do seu propósito.",
  "Sua atitude no trabalho define como o mundo verá o seu esforço: trabalhe com entusiasmo e dedicação.",
  "Trabalhar duro é difícil, mas viver com arrependimento por não ter dado o seu melhor é ainda pior.",
  "Um trabalho bem-feito é um reflexo de quem você é. Faça com paixão, faça com qualidade.",
  "As metas mais difíceis são as que trazem as maiores recompensas. Persevere!",
  "Nunca subestime o impacto do seu trabalho. Até o menor esforço pode fazer uma grande diferença na vida de alguém.",
  "O sucesso no trabalho é como subir uma escada: cada degrau pode ser difícil, mas o topo vale a pena.",
  "As habilidades se aprendem, o comprometimento se constrói, mas a paixão é o que diferencia o mediano do extraordinário.",
  "Seja grato pelo seu trabalho hoje, pois ele é a ponte que levará você aos seus maiores sonhos.",
  "Você não precisa ser perfeito no trabalho, mas precisa estar comprometido em melhorar um pouco a cada dia.",
  "A excelência não é um ato, mas um hábito. Faça do seu trabalho diário a sua obra-prima.",
  "Sucesso não é apenas sobre alcançar o topo, mas sobre inspirar outros durante a jornada.",
  "O mundo recompensa aqueles que não apenas trabalham duro, mas que também trabalham de forma inteligente.",
  "Encare o trabalho como uma chance de criar valor para si mesmo e para os outros. O resto virá naturalmente.",
  "Mantenha o foco no progresso, não na perfeição. Cada dia de trabalho te leva mais longe.",
  "Os resultados vêm quando você aprende a amar o processo. Valorize cada etapa do caminho.",
  "A persistência no trabalho transforma sonhos distantes em realidades palpáveis.",
  "Se você deseja uma vida extraordinária, esteja disposto a fazer no trabalho o que a maioria evita.",
  "O esforço constante transforma uma rotina comum em algo extraordinário.",
  "Encontre algo que te inspire no seu trabalho, e nenhum dia será apenas um 'dia comum'.",
  "Lembre-se: não existe 'trabalho pequeno'. Todo esforço genuíno tem um impacto maior do que parece.",
  "O sucesso é construído com paciência, disciplina e uma vontade inabalável de dar o seu melhor todos os dias.",
  "Tudo posso naquele que me fortalece. - Filipenses 4:13",
  "O Senhor é a minha luz e a minha salvação; de quem terei medo? - Salmos 27:1",
  "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento. - Provérbios 3:5",
  "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro. - Jeremias 29:11",
  "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. - 1 Coríntios 13:4",
  "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus. - 1 Tessalonicenses 5:18",
  "O Senhor é o meu pastor; de nada terei falta. - Salmos 23:1",
  "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito. - Colossenses 3:14",
  "O choro pode durar uma noite, mas a alegria vem pela manhã. - Salmos 30:5",
  "Se Deus é por nós, quem será contra nós? - Romanos 8:31",
  "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido. - Salmos 34:18",
  "Entregue o seu caminho ao Senhor; confie nele, e ele agirá. - Salmos 37:5",
  "No amor não há medo; pelo contrário, o perfeito amor expulsa o medo. - 1 João 4:18",
  "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos. - Hebreus 11:1",
  "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam. - Naum 1:7",
  "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso. - Mateus 11:28",
  "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens. - Colossenses 3:23",
  "Pois Deus não nos deu um espírito de covardia, mas de poder, de amor e de equilíbrio. - 2 Timóteo 1:7",
  "Alegrem-se sempre no Senhor. Novamente direi: alegrem-se! - Filipenses 4:4",
  "E sabemos que em todas as coisas Deus trabalha para o bem daqueles que o amam. - Romanos 8:28",
  "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, pois tu estás comigo. - Salmos 23:4",
  "Deem graças ao Senhor, porque ele é bom. O seu amor dura para sempre! - Salmos 136:1",
  "O Senhor é a minha força e o meu cântico; ele é a minha salvação. - Salmos 118:14",
  "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. - Mateus 6:34",
  "Esforcem-se e não desanimem, pois o trabalho de vocês será recompensado. - 2 Crônicas 15:7",
  "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas. - Mateus 6:33",
  "Não se cansem de fazer o bem, pois no tempo certo colheremos, se não desistirmos. - Gálatas 6:9",
  "A paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus. - Filipenses 4:7",
  "Que o Senhor da paz lhes dê a paz em todo o tempo e de todas as formas. - 2 Tessalonicenses 3:16",
  "E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos. - Gálatas 6:9",
  "Sejam fortes e corajosos. Não tenham medo, pois o Senhor, o seu Deus, vai com vocês. - Deuteronômio 31:6",
  "Nisto conhecemos o amor: que Cristo deu a sua vida por nós. - 1 João 3:16",
  "O Senhor luta por vocês; apenas acalmem-se. - Êxodo 14:14",
  "Guardo no coração as tuas palavras, para não pecar contra ti. - Salmos 119:11",
  "Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade. - Salmos 46:1",
  "Quando passarem por águas profundas, estarei com vocês. - Isaías 43:2",
  "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. - João 14:6",
  "O justo viverá pela fé. - Romanos 1:17",
  "O coração do homem pode fazer planos, mas a resposta certa vem do Senhor. - Provérbios 16:1",
  "Tudo o que pedirem em oração, creiam que já o receberam, e assim sucederá. - Marcos 11:24",
];

export default motivationalMessages;