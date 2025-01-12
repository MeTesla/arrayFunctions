export const qcmQuestions = [
{question: '<i>La boîte à merveilles</i> est écrit en:', 
c1: '1950', 
c2: '1951', 
c3: '1952',
rep:'1952'},
{question : '<i>La boîte à merveilles</i> est publié en:',
c1: '1950',
c2: '1952',
c3: '1954',
rep: '1954'},
{question : 'Ahmed Sefrioui est né en:', 
c1:'1910', 
c2:'1915',
c3: '1921',
rep: '1915'},
{question: `Comment s'appelle le narrateur?`,
c1:'Ahmed Sefrioui',
c2:'Sidi Mohammed', 
c3:'Mohammed Sefrioui',
rep:'Sidi Mohammed'},
{question: 'Sidi Mohammed est âgé de', 
c1:'5 ans',
c2:'6 ans', 
c3: '7 ans',
rep: '6 ans'},
{question: 'Le narrateur souffrait de',
c1:'La migraine',
c2:'La fièvre', 
c3: 'La solitude',
rep: 'La solitude'},
{question: 'Où habite Sidi Mohammed?',
c1:'A Dar Kitoune',
c2:'A Dar Idrissiyine',
c3: 'A Dar Chouafa',
rep: 'A Dar Chouafa'},
{question: `Parmi les romans d'Ahmed Sefrioui :`,
c1:'Voyageur sans Bagages',
c2:'Le Chaplet d’Ambre',
c3: 'Les Misérables',
rep: 'Le Chaplet d’Ambre'},
{question:'Ahmed Sefrioui est décédé en :',
c1:'2004',
c2: '2005',
c3 : '2006',
rep: '2005'}
];

export const qcmLength=qcmQuestions.length;

export const vfQuestions = [
  {'question': 'Sidi Mohammed était un enfant heureux', 'rep': 'faux'},
  {'question': 'Les événements du roman se déroulent à Fès.', 'rep': 'vrai'},
  {'question': 'Lalla Aicha était l\'amie intime et la confidente de Lalla Zoubida.', 'rep': 'vrai'},
  {'question': 'Maâlem Abdeslam était un homme sévère et méchant', 'rep': 'faux'},
  {'question': `Le père du narrateur est un homme pieux et peu bavard`, 'rep': 'vrai'},
  {'question': `Sidi Mohammed aimait le bain maure`, 'rep': 'faux'},
  {'question': `Sidi Mohammed n'aimait pas le fqih`, 'rep': 'vrai'},
  {'question': `<i>Le Chapelet d'ombre</i> est un roman de Ahmed Sefrioui`, 'rep': 'vrai'},
  {'question': `<i>Le voyageur sans bagage</i> est un roman de Ahmed Sefrioui`, 'rep': 'faux'},
  {'question': `<i><i>La boîte à merveilles</i></i> est un roman marocain d'expression française`, 'rep': 'vrai'},
  {'question': `Ahmed SEFRIOUI est un écrivain du 19ème siècle.`, 'rep': 'faux'},
  {'question': `La Boîte à merveilles est une autobiographique.`, 'rep': 'fax '},
  {'question': `Abdellah l'épicier raconte des histoires merveilleuses. `, 'rep': 'vrai'},
  {'question': `Avant Achoura, le fqih est devenu aimable`, 'rep': 'vrai'},
  {'question': `Quand les élèves nettoyaient le msid, Sidi Mohammed apportait de l'eau de la fontaine`, 'rep': 'faux'}
];

export const vfLength=vfQuestions.length;

export const matchMots = [
    { mot: 'aller', syn: 'partir' },
    { mot: 'grand', syn: 'élevé' },
    { mot: 'heureux', syn: 'joyeux' },
    { mot: 'petit', syn: 'minuscule' },
    { mot: 'bon', syn: 'excellent' },
    { mot: 'mauvais', syn: 'méchant' },
    { mot: 'fort', syn: 'puissant' },
    { mot: 'faible', syn: 'fragile' },
    { mot: 'nouveau', syn: 'frais' },
    { mot: 'vieux', syn: 'ancien' },
  { mot: 'beau', syn: 'joli' },
  { mot: 'rapide', syn: 'vite' },
  { mot: 'lent', syn: 'paisible' },
  { mot: 'simple', syn: 'facile' },
  { mot: 'difficile', syn: 'compliqué' },
  { mot: 'chaud', syn: 'brûlant' },
  { mot: 'froid', syn: 'glacial' },
  { mot: 'clair', syn: 'lumineux' },
  { mot: 'sombre', syn: 'obscur' },
  { mot: 'riche', syn: 'fortuné' },
  { mot: 'pauvre', syn: 'modeste' },
  { mot: 'heure', syn: 'moment' },
  { mot: 'jour', syn: 'journée' },
  { mot: 'nuit', syn: 'obscurité' },
  { mot: 'aimer', syn: 'adorer' },
  { mot: 'détester', syn: 'haïr' },
  { mot: 'grandir', syn: 'croître' },
  { mot: 'penser', syn: 'réfléchir' },
  { mot: 'voir', syn: 'observer' },
  { mot: 'parler', syn: 'discourir' },
  { mot: 'écrire', syn: 'composer' },
  { mot: 'manger', syn: 'déguster' },
  { mot: 'courir', syn: 'galoper' },
  { mot: 'marcher', syn: 'se promener' },
  { mot: 'rire', syn: 'sourire' },
  { mot: 'pleurer', syn: 'sangloter' },
  { mot: 'travailler', syn: 'œuvrer' },
  { mot: 'étudier', syn: 'apprendre' },
  { mot: 'jouer', syn: 's’amuser' },
  { mot: 'dormir', syn: 'somnoler' }
];

export const matchLength = matchMots.length;

export const data=[
{
'texte': `La Boîte à merveilles est un roman autobiographique écrit par Ahmed Essafrioui en 1942. Il raconte l'histoire d'un enfant âgé de six ans qui se nomme Sidi Mohammed qui souffre de la solitude son seul ami était sa boîte à merveilles.`,
'liste': ['merveilles','autobiographique', 'Ahmed', 'six', 'Mohammed', 'boîte']
},

{
'texte': `L'histoire commence par la présentation des locataires de Dar chouafa et la description d'une séance de danse et de musique de la confrérie gnawa. Le narrateur, un enfant de six ans, parle ensuite de sa Boite à Merveilles avant de raconter le mauvais souvenir du bain maure et une dispute entre sa mère, Lalla Zoubida et Rahma.`,
'liste': ['locataires', 'gnawa','six', 'mauvais', 'maure', 'dispute', 'Zoubida', 'Rahma']
},

{
'texte': `Le mardi, le narrateur va au Msid (l'école coranique), un lieu qu'il déteste. De retour, il trouve sa mère souffrante. Son amie, Lalla Aicha, vient lui rendre visite et la convainc de visiter Sidi Ali Boughaleb. Puis le narrateur convoque l'origine de ses parents, et le souvenir de Driss le teigneux, l'apprenti de son père.`,
'liste': ['mardi', 'Msid', 'déteste', 'souffrante', 'Boughaleb', 'origine', 'teigneux']
},

{
'texte': `Le narrateur raconte sa journée au Msid. Ensuite, Sidi Mohammed relate le souvenir de la disparition de Zineb, et comment sa mère réussit à la retrouver à la maison des Idrissides. Pour remercier Dieu, Rahma prépare un repas pour les mendiants.`,
'liste': ['Msid', 'disparition', 'retrouver', 'remercier', 'mendiants']
},

{
'texte': `Les premiers jours de printemps. Sidi Mohammed joue avec les enfants des voisins. Lalla Aicha raconte ensuite à son amie les malheurs de son mari avec son associé Abdelkader. Le lendemain, La mère rapporte ce récit malheureux à son mari. Celui-ci parle à sidi Mohammed d'Abdellah l'épicier qui racontait des histoires extraordinaires.`,
'liste': ['printemps', 'joue', 'malheurs', 'Abdelkader', 'lendemain', 'rapporte', 'Abdellah', 'extraordinaires']
},

{
'texte': `Un mercredi, le Fqih explique à ses élèves ses projets pour Achoura. A la maison, Lalla Zoubida raconte les malheurs de Lalla Aicha à Fatma, puis à Rahma. Ensuite, le narrateur relate le souvenir de la mort de Sidi Mohammed Ben Tahar. Ayant assisté à la scène, le petit enfant fait un cauchemar la nuit.`,
'liste': ['mercredi', 'Fqih', 'Achoura', 'relate', 'mort', 'Tahar', 'cauchemar']
},

{
'texte': `Pendant les préparatifs pour Achoura au Msid, le fqih organise le travail et forme des équipes. Le petit Sidi Mohammed est nommé chef des frotteurs. Sidi Mohammed se dispute avec Zineb. Sa mère se met en colère. Triste et ayant faim, le petit enfant plonge dans ses rêveries. Le narrateur nous rapporte ensuite l'histoire de Lalla Khadija et son mari l'oncle Othman racontée aux voisines par Rahma.`,
'liste': ['préparatifs', 'équipes', 'frotteurs', 'dispute', 'Triste', 'rêveries', 'Khadija']
},

{
'texte': `Sidi Mohammed accompagne son père au souk pour acheter les jouets. La veille de Achoura, il passe la soirée en jouant de ses instruments de musique. Le jour de Achoura, le petit enfant se réveille tôt et met ses vêtements neufs. Après le repas, Lalla Aicha vient rendre visite à la famille du narrateur.`,
'liste': ['accompagne', 'souk', 'jouets', 'soirée', 'musique', 'tôt', 'Msid', 'exceptionnelle']
},

{
'texte': `Après Achoura, la vie retrouve sa monotonie. Un jour, le père du narrateur décide d'emmener sa femme et son fils au souk des bijoux pour acheter des bracelets. Accompagnée de Fatma Bziouya, la famille du narrateur arrive au souk des bijoutiers mais le père se bagarre avec un courtier. Lalla Zoubida, ne veut plus ces bracelets, elle pense qu'ils portent malheur. Sidi Mohammed tombe malade.`,
'liste': ['Achoura', 'souk', 'bracelets', 'bagarre', 'veut', 'tombe']
},

{
'texte': `Le père a perdu tout son capital. Il décide de vendre les bracelets et d'aller travailler aux environ de Fès. Sidi Mohammed souffre toujours de fièvre. Le départ du père est vécu comme un grand drame.  Pendant l'absence de Si Abdeslam, Lalla Zoubida rend visite à son amie Lalla Aicha. Elle lui propose alors d'aller consulter un voyant : Sidi El Arafi.`,
'liste': ['capital', 'bracelets', 'environ', 'souffre', 'départ', 'drame', 'visite', 'voyant', 'Arafi']
},

{
'texte': `Les deux amies consultent Sidi El Arafi qui réussit à les rassurer. Lalla Zoubida rentre chez elle tout en gardant le secret de la visite... elle décide de garder son enfant à la maison et de l'emmener régulièrement faire la visite d'un saint de la ville. Le petit enfant vit alors des moments de solitude quand sa mère sort pour rendre visite à son amie. Un matin elle reçoit la visite d'un envoyé de son mari.`,
'liste': ['consultent', 'rassurer', 'secret', 'garder', 'saint', 'solitude', 'reçoit', 'mari']
},

{
'texte': `Les femmes discutent Chez Lalla Aicha quand elle reçoit la visite de Salama, qui raconte son rôle dans le mariage de Moulay Larbi avec la fille du coiffeur et les problèmes du nouveau couple. Cela présage un divorce certain.`,
'liste': ['discutent', 'Salama', 'mariage', 'coiffeur', 'couple', 'divorce']
},

{
'texte': `Le narrateur raconte le retour de son père. Sidi Mohammed raconte à son père les événements passés pendant son absence. Driss El Aouad félicite Maâlem Abdeslam pour son retour. Plongés dans leur discussion, les deux hommes oublient le petit enfant qui, aussi solitaire qu'au début et aussi rêveur, sort sa boite à merveilles et se laisse bercer par ses rêves.`,
'liste': ['retour', 'événements', 'félicite', 'discussion', 'hommes', 'solitaire', 'rêveur', 'merveilles']
},
]

export const dataLength = data.length;

export const ordrePhrasesData = [`Le narrateur décrit dar chouafa et ses locataires`,
`Sidi Mohammed n'aime pas le bain maure`,
`Lalla Zoubida se dispute avec Rahma`,
`Les deux femmes vont à Sidi Ali Boughaleb`,
`Le Narrateur se fait griffer par un chat`,
`Fatma Bziouya a acheté une lampe à pétrole`,
`Maâlem Abdeslam a acheté une lampe à pétrole`,
`Zineb accompagnait sa mère à un baptême`,
`Rahma a organisé un repas pour les mendiants`,
`Moulay Larbi a perdu son atelier à cause de Abdelkader`,
`Lalla Aïcha vend ses bijoux pour aider son mari`,
`Sidi Mohammed est nommé chef des frotteurs`,
`Sidi Mohammed Achète des habits neuf de la Kissaria`,
`Maâlem Abdeslam se dispute avec un courtier`,
`Le courtier voulait voler l'argent de Maâlem Abdeslam`,
`Lalla Zoubida ne veut plus les bracelets`,
`Moulay Larbi se marie à une autre femme`,
`Lalla Aïcha pleurait car son mari l'a trahie`,
`Maâlem Abdeslam perd son capital`,
`Maâlem Abdeslam décide de travailler comme moissonneur`,
`Maâlem Abdeslam voyage aux environs de Fès`,
`Le Narrateur, sa mère et Lalla Aicha vont chez Sidi El Arafi`,
`Sidi Mohammed a aimé Sidi El Arafi`,
`Lalla Zoubida est une femme bavarde`]