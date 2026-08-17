'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { MessageSquare, CheckSquare, Sparkles, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Member {
  name: string
  role: string
  status: 'Online' | 'Offline'
  activeProject: string
  capacity: number
  workloadState: 'High' | 'Optimal' | 'Low'
}

export function TeamDirectory({
  searchQuery = '',
  teamFilter = 'all',
}: {
  searchQuery?: string
  teamFilter?: string
}) {
  const members: Member[] = [
    {
      name: 'Eddie Lake',
      role: 'Design Lead',
      status: 'Online',
      activeProject: 'Button Component Docs',
      capacity: 92,
      workloadState: 'High',
    },
    {
      name: 'Jamik Tashpulatov',
      role: 'Senior Developer',
      status: 'Online',
      activeProject: 'Badge Component Preview',
      capacity: 80,
      workloadState: 'Optimal',
    },
    {
      name: 'Antigravity AI',
      role: 'AI Assistant',
      status: 'Online',
      activeProject: 'Sidebar Menu Refactor',
      capacity: 100,
      workloadState: 'High',
    },
  ]

  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.activeProject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus =
      teamFilter === 'all' ||
      m.status.toLowerCase() === teamFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const projects = [
    {
      name: 'Button Component Docs',
      status: 'Released',
      lead: 'Eddie Lake',
      tasks: '12 / 12 completed',
      progress: 100,
    },
    {
      name: 'Badge Component Preview',
      status: 'In Progress',
      lead: 'Jamik Tashpulatov',
      tasks: '8 / 10 completed',
      progress: 80,
    },
    {
      name: 'Sidebar Menu Refactor',
      status: 'In Progress',
      lead: 'Antigravity AI',
      tasks: '15 / 15 completed',
      progress: 100,
    },
  ]

  return (
    <div className="space-y-8 w-full text-left">
      {/* Grid of Team Member Cards using premium glow variant card component design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card
            key={member.name}
            variant="glow"
            className="p-0 border-border overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Top section: High contrast Header banner and workload state badge */}
            <div className="relative h-14 bg-muted/40 border-b border-border/40 px-4 flex items-center justify-between z-10">
              <Badge
                variant="outline"
                className={cn(
                  'text-[9px] py-0.5 px-2 font-mono font-bold tracking-wider uppercase',
                  member.workloadState === 'High'
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-background text-foreground',
                )}
              >
                {member.workloadState} Workload
              </Badge>
              <span
                className={cn(
                  'h-2 w-2 rounded-full',
                  member.status === 'Online'
                    ? 'bg-foreground animate-pulse'
                    : 'bg-muted-foreground/30',
                )}
                title={member.status}
              />
            </div>

            {/* Profile Content Section */}
            <div className="p-5 flex flex-col items-center text-center space-y-3 flex-1 relative z-10">
              {/* Profile Avatar overlapping header slightly */}
              <div className="relative -mt-10">
                <Avatar className="h-16 w-16 border-4 border-background bg-card shadow-md">
                  <AvatarFallback className="text-base bg-primary text-primary-foreground font-black">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Title & Role */}
              <div className="space-y-1">
                <h3 className="text-sm font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              {/* Tag for project */}
              <div className="pt-0.5">
                <Badge
                  variant="secondary"
                  className="bg-muted-foreground/10 text-foreground border-0 text-[9px] py-0.5 px-2 flex items-center gap-1 font-medium"
                >
                  <Sparkles className="h-3 w-3 text-muted-foreground" />
                  <span>{member.activeProject}</span>
                </Badge>
              </div>

              {/* Progress status */}
              <div className="space-y-1.5 w-full pt-2">
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>CAPACITY</span>
                  <span className="font-bold text-foreground">
                    {member.capacity}%
                  </span>
                </div>
                <Progress
                  value={member.capacity}
                  className="h-2.5 min-w-0 w-full"
                />
              </div>
            </div>

            {/* Footer Action buttons with border separator */}
            <div className="p-4 border-t border-border/40 bg-muted/20 flex gap-2 z-10">
              <Button
                variant="outline"
                className="flex-1 h-8 text-[10px] bg-background border-border flex items-center justify-center gap-1 cursor-pointer font-medium text-muted-foreground hover:text-foreground"
                onClick={() => alert(`Messaging ${member.name}...`)}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Message</span>
              </Button>
              <Button
                className="flex-1 h-8 text-[10px] bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-1 cursor-pointer font-semibold"
                onClick={() => alert(`Viewing tasks for ${member.name}...`)}
              >
                <CheckSquare className="h-3.5 w-3.5" />
                <span>Tasks</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Project ownership overview card */}
      <Card className="bg-muted/40 border-border p-5 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Project Ownership Timelines
          </h3>
          <p className="text-[11px] text-muted-foreground">
            Track active project progress, owners and timelines
          </p>
        </div>
        <div className="space-y-4 pt-1">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/40 last:pb-0 last:border-0"
            >
              <div className="space-y-1 min-w-[200px]">
                <span className="text-xs font-bold text-foreground block">
                  {proj.name}
                </span>
                <span className="text-[10px] text-muted-foreground block font-sans">
                  Lead: {proj.lead} | {proj.tasks}
                </span>
              </div>
              <div className="flex items-center gap-3 flex-1 max-w-md w-full">
                <Progress
                  value={proj.progress}
                  className="h-2.5 min-w-0 flex-1"
                />
                <Badge className="bg-muted text-foreground border border-border text-[9px] py-0.5 px-2 font-medium shrink-0">
                  {proj.status} ({proj.progress}%)
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* NEW SECTION: Cards Component Design Gallery */}
      <div className="space-y-4 pt-2">
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Design System Cards Component Design
          </h3>
          <p className="text-[11px] text-muted-foreground">
            Preview available card layout aesthetics within the current design
            system
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Default Variant Card */}
          <Card variant="default" className="p-5 space-y-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
              Default Card Variant
            </span>
            <h4 className="text-xs font-bold text-foreground">
              Standard Interface Border
            </h4>
            <p className="text-[11px] text-muted-foreground leading-normal">
              A clean card with standard borders and subtle light/dark
              backgrounds designed for structured dashboard views.
            </p>
            <div className="pt-1">
              <Badge variant="outline" className="text-[9px] py-0.5 px-1.5">
                border-border
              </Badge>
            </div>
          </Card>

          {/* Glass Variant Card */}
          <Card variant="glass" className="p-5 space-y-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
              Glassmorphism Card
            </span>
            <h4 className="text-xs font-bold text-foreground">
              Backdrop Filter Blur
            </h4>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Features a frosted glass transparency and background blur, ideal
              for overlapping elements or premium banners.
            </p>
            <div className="pt-1">
              <Badge variant="outline" className="text-[9px] py-0.5 px-1.5">
                backdrop-blur-md
              </Badge>
            </div>
          </Card>

          {/* Retro Neo-Brutalist Card */}
          <Card variant="retro" className="p-5 space-y-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
              Neo-Brutalist Variant
            </span>
            <h4 className="text-xs font-bold text-foreground">
              Neo-brutalist Shadow Offset
            </h4>
            <p className="text-[11px] text-muted-foreground leading-normal">
              High-contrast retro layout with hard solid drop shadows and thick
              borders, giving an edgy print aesthetic.
            </p>
            <div className="pt-1">
              <Badge variant="outline" className="text-[9px] py-0.5 px-1.5">
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              </Badge>
            </div>
          </Card>

          {/* Glow Interactive Card */}
          <Card variant="glow" className="p-5 space-y-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
              Interactive Glow Variant
            </span>
            <h4 className="text-xs font-bold text-foreground">
              Dynamic Mouse Tracking Glow
            </h4>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Monochrome hover tracking gradient that dynamically lights up
              borders based on real-time mouse coordinate position.
            </p>
            <div className="pt-1">
              <Badge variant="outline" className="text-[9px] py-0.5 px-1.5">
                pointer-events-none
              </Badge>
            </div>
          </Card>

          {/* Cyberpunk Terminal Card */}
          <Card variant="cyberpunk" className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Cyberpunk Variant
              </span>
              <Terminal className="h-3 w-3 text-emerald-500" />
            </div>
            <h4 className="text-xs font-bold text-emerald-500 font-mono">
              SYS_CHECK: OK
            </h4>
            <p className="text-[11px] text-emerald-600/80 font-mono leading-normal">
              Emerald borders and terminal design accents customized for
              real-time console statuses or technical log outputs.
            </p>
            <div className="pt-1">
              <Badge
                variant="outline"
                className="text-[9px] border-emerald-500/30 text-emerald-500 py-0.5 px-1.5"
              >
                border-emerald-500
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
