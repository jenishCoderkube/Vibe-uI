'use client'

import React, { useState } from 'react'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewer Frame */}
      <div className="aspect-[4/3] w-full rounded-2xl border border-border/80 bg-muted/30 overflow-hidden relative group flex items-center justify-center">
        <img
          src={images[activeIndex] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop'}
          alt={`${productName} view ${activeIndex + 1}`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
        />
        <div className="absolute inset-0 bg-black/5 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Interactive Thumbnails Row */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            onMouseEnter={() => setActiveIndex(i)}
            className={`aspect-[4/3] rounded-lg overflow-hidden border bg-muted/40 transition-all duration-200 cursor-pointer ${
              activeIndex === i
                ? 'border-primary ring-2 ring-primary/20 ring-offset-2 ring-offset-background'
                : 'border-border/80 hover:border-foreground/40'
            }`}
            aria-label={`View ${productName} image ${i + 1}`}
          >
            <img
              src={img}
              alt={`${productName} thumbnail ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
