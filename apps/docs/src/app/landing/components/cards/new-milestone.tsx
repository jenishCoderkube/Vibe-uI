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
  Input,
  Label,
} from 'vibe-ui'

export function NewMilestone() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Set a new milestone</CardTitle>
        <CardDescription>
          Define your financial target and we'll help you pace your savings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-left">
        <div className="space-y-2">
          <Label htmlFor="goal-name">Goal Name</Label>
          <Input id="goal-name" placeholder="e.g. New Car, Home Downpayment" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="target-amount">Target Amount</Label>
            <Input id="target-amount" defaultValue="$15,000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="target-date">Target Date</Label>
            <Input id="target-date" defaultValue="Dec 2025" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full font-semibold">Create Goal</Button>
        <Button variant="outline" className="w-full font-semibold">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
