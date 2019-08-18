const express = require('express');
const routers = express();
const Authcontroller = require('../controllers/AuthController')


routers.get('/login', Authcontroller.showLogin);
routers.post('/login', Authcontroller.doLogin);
routers.get('/logout', Authcontroller.logout);
routers.get('/register', Authcontroller.showRegister);
routers.post('/register', Authcontroller.doRegister);



module.exports = routers;