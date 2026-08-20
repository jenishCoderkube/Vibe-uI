'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Tooltip } from '@/components/ui/tooltip'

interface AddToCartParams {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
}

interface EcommerceHeroProps {
  wishlist: string[]
  onAddToCart: (params: AddToCartParams) => void
  onToggleWishlist: (id: string) => void
}

const PRODUCTS_COLOR_MAP = [
  {
    id: 'charcoal',
    name: 'Charcoal Black',
    colorCode: 'bg-zinc-800 border-zinc-700',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'platinum',
    name: 'Platinum Silver',
    colorCode: 'bg-zinc-200 border-zinc-300 dark:bg-zinc-400 dark:border-zinc-300',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'cosmic',
    name: 'Cosmic Purple',
    colorCode: 'bg-purple-800 border-purple-700',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop',
  },
]

const SIZES = ['Standard', 'Pro Fit']

export function EcommerceHero({
  wishlist,
  onAddToCart,
  onToggleWishlist,
}: EcommerceHeroProps) {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState(PRODUCTS_COLOR_MAP[0])
  const [selectedSize, setSelectedSize] = useState(SIZES[0])
  const [isAdding, setIsAdding] = useState(false)

  const isWishlisted = wishlist.includes('vibe-sound-pro-x')

  const handleAddToCart = () => {
    setIsAdding(true)
    onAddToCart({
      id: `vibe-sound-pro-x-${selectedColor.id}-${selectedSize.toLowerCase()}`,
      name: `Vibe Sound Pro X (${selectedColor.name})`,
      price: 299,
      color: selectedColor.name,
      size: selectedSize,
      image: selectedColor.image,
    })
    setTimeout(() => setIsAdding(false), 800)
  }

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-4 sm:pb-8 md:pb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_top_right] from-primary/5 via-transparent to-transparent opacity-70" />

      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Text / Info Column */}
          <div className="flex flex-col space-y-6 lg:col-span-6 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider">
                <Sparkles className="mr-1 h-3 w-3 inline text-primary animate-pulse" />
                New Season Release
              </Badge>
              <Badge variant="glass" className="text-[10px] uppercase font-semibold text-muted-foreground">
                Free Shipping
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Sound Engineered <br />
                <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  For Pure Vibration
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Elevate your daily acoustics with the all-new Vibe Sound Pro X. Crafted with precision layout nodes, interactive cancellation software, and 45-hour cloud playback.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="shine"
                className="font-bold flex items-center justify-center gap-2 h-10 sm:h-11 px-6 text-xs sm:text-sm shadow-lg shadow-primary/20 dark:shadow-none cursor-pointer"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-4 w-4 shrink-0" />
                <span>Shop Now — $299</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('categories')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="font-semibold gap-2 border-border/80 text-foreground hover:bg-muted/50 h-10 sm:h-11 px-6 text-xs sm:text-sm cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </div>

            {/* Micro badges showing trust metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-6 mt-4">
              <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-3 sm:gap-1">
                <div className="flex items-center gap-1.5 text-primary text-xs font-semibold shrink-0">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>2 Year Warranty</span>
                </div>
                <span className="text-[10px] text-muted-foreground text-right sm:text-left">Full coverage guarantee</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-3 sm:gap-1">
                <div className="flex items-center gap-1.5 text-primary text-xs font-semibold shrink-0">
                  <Truck className="h-4 w-4 shrink-0" />
                  <span>Fast Delivery</span>
                </div>
                <span className="text-[10px] text-muted-foreground text-right sm:text-left">Ships next business day</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-3 sm:gap-1">
                <div className="flex items-center gap-1.5 text-primary text-xs font-semibold shrink-0">
                  <RefreshCw className="h-4 w-4 shrink-0" />
                  <span>30-Day Returns</span>
                </div>
                <span className="text-[10px] text-muted-foreground text-right sm:text-left">Hassle-free money back</span>
              </div>
            </div>

          </div>

          {/* Right Product Interactive Showcase Card */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <Card className="overflow-hidden border border-border/70 bg-card/60 dark:bg-card/45 backdrop-blur-md shadow-xl rounded-2xl flex flex-col">
              
              {/* Product Visual Frame */}
              <div
                onClick={() => router.push('/preview/ecommerce-02')}
                className="relative aspect-square w-full bg-muted/40 dark:bg-zinc-900/50 flex items-center justify-center p-8 group cursor-pointer"
                title="Click to view details"
              >
                <Badge variant="glass" className="absolute left-4 top-4 font-bold text-[10px] uppercase shadow-xs select-none">
                  Limited Edition
                </Badge>
                
                {/* Wishlist Heart Overlay */}
                <Button
                  variant="glass"
                  size="icon"
                  className={`absolute right-4 top-4 h-9 w-9 rounded-full cursor-pointer transition-colors ${
                    isWishlisted ? 'text-destructive hover:bg-destructive/10' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => onToggleWishlist('vibe-sound-pro-x')}
                  aria-label="Add to Wishlist"
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>

                {/* Animated Image Wrapper */}
                <motion.div
                  key={selectedColor.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full flex items-center justify-center"
                >
                  <img
                    src={selectedColor.image}
                    alt="Vibe Sound Pro X Headphone"
                    className="h-64 sm:h-76 md:h-80 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </div>

              {/* Product Context / Options Area */}
              <div className="p-6 space-y-6 text-left">
                
                {/* Header Info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3
                      onClick={() => router.push('/preview/ecommerce-02')}
                      className="text-xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      Vibe Sound Pro X
                    </h3>
                    
                    {/* Stars and Ratings count */}
                    <div className="flex items-center gap-1.5 select-none">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-foreground">4.9</span>
                      <span className="text-[10px] text-muted-foreground font-medium">(124 reviews)</span>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground line-through">$399.00</span>
                      <Badge variant="destructive" className="text-[9px] font-extrabold px-1.5 py-0.2 rounded">
                        -25%
                      </Badge>
                    </div>
                    <span className="text-2xl font-black text-foreground">$299.00</span>
                  </div>
                </div>

                {/* Separator line */}
                <div className="h-px bg-border/60" />

                {/* Option 1: Swatches */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Select Color</span>
                    <span className="text-xs text-foreground font-semibold">{selectedColor.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {PRODUCTS_COLOR_MAP.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`h-7 w-7 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                          selectedColor.id === color.id
                            ? 'border-primary scale-110 shadow-sm'
                            : 'border-transparent hover:border-muted-foreground/30 hover:scale-105'
                        }`}
                        title={color.name}
                      >
                        <span className={`h-4 w-4 rounded-full ${color.colorCode}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Option 2: Sizes */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <span>Choose Variant</span>
                      <Tooltip content="Pro Fit includes extra plush memory foam earcups and wider dynamic spectrum nodes.">
                        <button className="text-muted-foreground hover:text-foreground cursor-pointer">
                          <Info className="h-3.5 w-3.5 stroke-2" />
                        </button>
                      </Tooltip>
                    </span>
                    <span className="text-xs text-foreground font-semibold">{selectedSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {SIZES.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'default' : 'outline'}
                        className={`text-xs h-9 px-4 font-semibold rounded-lg cursor-pointer ${
                          selectedSize === size
                            ? 'shadow-xs'
                            : 'border-border/80 text-foreground hover:bg-muted/30'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Primary Add to Cart Action */}
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  variant={isAdding ? 'glow' : 'shine'}
                  className="w-full font-bold h-10 sm:h-11 shadow-sm mt-2 transition-all cursor-pointer disabled:opacity-90 flex justify-center items-center gap-2 text-xs sm:text-sm"
                >
                  {isAdding ? (
                    <>
                      <ShoppingBag className="h-4 w-4 animate-bounce" />
                      <span>Adding to Cart...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add to Shopping Cart</span>
                    </>
                  )}
                </Button>

              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
