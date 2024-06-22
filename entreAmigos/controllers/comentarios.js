const db = require('../database/models');
const { validationResult } = require('express-validator');

const comentariosController = {
    store: function (req, res) {
        let idProducto = req.params.idProducto;
        let usuario = req.session.user;

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            // No hay errores, avanzamos con el código normal

            db.Comentario.create({
                contenido: req.body.comentario,
                idProducto: idProducto,
                idUsuario: usuario.id
            });
            return res.redirect(`/product-detail/${idProducto}`);
        } else{
            // hay errores, volvemos al formulario mostrando los errores
            db.Producto.findByPk(idProducto, {
                include: [
                    {association: 'comentarios',
                        include: [{association: 'usuarios'}]},
                    {association : 'usuarios'}
                ]
            })
            .then(function (producto) {
                //return res.send(producto);
                return res.render('product', { producto: producto, errors: errors.mapped() });
            })
            .catch(function(e) {
                console.log(e);
            })
        }

    }
};

module.exports = comentariosController;