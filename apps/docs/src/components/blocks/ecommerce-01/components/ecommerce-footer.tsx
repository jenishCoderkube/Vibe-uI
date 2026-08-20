import React, { useRef } from 'react'
import { Globe, Camera, Terminal, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EcommerceFooter() {
  const footerRef = useRef<HTMLDivElement>(null)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (footerRef.current) {
      let parent = footerRef.current.parentElement
      while (parent) {
        const overflowY = window.getComputedStyle(parent).overflowY
        if (overflowY === 'auto' || overflowY === 'scroll') {
          parent.scrollTo({ top: 0, behavior: 'smooth' })
          break
        }
        parent = parent.parentElement
      }
    }
  }

  return (
    <footer ref={footerRef} className="border-t border-border bg-background w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-border/80">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-xl">
                V
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Vibe <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary align-middle ml-1">SHOP</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Crafting premium audio equipment engineered for pure vibration. Experience studio-grade acoustic performance, active noise filtering, and high-fidelity soundscapes.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Website">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Acoustic Gallery">
                <Camera className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Developer Space">
                <Terminal className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="text-left space-y-3.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Shop</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Headphones</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Wireless Earbuds</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Bluetooth Speakers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Audio Accessories</a></li>
              </ul>
            </div>

            <div className="text-left space-y-3.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Support</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Order Status</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Shipping Details</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Warranty Info</a></li>
              </ul>
            </div>

            <div className="text-left space-y-3.5 col-span-2 sm:col-span-1">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Company</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Acoustics</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Our Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Eco-Sustainability</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[11px] text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Vibe Shop. All rights reserved.</span>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Sale</a>
              <a href="#" className="hover:text-foreground transition-colors">Site Map</a>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleScrollToTop}
            className="text-[10px] font-bold gap-1 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
