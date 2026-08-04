'use client'

import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

export default function Hero() {
  return (
    <section className="pt-[118px] pb-0">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="relative h-[78vh] min-h-[480px] max-h-[640px] rounded border border-line overflow-hidden bg-[radial-gradient(circle_at_78%_30%,rgba(70,50,40,0.55),transparent_55%),linear-gradient(115deg,#2b2620_0%,#1a1c17_45%,#10120f_100%)] flex items-end">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_1px,transparent_5px)] opacity-40 pointer-events-none" />
          
          <Image
            src="/home/hero.webp"
            alt="Modelo blazer vermelho, still editorial"
            fill
            className="object-cover object-center"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent pointer-events-none" />

          <div className="relative z-10 pb-12 md:pb-14 pl-6 md:pl-12 max-w-[640px]">
            <h1 className="font-jost font-[200] text-[clamp(42px,6.4vw,78px)] leading-[1.02] tracking-[0.05em] text-text">
              DESIGN<br />&amp; LIBERDADE
            </h1>
            <p className="mt-5 max-w-[400px] text-[13.5px] leading-relaxed text-[#d8d4c9] font-light">
              Explore o estilo independente abraçando a singularidade com nossas peças exclusivas de estilistas autorais.
            </p>
            <Link href="/roupas" className="inline-flex items-center gap-2.5 mt-8 text-[11px] tracking-[0.14em] uppercase text-text hover:text-accent-bright transition-colors">
              <span className="w-[34px] h-[34px] rounded-full border border-white/35 flex items-center justify-center hover:bg-accent-bright hover:border-accent-bright transition-all">
                ↓
              </span>
              Ver Coleção
            </Link>
          </div>


        </div>
      </div>
    </section>
  )
}