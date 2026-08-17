'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
} from 'vibe-ui'

const CURRENCIES = [
  { label: 'USD — United States Dollar', value: 'usd' },
  { label: 'EUR — Euro', value: 'eur' },
  { label: 'GBP — British Pound', value: 'gbp' },
  { label: 'JPY — Japanese Yen', value: 'jpy' },
]

export function PayoutThreshold() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-3.5 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xs font-semibold">
            Payout Configurations
          </CardTitle>
          <CardDescription className="text-[10px]">
            Set the minimum balance required before a payout is triggered.
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="bg-muted hover:bg-muted/80 size-6 rounded-md"
          aria-label="Dismiss payout threshold"
        >
          <X className="size-3 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3.5 text-left p-3.5 pt-0">
        <div className="space-y-1">
          <Label
            htmlFor="preferred-currency"
            className="text-[11px] font-semibold"
          >
            Preferred Currency
          </Label>
          <Select defaultValue="usd">
            <SelectTrigger
              id="preferred-currency"
              className="w-full h-8 text-xs"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CURRENCIES.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="text-xs"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline justify-between">
            <Label id="min-payout-label" className="text-[11px] font-semibold">
              Minimum Payout Amount
            </Label>
            <span className="text-xl font-semibold tabular-nums">
              $2,500.00
            </span>
          </div>
          <Progress
            value={25}
            aria-labelledby="min-payout-label"
            aria-valuetext="$2,500 of $10,000"
            className="h-2"
          />
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>$50 (MIN)</span>
            <span>$10,000 (MAX)</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3.5 pt-0">
        <Button className="w-full h-8 text-xs font-semibold">
          Save Threshold
        </Button>
      </CardFooter>
    </Card>
  )
}
export default PayoutThreshold
