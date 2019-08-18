const express = require('express');
const routers = express();
const Authcontroller = require('../controllers/AuthController')
const userController = require('../controllers/userController')


routers.get('/list', userController.usersList);
routers.get('/edit/:id', userController.getEditUserData);
routers.post('/edit/', userController.editUser);
routers.get('/delete/:id', userController.deleteUser);
routers.get('/add', userController.showFormAddUser);
routers.post('/add', userController.addUSer);


module.exports = routers;