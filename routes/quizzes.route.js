const express = require('express');
const router = express.Router();
const { Quiz } = require("../models/quizzes.model");

router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find({})
      .select('quizName categoryId level thumbnail')
      .populate({
        path: 'categoryId',
        select: 'name'
      })
      .exec();
    return res.status(200).json({
      quizzes,
      success: true,
      message: "Successful Retrieval"
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error while retrieving quizzes",
      errorMessage: error.message
    })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let quiz = await Quiz.findById(id)
      .populate({ path: 'categoryId', select: 'name' })
      .exec();
    quiz.__v = undefined;
    if (quiz) {
      return res.status(200).json({ quiz, success: true, message: "Successful Retrieval" })
    } res.status(404).json({
      success: false,
      message: "The quiz ID sent has no quiz associated with it. Check and try again"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while retrieving quiz",
      errorMessage: error.message
    })
  }
});

module.exports = router;