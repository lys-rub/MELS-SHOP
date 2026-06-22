import Link from 'next/link'
import { formatPrice, products } from '../../lib/shop-data'

const cartItems = [
  { ...products[0], quantity: 1 },
  { ...products[2], quantity: 2 },
]

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
const delivery = 12000
const total = subtotal + delivery

export default function CartPage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(200,79,66,0.08),_transparent_35%),_linear-gradient(180deg,_rgba(255,250,246,1)_0%,_rgba(246,239,232,1)_100%)] py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-700">Panier</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Votre panier MEL'S</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Vérifiez vos articles, ajustez les quantités et préparez-vous à une livraison rapide.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-soft">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-gold-700">{item.tag}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-950">{item.name}</h2>
                    <p className="mt-2 text-sm text-slate-600">{item.category}</p>
                  </div>
                  <div className="space-y-2 text-right">
                    <p className="text-xl font-semibold text-gold-700">{formatPrice(item.price)}</p>
                    <p className="text-sm text-slate-600">Quantité: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Récapitulatif</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Livraison</span>
                <span>{formatPrice(delivery)}</span>
              </div>
              <div className="border-t border-slate-200 pt-5 text-lg font-semibold text-slate-950">
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            <Link href="/checkout" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gold-700">
              Procéder au paiement
            </Link>
            <Link href="/shop" className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-gold-200 bg-white px-6 py-4 text-sm font-semibold text-gold-700 transition hover:bg-gold-50">
              Continuer mes achats
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
