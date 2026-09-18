import { Recipe, BonusItem, Testimonial, FaqItem } from '../types';

export const HERO_DATA = {
  siteName: 'Airfryer Económica',
  urgencyText: 'OFERTA ESPECIAL VÁLIDA HOJE EM PORTUGAL 🇵🇹',
  headline: 'Airfryer Económica',
  subheadline: '250 Receitas Portuguesas Rápidas e Deliciosas para Poupar Tempo e Dinheiro na Cozinha',
  detailedPitch: 'Poupe até 80€/mês no supermercado e na fatura da luz com refeições estaladiças prontas em 15 minutos, sem fritos nem tachos sujos.',
  tags: ['LIVRO DIGITAL EM PDF', 'DESCARREGAMENTO IMEDIATO', 'ACESSO VITALÍCIO', 'INGREDIENTES NACIONAIS'],
  ctaText: 'QUERO AS 250 RECEITAS ECONÓMICAS!',
  badges: [
    'Acesso imediato no seu e-mail',
    'Pagamento seguro com MB WAY e Multibanco',
    '7 dias de garantia incondicional',
  ],
  authorityStamp: 'O Livro Digital de Airfryer Nº 1 nas Cozinhas de Portugal',
  marketContext: 'Adaptado aos ingredientes do Continente, Pingo Doce, Lidl, Mercadona e Auchan',
};

export const SUPERMARKETS_DATA = [
  { name: 'Continente', tag: 'Ingredientes 100% Compatíveis' },
  { name: 'Pingo Doce', tag: 'Frescos & Marcas Brancas' },
  { name: 'Lidl', tag: 'Economia & Silvercrest' },
  { name: 'Mercadona', tag: 'Talho & Peixaria' },
  { name: 'Auchan', tag: 'Biocentro & Produtores Locais' },
];

export const APPLIANCES_DATA = [
  'Philips Airfryer (XXL e Compacta)',
  'Cecotec Cecofry',
  'Silvercrest do Lidl',
  'Xiaomi Smart Air Fryer',
  'Cosori Dual Blaze',
  'Moulinex Easy Fry',
  'Tefal Actifry',
];

export const PAIN_POINTS = {
  title: 'Isto Soa-lhe Familiar?',
  points: [
    'Gasta 40€ a 70€ por semana em entregas de comida (Uber Eats, Glovo ou takeaways gordurosos)?',
    'Tem receio de ligar o forno elétrico grande por causa do aumento da fatura da luz (EDP / Galp)?',
    'A sua fritadeira sem óleo custou-lhe dinheiro na Worten ou no Lidl e só serve para batatas congeladas?',
    'Cansado(a) de receitas da internet com ingredientes brasileiros ou americanos que não encontra nas nossas lojas?',
    'Farto(a) do cheiro a fritos e a gordura espalhada pelos azulejos e cortinados da cozinha?',
  ],
  conclusion:
    'A sua Airfryer pode fazer pratos tradicionais portugueses divinais em 15 minutos, gastando até 70% menos energia que o forno. Só precisa do método certo!',
};

export const SOLUTION_DATA = {
  title: 'A culinária portuguesa encontra a rapidez da Airfryer',
  description:
    'O livro digital definitivo em formato PDF de alta resolução com 250 receitas calibradas ao minuto e grau exatos. Todas usam ingredientes que compra com facilidade no Continente, Pingo Doce, Lidl ou talho da sua rua. Inclui tabelas completas de tempos, graus e listas de compras organizadas para consultar no telemóvel, tablet, computador ou imprimir se preferir.',
  features: [
    { label: 'PDF para telemóvel e tablet', icon: 'smartphone' },
    { label: 'PDF para computador', icon: 'monitor' },
    { label: 'Ficheiro 100% imprimível em A4', icon: 'file-text' },
    { label: 'Descarregamento imediato no e-mail', icon: 'download' },
  ],
  shoppingListItems: [
    { item: 'Lombos de bacalhau dessalgado (400g)', checked: true, category: 'Peixaria' },
    { item: 'Broa de milho amarela tradicional', checked: true, category: 'Padaria' },
    { item: 'Alho-francês fresco português', checked: true, category: 'Frescos & Legumes' },
    { item: 'Azeite virgem extra alentejano', checked: true, category: 'Mercearia' },
    { item: 'Queijo de São Jorge ou da Ilha ralado', checked: false, category: 'Laticínios & Ovos' },
    { item: 'Pimentão-doce (colorau) e louro', checked: true, category: 'Temperos & Ervas' },
  ],
};

export const CHEF_DATA = {
  name: 'Chef António Valente',
  role: 'Chef Executivo & Mestre da Gastronomia Portuguesa',
  subtitle: 'Autor do Livro Airfryer Económica',
  image: 'https://iili.io/nobI4xp.png',
  bio: 'Com mais de 20 anos de liderança em cozinhas de referência de norte a sul de Portugal e consultor de restauração tradicional, o Chef António Valente conhece a realidade e as dificuldades das famílias portuguesas: o cansaço ao fim do dia de trabalho, a escalada dos preços nos supermercados e o peso crescente da fatura da luz.',
  bioSecond:
    '«Recuso-me a aceitar que para comer bem tenhamos de gastar rios de dinheiro ou passar duas horas ao fogão. Criei o livro Airfryer Económica para provar que a culinária tradicional portuguesa ganha vida nova na fritadeira sem óleo: 250 receitas rigorosamente calibradas para poupar tempo e euros na conta da luz, com a comida a sair no ponto, tenra por dentro e com aquela crosta estaladiça que todos adoram.»',
};

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'bacalhau-broa',
    title: 'Bacalhau com Crosta de Broa de Milho & Alho',
    category: 'tradicional',
    categoryLabel: 'Clássicos Portugueses',
    portugueseRegion: 'Minho & Douro',
    time: '12 min',
    ingredientsCount: 5,
    difficulty: 'Fácil',
    calories: '285 kcal/dose',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'Lombo de bacalhau tenro e lascado, coberto por uma crosta dourada e crocante de broa de milho com alho e azeite alentejano.',
    ingredients: [
      '2 lombos altos de bacalhau previamente demolhado',
      '1 fatia grossa de broa de milho esfarelada',
      '2 dentes de alho picados miudinhos',
      '3 colheres de sopa de azeite virgem extra',
      'Salsa fresca picada e azeitonas pretas',
    ],
    steps: [
      'Seque muito bem os lombos de bacalhau com papel de cozinha absorvente.',
      'Numa tigela, envolva a broa esfarelada com o alho, a salsa e o azeite até obter uma areia húmida aromática.',
      'Coloque o bacalhau no cesto da Airfryer e cubra o topo com a mistura de broa, pressionando ligeiramente.',
      'Asse a 180°C durante 12 minutos até a broa ficar bem douradinha e estaladiça.',
    ],
  },
  {
    id: 'pasteis-de-nata',
    title: 'Pastéis de Nata Estaladiços na Airfryer',
    category: 'sobremesas',
    categoryLabel: 'Doces & Sobremesas',
    portugueseRegion: 'Lisboa & Belém',
    time: '9 min',
    ingredientsCount: 5,
    difficulty: 'Muito Fácil',
    calories: '190 kcal/unidade',
    image: 'https://iili.io/nob7yzb.png',
    description: 'Massa folhada incrivelmente estaladiça e creme aveludado com pontinhos tostados, perfumado com limão e canela.',
    ingredients: [
      '1 rolo de massa folhada fresca retangular',
      '200ml de natas frescas ou leite gordo',
      '3 gemas de ovos biológicos nacionais',
      '3 colheres de sopa de açúcar ou adoçante natural',
      '1 casca fina de limão e 1 pau de canela',
    ],
    steps: [
      'Enrole a massa folhada bem apertada, corte em fatias e molde nas formas de queque.',
      'Aqueça as natas com o limão e a canela; retire e misture as gemas batidas com o açúcar.',
      'Verta o creme nas formas sem encher até ao cimo.',
      'Coloque no cesto pré-aquecido a 200°C por 8 a 9 minutos até caramelizar o topo.',
    ],
  },
  {
    id: 'alheira-crocante',
    title: 'Alheira de Mirandela Estaladiça (Sem Rebentar)',
    category: 'tradicional',
    categoryLabel: 'Clássicos Portugueses',
    portugueseRegion: 'Trás-os-Montes',
    time: '12 min',
    ingredientsCount: 3,
    difficulty: 'Muito Fácil',
    calories: '310 kcal/dose',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'O segredo para a alheira ficar com a pele super crocante por fora e o interior fumado e cremoso, sem sujar o fogão.',
    ingredients: [
      '1 alheira de caça ou tradicional de Trás-os-Montes',
      '1 ovo para escalfar ou estrelar na airfryer',
      '1 raminho de grelos cozidos para acompanhar',
    ],
    steps: [
      'Faça 3 pequenos golpes transversais na pele da alheira para libertar o vapor sem romper.',
      'Disponha no cesto da Airfryer a 180°C durante 10 minutos.',
      'Vire a meio do tempo e aumente para 200°C nos últimos 2 minutos para purpurar a pele.',
      'Sirva com ovo e grelos salteados num fio de azeite.',
    ],
  },
  {
    id: 'pataniscas-bacalhau',
    title: 'Pataniscas de Bacalhau Douradas sem Óleo',
    category: 'petiscos',
    categoryLabel: 'Petiscos & Lanches',
    portugueseRegion: 'Estremadura & Ribatejo',
    time: '11 min',
    ingredientsCount: 5,
    difficulty: 'Fácil',
    calories: '165 kcal/unidade',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    description: 'A clássica patanisca de tasca portuguesa: fofa por dentro, aromática com salsa e cebola, sem pingar gordura.',
    ingredients: [
      '200g de bacalhau cozido e finamente desfiado',
      '2 ovos médios',
      '3 colheres de sopa de farinha de trigo (ou aveia)',
      '1/2 cebola pequena picada fina e salsa fresca abundante',
      'Pimenta-preta e um fio de azeite',
    ],
    steps: [
      'Bata os ovos com a farinha, adicione a cebola picada, o bacalhau e a salsa picada.',
      'Coloque pequenas colheradas sobre papel vegetal perfurado no cesto da Airfryer.',
      'Pincele ligeiramente a superfície com umas gotas de azeite.',
      'Asse a 190°C por 10 a 11 minutos até dourarem com textura fofa e bordos estaladiços.',
    ],
  },
  {
    id: 'dourada-grelhada-ervas',
    title: 'Dourada da Costa com Molho de Alho e Coentros',
    category: 'carnes-peixes',
    categoryLabel: 'Peixes & Carnes',
    portugueseRegion: 'Algarve & Peniche',
    time: '12 min',
    ingredientsCount: 4,
    difficulty: 'Fácil',
    calories: '240 kcal',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'Pele estaladiça como feita na brasa, peixe suculento que se desprende da espinha com o aroma do azeite português.',
    ingredients: [
      '2 filetes frescos de dourada ou robalo da nossa costa',
      '2 dentes de alho esmagados',
      'Sumo de meio limão fresco e azeite virgem extra',
      'Coentros frescos picados e sal marinho grosso',
    ],
    steps: [
      'Tempere os filetes com sal marinho grosso, alho e sumo de limão.',
      'Pincele a pele levemente com azeite virgem extra.',
      'Coloque no cesto da Airfryer a 190°C com a pele virada para cima.',
      'Cozinhe por 12 minutos e finalize com coentros frescos generosos.',
    ],
  },
  {
    id: 'bifanas-porto',
    title: 'Bifanas à Moda do Porto Suculentas',
    category: 'carnes-peixes',
    categoryLabel: 'Peixes & Carnes',
    portugueseRegion: 'Porto & Norte',
    time: '8 min',
    ingredientsCount: 5,
    difficulty: 'Muito Fácil',
    calories: '260 kcal/dose',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    description: 'Carne de porco tenrinha marinada em vinho branco, louro e pimentão-doce, perfeita para meter no pão de água.',
    ingredients: [
      '300g de febras de porco fatiadas muito finas',
      '1 cálice de vinho branco ou cerveja',
      '2 dentes de alho esmagados e 1 folha de louro',
      '1 colher de chá de colorau / pimentão-doce',
      '1 colher de café de picante (piri-piri opcional)',
    ],
    steps: [
      'Deixe as febras a marinar durante 15 minutos com o vinho, o alho, o louro e o colorau.',
      'Coloque no cesto da Airfryer espalhadas a 200°C durante 6 a 8 minutos.',
      'Regue com o próprio molho reduzido e sirva no pão rústico português com mostarda.',
    ],
  },
  {
    id: 'quiche-alho-frances',
    title: 'Mini Quiche de Alho-Francês e Queijo de São Jorge',
    category: 'petiscos',
    categoryLabel: 'Petiscos & Lanches',
    portugueseRegion: 'Açores & Centro',
    time: '13 min',
    ingredientsCount: 5,
    difficulty: 'Fácil',
    calories: '185 kcal/unidade',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    description: 'Massa quebrada estaladiça com recheio cremoso e o toque inconfundível do queijo picante açoriano.',
    ingredients: [
      '1 base de massa quebrada fresca',
      '1 talo de alho-francês laminado fino',
      '2 ovos de galinhas do campo',
      '80g de queijo de São Jorge ou da Ilha ralado',
      'Noz-moscada, pimenta-preta e fio de azeite',
    ],
    steps: [
      'Corte pequenos círculos de massa e forre as formas de silicone.',
      'Salteie rapidamente o alho-francês num fio de azeite até amolecer.',
      'Bata os ovos com o queijo ralado e tempere com noz-moscada.',
      'Verta na massa e asse na Airfryer a 175°C durante 12 a 13 minutos até gratinar.',
    ],
  },
  {
    id: 'castanhas-assadas',
    title: 'Castanhas Assadas da Beira Alta com Sal Grosso',
    category: 'petiscos',
    categoryLabel: 'Petiscos & Lanches',
    portugueseRegion: 'Beira Alta & Trás-os-Montes',
    time: '15 min',
    ingredientsCount: 2,
    difficulty: 'Muito Fácil',
    calories: '150 kcal/100g',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Como as castanhas quentes e boas dos assadores de rua em Lisboa e Porto: fáceis de descascar e com sal grosso no ponto.',
    ingredients: [
      '500g de castanhas nacionais graúdas',
      '2 colheres de sopa de sal grosso marinho',
      '1 chávena de água morna para humedecer',
    ],
    steps: [
      'Dê um golpe horizontal bem vincado na barriga de cada castanha.',
      'Mergulhe-as em água com o sal durante 5 minutos para absorverem a humidade.',
      'Escorra e coloque diretamente no cesto da Airfryer.',
      'Asse a 200°C durante 14 a 15 minutos, sacudindo o cesto a meio do tempo.',
    ],
  },
];

export const BENEFITS_DATA = [
  {
    icon: 'wallet',
    title: 'Poupe até 80€ por mês',
    description: 'Corte radicalmente nos pedidos da Glovo ou Uber Eats e reduza a fatura da eletricidade (a Airfryer consome até 70% menos energia que o forno elétrico tradicional).',
  },
  {
    icon: 'timer',
    title: 'Sem Fogão Sujo Nem Cheiro a Fritos',
    description: 'Esqueça os salpicos de óleo pela bancada e as pilhas de tachos no lava-loiça. Comida com textura de fritura estaladiça sem sujar a cozinha.',
  },
  {
    icon: 'award',
    title: 'Testado por +29.600 Lares Portugueses',
    description: 'Criado e afinado especificamente para as marcas mais vendidas em Portugal (Philips, Cecotec, Silvercrest do Lidl, Xiaomi, Cosori, Moulinex).',
  },
];

export const BONUS_DATA: BonusItem[] = [
  {
    id: 'bonus-menu-mensal',
    title: 'Menu Mensal da Cozinha Portuguesa na Airfryer',
    subtitle: '4 Semanas Estruturadas com Almoço e Jantar',
    originalPrice: '19,00€',
    tag: 'OFERTA HOJE',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
    description: 'Acabe com o eterno stress diário de "o que faço hoje para o jantar?". Um plano de 30 dias com pratos que agradam a toda a família e aproveitam sobras.',
    highlights: ['Sem repetições chatas', 'Ingredientes sazonais acessíveis', 'Pronto para imprimir ou ver no telemóvel'],
  },
  {
    id: 'bonus-temperos',
    title: 'O Segredo dos Temperos Nacionais & Marinadas',
    subtitle: 'O Truque dos Chefs para Carnes que Não Ficam Secas',
    originalPrice: '15,00€',
    tag: 'OFERTA HOJE',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    description: 'Aprenda as marinadas rápidas com louro, alho, vinho e azeite que deixam o peito de frango e as febras tenras e ultra suculentas na fritadeira.',
    highlights: ['15 marinadas tradicionais', 'Colorau, alho e ervas da horta', 'Técnica de selagem rápida'],
  },
  {
    id: 'bonus-molhos',
    title: '30 Petiscos de Taberna & Molhos Saudáveis',
    subtitle: 'Para Acompanhar sem Conservantes nem Açúcar',
    originalPrice: '12,00€',
    tag: 'OFERTA HOJE',
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80',
    description: 'Molho de iogurte com alho e salsa, molho verde de coentros, mostarda antiga com mel e vinagretes que transformam qualquer refeição simples.',
    highlights: ['Substitutos saudáveis da maionese', 'Feitos em 2 minutos', 'Conservam no frigorífico'],
  },
  {
    id: 'bonus-sumos',
    title: '20 Chás e Sumos com Frutas Nacionais',
    subtitle: 'Com Laranja do Algarve, Maçã de Alcobaça e Pera Rocha',
    originalPrice: '12,00€',
    tag: 'OFERTA HOJE',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    description: 'Bebidas frescas e reconfortantes com fruta das nossas regiões para acompanhar as suas refeições e facilitar a digestão.',
    highlights: ['Digestivos naturais', 'Sem açúcares adicionados', 'Fruta da época nacional'],
  },
  {
    id: 'bonus-limpeza',
    title: 'Guia de Limpeza Rápida do Cesto Antiaderente',
    subtitle: 'Como Tirar a Gordura e o Cheiro a Peixe em 3 Minutos',
    originalPrice: '10,00€',
    tag: 'OFERTA HOJE',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    description: 'O truque simples com água quente, vinagre e bicarbonato para desengordurar o cesto sem esfregar nem riscar o teflon.',
    highlights: ['Protege o revestimento', 'Elimina cheiros fortes', 'Sem esfregões agressivos'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Margarida Santos',
    location: 'Coimbra',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'Ontem às 21:14',
    message:
      'Espetacular! A minha airfryer estava encostada a um canto porque só sabia fazer batatas pré-fritas. Ontem fiz o Bacalhau com Broa e os Pastéis de Nata em 9 minutos. O meu marido e os miúdos limparam os pratos todos!',
    dishName: 'Bacalhau com Broa & Pastéis de Nata',
    verified: true,
  },
  {
    id: 't2',
    name: 'António Ferreira',
    location: 'Vila Nova de Gaia (Porto)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'Há 2 dias',
    message:
      'Só na primeira semana poupei mais de 50€ em entregas da Glovo. Chego cansado do trabalho, abro o livro em PDF no telemóvel, vejo a receita de 10 minutos com o que tenho no frigorífico e fica divinal. Adeus ao forno a gastar luz!',
    dishName: 'Bifanas e Costeletas Douradas',
    verified: true,
  },
  {
    id: 't3',
    name: 'Carla Vasconcelos',
    location: 'Sintra (Lisboa)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'Há 3 dias',
    message:
      'O bónus das marinadas portuguesas com vinho branco e alho vale ouro! O peito de frango nunca mais ficou seco ou tipo sola de sapato. Fica suculento e douradinho.',
    dishName: 'Frango com Marinada de Alho e Ervas',
    verified: true,
  },
  {
    id: 't4',
    name: 'Rui Mendes',
    location: 'Guimarães',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'Esta semana',
    message:
      'A lista de compras separada por secções do Pingo Doce e Continente poupa imenso tempo. Paguei por MB WAY e recebi o acesso no mesmo segundo no meu e-mail. Recomendo vivamente!',
    dishName: 'Alheira Crocante & Pataniscas',
    verified: true,
  },
];

export const PRICING_DATA = {
  originalTotal: '112,00€',
  regularPrice: '47,00€',
  promoCashPrice: '17,90€',
  currencySymbol: '€',
  paymentBadge: 'Pagamento 100% Nacional: MB WAY • Multibanco • Cartão',
  itemsIncluded: [
    { name: 'Livro Digital: Airfryer Económica (250 Receitas em PDF)', value: '29,00€' },
    { name: 'Guia de Compras Económicas (Continente, Pingo Doce, Lidl em PDF)', value: '15,00€' },
    { name: 'Bónus 1: Menu Mensal Económico da Cozinha Portuguesa (PDF)', value: '19,00€' },
    { name: 'Bónus 2: Segredo dos Temperos Nacionais & Marinadas de Taberna (PDF)', value: '15,00€' },
    { name: 'Bónus 3: 30 Petiscos de Taberna & Molhos Caseiros Saudáveis (PDF)', value: '12,00€' },
    { name: 'Bónus 4: 20 Sumos e Chás com Frutas Nacionais (PDF)', value: '12,00€' },
    { name: 'Bónus 5: Guia de Limpeza Rápida do Cesto Antiaderente (PDF)', value: '10,00€' },
  ],
};

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como recebo o livro de receitas em PDF?',
    answer:
      'O acesso é imediato! Assim que o seu pagamento for validado (por MB WAY, Referência Multibanco ou Cartão), recebe imediatamente no seu e-mail o link direto para descarregar o livro completo de 250 receitas e todos os 5 bónus em formato PDF de alta resolução. Pode abrir em qualquer telemóvel, tablet, computador ou imprimir se preferir.',
  },
  {
    question: 'Posso pagar por MB WAY ou Multibanco?',
    answer:
      'Sim! O sistema suporta os métodos preferidos em Portugal: MB WAY (recebe o pedido de confirmação no seu telemóvel para aprovar os 17,90€), Referência Multibanco (para pagar no Multibanco ou no homebanking do seu banco) ou Cartão de Débito/Crédito.',
  },
  {
    question: 'Os ingredientes são fáceis de encontrar em Portugal?',
    answer:
      'Sim, a 100%! Todas as receitas foram elaboradas tendo em conta as prateleiras dos supermercados portugueses: Continente, Pingo Doce, Lidl, Mercadona, Auchan ou a mercearia e talho do seu bairro. Nada de ingredientes raros, termos em português do Brasil ou produtos importados caros.',
  },
  {
    question: 'Funciona na minha marca de fritadeira?',
    answer:
      'Sim, em qualquer modelo! Todas as receitas foram testadas em várias marcas populares em Portugal: Philips, Cecotec (Cecofry), Silvercrest do Lidl, Xiaomi, Cosori, Moulinex, Tefal, Jocca, etc. Explicamos o tempo e a temperatura exata em graus Celsius (°C).',
  },
  {
    question: 'Ajuda mesmo a poupar na conta da luz e no supermercado?',
    answer:
      'Com certeza! Uma airfryer consome cerca de 1400W a 1600W e cozinha em 10 a 15 minutos, enquanto um forno elétrico convencional consome mais de 2500W a 3000W e precisa de 20 minutos só para pré-aquecer. Para além disso, ao cozinhar refeições rápidas e deliciosas em casa, poupa facilmente 40€ a 80€ por mês que antes gastava em takeaway e entregas.',
  },
  {
    question: 'As receitas são realmente saborosas ou parecem comida de hospital?',
    answer:
      'Têm o sabor reconfortante da nossa comida tradicional! Usamos azeite virgem extra, alho, louro, pimentão-doce, ervas frescas e queijos das nossas regiões. A comida fica estaladiça por fora e macia por dentro, sem ficar seca ou insossa.',
  },
  {
    question: 'Preciso de saber cozinhar para conseguir fazer?',
    answer:
      'Não precisa de nenhuma experiência na cozinha. As instruções são muito simples, diretas e com passos numerados. Basta temperar, colocar no cesto, definir o tempo e a temperatura recomendados e servir.',
  },
  {
    question: 'E se eu experimentar e não gostar?',
    answer:
      'Tem 7 dias de Garantia Incondicional de Satisfação. Se folhear as receitas e achar que não são úteis para a sua rotina, basta enviar um e-mail para o nosso apoio ao cliente que devolveremos 100% do seu dinheiro, sem perguntas nem complicações.',
  },
];
