"use client"

import Link from 'next/link'
import { useState } from 'react'
import { formatPrice } from '../lib/shop-data'

export default function ProductCard({ product }) {
  const [fav, setFav] = useState(false)

  return (
    <article className="group relative rounded-[2rem] border border-brand-100 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-300">
      <div className={`relative aspect-square w-full rounded-[1.8rem] ${product.accent} p-6`}>
        <div className="flex h-full items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-600">{product.tag}</p>
          </div>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-sm">
            {product.category}
          </span>
        </div>

        <button
          type="button"
          aria-pressed={fav}
          onClick={() => setFav((s) => !s)}
          className={`absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 transition-shadow ${fav ? 'bg-brand-500 text-white shadow-lg' : 'bg-white/90 text-brand-700 border border-slate-200'}`}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={fav ? 'currentColor' : 'none'} />
          </svg>
        </button>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xl font-semibold text-brand-700">{formatPrice(product.price)}</p>
          <Link href={`/shop#${product.id}`} className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 shadow-sm">
            Voir plus
          </Link>
        </div>
      </div>
    </article>
  )
}
