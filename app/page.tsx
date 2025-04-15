"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[90vh]"
      >
        <div className="relative h-[90vh] w-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Beautiful woman with luxury hair extensions"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          <div className="container absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text"
            >
              Luxury Hair <br />
              <span className="bg-gradient-to-r from-rose-100 to-teal-100 text-transparent bg-clip-text">
                Redefined
              </span>
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-8 max-w-lg text-lg text-rose-50/90"
            >
              Experience the future of premium hair extensions, where innovation meets unparalleled quality.
            </motion.p>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg" className="text-base rounded-full px-8 bg-white text-black hover:bg-white/90">
                <Link href="/shop">Explore Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 bg-transparent text-base text-white border-white hover:bg-white hover:text-black"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold">Collections</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Signature Wigs",
                image: "/placeholder.svg?height=600&width=600",
                link: "/shop?category=wigs",
              },
              {
                title: "Premium Extensions",
                image: "/placeholder.svg?height=600&width=600",
                link: "/shop?category=extensions",
              },
              {
                title: "Luxury Accessories",
                image: "/placeholder.svg?height=600&width=600",
                link: "/shop?category=accessories",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href={category.link}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Discover More</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection delay={0.2}>
        <FeaturedProducts />
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] overflow-hidden rounded-2xl"
            >
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="About Nita Luxury Hairs"
                fill
                className="object-cover"
              />
            </motion.div>
            <div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-8 text-4xl font-bold">Crafting Beauty Since 2015</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Founded with a vision of redefining luxury hair care, Nita Luxury Hairs represents the pinnacle of quality and innovation in the beauty industry.
                </p>
                <p className="mb-8 text-lg text-muted-foreground">
                  Our commitment to ethical sourcing and expert craftsmanship ensures that each product delivers not just beauty, but confidence that lasts.
                </p>
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/about">Discover Our Journey</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection delay={0.2}>
        <Testimonials />
      </AnimatedSection>

      {/* Blog Preview */}
      <AnimatedSection delay={0.3}>
        <BlogPreview />
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection className="py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold">Join Our Exclusive Circle</h2>
            <p className="mx-auto mb-10 max-w-lg text-lg opacity-90">
              Be the first to receive our latest collections, styling tips, and exclusive offers.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />
              <Button variant="secondary" size="lg" className="rounded-full px-8">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
