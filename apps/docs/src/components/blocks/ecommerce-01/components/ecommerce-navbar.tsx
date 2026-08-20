'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  User,
  Settings,
  CreditCard,
  LogOut,
  Trash2,
  Sparkles,
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

interface EcommerceNavbarProps {
  cart: CartItem[]
  wishlist: string[]
  onRemoveFromCart: (id: string) => void
  onUpdateQuantity: (id: string, q: number) => void
  onClearCart: () => void
  onToggleWishlist: (id: string) => void
}

export function EcommerceNavbar({
  cart,
  wishlist,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart,
  onToggleWishlist,
}: EcommerceNavbarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const popularSearches = [
    'Wireless Headphones',
    'Noise Cancelling',
    'Bookshelf Speakers',
    'Waterproof Speaker',
    'Studio Monitors',
  ]

  const searchableProducts = [
    {
      id: 'vibe-sound-pro-x',
      name: 'Vibe Sound Pro X',
      price: 299,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-beam-soundbar',
      name: 'Vibe Beam Soundbar',
      price: 349,
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-aura-headset',
      name: 'Vibe Aura Wireless',
      price: 279,
      image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-studio-speaker',
      name: 'Vibe Studio Speakers',
      price: 229,
      image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-sound-budz',
      name: 'Vibe Sound Budz',
      price: 149,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-sound-wave',
      name: 'Vibe Sound Wave Speaker',
      price: 199,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-studio-monitor',
      name: 'Vibe Active Monitor',
      price: 499,
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-go-speaker',
      name: 'Vibe Go Speaker',
      price: 79,
      image: 'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-studio-earphones',
      name: 'Vibe Studio Buds',
      price: 119,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
    {
      id: 'vibe-charge-dock',
      name: 'Vibe Charge Node',
      price: 39,
      image: 'https://images.unsplash.com/photo-1619737307100-55b827725227?q=80&w=400&auto=format&fit=crop',
      href: '/preview/ecommerce-02',
    },
  ]

  const filteredProducts = searchableProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#related-products' },
    { name: 'Categories', href: '#categories' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'Sale', href: '#sale', badge: '10%' },
  ]

  const handleScrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isProductPage = typeof window !== 'undefined' && window.location.pathname.includes('ecommerce-02')

    if (isProductPage) {
      e.preventDefault()
      router.push('/preview/ecommerce-01' + (href === '#' ? '' : href))
    } else {
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault()
        const element = document.getElementById(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else if (href === '#') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const scrollable = document.querySelector('.overflow-y-auto') || document.querySelector('[class*="overflow-y-auto"]')
        if (scrollable) {
          scrollable.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Branding & Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => handleScrollToElement(e, '#')}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-xl transition-transform group-hover:scale-105 shadow-sm">
              V
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Vibe <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary align-middle ml-1">SHOP</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToElement(e, link.href)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="rounded-full bg-red-500/10 dark:bg-red-500/25 px-1.5 py-0.2 text-[9px] font-bold text-red-600 dark:text-red-400">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions Bar */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Desktop Search Button */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="Search Products"
              >
                <Search className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-card border-border">
              <DialogHeader className="p-4 border-b border-border bg-muted/20">
                <DialogTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Search Catalogue</DialogTitle>
                <DialogDescription className="sr-only">Type to search for products</DialogDescription>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for headphones, earbuds, specs..."
                    className="pl-10 h-10 w-full bg-background border-border text-foreground text-sm focus-visible:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </DialogHeader>
              <div className="p-6 space-y-4">
                {searchQuery ? (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center justify-between">
                      <span>Matching Items</span>
                      <span className="text-[10px] font-semibold text-primary">({filteredProducts.length})</span>
                    </h4>
                    {filteredProducts.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                        {filteredProducts.map((product) => (
                          <div
                            key={product.id}
                            onClick={() => {
                              router.push(product.href)
                              setSearchOpen(false)
                              setSearchQuery('')
                            }}
                            className="flex items-center gap-3 p-2 rounded-lg border border-border/60 bg-background hover:bg-muted/40 hover:border-primary/20 transition-all cursor-pointer group"
                          >
                            <div className="h-10 w-10 rounded-md overflow-hidden bg-muted/40 border border-border/50 shrink-0">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 text-left min-w-0">
                              <p className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                                {product.name}
                              </p>
                              <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                                High-Resolution Audio
                              </p>
                            </div>
                            <span className="text-xs font-black text-foreground shrink-0 pr-1">
                              ${product.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-lg border border-border bg-background p-2 text-center text-sm py-8 text-muted-foreground">
                        No results found for <span className="font-semibold text-foreground">"{searchQuery}"</span>. Try typing "Vibe".
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5 flex-row">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <span>Popular Searches</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="text-xs bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 rounded-full border border-border transition-colors cursor-pointer"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Wishlist Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="View Wishlist"
              >
                <Heart className="h-4 w-4" />
                {wishlist.length > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full p-0 text-[9px] font-bold bg-destructive text-destructive-foreground border border-background shadow-xs shrink-0"
                  >
                    {wishlist.length}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] border-border bg-card">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold">My Wishlist</DialogTitle>
                <DialogDescription>
                  Products you've saved for later.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-8 text-sm text-muted-foreground">
                    Your wishlist is empty. Tap the heart icon on products to add items!
                  </div>
                ) : (
                  <div className="space-y-3">
                    {wishlist.map((item) => (
                      <div key={item} className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded bg-muted flex items-center justify-center overflow-hidden border border-border">
                            <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary text-xs font-bold font-mono">V</div>
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-bold text-foreground">Vibe Sound Pro X</p>
                            <p className="text-[10px] text-muted-foreground">$299.00</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:bg-destructive/10"
                          onClick={() => onToggleWishlist(item)}
                          aria-label="Remove from Wishlist"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Shopping Cart Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="h-4 w-4" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full p-0 text-[9px] font-bold bg-primary text-primary-foreground border border-background shadow-xs shrink-0"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" variant="default" className="w-full sm:max-w-md flex flex-col justify-between">
              <div>
                <SheetHeader className="pb-4 border-b border-border">
                  <SheetTitle className="text-lg font-bold flex items-center gap-2 flex-row">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span>Shopping Cart</span>
                  </SheetTitle>
                  <SheetDescription>
                    Review your items before proceeding to checkout.
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-4 space-y-4 overflow-y-auto max-h-[60vh] pr-1">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                      <ShoppingBag className="h-12 w-12 mx-auto stroke-1 text-muted-foreground/50 mb-3" />
                      <p className="text-sm font-semibold">Your cart is empty</p>
                      <p className="text-xs mt-1 text-muted-foreground/80">Add products to your cart to see them here.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-border">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-muted flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between text-sm font-bold text-foreground">
                              <h5 className="truncate max-w-[160px] text-left">{item.name}</h5>
                              <p>${item.price * item.quantity}.00</p>
                            </div>
                            <p className="mt-1 text-[10px] text-muted-foreground flex items-center gap-1.5">
                              <span>Color: <span className="font-semibold text-foreground capitalize">{item.color}</span></span>
                              <span className="h-1 w-1 rounded-full bg-border" />
                              <span>Size: <span className="font-semibold text-foreground uppercase">{item.size}</span></span>
                            </p>
                            <div className="flex items-center justify-between mt-2.5">
                              <div className="flex items-center rounded border border-border bg-background">
                                <button
                                  className="h-7 w-7 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <span className="px-2 text-xs font-bold text-foreground">{item.quantity}</span>
                                <button
                                  className="h-7 w-7 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-destructive hover:bg-destructive/10 hover:text-destructive rounded-md"
                                onClick={() => onRemoveFromCart(item.id)}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {cart.length > 0 && (
                <div className="border-t border-border pt-4 bg-background/50 backdrop-blur-md rounded-t-xl -mx-6 px-6 -mb-6 pb-6">
                  <div className="flex justify-between text-sm font-bold text-foreground mb-4">
                    <span>Subtotal</span>
                    <span>${cartSubtotal}.00</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="default" className="w-full font-bold shadow-md cursor-pointer">
                      Proceed to Checkout
                    </Button>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-foreground cursor-pointer">
                        Continue Shopping
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>

          {/* User Profile Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full border border-border"
                aria-label="User account menu"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User Avatar" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card border-border shadow-md" align="end">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-9 w-9 border border-border">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-0.5 truncate text-left">
                  <p className="text-xs font-bold text-foreground">John Doe</p>
                  <p className="text-[10px] text-muted-foreground truncate">john.doe@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="text-xs text-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer gap-2">
                <User className="h-3.5 w-3.5" />
                <span>My Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs text-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer gap-2">
                <CreditCard className="h-3.5 w-3.5" />
                <span>My Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs text-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer gap-2">
                <Settings className="h-3.5 w-3.5" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem 
                onClick={onClearCart} 
                className="text-xs text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer gap-2"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out / Reset Demo</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Drawer trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="inline-flex md:hidden text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" variant="default" className="w-3/4 sm:max-w-xs p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <SheetHeader className="pb-4 border-b border-border">
                  <SheetTitle className="text-left font-extrabold flex items-center gap-2 flex-row">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-black text-lg">V</div>
                    <span>Vibe Shop</span>
                  </SheetTitle>
                  <SheetDescription className="sr-only">Mobile navigation links</SheetDescription>
                </SheetHeader>

                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Search catalogue..."
                    className="pl-8 h-9 bg-background border-border text-foreground text-xs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Mobile nav links */}
                <nav className="flex flex-col space-y-3.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false)
                        handleScrollToElement(e, link.href)
                      }}
                      className="text-sm font-semibold flex items-center justify-between py-1 transition-colors hover:text-primary text-foreground"
                    >
                      <span>{link.name}</span>
                      {link.badge ? (
                        <Badge variant="destructive" className="text-[9px] font-bold px-1.5 py-0.2">{link.badge}</Badge>
                      ) : (
                        <span className="text-muted-foreground/30 font-light">&rarr;</span>
                      )}
                    </a>
                  ))}
                </nav>
              </div>
              
              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">U</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">John Doe</p>
                    <p className="text-[9px] text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <Button 
                  onClick={onClearCart}
                  variant="ghost" 
                  className="w-full text-xs text-destructive hover:bg-destructive/10 justify-start gap-2 h-9 p-2"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  )
}
