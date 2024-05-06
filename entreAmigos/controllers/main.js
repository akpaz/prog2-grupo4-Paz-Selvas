const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const productos = datosProductos.productos;

const db = require('../database/models');


const mainController = {
    index: function (req, res) {
        res.render('index', { productos: productos })
    },
    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
    },
    detalleProducto: function (req, res) {
        let idProducto = req.params.idProducto;
        let producto = null;
        for (let i = 0; i < productos.length; i++) {
            if (idProducto == productos[i].id) {
                producto = productos[i];
            };
        };
        res.render('product', { producto: producto });
    },
    profile: function (req, res) {
        res.render('profile', { usuario: usuario, productos: productos });
    },
    addProduct: function (req, res) {
        res.render('product-add', { usuario: usuario });
    },
    editProduct: function (req, res) {
        let idProducto = req.params.idProducto;
        let producto = null;
        for (let i = 0; i < productos.length; i++) {
            if (idProducto == productos[i].id) {
                producto = productos[i];
            };
        };
        res.render('product-edit', { usuario: usuario, producto: producto })
    },
    profileEdit: function (req, res) {
        res.render('profile-edit', { usuario: usuario });
    },
    busqueda: function (req, res) {
        res.render('search-results');
    }
};

module.exports = mainController;
