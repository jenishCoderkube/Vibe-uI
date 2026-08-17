'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  FolderGit2,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  GitBranch,
  ArrowUpRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  name: string
  path: string
  description: string
  coverage: number
  tasksCompleted: number
  totalTasks: number
  status: 'Healthy' | 'Needs Attention' | 'Building'
  version: string
  contributors: string[]
}

const contributorAvatars: Record<string, string> = {
  JS: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80',
  EL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80',
  AA: 'https://github.com/vibeui.png',
  EW: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&auto=format&fit=crop&q=80',
}

export function ProjectsDirectory({
  searchQuery = '',
  statusFilter = 'all',
}: {
  searchQuery?: string
  statusFilter?: string
}) {
  const projects: Project[] = [
    {
      name: 'packages/ui',
      path: 'e:\\Vibe-uI\\packages\\ui',
      description:
        'Vibe UI Core components and hooks library featuring Tailwind CSS and custom animations.',
      coverage: 98,
      tasksCompleted: 45,
      totalTasks: 45,
      status: 'Healthy',
      version: 'v0.1.1',
      contributors: ['JS', 'EL', 'AA'],
    },
    {
      name: 'packages/registry',
      path: 'e:\\Vibe-uI\\packages\\registry',
      description:
        'Component registry bundler and script processor compiling blocks JSON mappings.',
      coverage: 95,
      tasksCompleted: 14,
      totalTasks: 15,
      status: 'Building',
      version: 'v0.1.1',
      contributors: ['AA', 'JS'],
    },
    {
      name: 'apps/docs',
      path: 'e:\\Vibe-uI\\apps\\docs',
      description:
        'Documentation platform built on Next.js presenting component previews and code playgrounds.',
      coverage: 92,
      tasksCompleted: 38,
      totalTasks: 40,
      status: 'Healthy',
      version: 'v1.4.0',
      contributors: ['EL', 'JS', 'EW'],
    },
    {
      name: 'packages/cli',
      path: 'e:\\Vibe-uI\\packages\\cli',
      description:
        'Command line terminal installer script for initializing components directly in local workspaces.',
      coverage: 88,
      tasksCompleted: 8,
      totalTasks: 10,
      status: 'Needs Attention',
      version: 'v0.1.0',
      contributors: ['JS', 'AA'],
    },
  ]

  const commits = [
    {
      sha: '8d2fe32',
      desc: 'feat: Add cards component design showcase in team view',
      author: 'AA',
      env: 'Production',
      status: 'Success',
      time: '3 mins ago',
    },
    {
      sha: '9c5a14d',
      desc: 'fix: Align table headers and cell row details',
      author: 'EL',
      env: 'Staging',
      status: 'Success',
      time: '1 hour ago',
    },
    {
      sha: '3b8e011',
      desc: 'refactor: Shift layout-shell sidebar to Radix',
      author: 'JS',
      env: 'Staging',
      status: 'Success',
      time: '2 hours ago',
    },
  ]

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.version.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'Healthy' && p.status === 'Healthy') ||
      (statusFilter === 'Building' && p.status === 'Building') ||
      (statusFilter === 'Needs Attention' && p.status === 'Needs Attention')
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 w-full text-left">
      {/* Grid of Standard and Elegant Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((proj) => (
          <Card
            key={proj.name}
            className="p-5 bg-muted/40 border-border flex flex-col justify-between hover:bg-muted/65 hover:border-border/80 transition-all duration-200"
          >
            <div className="space-y-4">
              {/* Header: Project Name & Status Badge */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-bold text-foreground font-mono">
                      {proj.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground block font-mono">
                    {proj.path}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    'text-[9px] font-mono py-0.5 px-2 flex items-center gap-1 font-bold',
                    proj.status === 'Healthy'
                      ? 'border-foreground bg-foreground text-background'
                      : proj.status === 'Building'
                        ? 'border-border bg-muted/80 text-foreground animate-pulse'
                        : 'border-border bg-background text-muted-foreground',
                  )}
                >
                  {proj.status === 'Healthy' ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : proj.status === 'Building' ? (
                    <RefreshCw className="h-3 w-3 animate-spin" />
                  ) : (
                    <AlertCircle className="h-3 w-3" />
                  )}
                  <span>{proj.status}</span>
                </Badge>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {proj.description}
              </p>

              {/* Metrics: Test Coverage & Tasks */}
              <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-border/40">
                <div className="space-y-1">
                  <span className="text-[10px] text-muted-foreground block font-mono uppercase tracking-wider">
                    TEST COVERAGE
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-foreground">
                      {proj.coverage}%
                    </span>
                    <Progress
                      value={proj.coverage}
                      className="h-2 min-w-0 flex-1"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-muted-foreground block font-mono uppercase tracking-wider">
                    TASKS DONE
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-foreground">
                      {proj.tasksCompleted}/{proj.totalTasks}
                    </span>
                    <Progress
                      value={(proj.tasksCompleted / proj.totalTasks) * 100}
                      className="h-2 min-w-0 flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer: Contributors & Version Action Button */}
            <div className="flex items-center justify-between gap-4 pt-4 mt-auto">
              <div className="flex items-center">
                <span className="text-[10px] text-muted-foreground mr-2 font-mono uppercase">
                  LEADS:
                </span>
                <div className="flex -space-x-1.5 overflow-hidden">
                  {proj.contributors.map((c, i) => (
                    <Avatar
                      key={i}
                      className="h-5 w-5 border border-background shadow-sm hover:translate-y-[-2px] transition-transform"
                    >
                      <AvatarImage src={contributorAvatars[c]} alt={c} />
                      <AvatarFallback className="text-[8px] bg-primary text-primary-foreground font-bold">
                        {c}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-[9px] font-mono py-0.5"
                >
                  {proj.version}
                </Badge>
                <Button
                  variant="outline"
                  className="h-7 w-7 p-0 bg-background border-border flex items-center justify-center cursor-pointer text-foreground hover:bg-muted"
                  onClick={() => alert(`Opening workspace at ${proj.path}`)}
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Git Activity & Build Status Logs */}
      <Card className="bg-muted/40 border-border p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-foreground">
              Recent Deployment Activity
            </h3>
            <p className="text-[11px] text-muted-foreground">
              Git commit pipeline checks and target environments
            </p>
          </div>
          <Badge className="bg-muted text-muted-foreground border border-border flex items-center gap-1 text-[9px] py-0.5 px-2 font-mono">
            <GitBranch className="h-3 w-3" />
            <span>main branch</span>
          </Badge>
        </div>
        <div className="space-y-4 pt-1">
          {commits.map((c) => (
            <div
              key={c.sha}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/40 last:pb-0 last:border-0"
            >
              <div className="flex items-start gap-3 min-w-0">
                <Avatar className="h-6 w-6 shrink-0 mt-0.5">
                  <AvatarImage
                    src={contributorAvatars[c.author]}
                    alt={c.author}
                  />
                  <AvatarFallback className="text-[8px] bg-primary text-primary-foreground font-bold">
                    {c.author}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-xs font-semibold text-foreground truncate block">
                    {c.desc}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                    <span className="text-foreground/80 font-bold">
                      {c.sha}
                    </span>
                    <span>•</span>
                    <span>by {c.author}</span>
                    <span>•</span>
                    <span>{c.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge
                  variant="secondary"
                  className="bg-muted border-border border text-[9px] py-0.5 px-2 font-medium"
                >
                  {c.env}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-foreground text-background border-0 text-[9px] py-0.5 px-2 font-bold font-mono"
                >
                  {c.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
