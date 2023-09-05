import { api } from "@/lib/api";
import { NextRequest } from "next/server";

export async function GET (request : NextRequest){
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const RegisterResponse = await api.post('/register', {
    code
  })

  const {token} = RegisterResponse.data

  console.log (token)
}