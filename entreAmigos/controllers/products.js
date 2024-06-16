const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');
const db = require('../database/models');

const productController = {
    index: function (req, res) {
        // Traemos los datos de la db
        db.Producto.findAll({
            include: [
                {association: 'usuarios'},
                {association: 'comentarios'}
            ]
        })
        .then(function(productos) {
            // return res.send(productos);
            return res.render('index', { productos: productos })
        })
        .catch(function(e) {
            console.log(e);
        })
    },
    detalleProducto: function (req, res) {
        let idProducto = req.params.idProducto;
        db.Producto.findByPk(idProducto, {
            include: [
                {association: 'comentarios',
                    include: [{association: 'usuarios'}]},
                {association : 'usuarios'}
            ]
        })
        .then(function (producto) {
            //return res.send(producto);
            return res.render('product', { producto: producto });
        })
        .catch(function(e) {
            console.log(e);
        })
    },
    addProduct: function (req, res) {
        if (req.session.user !== undefined) {
            return res.render('login');
        } else {
            return res.redirect('/');
        }
    },
    editProduct: function (req, res) {
        let idProducto = req.params.idProducto;

        db.Producto.findByPk(idProducto, {
            include: [
                {association: 'comentarios'},
                {association : 'usuarios'}
            ]
        })
        .then(function (producto) {
            //return res.send(producto);
            if (req.session.user && req.session.user.id === producto.usuarios.id) {
                return res.render('product-edit', {producto: producto});
            } else{
                return res.redirect('/');
            }
        })
        .catch(function(e) {
            console.log(e);
        })
    },
    busqueda: function (req, res) {
        let busquedaUsuario = req.body.search

        db.Producto.findAll({
            where: [
                {nombre: {[Op.like]: '%busquedaUsuario%'}},
                {descripcion:{[Op.like]: '%busquedaUsuario%'}},
                {edad: {[Op.like]: '%busquedaUsuario%'}},
                {especie: {[Op.like]: '%busquedaUsuario%'}},
                {sexo: {[Op.like]: '%busquedaUsuario%'}},
                {personalidad: {[Op.like]: '%busquedaUsuario%'}}
            ]
        })
        .then(function(producto){
             //res.render('search-results');
            res.render('busqueda-products', {producto:producto});
            return res.redirect('busqueda-products');
        })
        .catch(function(e){
            console.log(e);
        })
    },
    borrar: function (req, res) {
        let idProducto = req.params.idProducto;

        db.Producto.findByPk(idProducto, {
            include: [
                {association : 'usuarios'}
            ]
        })
        .then(function (producto) {
            //return res.send(producto);
            if (req.session.user && req.session.user.id === producto.usuarios.id) {
                // primero borro los comentarios porque sino luego no puedo borrar el producto, ya que me tira error desde la db (por eliminar una parent row)
                db.Comentario.destroy({
                    where:{
                        idProducto: producto.id
                    }
                });

                db.Producto.destroy({
                    where: {
                        id: producto.id
                    }
                });
            } 
            return res.redirect('/');
        })
        .catch(function(e) {
            console.log(e);
        })
    },
    processEdit: function (req, res) {
        let idProducto = req.params.idProducto;
        let errors = validationResult(req);

        if(errors.isEmpty()){
            // No hay errores, avanzamos con el código normal
            db.Producto.update({
                imagen: req.body.imgProducto,
                nombre: req.body.nombreProducto,
                descripcion: req.body.descripcionProducto
            },
            {
                where: {
                    id: idProducto
                }
            });
            return res.redirect('/');
        } else{
            // si hay errores, volvemos al form mostrando los errores
            db.Producto.findByPk(idProducto, {
                include: [
                    {association : 'usuarios'}
                ]
            })
            .then(function (producto) {
                //return res.send(errors.mapped())
                return res.render('product-edit', { producto: producto, errors: errors.mapped(), old: req.body });
            })
            .catch(function(e) {
                console.log(e);
            })
        }        
    },
    processAdd: function (req, res) {
        
    }
}

module.exports = productController;
