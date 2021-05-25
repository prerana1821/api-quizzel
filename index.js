const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDatabase } = require("./db/db.connect");
const { errorHandler } = require("./middlewares/error-handler.middleware");
const { routeNotFound } = require("./middlewares/route-not-found.middleware");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

initializeDatabase();

app.get('/', (req, res) => {
  res.send('Hello Quizzel!')
});

app.use(errorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log('server started', PORT);
});