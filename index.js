const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDatabase } = require("./db/db.connect");
const { errorHandler } = require("./middlewares/error-handler.middleware");
const { routeNotFound } = require("./middlewares/route-not-found.middleware");
const { authVerify } = require('./middlewares/auth-verify.middleware');
const userCredentials = require('./routes/user-credentials.route');
const quizzes = require('./routes/quizzes.route');
const categories = require('./routes/categories.model');
const userDetails = require('./routes/user-details.route');
const { addCategoryData } = require('./models/categories.model');
const { addQuizData } = require('./models/quizzes.model');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

initializeDatabase();

// addCategoryData();
// addQuizData();

app.use('/auth', userCredentials);
app.use('/quizzes', quizzes);
app.use('/categories', categories);
app.use('/user-details', authVerify, userDetails)

app.get('/', (req, res) => {
  res.send('Hello Quizzel!')
});

app.use(errorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log('server started', PORT);
});