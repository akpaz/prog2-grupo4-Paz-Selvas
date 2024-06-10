const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const productos = datosProductos.productos;

const db = require('../database/models');

const productController = {
    index: function (req, res) {
        // Tratando de traer datos de la db
        db.Producto.findAll({
            include: [
                {association: 'usuarios'}
            ]
        })
        .then(function(productos) {
            if(productos !== undefined){
                // return res.send(productos);
                return res.render('index', { productos: productos })
            }
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
                association : 'usuarios'}
            ]
        })
        .then(function (producto) {
            //return res.send(producto);
            return res.render('product', { producto: producto });
        })
    },
    addProduct: function (req, res) {
        res.render('product-add', { usuario: usuario });
    },
    editProduct: function (req, res) {
        let idProducto = req.params.idProducto;

        db.Producto.findByPk(idProducto, {
            include: [
                {association: 'comentarios',
                association : 'usuarios'}
            ]
        })
        .then(function (producto) {
            //return res.send(producto);
            if (req.session.user.id !== producto.id) {
                return res.redirect('/');
            } else{
                res.render('product-edit', {producto: producto});
            }
        })
    },
    busqueda: function (req, res) {
        res.render('search-results');
    },
    borrar: function (req, res) {
        let idProducto = req.params.idProducto;

        db.Producto.findByPk(idProducto, {
            include: [
                {association: 'comentarios',
                association : 'usuarios'}
            ]
        })
        .then(function (producto) {
            //return res.send(producto);
            if (req.session.user.id !== producto.id) {
                return res.redirect('/');
            } else{
                db.Producto.destroy({
                    where: {
                        id: producto.id
                    }
                });
            }
        })
    }
}

module.exports = productController;