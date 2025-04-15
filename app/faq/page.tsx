"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "products", label: "Products", color: "bg-pink-100 text-pink-800" },
  { id: "care", label: "Hair Care", color: "bg-purple-100 text-purple-800" },
  { id: "shipping", label: "Shipping", color: "bg-blue-100 text-blue-800" },
  { id: "returns", label: "Returns", color: "bg-green-100 text-green-800" },
  { id: "ordering", label: "Ordering", color: "bg-orange-100 text-orange-800" },
  { id: "wholesale", label: "Wholesale", color: "bg-teal-100 text-teal-800" }
]

const faqs = [
  {
    category: "products",
    question: "What types of hair do you offer?",
    answer: "We offer a premium selection of 100% human hair products including:\n\n• Brazilian Hair (Known for versatility and shine)\n• Peruvian Hair (Perfect for natural-looking styles)\n• Malaysian Hair (Excellent for sleek looks)\n• Indian Hair (Great for thick, lustrous styles)\n\nAll our hair is ethically sourced and undergoes rigorous quality testing."
  },
  {
    category: "products",
    question: "What is the difference between your hair types?",
    answer: "Each hair type has unique characteristics:\n\n• Brazilian Hair: Versatile, medium thickness, great for all styles\n• Peruvian Hair: Lightweight, natural luster, blends well with most textures\n• Malaysian Hair: Naturally straight, high shine, perfect for sleek styles\n• Indian Hair: Thick, durable, excellent for voluminous looks"
  },
  {
    category: "care",
    question: "How do I maintain my hair extensions?",
    answer: "For optimal longevity:\n\n1. Wash every 2-3 weeks with sulfate-free products\n2. Deep condition regularly\n3. Always use heat protectant (up to 450°F)\n4. Brush gently from ends to roots\n5. Store properly when not in use\n6. Avoid sleeping with wet hair\n7. Use silk or satin pillowcases\n\nDownload our complete care guide for detailed instructions."
  },
  {
    category: "care",
    question: "What products do you recommend?",
    answer: "We recommend:\n\n• Shampoo: Sulfate-free cleansing shampoo\n• Conditioner: Moisture-rich conditioning treatment\n• Leave-in: Lightweight leave-in conditioner\n• Heat Protectant: Thermal protection spray\n• Treatment: Deep conditioning mask\n\nAll these products are available in our store."
  },
  {
    category: "shipping",
    question: "What are your shipping options?",
    answer: "We offer multiple shipping methods:\n\n• Standard (5-7 business days): Free on orders over $100\n• Express (2-3 business days): $15\n• International (7-14 business days): Varies by location\n\nAll orders include tracking and insurance."
  },
  {
    category: "returns",
    question: "What is your return policy?",
    answer: "We offer a comprehensive 30-day return policy:\n\n• Items must be unused and in original packaging\n• Custom orders are final sale\n• Return shipping is customer responsibility\n• Refunds processed within 5-7 business days\n• Store credit option available\n• Free returns for defective items"
  },
  {
    category: "ordering",
    question: "How do I choose the right length and texture?",
    answer: "To select the perfect hair:\n\n1. Measure your natural hair for desired length\n2. Consider your lifestyle and maintenance time\n3. Match your natural texture for seamless blending\n4. Review our texture guide with real-client photos\n5. Book a virtual consultation for expert advice"
  },
  {
    category: "ordering",
    question: "Do you offer payment plans?",
    answer: "Yes! We offer flexible payment options:\n\n• Klarna: 4 interest-free payments\n• Afterpay: Split into 4 payments\n• Shop Pay: 4 interest-free installments\n• PayPal Credit: 6 months interest-free\n\nAll options available at checkout."
  },
  {
    category: "wholesale",
    question: "How does your wholesale program work?",
    answer: "Our wholesale program offers:\n\n• Competitive bulk pricing\n• Minimum order quantity: 10 units\n• Exclusive access to new collections\n• Priority shipping\n• Dedicated account manager\n• Marketing materials\n• Training resources\n\nContact our wholesale team for detailed information."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our luxury hair products and services
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search FAQs..." 
              className="pl-10 h-12 bg-background/50 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Category Filters */}
        <ScrollArea className="max-w-4xl mx-auto">
          <div className="flex gap-3 pb-4">
            {categories.map((category) => (
              <Badge key={category.id} variant="outline" className={`${category.color} cursor-pointer px-4 py-2`}>
                {category.label}
              </Badge>
            ))}
          </div>
        </ScrollArea>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="all">All Questions</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="care">Hair Care</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border rounded-lg bg-card hover:bg-accent/5 transition-colors"
                  >
                    <AccordionTrigger className="px-4 py-2 text-left">
                      <div className="flex items-start gap-4">
                        <Badge variant="outline" className={categories.find(c => c.id === faq.category)?.color}>
                          {categories.find(c => c.id === faq.category)?.label}
                        </Badge>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Other tab contents would be similar */}
          </Tabs>
        </div>

        {/* Help Section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-pink-500/5 border backdrop-blur-sm">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Still have questions?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our hair experts are here to help you find the perfect products and answer any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}