const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let productValidations = [
    body('imgProducto')
        .notEmpty().withMessage('Por favor, complete el campo de imagen del producto.'),
    body('nombreProducto')
        .notEmpty().withMessage('Por favor, complete el campo de nombre del producto.'),
    body('descripcionProducto')
        .notEmpty().withMessage('Por favor, complete el campo de descripción del producto.')
];

module.exports = productValidations;
