import { reviews } from '../../lib/shop-data'

export default function AboutPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-500">À propos</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Une boutique locale pensée comme une grande expérience e-commerce.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              MEL'S Shop réunit mode, beauté et accessoires dans une vitrine digit
              ale soignée. Chaque produit est sélectionné pour sa qualité, son style et son pouvoir d'émotion.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-brand-50/80 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-950">Notre promesse</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Une expérience simple, élégante et inspirante : navigation fluide, conseils clairs, et service client dédié.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <p>• Qualité produit évaluée à chaque arrivée.</p>
              <p>• Emballages soignés et livraison rapide.</p>
              <p>• Retours faciles et support francophone.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Témoignages</p>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.author} className="glass-card p-8">
                <p className="text-base leading-7 text-slate-700">“{review.feedback}”</p>
                <footer className="mt-6 text-sm font-semibold text-slate-950">{review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
