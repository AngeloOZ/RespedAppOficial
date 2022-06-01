// import { NextResponse } from "next/server";
const { NextResponse, NextRequest } = require("next/server");

import { obtenerProductos, obtenerProductosByCategoria } from "../../backend/controllers";

export default async function productos(req = NextRequest, res = NextResponse) {
   try {
      switch (req.method) {
         case "GET":
            const { categoria: category } = req.query;
            let products;
            if (category) {
               products = await obtenerProductosByCategoria(category);
            } else {
               products = await obtenerProductos();
            }
            return res.status(200).json(products);
         default:
            return res.status(400).json({
               message: "Endpoint no existe",
            });
      }
   } catch (error) {
      res.status(error.status).json(error);
   }
}
