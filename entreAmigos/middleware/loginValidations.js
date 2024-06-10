const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let loginValidations = [
    body('email')
        .notEmpty().withMessage('Por favor, complete el campo email.')
        .isEmail().withMessage('Por favor, ingrese un email válido.')
        .custom(function (value, { req }) {
            // validar que el email exista en la base de datos
            return db.Usuario.findOne({
                where: { email: value }
            })
                .then(function (user) {
                    if (!user) {
                        throw new Error("El email no se encuentra registrado.")
                    } else if (!bcrypt.compareSync(req.body.password, user.contrasena)){
                        throw new Error("La contraseña es incorrectra.")
                    }
                })
        }),
    body('password')
        .notEmpty().withMessage('Por favor, complete el campo contraseña.')
];

module.exports = loginValidations;
