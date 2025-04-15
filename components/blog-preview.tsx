import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "How to Care for Your Hair Extensions",
    excerpt:
      "Learn the best practices for maintaining your hair extensions to ensure they last longer and look beautiful.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 15, 2023",
    slug: "how-to-care-for-your-hair-extensions",
  },
  {
    id: "2",
    title: "Summer Hair Trends for 2023",
    excerpt:
      "Discover the hottest hair trends for this summer season and how to achieve these looks with our products.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 28, 2023",
    slug: "summer-hair-trends-2023",
  },
  {
    id: "3",
    title: "Choosing the Right Wig for Your Face Shape",
    excerpt: "Find out which wig styles complement different face shapes to enhance your natural beauty.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2023",
    slug: "choosing-right-wig-for-face-shape",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-3xl font-bold">Latest from Our Blog</h2>
          <Button asChild variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="mb-2 text-sm text-muted-foreground">{post.date}</div>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                </Link>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <Button asChild variant="link" className="p-0">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
