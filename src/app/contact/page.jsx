export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold-700">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Parlons de votre prochaine commande.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Pour toute question sur une commande, un produit ou une collaboration, notre équipe est à votre écoute.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gold-100 bg-gold-50/80 p-10 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-700">Contactez-nous</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              mels4entreprise@gmail.com<br />+243979341078
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <p>Horaires : Lun–Ven 9h–18h</p>
              <p>Adresse : Kinshasa, RDC</p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-950">Envoyez-nous un message</h2>
          <form className="mt-8 grid gap-6 sm:grid-cols-2">
            <input placeholder="Nom complet" className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
            <input placeholder="Email" className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
            <input placeholder="Sujet" className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 sm:col-span-2" />
            <textarea placeholder="Message" rows="5" className="sm:col-span-2 rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-gold-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gold-700">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
