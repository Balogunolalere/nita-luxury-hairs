"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
  color?: string
  height?: number
  position?: "top" | "bottom"
}

export function ScrollProgress({
  className,
  color = "#000",
  height = 3,
  position = "top"
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Only show the progress bar after scrolling a bit (100px)
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.div 
      className={cn(
        "fixed left-0 right-0 z-50 origin-left",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{ 
        height,
        backgroundColor: color,
        scaleX: scrollYProgress,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s"
      }}
    />
  )
}