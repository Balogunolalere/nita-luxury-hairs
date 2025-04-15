"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedLayoutProps {
  children: ReactNode
  className?: string
}

export function AnimatedLayout({ children, className = "" }: AnimatedLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Animation variants for consistent animations across the site
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const parallaxScroll = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
}