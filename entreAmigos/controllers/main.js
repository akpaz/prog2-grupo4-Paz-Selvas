const datosProductos = require('../db/main');

const mainController = {
    index: function (req, res) {
        res.render('index')
    },
    login: function (req, res) {
        
    },
    register: function (req, res) {
        res.render('register');
    },
    detalleProducto: function (req, res) {
        res.render('product');
    },
    profile: function (req, res) {
        
    },
    addProduct: function (req, res) {
        
    },
    profileEdit: function (req, res) {
        
    },
    busqueda:function (req, res) {
        
    }
}

module.exports = mainController;
