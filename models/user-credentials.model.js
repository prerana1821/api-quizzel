const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserCredentialSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  username: { 
    type: String, 
    index: true, 
    trim: true,
    required: [true, 'Please add your Username'],
    unique: 'Username should be unique'
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please enter your Email ID'],
    unique: 'Email ID should be unique'
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Please Enter your password'],
  }
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  });

const UserCredential = mongoose.model('UserCredential', UserCredentialSchema);

module.exports = { UserCredential };