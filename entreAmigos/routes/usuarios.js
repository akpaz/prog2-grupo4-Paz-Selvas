const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios');
const loginValidations = require('../middleware/loginValidations');
const registerValidations = require('../middleware/registerValidations');


router.get('/', usuariosController.profile);

router.get('/login', usuariosController.login);

router.get('/edit', usuariosController.profileEdit);

router.get('/register', usuariosController.register);

router.post('/register', registerValidations, usuariosController.store);

router.post('/login', loginValidations, usuariosController.processLogin);

module.exports = router;