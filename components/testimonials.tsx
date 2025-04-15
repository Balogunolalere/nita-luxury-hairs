import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for testimonials
const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Model",
    content:
      "I've tried many hair extensions over the years, but Nita Luxury Hairs are by far the best quality I've ever used. They blend perfectly with my natural hair and last for months with proper care.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Michelle Davis",
    role: "Hair Stylist",
    content:
      "As a professional stylist, I recommend Nita Luxury Hairs to all my clients. The quality is exceptional, and they hold up beautifully to styling, coloring, and regular wear.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Jessica Williams",
    role: "Influencer",
    content:
      "These extensions have completely transformed my look! I get compliments everywhere I go, and no one can tell they're not my natural hair. Worth every penny!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="flex-1 text-muted-foreground">"{testimonial.content}"</blockquote>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 15.585l-6.918 3.636 1.322-7.702L.489 7.91l7.713-1.12L10 0l1.798 6.79 7.713 1.12-4.915 4.609 1.322 7.702z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
