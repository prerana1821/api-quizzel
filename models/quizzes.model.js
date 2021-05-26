const mongoose = require('mongoose');
const { Schema } = mongoose;
const { quizzesDB } = require('./../data');

const OptionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: "Option is Required"
  },
  isCorrect: {
    type: Boolean,
    required: "To Check whether Option is right or not isCorrect is Required"
  },
});

const HighScoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'UserCredential',
    required: 'User Id is required to Identify High Score for a Quiz'
  },
  score: {
    type: Number,
    required: 'User\'s score is required to Identify High Score for a Quiz'
  }
});

const QuestionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: 'Question is Required'
  },
  points: {
    type: Number,
    required: 'Points are required for a Question'
  },
  negativePoints: {
    type: Number,
    default: 0
  },
  options: [OptionSchema]
});

const QuizSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  quizName: {
    type: String,
    required: "Quiz Name is Required",
    unique: "Quiz Name should be unique"
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: "Category Id is Required"
  },
  level: {
    type: String,
    enum: {
      values: ['Easy', 'Medium', 'Difficult'],
      message: '{VALUE} is not supported'
    },
    required: "Quiz level is Required"
  },
  thumbnail: {
    type: String,
    required: "Thumbnail is Required"
  },
  highScore: [HighScoreSchema],
  questions: [QuestionSchema]
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  });

const Quiz = mongoose.model('Quiz', QuizSchema);

const addQuizData = async () => {
  quizzesDB.forEach(async (quiz) => {
    const NewQuiz = new Quiz(quiz);
    const savedQuiz = await NewQuiz.save();
    console.log(savedQuiz);
  })
}

module.exports = { Quiz, addQuizData };