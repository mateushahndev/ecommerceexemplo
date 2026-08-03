'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Plus, Minus, ShoppingBag, Eye } from 'lucide-react'
import AddToCartFeedback from '@/components/home/AddToCartFeedback'

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'feminino', label: 'Feminino' },
  { id: 'masculino', label: 'Masculino' },
  { id: 'acessorios', label: 'Acessórios' },
]

const products = [
  {
    id: 1,
    name: 'Blazer Estrutura Vermelho',
    price: 890,
    category: 'feminino',
    image: '/roupas/blazer-vermelho.webp',
    designer: 'Helena Costa',
    description: 'Blazer de corte estruturado em vermelho intenso, perfeito para looks de poder.'
  },
  {
    id: 2,
    name: 'Vestido Midi Alfaiataria',
    price: 750,
    category: 'feminino',
    image: '/roupas/vestido-midi.webp',
    designer: 'Mariana Fontes',
    description: 'Vestido midi com corte alfaiataria, ideal para ocasiões especiais.'
  },
  {
    id: 3,
    name: 'Calça Pantalona de Linho',
    price: 620,
    category: 'feminino',
    image: '/roupas/calca-linho.webp',
    designer: 'Mariana Fontes',
    description: 'Calça pantalona em linho natural, confortável e elegante.'
  },
  {
    id: 4,
    name: 'Blazer Oversized Bege',
    price: 940,
    category: 'masculino',
    image: '/roupas/blazer-bege.webp',
    designer: 'Ricardo Alves',
    description: 'Blazer oversized em bege, com cortes modernos e acabamento impecável.'
  },
  {
    id: 5,
    name: 'Camisa Social Minimalista',
    price: 450,
    category: 'masculino',
    image: '/roupas/social-minimalista.webp',
    designer: 'Ricardo Alves',
    description: 'Camisa social de corte minimalista, em algodão egípcio de alta qualidade.'
  },
  {
    id: 6,
    name: 'Bolsa Couro Artesanal',
    price: 530,
    category: 'acessorios',
    image: '/roupas/bolsa-couro.webp',
    designer: 'Bianca Rocha',
    description: 'Bolsa em couro vegetal, feita à mão com técnicas artesanais.'
  },
  {
    id: 7,
    name: 'Jaqueta Jean Upcycling',
    price: 680,
    category: 'feminino',
    image: '/roupas/jaqueta-jean.webp',
    designer: 'Helena Costa',
    description: 'Jaqueta jeans com técnicas de upcycling e bordados manuais.'
  },
  {
    id: 8,
    name: 'Colar Cerâmico Minimalista',
    price: 280,
    category: 'acessorios',
    image: '/roupas/colar-ceramico.webp',
    designer: 'Bianca Rocha',
    description: 'Colar em cerâmica com design minimalista e acabamento artesanal.'
  },
]

export default function Roupas() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [feedbackProduct, setFeedbackProduct] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('dvsy_cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Erro ao carregar carrinho:', e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dvsy_cart', JSON.stringify(cart))
  }, [cart])

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    
    // Mostrar feedback
    setFeedbackProduct(product.name)
    setShowFeedback(true)
  }

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id)
      if (existing && existing.quantity > 1) {
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
      return prev.filter(item => item.id !== id)
    })
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push('/carrinho')
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <AddToCartFeedback 
        productName={feedbackProduct || ''} 
        show={showFeedback} 
        onClose={() => setShowFeedback(false)} 
      />

      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
          
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative flex items-center gap-2 bg-dark-card border border-line px-4 py-2 rounded hover:border-accent-bright transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">{totalItems}</span>
          </button>
        </div>

        <h1 className="font-jost text-5xl md:text-6xl font-light tracking-[0.02em] mb-4">
          Roupas <span className="text-accent-bright">DVSY</span>
        </h1>
        <p className="text-text-dim text-lg max-w-2xl mb-8 leading-relaxed">
          Peças exclusivas de designers independentes, feitas com cuidado e autenticidade.
        </p>

        {/* Categories */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.1em] transition-all ${
                activeCategory === cat.id
                  ? 'bg-accent-bright text-white'
                  : 'border border-line text-text-dim hover:text-text hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-dark-card border border-line rounded overflow-hidden hover:border-accent-bright/40 transition-all group">
              <Link href={`/roupas/${product.id}`}>
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-dark-light">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-dark/80 backdrop-blur-sm px-2.5 py-1 text-[10px] text-text-dim uppercase tracking-[0.06em] border border-line rounded">
                    {product.category}
                  </div>
                </div>
              </Link>
              <div className="p-5">
                <p className="text-text-faint text-[10px] uppercase tracking-[0.08em]">{product.designer}</p>
                <Link href={`/roupas/${product.id}`}>
                  <h3 className="font-jost text-base font-medium text-text mt-1 group-hover:text-accent-bright transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-text-dim text-sm mt-1">R$ {product.price.toFixed(2)}</p>
                
                <div className="mt-4 space-y-2">
                  <Link
                    href={`/roupas/${product.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-dark-light border border-line text-text py-2.5 rounded hover:border-accent-bright hover:text-accent-bright transition-colors text-sm font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    Ver Detalhes
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-accent-bright text-white py-2.5 rounded hover:bg-accent-bright/90 transition-colors text-sm font-medium"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carrinho Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-dark border-l border-line z-[200] transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-line">
              <h2 className="font-jost text-xl font-light">Carrinho</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-text-dim hover:text-text transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-text-dim text-center mt-8">Seu carrinho está vazio</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b border-line pb-4">
                    <div className="w-16 h-16 bg-dark-light rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={products.find(p => p.id === item.id)?.image || ''}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-jost text-sm font-medium">{item.name}</h4>
                      <p className="text-text-dim text-sm">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-7 h-7 rounded border border-line flex items-center justify-center hover:border-accent-bright transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => {
                          const product = products.find(p => p.id === item.id)
                          if (product) addToCart(product)
                        }}
                        className="w-7 h-7 rounded border border-line flex items-center justify-center hover:border-accent-bright transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-line p-6">
              <div className="flex justify-between mb-4">
                <span className="text-text-dim">Total</span>
                <span className="font-jost text-xl font-light">R$ {totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-accent-bright text-white py-3 rounded hover:bg-accent-bright/90 transition-colors font-medium"
                disabled={cart.length === 0}
                onClick={handleCheckout}
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-[150]"
            onClick={() => setIsCartOpen(false)}
          />
        )}
      </div>
    </div>
  )
}