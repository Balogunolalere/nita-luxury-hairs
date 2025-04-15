"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItem {
  year: string
  title: string
  description: string
  image?: string
}

interface InteractiveTimelineProps {
  items: TimelineItem[]
  className?: string
}

export function InteractiveTimeline({ items, className }: InteractiveTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={cn("w-full py-12", className)}>
      {/* Timeline indicator */}
      <div className="relative flex justify-between items-center mb-12 px-4">
        <div className="absolute h-1 bg-muted w-full top-1/2 -translate-y-1/2" />
        
        {items.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative rounded-full w-12 h-12 flex items-center justify-center text-sm font-medium z-10 transition-all",
              activeIndex === index 
                ? "bg-primary text-primary-foreground shadow-lg scale-110" 
                : "bg-muted-foreground/10 text-muted-foreground hover:bg-muted-foreground/20"
            )}
            whileTap={{ scale: 0.95 }}
            initial={false}
            animate={{ scale: activeIndex === index ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {item.year}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <div className="relative overflow-hidden min-h-[300px]">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: activeIndex === index ? 1 : 0,
              x: activeIndex === index ? 0 : 100,
              pointerEvents: activeIndex === index ? "auto" : "none"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              
              {item.image && (
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                  {/* Replace with your actual Image component usage */}
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}