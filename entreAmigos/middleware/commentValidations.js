const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

let commentValidations = [
    body('comentario')
        .notEmpty().withMessage('Por favor, complete el comentario.')
        .isLength({ min: 3 }).withMessage('El comentario debe tener mínimo 3 caracteres.')
];

module.exports = commentValidations;