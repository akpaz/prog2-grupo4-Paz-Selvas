const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let loginValidations = [
    body('email')
        .notEmpty().withMessage('Por favor, complete el campo email.')
        .isEmail().withMessage('Por favor, ingrese un email válido.')
        .custom(function (value) {
            // validar que el email exista en la base de datos
            return db.Usuario.findOne({
                where: { email: value }
            })
                .then(function (user) {
                    if (!user) {
                        throw new Error("El email no se encuentra registrado.")
                    }
                })
        }),
    body('password')
        .notEmpty().withMessage('Por favor, complete el campo contraseña.')
];

module.exports = loginValidations;
