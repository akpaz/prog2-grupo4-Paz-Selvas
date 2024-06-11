module.exports = function(sequelize, dataTypes) {
    let alias = 'Comentario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        contenido: {
            type: dataTypes.STRING
        },
        idProducto: {
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: 'Comentarios',
        timestamps: true,
        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsToMany(models.Usuario, {
            as: 'usuarios',
            through: 'usuario_comentario',
            foreignKey: 'usuario_id',
            timestamps: false
        });
        Comentario.belongsToMany(models.Producto, {
            as: 'productos',
            through: 'producto_comentario',
            foreignKey: 'producto_id',
            timestamps: false
        })
    }

    return Comentario;
};