'use client'

import * as React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Label,
} from 'vibe-ui'

const NOTIFICATIONS = [
  {
    id: 'transactions',
    label: 'Transaction alerts',
    description: 'Deposits, withdrawals, and transfers.',
    defaultChecked: true,
  },
  {
    id: 'security',
    label: 'Security alerts',
    description: 'Login attempts and account changes.',
    defaultChecked: true,
  },
]

export function NotificationSettings() {
  return (
    <Card className="w-full">
      <CardHeader className="p-3.5 pb-2">
        <CardTitle className="text-sm font-semibold">
          Alert Preferences
        </CardTitle>
        <CardDescription className="text-[10px]">
          Choose push alerts you want to receive.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2.5 p-3.5 pt-0">
        {NOTIFICATIONS.map((n) => (
          <div
            key={n.id}
            className="flex items-start justify-between gap-2.5 text-left"
          >
            <div className="space-y-0.5">
              <Label
                htmlFor={`notify-${n.id}`}
                className="font-semibold text-[11px] leading-none"
              >
                {n.label}
              </Label>
              <p className="text-[9px] text-muted-foreground leading-tight">
                {n.description}
              </p>
            </div>
            <Checkbox
              id={`notify-${n.id}`}
              defaultChecked={n.defaultChecked}
              className="size-3.5 shrink-0"
            />
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-3.5 pt-0">
        <Button className="w-full h-8 text-xs font-semibold">
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
export default NotificationSettings
