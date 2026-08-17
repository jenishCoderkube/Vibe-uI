'use client'

import * as React from 'react'
import { Plus } from 'lucide-react'
import {
  Button,
  Card,
  CardContent,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from 'vibe-ui'

export function EmptyDistributeTrack() {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <Empty className="p-4 border-none shadow-none">
          <EmptyMedia
            variant="default"
            className="bg-muted border border-border/40"
          >
            <Plus className="size-4 text-muted-foreground" />
          </EmptyMedia>
          <EmptyHeader className="text-center mt-3 space-y-1">
            <EmptyTitle className="text-sm font-semibold">
              Publish Release
            </EmptyTitle>
            <EmptyDescription className="text-xs text-muted-foreground text-balance">
              Upload your first master to start reaching listeners on Spotify,
              Apple Music, and more.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="mt-4 flex justify-center">
            <Button size="sm" className="font-semibold">
              Create Release
            </Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
