const express = require('express');
const router = express.Router();
const { UserDetail } = require("../models/user-details.model");

router.get('/', async (req, res) => {
  const { userId } = req.user;
  console.log(userId);
  const user = await UserDetail.findById(userId);
  res.status(200).json({
    user, 
    success: true,
    message: "Successful retrieval of user details"
  });
})


module.exports = router;