'use client'

import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

const advantages = [
  {
    title: 'Designers independentes',
    description: 'Nossa plataforma celebra a engenhosidade de designers independentes, oferecendo uma gama diversa de peças que refletem a criatividade e a inovação de seus criadores.',
    href: '/designers'
  },
  {
    title: 'Exclusividade e unicidade',
    description: 'Descubra coleções curadas com peças exclusivas e cheias de personalidade, criadas para quem busca exclusividade e sofisticação em cada detalhe.',
    href: '/roupas'
  },
  {
    title: 'Alta qualidade',
    description: 'Vista um artesanato superior com nossas peças cuidadosamente selecionadas, feitas com atenção aos detalhes e os melhores materiais.',
    href: '/roupas'
  },
  {
    title: 'Eco-friendly',
    description: 'Junte-se ao nosso compromisso com a sustentabilidade, com opções de moda ecológicas e materiais que respeitam o planeta.',
    href: '/roupas'
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-6 md:py-8 pb-24 md:pb-28">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <RevealWrapper>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h2 className="font-jost font-light text-[clamp(30px,4vw,44px)] tracking-[0.02em]">
              Nossas vantagens
            </h2>
            <p className="max-w-[340px] text-[12.5px] text-text-dim leading-relaxed font-light">
              Curadoria independente, peças exclusivas e um compromisso real com qualidade e sustentabilidade.
            </p>
          </div>
        </RevealWrapper>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] border border-line rounded overflow-hidden mb-[2px]">
          <div className="relative min-h-[260px] md:min-h-[400px] overflow-hidden">
            <Image
              src="/home/advantage1.webp"
              alt="Silhueta em movimento, rua"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          </div>

          <div className="grid grid-rows-1 md:grid-rows-2 gap-[2px] bg-line">
            {advantages.slice(0, 2).map((adv, index) => (
              <RevealWrapper key={index} delay={index * 0.08} className="bg-dark-card p-8 md:p-10 flex flex-col justify-center hover:bg-[#232019] transition-colors">
                <h3 className="font-jost text-[15px] tracking-[0.08em] uppercase font-medium mb-3">
                  {adv.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-text-dim font-light max-w-[420px]">
                  {adv.description}
                </p>
                <Link href={adv.href} className="inline-flex items-center gap-2 mt-4 text-[10.5px] tracking-[0.12em] uppercase text-text hover:text-accent-bright transition-colors">
                  <span className="w-[22px] h-[22px] rounded-full border border-white/28 flex items-center justify-center hover:bg-accent-bright hover:border-accent-bright transition-all">
                    ↗
                  </span>
                  Explorar
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>

        {/* Row 2 - reverse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] border border-line rounded overflow-hidden">
          <div className="grid grid-rows-1 md:grid-rows-2 gap-[2px] bg-line order-2 md:order-1">
            {advantages.slice(2, 4).map((adv, index) => (
              <RevealWrapper key={index} delay={0.16 + index * 0.08} className="bg-dark-card p-8 md:p-10 flex flex-col justify-center hover:bg-[#232019] transition-colors">
                <h3 className="font-jost text-[15px] tracking-[0.08em] uppercase font-medium mb-3">
                  {adv.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-text-dim font-light max-w-[420px]">
                  {adv.description}
                </p>
                <Link href={adv.href} className="inline-flex items-center gap-2 mt-4 text-[10.5px] tracking-[0.12em] uppercase text-text hover:text-accent-bright transition-colors">
                  <span className="w-[22px] h-[22px] rounded-full border border-white/28 flex items-center justify-center hover:bg-accent-bright hover:border-accent-bright transition-all">
                    ↗
                  </span>
                  Explorar
                </Link>
              </RevealWrapper>
            ))}
          </div>

          <div className="relative min-h-[260px] md:min-h-[400px] overflow-hidden order-1 md:order-2">
            <Image
              src="/home/advantage2.webp"
              alt="Manequins de ateliê"
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