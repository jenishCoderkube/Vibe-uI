'use client'

import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ChartAnalytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shrink-0">
      <Card className="col-span-1 lg:col-span-2 bg-muted/40 border-border p-5 space-y-4 text-left">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold">
              Traffic Flow Analysis
            </CardTitle>
            <CardDescription className="text-xs">
              Unique visitors traffic pattern analysis over 24 hours
            </CardDescription>
          </div>
          <Badge className="bg-muted text-muted-foreground border border-border">
            +8.2% pageviews
          </Badge>
        </div>
        <div className="h-36 w-full flex items-end justify-between gap-1 pt-2 border-b border-border/40 pb-1">
          {[
            35, 42, 50, 65, 80, 75, 60, 45, 55, 70, 85, 95, 90, 75, 65, 50, 40,
            30, 25, 45, 55, 65, 75, 80, 90,
          ].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 bg-foreground rounded-t-sm hover:bg-foreground/80 transition-all cursor-pointer"
              title={`Hour ${i}: ${h}%`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
          <span>12:00 AM</span>
          <span>06:00 AM</span>
          <span>12:00 PM</span>
          <span>06:00 PM</span>
        </div>
      </Card>
      <Card className="bg-muted/40 border-border p-5 space-y-4 text-left flex flex-col justify-between">
        <div>
          <CardTitle className="text-sm font-semibold text-foreground">
            Top Channels
          </CardTitle>
          <CardDescription className="text-xs">
            Active referral source traffic weight
          </CardDescription>
        </div>
        <div className="py-2.5 space-y-3">
          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>Google Organic Search</span>
            <span className="text-foreground font-bold">62%</span>
          </div>
          <div className="w-full bg-muted-foreground/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-foreground" style={{ width: '62%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
            <span>Direct Traffic</span>
            <span className="text-foreground font-bold">25%</span>
          </div>
          <div className="w-full bg-muted-foreground/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-foreground/75" style={{ width: '25%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
            <span>GitHub / vibe-ui</span>
            <span className="text-foreground font-bold">13%</span>
          </div>
          <div className="w-full bg-muted-foreground/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-foreground/45" style={{ width: '13%' }} />
          </div>
        </div>
        <Button className="w-full h-8 text-xs bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Channel Reports
        </Button>
      </Card>
    </div>
  )
}
