'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Plus, Minus, Heart, Check } from 'lucide-react'

// Tipo para as medidas
type Measurements = {
  [key: string]: {
    [key: string]: string
  }
}

const products = [
  {
    id: 1,
    name: 'Blazer Estrutura Vermelho',
    price: 890,
    category: 'feminino',
    image: '/roupas/blazer-vermelho.webp',
    designer: 'Helena Costa',
    description: 'Blazer de corte estruturado em vermelho intenso, perfeito para looks de poder.',
    longDescription: 'O Blazer Estrutura Vermelho é a peça definitiva para quem busca elegância e atitude. Confeccionado em tecido de alta qualidade, possui ombros estruturados, lapela clássica e fechamento em botão único. O vermelho intenso traz personalidade e impacto visual, tornando-o perfeito para ocasiões especiais e eventos de destaque.',
    sizes: ['P', 'M', 'G', 'GG'],
    measurements: {
      'P': { busto: '86-90', cintura: '66-70', quadril: '90-94', comprimento: '72' },
      'M': { busto: '91-95', cintura: '71-75', quadril: '95-99', comprimento: '74' },
      'G': { busto: '96-100', cintura: '76-80', quadril: '100-104', comprimento: '76' },
      'GG': { busto: '101-105', cintura: '81-85', quadril: '105-109', comprimento: '78' },
    } as Measurements,
    composition: '70% Poliéster, 28% Viscose, 2% Elastano',
    care: 'Lavar a seco. Não alvejar. Passar em temperatura baixa.',
  },
  {
    id: 2,
    name: 'Vestido Midi Alfaiataria',
    price: 750,
    category: 'feminino',
    image: '/roupas/vestido-midi.webp',
    designer: 'Mariana Fontes',
    description: 'Vestido midi com corte alfaiataria, ideal para ocasiões especiais.',
    longDescription: 'O Vestido Midi Alfaiataria é a escolha certa para quem busca elegância e conforto. Com corte midi e modelagem estruturada, ele valoriza a silhueta sem perder a leveza. Perfeito para eventos, jantares e ocasiões que pedem um toque de sofisticação.',
    sizes: ['P', 'M', 'G'],
    measurements: {
      'P': { busto: '84-88', cintura: '64-68', quadril: '88-92', comprimento: '110' },
      'M': { busto: '89-93', cintura: '69-73', quadril: '93-97', comprimento: '112' },
      'G': { busto: '94-98', cintura: '74-78', quadril: '98-102', comprimento: '114' },
    } as Measurements,
    composition: '100% Linho',
    care: 'Lavar à mão. Secar à sombra. Passar com ferro morno.',
  },
  {
    id: 3,
    name: 'Calça Pantalona de Linho',
    price: 620,
    category: 'feminino',
    image: '/roupas/calca-linho.webp',
    designer: 'Mariana Fontes',
    description: 'Calça pantalona em linho natural, confortável e elegante.',
    longDescription: 'A Calça Pantalona de Linho é a peça perfeita para quem busca conforto e estilo. Em linho 100% natural, ela oferece leveza e caimento impecável. A modelagem pantalona valoriza a silhueta e combina com diversas ocasiões, desde o trabalho até eventos mais descontraídos.',
    sizes: ['P', 'M', 'G', 'GG'],
    measurements: {
      'P': { cintura: '66-70', quadril: '94-98', comprimento: '105', barra: '52' },
      'M': { cintura: '71-75', quadril: '99-103', comprimento: '107', barra: '54' },
      'G': { cintura: '76-80', quadril: '104-108', comprimento: '109', barra: '56' },
      'GG': { cintura: '81-85', quadril: '109-113', comprimento: '111', barra: '58' },
    } as Measurements,
    composition: '100% Linho',
    care: 'Lavar à mão. Secar à sombra. Passar com ferro morno.',
  },
  {
    id: 4,
    name: 'Blazer Oversized Bege',
    price: 940,
    category: 'masculino',
    image: '/roupas/blazer-bege.webp',
    designer: 'Ricardo Alves',
    description: 'Blazer oversized em bege, com cortes modernos e acabamento impecável.',
    longDescription: 'O Blazer Oversized Bege é a peça-chave para quem busca estilo e conforto. Com modelagem oversized, ele oferece liberdade de movimento e um visual contemporâneo. O tom neutro bege combina com qualquer look, enquanto o tecido de alta qualidade garante durabilidade e elegância.',
    sizes: ['P', 'M', 'G', 'GG'],
    measurements: {
      'P': { busto: '96-100', cintura: '76-80', quadril: '96-100', comprimento: '78' },
      'M': { busto: '101-105', cintura: '81-85', quadril: '101-105', comprimento: '80' },
      'G': { busto: '106-110', cintura: '86-90', quadril: '106-110', comprimento: '82' },
      'GG': { busto: '111-115', cintura: '91-95', quadril: '111-115', comprimento: '84' },
    } as Measurements,
    composition: '65% Poliéster, 33% Viscose, 2% Elastano',
    care: 'Lavar a seco. Não alvejar. Passar em temperatura baixa.',
  },
  {
    id: 5,
    name: 'Camisa Social Minimalista',
    price: 450,
    category: 'masculino',
    image: '/roupas/social-minimalista.webp',
    designer: 'Ricardo Alves',
    description: 'Camisa social de corte minimalista, em algodão egípcio de alta qualidade.',
    longDescription: 'A Camisa Social Minimalista é a peça essencial para qualquer guarda-roupa. Em algodão egípcio de alta qualidade, ela oferece conforto, durabilidade e um caimento impecável. O corte minimalista garante versatilidade, combinando com diferentes ocasiões e estilos.',
    sizes: ['P', 'M', 'G', 'GG'],
    measurements: {
      'P': { busto: '92-96', cintura: '72-76', comprimento: '78', manga: '62' },
      'M': { busto: '97-101', cintura: '77-81', comprimento: '80', manga: '64' },
      'G': { busto: '102-106', cintura: '82-86', comprimento: '82', manga: '66' },
      'GG': { busto: '107-111', cintura: '87-91', comprimento: '84', manga: '68' },
    } as Measurements,
    composition: '100% Algodão Egípcio',
    care: 'Lavar à mão ou máquina (ciclo delicado). Secar à sombra. Passar com ferro morno.',
  },
  {
    id: 6,
    name: 'Bolsa Couro Artesanal',
    price: 530,
    category: 'acessorios',
    image: '/roupas/bolsa-couro.webp',
    designer: 'Bianca Rocha',
    description: 'Bolsa em couro vegetal, feita à mão com técnicas artesanais.',
    longDescription: 'A Bolsa Couro Artesanal é uma peça única, feita à mão com técnicas artesanais. Em couro vegetal de alta qualidade, ela combina durabilidade e estilo. Cada bolsa é um exemplar único, com acabamento impecável e atenção aos detalhes.',
    sizes: ['Único'],
    measurements: {
      'Único': { altura: '28', largura: '35', profundidade: '12', alça: '50' },
    } as Measurements,
    composition: 'Couro Vegetal',
    care: 'Limpar com pano úmido. Não molhar. Hidratar com produtos específicos.',
  },
  {
    id: 7,
    name: 'Jaqueta Jean Upcycling',
    price: 680,
    category: 'feminino',
    image: '/roupas/jaqueta-jean.webp',
    designer: 'Helena Costa',
    description: 'Jaqueta jeans com técnicas de upcycling e bordados manuais.',
    longDescription: 'A Jaqueta Jean Upcycling é uma peça sustentável que une estilo e consciência ambiental. Feita a partir de jeans reciclado e com bordados manuais exclusivos, ela conta uma história de criatividade e inovação. Cada jaqueta é única, com detalhes que valorizam o trabalho artesanal.',
    sizes: ['P', 'M', 'G'],
    measurements: {
      'P': { busto: '84-88', cintura: '64-68', quadril: '88-92', comprimento: '56' },
      'M': { busto: '89-93', cintura: '69-73', quadril: '93-97', comprimento: '58' },
      'G': { busto: '94-98', cintura: '74-78', quadril: '98-102', comprimento: '60' },
    } as Measurements,
    composition: '100% Algodão Reciclado',
    care: 'Lavar à mão. Secar à sombra. Não usar alvejante.',
  },
  {
    id: 8,
    name: 'Colar Cerâmico Minimalista',
    price: 280,
    category: 'acessorios',
    image: '/roupas/colar-ceramico.webp',
    designer: 'Bianca Rocha',
    description: 'Colar em cerâmica com design minimalista e acabamento artesanal.',
    longDescription: 'O Colar Cerâmico Minimalista é uma joia artesanal que combina simplicidade e elegância. Feito em cerâmica de alta qualidade, ele possui design minimalista e acabamento impecável. Perfeito para complementar qualquer look, do casual ao sofisticado.',
    sizes: ['Único'],
    measurements: {
      'Único': { comprimento: '42', pingente: '3x4' },
    } as Measurements,
    composition: 'Cerâmica, Cordão de Algodão',
    care: 'Limpar com pano seco. Evitar contato com água e produtos químicos.',
  },
]

type Product = typeof products[0]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id))
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [isWishlist, setIsWishlist] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => {
        setShowFeedback(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showFeedback])

  if (!product) {
    notFound()
  }

  const addToCart = () => {
    const savedCart = localStorage.getItem('dvsy_cart')
    let cart = savedCart ? JSON.parse(savedCart) : []

    const existingIndex = cart.findIndex((item: any) => item.id === product.id)
    
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        designer: product.designer,
        image: product.image,
      })
    }

    localStorage.setItem('dvsy_cart', JSON.stringify(cart))
    setShowFeedback(true)
    window.dispatchEvent(new Event('storage'))
  }

  // Pega as medidas do tamanho selecionado
  const measurements = product.measurements[selectedSize as keyof typeof product.measurements]

  return (
    <div className="min-h-screen pt-28 pb-16 relative z-0">
      {/* Feedback de produto adicionado */}
      {showFeedback && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-accent-bright text-white px-6 py-3 rounded shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-5 duration-300">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">{product.name} adicionado ao carrinho!</span>
        </div>
      )}

      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <Link href="/roupas" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Voltar para roupas
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagem */}
          <div className="relative w-full aspect-[3/4] rounded overflow-hidden bg-dark-light">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <button
              onClick={() => setIsWishlist(!isWishlist)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark/80 backdrop-blur-sm border border-line flex items-center justify-center hover:border-accent-bright transition-colors"
            >
              <Heart className={`w-4 h-4 ${isWishlist ? 'fill-accent-bright text-accent-bright' : ''}`} />
            </button>
          </div>

          {/* Conteúdo */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-text-faint text-[10px] uppercase tracking-[0.08em]">{product.designer}</span>
              <span className="text-text-faint text-[10px]">|</span>
              <span className="text-text-faint text-[10px] uppercase tracking-[0.08em]">{product.category}</span>
            </div>
            
            <h1 className="font-jost text-3xl md:text-4xl font-light tracking-[0.02em] text-text">
              {product.name}
            </h1>
            
            <p className="text-accent-bright text-2xl font-jost font-light mt-2">
              R$ {product.price.toFixed(2)}
            </p>

            <p className="text-text-dim text-sm mt-4 leading-relaxed">
              {product.longDescription}
            </p>

            {/* Tamanhos */}
            <div className="mt-6">
              <p className="text-text-dim text-sm font-medium mb-3">Tamanho</p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 text-sm transition-all ${
                      selectedSize === size
                        ? 'bg-accent-bright text-white'
                        : 'border border-line text-text-dim hover:text-text hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Medidas */}
            {measurements && Object.keys(measurements).length > 0 && (
              <div className="mt-4 p-4 bg-dark-card border border-line rounded">
                <p className="text-text-faint text-[10px] uppercase tracking-[0.08em] mb-2">Medidas para o tamanho {selectedSize}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {Object.entries(measurements).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-text-faint text-[10px] uppercase tracking-[0.06em] block">{key}</span>
                      <span className="text-text-dim">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Composição e Cuidados */}
            <div className="mt-4 space-y-2 text-sm">
              <p><span className="text-text-faint">Composição:</span> <span className="text-text-dim">{product.composition}</span></p>
              <p><span className="text-text-faint">Cuidados:</span> <span className="text-text-dim">{product.care}</span></p>
            </div>

            {/* Quantidade e Add to Cart */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 border border-line rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <button
                onClick={addToCart}
                className="flex-1 bg-accent-bright text-white py-3 rounded hover:bg-accent-bright/90 transition-colors font-medium"
              >
                Adicionar ao carrinho
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-line">
              <Link href="/designers" className="text-text-dim hover:text-text transition-colors text-sm">
                Ver mais peças de {product.designer} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}