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
        let producto = null;
        for (let i = 0; i < productos.length; i++) {
            if (idProducto == productos[i].id) {
                producto = productos[i];
            };
        };
        res.render('product-edit', { usuario: usuario, producto: producto })
    },
    busqueda: function (req, res) {
        res.render('search-results');
    }
}

module.exports = productController;