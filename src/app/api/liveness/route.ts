import { ACCESS_TOKEN_NAME } from "@/constants";
import { NextRequest } from "next/server";
import { fetchLiveness } from "../utils";

export async function GET({ cookies }: NextRequest) {
  const jwt = cookies.get(ACCESS_TOKEN_NAME || 'jwt')?.value ?? ''
  const alive = jwt ? await fetchLiveness(jwt) : 'missing jwt';
  return new Response(`${alive}`);
}
