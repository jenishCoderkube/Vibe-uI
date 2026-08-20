'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EcommerceNavbar } from './components/ecommerce-navbar'
import { EcommerceHero } from './components/ecommerce-hero'
import { EcommerceFooter } from './components/ecommerce-footer'
import { BlurFade } from '@/components/ui/blur-fade'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Mail,
  Zap,
  VolumeX,
  BatteryCharging,
  Headphones,
  Sliders,
  Star,
} from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
  quantity: number
}

export default function Ecommerce01Page() {
  const router = useRouter()
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  // Cart Operations
  const handleAddToCart = (params: {
    id: string
    name: string
    price: number
    color: string
    size: string
    image: string
  }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === params.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === params.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...params, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const handleUpdateQuantity = (id: string, q: number) => {
    if (q < 1) {
      handleRemoveFromCart(id)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: q } : item))
    )
  }

  const handleClearCart = () => {
    setCart([])
    setWishlist([])
  }

  // Wishlist Operations
  const handleToggleWishlist = (id: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((itemId) => itemId !== id)
        : [...prevWishlist, id]
    )
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true)
      setTimeout(() => {
        setNewsletterEmail('')
      }, 2500)
    }
  }

  // Showcase categories
  const categories = [
    {
      title: 'Studio Over-Ear',
      description: 'Reference-class monitors engineered for audiophiles, composers, and studio technicians.',
      badge: 'Professional',
      variant: 'glow' as const,
      img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'Wireless Earbuds',
      description: 'Ultra-light, active sound isolation, water-resistant buds for high mobility use cases.',
      badge: 'Active Lifestyle',
      variant: 'glass' as const,
      img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'Audio Primitives',
      description: 'Durable gold-plated auxiliary cords, dynamic converters, and premium braided cords.',
      badge: 'Essential',
      variant: 'default' as const,
      img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      {/* Top Banner Alert */}
      <div className="bg-primary px-4 py-2.5 text-center text-[10px] sm:text-xs font-semibold text-primary-foreground flex items-center justify-center gap-2 select-none">
        <Zap className="h-3.5 w-3.5 fill-current animate-bounce shrink-0" />
        <span>Vibe Store Interactive Demo: Add products to cart, check the drawers, and toggle layouts!</span>
      </div>

      {/* Navigation */}
      <EcommerceNavbar
        cart={cart}
        wishlist={wishlist}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onToggleWishlist={handleToggleWishlist}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Hero Product Feature */}
        <BlurFade delay={0.1} duration={0.5}>
          <EcommerceHero
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        </BlurFade>

        {/* Acoustic Engineering Specs Section */}
        <BlurFade delay={0.15} duration={0.5}>
          <div id="specs" className="space-y-8 scroll-mt-20">
            <div className="text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                High-Fidelity Engineering
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Crafted to block external noise while preserving high-resolution dynamic range soundscapes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Smart Ambient ANC',
                  desc: 'Active noise cancellation monitors and filters up to 45dB of surrounding noise.',
                  icon: VolumeX,
                },
                {
                  title: '45H Power Reserve',
                  desc: 'Fast USB-C charging delivers up to 5 hours playback from a quick 10-minute charge.',
                  icon: BatteryCharging,
                },
                {
                  title: 'Beryllium Drivers',
                  desc: 'Ultra-lightweight custom 40mm elements resolve highs and sub-bass with zero distortion.',
                  icon: Headphones,
                },
                {
                  title: 'Precision Sliders',
                  desc: 'Tactile sliders adjust spatial dimensions and balance active parameters in real time.',
                  icon: Sliders,
                },
              ].map((spec, index) => {
                const Icon = spec.icon
                return (
                  <Card key={spec.title} variant="glow" className="text-left border-border/70 flex flex-col justify-between">
                    <CardHeader className="pt-6 px-6 pb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 space-y-2">
                      <CardTitle className="text-base font-extrabold tracking-tight">{spec.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        {spec.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </BlurFade>

        {/* New Arrivals Section */}
        <BlurFade delay={0.18} duration={0.5}>
          <div id="new-arrivals" className="space-y-8 scroll-mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="max-w-xl">
                <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider mb-2">
                  Just Released
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  New Arrivals
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Discover our latest audio releases featuring advanced transducers and smart connectivity options.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'vibe-beam-soundbar',
                  name: 'Vibe Beam Soundbar',
                  price: 349,
                  desc: 'Multi-driver soundbar system with virtual Dolby Atmos and HDMI eARC connection.',
                  badge: 'New Release',
                  image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-aura-headset',
                  name: 'Vibe Aura Wireless',
                  price: 279,
                  desc: 'Ultra-comfort headset with custom spatial soundstage tracking sensors.',
                  badge: 'Trending',
                  image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-studio-speaker',
                  name: 'Vibe Studio Speakers',
                  price: 229,
                  desc: 'Sleek active bookshelf studio monitors with integrated dual class-D amps.',
                  badge: 'New Release',
                  image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/40 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div
                    onClick={() => router.push('/preview/ecommerce-02')}
                    className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50 cursor-pointer"
                    title="Click to view details"
                  >
                    <Badge variant="glass" className="absolute left-3 top-3 z-10 text-[9px] font-bold uppercase tracking-wider">
                      {product.badge}
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle
                          onClick={() => router.push('/preview/ecommerce-02')}
                          className="text-base font-extrabold tracking-tight truncate hover:text-primary transition-colors cursor-pointer"
                        >
                          {product.name}
                        </CardTitle>
                        <span className="text-base font-black text-foreground">${product.price}</span>
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

        {/* Featured Categories Grid Section */}
        <BlurFade delay={0.2} duration={0.5}>
          <div id="categories" className="space-y-8 scroll-mt-20">
            <div className="text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Explore Sound Categories
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Tailored acoustic profiles, whether you are recording a master mix or heading out on a morning jog.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <Card
                  key={cat.title}
                  variant={cat.variant}
                  className="flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden group cursor-pointer border-border/70 text-left"
                >
                  <CardHeader className="p-0">
                    {/* Visual representative card header banner image */}
                    <div className="h-44 w-full bg-muted overflow-hidden relative border-b border-border/50">
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="glass" className="text-[9px] font-bold uppercase tracking-wider">
                          {cat.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-extrabold tracking-tight">{cat.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        {cat.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const targetId = cat.title === 'Audio Primitives' ? 'specs' : 'new-arrivals'
                        const element = document.getElementById(targetId)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="text-xs font-semibold gap-1 text-primary p-0 hover:bg-transparent hover:underline cursor-pointer"
                    >
                      <span>Explore products</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Related Products Section */}
        <BlurFade delay={0.25} duration={0.5}>
          <div id="related-products" className="space-y-8 scroll-mt-20">
            <div className="text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Complete Your Setup
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Specially tuned audio components designed to sync perfectly with your new Vibe Sound Pro X.
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
                  id: 'vibe-studio-monitor',
                  name: 'Vibe Active Monitor',
                  price: 499,
                  desc: 'Nearfield active studio speaker featuring 5-inch glass-fiber woofers.',
                  rating: 4.9,
                  reviews: 42,
                  image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/40 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div
                    onClick={() => router.push('/preview/ecommerce-02')}
                    className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50 cursor-pointer"
                    title="Click to view details"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle
                          onClick={() => router.push('/preview/ecommerce-02')}
                          className="text-base font-extrabold tracking-tight truncate hover:text-primary transition-colors cursor-pointer"
                        >
                          {product.name}
                        </CardTitle>
                        <span className="text-base font-black text-foreground">${product.price}</span>
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

        {/* Sale & Limited Offers Section */}
        <BlurFade delay={0.28} duration={0.5}>
          <div id="sale" className="space-y-8 scroll-mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="max-w-xl">
                <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider mb-2 bg-red-500/10 text-red-600 dark:text-red-400 dark:bg-red-500/20 border-red-500/30">
                  Special Discounts
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  Limited Time Deals
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Upgrade your studio kit with our active discounts. Available while supplies last.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'vibe-go-speaker',
                  name: 'Vibe Go Speaker',
                  price: 79,
                  originalPrice: 99,
                  desc: 'Pocket-sized outdoor driver with punchy bass, 12-hour reserve, and loop strap.',
                  badge: '20% OFF',
                  image: 'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-studio-earphones',
                  name: 'Vibe Studio Buds',
                  price: 119,
                  originalPrice: 149,
                  desc: 'High-accuracy monitors with double dynamic armatures, gold jack connections.',
                  badge: '20% OFF',
                  image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-charge-dock',
                  name: 'Vibe Charge Node',
                  price: 39,
                  originalPrice: 49,
                  desc: 'Dual magnetic wireless charging pad designed to top up headsets and earbuds.',
                  badge: '20% OFF',
                  image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/40 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div
                    onClick={() => router.push('/preview/ecommerce-02')}
                    className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50 cursor-pointer"
                    title="Click to view details"
                  >
                    <Badge variant="default" className="absolute left-3 top-3 z-10 text-[9px] font-bold uppercase tracking-wider bg-red-600 text-white border-transparent">
                      {product.badge}
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle
                          onClick={() => router.push('/preview/ecommerce-02')}
                          className="text-base font-extrabold tracking-tight truncate hover:text-primary transition-colors cursor-pointer"
                        >
                          {product.name}
                        </CardTitle>
                        <div className="flex items-center gap-1.5 flex-row">
                          <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                          <span className="text-base font-black text-red-600 dark:text-red-400">${product.price}</span>
                        </div>
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
                      })}
                      className="w-full text-xs font-bold h-9 mt-2 hover:bg-red-600 hover:text-white hover:border-transparent transition-all cursor-pointer"
                    >
                      Quick Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Newsletter Newsletter Overlay Sign-up */}
        <BlurFade delay={0.3} duration={0.5}>
          <div className="relative rounded-2xl border border-border/80 bg-card/40 dark:bg-card/20 backdrop-blur-md overflow-hidden p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-md">
            <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />

            <div className="max-w-xl mx-auto space-y-6">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Stay Tuned with Vibe Acoustics
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Join our premium VIP acoustics list to receive priority product notifications, early access releases, and studio mixing guides direct to your inbox.
              </p>

              {newsletterSubscribed ? (
                <BlurFade>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                    Thank you! Check your inbox for your 10% welcome coupon.
                  </div>
                </BlurFade>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 mt-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="h-10 bg-background border-border text-foreground text-xs placeholder:text-muted-foreground focus-visible:ring-primary flex-1"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <Button type="submit" variant="default" className="h-10 font-bold text-xs gap-1.5 shadow-sm shrink-0 cursor-pointer">
                    <span>Subscribe</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </BlurFade>

      </main>
      <EcommerceFooter />
    </div>
  )
}
