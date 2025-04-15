'use client'

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import { Heart, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted/30">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={item}
            layout
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted/30">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-between gap-2">
                  <Button size="sm" variant="secondary" className="flex-1 bg-white/90 text-black hover:bg-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200/20 backdrop-blur">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-1">
              <Link href={`/product/${product.id}`} className="group/link">
                <h3 className="font-medium text-base group-hover/link:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-lg font-semibold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
