const quizzesDB = [
  {
    quizName: "Swimming Strokes",
    categoryId: "60ae83ba668b3206bfa96186",
    level: "Easy",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbSeDQkqki12JMfNZ5BS6yCUNV4__TJxXKw&usqp=CAU",
    highScore: [
      {
        userId: "60ae7ad0c2e820033978c65f",
        score: 20
      }
    ],
    questions: [
      {
        text: 'Which stroke is the only style in which swimmers are face-up in the water?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            text: 'Backstroke',
            isCorrect: true,
          },
          {
            text: 'Butterfly',
            isCorrect: false,
          },
          {
            text: 'Freestyle',
            isCorrect: false,
          }
        ]
      },
      {
        text: 'Which stroke is a swimming stroke in which the arms are thrown forward together out of the water while the feet kick up and down?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            text: 'Backstroke',
            isCorrect: false,
          },
          {
            text: 'Butterfly',
            isCorrect: true,
          },
          {
            text: 'Freestyle',
            isCorrect: false,
          }
        ]
      },
      {
        text: 'What stroke is swiming faced down and extend the arms forward and outward while frog kicking?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            text: 'Breaststroke',
            isCorrect: true,
          },
          {
            text: 'Backstroke',
            isCorrect: false,
          },
          {
            text: 'Freestyle',
            isCorrect: false,
          }
        ]
      },
    ],
  },
  {
    quizName: "Championships",
    categoryId: "60ae83ba668b3206bfa96187",
    level: "Difficult",
    thumbnail: "https://i.guim.co.uk/img/media/b339572204f03729bbdd7c34133b4ebfd21e27d1/0_110_5216_3129/master/5216.jpg?width=700&quality=85&auto=format&fit=max&s=ec04b357793f146b7a2c57d80abcbbac",
    highScore: [
      {
        userId: "60ae7be6ed8021038bdde132",
        score: 20
      }
    ],
    questions: [
      {
        text: 'In 2015, at the age of 10, who became the youngest competitive swimmer in World Championships history?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            text: 'Alzain Tareq',
            isCorrect: true,
          },
          {
            text: 'Rick Carey',
            isCorrect: false,
          },
          {
            text: 'Virat Kohli',
            isCorrect: false,
          }
        ]
      },
      {
        text: 'Who was named the male FINA Swimmer of the Year three times from 2010 to 2017?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            text: 'Alzain Tareq',
            isCorrect: false,
          },
          {
            text: 'Michael Phelps',
            isCorrect: false,
          },
          {
            text: 'Rick Carey',
            isCorrect: true,
          },
        ]
      },
      {
        text: 'Which Australian water polo player was inducted into the International Swimming Hall of Fame in 2017?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            text: 'Rick Carey',
            isCorrect: false,
          },
          {
            text: 'Bridgette Gusterson',
            isCorrect: true,
          },
          {
            text: 'Janet Evans',
            isCorrect: false,
          }
        ]
      },
    ],
  },
];

const categoriesDB = [
  {
    name: 'Strokes',
    noOfQuizzes: 1,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-9fmmfI8WbHzdsod7tTy__b4OE_ifPQtAg&usqp=CAU',
    description: 'string',
  },
  {
    name: 'People',
    noOfQuizzes: 1,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRf1AeCZnLKKmu1bGoujfppvJufQQ0AxShcdnW5cs-960qW-e41f2Qj19bHZygbpscoTs&usqp=CAU',
    description: 'string',
  }
]

module.exports = { quizzesDB, categoriesDB }