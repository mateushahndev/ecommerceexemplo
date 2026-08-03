'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  designer: string
}

const products = [
  {
    id: 1,
    name: 'Blazer Estrutura Vermelho',
    price: 890,
    image: '/roupas/blazer-vermelho.webp',
    designer: 'Helena Costa',
  },
  {
    id: 2,
    name: 'Vestido Midi Alfaiataria',
    price: 750,
    image: '/roupas/vestido-midi.webp',
    designer: 'Mariana Fontes',
  },
  {
    id: 3,
    name: 'Calça Pantalona de Linho',
    price: 620,
    image: '/roupas/calca-linho.webp',
    designer: 'Mariana Fontes',
  },
  {
    id: 4,
    name: 'Blazer Oversized Bege',
    price: 940,
    image: '/roupas/blazer-bege.webp',
    designer: 'Ricardo Alves',
  },
  {
    id: 5,
    name: 'Camisa Social Minimalista',
    price: 450,
    image: '/roupas/social-minimalista.webp',
    designer: 'Ricardo Alves',
  },
  {
    id: 6,
    name: 'Bolsa Couro Artesanal',
    price: 530,
    image: '/roupas/bolsa-couro.webp',
    designer: 'Bianca Rocha',
  },
  {
    id: 7,
    name: 'Jaqueta Jean Upcycling',
    price: 680,
    image: '/roupas/jaqueta-jean.webp',
    designer: 'Helena Costa',
  },
  {
    id: 8,
    name: 'Colar Cerâmico Minimalista',
    price: 280,
    image: '/roupas/colar-ceramico.webp',
    designer: 'Bianca Rocha',
  },
]

export default function Carrinho() {
  const router = useRouter()
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedCart = localStorage.getItem('dvsy_cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        // Buscar informações completas dos produtos
        const fullCart = parsed.map((item: any) => {
          const product = products.find(p => p.id === item.id)
          return {
            ...item,
            image: product?.image || '',
            designer: product?.designer || '',
          }
        })
        setCart(fullCart)
      } catch (e) {
        console.error('Erro ao carregar carrinho:', e)
      }
    }
    setIsLoading(false)
  }, [])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCart(prev => {
      const updated = prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
      localStorage.setItem('dvsy_cart', JSON.stringify(updated))
      return updated
    })
  }

  const removeItem = (id: number) => {
    setCart(prev => {
      const updated = prev.filter(item => item.id !== id)
      localStorage.setItem('dvsy_cart', JSON.stringify(updated))
      return updated
    })
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = subtotal > 500 ? 0 : 30
  const total = subtotal + shipping

  const handleCheckout = () => {
    if (cart.length === 0) return
    alert('Pedido finalizado com sucesso! Obrigado por comprar na DVSY.')
    localStorage.removeItem('dvsy_cart')
    setCart([])
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="text-text-dim">Carregando carrinho...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <Link href="/roupas" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Continuar comprando
        </Link>

        <h1 className="font-jost text-5xl md:text-6xl font-light tracking-[0.02em] mb-4">
          Seu <span className="text-accent-bright">Carrinho</span>
        </h1>
        <p className="text-text-dim text-lg mb-8">
          {totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho
        </p>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-20 h-20 text-text-faint mx-auto mb-6" />
            <h2 className="font-jost text-2xl font-light text-text mb-4">Seu carrinho está vazio</h2>
            <p className="text-text-dim mb-8">Que tal explorar nossas peças exclusivas?</p>
            <Link
              href="/roupas"
              className="inline-block bg-accent-bright text-white px-8 py-3 rounded hover:bg-accent-bright/90 transition-colors font-medium"
            >
              Ver roupas
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Itens do carrinho */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-dark-card border border-line rounded p-4 flex gap-4">
                  <div className="w-24 h-32 bg-dark-light rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-text-faint text-[10px] uppercase tracking-[0.08em]">{item.designer}</p>
                      <h3 className="font-jost font-medium text-text">{item.name}</h3>
                      <p className="text-accent-bright font-jost text-lg">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 border border-line rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-text-faint hover:text-accent-bright transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo do pedido */}
            <div className="lg:col-span-1">
              <div className="bg-dark-card border border-line rounded p-6 sticky top-28">
                <h2 className="font-jost text-xl font-light text-text mb-6">Resumo do pedido</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-dim">Subtotal ({totalItems} itens)</span>
                    <span className="text-text">R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-dim">Frete</span>
                    <span className="text-text">{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-text-faint text-xs">🎉 Frete grátis para compras acima de R$ 500</p>
                  )}
                  <div className="border-t border-line pt-3 mt-3">
                    <div className="flex justify-between font-jost text-lg">
                      <span className="text-text">Total</span>
                      <span className="text-accent-bright">R$ {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-accent-bright text-white py-3 rounded hover:bg-accent-bright/90 transition-colors font-medium mt-6"
                >
                  Finalizar Pedido
                </button>

                <p className="text-text-faint text-[10px] text-center mt-4">
                  Pagamento seguro via ambiente protegido
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}