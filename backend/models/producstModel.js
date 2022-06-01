/* eslint-disable no-unused-vars */
import { DataTypes } from 'sequelize';
import connection from '../Database/conecction';


const Producto = connection.define('PRODUCTO', {
    IDPRODUCTO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    IDCATEGORIA: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'CATEGORIA',
            key: 'IDCATEGORIA'
        }
    },
    NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DETAIL: {
        type: DataTypes.STRING
    },
    PRICE: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    IMAGE: {
        type: DataTypes.TEXT
    },
    AVAILABILITY: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    tableName: 'PRODUCTO',
    timestamps: false
})


export async function getAllProductos() {
    try {
        const products = await Producto.findAll({
            raw: true
        });
        return products;
    } catch (err) {
        return err;
    }
}

// async function getOneProducto(IDPRODUCTO) {
//     try {
//         return await Producto.findByPk(IDPRODUCTO)
//     }  catch(err){
//         return err;
//     }
// }
export async function getAllProductsByCategory(id) {
    try {
        return await Producto.findAll({ where: { IDCATEGORIA: id } })
    } catch (err) {
        return err;
    }
}


async function createProducto(producto) {
    try {
        return await Producto.create({
            IDCATEGORIA: producto.IDCATEGORIA,
            NAME: producto.NAME,
            DETAIL: producto.DETAIL,
            PRICE: producto.PRICE,
            IMAGE: producto.IMAGE,
            AVAILABILITY: producto.AVAILABILITY
        });
    } catch (err) {
        return err;
    }
}

// async function updateProducto(producto) {
//     try {
//         return await Producto.update({
//             IDCATEGORIA: producto.IDCATEGORIA,
//             NAME: producto.NAME,
//             DETAIL: producto.DETAIL,
//             PRICE: producto.PRICE,
//             IMAGE: producto.IMAGE,
//             AVAILABILITY: producto.AVAILABILITY
//         }, {
//             where: {
//                 IDPRODUCTO: producto.IDPRODUCTO
//             }
//         })
//     }  catch(err){
//         return err;
//     }
// }

// async function deleteProducto(IDPRODUCTO) {
//     try {
//         return await Producto.destroy({
//             where: {
//                 IDPRODUCTO: IDPRODUCTO
//             }
//         })
//     }  catch(err){
//         return err;
//     }
// }
//export default Producto, getAllProductos;