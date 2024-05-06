module.exports = function(sequelize, dataTypes) {
    let alias = 'Producto';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuarioPropietario: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        edad: {
            type: dataTypes.INTEGER
        },
        especie:{
            type: dataTypes.STRING
        },
        sexo: {
            type: dataTypes.STRING
        },
        personalidad: {
            type: dataTypes.STRING
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
        tableName: 'Productos',
        timestamps: true,
        underscored: false
    };

    let Producto = sequelize.define(alias, cols, config);
    return Producto;
};