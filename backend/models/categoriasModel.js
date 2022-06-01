/* eslint-disable no-unused-vars */
import { DataTypes } from 'sequelize';
import connection from '../Database/conecction';

const Categoria = connection.define('CATEGORIA', {
   IDCATEGORIA: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true
   },
   NAME: {
       type: DataTypes.STRING,
       allowNull: false
   }
}, {
   tableName: 'CATEGORIA',
   timestamps: false
})

export async function getAllCategorias() {
   try {
       return await Categoria.findAll({
           raw: true
          });
   } catch(err){
       return err;
     }
}

export async function getOneCategoria(IDCATEGORIA) {
   try {
       return await Categoria.findByPk(IDCATEGORIA)
   } catch(err){
       return err;
     }
}