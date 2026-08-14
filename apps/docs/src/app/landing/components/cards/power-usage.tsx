'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from 'vibe-ui'

const chartData = [
  { hour: '6a', usage: 1.2 },
  { hour: '8a', usage: 2.8 },
  { hour: '10a', usage: 3.1 },
  { hour: '12p', usage: 2.4 },
  { hour: '2p', usage: 3.4 },
  { hour: '4p', usage: 2.9 },
  { hour: '6p', usage: 3.8 },
  { hour: '8p', usage: 3.2 },
]

export function PowerUsage() {
  const maxUsage = Math.max(...chartData.map((item) => item.usage))

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Power Usage</CardTitle>
        <CardDescription>Whole Home</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Custom Bar Chart Visual */}
        <div
          className="flex h-[130px] w-full items-end gap-2 px-1"
          role="img"
          aria-label="Power usage by hour"
        >
          {chartData.map((item) => (
            <div
              key={item.hour}
              className="flex h-full flex-1 flex-col justify-end gap-1.5"
            >
              <div
                className="min-h-1.5 rounded-t bg-primary/70 hover:bg-primary transition-all duration-300"
                style={{ height: `${(item.usage / maxUsage) * 100}%` }}
              />
              <span className="text-center text-[10px] text-muted-foreground font-semibold">
                {item.hour}
              </span>
            </div>
          ))}
        </div>
        <Separator className="bg-border/60" />
        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-muted-foreground font-medium">
              Currently Using
            </span>
            <span className="text-base font-semibold tabular-nums">3.4 kW</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-muted-foreground font-medium">
              Solar Gen
            </span>
            <span className="text-base font-semibold tabular-nums text-emerald-600 dark:text-emerald-500">+1.2 kW</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
