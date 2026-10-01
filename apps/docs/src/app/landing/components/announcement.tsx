'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from 'vibe-ui'

export function Announcement() {
  return (
    <Badge
      asChild
      variant="secondary"
      className="cursor-pointer bg-muted/80 hover:bg-muted text-foreground border border-border/50 px-3 py-1 text-xs font-medium inline-flex items-center gap-1.5 transition-all max-w-[92vw] sm:max-w-none shadow-xs"
    >
      <Link href="/docs/introduction" className="inline-flex items-center gap-1.5 max-w-full truncate">
        <span className="truncate">
          <span className="sm:hidden">Vibe UI • 94+ Components & Blocks</span>
          <span className="hidden sm:inline">Introducing Vibe UI • 94+ Components & Blocks</span>
        </span>
        <ArrowRight className="size-3.5 shrink-0" />
      </Link>
    </Badge>
  )
}
