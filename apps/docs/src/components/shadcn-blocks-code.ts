/*
 * Generated shadcn-style blocks code strings.
 */

export const dashboard01Code = {
  'app/dashboard/page.tsx': `'use client'

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
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'
import { Search, PlusCircle, File, User, CreditCard, Bell, LogOut } from 'lucide-react'
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
    { header: 'Button Component Docs', type: 'UI Component', status: 'Done', target: '100%', limit: 'v1.2.0', reviewer: 'Eddie Lake' },
    { header: 'Layout Shell Drawer', type: 'Layout Primitive', status: 'In Progress', target: '80%', limit: 'v0.8.0', reviewer: 'Assign reviewer' },
    { header: 'Installation Redirection Script', type: 'Doc Utility', status: 'Done', target: '100%', limit: 'v1.0.1', reviewer: 'Antigravity AI' },
    { header: 'Badge Component Preview', type: 'UI Component', status: 'Done', target: '95%', limit: 'v1.1.0', reviewer: 'Jamik Tashpulatov' },
    { header: 'Table of Contents Sticky TOC', type: 'Navigation', status: 'In Progress', target: '50%', limit: 'v0.9.0', reviewer: 'Assign reviewer' },
    { header: 'Slider Range Bar UI', type: 'UI Component', status: 'Done', target: '100%', limit: 'v1.3.0', reviewer: 'Emily Whalen' },
    { header: 'Circular Progress Indicator', type: 'UI Component', status: 'In Progress', target: '20%', limit: 'v0.5.0', reviewer: 'Assign reviewer' },
    { header: 'Input OTP Code Fields', type: 'UI Component', status: 'Done', target: '100%', limit: 'v1.4.0', reviewer: 'Eddie Lake' },
    { header: 'Sidebar Scroll Offset Cache', type: 'Navigation', status: 'Done', target: '100%', limit: 'v1.0.0', reviewer: 'Antigravity AI' },
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
          <span className="text-xs text-muted-foreground font-medium hidden sm:block">Building Blocks / dashboard-01</span>
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
                  <SelectItem value="all" className="text-[11px] py-1.5 pl-8">All</SelectItem>
                  <SelectItem value="Done" className="text-[11px] py-1.5 pl-8">Done</SelectItem>
                  <SelectItem value="In Progress" className="text-[11px] py-1.5 pl-8">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full cursor-pointer outline-none border-0 p-0 bg-transparent flex">
                  <Avatar className="h-7 w-7 ml-1 sm:ml-2 hover:opacity-80 transition-opacity">
                    <AvatarFallback className="text-[10px] bg-primary text-primary-foreground font-bold">JS</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border-border text-muted-foreground" side="bottom" align="end" sideOffset={8}>
                <div className="flex items-center gap-3 p-2.5">
                  <Avatar className="h-9 w-9 shrink-0">
                    <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                    <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold text-sm">VU</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                    <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-muted-foreground/10" />
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                  <User className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                  <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                  <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-muted-foreground/10" />
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
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
              <span className="text-xs text-muted-foreground font-medium block">Total Revenue</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">$1,250.00</span>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 text-[9px]">+12.5%</Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">Trending up this month</span>
            </Card>
            <Card className="bg-muted/40 border-border p-4 space-y-2">
              <span className="text-xs text-muted-foreground font-medium block">New Customers</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">1,234</span>
                <Badge className="bg-rose-500/10 text-rose-400 border border-rose-500/20 py-0.5 px-1.5 text-[9px]">-20%</Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">Down 20% this period</span>
            </Card>
            <Card className="bg-muted/40 border-border p-4 space-y-2">
              <span className="text-xs text-muted-foreground font-medium block">Active Accounts</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">45,678</span>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 text-[9px]">+12.5%</Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">Strong user retention</span>
            </Card>
            <Card className="bg-muted/40 border-border p-4 space-y-2">
              <span className="text-xs text-muted-foreground font-medium block">Growth Rate</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black">4.5%</span>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 text-[9px]">+4.5%</Badge>
              </div>
              <span className="text-[10px] text-muted-foreground block">Steady performance rate</span>
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
                  className="px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all text-zinc-400 hover:text-foreground/90"
                  style={{
                    backgroundColor: statusFilter === status ? '#27272a' : 'transparent',
                    color: statusFilter === status ? '#ffffff' : undefined,
                  }}
                >
                  {status === 'all' ? 'All' : status === 'Done' ? 'Released' : 'Draft'}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <Button variant="outline" className="h-8 text-xs bg-muted border-border text-muted-foreground hover:text-foreground px-3 flex items-center gap-1.5 cursor-pointer flex-1 sm:flex-none justify-center">
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
`,
  'components/app-sidebar.tsx': `'use client'

import React from 'react'
import {
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
} from '@/components/ui/layout-shell'
import { GalleryVerticalEnd, Layers, Users, Database, Folder, MoreVertical, User, CreditCard, Bell, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const LayersIcon = Layers as any
const UsersIcon = Users as any
const DatabaseIcon = Database as any
const FolderIcon = Folder as any

export function AppSidebar() {
  return (
    <LayoutShellSidebar className="border-r border-border bg-muted/60 backdrop-blur-md">
      <LayoutShellBrand className="border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-3.5" />
          </div>
          <span className="text-sm font-bold tracking-tight text-foreground font-mono">Vibe Inc.</span>
        </div>
      </LayoutShellBrand>
      <LayoutShellNav>
        <LayoutShellNavItem active className="text-primary bg-primary/10">
          <LayersIcon className="h-4 w-4 shrink-0" />
          <span>Dashboard</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem>
          <UsersIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Lifecycle</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem>
          <DatabaseIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Analytics</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem>
          <FolderIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Projects</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem>
          <UsersIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Team</span>
        </LayoutShellNavItem>
      </LayoutShellNav>
      <div className="mt-auto p-4 border-t border-border/40 shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center justify-between gap-3 p-2 rounded-lg hover:border-border/40 text-left cursor-pointer transition-colors outline-none border-0 bg-transparent">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                  <AvatarFallback className="bg-muted text-foreground font-bold text-xs">VU</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                  <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
                </div>
              </div>
              <MoreVertical className="h-4 w-4 shrink-0 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-background border-border text-muted-foreground" side="top" align="end" sideOffset={12}>
            <div className="flex items-center gap-3 p-2.5">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold text-sm">VU</AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0 leading-tight">
                <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
              </div>
            </div>
            <DropdownMenuSeparator className="bg-muted-foreground/10" />
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <User className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-muted-foreground/10" />
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </LayoutShellSidebar>
  )
}
`,
  'components/chart-area-interactive.tsx': `'use client'

import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ChartAreaInteractive() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shrink-0">
      <Card className="col-span-1 lg:col-span-2 bg-muted/40 border-border p-5 space-y-4 text-left">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold">Active CPU Workload</CardTitle>
            <CardDescription className="text-xs">Uptime performance overview metrics</CardDescription>
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">99.9% active</Badge>
        </div>
        <div className="h-28 w-full flex items-end justify-between gap-1 pt-2 border-b border-border/40 pb-1">
          {[40, 55, 30, 45, 60, 20, 35, 50, 75, 40, 55, 65, 80, 45, 30, 60, 70, 85, 90, 50, 60, 45, 35, 75, 80].map((h, i) => (
            <div
              key={i}
              style={{ height: \`\${h}%\` }}
              className="flex-1 bg-emerald-500/80 rounded-t-sm hover:bg-emerald-400 transition-all cursor-pointer"
              title={\`Time \${i}: \${h}%\`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
          <span>00:00 AM</span>
          <span>06:00 AM</span>
          <span>12:00 PM</span>
          <span>06:00 PM</span>
        </div>
      </Card>
      <Card className="bg-muted/40 border-border p-5 space-y-4 text-left flex flex-col justify-between">
        <div>
          <CardTitle className="text-sm font-semibold text-foreground">System Safe Check</CardTitle>
          <CardDescription className="text-xs">Database sync index integrity state</CardDescription>
        </div>
        <div className="py-2.5 space-y-3">
          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>core-master-0</span>
            <span className="text-emerald-400 font-bold">Active</span>
          </div>
          <div className="w-full bg-muted-foreground/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: '85%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
            <span>replica-east-1</span>
            <span className="text-emerald-400 font-bold">Synchronized</span>
          </div>
          <div className="w-full bg-muted-foreground/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400" style={{ width: '70%' }} />
          </div>
        </div>
        <Button className="w-full h-8 text-xs bg-emerald-600 hover:bg-emerald-500 text-foreground font-semibold">Verify Integrity</Button>
      </Card>
    </div>
  )
}
`,
  'components/data-table.tsx': `'use client'

import React, { useState } from 'react'
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Transaction {
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

interface DataTableProps {
  transactions: Transaction[]
}

export function DataTable({ transactions }: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const totalPages = Math.ceil(transactions.length / pageSize) || 1
  const paginated = transactions.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const isAllSelected = paginated.length > 0 && paginated.every((t) => selectedRows.includes(t.header))
  const handleSelectAllChange = (checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => {
        const newSelected = [...prev]
        paginated.forEach((t) => {
          if (!newSelected.includes(t.header)) newSelected.push(t.header)
        })
        return newSelected
      })
    } else {
      setSelectedRows((prev) => prev.filter((header) => !paginated.some((t) => t.header === header)))
    }
  }

  const handleSelectRowChange = (header: string, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, header])
    } else {
      setSelectedRows((prev) => prev.filter((h) => h !== header))
    }
  }

  return (
    <div className="space-y-4 w-full">
      <div className="border border-border/80 rounded-t-lg bg-muted/20 w-full">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[800px] !overflow-visible bg-transparent text-foreground border-border/80">
            <TableHeader className="bg-muted/40 border-b border-border/80 [&_tr]:border-border/80 sticky top-0 z-10">
              <TableRow className="border-b border-border/80">
                <TableHead className="w-12 text-center text-muted-foreground border-border/80">
                  <Checkbox checked={isAllSelected} onCheckedChange={handleSelectAllChange} />
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">Header</TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">Section Type</TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">Status</TableHead>
                <TableHead className="text-right text-muted-foreground border-border/80">Target</TableHead>
                <TableHead className="text-right text-muted-foreground border-border/80">Limit</TableHead>
                <TableHead className="text-left pl-6 text-muted-foreground border-border/80">Reviewer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length > 0 ? (
                paginated.map((t, i) => (
                  <TableRow key={i} className="hover:hover:bg-muted/50 border-b border-border/40 text-left">
                    <TableCell className="text-center text-muted-foreground border-border/40">
                      <Checkbox checked={selectedRows.includes(t.header)} onCheckedChange={(checked) => handleSelectRowChange(t.header, checked)} />
                    </TableCell>
                    <TableCell className="font-semibold text-foreground truncate max-w-[200px] border-border/40">{t.header}</TableCell>
                    <TableCell className="border-border/40">
                      <Badge className="bg-muted text-foreground border border-border py-0.5 px-2 text-[10px] font-medium">{t.type}</Badge>
                    </TableCell>
                    <TableCell className="border-border/40">
                      <span className={t.status === 'Done' ? 'text-emerald-400 font-medium text-xs' : 'text-amber-400 font-medium text-xs'}>
                        {t.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs text-muted-foreground border-border/40">{t.target}</TableCell>
                    <TableCell className="text-right font-mono text-xs text-muted-foreground border-border/40">{t.limit}</TableCell>
                    <TableCell className="pl-6 border-border/40">
                      {t.reviewer === 'Assign reviewer' ? (
                        <div className="w-36">
                          <Select defaultValue="assign">
                            <SelectTrigger className="h-7 text-[11px] bg-muted border-border font-sans py-0 px-2 text-foreground" />
                            <SelectContent className="w-36 text-xs bg-card border-border">
                              <SelectItem value="assign" className="text-[11px] py-1 pl-8 text-foreground">Assign reviewer</SelectItem>
                              <SelectItem value="lake" className="text-[11px] py-1 pl-8 text-foreground">Eddie Lake</SelectItem>
                              <SelectItem value="jamik" className="text-[11px] py-1 pl-8 text-foreground">Jamik Tashpulatov</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">{t.reviewer}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-muted-foreground text-xs">
                    No transactions found matching filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border border-border bg-muted/10 rounded-b-lg text-xs text-muted-foreground select-none shrink-0">
        <div className="text-center sm:text-left">
          Showing {transactions.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to{' '}
          {Math.min(currentPage * pageSize, transactions.length)} of {transactions.length} entries
        </div>
        <div className="flex flex-row items-center gap-3 sm:gap-4 justify-center">
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline">Rows per page:</span>
            <div className="w-16">
              <Select
                value={String(pageSize)}
                onValueChange={(val) => {
                  setPageSize(Number(val))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="h-7 text-[11px] bg-muted border-border font-sans py-0 px-2" />
                <SelectContent className="w-16 text-xs bottom-full mb-2 top-auto mt-0">
                  <SelectItem value="3" className="text-[11px] py-1.5 pl-8">3</SelectItem>
                  <SelectItem value="4" className="text-[11px] py-1.5 pl-8">4</SelectItem>
                  <SelectItem value="5" className="text-[11px] py-1.5 pl-8">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-7 w-7 p-0 flex items-center justify-center bg-muted border-border cursor-pointer hover:bg-muted-foreground/10 text-foreground"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </Button>
            <span className="text-xs font-medium text-foreground font-mono">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              className="h-7 w-7 p-0 flex items-center justify-center bg-muted border-border cursor-pointer hover:bg-muted-foreground/10 text-foreground"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
}

export const sidebar07Code = {
  'app/page.tsx': `'use client'

import React from 'react'
import {
  LayoutShell,
  LayoutShellHeader,
  LayoutShellContent,
} from '@/components/ui/layout-shell'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { User, CreditCard, Bell, LogOut } from 'lucide-react'
import { AppSidebar } from './components/app-sidebar'

export default function Sidebar07Page() {
  return (
    <LayoutShell className="h-screen min-h-0 w-full bg-background text-foreground">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <LayoutShellHeader className="border-b border-border bg-muted/40 px-6 justify-between flex items-center h-12">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="hover:text-foreground transition-colors cursor-pointer">Build Your Application</span>
            <span>/</span>
            <span className="text-foreground font-medium">Data Fetching</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full cursor-pointer outline-none border-0 p-0 bg-transparent flex">
                <Avatar className="h-7 w-7 hover:opacity-80 transition-opacity">
                  <AvatarFallback className="text-[10px] bg-primary text-primary-foreground font-bold font-mono">AD</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border-border text-muted-foreground" side="bottom" align="end" sideOffset={8}>
              <div className="flex items-center gap-3 p-2.5">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                  <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold text-sm">VU</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                  <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-muted-foreground/10" />
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <User className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-muted-foreground/10" />
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </LayoutShellHeader>
        <LayoutShellContent className="p-6 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="aspect-video rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">card_node_1.dfr</span>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">card_node_2.dfr</span>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">card_node_3.dfr</span>
            </div>
          </div>

          <div className="min-h-[180px] rounded-xl bg-muted/30 border border-border/40 p-6 flex flex-col justify-center items-center text-center space-y-1">
            <h3 className="text-sm font-semibold text-foreground font-mono">Primary Main Workspace</h3>
            <p className="text-xs text-muted-foreground">Select a sidebar item to fetch nodes into the compiler shell.</p>
          </div>
        </LayoutShellContent>
      </div>
    </LayoutShell>
  )
}
`,
  'components/app-sidebar.tsx': `'use client'

import React from 'react'
import {
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
} from '@/components/ui/layout-shell'
import { GalleryVerticalEnd, Layers, Database, Folder, Settings, MoreVertical, User, CreditCard, Bell, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const LayersIcon = Layers as any
const DatabaseIcon = Database as any
const FolderIcon = Folder as any
const SettingsIcon = Settings as any

export function AppSidebar() {
  return (
    <LayoutShellSidebar className="border-r border-border bg-muted/60 backdrop-blur-md">
      <LayoutShellBrand className="border-b border-border px-4">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-3.5" />
          </div>
          <div className="flex flex-col gap-0.5 text-left leading-none">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Vibe Inc</span>
            <span className="text-[10px] text-muted-foreground">Enterprise</span>
          </div>
        </div>
      </LayoutShellBrand>
      <LayoutShellNav>
        <LayoutShellNavItem active className="text-primary bg-primary/10">
          <LayersIcon className="h-4 w-4 shrink-0" />
          <span>Playground</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem>
          <DatabaseIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Models</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem>
          <FolderIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Documentation</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem>
          <SettingsIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Settings</span>
        </LayoutShellNavItem>
      </LayoutShellNav>
      <div className="mt-auto p-4 border-t border-border/40 shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center justify-between gap-3 p-2 rounded-lg hover:border-border/40 text-left cursor-pointer transition-colors outline-none border-0 bg-transparent">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                  <AvatarFallback className="bg-muted text-foreground font-bold text-xs">VU</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                  <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
                </div>
              </div>
              <MoreVertical className="h-4 w-4 shrink-0 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-background border-border text-muted-foreground" side="top" align="end" sideOffset={12}>
            <div className="flex items-center gap-3 p-2.5">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold text-sm">VU</AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0 leading-tight">
                <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
              </div>
            </div>
            <DropdownMenuSeparator className="bg-muted-foreground/10" />
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <User className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-muted-foreground/10" />
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </LayoutShellSidebar>
  )
}
`,
}

export const sidebar03Code = {
  'app/page.tsx': `'use client'

import React from 'react'
import {
  LayoutShell,
  LayoutShellHeader,
  LayoutShellContent,
} from '@/components/ui/layout-shell'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { User, CreditCard, Bell, LogOut } from 'lucide-react'
import { DocsSidebar } from './components/docs-sidebar'

export default function Sidebar03Page() {
  return (
    <LayoutShell className="h-screen min-h-0 w-full bg-background text-foreground">
      <DocsSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <LayoutShellHeader className="border-b border-border bg-muted/40 px-6 justify-between flex items-center h-12">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="hover:text-foreground transition-colors cursor-pointer">Build Your Application</span>
            <span>/</span>
            <span className="text-foreground font-medium">Data Fetching</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full cursor-pointer outline-none border-0 p-0 bg-transparent flex">
                <Avatar className="h-7 w-7 hover:opacity-80 transition-opacity">
                  <AvatarFallback className="text-[10px] bg-primary text-primary-foreground font-bold font-mono">JS</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border-border text-muted-foreground" side="bottom" align="end" sideOffset={8}>
              <div className="flex items-center gap-3 p-2.5">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                  <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold text-sm">VU</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                  <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-muted-foreground/10" />
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <User className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-muted-foreground/10" />
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
                <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </LayoutShellHeader>
        <LayoutShellContent className="p-6 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="aspect-video rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">node_03_grid_1</span>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">node_03_grid_2</span>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">node_03_grid_3</span>
            </div>
          </div>

          <div className="min-h-[180px] rounded-xl bg-muted/30 border border-border/40 p-6 flex flex-col justify-center items-center text-center space-y-1">
            <h3 className="text-sm font-semibold text-foreground font-mono">Documentation Reader Workspace</h3>
            <p className="text-xs text-muted-foreground">Select any documentation category from the sidebar index to view API logs.</p>
          </div>
        </LayoutShellContent>
      </div>
    </LayoutShell>
  )
}
`,
  'components/docs-sidebar.tsx': `'use client'

import React from 'react'
import {
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
} from '@/components/ui/layout-shell'
import { MoreVertical, User, CreditCard, Bell, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function DocsSidebar() {
  return (
    <LayoutShellSidebar className="border-r border-border bg-muted/60 backdrop-blur-md">
      <LayoutShellBrand className="border-b border-border px-4">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
            D
          </div>
          <div className="flex flex-col gap-0.5 text-left leading-none">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Documentation</span>
            <span className="text-[10px] text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </LayoutShellBrand>
      <LayoutShellNav className="text-left px-2">
        <div className="px-3 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          Getting Started
        </div>
        <LayoutShellNavItem className="py-1 px-3 text-xs">
          <span className="pl-1">Installation</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem className="py-1 px-3 text-xs">
          <span className="pl-1">Project Structure</span>
        </LayoutShellNavItem>
        <div className="px-3 py-1.5 mt-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          Build Application
        </div>
        <LayoutShellNavItem className="py-1 px-3 text-xs">
          <span className="pl-1">Routing</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem active className="text-primary bg-primary/10 py-1 px-3 text-xs">
          <span className="pl-1">Data Fetching</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem className="py-1 px-3 text-xs">
          <span className="pl-1">Rendering</span>
        </LayoutShellNavItem>
        <LayoutShellNavItem className="py-1 px-3 text-xs">
          <span className="pl-1">Caching</span>
        </LayoutShellNavItem>
      </LayoutShellNav>
      <div className="mt-auto p-4 border-t border-border/40 shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center justify-between gap-3 p-2 rounded-lg hover:border-border/40 text-left cursor-pointer transition-colors outline-none border-0 bg-transparent">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                  <AvatarFallback className="bg-muted text-foreground font-bold text-xs">VU</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                  <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
                </div>
              </div>
              <MoreVertical className="h-4 w-4 shrink-0 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-background border-border text-muted-foreground" side="top" align="end" sideOffset={12}>
            <div className="flex items-center gap-3 p-2.5">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
                <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold text-sm">VU</AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0 leading-tight">
                <span className="text-xs font-bold text-foreground truncate">vibe ui</span>
                <span className="text-[10px] text-muted-foreground truncate">m@example.com</span>
              </div>
            </div>
            <DropdownMenuSeparator className="bg-muted-foreground/10" />
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <User className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-muted-foreground/10" />
            <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent">
              <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </LayoutShellSidebar>
  )
}
`,
}

export const login03Code = {
  'app/page.tsx': `'use client'

import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login03Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-background">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-bold text-foreground no-underline">
          <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
            V
          </div>
          <span>Vibe Inc.</span>
        </a>
        <Card className="bg-muted/50 border-border p-6 space-y-4 text-left">
          <div className="text-center space-y-1">
            <CardTitle className="text-xl font-bold text-foreground">Welcome back</CardTitle>
            <CardDescription className="text-xs">Login with your Apple or Google account</CardDescription>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-9 text-xs border-border/40 border-border text-foreground hover:bg-muted-foreground/10">
              <svg className="size-4 shrink-0 fill-current text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <span>Login with Apple</span>
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-9 text-xs border-border/40 border-border text-foreground hover:bg-muted-foreground/10">
              <svg className="size-4 shrink-0 fill-current text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span>Login with Google</span>
            </Button>
          </div>
          
          <div className="relative flex items-center justify-center py-2.5">
            <div className="absolute inset-x-0 h-[1px] bg-border" />
            <span className="relative z-10 bg-muted px-3 text-[10px] text-muted-foreground uppercase font-semibold">Or continue with</span>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email-03" className="text-xs text-muted-foreground font-semibold">Email</label>
              <Input id="email-03" type="email" placeholder="m@example.com" className="h-9 text-xs bg-muted border-border text-foreground" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password-03" className="text-xs text-muted-foreground font-semibold">Password</label>
                <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground underline">Forgot password?</a>
              </div>
              <Input id="password-03" type="password" className="h-9 text-xs bg-muted border-border text-foreground" />
            </div>
            <Button className="w-full h-9 text-xs bg-primary hover:bg-primary/95 text-primary-foreground font-bold">Login</Button>
            <div className="text-center text-xs text-muted-foreground pt-1 select-none">
              Don't have an account? <a href="#" className="text-foreground hover:underline">Sign up</a>
            </div>
          </div>
        </Card>
        <div className="text-[10px] text-muted-foreground text-center select-none leading-relaxed">
          By clicking continue, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  )
}
`,
}

export const login04Code = {
  'app/page.tsx': `'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login04Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-background">
      <Card className="w-full max-w-4xl bg-muted/50 border-border overflow-hidden p-0 grid md:grid-cols-2">
        <div className="p-6 md:p-8 space-y-4 text-left flex flex-col justify-center">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
            <p className="text-xs text-muted-foreground">Login to your Vibe Inc account</p>
          </div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label htmlFor="email-04" className="text-xs text-muted-foreground font-semibold">Email</label>
              <Input id="email-04" type="email" placeholder="m@example.com" className="h-9 text-xs bg-muted border-border text-foreground" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password-04" className="text-xs text-muted-foreground font-semibold">Password</label>
                <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground underline">Forgot password?</a>
              </div>
              <Input id="password-04" type="password" className="h-9 text-xs bg-muted border-border text-foreground" />
            </div>
            <Button className="w-full h-9 text-xs bg-primary hover:bg-primary/95 text-primary-foreground font-bold">Login</Button>
          </div>
          
          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-x-0 h-[1px] bg-border" />
            <span className="relative z-10 bg-muted px-3 text-[10px] text-muted-foreground uppercase font-semibold">Or continue with</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="flex items-center justify-center h-9 border-border/40 border-border hover:bg-muted-foreground/10 text-foreground cursor-pointer">
              <svg className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
            </Button>
            <Button variant="outline" className="flex items-center justify-center h-9 border-border/40 border-border hover:bg-muted-foreground/10 text-foreground cursor-pointer">
              <svg className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </Button>
            <Button variant="outline" className="flex items-center justify-center h-9 border-border/40 border-border hover:bg-muted-foreground/10 text-foreground cursor-pointer">
              <svg className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
              </svg>
            </Button>
          </div>
          
          <div className="text-center text-xs text-muted-foreground pt-1 select-none">
            Don't have an account? <a href="#" className="text-foreground hover:underline font-semibold">Sign up</a>
          </div>
        </div>

        <div className="relative hidden bg-muted border-l border-border md:block overflow-hidden h-full">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5">
            <span className="h-10 w-10 rounded-lg bg-primary text-primary-foreground font-black text-lg flex items-center justify-center mb-4">V</span>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest font-mono mb-1">Vibe Workspace Node</h3>
            <p className="text-[11px] text-muted-foreground max-w-xs leading-relaxed font-sans">
              Enter credentials to securely authenticate into the cloud host and synchronize developer config packages.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
`,
}
