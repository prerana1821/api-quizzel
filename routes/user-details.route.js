const express = require('express');
const router = express.Router();
const { extend } = require("lodash");
const { UserDetail } = require("../models/user-details.model");
const { Quiz } = require('../models/quizzes.model');

router.get('/', async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await UserDetail.findById(userId).populate({
      path: 'solvedQuizzes.quizId',
      select: 'quizName categoryId level thumbnail'
    }).exec();
    res.status(200).json({
      userDetails: user,
      success: true,
      message: "Successful retrieval of user details"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
})

router.post('/solved-quizzes', async (req, res) => {
  const { userId } = req.user;
  const { quizId, score } = req.body;
  try {
    const user = await UserDetail.findById(userId);
    user.solvedQuizzes.push({ quizId, score });
    const quiz = await Quiz.findById(quizId);
    quiz.highScore.push({ userId, score })
    await quiz.save();
    const savedDetails = await user.save();
    const populatedData = await savedDetails.populate({
      path: 'solvedQuizzes.quizId',
      select: 'quizName categoryId level thumbnail'
    })
      .execPopulate();
    res.status(201).json({
      solvedQuizzes: populatedData,
      success: true,
      message: "Added Score in User Details"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
})

router.post('/solved-quizzes/:quizId', async (req, res) => {
  const { userId } = req.user;
  const { quizId } = req.params;
  const { score } = req.body;
  try {
    const user = await UserDetail.findById(userId);
    const quiz = await Quiz.findById(quizId);
    const userQuiz = user.solvedQuizzes.find(item => item.quizId == quizId);
    const userScore = quiz.highScore.find((item) => item.userId == userId);
    if (userQuiz && userScore) {
      let updatedUserScore = extend(userScore, { score });
      await quiz.save();
      let updatedQuizDetails = extend(userQuiz, { score });
      await user.save();
      return res.status(200).json({
        solvedQuizzes: updatedQuizDetails,
        success: true,
        message: "Score updated successfully"
      });
    } res.status(403).json({
      success: false,
      errorMessage: "Quiz not found"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
})

module.exports = router;