export default function Footer() {
  return (
    <footer className="border-t border-white/80 bg-white/80 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-base font-semibold text-brand-700">MEL'S Shop</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Une expérience shopping inspirée des meilleures plateformes, conçue pour mettre en valeur vos pièces mode, beauté et accessoires.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Livraison offerte</li>
              <li>Retours faciles</li>
              <li>Assistance 24/7</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Qui sommes-nous</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Collections</li>
              <li>Qualité premium</li>
              <li>Mode durable</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <p className="mt-3 text-sm text-slate-600">hello@mels-shop.com</p>
            <p className="text-sm text-slate-600">+243 99 999 9999</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
