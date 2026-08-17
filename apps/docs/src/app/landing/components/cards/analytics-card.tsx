'use client'

import * as React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  Button,
} from 'vibe-ui'

const areaPath = 'M0 52L18 40L36 46L54 70L72 50L100 49V86H0Z'
const strokePath = 'M0 52L18 40L36 46L54 70L72 50L100 49'

export function AnalyticsCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="space-y-1.5 text-left">
          <CardTitle className="text-base font-semibold">Analytics</CardTitle>
          <CardDescription className="flex items-center gap-1.5 text-xs">
            418.2K Visitors
            <Badge className="h-4 px-1.5 text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border-none font-semibold">
              +10%
            </Badge>
          </CardDescription>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs font-semibold px-2.5"
        >
          View Analytics
        </Button>
      </CardHeader>

      {/* Pure SVG Line Chart Mockup */}
      <svg
        viewBox="0 0 100 86"
        preserveAspectRatio="none"
        className="aspect-[1/0.35] w-full text-primary/10 dark:text-primary/20"
        role="img"
        aria-label="Visitor trend"
      >
        <path d={areaPath} fill="currentColor" opacity="0.4" />
        <path
          d={strokePath}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Card>
  )
}
