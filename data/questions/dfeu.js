import { Levels, Categories } from '../../src/utils/config';

export default [
  {
    category: Categories.FIELD,
    question: "Les dimensions d'un terrain outdoor sont de :",
    image: undefined,
    answerChoices: {
      a: '90m x 30m',
      b: '97m x 35m',
      c: '100m x 37m',
    },
    correctAnswers: ['c'],
    explanation: 'Voir le schéma qui figure dans le chapitre 2 des règles.',
    rules: undefined,
    source: 'DFEU - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question:
      "À la réception d'un pull, une attaquante touche involontairement le disque avec sa jambe, puis le disque touche le sol sans être attrapé.",
    image: undefined,
    answerChoices: {
      a: "Le geste était involontaire, les attaquants gardent la possession du disque à l'endroit où il l'a touché",
      b: "Turnover car elle ne l'a pas attrapé",
      c: "Ne l'ayant pas touché avec la main, les attaquants récupèrent le disque à l'endroit où il s'arrête ou sort",
    },
    correctAnswers: ['b'],
    explanation: "C'est un « drop de pull ». L'aspect volontaire ou non n'entre pas en considération.",
    rules: ['7.8.'],
    source: 'DFEU - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question: "Sur le pull, le disque atterrit et s'immobilise dans la zone d'en-but adverse",
    image: undefined,
    answerChoices: {
      a: "Les attaquants peuvent le jouer à l'endroit où il a touché le sol ou à l'endroit où il s'est immobilisé",
      b: "Les attaquants ont le choix de le jouer à l'endroit où il s'est arrêté ou à l'entré de la zone",
      c: "Les attaquants doivent le jouer de l'endroit où il s'est immobilisé",
    },
    correctAnswers: ['c'],
    explanation: "Si le disque ne sort pas du terrain suite à un pull, le lanceur doit le jouer là où il s'est arrêté.",
    rules: ['7.10.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question: "La ligne qui délimite l'aire de jeu",
    image: undefined,
    answerChoices: {
      a: "est considérée comme faisant partie de l'aire de jeu",
      b: "est considérée comme ne faisant pas partie de l'aire de jeu",
    },
    correctAnswers: ['b'],
    explanation: "À l'ultimate, les lignes ne font pas partie du terrain.",
    rules: ['11.1.'],
    source: 'DFEU - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question:
      'Le pull sort du terrain par un côté sans avoir été en contact avec le sol. La lanceuse peut mettre son pied de pivot',
    image: undefined,
    answerChoices: {
      a: 'à la marque du brick, ou au milieu du terrain, ou à la ligne de touche où le disque est sorti',
      b: "à la marque du brick, ou au milieu de la ligne d'en-but",
      c: 'à la marque du brick, ou au point de la ligne de touche où le disque est sorti',
      d: 'à la marque du brick, ou au point de la ligne de touche le plus près de là où le disque à atterri',
    },
    correctAnswers: ['c'],
    explanation: "C'est à l'équipe attaquante de choisir.",
    rules: ['7.12.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question:
      "Un joueur vient de plonger pour attraper le disque. Dès l'instant où il atterrit sur la poitrine, le défenseur dit « stalling » et commence à compter",
    image: undefined,
    answerChoices: {
      a: 'Le défenseur doit attendre que le joueur se relève avant de commencer à compter',
      b: "Le défenseur n'est pas obligé d'attendre que le joueur se relève avant de commencer à compter",
    },
    correctAnswers: ['b'],
    explanation:
      "Le défenseur peut compter s'il est à moins de 3 mètres du lanceur et ne commet pas d'infraction de marquage.",
    rules: ['9.3.', '9.3.1.', '9.3.2.', '9.3.3.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      "Un attaquant attrape le disque en l'air et atterrit avec un pied dans l'aire de jeu et un pied sur la ligne de touche. Les deux pieds touchent le sol en même temps.",
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'Pas turnover',
    },
    correctAnswers: ['a'],
    explanation: "Le premier appui de l'attaquant est hors-limites.",
    rules: ['11.4.', '11.4.1.', '11.4.2.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question: 'Une attaquante et une défenseuse attrapent le disque exactement au même moment',
    image: undefined,
    answerChoices: {
      a: 'La défenseuse prend la possession du disque',
      b: "L'attaquante prend la possession du disque",
      c: 'Le disque retourne à la lanceuse',
    },
    correctAnswers: ['b'],
    explanation: "Et le jeu n'est pas arrêté, sauf si une discussion est nécessaire pour résoudre la situation.",
    rules: ['12.3.'],
    source: 'DFEU - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.COUNT,
    question: 'Pour un stall-out, le lanceur doit être encore en possession du disque quand',
    image: undefined,
    answerChoices: {
      a: 'le marqueur commence à dire « Stall », après avoir atteint dix',
      b: 'le marqueur finit de dire « Stall », après avoir atteint dix',
      c: 'le marqueur commence à dire « dix »',
      d: 'le marqueur finit de dire « dix »',
    },
    correctAnswers: ['c'],
    explanation:
      "C'est bien le « d » de « dix » qui marque la fin du compte. L'appel « Stall-out » vient simplement signifier que « dix » a été atteint.",
    rules: ['13.2.', '13.2.2.'],
    source: 'DFEU - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.GOAL,
    question:
      "Un attaquant attrape le disque dans la zone d'en-but qu'il attaque. Puis il lance une passe non complétée",
    image: undefined,
    answerChoices: {
      a: "C'est un turnover",
      b: "Pas de turnover, c'est un point",
    },
    correctAnswers: ['b'],
    explanation:
      "Le point est marqué au moment du catch, que l'attaquant en ait conscience ou non. La tentative de passe ratée ensuite n'a donc pas d'importance car le point est déjà marqué (à condition que quelqu'un ait appelé « point » sur le terrain).",
    rules: ['14.4.'],
    source: 'DFEU - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question: "La lanceuse subit une faute pendant qu'elle pivote. Elle appelle la faute puis tente la passe",
    image: undefined,
    answerChoices: {
      a: 'Si la passe est complétée, le jeu continue',
      b: "Si la passe n'est pas complétée, le jeu continue",
      c: "Le disque revient à la lanceuse quelle que soit l'issue de la passe",
      d: 'La lanceuse ne peut appeler que « Contact » quand le contact a lieu hors du mouvement de lancer',
    },
    correctAnswers: ['c'],
    explanation: "Le jeu s'arrête immédiatement lorsque la lanceuse appelle « faute », donc la passe est ignorée.",
    rules: ['16.1.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      "Un attaquant touche le disque en l'air en essayant de l'attraper, mais ne réussit pas. Le défenseur commet alors une faute sur l'attaquant et l'empêche de faire une deuxième tentative pour attraper le disque",
    image: undefined,
    answerChoices: {
      a: "C'est une faute « Strip »",
      b: "Ce n'est pas une faute car l'attaquant avait déjà raté son catch",
      c: "C'est une faute car l'attaquant a été empêché d'attraper le disque sur sa seconde tentative",
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['17.2.1.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'La lanceuse appelle « Disc space » et la marqueuse conteste',
    image: undefined,
    answerChoices: {
      a: "Le jeu s'arrête",
      b: "Le jeu ne s'arrête pas",
      c: 'La marqueuse ne peut pas contester une infraction de marquage',
    },
    correctAnswers: ['a'],
    explanation: "Le jeu ne se serait pas arrêté si l'infraction avait été acceptée.",
    rules: ['18.1.2.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      "Un travel est appelé contre la lanceuse avant qu'elle ne fasse sa passe. La lanceuse tente la passe, mais elle n'est pas complétée.",
    image: undefined,
    answerChoices: {
      a: 'Turnover. Le jeu continue sans check',
      b: 'Turnover. Le jeu continue après un check',
      c: "Turnover seulement si le travel n'est pas contesté",
      d: 'Le disque revient à la lanceuse',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['18.2.8.'],
    source: 'DFEU - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      "Un défenseur essaie de suivre le joueur sur lequel il défend, mais il rentre dans l'une de ses coéquipières. Le lanceur a toujours le disque",
    image: undefined,
    answerChoices: {
      a: "Ce n'est pas un pick car ils sont dans la même équipe",
      b: "C'est un pick, mais le jeu ne s'arrrête pas si l'attaquant ne reçoit pas le disque",
      c: "C'est un pick. Le jeu s'arrête et le défenseur peut rattraper son retard",
    },
    correctAnswers: ['c'],
    explanation:
      "C'est un pick. Le défenseur peut aussi prendre 2 secondes avant de l'appeler pour vérifier s'il a un impact sur le jeu ou pas.",
    rules: ['18.3.1.', '18.3.1.1.', '18.3.2.'],
    source: 'DFEU - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FIELD,
    question:
      "Après avoir établi son pied de pivot dans le terrain, un joueur réussit sa passe en mettant l'autre dehors",
    image: undefined,
    answerChoices: {
      a: 'Il y a turnover car il avait un pied en dehors du terrain',
      b: "Il n'y a pas turnover",
    },
    correctAnswers: ['b'],
    explanation: 'Le pied de pivot étant établi dans le terrain, le joueur est considéré en-jeu.',
    rules: ['11.3.3.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question: 'Sur un « Stall-out » accepté',
    image: undefined,
    answerChoices: {
      a: "Turnover, c'est le marqueur qui reprend la possession du disque",
      b: "Turnover et n'importe quel attaquant peut reprendre le disque, après un check",
    },
    correctAnswers: ['b'],
    explanation:
      "N'importe quel attaquant peut prendre possession du disque après un « turnover » sauf après une interception (dans ce cas le joueur qui a fait l'interception doit maintenir la possession) ou après une faute de réception offensive (dans ce cas le joueur ayant subi la faute doit prendre la possession)",
    rules: ['13.5.', '13.5.1.', '13.5.2.'],
    source: 'DFEU - Pablo',
    level: Levels.MIDDLE,
  },
];
