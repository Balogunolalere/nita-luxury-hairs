'use client'

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock blog posts data
const blogPosts = [
  {
    id: "1",
    title: "How to Care for Your Hair Extensions",
    excerpt:
      "Learn the best practices for maintaining your hair extensions to ensure they last longer and look their best.",
    content: `
      <p>Hair extensions are a significant investment, and proper care is essential to ensure they last as long as possible while maintaining their beautiful appearance. Here are some tips to help you care for your hair extensions:</p>
      
      <h2>Daily Maintenance</h2>
      <p>Brush your extensions gently at least twice a day using a soft-bristle brush or a brush specifically designed for extensions. Start from the tips and work your way up to avoid pulling on the attachments.</p>
      
      <h2>Washing</h2>
      <p>Wash your extensions every 7-10 days or when product buildup becomes noticeable. Use sulfate-free, alcohol-free shampoo and conditioner specifically formulated for extensions. Apply products gently, avoiding the attachment points.</p>
      
      <h2>Drying</h2>
      <p>After washing, gently squeeze out excess water with a towel. Never rub or twist the hair. Allow extensions to air dry whenever possible. If you must use a blow dryer, use a heat protectant and the lowest heat setting.</p>
      
      <h2>Styling</h2>
      <p>Minimize the use of heat styling tools. When necessary, always use a heat protectant spray and keep the temperature below 350°F. Avoid applying heat directly to the attachment points.</p>
      
      <h2>Sleeping</h2>
      <p>Braid your extensions loosely or put them in a loose ponytail before sleeping to prevent tangling. Consider using a silk or satin pillowcase, which creates less friction and helps maintain moisture in the hair.</p>
      
      <h2>Swimming and Exercise</h2>
      <p>Tie your hair in a braid or ponytail before swimming or exercising. Chlorine, salt water, and sweat can damage extensions. Rinse your hair with fresh water immediately after swimming.</p>
      
      <h2>Regular Maintenance</h2>
      <p>Visit your stylist every 4-6 weeks for maintenance. They can check the attachments, reposition the extensions if necessary, and trim any split ends.</p>
      
      <p>By following these care tips, you can extend the life of your hair extensions and keep them looking beautiful for months to come.</p>
    `,
    image: "/placeholder.svg?height=500&width=1000&text=Hair+Extensions+Care",
    date: "June 15, 2023",
    author: "Nita Johnson",
    slug: "how-to-care-for-your-hair-extensions",
    category: "Hair Care",
  },
  {
    id: "2",
    title: "Top 5 Summer Hairstyles for 2023",
    excerpt: "Discover the hottest hairstyle trends for summer 2023 and learn how to achieve these looks at home.",
    content: `
      <p>Summer is here, and it's time to refresh your look with the season's hottest hairstyles. Here are the top 5 summer hairstyles for 2023 that are both stylish and practical for the warmer months:</p>
      
      <h2>1. Beach Waves</h2>
      <p>Effortless beach waves continue to be a summer staple. To achieve this look, apply a sea salt spray to damp hair, scrunch, and let air dry. For more defined waves, use a curling wand with a 1-inch barrel, wrapping sections of hair around it in alternating directions.</p>
      
      <h2>2. Sleek Bob</h2>
      <p>The sleek bob is making a major comeback this summer. This chin to shoulder-length cut is perfect for hot weather as it keeps hair off your neck. Style it straight with a flat iron and add a shine serum for that glossy finish.</p>
      
      <h2>3. High Ponytail with Extensions</h2>
      <p>Elevate your ponytail game with extensions for added length and volume. Secure your natural hair in a high ponytail, then wrap an extension piece around the base to conceal the elastic. This style is perfect for both casual days and special occasions.</p>
      
      <h2>4. Braided Crown</h2>
      <p>The braided crown is both elegant and functional, keeping hair off your face during hot days. Create two Dutch braids on either side of your head and pin them across the top to form a crown. This style works well with both natural hair and extensions.</p>
      
      <h2>5. Textured Pixie</h2>
      <p>For those brave enough for a big change, the textured pixie cut is trending this summer. This low-maintenance style is perfect for hot weather and can be styled with a bit of texturizing paste for a tousled, effortless look.</p>
      
      <p>Remember, the key to any great summer hairstyle is to embrace your natural texture while keeping your hair healthy with regular trims and proper hydration. Don't forget to use products with UV protection to shield your hair from sun damage!</p>
    `,
    image: "/placeholder.svg?height=500&width=1000&text=Summer+Hairstyles",
    date: "May 28, 2023",
    author: "Lisa Smith",
    slug: "top-5-summer-hairstyles-for-2023",
    category: "Styling Tips",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="container py-10">
      <Link href="/blog" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Blog
      </Link>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative h-[400px] mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-muted-foreground mb-6">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <span className="bg-muted px-2 py-1 rounded text-xs">{post.category}</span>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <Separator className="my-8" />
        
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              Back to Blog
            </Link>
          </Button>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Share:</span>
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
