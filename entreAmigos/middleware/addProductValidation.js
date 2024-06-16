const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let addProductValidation = [
    body('imgProducto')
    .notEmpty().withMessage('Por favor, ingrese una imagen.'),
    body('nombreProducto')
    .notEmpty().withMessage('Por favor, ingrese un nombre.'),
    body('descripcionProducto')
    .notEmpty().withMessage('Por favor, ingrese una descripción.')
];

module.exports = addProductValidation;
