const db = require('../database/models');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const productos = datosProductos.productos;

const usuariosController = {
    register: function (req, res) {
        if (req.session.user !== undefined) {
            return res.redirect('/');
        }else{
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
        }else{
            // hay errores, volvemos al formulario mostrando los errores
            return res.render('register', {errors: errors.mapped(), old: req.body})
        }
        
        // res.send(req.body);
    },
    login: function (req, res) {
        if (req.session.user !== undefined) {
            return res.redirect('/');
        } else{
            res.render('login',);
        }
    },
    processLogin: function(req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            // No hay errores, avanzamos con el código normal
            db.Usuario.findOne({
                where: [{email: req.body.email}]
            })
            .then(function(usuarioLogueado) {
                // lo ponemos en session
                req.session.user = {
                    email: usuarioLogueado.email,
                    userName: usuarioLogueado.nombreUsuario,
                    id: usuarioLogueado.id
                }
                console.log(user);
                //Preguntar si el usuario tildó el checkbox para recordarlo
                if(req.body.recordar !== undefined){
                    res.cookie('usuarioGuardado', req.session.user, {maxAge: 1000*60*1000000})
                }
                if (bcrypt.compareSync(req.password, usuarioLogueado.password)) {
                    return res.redirect('/');
                } else{
                    return res.render('login',{errors: errors.mapped(), old: req.body})
                }
            })
            .catch(function (e) {
                console.log(e);
            })
        }else{
            // Si hay errores, volvemos al formulario con los mensajes
            return res.render('login',{errors: errors.mapped(), old: req.body});
        }   
    },
    logout: function(req, res){
        // destruimos la session
        req.session.destroy();
        // destruimos la cookie
        res.clearCookie('usuarioGuardado');
        //redirigimos al usuario al inicio
        return res.redirect('/')
    },
    profile: function (req, res) {
        return res.render('profile', { usuario: usuario, productos: productos });
    },
    profileEdit: function (req, res) {
        return res.render('profile-edit', { usuario: usuario });
    },
    detallePerfil: function (req,res) {
        return res.render('profile');
    }
}

module.exports = usuariosController;
