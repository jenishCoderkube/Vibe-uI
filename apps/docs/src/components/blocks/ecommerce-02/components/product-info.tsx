'use client'

import React, { useState } from 'react'
import { Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface ProductInfoProps {
  product: {
    id: string
    name: string
    price: number
    originalPrice: number
    description: string
    rating: number
    reviewsCount: number
    colors: { name: string; hex: string; images: string[] }[]
    sizes: string[]
  }
  wishlist: string[]
  onAddToCart: (params: {
    id: string
    name: string
    price: number
    color: string
    size: string
    image: string
    quantity: number
  }) => void
  onToggleWishlist: (id: string) => void
  onSelectColor: (index: number) => void
  selectedColorIndex: number
}

export function ProductInfo({
  product,
  wishlist,
  onAddToCart,
  onToggleWishlist,
  onSelectColor,
  selectedColorIndex,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const isWishlisted = wishlist.includes(product.id)
  const currentColor = product.colors[selectedColorIndex]

  const handleAddToCart = () => {
    setIsAdding(true)
    setTimeout(() => {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        color: currentColor.name,
        size: selectedSize,
        image: currentColor.images[0],
        quantity: quantity,
      })
      setIsAdding(false)
    }, 800)
  }

  const handleScrollToReviews = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('reviews-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex flex-col space-y-6 text-left">
      {/* Category & Badge */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider">
          Best Seller
        </Badge>
        <span className="text-xs text-muted-foreground font-semibold">Studio Acoustics</span>
      </div>

      {/* Title & Price */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {product.name}
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-foreground">${product.price}.00</span>
          <span className="text-base text-muted-foreground line-through">${product.originalPrice}.00</span>
          <Badge className="bg-red-500/10 text-red-600 dark:text-red-400 dark:bg-red-500/20 border-red-500/20 text-[10px] font-bold">
            Save ${(product.originalPrice - product.price)}.00
          </Badge>
        </div>
      </div>

      {/* Ratings summary */}
      <div className="flex items-center gap-2 pb-2 border-b border-border/80">
        <div className="flex items-center gap-0.5 text-amber-500">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1
            if (ratingValue <= Math.floor(product.rating)) {
              return <Star key={i} className="h-4 w-4 fill-current" />
            } else if (ratingValue === Math.ceil(product.rating)) {
              const fractionPercent = Math.round((product.rating % 1) * 100)
              return (
                <div key={i} className="relative h-4 w-4 shrink-0">
                  <Star className="absolute inset-0 h-full w-full text-muted-foreground/30 fill-current" />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: `${fractionPercent}%` }}>
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              )
            } else {
              return <Star key={i} className="h-4 w-4 text-muted-foreground/30 fill-current" />
            }
          })}
        </div>
        <span className="text-xs font-bold text-foreground">{product.rating}</span>
        <span className="text-xs text-muted-foreground">•</span>
        <a
          href="#reviews-section"
          onClick={handleScrollToReviews}
          className="text-xs text-primary hover:underline font-semibold"
        >
          {product.reviewsCount} customer reviews
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Configurations Color selection */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Color: <span className="text-foreground capitalize">{currentColor.name}</span>
        </span>
        <div className="flex gap-2.5 pt-1.5">
          {product.colors.map((c, idx) => (
            <button
              key={c.name}
              onClick={() => onSelectColor(idx)}
              className={`h-8 w-8 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                selectedColorIndex === idx
                  ? 'border-foreground ring-2 ring-primary/30 ring-offset-2 ring-offset-background scale-105'
                  : 'border-border/80 hover:border-foreground/50'
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
              aria-label={`Select ${c.name} color`}
            />
          ))}
        </div>
      </div>

      {/* Configurations Size selection */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Ear Cushion Style
        </span>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? 'default' : 'outline'}
              onClick={() => setSelectedSize(size)}
              className={`text-xs h-9 px-4 font-semibold rounded-lg cursor-pointer ${
                selectedSize === size
                  ? ''
                  : 'border-border/85 text-foreground hover:bg-muted/30'
              }`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Quantity & CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        {/* Quantity control */}
        <div className="flex items-center rounded-lg border border-border bg-muted/20 self-start sm:self-auto w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="h-10 w-10 text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-8 text-center text-xs font-bold text-foreground">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="h-10 w-10 text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Buttons wrapper (Forces Add to Cart and Wishlist side-by-side on mobile) */}
        <div className="flex flex-1 gap-2.5 w-full">
          {/* Add to Cart button */}
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            variant={isAdding ? 'glow' : 'shine'}
            className="flex-1 font-bold h-10 shadow-md shadow-primary/10 transition-all cursor-pointer flex justify-center items-center gap-2 text-xs uppercase tracking-wider"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
          </Button>

          {/* Wishlist button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onToggleWishlist(product.id)}
            className={`h-10 w-10 rounded-lg border-border hover:bg-muted/30 cursor-pointer shrink-0 transition-colors ${
              isWishlisted ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>

      {/* Stock warning status */}
      <div className="text-[11px] text-orange-600 dark:text-orange-400 font-semibold flex items-center gap-1.5 pt-1">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-ping" />
        <span>Only 3 items remaining in stock - order soon!</span>
      </div>

      {/* Detailed Technical Specifications Accordion */}
      <div className="pt-4 border-t border-border/80">
        <Accordion type="single" collapsible defaultValue="specs" className="w-full">
          <AccordionItem value="specs">
            <AccordionTrigger className="font-bold text-xs uppercase tracking-wider text-foreground hover:no-underline">
              Technical Specifications
            </AccordionTrigger>
            <AccordionContent className="text-xs space-y-2 pt-2">
              <div className="grid grid-cols-2 py-1 border-b border-border/40">
                <span className="font-semibold text-muted-foreground">Frequency Range</span>
                <span className="text-foreground">5 Hz - 40 kHz (Hi-Res Audio)</span>
              </div>
              <div className="grid grid-cols-2 py-1 border-b border-border/40">
                <span className="font-semibold text-muted-foreground">Transducer Driver</span>
                <span className="text-foreground">40mm Beryllium Diaphragm</span>
              </div>
              <div className="grid grid-cols-2 py-1 border-b border-border/40">
                <span className="font-semibold text-muted-foreground">Impedance</span>
                <span className="text-foreground">32 Ohms</span>
              </div>
              <div className="grid grid-cols-2 py-1">
                <span className="font-semibold text-muted-foreground">Connectivity</span>
                <span className="text-foreground">Bluetooth 5.3 & 3.5mm Gold Jack</span>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shipping">
            <AccordionTrigger className="font-bold text-xs uppercase tracking-wider text-foreground hover:no-underline">
              Shipping & Returns
            </AccordionTrigger>
            <AccordionContent className="text-xs space-y-3.5 pt-3">
              <div className="flex items-start gap-2.5">
                <Truck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-foreground">Free Standard Shipping</p>
                  <p className="text-muted-foreground">Dispatched next business day, delivered within 2-4 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <RotateCcw className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-foreground">30-Day Hassle-Free Returns</p>
                  <p className="text-muted-foreground">Return your unused box inside 30 days for a full refund check.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="warranty">
            <AccordionTrigger className="font-bold text-xs uppercase tracking-wider text-foreground hover:no-underline">
              Warranty & Service
            </AccordionTrigger>
            <AccordionContent className="text-xs flex items-start gap-2.5 pt-3">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-semibold text-foreground">2-Year Full Coverage</p>
                <p className="text-muted-foreground">Includes coverage for battery degradation, driver hardware, and casing layout damage.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  )
}
