const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const productos = datosProductos.productos;

const db = require('../database/models');

const usuariosController = {
    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
    },
    profile: function (req, res) {
        res.render('profile', { usuario: usuario, productos: productos });
    },
    profileEdit: function (req, res) {
        res.render('profile-edit', { usuario: usuario });
    }
}

module.exports = usuariosController;
