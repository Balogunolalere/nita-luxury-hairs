"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

// Mock filter options
const categories = [
  { id: "wigs", label: "Wigs" },
  { id: "extensions", label: "Extensions" },
  { id: "accessories", label: "Accessories" },
]

const lengths = [
  { id: "10-12", label: "10-12 inches" },
  { id: "14-16", label: "14-16 inches" },
  { id: "18-20", label: "18-20 inches" },
  { id: "22-24", label: "22-24 inches" },
  { id: "26-30", label: "26-30 inches" },
]

const colors = [
  { id: "natural-black", label: "Natural Black" },
  { id: "dark-brown", label: "Dark Brown" },
  { id: "medium-brown", label: "Medium Brown" },
  { id: "blonde", label: "Blonde" },
  { id: "ombre", label: "Ombre" },
]

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLengths, setSelectedLengths] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleLength = (lengthId: string) => {
    setSelectedLengths((prev) => (prev.includes(lengthId) ? prev.filter((id) => id !== lengthId) : [...prev, lengthId]))
  }

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => (prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]))
  }

  const resetFilters = () => {
    setPriceRange([0, 500])
    setSelectedCategories([])
    setSelectedLengths([])
    setSelectedColors([])
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedLengths.length > 0 || 
    selectedColors.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 500

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        )}
      </div>

      {hasActiveFilters && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex flex-wrap gap-2"
        >
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="group cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              {categories.find(c => c.id === category)?.label}
              <X className="ml-1 h-3 w-3 opacity-60 group-hover:opacity-100" />
            </Badge>
          ))}
          {/* Similar badges for lengths and colors */}
        </motion.div>
      )}

      <div className="divide-y">
        <Accordion type="multiple" defaultValue={["categories", "price"]} className="space-y-4">
          <AccordionItem value="categories" className="border-none">
            <AccordionTrigger className="hover:no-underline">
              <span className="text-sm font-medium">Categories</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div 
                initial={false}
                animate={{ height: "auto" }}
                className="space-y-4 pt-2"
              >
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => toggleCategory(category.id)}
                      className="rounded-sm"
                    />
                    <Label 
                      htmlFor={`category-${category.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category.label}
                    </Label>
                  </div>
                ))}
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price" className="border-none">
            <AccordionTrigger className="hover:no-underline">
              <span className="text-sm font-medium">Price Range</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div 
                initial={false}
                animate={{ height: "auto" }}
                className="space-y-4 pt-2"
              >
                <Slider
                  defaultValue={[0, 500]}
                  max={500}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-6"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-muted px-2 py-1 rounded-md">
                    ${priceRange[0]}
                  </span>
                  <span className="bg-muted px-2 py-1 rounded-md">
                    ${priceRange[1]}
                  </span>
                </div>
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="length" className="border-none">
            <AccordionTrigger className="hover:no-underline">
              <span className="text-sm font-medium">Length</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div 
                initial={false}
                animate={{ height: "auto" }}
                className="space-y-4 pt-2"
              >
                {lengths.map((length) => (
                  <div key={length.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={`length-${length.id}`}
                      checked={selectedLengths.includes(length.id)}
                      onCheckedChange={() => toggleLength(length.id)}
                      className="rounded-sm"
                    />
                    <Label 
                      htmlFor={`length-${length.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {length.label}
                    </Label>
                  </div>
                ))}
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="color" className="border-none">
            <AccordionTrigger className="hover:no-underline">
              <span className="text-sm font-medium">Color</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div 
                initial={false}
                animate={{ height: "auto" }}
                className="space-y-4 pt-2"
              >
                {colors.map((color) => (
                  <div key={color.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={`color-${color.id}`}
                      checked={selectedColors.includes(color.id)}
                      onCheckedChange={() => toggleColor(color.id)}
                      className="rounded-sm"
                    />
                    <Label 
                      htmlFor={`color-${color.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {color.label}
                    </Label>
                  </div>
                ))}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
