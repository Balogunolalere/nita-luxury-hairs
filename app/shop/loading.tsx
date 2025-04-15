"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function ShopLoading() {
  return (
    <div className="container py-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Filters Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-3/4" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-1/2" />
                <div className="space-y-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-10 w-48" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="group space-y-4">
                <Skeleton className="aspect-square w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}