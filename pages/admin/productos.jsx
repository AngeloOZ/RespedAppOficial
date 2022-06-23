
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { useCategories, useProducts } from "../../Hooks";
import ListCategorias from "../../components/ComponentsAdmin/ListCategorias";
import ListProductos from "../../components/ComponentsAdmin/ListProducts";


export default function Admin() {
   const categories = useCategories().categories
   const products = useProducts().products
  return (
    <AdminLayout>
        <h1>Productos</h1>
        <div>
         <ListCategorias categories = {categories?categories:[]}/>
         <ListProductos  products ={products?products:[]} categories ={categories?categories:[]}/> 
         
    </div>
    </AdminLayout>
  )
}
