const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.sarahRoute);
routes.get('/zach', lesson1Controller.zachRoute);

module.exports = routes;