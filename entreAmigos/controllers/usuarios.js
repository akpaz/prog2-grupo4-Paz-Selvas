const db = require('../database/models');
const bcrypt = require('bcryptjs');

const usuariosController = {
    login: function (req, res) {
        res.render('login');
    },
    store: function (req, res) {
    
        db.Usuario.create({
            nombreUsuario: req.body.usuario,
            email: req.body.email,
            contrasena: bcrypt.hashSync(req.body.password, 10),
            fechaDeNacimiento: req.body.nacimiento,
            dni: req.body.dni,
            fotoPerfil: req.body.fotoPerfil
        });

        res.send(req.body);
    },
    profile: function (req, res) {
        res.render('profile', { usuario: usuario, productos: productos });
    },
    profileEdit: function (req, res) {
        res.render('profile-edit', { usuario: usuario });
    },
    register: function (req, res) {
        res.render('register');

    }
}

module.exports = usuariosController;
