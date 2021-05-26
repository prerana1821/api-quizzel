const mongoose = require('mongoose');

const uri = process.env['uri'];
const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log('Connected Successfully');
    }
  } catch (error) {
    console.log('Connection Failed', error);
  }
}

module.exports = { initializeDatabase };