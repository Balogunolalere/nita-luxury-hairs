'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowDownAZ, ArrowUpAZ, ChevronDown, SlidersHorizontal } from "lucide-react"

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
]

export default function ProductSort() {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0])

  return (
    <div className="flex items-center justify-end space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="w-[180px] justify-between"
          >
            <span>{selectedSort.label}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[180px]">
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setSelectedSort(option)}
              className="flex items-center justify-between"
            >
              <span>{option.label}</span>
              {option.value.includes('asc') ? (
                <ArrowUpAZ className="h-4 w-4 opacity-50" />
              ) : option.value.includes('desc') ? (
                <ArrowDownAZ className="h-4 w-4 opacity-50" />
              ) : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
