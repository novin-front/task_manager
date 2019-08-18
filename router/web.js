const express = require('express');
const routers = express();
const HomeControllers = require('../controllers/HomeControllers')


routers.get('/', HomeControllers);


module.exports = routers;