const express = require('express');
const router = express.Router();

const comentariosController = require('../controllers/comentarios');

router.post('/nuevoComentario/:idProducto', comentariosController.store);

module.exports = router;