const express = require('express');
const router = express.Router();

const comentariosController = require('../controllers/comentarios');

const commentValidations = require('../middleware/commentValidations');

router.post('/nuevoComentario/:idProducto', commentValidations, comentariosController.store);

module.exports = router;