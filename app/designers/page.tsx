import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const designers = [
  {
    id: 1,
    name: 'Helena Costa',
    specialty: 'Moda Sustentável & Streetwear',
    image: '/designers/designer1.webp',
    description: 'Designer que une moda urbana com práticas sustentáveis, criando peças que contam histórias de consciência ambiental.'
  },
  {
    id: 2,
    name: 'Ricardo Alves',
    specialty: 'Alfaiataria Contemporânea',
    image: '/designers/designer2.webp',
    description: 'Mestre da alfaiataria moderna, Ricardo combina técnicas tradicionais com cortes inovadores e silhuetas arquitetônicas.'
  },
  {
    id: 3,
    name: 'Mariana Fontes',
    specialty: 'Minimalismo & Ateliê',
    image: '/designers/designer3.webp',
    description: 'A essência do menos é mais em cada peça. Mariana cria coleções atemporais com foco em materiais nobres e caimento impecável.'
  },
  {
    id: 4,
    name: 'Thiago Nunes',
    specialty: 'Estilo Urbano & Vanguarda',
    image: '/designers/designer4.webp',
    description: 'Thiago é a voz da nova geração na moda masculina, misturando influências do hip-hop com cortes de alta-costura.'
  },
  {
    id: 5,
    name: 'Bianca Rocha',
    specialty: 'Moda Artesanal & Boho',
    image: '/designers/designer5.webp',
    description: 'Trabalhos manuais e técnicas artesanais são a assinatura de Bianca. Cada peça é única, feita com cuidado e paixão.'
  },
  {
    id: 6,
    name: 'Lucas Mendes',
    specialty: 'Design Editorial & Vanguarda',
    image: '/designers/designer6.webp',
    description: 'Lucas desafia convenções com suas criações ousadas, misturando arte, moda e performance em cada coleção.'
  },
]

export default function Designers() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-jost text-5xl md:text-6xl font-light tracking-[0.02em] mb-4">
          Designers <span className="text-accent-bright">Independentes</span>
        </h1>
        <p className="text-text-dim text-lg max-w-2xl mb-12 leading-relaxed">
          Conheça os criadores por trás das peças que fazem a diferença. Cada designer traz uma visão única e autêntica para a moda.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designers.map((designer) => (
            <Link key={designer.id} href={`/designers/${designer.id}`}>
              <div className="bg-dark-card border border-line rounded overflow-hidden hover:border-accent-bright/40 transition-all hover:shadow-lg hover:shadow-accent-bright/5 group cursor-pointer">
                <div className="relative w-full aspect-square overflow-hidden bg-dark-light">
                  <Image
                    src={designer.image}
                    alt={designer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-jost text-lg font-medium text-text group-hover:text-accent-bright transition-colors">
                    {designer.name}
                  </h3>
                  <p className="text-text-dim text-sm mt-1">{designer.specialty}</p>
                  <p className="text-text-faint text-xs mt-3 line-clamp-2 leading-relaxed">
                    {designer.description}
                  </p>
                  <span className="inline-block mt-4 text-[10.5px] tracking-[0.12em] uppercase text-accent-bright hover:gap-2 transition-all group-hover:pl-1">
                    Conhecer →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}