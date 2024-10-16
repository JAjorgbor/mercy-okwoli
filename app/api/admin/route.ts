import { client } from '@/sanity/lib/client'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
  const res = await client.fetch(`{
 "admin":*[_type=='admin'][0],
"contact":*[_type=='contact'][0],
"cv":*[_type=='resume'][0]{attatchedDocument}
}`)

  return Response.json(res)
}
