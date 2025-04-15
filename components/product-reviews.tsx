"use client"

import type React from "react"

import { useState } from "react"
import { Star, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Mock reviews data
const mockReviews = [
  {
    id: "1",
    productId: "1",
    userName: "Sarah Johnson",
    rating: 5,
    date: "2023-05-15",
    comment:
      "I absolutely love this hair! It blends perfectly with my natural hair and the quality is amazing. Will definitely purchase again.",
  },
  {
    id: "2",
    productId: "1",
    userName: "Michelle Davis",
    rating: 4,
    date: "2023-04-22",
    comment:
      "Great quality hair, minimal shedding. The only reason I gave 4 stars instead of 5 is because it took a bit longer to arrive than expected.",
  },
  {
    id: "3",
    productId: "1",
    userName: "Jessica Williams",
    rating: 5,
    date: "2023-03-10",
    comment:
      "This is my third time purchasing from Nita Luxury Hairs and I'm never disappointed. The hair is soft, thick, and holds curls beautifully.",
  },
]

interface ProductReviewsProps {
  productId: string
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
  const { toast } = useToast()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Filter reviews for this product
  const reviews = mockReviews.filter((review) => review.productId === productId)

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast({
        variant: "destructive",
        description: "Please select a rating",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would call your API to submit the review
    // const response = await fetch('/api/reviews', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ productId, rating, comment }),
    // })

    setIsSubmitting(false)
    setRating(0)
    setComment("")

    toast({
      description: "Your review has been submitted",
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{review.userName}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground">No reviews yet. Be the first to review this product!</p>
        )}
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 cursor-pointer ${
                    i < (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHoveredRating(i + 1)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(i + 1)}
                />
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-2">
              Your Review
            </label>
            <Textarea
              id="comment"
              placeholder="Write your review here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </div>
    </div>
  )
}
