const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let editProfileValidations = [
    body('email')
        .notEmpty().withMessage('Por favor, complete el campo email.')
        .isEmail().withMessage('Por favor, ingrese un email válido.'),
    body('usuario')
        .notEmpty().withMessage('Por favor, complete el campo de nombre de usuario.')
        .isString().withMessage('Por favor, ingrese un nombre de usuario válido, recuerde usar solo texto.'),
    body('password')
        .notEmpty().withMessage('Por favor, complete el campo contraseña.')
        .isLength({ min : 4}).withMessage('La contraseña debe tener al menos 4 caracteres.'),
    body('nacimiento')
        // le agregamos la validacion a la fecha de nacimiento porque si no se completa, tira error la db (si esta vacio, es fecha invalida)
        .notEmpty().withMessage('Por favor, complete el campo fecha de nacimiento.')  
];

module.exports = editProfileValidations;


