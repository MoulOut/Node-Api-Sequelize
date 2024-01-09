const express = require('express');
const routes = require('./routes');

const app = express();

app.get('', (req, res) => {
  res.status(200).json('Courses API!');
});

routes(app);

module.exports = app;
