const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.sarahRoute);
routes.get('/zach', myController.zachRoute);
routes.get('/professional', myController.getData);

module.exports = routes;