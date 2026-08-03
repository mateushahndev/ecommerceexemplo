'use client'

import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

export default function About() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] rounded overflow-hidden border border-line">
          <div className="bg-dark-card p-12 md:p-14 flex flex-col justify-center">
            <RevealWrapper>
              <span className="text-[10.5px] tracking-[0.2em] uppercase text-accent-bright font-semibold mb-5">
                Sobre
              </span>
              <h2 className="font-jost font-light text-[clamp(28px,3vw,38px)] leading-[1.18] tracking-[0.01em] mb-6">
                Onde a moda encontra a liberdade
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-[12.5px] leading-relaxed text-text-dim font-light">
                  Acreditamos que a moda deve ser uma expressão da individualidade. Incentivamos criatividade e originalidade em cada peça que oferecemos, com coleções exclusivas de designers independentes.
                </p>
                <p className="text-[12.5px] leading-relaxed text-text-dim font-light">
                  Com o compromisso de fomentar uma comunidade de criatividade e inovação, nos esforçamos para conectar designers com entusiastas da moda que apreciam a arte e a individualidade por trás de cada peça.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/designers" className="text-[10.5px] tracking-[0.12em] uppercase text-accent-bright hover:text-accent-bright/80 transition-colors">
                  Conheça os designers →
                </Link>
                <Link href="/roupas" className="text-[10.5px] tracking-[0.12em] uppercase text-text-dim hover:text-text transition-colors">
                  Ver coleção →
                </Link>
              </div>
            </RevealWrapper>
          </div>

          <div className="relative min-h-[280px] md:min-h-[420px] overflow-hidden">
            <Image
              src="/home/about.webp"
              alt="Pessoa na escada, look alfaiataria"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}