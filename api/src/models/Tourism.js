const {DataTypes} = require('sequelize');

module.exports= (sequelize)=>{
    sequelize.define('tourism',{
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        dificultad:{
            type: DataTypes.INTEGER,
            validate:{
                max:5,
                min:1,
            }
        },
        duracion:{
            type: DataTypes.INTEGER
        },
        temporada:{
            type: DataTypes.ENUM('primavera', 'verano', 'otoño', 'invierno')
        }
    },{
        timestamps: false
      });
};