import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../assets/mels-background.jpeg'

const featuredProducts = [
  {
    name: 'Robe satin élégante',
    category: 'Vêtements',
    price: 89000,
    tag: 'Populaire',
  },
  {
    name: 'Sac mini luxe',
    category: 'Accessoires',
    price: 55000,
    tag: 'Best-seller',
  },
  {
    name: 'Sandales dorées',
    category: 'Chaussures',
    price: 66000,
    tag: 'Tendance',
  },
]

const formatPrice = (value) => `${value.toLocaleString('fr-FR')} FC`

export default function HomePage() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-gold-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-gold-700 shadow-sm">
              Nouvelle collection
            </span>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-700">MEL'S Boutique</p>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                L&apos;éclat de la mode et de la beauté, livré avec élégance.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Découvrez une sélection raffinée de vêtements, parfums, accessoires et cosmétiques, pensée pour les silhouettes modernes qui aiment le style affirmé et la qualité.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <Link href="/shop" className="gold-button w-full text-center sm:w-auto">
                Explorer la boutique
              </Link>
              <Link href="/collections" className="inline-flex items-center justify-center rounded-full border border-gold-100 bg-gold-50 px-6 py-3 text-sm font-semibold text-gold-700 transition hover:bg-gold-100 shadow-sm">
                Voir les collections
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Livraison</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Livraison rapide</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Retour</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Retours faciles</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Service</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Assistance premium</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-brand-50 via-surface to-white p-4 shadow-soft sm:p-6">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
            <Image src={heroImage} alt="Visuel boutique MEL'S" className="h-[360px] w-full rounded-[2rem] object-cover sm:h-[420px] lg:h-[560px]" priority />
            <div className="absolute left-4 top-4 rounded-3xl bg-white/90 px-4 py-3 shadow-soft sm:left-6 sm:top-6 sm:px-5 sm:py-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-700">Collection signature</p>
              <p className="mt-2 text-base font-semibold text-slate-900">Édition exclusive</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-soft sm:p-10">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gold-700">Sélection premium</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Nos meilleures ventes</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Des pièces incontournables, choisies pour leur style, leur confort et leur finition. Parfaites pour une garde-robe inspirée.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
              {featuredProducts.map((item) => (
                <article key={item.name} className="rounded-[1.8rem] border border-gold-100 bg-surface p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-700">{item.tag}</p>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.name}</h3>
                  <p className="mt-3 text-base text-slate-600">{item.category}</p>
                  <p className="mt-5 text-xl font-semibold text-gold-700">{formatPrice(item.price)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
