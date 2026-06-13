export default function CheckoutPage() {
  return (
    <section className="min-h-screen bg-cream py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Paiement</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Finaliser la commande</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Cette page est une maquette de commande. Elle peut être connectée à un service de paiement et à un panier dynamique.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Nom complet</label>
                <input className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Adresse email</label>
                <input className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Adresse</label>
                <input className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Carte</label>
                <input className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="MM/AA" className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
                <input placeholder="CVC" className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" />
              </div>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-700">
                Confirmer ma commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
