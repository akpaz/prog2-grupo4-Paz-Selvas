const express = require('express');
const router = express.Router();

const comentariosController = require('../controllers/comentarios');

router.post('/nuevoComentario', comentariosController.store);

module.exports = router;