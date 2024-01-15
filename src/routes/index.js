const express = require('express');
const pessoas = require('./peoplesRoutes.js');
const courses = require('./coursesRoutes.js');
const categories = require('./categoriesRoutes.js');

module.exports = (app) => {
  app.use(
    express.json(), 
    pessoas, 
    courses, 
    categories
  );
};
