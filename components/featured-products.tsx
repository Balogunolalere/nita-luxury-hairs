import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data for featured products
const featuredProducts = [
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
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button asChild variant="outline">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <div className="mb-1 text-sm text-muted-foreground">{product.category}</div>
                <Link href={`/product/${product.id}`} className="hover:underline">
                  <h3 className="font-semibold">{product.name}</h3>
                </Link>
                <div className="mt-2 font-medium">${product.price.toFixed(2)}</div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/product/${product.id}`}>View Product</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
