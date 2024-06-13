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
        Comentario.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'idUsuario',
        });
        Comentario.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'idProducto',
        })
    }

    return Comentario;
};