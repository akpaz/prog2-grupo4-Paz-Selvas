module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombreUsuario: {
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        },
        fechaDeNacimiento: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        fotoperfil: {
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
    }

    let config = {
        tableName: "Usuarios",
        timestamps: true,
        underscored: false
    }

    let Usuarios = sequelize.define(alias,cols, config);
    return Usuarios
}