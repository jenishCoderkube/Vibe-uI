'use client'

import React from 'react'

export function Preloader() {
  const [loading, setLoading] = React.useState(true)
  const [fade, setFade] = React.useState(false)

  React.useEffect(() => {
    // Fade out preloader after initial page load
    const fadeTimer = setTimeout(() => {
      setFade(true)
    }, 1200)

    const stopTimer = setTimeout(() => {
      setLoading(false)
    }, 1700)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(stopTimer)
    }
  }, [])

  if (!loading) return null

  const letters = 'Vibe UI'.split('')

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 select-none ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background shadow-2xl animate-logo-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-background"
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
          <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-md animate-pulse" />
        </div>

        {/* Staggered text */}
        <div className="flex items-center text-3xl font-extrabold tracking-tight">
          {letters.map((char, index) => (
            <span
              key={index}
              className="inline-block animate-bounce bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent"
              style={{
                animationDelay: `${index * 0.08}s`,
                animationDuration: '1.2s',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <div className="flex items-center space-x-2 text-xs font-medium text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
          <span>Initializing Vibe UI System...</span>
        </div>
      </div>
    </div>
  )
}
