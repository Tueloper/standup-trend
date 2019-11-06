"use strict";

const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const chalk = require('chalk');

const dotenv = require('dotenv');

const taskRouter = require('./routes/tasks');

dotenv.config(); //mongoose connection'

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}, function (err, client) {
  if (err) console.log(chalk.red.inverse('Database connection failed'));
  if (client) console.log(chalk.green.inverse('Database Connection Passed'));
});
mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
})); //routes

app.use('/', taskRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.cyan(`Server running on PORT ${PORT}\nVisit http://localhost:${PORT}`));
});