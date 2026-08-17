'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  GitPullRequest,
  Milestone,
  Trash2,
  ShieldCheck,
  Play,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Release {
  version: string
  channel: 'Stable' | 'Beta' | 'Alpha'
  coverage: number
  status: 'Passed' | 'Failed' | 'Running'
  date: string
  author: string
}

const contributorAvatars: Record<string, string> = {
  JS: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80',
  EL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80',
  AA: 'https://github.com/vibeui.png',
  EW: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&auto=format&fit=crop&q=80',
}

export function LifecycleDirectory({
  searchQuery = '',
  channelFilter = 'all',
}: {
  searchQuery?: string
  channelFilter?: string
}) {
  const releases: Release[] = [
    {
      version: 'v0.1.1',
      channel: 'Stable',
      coverage: 98,
      status: 'Passed',
      date: '2 days ago',
      author: 'JS',
    },
    {
      version: 'v0.1.0-beta.2',
      channel: 'Beta',
      coverage: 92,
      status: 'Passed',
      date: '1 week ago',
      author: 'AA',
    },
    {
      version: 'v0.1.0-beta.1',
      channel: 'Beta',
      coverage: 90,
      status: 'Passed',
      date: '2 weeks ago',
      author: 'EL',
    },
    {
      version: 'v0.0.9-alpha.3',
      channel: 'Alpha',
      coverage: 88,
      status: 'Failed',
      date: '3 weeks ago',
      author: 'JS',
    },
  ]

  const filtered = releases.filter((r) => {
    const matchesSearch =
      r.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.status.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesChannel =
      channelFilter === 'all' ||
      r.channel.toLowerCase() === channelFilter.toLowerCase()
    return matchesSearch && matchesChannel
  })

  return (
    <div className="space-y-6 w-full text-left">
      {/* Lifecycle Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <Card className="bg-muted/40 border-border p-4 space-y-2">
          <span className="text-xs text-muted-foreground font-medium block">
            Active Releases
          </span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black">14</span>
            <Badge
              variant="secondary"
              className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
            >
              +1 stable
            </Badge>
          </div>
          <span className="text-[10px] text-muted-foreground block">
            Across npm and git tags
          </span>
        </Card>
        <Card className="bg-muted/40 border-border p-4 space-y-2">
          <span className="text-xs text-muted-foreground font-medium block">
            Build Quality Index
          </span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black">99.4%</span>
            <Badge
              variant="secondary"
              className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
            >
              +0.2%
            </Badge>
          </div>
          <span className="text-[10px] text-muted-foreground block">
            CI/CD pipeline checks passed
          </span>
        </Card>
        <Card className="bg-muted/40 border-border p-4 space-y-2">
          <span className="text-xs text-muted-foreground font-medium block">
            Open Alpha Feedbacks
          </span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black">38</span>
            <Badge
              variant="secondary"
              className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
            >
              +5 today
            </Badge>
          </div>
          <span className="text-[10px] text-muted-foreground block">
            Developer Github issues
          </span>
        </Card>
        <Card className="bg-muted/40 border-border p-4 space-y-2">
          <span className="text-xs text-muted-foreground font-medium block">
            Deprecated Packages
          </span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black">1</span>
            <Badge
              variant="secondary"
              className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
            >
              EOL
            </Badge>
          </div>
          <span className="text-[10px] text-muted-foreground block">
            Legacy bundle warnings active
          </span>
        </Card>
      </div>

      {/* Release Velocity Chart and Check Status Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shrink-0">
        <Card className="col-span-1 lg:col-span-2 bg-muted/40 border-border p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-foreground">
                Release Pipeline Velocity
              </h3>
              <p className="text-[11px] text-muted-foreground font-sans">
                Average pipeline execution and test runners validation success
                rates
              </p>
            </div>
            <Badge className="bg-muted text-muted-foreground border border-border">
              99.8% uptime
            </Badge>
          </div>
          <div className="h-36 w-full flex items-end justify-between gap-1 pt-2 border-b border-border/40 pb-1">
            {[
              85, 90, 78, 92, 99, 100, 95, 90, 85, 92, 96, 100, 100, 98, 92, 85,
              90, 94, 98, 100, 100, 95, 92, 99, 100,
            ].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-foreground rounded-t-sm hover:bg-foreground/80 transition-all cursor-pointer"
                title={`Run ${i}: ${h}%`}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
            <span>Tag v0.0.1</span>
            <span>Tag v0.0.5</span>
            <span>Tag v0.1.0</span>
            <span>Tag v0.1.1</span>
          </div>
        </Card>

        {/* Channels Safe Check Status */}
        <Card className="bg-muted/40 border-border p-5 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-foreground">
              Package Status Check
            </h3>
            <p className="text-[11px] text-muted-foreground">
              Package release lifecycle channels
            </p>
          </div>
          <div className="py-2.5 space-y-3">
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>@vibe-ui/core (Stable)</span>
              <span className="text-foreground font-bold">100% stable</span>
            </div>
            <Progress value={100} className="h-2 min-w-0" />
            <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
              <span>@vibe-ui/cli (Beta)</span>
              <span className="text-foreground font-bold">85% verified</span>
            </div>
            <Progress value={85} className="h-2 min-w-0" />
            <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
              <span>@vibe-ui/registry (Stable)</span>
              <span className="text-foreground font-bold">100% stable</span>
            </div>
            <Progress value={100} className="h-2 min-w-0" />
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-[9px] font-mono py-0.5 w-full text-center flex justify-center"
            >
              All dependencies synchronized
            </Badge>
          </div>
        </Card>
      </div>

      {/* Lifecycle Release Timeline list */}
      <Card className="bg-muted/40 border-border p-5 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Release Distribution History
          </h3>
          <p className="text-[11px] text-muted-foreground">
            Active version tracks and release logs
          </p>
        </div>
        <div className="space-y-4 pt-1">
          {filtered.map((rel) => (
            <div
              key={rel.version}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/40 last:pb-0 last:border-0"
            >
              <div className="flex items-start gap-3 min-w-0">
                <Avatar className="h-6 w-6 shrink-0 mt-0.5">
                  <AvatarImage
                    src={contributorAvatars[rel.author]}
                    alt={rel.author}
                  />
                  <AvatarFallback className="text-[8px] bg-primary text-primary-foreground font-bold">
                    {rel.author}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-xs font-semibold text-foreground truncate block font-mono">
                    {rel.version}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                    <span className="text-foreground/80 font-bold">
                      {rel.channel}
                    </span>
                    <span>•</span>
                    <span>Test coverage: {rel.coverage}%</span>
                    <span>•</span>
                    <span>{rel.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge
                  variant="outline"
                  className={cn(
                    'text-[9px] font-mono py-0.5 px-2 flex items-center gap-1 font-bold',
                    rel.status === 'Passed'
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border bg-background text-muted-foreground',
                  )}
                >
                  {rel.status === 'Passed' ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <AlertCircle className="h-3 w-3" />
                  )}
                  <span>{rel.status}</span>
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
