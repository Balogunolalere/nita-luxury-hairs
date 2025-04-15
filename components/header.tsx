"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Menu, X, Search, User, PackageSearch, Home, Store, FileText, Info, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    if (isMobile) {
      setIsMenuOpen(true)
    } else {
      setIsSearchOpen(!isSearchOpen)
    }
  }

  const menuItems = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { href: "/shop", label: "Shop", icon: <Store className="h-4 w-4" /> },
    { href: "/blog", label: "Blog", icon: <FileText className="h-4 w-4" /> },
    { href: "/about", label: "About", icon: <Info className="h-4 w-4" /> },
    { href: "/contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
    { href: "/orders", label: "Orders", icon: <PackageSearch className="h-4 w-4" /> },
    { href: "/profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    { href: "/cart", label: "Cart", icon: <ShoppingCart className="h-4 w-4" /> }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="mr-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Nita Luxury Hairs</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
              {menuItems.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "200px", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mr-2"
                    >
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={toggleSearch}
                  className={isSearchOpen ? "bg-muted" : ""}
                >
                  {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              {menuItems.slice(5).map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button variant="ghost" size="icon">
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </>
        )}

        {/* Mobile Header Icons */}
        {isMobile && (
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <ThemeToggle />
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <nav className="container py-4">
              <div className="space-y-4">
                {/* Search Input in Mobile Menu */}
                <div className="px-2 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-10"
                    autoFocus={isSearchOpen}
                  />
                </div>
                
                <div className="grid gap-4 pt-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary px-2"
                        onClick={toggleMenu}
                      >
                        {item.icon && <span className="w-8">{item.icon}</span>}
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
