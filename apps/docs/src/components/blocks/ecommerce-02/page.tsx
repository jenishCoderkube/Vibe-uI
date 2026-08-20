'use client'

import React, { useState } from 'react'
import { EcommerceNavbar } from '../ecommerce-01/components/ecommerce-navbar'
import { EcommerceFooter } from '../ecommerce-01/components/ecommerce-footer'
import { ProductGallery } from './components/product-gallery'
import { ProductInfo } from './components/product-info'
import { ProductReviews } from './components/product-reviews'
import { BlurFade } from '@/components/ui/blur-fade'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, Star } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
  quantity: number
}

const commonProduct = {
  id: 'vibe-sound-pro-x',
  name: 'Vibe Sound Pro X',
  price: 299,
  originalPrice: 349,
  description: 'Elevate your daily acoustics with the all-new Vibe Sound Pro X. Engineered with custom 40mm beryllium diaphragm transducers, hybrid active noise filtering, and a 45-hour cloud playback power reserve.',
  rating: 4.8,
  reviewsCount: 182,
  colors: [
    {
      name: 'Obsidian Black',
      hex: '#18181b',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      name: 'Platinum Silver',
      hex: '#e4e4e7',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      name: 'Forest Teal',
      hex: '#0d9488',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1619737307100-55b82782b132?q=80&w=600&auto=format&fit=crop',
      ],
    },
  ],
  sizes: ['Standard Foam', 'Premium Velvet', 'Synthetic Leatherette'],
}

export function Ecommerce02Page() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  // Cart Operations
  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.color === item.color && i.size === item.size
      )
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.color === item.color && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prev, item]
    })
  }

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id)
      return
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const currentColorImages = commonProduct.colors[selectedColorIndex].images

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      {/* Alert Top Info bar */}
      <div className="bg-primary px-4 py-2 text-center text-[10px] sm:text-xs font-semibold text-primary-foreground flex items-center justify-center gap-2 select-none">
        <Zap className="h-3.5 w-3.5 fill-current animate-bounce shrink-0" />
        <span>Vibe Store Product Details Demo: Interactive color swatches, technical accordions, and customer photo zooms!</span>
      </div>

      {/* Navbar Header */}
      <EcommerceNavbar
        cart={cart}
        wishlist={wishlist}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Main Core Layout grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
        
        {/* Gallery / Info main split */}
        <BlurFade delay={0.1} duration={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Gallery Column (left 5 spans) */}
            <div className="lg:col-span-5 w-full">
              <ProductGallery
                images={currentColorImages}
                productName={commonProduct.name}
              />
            </div>

            {/* Info and Specs Column (right 7 spans) */}
            <div className="lg:col-span-7 w-full">
              <ProductInfo
                product={commonProduct}
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                onSelectColor={setSelectedColorIndex}
                selectedColorIndex={selectedColorIndex}
              />
            </div>
          </div>
        </BlurFade>

        {/* Similar Accessories Section */}
        <BlurFade delay={0.2} duration={0.5}>
          <div className="space-y-8 pt-4 border-t border-border/80 text-left">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                Complete Your Acoustic Setup
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                Specially designed desktop accessories and cases optimized for high-fidelity audio equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'vibe-sound-budz',
                  name: 'Vibe Sound Budz',
                  price: 149,
                  desc: 'Wireless audio nodes with active sweat protection and smart tap arrays.',
                  rating: 4.8,
                  reviews: 86,
                  image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-sound-wave',
                  name: 'Vibe Sound Wave Speaker',
                  price: 199,
                  desc: 'Portable Bluetooth driver with dual-chamber bass resonance, waterproof shell.',
                  rating: 4.7,
                  reviews: 94,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-charge-dock',
                  name: 'Vibe Charge Node',
                  price: 39,
                  desc: 'Dual magnetic wireless charging pad designed to top up headsets and earbuds.',
                  rating: 4.6,
                  reviews: 31,
                  image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/45 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-sm font-extrabold tracking-tight truncate">{product.name}</CardTitle>
                        <span className="text-sm font-black text-foreground">${product.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-foreground">{product.rating}</span>
                        <span className="text-[9px] text-muted-foreground">({product.reviews})</span>
                      </div>

                      <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {product.desc}
                      </CardDescription>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        color: 'Default',
                        size: 'Standard',
                        image: product.image,
                        quantity: 1,
                      })}
                      className="w-full text-xs font-bold h-9 mt-2 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-pointer"
                    >
                      Quick Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Customer Reviews Section */}
        <BlurFade delay={0.3} duration={0.5}>
          <ProductReviews />
        </BlurFade>

      </main>

      {/* Footer Details */}
      <EcommerceFooter />
    </div>
  )
}
