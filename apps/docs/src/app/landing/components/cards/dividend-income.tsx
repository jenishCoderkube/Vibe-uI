'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Item,
  ItemContent,
  ItemGroup,
  ItemTitle,
  ItemDescription
} from 'vibe-ui'

const HOLDINGS = [
  {
    name: 'Vanguard',
    shares: '450 Shares',
    amount: '$1,842.10',
    data: [
      { q: 'Q1', value: 380 },
      { q: 'Q2', value: 420 },
      { q: 'Q3', value: 390 },
      { q: 'Q4', value: 652 },
    ],
  },
  {
    name: 'S&P 500 VOO',
    shares: '112 Shares',
    amount: '$928.40',
    data: [
      { q: 'Q1', value: 180 },
      { q: 'Q2', value: 210 },
      { q: 'Q3', value: 320 },
      { q: 'Q4', value: 218 },
    ],
  },
]

export function DividendIncome() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-3.5 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xs font-semibold">Dividends Portfolio</CardTitle>
          <CardDescription className="text-[10px]">
            Quarterly dividend payouts across holdings.
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="bg-muted hover:bg-muted/80 size-6 rounded-md"
          aria-label="Dismiss dividend income"
        >
          <X className="size-3 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="p-3.5 pt-0">
        <ItemGroup>
          {HOLDINGS.map((holding) => (
            <Item key={holding.name} role="listitem" variant="muted" className="flex items-center justify-between p-2 px-3">
              <ItemContent>
                <ItemTitle className="text-xs">{holding.name}</ItemTitle>
                <ItemDescription className="text-[10px]">{holding.shares}</ItemDescription>
              </ItemContent>
              <div
                className="flex h-6 w-16 items-end gap-1"
                role="img"
                aria-label={`${holding.name} quarterly dividends`}
              >
                {holding.data.map((item) => (
                  <div
                    key={item.q}
                    className="min-h-[3px] flex-1 rounded-t-xs bg-primary/80 hover:bg-primary transition-colors"
                    style={{
                      height: `${(item.value / Math.max(...holding.data.map((point) => point.value))) * 100}%`,
                    }}
                  />
                ))}
              </div>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
export default DividendIncome
