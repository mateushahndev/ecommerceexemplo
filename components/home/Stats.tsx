'use client'

import { useEffect, useRef } from 'react'
import RevealWrapper from './RevealWrapper'

const stats = [
  { label: 'Designers', value: 150, suffix: '+' },
  { label: 'Clients', value: 500, suffix: '+' },
  { label: 'Masterpieces', value: 20, suffix: 'K+' },
  { label: 'Events', value: 50, suffix: '+' },
]

export default function Stats() {
  const countersRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const animateCounter = (el: HTMLDivElement) => {
      const target = parseInt(el.dataset.count || '0', 10)
      const suffix = el.dataset.suffix || ''
      const duration = 1400
      const start = performance.now()

      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = Math.round(eased * target) + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement
            animateCounter(el)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.6 }
    )

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#0e0d0b] border-y border-line mt-14">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <RevealWrapper key={index} delay={index * 0.08} className={`text-center py-9 md:py-10 px-4 border-r border-line last:border-r-0 ${index === 1 ? 'border-r-0 md:border-r' : ''}`}>
              <div className="text-[10px] tracking-[0.18em] text-text-faint uppercase mb-2.5">
                {stat.label}
              </div>
              <div
                ref={(el) => { countersRef.current[index] = el }}
                data-count={stat.value}
                data-suffix={stat.suffix}
                className="font-jost text-[clamp(26px,3.4vw,38px)] font-light tracking-[0.02em]"
              >
                0
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}