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
      className="cursor-pointer bg-muted hover:bg-muted/80 text-foreground border-transparent px-3 py-1 text-xs font-medium flex items-center gap-1.5 transition-colors"
    >
      <Link href="/docs/introduction">
        <span>Vibe UI v1.0 has launched</span>
        <ArrowRight className="size-3.5" />
      </Link>
    </Badge>
  )
}
