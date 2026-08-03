import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const posts = [
  {
    title: 'Como construir um guarda-roupa sustentável',
    date: '15 de Agosto, 2025',
    excerpt: 'Dicas práticas para escolher peças que duram e respeitam o meio ambiente.'
  },
  {
    title: 'Designers independentes que você precisa conhecer',
    date: '10 de Agosto, 2025',
    excerpt: 'Conheça talentos emergentes que estão revolucionando a moda autoral.'
  },
  {
    title: 'O futuro da moda é a liberdade criativa',
    date: '5 de Agosto, 2025',
    excerpt: 'Como a moda independente está mudando a forma como nos vestimos.'
  },
]

export default function Blog() {
  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-jost text-5xl md:text-6xl font-light tracking-[0.02em] mb-6">
          Blog <span className="text-accent-bright">DVSY</span>
        </h1>
        <p className="text-text-dim text-lg max-w-2xl mb-12">
          Histórias, tendências e inspirações do mundo da moda independente.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-dark-card border border-line rounded p-6 hover:border-accent-bright/30 transition-colors">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-dark-light to-dark rounded mb-4" />
              <h3 className="font-jost text-lg font-medium">{post.title}</h3>
              <p className="text-text-dim text-sm mt-2">{post.excerpt}</p>
              <p className="text-text-faint text-xs mt-3">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}