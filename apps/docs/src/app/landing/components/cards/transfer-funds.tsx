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
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Item,
  ItemContent,
  Separator,
} from 'vibe-ui'

const FROM_ACCOUNTS = [
  { label: 'Main Checking (··8402) — $12,450.00', value: 'checking' },
  { label: 'Business (··7731) — $8,920.00', value: 'business' },
]

const TO_ACCOUNTS = [
  { label: 'High Yield Savings (··1192) — $42,100.00', value: 'savings' },
  { label: 'Investment (··3349) — $18,200.00', value: 'investment' },
]

export function TransferFunds() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-3.5 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xs font-semibold">
            Account Transfer
          </CardTitle>
          <CardDescription className="text-[10px]">
            Move money between your connected accounts.
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="bg-muted hover:bg-muted/80 size-6 rounded-md"
          aria-label="Dismiss transfer funds"
        >
          <X className="size-3 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3 p-3.5 pt-0 text-left">
        <div className="space-y-1">
          <Label
            htmlFor="transfer-amount"
            className="text-[11px] font-semibold"
          >
            Amount to Transfer
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-2.5 text-xs text-muted-foreground">
              $
            </span>
            <Input
              id="transfer-amount"
              defaultValue="1,200.00"
              className="h-8 text-xs pl-5 w-full"
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="from-account" className="text-[11px] font-semibold">
            From Account
          </Label>
          <Select defaultValue="checking">
            <SelectTrigger id="from-account" className="w-full h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {FROM_ACCOUNTS.map((item) => (
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
          <Label htmlFor="to-account" className="text-[11px] font-semibold">
            To Account
          </Label>
          <Select defaultValue="savings">
            <SelectTrigger id="to-account" className="w-full h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TO_ACCOUNTS.map((item) => (
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

        <Item
          variant="muted"
          className="p-3 flex flex-col items-stretch mt-1 text-xs"
        >
          <ItemContent className="space-y-2 w-full">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">Estimated arrival</span>
              <span className="font-semibold text-foreground">
                Today, Apr 14
              </span>
            </div>
            <Separator className="bg-border/60" />
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">Transaction fee</span>
              <span className="font-semibold tabular-nums">$0.00</span>
            </div>
            <Separator className="bg-border/60" />
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold">Total amount</span>
              <span className="font-bold tabular-nums">$1,200.00</span>
            </div>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter className="p-3.5 pt-0">
        <Button className="w-full h-8 text-xs font-semibold">
          Confirm Transfer
        </Button>
      </CardFooter>
    </Card>
  )
}
export default TransferFunds
