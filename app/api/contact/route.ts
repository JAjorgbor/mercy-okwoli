import { client } from '@/sanity/lib/client'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const res = await client.fetch(`*[_type == 'contact'][0]`)
  // const product = await res.json()

  return Response.json(res)
}
