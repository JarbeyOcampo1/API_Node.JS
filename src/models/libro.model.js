// Importarcion de la conexion a la base de datos
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

// Definicion del modelo Libro
const Libro = sequelize.define('Libro', {
    //configuracion de las columnas de la tabla
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_lanzamiento: {
        type: DataTypes.INTEGER
    },
    genero: {
        type: DataTypes.STRING
    }
    },{
        tableName: 'libros',
        timestamps: true
    });

    //
module.exports = Libro;