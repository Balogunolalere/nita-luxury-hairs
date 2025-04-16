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
  {
    id: "2",
    name: "Peruvian Straight Wig",
    price: 299.99,
    description:
      "Our Peruvian Straight Wig is made with premium human hair and features a lace front for a natural-looking hairline. This wig offers a sleek, straight style that can be customized to your preferences.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Straight+Wig+1",
      "/placeholder.svg?height=600&width=600&text=Straight+Wig+2",
    ],
    category: "Wigs",
    featured: false,
    onSale: false,
    specifications: {
      material: "100% Human Hair",
      capSize: "Medium",
      lengths: ['14"', '16"', '18"', '20"'],
      colors: ["Natural Black", "Off Black", "Dark Brown"],
      texture: "Straight",
      origin: "Peru",
    },
    stock: 8,
    rating: 4.6,
    reviewCount: 18,
  },
  {
    id: "3",
    name: "Malaysian Curly Bundle",
    price: 159.99,
    description:
      "Our Malaysian Curly Bundle features beautiful, bouncy curls that maintain their shape. Made with 100% virgin human hair, these bundles can be dyed, bleached, and styled to your liking.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Curly+Bundle+1",
      "/placeholder.svg?height=600&width=600&text=Curly+Bundle+2",
    ],
    category: "Extensions",
    featured: false,
    onSale: false,
    specifications: {
      material: "100% Virgin Human Hair",
      weight: "100g per bundle",
      lengths: ['12"', '14"', '16"', '18"', '20"'],
      colors: ["Natural Black"],
      texture: "Curly",
      origin: "Malaysia",
    },
    stock: 12,
    rating: 4.7,
    reviewCount: 15,
  },
  {
    id: "4",
    name: "Lace Frontal Closure",
    price: 129.99,
    description:
      "Our Lace Frontal Closure provides a seamless blend with your natural hairline. Made with high-quality human hair, this frontal can be customized to create the perfect look for your installation.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Frontal+1",
      "/placeholder.svg?height=600&width=600&text=Frontal+2",
    ],
    category: "Accessories",
    featured: false,
    onSale: false,
    specifications: {
      material: "100% Human Hair",
      size: "13x4 inches",
      lengths: ['10"', '12"', '14"', '16"', '18"'],
      colors: ["Natural Black"],
      texture: "Straight, Body Wave, Curly",
      origin: "Various",
    },
    stock: 10,
    rating: 4.5,
    reviewCount: 12,
  },
  {
    id: "5",
    name: "Indian Deep Wave",
    price: 189.99,
    description:
      "Our Indian Deep Wave hair offers luxurious, deep waves that create a stunning, voluminous look. This premium human hair can be styled, dyed, and treated just like your natural hair.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Deep+Wave+1",
      "/placeholder.svg?height=600&width=600&text=Deep+Wave+2",
    ],
    category: "Extensions",
    featured: true,
    onSale: false,
    specifications: {
      material: "100% Human Hair",
      weight: "100g per bundle",
      lengths: ['12"', '14"', '16"', '18"', '20"', '22"'],
      colors: ["Natural Black", "Dark Brown"],
      texture: "Deep Wave",
      origin: "India",
    },
    stock: 14,
    rating: 4.9,
    reviewCount: 20,
  },
  {
    id: "6",
    name: "Synthetic Bob Wig",
    price: 99.99,
    salePrice: 79.99,
    description:
      "Our Synthetic Bob Wig offers an affordable, stylish option for those looking for a quick style change. This wig features a classic bob cut that frames the face beautifully.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Bob+Wig+1",
      "/placeholder.svg?height=600&width=600&text=Bob+Wig+2",
    ],
    category: "Wigs",
    featured: false,
    onSale: true,
    specifications: {
      material: "High-Quality Synthetic Fiber",
      capSize: "Adjustable",
      length: '12"',
      colors: ["Black", "Brown", "Auburn", "Blonde"],
      texture: "Straight",
      heatFriendly: "Up to 320°F",
    },
    stock: 20,
    rating: 4.3,
    reviewCount: 14,
  },
  {
    id: "7",
    name: "Hair Styling Tools Set",
    price: 79.99,
    description:
      "Our comprehensive Hair Styling Tools Set includes everything you need to maintain and style your hair extensions and wigs. This set includes a wide-tooth comb, edge brush, detangling brush, and more.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Tools+Set+1",
      "/placeholder.svg?height=600&width=600&text=Tools+Set+2",
    ],
    category: "Accessories",
    featured: false,
    onSale: false,
    specifications: {
      contents: "Wide-tooth comb, Edge brush, Detangling brush, Hair clips, Styling spray",
      material: "High-quality plastic and nylon",
      suitable: "All hair types",
    },
    stock: 25,
    rating: 4.4,
    reviewCount: 8,
  },
  {
    id: "8",
    name: "Brazilian Straight Bundle",
    price: 149.99,
    description:
      "Our Brazilian Straight Bundle features silky smooth, straight hair that lies flat and looks natural. Made with 100% human hair, these bundles are versatile and can be styled to your preference.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Straight+Bundle+1",
      "/placeholder.svg?height=600&width=600&text=Straight+Bundle+2",
    ],
    category: "Extensions",
    featured: true,
    onSale: false,
    specifications: {
      material: "100% Human Hair",
      weight: "100g per bundle",
      lengths: ['14"', '16"', '18"', '20"', '22"', '24"'],
      colors: ["Natural Black"],
      texture: "Straight",
      origin: "Brazil",
    },
    stock: 16,
    rating: 4.7,
    reviewCount: 22,
  },
  {
    id: "9",
    name: "Lace Front Wig",
    price: 299.99,
    salePrice: 249.99,
    description: 
      "Our premium Lace Front Wig provides a natural-looking hairline and comfortable fit. Made with 100% human hair, this wig can be styled, dyed, and treated like your natural hair.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Lace+Front+1",
      "/placeholder.svg?height=600&width=600&text=Lace+Front+2",
    ],
    category: "Wigs",
    featured: true,
    onSale: true,
    specifications: {
      material: "100% Human Hair",
      capSize: "Adjustable",
      lengths: ['16"', '18"', '20"', '22"'],
      colors: ["Natural Black", "Off Black"],
      texture: "Straight, Body Wave, Curly",
      density: "150%",
    },
    stock: 10,
    rating: 4.8,
    reviewCount: 16,
  },
  {
    id: "10",
    name: "Curly Clip-ins",
    price: 149.99,
    description:
      "Our Curly Clip-ins offer a quick and easy way to add volume and length to your hair. These clip-ins blend seamlessly with your natural hair and can be removed easily at the end of the day.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Clip+ins+1",
      "/placeholder.svg?height=600&width=600&text=Clip+ins+2",
    ],
    category: "Accessories",
    featured: false,
    onSale: false,
    specifications: {
      material: "100% Human Hair",
      weight: "120g per set",
      lengths: ['14"', '16"', '18"', '20"'],
      colors: ["Natural Black", "Dark Brown"],
      texture: "Curly",
      pieces: "7 pieces per set",
    },
    stock: 18,
    rating: 4.6,
    reviewCount: 13,
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
            {product.onSale && product.salePrice ? (
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
            {product.specifications.lengths && Array.isArray(product.specifications.lengths) && (
              <div>
                <label htmlFor="length" className="block text-sm font-medium mb-1">
                  Length
                </label>
                <select
                  id="length"
                  className="w-full border rounded-md p-2"
                  defaultValue={product.specifications.lengths[Math.min(3, product.specifications.lengths.length - 1)]}
                >
                  {product.specifications.lengths.map((length) => (
                    <option key={length} value={length}>
                      {length}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {product.specifications.colors && Array.isArray(product.specifications.colors) && (
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
            )}

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
                Our {product.name} is sourced ethically and processed with care to maintain its natural
                texture and shine. {product.category === "Extensions" && "The hair is double wefted to minimize shedding and ensure durability."}
              </p>
              <p>
                {product.category === "Extensions" || product.category === "Wigs" 
                  ? "This product can be styled with heat tools (check specifications for temperature limits), allowing you to customize your look. With proper care, this product can last up to 12 months."
                  : "This is an essential addition to your hair care collection to help maintain the quality and longevity of your hair products."}
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
