'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Item,
  ItemContent,
  Separator
} from 'vibe-ui'

const netRoyalties = 1248.75
const processingFee = 37.46
const totalClaimable = netRoyalties - processingFee

const formatCurrency = (amount: number) =>
  amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

export function ClaimableBalance() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-2">
        <CardDescription>Earnings Breakdown</CardDescription>
        <CardTitle className="text-4xl font-bold tabular-nums">
          ${formatCurrency(totalClaimable)}
        </CardTitle>
        <div className="flex">
          <Badge variant="outline" className="gap-1.5 py-0.5 border-amber-500/20 text-amber-600 dark:text-amber-500">
            <span className="size-1.5 rounded-full bg-amber-500" />
            Pending Setup
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Item variant="muted" className="flex-col items-stretch p-4">
          <ItemContent className="gap-3 w-full">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground">Net Royalties</span>
              <span className="font-medium tabular-nums">
                ${formatCurrency(netRoyalties)}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground">Processing Fee</span>
              <span className="font-medium tabular-nums text-muted-foreground">
                -${formatCurrency(processingFee)}
              </span>
            </div>
            <Separator className="bg-border/60" />
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground">Total Ready to Claim</span>
              <span className="font-bold tabular-nums">
                ${formatCurrency(totalClaimable)} USD
              </span>
            </div>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter>
        <CardDescription className="text-xs leading-relaxed">
          Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on the 15th of each month.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
