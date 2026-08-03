'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Designers', href: '/designers' },
  { label: 'Roupas', href: '/roupas' },
  { label: 'Carrinho', href: '/carrinho' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-dark/90 backdrop-blur-md border-b border-line py-4' 
        : 'bg-gradient-to-b from-dark/90 to-transparent py-6 md:py-7'
    }`}>
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-jost text-xl md:text-[22px] tracking-[0.14em] font-medium text-text">
            DVSY
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.12em] text-text-dim hover:text-text transition-colors px-4 py-2 rounded hover:bg-white/5 uppercase font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="text-[11px] tracking-[0.12em] text-white bg-accent-bright px-5 py-2 rounded hover:bg-accent-bright/90 transition-colors uppercase font-medium ml-1"
            >
              Contato
            </Link>
          </nav>

          <button
            className="md:hidden w-[26px] h-[18px] relative cursor-pointer bg-none border-none flex flex-col justify-between"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-[1.5px] bg-text transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[1.5px] bg-text transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] bg-text transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-dark/98 z-[1001] flex flex-col items-center justify-center gap-6 transition-opacity duration-350 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-jost text-2xl tracking-[0.08em] text-text hover:text-accent-bright transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="font-jost text-2xl tracking-[0.08em] text-white bg-accent-bright px-6 py-3 rounded hover:bg-accent-bright/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  )
}