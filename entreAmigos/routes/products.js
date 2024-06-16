const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

const productValidations = require('../middleware/productValidations');

router.get('/', productsController.index);

router.get('/product-detail/:idProducto', productsController.detalleProducto);

router.get('/product-add', productsController.addProduct);

router.get('/product-edit/:idProducto', productsController.editProduct);

router.get('/busqueda-products/:busqueda', productsController.busqueda);

router.post('/borrarProducto/:idProducto', productsController.borrar);

router.post('/editarProducto/:idProducto', productValidations, productsController.processEdit);

router.post('/crearProducto/:idProducto', productsController.processAdd);

module.exports = router;
