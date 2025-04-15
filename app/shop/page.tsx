'use client'

import { useState } from "react"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { Filter, SlidersHorizontal } from "lucide-react"

// Mock data for products
const products = [
  {
    id: "1",
    name: "Brazilian Body Wave",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Extensions",
  },
  {
    id: "2",
    name: "Peruvian Straight Wig",
    price: 299.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Wigs",
  },
  {
    id: "3",
    name: "Malaysian Curly Bundle",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Extensions",
  },
  {
    id: "4",
    name: "Lace Frontal Closure",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "5",
    name: "Indian Deep Wave",
    price: 189.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Extensions",
  },
  {
    id: "6",
    name: "Synthetic Bob Wig",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Wigs",
  },
  {
    id: "7",
    name: "Hair Styling Tools Set",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "8",
    name: "Brazilian Straight Bundle",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Extensions",
  },
]

export default function ShopPage() {
  const [isGridView, setIsGridView] = useState(true)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col space-y-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Shop All Products
            </h1>
            <p className="mt-2 text-muted-foreground">
              Discover our premium collection of luxury hair products
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <ScrollArea className="h-[calc(100vh-4rem)]">
                  <ProductFilters />
                </ScrollArea>
              </SheetContent>
            </Sheet>
            
            <div className="flex-1 lg:flex-none">
              <ProductSort />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block lg:col-span-3"
          >
            <div className="sticky top-24">
              <ProductFilters />
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 lg:col-span-9"
          >
            <ProductGrid products={products} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
