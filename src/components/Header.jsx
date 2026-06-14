"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../assets/mels-logo.png'

const navItems = [
  { label: 'Categories', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1" fill="currentColor" />
      <circle cx="18" cy="20" r="1" fill="currentColor" />
    </svg>
  )
}

function IconShop(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M3 7h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3l-1.5 3h-5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between gap-3 px-4 py-3 lg:flex-nowrap lg:px-8 max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="MEL'S" width={128} height={128} className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${item.label === 'Categories' ? 'font-bold' : 'font-medium'} text-slate-700 transition hover:text-brand-700`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/cart" aria-label="Voir le panier" className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-700 transition hover:border-brand-300">
              <IconCart className="h-5 w-5" />
            </Link>

            <Link href="/shop" aria-label="Aller à la boutique" className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-700 transition hover:border-brand-300">
              <IconShop className="h-5 w-5" />
            </Link>

            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-700 transition hover:border-brand-300 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden>{menuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/80 bg-white/95 px-4 py-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
