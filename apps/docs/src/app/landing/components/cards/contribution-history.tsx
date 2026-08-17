'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Item,
  ItemContent,
  ItemDescription,
} from 'vibe-ui'

const chartData = [
  { month: 'Dec', amount: 800 },
  { month: 'Jan', amount: 1100 },
  { month: 'Feb', amount: 900 },
  { month: 'Mar', amount: 1300 },
  { month: 'Apr', amount: 750 },
]

export function ContributionHistory() {
  const maxAmount = Math.max(...chartData.map((item) => item.amount))

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Scheduled Payouts</CardTitle>
        <CardDescription>Last 5 months of activity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Custom Bar Chart Visual */}
        <div
          className="flex h-[160px] w-full items-end gap-3 px-2"
          role="img"
          aria-label="Last 5 months of contribution activity"
        >
          {chartData.map((item, index) => {
            // Colors matching Vibe UI's theme structure (using Tailwind classes)
            const colorClass =
              index === 0
                ? 'bg-primary/40'
                : index === 1
                  ? 'bg-primary/60'
                  : index === 2
                    ? 'bg-primary/80'
                    : index === 3
                      ? 'bg-primary'
                      : 'bg-primary/50'

            return (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col justify-end gap-2"
              >
                <div
                  className={`min-h-2 rounded-t-md transition-all duration-500 hover:opacity-95 ${colorClass}`}
                  style={{ height: `${(item.amount / maxAmount) * 100}%` }}
                />
                <span className="text-center text-[10px] text-muted-foreground font-semibold uppercase">
                  {item.month}
                </span>
              </div>
            )
          })}
        </div>

        {/* Detailed Stats */}
        <div className="grid w-full grid-cols-2 gap-3 pt-2">
          <Item
            variant="muted"
            className="flex-col items-stretch p-3 text-left"
          >
            <ItemContent className="gap-1">
              <ItemDescription className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Upcoming
              </ItemDescription>
              <span className="text-sm font-semibold">Aug 2026</span>
              <span className="text-[10px] text-muted-foreground font-medium">
                Scheduled
              </span>
            </ItemContent>
          </Item>
          <Item
            variant="muted"
            className="flex-col items-stretch p-3 text-left"
          >
            <ItemContent className="gap-1">
              <ItemDescription className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Savings Plan
              </ItemDescription>
              <span className="text-sm font-semibold">Accelerated</span>
              <span className="text-[10px] text-muted-foreground font-medium">
                Recurring
              </span>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-semibold">View Full Report</Button>
      </CardFooter>
    </Card>
  )
}
