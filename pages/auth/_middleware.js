import { NextResponse } from 'next/server';
import { jwt } from "../../helpers";

export async function middleware(req, ev) {
   const { SESSION_ID: token } = req.cookies;
   const urlBase = req.nextUrl.clone();
   try {
      await jwt.isValidToken(token);
      const url = urlBase.origin + `/menu`
      console.log("AQUI");
      return NextResponse.redirect(url);
   } catch (error) {
      console.log(error);
      return NextResponse.next();
   }
}