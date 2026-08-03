import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Instagram, Linkedin, Mail } from '@/components/Icons'

const designers = [
  {
    id: 1,
    name: 'Helena Costa',
    specialty: 'Moda Sustentável & Streetwear',
    image: '/designers/designer1.webp',
    description: 'Designer que une moda urbana com práticas sustentáveis, criando peças que contam histórias de consciência ambiental.',
    longDescription: 'Helena Costa é uma designer que transforma resíduos têxteis em moda de vanguarda. Com uma trajetória de 8 anos no mercado, ela já colaborou com marcas internacionais e teve suas peças expostas em galerias de arte. Sua coleção mais recente, "Refúgio", explora a relação entre o vestuário e o meio ambiente, utilizando tecidos orgânicos e tingimentos naturais.',
    tags: ['Moda Sustentável', 'Streetwear', 'Upcycling'],
    instagram: '#',
    linkedin: '#',
    email: '#',
  },
  {
    id: 2,
    name: 'Ricardo Alves',
    specialty: 'Alfaiataria Contemporânea',
    image: '/designers/designer2.webp',
    description: 'Mestre da alfaiataria moderna, Ricardo combina técnicas tradicionais com cortes inovadores e silhuetas arquitetônicas.',
    longDescription: 'Com mais de 12 anos de experiência em alfaiataria, Ricardo Alves é reconhecido por suas peças que equilibram tradição e inovação. Formado em design de moda e especializado em modelagem, ele já vestiu artistas e executivos com suas criações sob medida. Sua marca é conhecida pela qualidade impecável e pelo caimento que valoriza cada corpo.',
    tags: ['Alfaiataria', 'Moda Masculina', 'Alta Costura'],
    instagram: '#',
    linkedin: '#',
    email: '#',
  },
  {
    id: 3,
    name: 'Mariana Fontes',
    specialty: 'Minimalismo & Ateliê',
    image: '/designers/designer3.webp',
    description: 'A essência do menos é mais em cada peça. Mariana cria coleções atemporais com foco em materiais nobres e caimento impecável.',
    longDescription: 'Mariana Fontes acredita que a moda é uma extensão da personalidade. Suas coleções são marcadas pela simplicidade sofisticada, com cortes precisos e tecidos de alta qualidade. Formada em design de moda pela Faculdade Santa Marcelina, ela já desfilou em semanas de moda independentes e tem suas peças em lojas conceito em São Paulo e Nova York.',
    tags: ['Minimalismo', 'Moda Feminina', 'Atemporais'],
    instagram: '#',
    linkedin: '#',
    email: '#',
  },
  {
    id: 4,
    name: 'Thiago Nunes',
    specialty: 'Estilo Urbano & Vanguarda',
    image: '/designers/designer4.webp',
    description: 'Thiago é a voz da nova geração na moda masculina, misturando influências do hip-hop com cortes de alta-costura.',
    longDescription: 'Thiago Nunes é o nome da nova geração na moda masculina brasileira. Com uma estética que mistura a cultura urbana com a alta-costura, ele cria peças que são verdadeiras declarações de estilo. Sua coleção de estreia, "Quebra de Padrões", foi destaque em revistas especializadas e consolidou seu nome no cenário da moda independente.',
    tags: ['Moda Urbana', 'Vanguarda', 'Estilo Masculino'],
    instagram: '#',
    linkedin: '#',
    email: '#',
  },
  {
    id: 5,
    name: 'Bianca Rocha',
    specialty: 'Moda Artesanal & Boho',
    image: '/designers/designer5.webp',
    description: 'Trabalhos manuais e técnicas artesanais são a assinatura de Bianca. Cada peça é única, feita com cuidado e paixão.',
    longDescription: 'Bianca Rocha resgata técnicas ancestrais de bordado e tecelagem para criar peças contemporâneas e cheias de personalidade. Com uma paixão por materiais naturais e processos manuais, ela produz coleções que são verdadeiras obras de arte vestíveis. Sua marca é um manifesto contra a moda fast fashion, valorizando o tempo e o cuidado de cada criação.',
    tags: ['Artesanal', 'Moda Boho', 'Técnicas Manuais'],
    instagram: '#',
    linkedin: '#',
    email: '#',
  },
  {
    id: 6,
    name: 'Lucas Mendes',
    specialty: 'Design Editorial & Vanguarda',
    image: '/designers/designer6.webp',
    description: 'Lucas desafia convenções com suas criações ousadas, misturando arte, moda e performance em cada coleção.',
    longDescription: 'Lucas Mendes é um designer que não tem medo de ousar. Suas coleções são narrativas visuais que exploram temas como identidade, tecnologia e futurismo. Com formação em artes plásticas e moda, ele cria peças que são ao mesmo tempo vestíveis e conceituais. Já teve suas obras expostas em museus e colaborou com artistas plásticos em projetos multidisciplinares.',
    tags: ['Vanguarda', 'Design Editorial', 'Performance'],
    instagram: '#',
    linkedin: '#',
    email: '#',
  },
]

export default function DesignerPage({ params }: { params: { id: string } }) {
  const designer = designers.find((d) => d.id === parseInt(params.id))

  if (!designer) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <Link href="/designers" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Voltar para designers
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagem */}
          <div className="relative w-full aspect-[3/4] rounded overflow-hidden bg-dark-light">
            <Image
              src={designer.image}
              alt={designer.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Conteúdo */}
          <div>
            <span className="text-accent-bright text-[10.5px] tracking-[0.12em] uppercase font-semibold">
              Designer Independente
            </span>
            <h1 className="font-jost text-4xl md:text-5xl font-light tracking-[0.02em] mt-3 mb-2">
              {designer.name}
            </h1>
            <p className="text-text-dim text-lg">{designer.specialty}</p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {designer.tags.map((tag, index) => (
                <span key={index} className="text-[10px] tracking-[0.06em] uppercase text-text-faint border border-line px-3 py-1.5 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-text-dim text-sm leading-relaxed">
              <p>{designer.longDescription}</p>
            </div>

            <div className="mt-8 flex gap-4">
              <a href={designer.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-accent-bright hover:text-accent-bright transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={designer.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-accent-bright hover:text-accent-bright transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${designer.email}`} className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-accent-bright hover:text-accent-bright transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-line">
              <Link
                href="/roupas"
                className="inline-block bg-accent-bright text-white px-8 py-3 rounded hover:bg-accent-bright/90 transition-colors text-sm font-medium"
              >
                Quero conhecer as peças
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}