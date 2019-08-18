const express = require('express');
const routers = express();
const categoryController = require('../controllers/categoryController')


routers.get('/list', categoryController.listCategory);
routers.get('/edit/:id', categoryController.getEditCategory);
routers.post('/edit/', categoryController.editCategory);
routers.get('/delete/:id', categoryController.deleteCategory);
routers.get('/add', categoryController.showFormAddCategory);
routers.post('/add', categoryController.addcategory);


module.exports = routers;