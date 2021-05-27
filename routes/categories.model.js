const express = require('express');
const router = express.Router();
const { Category } = require("../models/categories.model");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({})
    return res.status(200).json({
      categories,
      success: true,
      message: "Successful Retrieval"
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error while retrieving categories",
      errorMessage: error.message
    })
  }
})

module.exports = router;