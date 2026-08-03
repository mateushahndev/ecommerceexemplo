'use client'

import { useSearchParams } from 'next/navigation'
import { ReactNode, useEffect, useRef } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className = '' }: RevealWrapperProps) {
  const searchParams = useSearchParams()
  const isScreenshot = searchParams?.get('screenshot') === 'true'
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isScreenshot) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [isScreenshot])

  if (isScreenshot) {
    return <div className={className}>{children}</div>
  }

  return (
    <div 
      ref={ref}
      className={`reveal ${className}`}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}