'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AddToCartFeedbackProps {
  productName: string
  show: boolean
  onClose: () => void
}

export default function AddToCartFeedback({ productName, show, onClose }: AddToCartFeedbackProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-accent-bright text-white px-6 py-3 rounded shadow-lg flex items-center gap-3"
        >
          <span className="text-sm font-medium">✓ {productName} adicionado ao carrinho!</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}