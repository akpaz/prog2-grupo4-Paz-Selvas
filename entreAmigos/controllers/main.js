const datosProductos = require('../db/main');
const usuario = datosProductos.usuario;
const productos = datosProductos.productos;

const mainController = {
    index: function (req, res) {
        res.render('index')
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
        res.render('product', {idProducto : idProducto, producto : producto});
    },
    profile: function (req, res) {
        res.render('profile');
    },
    addProduct: function (req, res) {
        res.render('product-add');
    },
    profileEdit: function (req, res) {
        res.render('profile-edit');
    },
    busqueda:function (req, res) {
        let busqueda = req.params.busqueda;
        let resultados = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre == busqueda) {
                resultados = productos[i]
            } else{
                resultados =   `Lo sentimos, no hay resultados para ${busqueda}!`
            };
        };
        res.render('search-results', {busqueda : busqueda, resultados : resultados});
    }
};

module.exports = mainController;
