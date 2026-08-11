'use client'

import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ChartAreaInteractive() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shrink-0">
      <Card className="col-span-1 lg:col-span-2 bg-muted/40 border-border p-5 space-y-4 text-left">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold">
              Active CPU Workload
            </CardTitle>
            <CardDescription className="text-xs">
              Uptime performance overview metrics
            </CardDescription>
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            99.9% active
          </Badge>
        </div>
        {/* Simulated SVG line spark chart bar loader grid */}
        <div className="h-28 w-full flex items-end justify-between gap-1 pt-2 border-b border-border/40 pb-1">
          {[
            40, 55, 30, 45, 60, 20, 35, 50, 75, 40, 55, 65, 80, 45, 30, 60, 70,
            85, 90, 50, 60, 45, 35, 75, 80,
          ].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 bg-emerald-500/80 rounded-t-sm hover:bg-emerald-400 transition-all cursor-pointer"
              title={`Time ${i}: ${h}%`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
          <span>00:00 AM</span>
          <span>06:00 AM</span>
          <span>12:00 PM</span>
          <span>06:00 PM</span>
        </div>
      </Card>
      <Card className="bg-muted/40 border-border p-5 space-y-4 text-left flex flex-col justify-between">
        <div>
          <CardTitle className="text-sm font-semibold text-foreground">
            System Safe Check
          </CardTitle>
          <CardDescription className="text-xs">
            Database sync index integrity state
          </CardDescription>
        </div>
        <div className="py-2.5 space-y-3">
          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>core-master-0</span>
            <span className="text-emerald-400 font-bold">Active</span>
          </div>
          <div className="w-full bg-muted-foreground/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: '85%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
            <span>replica-east-1</span>
            <span className="text-emerald-400 font-bold">Synchronized</span>
          </div>
          <div className="w-full bg-muted-foreground/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400" style={{ width: '70%' }} />
          </div>
        </div>
        <Button className="w-full h-8 text-xs bg-emerald-600 hover:bg-emerald-500 text-foreground font-semibold">
          Verify Integrity
        </Button>
      </Card>
    </div>
  )
}
