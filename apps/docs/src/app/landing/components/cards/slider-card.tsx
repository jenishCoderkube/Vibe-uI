import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'vibe-ui'
import { Slider } from 'vibe-ui'

export function SliderDemoCard() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Volume Settings</CardTitle>
        <CardDescription className="text-xs">Adjust your audio preferences.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Master</span>
            <span className="text-xs text-muted-foreground">75%</span>
          </div>
          <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">System</span>
            <span className="text-xs text-muted-foreground">40%</span>
          </div>
          <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
        </div>
      </CardContent>
    </Card>
  )
}
