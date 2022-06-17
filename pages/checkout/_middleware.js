import { NextResponse } from "next/server";
import { jwt } from "../../helpers";


export async function middleware(req, ev) {
   const { SESSION_ID: token } = req.cookies;

   try {
      await jwt.isValidToken(token);
   } catch (error) {
      console.log(error);
      const requestPage = req.page.name;
      const url = req.nextUrl.clone()
      const url2 = url.origin + `/auth/login?p=${requestPage}`
      return NextResponse.redirect(url2);
   }
}