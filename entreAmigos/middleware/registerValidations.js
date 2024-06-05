const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let registerValidations = [
    body('email')
        .notEmpty().withMessage('Por favor, complete el campo email.')
        .isEmail().withMessage('Por favor, ingrese un email válido.')
        .custom(function (value) {
            // el email no se puede repetir, no debe estar ya en la base de datos
            return db.Usuario.findOne({
                where: [{ email: value }]
            })
                .then(function (user) {
                    if (user) {
                        throw new Error('El email ya se encuentra registrado!')
                    }
                })
        }),
    body('usuario')
        .notEmpty().withMessage('Por favor, complete el campo de nombre de usuario.')
        .isString().withMessage('Por favor, ingrese un nombre de usuario válido, recuerde usar solo texto.'),
    body('password')
        .notEmpty().withMessage('Por favor, complete el campo contraseña.')
        .isLength({ min : 4}).withMessage('La contraseña debe tener al menos 4 caracteres.'),
];

module.exports = registerValidations;
