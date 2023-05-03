import { generateSecret } from 'jose';
export const ACCESS_TOKEN_NAME = 'jwt';
export const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
const JWT_SECRET_KEY: string | undefined = process.env.JWT_SECRET_KEY!
export async function genJwtSecretKey() { 
  return await generateSecret('HS256');
}
export async function getJwtSecretKey() {
  if (!JWT_SECRET_KEY || JWT_SECRET_KEY.length === 0) {
    // if none provided generate JWT Secret Key
    return await genJwtSecretKey();
    // or throw error
    // throw new Error('The environment variable JWT_SECRET_KEY is not set.')
  }
  return JWT_SECRET_KEY;
}