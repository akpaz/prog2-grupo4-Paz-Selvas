const db = require('../database/models');

const comentariosController = {
    store: function (req, res) {
        let idProducto = req.params.idProducto;
        let usuario = req.session.user;
        db.Comentario.create({
            contenido: req.body.comentario,
            idProducto: idProducto,
            idUsuario: usuario.id
        });
        return res.redirect(`/product-detail/${idProducto}`);
    }
};

module.exports = comentariosController;