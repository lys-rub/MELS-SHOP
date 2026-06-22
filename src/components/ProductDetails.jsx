'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatPrice } from '../lib/shop-data'

export default function ProductDetails({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const imageCount = product.images.length

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(200,79,66,0.12),_transparent_32%),_linear-gradient(180deg,_rgba(255,250,246,1)_0%,_rgba(246,239,232,1)_100%)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/shop" className="font-semibold text-gold-700 transition hover:underline">
              Retour à la boutique
            </Link>
            <span className="text-slate-400">/</span>
            <span>{product.name}</span>
          </div>
          <span className="rounded-full border border-gold-100 bg-gold-50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold-700">
            {product.category}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <img
                src={product.images[selectedIndex]}
                alt={`${product.name} vue ${selectedIndex + 1}`}
                className="h-full w-full object-cover transition duration-500 ease-out hover:scale-110"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`overflow-hidden rounded-[1.5rem] border transition focus:outline-none focus:ring-2 focus:ring-gold-200 ${
                    selectedIndex === index
                      ? 'border-gold-600 ring-2 ring-gold-100'
                      : 'border-slate-200 hover:border-gold-300'
                  }`}
                >
                  <img src={image} alt={`${product.name} miniature ${index + 1}`} className="h-24 w-full object-cover transition duration-300 hover:scale-110" />
                </button>
              ))}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-950">Avis clients</h2>
                  <p className="mt-2 text-sm text-slate-600">{product.rating.toFixed(1)} sur 5 ({product.reviews.length} avis)</p>
                </div>
                <p className="rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-700">{product.tag}</p>
              </div>

              <div className="mt-6 space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.author} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-slate-950">{review.author}</p>
                      <div className="flex items-center gap-1 text-gold-600">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <span key={starIndex}>{starIndex < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{review.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gold-700">{product.category}</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{product.name}</h1>
                </div>
                <span className="inline-flex rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-700">{product.tag}</span>
              </div>

              <p className="mt-6 text-4xl font-semibold text-gold-700">{formatPrice(product.price)}</p>
              <p className="mt-6 text-base leading-8 text-slate-600">{product.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Disponibilité</p>
                  <p className={`mt-3 text-sm font-semibold ${
                    product.availability === 'En stock'
                      ? 'text-emerald-600'
                      : product.availability === 'Stock limité'
                      ? 'text-orange-600'
                      : 'text-rose-600'
                  }`}
                  >
                    {product.availability}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">Quantité : {product.stock} disponibles</p>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Livraison</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Livraison en 2-4 jours ouvrés. Retours gratuits sous 14 jours.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button type="button" className="inline-flex flex-1 items-center justify-center rounded-full bg-gold-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gold-700">
                  Ajouter au panier
                </button>
                <button type="button" className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:border-gold-300 hover:bg-slate-50">
                  Ajouter aux favoris
                </button>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Détails à voir</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-sm text-slate-500">Référence</p>
                    <p className="mt-2 font-semibold text-slate-950">{product.id}</p>
                  </div>
                  <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-sm text-slate-500">Note moyenne</p>
                    <p className="mt-2 font-semibold text-slate-950">{product.rating.toFixed(1)}/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
