import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from 'vibe-ui'
import { SparklesText } from 'vibe-ui'

export function SparklesDemoCard() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Special Effects</CardTitle>
        <CardDescription className="text-xs">Add dynamic flair to your UI.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-8 min-h-[140px]">
        <SparklesText className="text-4xl font-bold tracking-tighter">Vibe UI</SparklesText>
      </CardContent>
    </Card>
  )
}
