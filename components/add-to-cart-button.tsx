"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  productId: string
  className?: string
}

export default function AddToCartButton({ productId, className }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would call your API to add the product to the cart
    // const response = await fetch('/api/cart', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ productId, quantity: 1 }),
    // })

    setIsLoading(false)

    toast({
      description: "Product added to your cart",
    })
  }

  return (
    <Button onClick={handleAddToCart} disabled={isLoading} className={className}>
      <ShoppingCart className="h-5 w-5 mr-2" />
      {isLoading ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
