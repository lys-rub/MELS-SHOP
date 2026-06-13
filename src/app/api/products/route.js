import { products } from '../../../lib/shop-data'

export async function GET() {
  return new Response(JSON.stringify(products), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
