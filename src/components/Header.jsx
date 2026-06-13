import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/mels-logo.png'

const navItems = [
  { label: 'Boutique', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="MEL'S" width={64} height={64} className="object-contain" />
          <div>
            <p className="text-base font-semibold tracking-[0.12em] text-brand-700">MEL&#39;S</p>
            <span className="text-xs uppercase text-brand-500">Mode & Beauté</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50">
            Panier
          </Link>
          <Link href="/shop" className="brand-button">Voir la boutique</Link>
        </div>
      </div>
    </header>
  )
}
