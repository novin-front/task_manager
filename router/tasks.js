const express = require('express');
const routers = express();
const taskcontroller = require('../controllers/tasksControllers')


routers.get('/add', taskcontroller.create);
routers.post('/add', taskcontroller.store);
routers.get('/delete/:id', taskcontroller.remove);
routers.get('/edit/:id', taskcontroller.edit);
routers.post('/edit/', taskcontroller.saveEdit);


module.exports = routers;