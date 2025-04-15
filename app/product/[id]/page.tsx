import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductReviews from "@/components/product-reviews"
import RelatedProducts from "@/components/related-products"

// Mock product data - replace with actual data from your database
const mockProducts = [
  {
    id: "1",
    name: "Brazilian Body Wave",
    price: 199.99,
    salePrice: 169.99,
    description:
      "Our premium Brazilian Body Wave hair extensions are made from 100% human hair. These extensions are soft, silky, and tangle-free, providing a natural look and feel. They can be dyed, bleached, and styled just like your natural hair.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Body+Wave+1",
      "/placeholder.svg?height=600&width=600&text=Body+Wave+2",
      "/placeholder.svg?height=600&width=600&text=Body+Wave+3",
    ],
    category: "Extensions",
    featured: true,
    onSale: true,
    specifications: {
      material: "100% Human Hair",
      weight: "100g per bundle",
      lengths: ['10"', '12"', '14"', '16"', '18"', '20"', '22"', '24"'],
      colors: ["Natural Black", "Dark Brown"],
      texture: "Body Wave",
      origin: "Brazil",
    },
    stock: 15,
    rating: 4.8,
    reviewCount: 24,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, fetch the product data from your database
  const product = mockProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-10">
      <Link href="/shop" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center">
            {product.onSale ? (
              <>
                <span className="text-3xl font-bold">${product.salePrice}</span>
                <span className="ml-2 text-xl text-muted-foreground line-through">${product.price}</span>
                <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                  Save ${(product.price - product.salePrice).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold">${product.price}</span>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div>
              <label htmlFor="length" className="block text-sm font-medium mb-1">
                Length
              </label>
              <select
                id="length"
                className="w-full border rounded-md p-2"
                defaultValue={product.specifications.lengths[3]}
              >
                {product.specifications.lengths.map((length) => (
                  <option key={length} value={length}>
                    {length}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="color" className="block text-sm font-medium mb-1">
                Color
              </label>
              <select
                id="color"
                className="w-full border rounded-md p-2"
                defaultValue={product.specifications.colors[0]}
              >
                {product.specifications.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                Quantity
              </label>
              <select id="quantity" className="w-full border rounded-md p-2" defaultValue="1">
                {Array.from({ length: Math.min(10, product.stock) }).map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AddToCartButton productId={product.id} className="flex-1" />
            <Button variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center">
              <Truck className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-6 border rounded-b-md">
            <div className="prose max-w-none">
              <p>{product.description}</p>
              <p>
                Our Brazilian Body Wave hair is sourced ethically and processed with care to maintain its natural
                texture and shine. The hair is double wefted to minimize shedding and ensure durability.
              </p>
              <p>
                These extensions can be styled with heat tools up to 450°F, allowing you to straighten, curl, or wave
                the hair to achieve your desired look. With proper care, these extensions can last up to 12 months.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="p-6 border rounded-b-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b pb-2">
                  <span className="font-medium capitalize">{key}: </span>
                  <span className="text-muted-foreground">{Array.isArray(value) ? value.join(", ") : value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 border rounded-b-md">
            <ProductReviews productId={product.id} />
          </TabsContent>
        </Tabs>
      </div>

      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}
