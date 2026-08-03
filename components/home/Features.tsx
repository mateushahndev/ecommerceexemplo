'use client'

import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

const features = [
  {
    title: 'Independência',
    description: 'Explore a criatividade de designers independentes de todo o mundo.',
    href: '/designers'
  },
  {
    title: 'Exclusividade',
    description: 'Descubra peças únicas que se destacam sem esforço.',
    href: '/roupas'
  },
  {
    title: 'Qualidade',
    description: 'Experimente um artesanato incomparável e atenção aos detalhes.',
    href: '/roupas'
  },
  {
    title: 'Sustentabilidade',
    description: 'Abrace escolhas de moda conscientes sem abrir mão do estilo.',
    href: '/roupas'
  },
]

export default function Features() {
  return (
    <section className="py-4">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-line border border-line rounded overflow-hidden mt-6">
          {features.map((feature, index) => (
            <RevealWrapper key={index} delay={index * 0.08} className="bg-dark-card p-7 md:p-8 hover:bg-[#232019] transition-colors">
              <h3 className="font-jost text-[15px] tracking-[0.1em] font-medium uppercase mb-3">
                {feature.title}
              </h3>
              <p className="text-[12.5px] leading-relaxed text-text-dim font-light min-h-[52px]">
                {feature.description}
              </p>
              <Link href={feature.href} className="inline-flex items-center gap-2 mt-5 text-[10.5px] tracking-[0.12em] uppercase text-text hover:text-accent-bright transition-colors">
                <span className="w-[22px] h-[22px] rounded-full border border-white/28 flex items-center justify-center hover:bg-accent-bright hover:border-accent-bright transition-all">
                  ↗
                </span>
                Explorar
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}