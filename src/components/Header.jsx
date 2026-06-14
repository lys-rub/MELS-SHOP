"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../assets/mels-logo.png'

const navItems = [
  { label: 'Boutique', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-4 lg:flex-nowrap lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="MEL'S" width={64} height={64} className="object-contain" />
          <div>
            <p className="text-base font-semibold tracking-[0.12em] text-brand-700">MEL&#39;S</p>
            <span className="text-xs uppercase text-brand-500">Mode & Beauté</span>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-700 transition hover:border-brand-300 lg:hidden"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:w-auto">
          <Link href="/cart" className="w-full rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50 sm:w-auto">
            Panier
          </Link>
          <Link href="/shop" className="brand-button w-full text-center sm:w-auto">
            Voir la boutique
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/80 bg-white/95 px-6 py-4">
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
