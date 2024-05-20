const db = require('../database/models');
const bcrypt = require('bcryptjs');

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
    },
    store: function (req, res) {
        
    }
}

module.exports = usuariosController;
