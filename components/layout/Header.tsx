'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
    <>
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

            {/* Botão hamburguer - versão simplificada */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center z-[1002]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="relative w-5 h-5">
                {/* Linha 1 */}
                <span className={`absolute left-0 w-5 h-[1.5px] bg-text transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'top-1/2 -translate-y-1/2 rotate-45' 
                    : 'top-0'
                }`} />
                {/* Linha 2 */}
                <span className={`absolute left-0 w-5 h-[1.5px] bg-text transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-0' 
                    : 'top-1/2 -translate-y-1/2'
                }`} />
                {/* Linha 3 */}
                <span className={`absolute left-0 w-5 h-[1.5px] bg-text transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'top-1/2 -translate-y-1/2 -rotate-45' 
                    : 'bottom-0'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark/98 backdrop-blur-md z-[999] flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <button
          className="absolute top-6 right-6 text-3xl text-text hover:text-accent-bright transition-colors w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          ✕
        </button>
        
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-jost text-3xl md:text-4xl tracking-[0.08em] text-text hover:text-accent-bright transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contato"
          className="font-jost text-xl tracking-[0.08em] text-white bg-accent-bright px-8 py-3 rounded hover:bg-accent-bright/90 transition-colors mt-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contato
        </Link>
      </div>
    </>
  )
}