import { ACCESS_TOKEN_NAME, NEXT_PUBLIC_API } from "@/constants";
import { NextRequest } from "next/server";

export async function fetchLogin() {
  return fetch(`${NEXT_PUBLIC_API}/login`)
  .then(res => res.json())
  .then( async ({ jwt }) => {
    return jwt;
  }).catch(error => new Error(error))
}
export async function GET({cookies}: NextRequest) {
  return fetchLogin().then(jwt => {
    cookies.set(ACCESS_TOKEN_NAME || 'jwt', jwt);
    return new Response(`${jwt}`)
  })
}
