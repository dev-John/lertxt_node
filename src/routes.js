const express = require('express');
const TxtManagerController = require('./controllers/TxtManagerController');

const routes = express.Router();

routes.get('/', TxtManagerController.readTxt);

module.exports = routes;