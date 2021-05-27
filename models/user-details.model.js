const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserDetailSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  _id: { type: Schema.Types.ObjectId, ref: 'UserCredential' },
  solvedQuizzes: [{
    quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: "Quiz Id is required"
    },
    score: {
      type: Number,
      default: 0,
      required: "Score of a quiz is required"
    }
  }],
  totalScore: { type: Number, default: 0 },
  coins: { type: Number, default: 0 },
  knowledgeLevel: { type: Number, default: 0 },
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  });

const UserDetail = mongoose.model('UserDetail', UserDetailSchema);

module.exports = { UserDetail };