"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function ProductLoading() {
  return (
    <div className="container py-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-xl" />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-lg" />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-12 rounded-lg" />
              <Skeleton className="h-12 rounded-lg" />
              <Skeleton className="h-12 rounded-lg" />
            </div>
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-8">
        <Skeleton className="h-8 w-1/4" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}