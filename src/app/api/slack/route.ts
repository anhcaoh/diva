import { ACCESS_TOKEN_NAME } from "@/constants";
import { NextRequest, NextResponse } from "next/server";
import { postSlackMessage } from "../utils";

export async function POST(req: NextRequest) {
  const jwt = req.cookies.get(ACCESS_TOKEN_NAME || 'jwt')?.value;
  const text = await req.json() as string;
  if( !jwt ) {
    return NextResponse.json({status: 400, message:"Missing jwt"})
  } else  {
    try {
    const responseMessage = await postSlackMessage(jwt, text )
    if( responseMessage.toString().includes('token is expired') ) {
      return NextResponse.json({status: 401, message: responseMessage});
    } else {
      return NextResponse.json({status: 200, message: 'success'});
    }
    } catch( error ){
      return NextResponse.json({status: 500, message: JSON.stringify(error)});
    }
  }
}
