export default function FavoritesPage() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Favoris</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Mes articles favoris
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Retrouvez tous les articles que vous avez mis en favoris pour une consultation ultérieure.
        </p>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-brand-50/80 p-10 text-center shadow-soft">
          <p className="text-slate-700 font-medium">Vous n'avez pas encore d'articles en favoris.</p>
          <p className="mt-2 text-sm text-slate-600">Commencez à explorer notre boutique et ajoutez vos produits préférés.</p>
          <a href="/shop" className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-600 shadow-md hover:shadow-lg">
            Découvrir la boutique
          </a>
        </div>
      </div>
    </section>
  )
}
