import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-foreground">
        404 - Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/docs/introduction"
        className="text-sm sm:text-base text-primary hover:underline font-medium"
      >
        Back to Documentation
      </Link>
    </div>
  )
}
