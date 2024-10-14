import { client } from '@/sanity/lib/client'

export const revalidate = 0

export async function GET(request: Request) {
  const res = await client.fetch(`*[_type == 'admin'][0]`)
  // const product = await res.json()

  return Response.json(res)
}
