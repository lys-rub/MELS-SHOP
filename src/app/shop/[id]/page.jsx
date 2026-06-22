import { notFound } from 'next/navigation'
import ProductDetails from '../../../components/ProductDetails'
import { getProductById } from '../../../lib/shop-data'

export default function ProductPage({ params }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetails product={product} />
}
