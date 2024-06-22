const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios');

const loginValidations = require('../middleware/loginValidations');
const registerValidations = require('../middleware/registerValidations');
const editProfileValidations = require('../middleware/editProfileValidations');



router.get('/detallePerfil/:id', usuariosController.profile);

router.get('/login', usuariosController.login);

router.get('/profile-edit/:id', usuariosController.profileEdit);

router.get('/register', usuariosController.register);

router.post('/register', registerValidations, usuariosController.store);

router.post('/login', loginValidations, usuariosController.processLogin);

router.post('/logout', usuariosController.logout);

router.post('/profile-edit/:id', editProfileValidations, usuariosController.editProcess);

module.exports = router;