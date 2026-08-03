import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermosUso() {
  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-[820px] mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-jost text-4xl md:text-5xl font-light tracking-[0.02em] mb-6">
          Termos de <span className="text-accent-bright">Uso</span>
        </h1>
        <p className="text-text-faint text-sm mb-8">Última atualização: Agosto de 2026</p>
        
        <div className="bg-dark-card border border-line rounded p-6 md:p-8 space-y-6 text-text-dim text-sm leading-relaxed">
          <p>
            Ao utilizar este site, você concorda com os seguintes termos e condições. Leia-os atentamente.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar este site, você concorda em cumprir estes termos de uso e todas as leis e regulamentos 
            aplicáveis. Se você não concordar com algum destes termos, não use este site.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">2. Uso do Conteúdo</h2>
          <p>
            Todo o conteúdo deste site é de propriedade da DVSY e está protegido por direitos autorais. 
            Você não pode reproduzir, distribuir ou modificar o conteúdo sem autorização prévia.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">3. Produtos e Preços</h2>
          <p>
            Os produtos e preços exibidos no site estão sujeitos a alterações sem aviso prévio. 
            Reservamo-nos o direito de corrigir erros de precificação e descontinuar produtos.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">4. Pedidos e Pagamentos</h2>
          <p>
            Ao realizar um pedido, você concorda em fornecer informações precisas e completas. 
            Os pagamentos são processados de forma segura por meio de plataformas parceiras.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">5. Responsabilidade</h2>
          <p>
            Não nos responsabilizamos por danos decorrentes do uso inadequado das informações contidas neste site 
            ou por atrasos na entrega causados por terceiros.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">6. Modificações</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor 
            imediatamente após a publicação.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">7. Contato</h2>
          <p>
            Para questões sobre estes termos, entre em contato pelo e-mail: contato@dvsy.com.br
          </p>
        </div>
      </div>
    </section>
  )
}