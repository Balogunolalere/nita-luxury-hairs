import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock products data
const mockProducts = [
  {
    id: "2",
    name: "Peruvian Straight Hair",
    price: 179.99,
    image: "/placeholder.svg?height=400&width=400&text=Straight+Hair",
    category: "Extensions",
  },
  {
    id: "3",
    name: "Lace Front Wig",
    price: 299.99,
    salePrice: 249.99,
    image: "/placeholder.svg?height=400&width=400&text=Lace+Front",
    category: "Wigs",
  },
  {
    id: "4",
    name: "Curly Clip-ins",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400&text=Clip+ins",
    category: "Accessories",
  },
]

interface RelatedProductsProps {
  currentProductId: string
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Filter out the current product
  const relatedProducts = mockProducts.filter((product) => product.id !== currentProductId)

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Link href={`/product/${product.id}`}>
              <div className="relative h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <div className="flex items-center gap-2">
                  {product.salePrice ? (
                    <>
                      <span className="font-semibold">${product.salePrice}</span>
                      <span className="text-muted-foreground line-through text-sm">${product.price}</span>
                    </>
                  ) : (
                    <span className="font-semibold">${product.price}</span>
                  )}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}
