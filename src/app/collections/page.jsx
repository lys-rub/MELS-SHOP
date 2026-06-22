import Link from 'next/link'
import { collections } from '../../lib/shop-data'

export default function CollectionsPage() {
  return (
    <section className="min-h-screen bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-700">Collections</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Des univers stylés pour chaque moment.
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-8 text-slate-600">
            Explorez des collections inspirées du chic urbain, de la soirée et des rituels beauté.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {collections.map((collection) => (
            <article key={collection.title} className="glass-card p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-gold-700">Collection</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">{collection.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{collection.subtitle}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {collection.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/shop"
                className="mt-8 inline-flex rounded-full border border-gold-200 bg-gold-50 px-5 py-3 text-sm font-semibold text-gold-700 transition hover:bg-gold-100"
              >
                Découvrir
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
