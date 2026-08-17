'use client'

import React from 'react'
import { flushSync } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { SearchDialog } from './search'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./sidebar').then((mod) => mod.Sidebar), {
  ssr: false,
})

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

    const notifyIframes = (theme: string) => {
      document.querySelectorAll('iframe').forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage(
            { type: 'vibe-theme-change', theme },
            '*',
          )
        } catch {}
      })
    }

    if (
      typeof document === 'undefined' ||
      !('startViewTransition' in document) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(nextTheme)
      notifyIframes(nextTheme)
      return
    }

    const isMobileOrTablet = window.matchMedia('(max-width: 1023px)').matches

    if (isMobileOrTablet) {
      const transition = (document as any).startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme)
        })
        notifyIframes(nextTheme)
      })

      transition.ready.then(() => {
        const isDarkTarget = nextTheme === 'dark'
        const clipPathValues = isDarkTarget
          ? [
              'polygon(0 0, 100% 0, 100% 0, 0 0)',
              'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            ]
          : [
              'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
              'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            ]

        document.documentElement.animate(
          {
            clipPath: clipPathValues,
          },
          {
            duration: 500,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
      return
    }

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX || rect.left + rect.width / 2
    const y = e.clientY || rect.top + rect.height / 2
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = (document as any).startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme)
      })
      notifyIframes(nextTheme)
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath,
        },
        {
          duration: 650,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }

  const navItems = [
    { name: 'Docs', href: '/docs/introduction' },
    { name: 'Blocks', href: '/blocks' },
    { name: 'Components', href: '/docs/components/accordion' },
    { name: 'Charts', href: '/charts' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all duration-200">
        <div className="w-full flex h-[var(--header-height)] items-center justify-between px-2 sm:px-4 md:px-8">
          <div className="flex items-center gap-4 md:gap-6">
            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 hover:bg-muted text-foreground/80 hover:text-foreground md:hidden cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-foreground text-lg group"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background shadow-md group-hover:scale-105 transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-background"
                >
                  <path d="M4 4c2 4 4 8 8 16" className="opacity-80" />
                  <path d="M20 4c-2 4-4 8-8 16" className="opacity-80" />
                  <path
                    d="M12 8v8"
                    className="animate-pulse"
                    style={{ animationDuration: '1.2s' }}
                  />
                  <path
                    d="M8 10v4"
                    className="animate-pulse"
                    style={{ animationDuration: '1.8s' }}
                  />
                  <path
                    d="M16 10v4"
                    className="animate-pulse"
                    style={{ animationDuration: '1.5s' }}
                  />
                </svg>
                <div className="absolute inset-0 rounded-lg bg-foreground/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent font-extrabold tracking-tight">
                Vibe UI
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              {navItems.map((item) => {
                const isActive =
                  pathname.startsWith(item.href) ||
                  (item.name === 'Docs' && pathname === '/docs/introduction')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-3 py-1.5 rounded-full transition-all duration-200 hover:text-foreground',
                      isActive
                        ? 'text-foreground font-semibold bg-secondary/80 dark:bg-secondary/40 shadow-sm'
                        : 'text-muted-foreground hover:bg-muted/40',
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <SearchDialog />

            {/* GitHub button & Theme Toggle */}
            <div className="flex items-center gap-1.5">
              <Link
                href="https://github.com/jenishCoderkube/Vibe-uI"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 hover:bg-muted text-foreground/80 hover:text-foreground transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[1.1rem] w-[1.1rem]"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>

              {mounted ? (
                <button
                  onClick={handleThemeToggle}
                  className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 hover:bg-muted text-foreground/80 hover:text-foreground transition-all duration-200 cursor-pointer overflow-hidden group"
                  aria-label="Toggle theme"
                >
                  <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all group-hover:rotate-45 dark:-rotate-90 dark:scale-0 duration-300" />
                  <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all group-hover:rotate-12 dark:rotate-0 dark:scale-100 duration-300" />
                </button>
              ) : (
                <div className="h-9 w-9 rounded-lg border border-border bg-background" />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[100] md:hidden flex transition-all duration-300 ease-in-out',
          mobileOpen
            ? 'visible opacity-100 pointer-events-auto'
            : 'invisible opacity-0 pointer-events-none',
        )}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          onClick={() => setMobileOpen(false)}
        />
        {/* Sliding Content Panel */}
        <div
          className={cn(
            'relative flex h-full w-full max-w-[280px] flex-col bg-white dark:bg-zinc-950 p-6 shadow-2xl border-r border-zinc-200 dark:border-zinc-800 transition-transform duration-300 ease-out',
            mobileOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex items-center justify-between pb-4 border-b border-border">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center space-x-2 font-bold text-foreground text-lg"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent font-extrabold tracking-tight">
                Vibe UI
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* Scrollable Nav Area */}
          <div
            id="docs-sidebar-mobile-aside"
            className="flex-1 overflow-y-auto no-scrollbar py-4 space-y-4"
          >
            {/* Mobile Main Nav Links */}
            <nav className="flex flex-col gap-2 border-b border-border pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* Sidebar Navigation */}
            <div className="pt-2">
              {mounted && <Sidebar open={mobileOpen} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
