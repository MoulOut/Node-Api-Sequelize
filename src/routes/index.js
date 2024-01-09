const express = require('express');
const pessoas = require('./peopleRoutes.js');

module.exports = (app) => {
  app.use(express.json(), pessoas);
};
