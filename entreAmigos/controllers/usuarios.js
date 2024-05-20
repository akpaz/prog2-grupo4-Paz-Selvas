const db = require('../database/models');

const usuariosController = {
    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        db.Usuario.create({
          nombreUsuario: req.body.usuario,
          email: req.body.email,
          contrasena: req.body.password,
          fechaDeNacimiento: req.body.nacimiento,
          dni: req.body.dni,
          fotoPerfil: req.body.fotoPerfil
        })
        
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
