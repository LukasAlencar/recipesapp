export const recipes = [
  {
    id: '1',
    name: 'Macarrão alho e óleo',
    description: 'Uma receita rápida com alho dourado e azeite.',
    time: '30min',
    ingredients: ['Macarrão', 'Alho', 'Sal', 'Óleo', 'Manteiga'],
    steps: [
      'Amasse bem o alho juntamente com o sal, formando uma pasta.',
      'Em uma frigideira, coloque o alho amassado e o óleo.',
      'Frite em fogo médio sem deixar o alho queimar, só dourar.',
      'Acrescente a manteiga e deixe ferver um pouco, mexendo sempre.',
      'Coloque sobre o macarrão imediatamente.'
    ],
    image: require('../assets/alhoeoleo.jpg'),
  },
  {
    id: '2',
    name: 'Panqueca simples',
    description: 'Massa leve recheada com carne ou queijo.',
    time: '40min',
    ingredients: [
      '2 ovos', '1 xícara de leite', '1 colher de sopa de óleo',
      '1 xícara de farinha de trigo', 'Sal a gosto',
      'Carne moída', 'Cebola', 'Tomate', 'Extrato de tomate',
      'Creme de leite', 'Mussarela', 'Queijo ralado'
    ],
    steps: [
      'Bata no liquidificador os ovos, o leite, o óleo, e acrescente a farinha de trigo aos poucos.',
      'Adicione sal a gosto e misture até obter uma consistência cremosa.',
      'Espalhe óleo por toda a frigideira e despeje uma concha de massa.',
      'Faça movimentos circulares para espalhar a massa.',
      'Espere a massa soltar e vire para fritar o outro lado.',
      'Doure a cebola com óleo, acrescente a carne e deixe cozinhar.',
      'Adicione o tomate picado e cozinhe por mais 3 minutos.',
      'Adicione extrato de tomate e temperos a gosto.',
      'Cozinhe por 10 minutos, desligue o fogo e misture o creme de leite.',
      'Leve ao fogo baixo por mais 5 minutos.',
      'Recheie a panqueca com mussarela e carne, e enrole.',
      'Coloque um pouco de molho no refratário, disponha as panquecas.',
      'Despeje o molho restante por cima e polvilhe queijo ralado.',
      'Leve ao forno médio por 20 minutos para gratinar.'
    ],
    image: require('../assets/panqueca.jpg'),
  },
  {
    id: '3',
    name: 'Arroz carreteiro',
    description: 'Tradicional arroz com carne seca e temperos.',
    time: '1h',
    ingredients: [
      'Carne seca', 'Calabresa', 'Bacon', 'Tomate', 'Cebola',
      'Pimenta calabresa', 'Arroz', 'Água', 'Salsinha'
    ],
    steps: [
      'Cozinhe a carne seca na panela de pressão, deixe esfriar e desfie.',
      'Retire a pele da calabresa e corte em cubos, junto com o bacon.',
      'Corte o tomate em cubos pequenos, sem sementes, e a cebola.',
      'Refogue o bacon e a calabresa até dourarem.',
      'Adicione a cebola, tomate, pimenta calabresa e carne desfiada.',
      'Acrescente o arroz e refogue bem.',
      'Adicione água, ajuste o sal, abaixe o fogo e cozinhe até secar.',
      'Finalize com salsinha por cima.'
    ],
    image: require('../assets/arrozcarreteiro.jpg')
  },
];

