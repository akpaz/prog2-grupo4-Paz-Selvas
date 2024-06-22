const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const productos = datosProductos.productos;


const usuariosController = {
    register: function (req, res) {
        if (req.session.user !== undefined) {
            return res.redirect('/');
        } else {
            return res.render('register');
        }
    },
    store: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            // avanzamos con el controlador de manera normal, no hay errores
            db.Usuario.create({
                nombreUsuario: req.body.usuario,
                email: req.body.email,
                contrasena: bcrypt.hashSync(req.body.password, 10),
                fechaDeNacimiento: req.body.nacimiento,
                dni: req.body.dni,
                fotoPerfil: req.body.fotoPerfil
            });
            return res.redirect('/');
        } else {
            // hay errores, volvemos al formulario mostrando los errores
            return res.render('register', { errors: errors.mapped(), old: req.body })
        }

        // res.send(req.body);
    },
    login: function (req, res) {
        if (req.session.user !== undefined) {
            return res.redirect('/');
        } else {
            return res.render('login');
        }
    },
    processLogin: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            // No hay errores, avanzamos con el código normal
            db.Usuario.findOne({
                where: [{ email: req.body.email }]
            })
                .then(function (usuarioLogueado) {
                    // return res.send(usuarioLogueado)
                    // lo ponemos en session
                    req.session.user = {
                        email: usuarioLogueado.email,
                        userName: usuarioLogueado.nombreUsuario,
                        id: usuarioLogueado.id
                    }
                    //console.log(user);

                    //Preguntar si el usuario tildó el checkbox para recordarlo --> cookies
                    if (req.body.recordar !== undefined) {
                        res.cookie('usuarioGuardado', req.session.user, { maxAge: 1000 * 60 * 1000000 });
                    };

                    return res.redirect('/');
                })
                .catch(function (e) {
                    console.log(e);
                })
        } else {
            // Si hay errores, volvemos al formulario con los mensajes
            return res.render('login', { errors: errors.mapped(), old: req.body });
        }
    },
    logout: function (req, res) {
        // destruimos la session
        req.session.destroy();
        // destruimos la cookie
        res.clearCookie('usuarioGuardado');
        //redirigimos al usuario al inicio
        return res.redirect('/')
    },
    profile: function (req, res) {
        let idUsuario = req.params.id
        db.Usuario.findByPk(idUsuario, {
            include: [{
                association: 'productos',
                order: [['createdAt', 'DESC']],
                include: [{ association: 'comentarios' }]
            },
            { association: 'comentarios' }]
        })
            .then(function (profile) {
                return res.render('profile', { usuario: profile });
            })
            .catch(function (e) {
                console.log(e);
            })
    },
    profileEdit: function (req, res) {
        let idUsuario = req.params.idUsuario;
        return res.render('profile-edit', { usuario: usuario });
    },
    editProcess: function (req, res) {
        let idUsuario = req.params.idUsuario;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Usuario.update({
                id: idUsuario,
                email: req.body.email,
                nombreUsuario: req.body.nombre,
                contrasena: req.body.password,
                fechaDeNacimiento: req.body.nacimiento,
                dni: req.body.dni,
                fotoPerfil: req.body.fotoPerfil
            },
                {
                    where: {
                        id: idUsuario
                    }
                })
                .then(function () {
                    return res.redirect('/detallePerfil');
                })
                .catch(function (e) {
                    console.log(e);
                })
        } else {
            return res.render('profile-edit', { usuario: usuario, errors: errors.mapped(), old: req.body });
        }
    }
};


module.exports = usuariosController;
