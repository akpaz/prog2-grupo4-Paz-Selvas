const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.index);

router.get('/product-detail/:idProducto', productsController.detalleProducto);

router.get('/product-add/', productsController.addProduct);

router.get('/product-edit/:idProducto', productsController.editProduct);

router.get('/busqueda-products/:busqueda', productsController.busqueda);

module.exports = router;