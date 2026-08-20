'use client'

import React, { useState } from 'react'
import { Star, ShieldCheck, ThumbsUp, Camera, PenTool, Dialog as DialogIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface Review {
  id: string
  author: string
  avatar: string
  rating: number
  date: string
  title: string
  content: string
  verified: boolean
  likes: number
  images?: string[]
}

export function ProductReviews() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({})

  const [reviewsList, setReviewsList] = useState<Review[]>([
    {
      id: 'rev-1',
      author: 'David K.',
      avatar: 'DK',
      rating: 5,
      date: '2 days ago',
      title: 'Absolutely stellar sound signature!',
      content: 'I have used several reference monitors in my home studio, and the acoustic clarity on these Beryllium drivers is top-tier. Sub-bass is present but not muddy, and highs resolve with crisp precision. Highly recommended for audiophiles.',
      verified: true,
      likes: 12,
      images: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=300&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=300&auto=format&fit=crop',
      ],
    },
    {
      id: 'rev-2',
      author: 'Sophia R.',
      avatar: 'SR',
      rating: 5,
      date: '1 week ago',
      title: 'Comfortable for 8+ hour editing sessions',
      content: 'The leatherette memory foam ear cushions fit perfectly and block out the low hum of my air conditioner even with ANC turned off. When I turn on ANC, it is total silence. The battery life easily matches the 45-hour claim.',
      verified: true,
      likes: 8,
      images: [
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=300&auto=format&fit=crop',
      ],
    },
    {
      id: 'rev-3',
      author: 'Marcus L.',
      avatar: 'ML',
      rating: 4,
      date: '2 weeks ago',
      title: 'Solid build quality, slightly heavy',
      content: 'The metal band slider feels very premium and solid. The clamping force is just right so they do not fall off during movement, but because of the high-quality aluminum build, they feel slightly heavier than all-plastic alternatives.',
      verified: false,
      likes: 3,
    },
  ])

  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false)
  const [formRating, setFormRating] = useState(3)
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [formName, setFormName] = useState('')
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const ratingDistribution = [
    { stars: 5, percentage: 82 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ]

  const handleLike = (id: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate network latency
    setTimeout(() => {
      const newReview: Review = {
        id: `rev-${Date.now()}`,
        author: formName.trim() || 'Anonymous',
        avatar: (formName.trim() || 'A').substring(0, 2).toUpperCase(),
        rating: formRating,
        date: 'Just now',
        title: formTitle.trim() || 'Highly impressed!',
        content: formContent.trim() || 'Excellent sound signature and great build quality.',
        verified: true,
        likes: 0,
      }

      setReviewsList((prev) => [newReview, ...prev])
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Auto close after success message
      setTimeout(() => {
        setIsWriteReviewOpen(false)
        // Reset fields
        setFormName('')
        setFormTitle('')
        setFormContent('')
        setFormRating(3)
        setSubmitSuccess(false)
      }, 1500)
    }, 1000)
  }

  return (
    <div id="reviews-section" className="space-y-10 text-left pt-6 border-t border-border/85">
      
      {/* Reviews Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start bg-muted/10 border border-border/60 p-6 sm:p-8 rounded-2xl">
        
        {/* Left Score Card */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-muted-foreground/90">Customer Reviews</h3>
          <div className="flex items-baseline gap-2 flex-row justify-center md:justify-start pt-1">
            <span className="text-5xl font-black text-foreground">4.8</span>
            <span className="text-muted-foreground text-xs font-semibold">out of 5</span>
          </div>
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1
              if (ratingValue <= Math.floor(4.8)) {
                return <Star key={i} className="h-4.5 w-4.5 fill-current" />
              } else if (ratingValue === Math.ceil(4.8)) {
                return (
                  <div key={i} className="relative h-4.5 w-4.5 shrink-0">
                    <Star className="absolute inset-0 h-full w-full text-muted-foreground/30 fill-current" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                      <Star className="h-4.5 w-4.5 fill-current" />
                    </div>
                  </div>
                )
              } else {
                return <Star key={i} className="h-4.5 w-4.5 text-muted-foreground/30 fill-current" />
              }
            })}
          </div>
          <p className="text-[11px] text-muted-foreground font-medium">Based on 182 product ratings</p>
        </div>

        {/* Middle Stars Distribution Bars */}
        <div className="md:col-span-5 w-full space-y-2.5">
          {ratingDistribution.map((dist) => (
            <div key={dist.stars} className="flex items-center gap-3 text-xs">
              <button className="w-12 text-left font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1.5">
                <span>{dist.stars} star</span>
              </button>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden relative">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${dist.percentage}%` }}
                />
              </div>
              <span className="w-8 text-right font-bold text-muted-foreground">{dist.percentage}%</span>
            </div>
          ))}
        </div>

        {/* Right Write a Review Card */}
        <div className="md:col-span-4 flex flex-col space-y-3 text-left">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-muted-foreground/90">Share your feedback</h3>
          <p className="text-xs text-muted-foreground leading-relaxed pt-1">
            Have you purchased this product? Let other customers know about your experience!
          </p>
          <Button
            variant="outline"
            onClick={() => setIsWriteReviewOpen(true)}
            className="w-full text-xs font-bold h-9 gap-1.5 cursor-pointer hover:bg-muted/40 mt-1"
          >
            <PenTool className="h-3.5 w-3.5" />
            <span>Write a Customer Review</span>
          </Button>
        </div>

      </div>

      {/* Reviews Cards List */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">
          Featured Feedback
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => {
            const isLiked = likedReviews[review.id]
            const totalLikes = review.likes + (isLiked ? 1 : 0)

            return (
              <Card key={review.id} className="border-border/70 bg-card/20 shadow-xs">
                <CardContent className="p-6 space-y-4">
                  {/* Reviewer Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 border border-border">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="flex items-center gap-2 flex-row">
                          <span className="text-xs font-bold text-foreground">{review.author}</span>
                          {review.verified && (
                            <Badge variant="glow" className="text-[8px] font-extrabold uppercase px-1 py-0 border-primary/20 bg-primary/5 text-primary flex items-center gap-0.5 select-none shrink-0">
                              <ShieldCheck className="h-2 w-2 inline" />
                              <span>Verified</span>
                            </Badge>
                          )}
                        </div>
                        <p className="text-[10px] text-muted-foreground">{review.date}</p>
                      </div>
                    </div>

                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating ? 'fill-current' : 'text-muted/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Title & Content */}
                  <div className="space-y-2 text-left">
                    <h5 className="text-sm font-bold text-foreground">{review.title}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{review.content}</p>
                  </div>

                  {/* Customer Uploaded Image Attachments */}
                  {review.images && review.images.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {review.images.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedImage(img)}
                          className="h-16 w-16 rounded-md overflow-hidden bg-muted/40 border border-border/80 relative cursor-pointer group shrink-0"
                          title="Click to enlarge"
                        >
                          <img
                            src={img}
                            alt="Attachment preview"
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                            <Camera className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Review Footer / Likes */}
                  <div className="flex items-center gap-4 pt-1.5 border-t border-border/40">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(review.id)}
                      className={`h-7 px-2.5 text-[10px] font-bold gap-1.5 rounded-md cursor-pointer ${
                        isLiked ? 'text-primary hover:bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <ThumbsUp className={`h-3 w-3 ${isLiked ? 'fill-current' : ''}`} />
                      <span>Helpful ({totalLikes})</span>
                    </Button>
                  </div>

                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Enlarged Image Dialog Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-2xl bg-card border-border p-4 flex flex-col items-center">
          <DialogTitle className="sr-only">Customer Review Photo Preview</DialogTitle>
          <DialogDescription className="sr-only">Enlarged customer photo attachment view</DialogDescription>
          {selectedImage && (
            <div className="w-full relative aspect-[4/3] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Enlarged attachment"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Write a Review Modal Dialog */}
      <Dialog open={isWriteReviewOpen} onOpenChange={(open) => {
        setIsWriteReviewOpen(open)
        if (!open) {
          setFormName('')
          setFormTitle('')
          setFormContent('')
          setFormRating(3)
          setSubmitSuccess(false)
        }
      }}>
        <DialogContent className="max-w-md bg-card border-border p-6 space-y-4 text-left">
          <DialogTitle className="text-lg font-bold text-foreground">Write a Review</DialogTitle>
          <DialogDescription className="text-xs text-foreground/80">
            Share your thoughts and feedback on Vibe Sound Pro X with other audiophiles.
          </DialogDescription>

          {submitSuccess ? (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h5 className="text-sm font-bold text-foreground">Review Posted Successfully!</h5>
              <p className="text-xs text-foreground/80 max-w-xs leading-relaxed">
                Thank you! Your feedback has been published and added to the review feed.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Star rating selector */}
              <div className="space-y-2">
                <Label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Overall Rating</Label>
                <div className="flex gap-1.5 text-amber-500 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="cursor-pointer transition-transform hover:scale-110"
                      aria-label={`Rate ${star} star`}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= (hoverRating ?? formRating) ? 'fill-current' : 'text-muted-foreground/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Your Name</Label>
                <Input
                  id="name"
                  placeholder="e.g. John Doe"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="bg-background border-border text-foreground text-xs"
                />
              </div>

              {/* Title Input */}
              <div className="space-y-1.5">
                <Label htmlFor="title" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Review Title</Label>
                <Input
                  id="title"
                  placeholder="e.g. Incredible sound clarity"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  className="bg-background border-border text-foreground text-xs"
                />
              </div>

              {/* Description Textarea */}
              <div className="space-y-1.5">
                <Label htmlFor="content" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Review Content</Label>
                <Textarea
                  id="content"
                  placeholder="Tell us what you liked or disliked about Beryllium drivers, cushion comfort, and wireless ANC..."
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  required
                  rows={4}
                  className="bg-background border-border text-foreground text-xs resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="!h-9 flex-1 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="default"
                  size="sm"
                  className="!h-9 flex-1 text-xs font-bold cursor-pointer"
                >
                  {isSubmitting ? 'Posting...' : 'Submit Review'}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

    </div>
  )
}
