import Link from 'next/link'
import { formatPrice } from '../lib/shop-data'

export default function ProductCard({ product }) {
  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-300">
      <div className={`aspect-square w-full rounded-[1.8rem] ${product.accent} p-6`}>
        <div className="flex h-full items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-500">{product.tag}</p>
          </div>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xl font-semibold text-brand-700">{formatPrice(product.price)}</p>
          <Link href={`/shop#${product.id}`} className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100">
            Voir plus
          </Link>
        </div>
      </div>
    </article>
  )
}
