import { client } from '@/sanity/lib/client'

export const revalidate = 0

export async function GET() {
  const res = await client.fetch(`{
 "admin":*[_type=='admin'][0],
"contact":*[_type=='contact'][0],
"cv":*[_type=='resume'][0]{attatchedDocument}
}`)
  // const product = await res.json()

  return Response.json(res)
}
