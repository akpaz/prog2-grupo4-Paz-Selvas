const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios');


router.get('/profile', usuariosController.profile);

router.get('/profile/login', usuariosController.login);

router.get('/profile/edit', usuariosController.profileEdit);

router.get('/register', usuariosController.register);

module.exports = router;