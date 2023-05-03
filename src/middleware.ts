import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from 'jose';
import { ACCESS_TOKEN_NAME } from "./constants";
import { fetchLogin } from "./app/api/utils";
export const config = {
  //run middleware on all routes EXCEPT
  // api/login
  // _next/static
  // _next/image 
  // favicon.ico
  matcher: '/((?!api/login|_next/static|_next/image|favicon.ico).*)',
}
export class AuthError extends Error {}
export async function verifyAuth(maybeToken: string) {  
  try {
    const claims = await decodeJwt(
      maybeToken
    );
    return ( (claims.exp || 0) < ((new Date().getTime() + 1) / 1000) ) ? true : false
  } catch (err) {
    // return await (await fetchLogin())
    throw new AuthError('Your access token has expired.')
  }
}
export default async function middleware(req: NextRequest ){
  const res = NextResponse.next();
  // check access token validity
  const jwt = req.cookies.get(ACCESS_TOKEN_NAME || 'jwt')?.value ?? '';
  const isVerifiedToken = await verifyAuth(jwt)
  .catch(async(error: AuthError) => {
    // throw new AuthError(error?.message)
    const newJwt = await (await fetchLogin())
    res.cookies.set({ 
      name: 'jwt',
      value: newJwt, 
      path: req.nextUrl.pathname
    });
    return res;
  });
  if(isVerifiedToken === true){
    res.cookies.set({ 
      name:'jwt',
      value: jwt, 
      path: req.nextUrl.pathname
    });
    return res;
  } else return res;
}