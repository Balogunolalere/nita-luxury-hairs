"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  intensity?: number // 1-10, where 10 is most intense
  zoomEffect?: boolean
}

export function ParallaxSection({
  children,
  className,
  direction = 'up',
  intensity = 5,
  zoomEffect = false
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const scaledIntensity = intensity / 10 // Scale to a 0-1 range
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Calculate transform values based on direction and intensity
  const yValue = direction === 'up' || direction === 'down' 
    ? useTransform(
        scrollYProgress, 
        [0, 1], 
        [direction === 'down' ? -100 * scaledIntensity : 100 * scaledIntensity, 0]
      )
    : 0
    
  const xValue = direction === 'left' || direction === 'right'
    ? useTransform(
        scrollYProgress, 
        [0, 1], 
        [direction === 'right' ? -100 * scaledIntensity : 100 * scaledIntensity, 0]
      )
    : 0

  const scale = zoomEffect 
    ? useTransform(scrollYProgress, [0, 0.5], [1, 1 + (0.2 * scaledIntensity)])
    : undefined

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ 
          y: yValue, 
          x: xValue, 
          scale: scale,
          opacity 
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}