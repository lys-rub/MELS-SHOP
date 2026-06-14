export default function AccountPage() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Mon compte</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Gérez votre compte
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Connectez-vous ou créez un compte pour accéder à vos commandes et vos favoris.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Se connecter</h2>
            <form className="mt-6 space-y-4">
              <input placeholder="Email" type="email" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              <input placeholder="Mot de passe" type="password" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              <button type="submit" className="w-full rounded-full bg-brand-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-700">
                Se connecter
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-brand-50/80 p-10 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Créer un compte</h2>
            <form className="mt-6 space-y-4">
              <input placeholder="Nom complet" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              <input placeholder="Email" type="email" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              <input placeholder="Mot de passe" type="password" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              <button type="submit" className="w-full rounded-full bg-brand-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-700">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
