import { NextResponse } from 'next/server'

export const config = {
   runtime: 'experimental-edge',
}

export async function middleware(request) {
   const currentUrl = request.nextUrl.pathname;

   if (currentUrl.startsWith('/cliente')) {
      const currentUser = await isValidSession(request);
      if (currentUser) {
         return validateUserClient(currentUser, request);
      }
      return NextResponse.redirect(new URL(`/auth/login?p=${currentUrl}`, request.url));
   } else if (currentUrl.startsWith('/admin')) {
      const currentUser = await isValidSession(request);
      if (currentUser) {
         return validateUserAdmin(currentUser, request);
      }
      return NextResponse.redirect(new URL(`/auth/login?p=${currentUrl}`, request.url));
   } else if (currentUrl.startsWith('/auth')) {
      const currentUser = await isValidSession(request);
      if (currentUser) {
         return NextResponse.redirect(new URL('/', request.url));
      }
   } else if (currentUrl.startsWith('/checkout')) {
      const currentUser = await isValidSession(request);
      if (currentUser) {
         return validateSummary(request);
      }
      return NextResponse.redirect(new URL(`/auth/login?p=${currentUrl}`, request.url));
   } else if (currentUrl.startsWith('cart')) {
      return validateItemsCart(request)
   }
}



function existSession(request = NextRequest) {
   const session = request.cookies.get('SESSION_ID');
   if (session) {
      return session;
   } else {
      undefined;
   }
}
async function isValidToken(token) {
   try {
      const url = `${"http://198.199.75.201/api"}/auth/validate-token`;
      const response = await fetch(url, {
         method: "POST",
         body: JSON.stringify({ token }),
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      });

      const data = await response.json();
      if (data.status >= 200 && data.status <= 399) {
         return data.data;
      }
      NextResponse.next().cookies.delete('SESSION_ID');
      return undefined;
   } catch (error) {
      console.error(error);
      return undefined;
   }
}
async function isValidSession(request = NextRequest) {
   const token = existSession(request);
   if (token) {
      const payloadToken = await isValidToken(token);
      return payloadToken;
   }
   return undefined;
}

function validateUserClient(client, request) {
   console.log(client);
   if (client.TIPO != process.env.TIPO_CLIENTE) {
      return NextResponse.redirect(new URL(`/`, request.url));
   }
   return NextResponse.next();
}
function validateUserAdmin(admin, request) {
   if (admin.TIPO != process.env.TIPO_ADMIN) {
      return NextResponse.redirect(new URL(`/`, request.url));
   }
   return NextResponse.next();
}
function validateSummary(request) {
   const cart = request.cookies.get('cart');
   if (cart) {
      try {
         const itemsCart = JSON.parse(cart);
         if (itemsCart.length == 0) {
            return NextResponse.redirect(new URL('/cart/empty', request.url))
         }
         return NextResponse.next();
      } catch (error) {
         console.error(error);
         NextResponse.next().cookies.delete('cart');
         return NextResponse.redirect(new URL('/menu', request.url))
      }
   } else {
      return NextResponse.redirect(new URL('/cart/empty', request.url))
   }
}
function validateItemsCart(request) {
   const cart = request.cookies.get('cart');
   if (cart) {
      try {
         const itemsCart = JSON.parse(cart);
         if (itemsCart.length <= 0) {
            return NextResponse.rewrite(new URL('/cart/empty', request.url))
         } else {
            return NextResponse.redirect(new URL('/cart', request.url))
         }
      } catch (error) {
         console.error(error);
         NextResponse.next().cookies.delete('cart');
         return NextResponse.redirect(new URL('/menu', request.url))
      }
   } else {
      return NextResponse.rewrite(new URL('/cart/empty', request.url))
   }
}
