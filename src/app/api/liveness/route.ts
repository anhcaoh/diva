import { ACCESS_TOKEN_NAME, NEXT_PUBLIC_API } from "@/constants";
import { NextRequest } from "next/server";

export async function fetchLiveness(jwt: string) {
  return fetch(`${NEXT_PUBLIC_API}/alive`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  .then(res => res.text())
  .then((alive: string) => alive)
  .catch(error => new Error(error))
}
export async function GET({ cookies }: NextRequest) {
  const jwt = cookies.get(ACCESS_TOKEN_NAME || 'jwt')?.value ?? ''
  const alive = jwt ? await fetchLiveness(jwt) : 'missing jwt';
  // if(alive?.toString().includes('expired')){
  //   const newJwt = await fetchLogin()
  //   return new Response( `${await fetchLiveness(newJwt)}` )
  // }
  return new Response(`${alive}`);
}
