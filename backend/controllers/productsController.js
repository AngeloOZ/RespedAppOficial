// const { NextResponse } = require("next/server")

import { getAllProductos, getAllProductsByCategory } from "../models"


/** Funcion utilizando promesas prueba 
 * 
   export function obtenerProductos() {
   return new Promise(async (resolve, reject) => {
      const products = await getAllProductos();
      if (products.length > 0) {
         products.forEach(product => {
            const price = Number(product.PRICE).toFixed(2);
            product.PRICE = price;
         });
         resolve(products);
      } else {
         reject({ status: 404, message: "No hay productos registrados" });
      }
   });
}
 * @returns 
 */

/**
   @return products @array
 */
export async function obtenerProductos() {
   try {
      const products = await getAllProductos();

      if (products.length > 0) {
         products.forEach(product => {
            const price = Number(product.PRICE).toFixed(2);
            product.PRICE = price;
         });
         return products;
      } else {
         throw ({ status: 404, message: "No hay productos registrados" });
      }
   } catch (error) {
      throw error;
   }
}

export async function obtenerProductosByCategoria(idCategoria) {
   try {
      idCategoria = Number(idCategoria);
      if (isNaN(idCategoria)) throw ({ status: 400, message: "El id de la categoria no es valido" });

      const products = await getAllProductsByCategory(idCategoria);

      if (products.length > 0) {
         products.forEach(product => {
            const price = Number(product.PRICE).toFixed(2);
            product.PRICE = price;
         });
         return products;
      } else {
         throw ({ status: 404, message: "No hay productos registrados en la categoria: " + idCategoria });
      }

   } catch (error) {
      return error;
   }
}