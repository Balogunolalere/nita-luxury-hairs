"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { fadeIn, slideInLeft, slideInRight, slideUp, staggerContainer, scaleUp } from "@/components/animated-layout"

export default function AboutPage() {
  // Reference for parallax hero effect
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax values
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Timeline data
  const timelineItems = [
    {
      year: "2015",
      title: "Our Beginning",
      description: "Nita Luxury Hairs was founded by Nita Johnson to provide premium quality hair extensions that were missing in the market.",
      image: "/placeholder.svg?height=400&width=600&text=2015"
    },
    {
      year: "2018",
      title: "Growing Strong",
      description: "We expanded our operations to serve customers globally and opened our first flagship store.",
      image: "/placeholder.svg?height=400&width=600&text=2018"
    },
    {
      year: "2021",
      title: "Innovation Era",
      description: "We launched our revolutionary premium hair care line to complement our hair extensions and wigs.",
      image: "/placeholder.svg?height=400&width=600&text=2021"
    },
    {
      year: "2025",
      title: "New Horizons",
      description: "We continue to lead the industry with our commitment to quality, ethical sourcing, and exceptional customer service.",
      image: "/placeholder.svg?height=400&width=600&text=2025"
    }
  ]

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress color="var(--primary)" height={4} />
      
      {/* Hero Section with Parallax Effect */}
      <section 
        ref={containerRef} 
        className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-black"
      >
        {/* Background parallax image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroImageY }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image 
            src="/placeholder.svg?height=1000&width=2000&text=Nita+Luxury+Hairs"
            alt="Nita Luxury Hairs banner"
            fill
            className="object-cover" 
            priority
          />
        </motion.div>
        
        {/* Hero content with opposite parallax motion */}
        <motion.div 
          className="container relative z-20 text-white text-center px-4"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Nita Luxury Hairs
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our journey of crafting premium hair products since 2015
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              asChild
              size="lg" 
              variant="default"
              className="rounded-full px-8 text-lg bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              <Link href="/shop">Our Collection</Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-white/80 text-sm mb-2">Scroll to discover</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main content with staggered animations */}
      <div className="container py-20 px-4 md:px-6">
        {/* Vision Statement */}
        <ParallaxSection direction="up" intensity={3} className="mb-24">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-sm uppercase tracking-widest text-primary font-medium block mb-3">Our Vision</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">Transforming how people experience hair</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe everyone deserves to look and feel their best, with hair that enhances their natural beauty and expresses their unique style.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Our Story Section - with side-by-side layout and alternating animations */}
        <motion.section 
          className="mb-24 py-8 rounded-3xl bg-gradient-to-br from-muted/30 to-background overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div variants={slideInLeft} className="px-8">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Our Story
              </span>
              <h2 className="text-3xl font-bold mb-6">Inspired by passion, driven by excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nita Luxury Hairs was founded in 2015 by Nita Johnson, a hair stylist with over 15 years of experience in
                  the beauty industry. Frustrated by the lack of high-quality hair extensions available to her clients, Nita
                  decided to create her own line of premium hair products.
                </p>
                <p>
                  What started as a small operation in Nita's home has grown into a thriving business with customers
                  worldwide. Our commitment to quality and customer satisfaction has remained unchanged since day one.
                </p>
                <p>
                  Today, Nita Luxury Hairs is recognized as a leading provider of premium hair extensions, wigs, and
                  accessories, trusted by professional stylists and individual customers alike.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={slideInRight} className="relative h-[500px] w-full overflow-hidden rounded-l-3xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Our+Story"
                alt="Nita Johnson, Founder"
                fill
                className="object-cover"
              />
              
              {/* Floating accent elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 backdrop-blur-xl rounded-full z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -top-6 right-20 w-16 h-16 bg-primary/30 backdrop-blur-xl rounded-full z-10"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Interactive Timeline Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Nita Luxury Timeline</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our journey from a small home business to a global luxury hair brand
              </p>
            </motion.div>
          </div>
          
          <InteractiveTimeline items={timelineItems} />
        </section>
        
        {/* Our Mission Section - with glass morphism design */}
        <ParallaxSection 
          direction="up" 
          intensity={2}
          className="mb-24"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm z-0" />
            <div className="absolute inset-0 bg-dot-pattern opacity-5" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
              <motion.div
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/20 text-primary mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold mb-8">What Drives Us Forward</h2>
                <p className="text-2xl italic font-light mb-6">
                  "To provide the highest quality hair products that enhance natural beauty and boost confidence, while
                  maintaining ethical sourcing practices and exceptional customer service."
                </p>
                <div className="w-20 h-1 bg-primary mx-auto" />
              </motion.div>
            </div>
          </div>
        </ParallaxSection>

        {/* Our Values Section - with modern card design */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The core principles that guide everything we do
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Quality",
                description: "We source only the finest 100% human hair and subject our products to rigorous quality control to ensure they meet our high standards.",
                icon: "🌟"
              },
              {
                title: "Ethical Sourcing",
                description: "We ensure that all our hair is ethically sourced, with fair compensation to donors and transparent supply chain practices.",
                icon: "🤝"
              },
              {
                title: "Customer Satisfaction",
                description: "We are committed to providing exceptional customer service and ensuring that every customer is completely satisfied with their purchase.",
                icon: "♥️"
              }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border border-muted p-8 hover:shadow-lg transition-all duration-300"
                variants={slideUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full" />
                <div className="absolute right-10 bottom-10 w-16 h-16 bg-primary/10 rounded-full" />
                
                <span className="text-4xl mb-6 block">{value.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
                
                <div className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Our Team Section - with modern design */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The People Behind Our Success</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the passionate experts who make Nita Luxury Hairs exceptional
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { name: "Nita Johnson", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300&text=Nita" },
              { name: "Michael Smith", role: "Operations Manager", image: "/placeholder.svg?height=300&width=300&text=Michael" },
              { name: "Lisa Williams", role: "Lead Stylist", image: "/placeholder.svg?height=300&width=300&text=Lisa" },
              { name: "David Chen", role: "Customer Service Manager", image: "/placeholder.svg?height=300&width=300&text=David" }
            ].map((member) => (
              <motion.div 
                key={member.name}
                variants={slideUp}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-center gap-3">
                      {/* Social media icons would go here */}
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xs text-white">in</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xs text-white">tw</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Testimonials - with card carousel effect */}
        <ParallaxSection direction="up" className="mb-24">
          <section>
            <div className="text-center mb-12">
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                  Testimonials
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Real feedback from real customers
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "I've been using Nita Luxury Hairs extensions for over two years now, and I'm consistently impressed by the quality. They blend perfectly with my natural hair and last much longer than other brands I've tried.",
                  author: "Sarah J.",
                  role: "Professional Stylist",
                  rating: 5
                },
                {
                  quote: "The customer service at Nita Luxury Hairs is exceptional. They helped me choose the perfect wig for my needs and were patient with all my questions. The product exceeded my expectations!",
                  author: "Michelle D.",
                  role: "Customer",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  className="bg-gradient-to-br from-muted/40 to-muted/10 backdrop-blur-sm p-8 rounded-2xl border border-muted"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                >
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-500">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="italic mb-6 text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-semibold mr-4">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </ParallaxSection>

        {/* CTA Section - with glass morphism effect */}
        <motion.section 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-white p-12 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the Nita Luxury Difference</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Browse our collection of premium hair extensions, wigs, and accessories to find the perfect match for your style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="rounded-full px-8 text-lg hover:scale-105 transition-all duration-300"
              >
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg bg-transparent border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
