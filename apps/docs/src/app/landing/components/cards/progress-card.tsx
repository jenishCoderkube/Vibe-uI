import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'vibe-ui'
import { Progress } from 'vibe-ui'
import { Download } from 'lucide-react'

export function ProgressDemoCard() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">System Update</CardTitle>
          <Download className="size-4 text-muted-foreground" />
        </div>
        <CardDescription className="text-xs">
          Downloading required assets...
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={68} className="w-full h-2" />
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="font-medium text-foreground">68% completed</span>
          <span>1.2 GB / 1.8 GB</span>
        </div>
      </CardContent>
    </Card>
  )
}
