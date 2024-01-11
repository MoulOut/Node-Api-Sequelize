const express = require('express');
const pessoas = require('./peopleRoutes.js');
const courses = require('./courseRoutes.js');
const categories = require('./categorieRoutes.js');
const registrations = require('./registrationRoutes.js');

module.exports = (app) => {
  app.use(express.json(), pessoas, courses, categories, registrations);
};
