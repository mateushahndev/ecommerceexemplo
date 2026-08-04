'use client'

import { Suspense } from 'react'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Stats from '@/components/home/Stats'
import About from '@/components/home/About'
import Advantages from '@/components/home/Advantages'

function HomeContent() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <About />
      <Advantages />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-accent-bright font-jost text-xl">Carregando...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}