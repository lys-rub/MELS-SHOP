"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../assets/mels-logo.png'

const navItems = [
  { label: 'Categories', href: '/shop', bold: true },
  { label: 'Collections', href: '/collections', bold: true },
  { label: 'À propos', href: '/about', bold: true },
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

function IconContact(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M3 8c0-1 1-2 2-2h14c1 0 2 1 2 2v8c0 1-1 2-2 2H5c-1 0-2-1-2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m20 9-8 6-8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20c0-3.3 3.5-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const actions = [
    { href: '/contact', aria: 'Contactez-nous', Icon: IconContact },
    { href: '/account', aria: 'Mon compte', Icon: IconUser },
    { href: '/favorites', aria: 'Mes favoris', Icon: IconHeart },
    { href: '/cart', aria: 'Voir le panier', Icon: IconCart },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between gap-4 px-4 py-2 lg:px-8 max-w-7xl">
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="MEL'S" width={160} height={160} className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" priority />
        </Link>

        <div className="flex items-center gap-2 lg:gap-4">
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${item.bold ? 'font-bold' : 'font-medium'} text-slate-700 transition hover:text-brand-700`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {actions.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                aria-label={a.aria}
                className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-700 transition hover:border-brand-300"
              >
                <a.Icon className="h-5 w-5" />
              </Link>
            ))}

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
                className={`rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm ${item.bold ? 'font-bold' : 'font-medium'} text-slate-700 transition hover:border-brand-300 hover:bg-white`}
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
