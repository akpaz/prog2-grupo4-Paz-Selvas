const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');


let editProfileValidations = [
    body('email')
        .notEmpty().withMessage('Por favor, introduzca su email'),
    body('usuario')
        .notEmpty().withMessage('Por favor, introduzca un nombre'),
    body('password')
        .notEmpty().withMessage('Por favor, complete este campo')
        .isLength({ min : 4}).withMessage('La contraseña debe tener al menos 4 caracteres.'),
    body('dni')
        .notEmpty().withMessage('Por favor, introduzca su dni')
        .isLength({ max : 8}, { min : 8}).withMessage('El numero de dni debe tener 8 caracteres'),
    body('fotoPerfil')
        .notEmpty().withMessage('Por favor, complete este campo.')
];

module.exports = editProfileValidations;