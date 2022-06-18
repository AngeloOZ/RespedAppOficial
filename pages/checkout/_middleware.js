import { NextResponse } from "next/server";
import { jwt } from "../../helpers";


export async function middleware(req, ev) {
   const { SESSION_ID: token, cart } = req.cookies;
   const urlBase = req.nextUrl.clone()
   try {
      await jwt.isValidToken(token);
      if(cart){
         const itemsCart = JSON.parse(cart);
         if(itemsCart.length == 0){
            const url = urlBase.origin + `/cart/empty`
            return NextResponse.redirect(url);
         }
      }else{
         const url = urlBase.origin + `/cart/empty`
         return NextResponse.redirect(url);
      }
   } catch (error) {
      console.log(error);
      const requestPage = req.page.name;
      const url = urlBase.origin + `/auth/login?p=${requestPage}`
      return NextResponse.redirect(url);
   }
}