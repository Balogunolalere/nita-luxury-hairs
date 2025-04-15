import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nita Luxury Hairs</h3>
            <p className="text-sm text-muted-foreground">
              Premium quality hair extensions and wigs for the modern woman.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=wigs" className="text-muted-foreground hover:text-foreground">
                  Wigs
                </Link>
              </li>
              <li>
                <Link href="/shop?category=extensions" className="text-muted-foreground hover:text-foreground">
                  Extensions
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="text-muted-foreground hover:text-foreground">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop?category=new" className="text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="max-w-full" required />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nita Luxury Hairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
