const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios');


router.get('/', usuariosController.profile);

router.get('/login', usuariosController.login);

router.get('/edit', usuariosController.profileEdit);

router.get('/register', usuariosController.register);

router.post('/register', usuariosController.store);

module.exports = router;