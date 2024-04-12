const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/product/:idProducto', mainController.detalleProducto);

router.get('/profile', mainController.profile);

router.get('/product-add/:idProducto', mainController.addProduct);

router.get('resultadosBusqueda/:busqueda', mainController.busqueda);

module.exports = router;