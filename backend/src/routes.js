const express = require('express');

const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);

routes.get('/login', LoginController.index);

module.exports = routes;