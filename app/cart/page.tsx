"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

// Mock cart items
const initialCartItems = [
  {
    id: "1",
    productId: "1",
    name: "Brazilian Body Wave",
    price: 169.99,
    image: "/placeholder.svg?height=200&width=200&text=Body+Wave",
    quantity: 1,
    options: {
      length: '16"',
      color: "Natural Black",
    },
  },
  {
    id: "2",
    productId: "3",
    name: "Lace Front Wig",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200&text=Lace+Front",
    quantity: 1,
    options: {
      length: '18"',
      color: "Dark Brown",
    },
  },
]

export default function CartPage() {
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const total = subtotal + shipping

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))

    toast({
      description: "Item removed from cart",
    })
  }

  const applyPromoCode = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!promoCode.trim()) return

    setIsApplyingPromo(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsApplyingPromo(false)

    toast({
      variant: "destructive",
      description: "Invalid promo code",
    })

    setPromoCode("")
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 border-b pb-6">
                  <div className="relative h-32 w-32 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <Link href={`/product/${item.productId}`} className="font-semibold hover:underline">
                        {item.name}
                      </Link>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Length: {item.options.length}</p>
                      <p>Color: {item.options.color}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-3 py-1 border-r"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          className="px-3 py-1 border-l"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link href="/shop" className="text-sm flex items-center hover:underline">
                <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                Continue Shopping
              </Link>
              <Button variant="outline" onClick={() => setCartItems([])}>
                Clear Cart
              </Button>
            </div>
          </div>

          <div>
            <div className="bg-muted/50 rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-semibold">Order Summary</h2>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={applyPromoCode} className="flex gap-2">
                <Input placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                <Button type="submit" variant="outline" disabled={isApplyingPromo}>
                  {isApplyingPromo ? "Applying..." : "Apply"}
                </Button>
              </form>

              <Button asChild className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <div className="text-xs text-muted-foreground">
                <p>Free shipping on orders over $100</p>
                <p>30-day money-back guarantee</p>
                <p>Secure payment processing</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 space-y-6">
          <div className="flex justify-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Looks like you haven't added any products to your cart yet. Browse our collection to find something you'll
            love!
          </p>
          <Button asChild className="mt-4">
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
