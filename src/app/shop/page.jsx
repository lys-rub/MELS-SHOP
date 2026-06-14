'use client'

import { useMemo, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { categories, products } from '../../lib/shop-data'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = selectedCategory === 'Tous' || item.category === selectedCategory
      const matchesSearch = item.name.toLowerCase().includes(search.trim().toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [search, selectedCategory])

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(200,79,66,0.12),_transparent_32%),_linear-gradient(180deg,_rgba(255,250,246,1)_0%,_rgba(246,239,232,1)_100%)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Boutique</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Parcourez une sélection raffinée de mode, beauté et accessoires.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Des pièces inspirées par les grandes maisons, mais conçues pour une esthétique locale et accessible.
            </p>
          </div>

            <div className="rounded-[2rem] border border-brand-100 bg-surface p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Trouvez votre nouvelle pièce</p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-slate-700">Rechercher</label>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Nom de produit ou catégorie"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              <div>
                <p className="text-sm font-medium text-slate-700">Catégorie</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        selectedCategory === category
                          ? 'border-brand-600 bg-brand-50 text-brand-700'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-12 rounded-[1.8rem] border border-brand-200 bg-brand-50/80 p-8 text-center text-lg font-medium text-slate-700">
            Aucun produit ne correspond à votre recherche. Essayez une autre catégorie ou un autre mot-clé.
          </p>
        )}
      </div>
    </section>
  )
}
