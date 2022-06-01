import { getAllCategorias } from "../models";

export async function obtenerCategorias() {
   try {
      const categories = await getAllCategorias();
      if (categories.length > 0) {
         return categories;
      } else {
         throw ({ status: 404, message: "No hay categorias registrados" });
      }
   } catch (error) {
      throw error;
   }
}