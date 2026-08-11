import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm mt-20">
      <div className="w-full px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-foreground text-lg group"
            >
              <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-violet-500 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 text-primary-foreground"
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
              </div>
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent font-extrabold tracking-tight">
                Vibe UI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Beautifully crafted, highly interactive, multi-preset React
              component library built for Tailwind CSS v4.
            </p>
          </div>

          {/* Links Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/docs/introduction"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/components/accordion"
                    className="hover:text-foreground transition-colors"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/introduction#cli-installation"
                    className="hover:text-foreground transition-colors"
                  >
                    CLI Installer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/jenishCoderkube/Vibe-uI/issues"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub Issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    Discord Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Socials
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter / X
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/jenishCoderkube/Vibe-uI"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub Org
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.npmjs.com/package/vibe-ui-kit"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    NPM Packages
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground select-none">
          <p>© {new Date().getFullYear()} Vibe UI. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
