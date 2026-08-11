'use client'

import React, { useState } from 'react'
import {
  LayoutShell,
  LayoutShellHeader,
  LayoutShellContent,
} from '@/components/ui/layout-shell'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  Search,
  PlusCircle,
  File,
  User,
  CreditCard,
  Bell,
  LogOut,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { AppSidebar } from './components/app-sidebar'
import { ChartAreaInteractive } from './components/chart-area-interactive'
import { DataTable } from './components/data-table'

const SearchIcon = Search as any
const FileIcon = File as any
const PlusCircleIcon = PlusCircle as any

export default function Dashboard01Page() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const transactions = [
    {
      header: 'Button Component Docs',
      type: 'UI Component',
      status: 'Done',
      target: '100%',
      limit: 'v1.2.0',
      reviewer: 'Eddie Lake',
    },
    {
      header: 'Layout Shell Drawer',
      type: 'Layout Primitive',
      status: 'In Progress',
      target: '80%',
      limit: 'v0.8.0',
      reviewer: 'Assign reviewer',
    },
    {
      header: 'Installation Redirection Script',
      type: 'Doc Utility',
      status: 'Done',
      target: '100%',
      limit: 'v1.0.1',
      reviewer: 'Antigravity AI',
    },
    {
      header: 'Badge Component Preview',
      type: 'UI Component',
      status: 'Done',
      target: '95%',
      limit: 'v1.1.0',
      reviewer: 'Jamik Tashpulatov',
    },
    {
      header: 'Table of Contents Sticky TOC',
      type: 'Navigation',
      status: 'In Progress',
      target: '50%',
      limit: 'v0.9.0',
      reviewer: 'Assign reviewer',
    },
    {
      header: 'Slider Range Bar UI',
      type: 'UI Component',
      status: 'Done',
      target: '100%',
      limit: 'v1.3.0',
      reviewer: 'Emily Whalen',
    },
    {
      header: 'Circular Progress Indicator',
      type: 'UI Component',
      status: 'In Progress',
      target: '20%',
      limit: 'v0.5.0',
      reviewer: 'Assign reviewer',
    },
    {
      header: 'Input OTP Code Fields',
      type: 'UI Component',
      status: 'Done',
      target: '100%',
      limit: 'v1.4.0',
      reviewer: 'Eddie Lake',
    },
    {
      header: 'Sidebar Scroll Offset Cache',
      type: 'Navigation',
      status: 'Done',
      target: '100%',
      limit: 'v1.0.0',
      reviewer: 'Antigravity AI',
    },
  ]

  const filtered = transactions.filter((t) => {
    const matchesSearch =
      t.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.reviewer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <LayoutShell className="h-screen min-h-0 bg-gradient-to-br from-zinc-950 to-zinc-900 text-foreground">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <LayoutShellHeader className="border-b border-border bg-muted/40 px-4 sm:px-6 justify-between flex items-center min-h-12 h-auto py-2 sm:py-0 sm:h-12">
          <span className="text-xs text-muted-foreground font-medium hidden sm:block">
            Building Blocks / dashboard-01
          </span>
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <div className="relative w-28 sm:w-40">
              <SearchIcon className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-8 text-[11px] bg-muted/50 border-border text-foreground placeholder-zinc-500"
              />
            </div>
            <div className="w-24 sm:w-32">
              <Select
                value={statusFilter}
                onValueChange={(val) => setStatusFilter(val)}
              >
                <SelectTrigger className="h-8 text-[11px] bg-muted/50 border-border text-foreground font-sans py-0 px-2" />
                <SelectContent className="w-24 sm:w-32 text-xs">
                  <SelectItem value="all" className="text-[11px] py-1.5 pl-8">
                    All
                  </SelectItem>
                  <SelectItem value="Done" className="text-[11px] py-1.5 pl-8">
                    Done
                  </SelectItem>
                  <SelectItem
                    value="In Progress"
                    className="text-[11px] py-1.5 pl-8"
                  >
                    In Progress
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full cursor-pointer outline-none border-0 p-0 bg-transparent flex">
                  <Avatar className="h-7 w-7 ml-1 sm:ml-2 hover:opacity-80 transition-opacity">
                    <AvatarFallback className="text-[10px] bg-primary text-primary-foreground font-bold">
                      JS
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-background border-border text-zinc-300"
                side="bottom"
                align="end"
                sideOffset={8}
              >
                <div className="flex items-center gap-3 p-2.5">
                  <Avatar className="h-9 w-9 shrink-0">
                    <AvatarImage
                      src="https://github.com/vibeui.png"
                      alt="vibe ui"
                    />
                    <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold text-sm">
                      VU
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-xs font-bold text-foreground truncate">
                      vibe ui
                    </span>
                    <span className="text-[10px] text-muted-foreground truncate">
                      m@example.com
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-muted-foreground/10" />
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                  <User className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                  <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                  <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-muted-foreground/10" />
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                  <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </LayoutShellHeader>
        <LayoutShellContent className="p-6 space-y-6 overflow-y-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
            <Card className="bg-muted/40 border-border p-4 space-y-2">
              <span className="text-xs text-muted-foreground font-medium block">
                Total Revenue
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">$1,250.00</span>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 text-[9px]">
                  +12.5%
                </Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">
                Trending up this month
              </span>
            </Card>
            <Card className="bg-muted/40 border-border p-4 space-y-2">
              <span className="text-xs text-muted-foreground font-medium block">
                New Customers
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">1,234</span>
                <Badge className="bg-rose-500/10 text-rose-400 border border-rose-500/20 py-0.5 px-1.5 text-[9px]">
                  -20%
                </Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">
                Down 20% this period
              </span>
            </Card>
            <Card className="bg-muted/40 border-border p-4 space-y-2">
              <span className="text-xs text-muted-foreground font-medium block">
                Active Accounts
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">45,678</span>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 text-[9px]">
                  +12.5%
                </Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">
                Strong user retention
              </span>
            </Card>
            <Card className="bg-muted/40 border-border p-4 space-y-2">
              <span className="text-xs text-muted-foreground font-medium block">
                Growth Rate
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">4.5%</span>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 text-[9px]">
                  +4.5%
                </Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">
                Steady performance rate
              </span>
            </Card>
          </div>

          {/* Custom mock chart display card layout */}
          <ChartAreaInteractive />

          {/* Tabs & Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
            <div className="flex bg-muted/60 rounded-lg p-0.5 border border-border/80 self-start sm:self-auto">
              {(['all', 'Done', 'In Progress'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className="px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all text-zinc-400 hover:text-zinc-200"
                  style={{
                    backgroundColor:
                      statusFilter === status ? '#27272a' : 'transparent',
                    color: statusFilter === status ? '#ffffff' : undefined,
                  }}
                >
                  {status === 'all'
                    ? 'All'
                    : status === 'Done'
                      ? 'Released'
                      : 'Draft'}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <Button
                variant="outline"
                className="h-8 text-xs bg-muted border-border text-zinc-300 hover:text-foreground px-3 flex items-center gap-1.5 cursor-pointer flex-1 sm:flex-none justify-center"
              >
                <FileIcon className="h-3.5 w-3.5" />
                <span>Export</span>
              </Button>
              <Button className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90 px-3 flex items-center gap-1.5 cursor-pointer flex-1 sm:flex-none justify-center">
                <PlusCircleIcon className="h-3.5 w-3.5" />
                <span>Add Product</span>
              </Button>
            </div>
          </div>

          {/* Relational Data Table */}
          <DataTable transactions={filtered} />
        </LayoutShellContent>
      </div>
    </LayoutShell>
  )
}
