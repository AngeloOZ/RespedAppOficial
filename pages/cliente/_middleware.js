import { NextResponse } from "next/server";
import { jwt } from "../../helpers";


export async function middleware(req, ev) {
   const { SESSION_ID: token } = req.cookies;
   const urlBase = req.nextUrl.clone();
   try {
      const data = await jwt.isValidToken(token);
      if (data.TIPO === 3) {
         return NextResponse.next();
      } else {
         return NextResponse.redirect(urlBase.origin);
      }
   } catch (error) {
      console.log(error);
      const requestPage = req.page.name;
      const url = urlBase.origin + `/auth/login?p=${requestPage}`
      return NextResponse.redirect(url);
   }
}