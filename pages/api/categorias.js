import { obtenerCategorias } from "../../backend/controllers/categoriasController";

// import { NextResponse } from "next/server";
const { NextResponse, NextRequest } = require("next/server");

export default async function categoriasHandler(req = NextRequest, res = NextResponse) {
   try {
      switch (req.method) {
         case "GET":
            const categories = await obtenerCategorias();
            return res.status(200).json(categories);
         default:
            return res.status(400).json({
               message: "Endpoint no existe",
            });
      }
   } catch (error) {
      res.status(error.status).json(error);
   }
}
