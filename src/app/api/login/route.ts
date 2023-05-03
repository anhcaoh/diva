import { ACCESS_TOKEN_NAME } from "@/constants";
import { NextRequest } from "next/server";
import { fetchLogin } from "../utils";

export async function GET({cookies}: NextRequest) {
  return fetchLogin().then(jwt => {
    cookies.set(ACCESS_TOKEN_NAME || 'jwt', jwt);
    return new Response(`${jwt}`)
  })
}
