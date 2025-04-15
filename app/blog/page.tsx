import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock blog posts data
const blogPosts = [
  {
    id: "1",
    title: "How to Care for Your Hair Extensions",
    excerpt:
      "Learn the best practices for maintaining your hair extensions to ensure they last longer and look their best.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    image: "/placeholder.svg?height=300&width=500&text=Hair+Extensions+Care",
    date: "June 15, 2023",
    author: "Nita Johnson",
    slug: "how-to-care-for-your-hair-extensions",
    category: "Hair Care",
  },
  {
    id: "2",
    title: "Top 5 Summer Hairstyles for 2023",
    excerpt: "Discover the hottest hairstyle trends for summer 2023 and learn how to achieve these looks at home.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    image: "/placeholder.svg?height=300&width=500&text=Summer+Hairstyles",
    date: "May 28, 2023",
    author: "Lisa Smith",
    slug: "top-5-summer-hairstyles-for-2023",
    category: "Styling Tips",
  },
  {
    id: "3",
    title: "Choosing the Right Wig for Your Face Shape",
    excerpt: "Find out which wig styles complement different face shapes and how to select the perfect one for you.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    image: "/placeholder.svg?height=300&width=500&text=Wig+Selection",
    date: "April 10, 2023",
    author: "Nita Johnson",
    slug: "choosing-the-right-wig-for-your-face-shape",
    category: "Wigs",
  },
  {
    id: "4",
    title: "The Benefits of Using Natural Hair Products",
    excerpt: "Explore the advantages of using natural and organic hair products for healthier hair and scalp.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    image: "/placeholder.svg?height=300&width=500&text=Natural+Products",
    date: "March 22, 2023",
    author: "Michelle Davis",
    slug: "benefits-of-using-natural-hair-products",
    category: "Hair Care",
  },
  {
    id: "5",
    title: "How to Properly Wash and Condition Your Hair Extensions",
    excerpt:
      "Learn the correct techniques for washing and conditioning your hair extensions to maintain their quality.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    image: "/placeholder.svg?height=300&width=500&text=Washing+Extensions",
    date: "February 15, 2023",
    author: "Nita Johnson",
    slug: "how-to-properly-wash-and-condition-your-hair-extensions",
    category: "Hair Care",
  },
  {
    id: "6",
    title: "The History of Hair Extensions and Wigs",
    excerpt: "Discover the fascinating history of hair extensions and wigs from ancient times to modern day.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    image: "/placeholder.svg?height=300&width=500&text=Hair+History",
    date: "January 5, 2023",
    author: "Lisa Smith",
    slug: "history-of-hair-extensions-and-wigs",
    category: "Education",
  },
]

// Mock categories
const categories = [
  { name: "Hair Care", count: 3 },
  { name: "Styling Tips", count: 1 },
  { name: "Wigs", count: 1 },
  { name: "Education", count: 1 },
]

export const metadata = {
  title: "Blog | Nita Luxury Hairs",
  description: "Hair care tips, styling advice, and product updates",
}

export default function BlogPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.date} • by {post.author}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  </Link>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="px-0">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-muted/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Search</h2>
            <div className="flex gap-2">
              <Input placeholder="Search blog posts..." />
              <Button type="submit">Search</Button>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                    className="flex justify-between hover:underline"
                  >
                    <span>{category.name}</span>
                    <span className="text-muted-foreground">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
            <p className="text-muted-foreground mb-4">
              Get the latest blog posts and hair care tips delivered to your inbox.
            </p>
            <form className="space-y-4">
              <Input placeholder="Your email address" type="email" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
