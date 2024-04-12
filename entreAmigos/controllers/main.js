const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const productos = datosProductos.productos;

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
        let idProducto = req.params.idProducto;
        let producto = null;
        for (let i = 0; i < productos.length; i++) {
            if (idProducto == productos[i].id) {
                producto = productos[i];
            }; 
        };
        res.render('product', {idProducto : idProducto, producto : producto});
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
