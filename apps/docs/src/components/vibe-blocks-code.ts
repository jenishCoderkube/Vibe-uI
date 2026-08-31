/*
 * Generated Vibe UI blocks code strings.
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

export const ecommerce01Code = {
  'app/shop/page.tsx': `'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EcommerceNavbar } from './components/ecommerce-navbar'
import { EcommerceHero } from './components/ecommerce-hero'
import { EcommerceFooter } from './components/ecommerce-footer'
import { BlurFade } from '@/components/ui/blur-fade'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Mail,
  Zap,
  VolumeX,
  BatteryCharging,
  Headphones,
  Sliders,
  Star,
} from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
  quantity: number
}

export default function Ecommerce01Page() {
  const router = useRouter()
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  // Cart Operations
  const handleAddToCart = (params: {
    id: string
    name: string
    price: number
    color: string
    size: string
    image: string
  }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === params.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === params.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...params, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const handleUpdateQuantity = (id: string, q: number) => {
    if (q < 1) {
      handleRemoveFromCart(id)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: q } : item))
    )
  }

  const handleClearCart = () => {
    setCart([])
    setWishlist([])
  }

  // Wishlist Operations
  const handleToggleWishlist = (id: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((itemId) => itemId !== id)
        : [...prevWishlist, id]
    )
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true)
      setTimeout(() => {
        setNewsletterEmail('')
      }, 2500)
    }
  }

  // Showcase categories
  const categories = [
    {
      title: 'Studio Over-Ear',
      description: 'Reference-class monitors engineered for audiophiles, composers, and studio technicians.',
      badge: 'Professional',
      variant: 'glow' as const,
      img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'Wireless Earbuds',
      description: 'Ultra-light, active sound isolation, water-resistant buds for high mobility use cases.',
      badge: 'Active Lifestyle',
      variant: 'glass' as const,
      img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'Audio Primitives',
      description: 'Durable gold-plated auxiliary cords, dynamic converters, and premium braided cords.',
      badge: 'Essential',
      variant: 'default' as const,
      img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      {/* Top Banner Alert */}
      <div className="bg-primary px-4 py-2.5 text-center text-[10px] sm:text-xs font-semibold text-primary-foreground flex items-center justify-center gap-2 select-none">
        <Zap className="h-3.5 w-3.5 fill-current animate-bounce shrink-0" />
        <span>Vibe Store Interactive Demo: Add products to cart, check the drawers, and toggle layouts!</span>
      </div>

      {/* Navigation */}
      <EcommerceNavbar
        cart={cart}
        wishlist={wishlist}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onToggleWishlist={handleToggleWishlist}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Hero Product Feature */}
        <BlurFade delay={0.1} duration={0.5}>
          <EcommerceHero
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        </BlurFade>

        {/* Acoustic Engineering Specs Section */}
        <BlurFade delay={0.15} duration={0.5}>
          <div id="specs" className="space-y-8 scroll-mt-20">
            <div className="text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                High-Fidelity Engineering
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Crafted to block external noise while preserving high-resolution dynamic range soundscapes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Smart Ambient ANC',
                  desc: 'Active noise cancellation monitors and filters up to 45dB of surrounding noise.',
                  icon: VolumeX,
                },
                {
                  title: '45H Power Reserve',
                  desc: 'Fast USB-C charging delivers up to 5 hours playback from a quick 10-minute charge.',
                  icon: BatteryCharging,
                },
                {
                  title: 'Beryllium Drivers',
                  desc: 'Ultra-lightweight custom 40mm elements resolve highs and sub-bass with zero distortion.',
                  icon: Headphones,
                },
                {
                  title: 'Precision Sliders',
                  desc: 'Tactile sliders adjust spatial dimensions and balance active parameters in real time.',
                  icon: Sliders,
                },
              ].map((spec, index) => {
                const Icon = spec.icon
                return (
                  <Card key={spec.title} variant="glow" className="text-left border-border/70 flex flex-col justify-between">
                    <CardHeader className="pt-6 px-6 pb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 space-y-2">
                      <CardTitle className="text-base font-extrabold tracking-tight">{spec.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        {spec.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </BlurFade>

        {/* New Arrivals Section */}
        <BlurFade delay={0.18} duration={0.5}>
          <div id="new-arrivals" className="space-y-8 scroll-mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="max-w-xl">
                <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider mb-2">
                  Just Released
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  New Arrivals
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Discover our latest audio releases featuring advanced transducers and smart connectivity options.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'vibe-beam-soundbar',
                  name: 'Vibe Beam Soundbar',
                  price: 349,
                  desc: 'Multi-driver soundbar system with virtual Dolby Atmos and HDMI eARC connection.',
                  badge: 'New Release',
                  image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-aura-headset',
                  name: 'Vibe Aura Wireless',
                  price: 279,
                  desc: 'Ultra-comfort headset with custom spatial soundstage tracking sensors.',
                  badge: 'Trending',
                  image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-studio-speaker',
                  name: 'Vibe Studio Speakers',
                  price: 229,
                  desc: 'Sleek active bookshelf studio monitors with integrated dual class-D amps.',
                  badge: 'New Release',
                  image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/40 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div
                    onClick={() => router.push('/preview/ecommerce-02')}
                    className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50 cursor-pointer"
                    title="Click to view details"
                  >
                    <Badge variant="glass" className="absolute left-3 top-3 z-10 text-[9px] font-bold uppercase tracking-wider">
                      {product.badge}
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle
                          onClick={() => router.push('/preview/ecommerce-02')}
                          className="text-base font-extrabold tracking-tight truncate hover:text-primary transition-colors cursor-pointer"
                        >
                          {product.name}
                        </CardTitle>
                        <span className="text-base font-black text-foreground">\${product.price}</span>
                      </div>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {product.desc}
                      </CardDescription>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        color: 'Default',
                        size: 'Standard',
                        image: product.image,
                      })}
                      className="w-full text-xs font-bold h-9 mt-2 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-pointer"
                    >
                      Quick Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Featured Categories Grid Section */}
        <BlurFade delay={0.2} duration={0.5}>
          <div id="categories" className="space-y-8 scroll-mt-20">
            <div className="text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Explore Sound Categories
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Tailored acoustic profiles, whether you are recording a master mix or heading out on a morning jog.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <Card
                  key={cat.title}
                  variant={cat.variant}
                  className="flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden group cursor-pointer border-border/70 text-left"
                >
                  <CardHeader className="p-0">
                    {/* Visual representative card header banner image */}
                    <div className="h-44 w-full bg-muted overflow-hidden relative border-b border-border/50">
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="glass" className="text-[9px] font-bold uppercase tracking-wider">
                          {cat.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-extrabold tracking-tight">{cat.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        {cat.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const targetId = cat.title === 'Audio Primitives' ? 'specs' : 'new-arrivals'
                        const element = document.getElementById(targetId)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="text-xs font-semibold gap-1 text-primary p-0 hover:bg-transparent hover:underline cursor-pointer"
                    >
                      <span>Explore products</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Related Products Section */}
        <BlurFade delay={0.25} duration={0.5}>
          <div id="related-products" className="space-y-8 scroll-mt-20">
            <div className="text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Complete Your Setup
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Specially tuned audio components designed to sync perfectly with your new Vibe Sound Pro X.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'vibe-sound-budz',
                  name: 'Vibe Sound Budz',
                  price: 149,
                  desc: 'Wireless audio nodes with active sweat protection and smart tap arrays.',
                  rating: 4.8,
                  reviews: 86,
                  image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-sound-wave',
                  name: 'Vibe Sound Wave Speaker',
                  price: 199,
                  desc: 'Portable Bluetooth driver with dual-chamber bass resonance, waterproof shell.',
                  rating: 4.7,
                  reviews: 94,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-studio-monitor',
                  name: 'Vibe Active Monitor',
                  price: 499,
                  desc: 'Nearfield active studio speaker featuring 5-inch glass-fiber woofers.',
                  rating: 4.9,
                  reviews: 42,
                  image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/40 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div
                    onClick={() => router.push('/preview/ecommerce-02')}
                    className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50 cursor-pointer"
                    title="Click to view details"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle
                          onClick={() => router.push('/preview/ecommerce-02')}
                          className="text-base font-extrabold tracking-tight truncate hover:text-primary transition-colors cursor-pointer"
                        >
                          {product.name}
                        </CardTitle>
                        <span className="text-base font-black text-foreground">\${product.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-foreground">{product.rating}</span>
                        <span className="text-[9px] text-muted-foreground">({product.reviews})</span>
                      </div>

                      <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {product.desc}
                      </CardDescription>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        color: 'Default',
                        size: 'Standard',
                        image: product.image,
                      })}
                      className="w-full text-xs font-bold h-9 mt-2 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-pointer"
                    >
                      Quick Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Sale & Limited Offers Section */}
        <BlurFade delay={0.28} duration={0.5}>
          <div id="sale" className="space-y-8 scroll-mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="max-w-xl">
                <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider mb-2 bg-red-500/10 text-red-600 dark:text-red-400 dark:bg-red-500/20 border-red-500/30">
                  Special Discounts
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  Limited Time Deals
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Upgrade your studio kit with our active discounts. Available while supplies last.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'vibe-go-speaker',
                  name: 'Vibe Go Speaker',
                  price: 79,
                  originalPrice: 99,
                  desc: 'Pocket-sized outdoor driver with punchy bass, 12-hour reserve, and loop strap.',
                  badge: '20% OFF',
                  image: 'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-studio-earphones',
                  name: 'Vibe Studio Buds',
                  price: 119,
                  originalPrice: 149,
                  desc: 'High-accuracy monitors with double dynamic armatures, gold jack connections.',
                  badge: '20% OFF',
                  image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-charge-dock',
                  name: 'Vibe Charge Node',
                  price: 39,
                  originalPrice: 49,
                  desc: 'Dual magnetic wireless charging pad designed to top up headsets and earbuds.',
                  badge: '20% OFF',
                  image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/40 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div
                    onClick={() => router.push('/preview/ecommerce-02')}
                    className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50 cursor-pointer"
                    title="Click to view details"
                  >
                    <Badge variant="default" className="absolute left-3 top-3 z-10 text-[9px] font-bold uppercase tracking-wider bg-red-600 text-white border-transparent">
                      {product.badge}
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle
                          onClick={() => router.push('/preview/ecommerce-02')}
                          className="text-base font-extrabold tracking-tight truncate hover:text-primary transition-colors cursor-pointer"
                        >
                          {product.name}
                        </CardTitle>
                        <div className="flex items-center gap-1.5 flex-row">
                          <span className="text-xs text-muted-foreground line-through">\${product.originalPrice}</span>
                          <span className="text-base font-black text-red-600 dark:text-red-400">\${product.price}</span>
                        </div>
                      </div>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {product.desc}
                      </CardDescription>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        color: 'Default',
                        size: 'Standard',
                        image: product.image,
                      })}
                      className="w-full text-xs font-bold h-9 mt-2 hover:bg-red-600 hover:text-white hover:border-transparent transition-all cursor-pointer"
                    >
                      Quick Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Newsletter Newsletter Overlay Sign-up */}
        <BlurFade delay={0.3} duration={0.5}>
          <div className="relative rounded-2xl border border-border/80 bg-card/40 dark:bg-card/20 backdrop-blur-md overflow-hidden p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-md">
            <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />

            <div className="max-w-xl mx-auto space-y-6">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Stay Tuned with Vibe Acoustics
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Join our premium VIP acoustics list to receive priority product notifications, early access releases, and studio mixing guides direct to your inbox.
              </p>

              {newsletterSubscribed ? (
                <BlurFade>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                    Thank you! Check your inbox for your 10% welcome coupon.
                  </div>
                </BlurFade>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 mt-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="h-10 bg-background border-border text-foreground text-xs placeholder:text-muted-foreground focus-visible:ring-primary flex-1"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <Button type="submit" variant="default" className="h-10 font-bold text-xs gap-1.5 shadow-sm shrink-0 cursor-pointer">
                    <span>Subscribe</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </BlurFade>

      </main>
      <EcommerceFooter />
    </div>
  )
}
`,
  'components/ecommerce-navbar.tsx': `'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  User,
  Settings,
  CreditCard,
  LogOut,
  Trash2,
  Sparkles,
} from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
  quantity: number
}

interface EcommerceNavbarProps {
  cart: CartItem[]
  wishlist: string[]
  onRemoveFromCart: (id: string) => void
  onUpdateQuantity: (id: string, q: number) => void
  onClearCart: () => void
  onToggleWishlist: (id: string) => void
}

export function EcommerceNavbar({
  cart,
  wishlist,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart,
  onToggleWishlist,
}: EcommerceNavbarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const popularSearches = [
    'Noise Cancelling Headphones',
    'Wireless Earbuds',
    'Gaming Headsets',
    'Audio Cables',
    'Studio Monitors',
  ]

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#related-products' },
    { name: 'Categories', href: '#categories' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'Sale', href: '#sale', badge: '10%' },
  ]

  const handleScrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isProductPage = typeof window !== 'undefined' && window.location.pathname.includes('ecommerce-02')

    if (isProductPage) {
      e.preventDefault()
      router.push('/preview/ecommerce-01' + (href === '#' ? '' : href))
    } else {
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault()
        const element = document.getElementById(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else if (href === '#') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const scrollable = document.querySelector('.overflow-y-auto') || document.querySelector('[class*="overflow-y-auto"]')
        if (scrollable) {
          scrollable.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Branding & Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => handleScrollToElement(e, '#')}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-xl transition-transform group-hover:scale-105 shadow-sm">
              V
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Vibe <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary align-middle ml-1">SHOP</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToElement(e, link.href)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="rounded-full bg-red-500/10 dark:bg-red-500/25 px-1.5 py-0.2 text-[9px] font-bold text-red-600 dark:text-red-400">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions Bar */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Desktop Search Button */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="Search Products"
              >
                <Search className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-card border-border">
              <DialogHeader className="p-4 border-b border-border bg-muted/20">
                <DialogTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Search Catalogue</DialogTitle>
                <DialogDescription className="sr-only">Type to search for products</DialogDescription>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for headphones, earbuds, specs..."
                    className="pl-10 h-10 w-full bg-background border-border text-foreground text-sm focus-visible:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </DialogHeader>
              <div className="p-6 space-y-4">
                {searchQuery ? (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Matching Items</h4>
                    <div className="rounded-lg border border-border bg-background p-2 text-center text-sm py-8 text-muted-foreground">
                      No results found for <span className="font-semibold text-foreground">"{searchQuery}"</span>. Try typing "Vibe".
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5 flex-row">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <span>Popular Searches</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="text-xs bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 rounded-full border border-border transition-colors cursor-pointer"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Wishlist Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="View Wishlist"
              >
                <Heart className="h-4 w-4" />
                {wishlist.length > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full p-0 text-[9px] font-bold bg-destructive text-destructive-foreground border border-background shadow-xs shrink-0"
                  >
                    {wishlist.length}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] border-border bg-card">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold">My Wishlist</DialogTitle>
                <DialogDescription>
                  Products you've saved for later.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-8 text-sm text-muted-foreground">
                    Your wishlist is empty. Tap the heart icon on products to add items!
                  </div>
                ) : (
                  <div className="space-y-3">
                    {wishlist.map((item) => (
                      <div key={item} className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded bg-muted flex items-center justify-center overflow-hidden border border-border">
                            <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary text-xs font-bold font-mono">V</div>
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-bold text-foreground">Vibe Sound Pro X</p>
                            <p className="text-[10px] text-muted-foreground">$299.00</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:bg-destructive/10"
                          onClick={() => onToggleWishlist(item)}
                          aria-label="Remove from Wishlist"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Shopping Cart Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="h-4 w-4" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full p-0 text-[9px] font-bold bg-primary text-primary-foreground border border-background shadow-xs shrink-0"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" variant="default" className="w-full sm:max-w-md flex flex-col justify-between">
              <div>
                <SheetHeader className="pb-4 border-b border-border">
                  <SheetTitle className="text-lg font-bold flex items-center gap-2 flex-row">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span>Shopping Cart</span>
                  </SheetTitle>
                  <SheetDescription>
                    Review your items before proceeding to checkout.
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-4 space-y-4 overflow-y-auto max-h-[60vh] pr-1">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                      <ShoppingBag className="h-12 w-12 mx-auto stroke-1 text-muted-foreground/50 mb-3" />
                      <p className="text-sm font-semibold">Your cart is empty</p>
                      <p className="text-xs mt-1 text-muted-foreground/80">Add products to your cart to see them here.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-border">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-muted flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between text-sm font-bold text-foreground">
                              <h5 className="truncate max-w-[160px] text-left">{item.name}</h5>
                              <p>\${item.price * item.quantity}.00</p>
                            </div>
                            <p className="mt-1 text-[10px] text-muted-foreground flex items-center gap-1.5">
                              <span>Color: <span className="font-semibold text-foreground capitalize">{item.color}</span></span>
                              <span className="h-1 w-1 rounded-full bg-border" />
                              <span>Size: <span className="font-semibold text-foreground uppercase">{item.size}</span></span>
                            </p>
                            <div className="flex items-center justify-between mt-2.5">
                              <div className="flex items-center rounded border border-border bg-background">
                                <button
                                  className="h-7 w-7 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <span className="px-2 text-xs font-bold text-foreground">{item.quantity}</span>
                                <button
                                  className="h-7 w-7 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-destructive hover:bg-destructive/10 hover:text-destructive rounded-md"
                                onClick={() => onRemoveFromCart(item.id)}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {cart.length > 0 && (
                <div className="border-t border-border pt-4 bg-background/50 backdrop-blur-md rounded-t-xl -mx-6 px-6 -mb-6 pb-6">
                  <div className="flex justify-between text-sm font-bold text-foreground mb-4">
                    <span>Subtotal</span>
                    <span>\${cartSubtotal}.00</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="default" className="w-full font-bold shadow-md cursor-pointer">
                      Proceed to Checkout
                    </Button>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-foreground cursor-pointer">
                        Continue Shopping
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>

          {/* User Profile Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full border border-border"
                aria-label="User account menu"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User Avatar" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card border-border shadow-md" align="end">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-9 w-9 border border-border">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-0.5 truncate text-left">
                  <p className="text-xs font-bold text-foreground">John Doe</p>
                  <p className="text-[10px] text-muted-foreground truncate">john.doe@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="text-xs text-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer gap-2">
                <User className="h-3.5 w-3.5" />
                <span>My Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs text-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer gap-2">
                <CreditCard className="h-3.5 w-3.5" />
                <span>My Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs text-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer gap-2">
                <Settings className="h-3.5 w-3.5" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem 
                onClick={onClearCart} 
                className="text-xs text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer gap-2"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out / Reset Demo</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Drawer trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="inline-flex md:hidden text-muted-foreground hover:text-foreground h-9 w-9 rounded-md transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" variant="default" className="w-3/4 sm:max-w-xs p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <SheetHeader className="pb-4 border-b border-border">
                  <SheetTitle className="text-left font-extrabold flex items-center gap-2 flex-row">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-black text-lg">V</div>
                    <span>Vibe Shop</span>
                  </SheetTitle>
                  <SheetDescription className="sr-only">Mobile navigation links</SheetDescription>
                </SheetHeader>

                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Search catalogue..."
                    className="pl-8 h-9 bg-background border-border text-foreground text-xs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Mobile nav links */}
                <nav className="flex flex-col space-y-3.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false)
                        handleScrollToElement(e, link.href)
                      }}
                      className="text-sm font-semibold flex items-center justify-between py-1 transition-colors hover:text-primary text-foreground"
                    >
                      <span>{link.name}</span>
                      {link.badge ? (
                        <Badge variant="destructive" className="text-[9px] font-bold px-1.5 py-0.2">{link.badge}</Badge>
                      ) : (
                        <span className="text-muted-foreground/30 font-light">&rarr;</span>
                      )}
                    </a>
                  ))}
                </nav>
              </div>
              
              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">U</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">John Doe</p>
                    <p className="text-[9px] text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <Button 
                  onClick={onClearCart}
                  variant="ghost" 
                  className="w-full text-xs text-destructive hover:bg-destructive/10 justify-start gap-2 h-9 p-2"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  )
}
`,
  'components/ecommerce-hero.tsx': `'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Tooltip } from '@/components/ui/tooltip'

interface AddToCartParams {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
}

interface EcommerceHeroProps {
  wishlist: string[]
  onAddToCart: (params: AddToCartParams) => void
  onToggleWishlist: (id: string) => void
}

const PRODUCTS_COLOR_MAP = [
  {
    id: 'charcoal',
    name: 'Charcoal Black',
    colorCode: 'bg-zinc-800 border-zinc-700',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'platinum',
    name: 'Platinum Silver',
    colorCode: 'bg-zinc-200 border-zinc-300 dark:bg-zinc-400 dark:border-zinc-300',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'cosmic',
    name: 'Cosmic Purple',
    colorCode: 'bg-purple-800 border-purple-700',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop',
  },
]

const SIZES = ['Standard', 'Pro Fit']

export function EcommerceHero({
  wishlist,
  onAddToCart,
  onToggleWishlist,
}: EcommerceHeroProps) {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState(PRODUCTS_COLOR_MAP[0])
  const [selectedSize, setSelectedSize] = useState(SIZES[0])
  const [isAdding, setIsAdding] = useState(false)

  const isWishlisted = wishlist.includes('vibe-sound-pro-x')

  const handleAddToCart = () => {
    setIsAdding(true)
    onAddToCart({
      id: \`vibe-sound-pro-x-\${selectedColor.id}-\${selectedSize.toLowerCase()}\`,
      name: \`Vibe Sound Pro X (\${selectedColor.name})\`,
      price: 299,
      color: selectedColor.name,
      size: selectedSize,
      image: selectedColor.image,
    })
    setTimeout(() => setIsAdding(false), 800)
  }

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-4 sm:pb-8 md:pb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_top_right] from-primary/5 via-transparent to-transparent opacity-70" />

      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Text / Info Column */}
          <div className="flex flex-col space-y-6 lg:col-span-6 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider">
                <Sparkles className="mr-1 h-3 w-3 inline text-primary animate-pulse" />
                New Season Release
              </Badge>
              <Badge variant="glass" className="text-[10px] uppercase font-semibold text-muted-foreground">
                Free Shipping
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Sound Engineered <br />
                <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  For Pure Vibration
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Elevate your daily acoustics with the all-new Vibe Sound Pro X. Crafted with precision layout nodes, interactive cancellation software, and 45-hour cloud playback.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="shine"
                className="font-bold flex items-center justify-center gap-2 h-10 sm:h-11 px-6 text-xs sm:text-sm shadow-lg shadow-primary/20 dark:shadow-none cursor-pointer"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-4 w-4 shrink-0" />
                <span>Shop Now — $299</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('categories')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="font-semibold gap-2 border-border/80 text-foreground hover:bg-muted/50 h-10 sm:h-11 px-6 text-xs sm:text-sm cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </div>

            {/* Micro badges showing trust metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-6 mt-4">
              <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-3 sm:gap-1">
                <div className="flex items-center gap-1.5 text-primary text-xs font-semibold shrink-0">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>2 Year Warranty</span>
                </div>
                <span className="text-[10px] text-muted-foreground text-right sm:text-left">Full coverage guarantee</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-3 sm:gap-1">
                <div className="flex items-center gap-1.5 text-primary text-xs font-semibold shrink-0">
                  <Truck className="h-4 w-4 shrink-0" />
                  <span>Fast Delivery</span>
                </div>
                <span className="text-[10px] text-muted-foreground text-right sm:text-left">Ships next business day</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-3 sm:gap-1">
                <div className="flex items-center gap-1.5 text-primary text-xs font-semibold shrink-0">
                  <RefreshCw className="h-4 w-4 shrink-0" />
                  <span>30-Day Returns</span>
                </div>
                <span className="text-[10px] text-muted-foreground text-right sm:text-left">Hassle-free money back</span>
              </div>
            </div>

          </div>

          {/* Right Product Interactive Showcase Card */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <Card className="overflow-hidden border border-border/70 bg-card/60 dark:bg-card/45 backdrop-blur-md shadow-xl rounded-2xl flex flex-col">
              
              {/* Product Visual Frame */}
              <div
                onClick={() => router.push('/preview/ecommerce-02')}
                className="relative aspect-square w-full bg-muted/40 dark:bg-zinc-900/50 flex items-center justify-center p-8 group cursor-pointer"
                title="Click to view details"
              >
                <Badge variant="glass" className="absolute left-4 top-4 font-bold text-[10px] uppercase shadow-xs select-none">
                  Limited Edition
                </Badge>
                
                {/* Wishlist Heart Overlay */}
                <Button
                  variant="glass"
                  size="icon"
                  className={\`absolute right-4 top-4 h-9 w-9 rounded-full cursor-pointer transition-colors \${
                    isWishlisted ? 'text-destructive hover:bg-destructive/10' : 'text-muted-foreground hover:text-foreground'
                  }\`}
                  onClick={() => onToggleWishlist('vibe-sound-pro-x')}
                  aria-label="Add to Wishlist"
                >
                  <Heart className={\`h-4 w-4 \${isWishlisted ? 'fill-current' : ''}\`} />
                </Button>

                {/* Animated Image Wrapper */}
                <motion.div
                  key={selectedColor.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full flex items-center justify-center"
                >
                  <img
                    src={selectedColor.image}
                    alt="Vibe Sound Pro X Headphone"
                    className="h-64 sm:h-76 md:h-80 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </div>

              {/* Product Context / Options Area */}
              <div className="p-6 space-y-6 text-left">
                
                {/* Header Info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3
                      onClick={() => router.push('/preview/ecommerce-02')}
                      className="text-xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      Vibe Sound Pro X
                    </h3>
                    
                    {/* Stars and Ratings count */}
                    <div className="flex items-center gap-1.5 select-none">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-foreground">4.9</span>
                      <span className="text-[10px] text-muted-foreground font-medium">(124 reviews)</span>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground line-through">$399.00</span>
                      <Badge variant="destructive" className="text-[9px] font-extrabold px-1.5 py-0.2 rounded">
                        -25%
                      </Badge>
                    </div>
                    <span className="text-2xl font-black text-foreground">$299.00</span>
                  </div>
                </div>

                {/* Separator line */}
                <div className="h-px bg-border/60" />

                {/* Option 1: Swatches */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Select Color</span>
                    <span className="text-xs text-foreground font-semibold">{selectedColor.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {PRODUCTS_COLOR_MAP.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={\`h-7 w-7 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center \${
                          selectedColor.id === color.id
                            ? 'border-primary scale-110 shadow-sm'
                            : 'border-transparent hover:border-muted-foreground/30 hover:scale-105'
                        }\`}
                        title={color.name}
                      >
                        <span className={\`h-4 w-4 rounded-full \${color.colorCode}\`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Option 2: Sizes */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <span>Choose Variant</span>
                      <Tooltip content="Pro Fit includes extra plush memory foam earcups and wider dynamic spectrum nodes.">
                        <button className="text-muted-foreground hover:text-foreground cursor-pointer">
                          <Info className="h-3.5 w-3.5 stroke-2" />
                        </button>
                      </Tooltip>
                    </span>
                    <span className="text-xs text-foreground font-semibold">{selectedSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {SIZES.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'default' : 'outline'}
                        className={\`text-xs h-9 px-4 font-semibold rounded-lg cursor-pointer \${
                          selectedSize === size
                            ? 'shadow-xs'
                            : 'border-border/80 text-foreground hover:bg-muted/30'
                        }\`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Primary Add to Cart Action */}
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  variant={isAdding ? 'glow' : 'shine'}
                  className="w-full font-bold h-10 sm:h-11 shadow-sm mt-2 transition-all cursor-pointer disabled:opacity-90 flex justify-center items-center gap-2 text-xs sm:text-sm"
                >
                  {isAdding ? (
                    <>
                      <ShoppingBag className="h-4 w-4 animate-bounce" />
                      <span>Adding to Cart...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add to Shopping Cart</span>
                    </>
                  )}
                </Button>

              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
`,
  'components/ecommerce-footer.tsx': `import React, { useRef } from 'react'
import { Globe, Camera, Terminal, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EcommerceFooter() {
  const footerRef = useRef<HTMLDivElement>(null)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (footerRef.current) {
      let parent = footerRef.current.parentElement
      while (parent) {
        const overflowY = window.getComputedStyle(parent).overflowY
        if (overflowY === 'auto' || overflowY === 'scroll') {
          parent.scrollTo({ top: 0, behavior: 'smooth' })
          break
        }
        parent = parent.parentElement
      }
    }
  }

  return (
    <footer ref={footerRef} className="border-t border-border bg-background w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-border/80">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-xl">
                V
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Vibe <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary align-middle ml-1">SHOP</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Crafting premium audio equipment engineered for pure vibration. Experience studio-grade acoustic performance, active noise filtering, and high-fidelity soundscapes.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Website">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Acoustic Gallery">
                <Camera className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Developer Space">
                <Terminal className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="text-left space-y-3.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Shop</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Headphones</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Wireless Earbuds</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Bluetooth Speakers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Audio Accessories</a></li>
              </ul>
            </div>

            <div className="text-left space-y-3.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Support</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Order Status</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Shipping Details</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Warranty Info</a></li>
              </ul>
            </div>

            <div className="text-left space-y-3.5 col-span-2 sm:col-span-1">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Company</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Acoustics</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Our Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Eco-Sustainability</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[11px] text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Vibe Shop. All rights reserved.</span>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Sale</a>
              <a href="#" className="hover:text-foreground transition-colors">Site Map</a>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleScrollToTop}
            className="text-[10px] font-bold gap-1 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
`,
}

export const ecommerce02Code = {
  'app/product/[id]/page.tsx': `'use client'

import React, { useState } from 'react'
import { EcommerceNavbar } from '../ecommerce-01/components/ecommerce-navbar'
import { EcommerceFooter } from '../ecommerce-01/components/ecommerce-footer'
import { ProductGallery } from './components/product-gallery'
import { ProductInfo } from './components/product-info'
import { ProductReviews } from './components/product-reviews'
import { BlurFade } from '@/components/ui/blur-fade'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, Star } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
  quantity: number
}

const commonProduct = {
  id: 'vibe-sound-pro-x',
  name: 'Vibe Sound Pro X',
  price: 299,
  originalPrice: 349,
  description: 'Elevate your daily acoustics with the all-new Vibe Sound Pro X. Engineered with custom 40mm beryllium diaphragm transducers, hybrid active noise filtering, and a 45-hour cloud playback power reserve.',
  rating: 4.8,
  reviewsCount: 182,
  colors: [
    {
      name: 'Obsidian Black',
      hex: '#18181b',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      name: 'Platinum Silver',
      hex: '#e4e4e7',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      name: 'Forest Teal',
      hex: '#0d9488',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1619737307100-55b82782b132?q=80&w=600&auto=format&fit=crop',
      ],
    },
  ],
  sizes: ['Standard Foam', 'Premium Velvet', 'Synthetic Leatherette'],
}

export function Ecommerce02Page() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  // Cart Operations
  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.color === item.color && i.size === item.size
      )
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.color === item.color && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prev, item]
    })
  }

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id)
      return
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const currentColorImages = commonProduct.colors[selectedColorIndex].images

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      {/* Alert Top Info bar */}
      <div className="bg-primary px-4 py-2 text-center text-[10px] sm:text-xs font-semibold text-primary-foreground flex items-center justify-center gap-2 select-none">
        <Zap className="h-3.5 w-3.5 fill-current animate-bounce shrink-0" />
        <span>Vibe Store Product Details Demo: Interactive color swatches, technical accordions, and customer photo zooms!</span>
      </div>

      {/* Navbar Header */}
      <EcommerceNavbar
        cart={cart}
        wishlist={wishlist}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Main Core Layout grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
        
        {/* Gallery / Info main split */}
        <BlurFade delay={0.1} duration={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Gallery Column (left 5 spans) */}
            <div className="lg:col-span-5 w-full">
              <ProductGallery
                images={currentColorImages}
                productName={commonProduct.name}
              />
            </div>

            {/* Info and Specs Column (right 7 spans) */}
            <div className="lg:col-span-7 w-full">
              <ProductInfo
                product={commonProduct}
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                onSelectColor={setSelectedColorIndex}
                selectedColorIndex={selectedColorIndex}
              />
            </div>
          </div>
        </BlurFade>

        {/* Similar Accessories Section */}
        <BlurFade delay={0.2} duration={0.5}>
          <div className="space-y-8 pt-4 border-t border-border/80 text-left">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                Complete Your Acoustic Setup
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                Specially designed desktop accessories and cases optimized for high-fidelity audio equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'vibe-sound-budz',
                  name: 'Vibe Sound Budz',
                  price: 149,
                  desc: 'Wireless audio nodes with active sweat protection and smart tap arrays.',
                  rating: 4.8,
                  reviews: 86,
                  image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-sound-wave',
                  name: 'Vibe Sound Wave Speaker',
                  price: 199,
                  desc: 'Portable Bluetooth driver with dual-chamber bass resonance, waterproof shell.',
                  rating: 4.7,
                  reviews: 94,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=400&auto=format&fit=crop',
                },
                {
                  id: 'vibe-charge-dock',
                  name: 'Vibe Charge Node',
                  price: 39,
                  desc: 'Dual magnetic wireless charging pad designed to top up headsets and earbuds.',
                  rating: 4.6,
                  reviews: 31,
                  image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop',
                },
              ].map((product) => (
                <Card key={product.id} className="text-left overflow-hidden border border-border/70 bg-card/45 flex flex-col justify-between hover:shadow-md transition-all group">
                  <div className="aspect-[4/3] bg-muted/40 flex items-center justify-center overflow-hidden relative border-b border-border/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-sm font-extrabold tracking-tight truncate">{product.name}</CardTitle>
                        <span className="text-sm font-black text-foreground">\${product.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-foreground">{product.rating}</span>
                        <span className="text-[9px] text-muted-foreground">({product.reviews})</span>
                      </div>

                      <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {product.desc}
                      </CardDescription>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        color: 'Default',
                        size: 'Standard',
                        image: product.image,
                        quantity: 1,
                      })}
                      className="w-full text-xs font-bold h-9 mt-2 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-pointer"
                    >
                      Quick Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Customer Reviews Section */}
        <BlurFade delay={0.3} duration={0.5}>
          <ProductReviews />
        </BlurFade>

      </main>

      {/* Footer Details */}
      <EcommerceFooter />
    </div>
  )
}
`,
  'components/product-gallery.tsx': `'use client'

import React, { useState } from 'react'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewer Frame */}
      <div className="aspect-[4/3] w-full rounded-2xl border border-border/80 bg-muted/30 overflow-hidden relative group flex items-center justify-center">
        <img
          src={images[activeIndex] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop'}
          alt={\`\${productName} view \${activeIndex + 1}\`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
        />
        <div className="absolute inset-0 bg-black/5 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Interactive Thumbnails Row */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            onMouseEnter={() => setActiveIndex(i)}
            className={\`aspect-[4/3] rounded-lg overflow-hidden border bg-muted/40 transition-all duration-200 cursor-pointer \${
              activeIndex === i
                ? 'border-primary ring-2 ring-primary/20 ring-offset-2 ring-offset-background'
                : 'border-border/80 hover:border-foreground/40'
            }\`}
            aria-label={\`View \${productName} image \${i + 1}\`}
          >
            <img
              src={img}
              alt={\`\${productName} thumbnail \${i + 1}\`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
`,
  'components/product-info.tsx': `'use client'

import React, { useState } from 'react'
import { Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface ProductInfoProps {
  product: {
    id: string
    name: string
    price: number
    originalPrice: number
    description: string
    rating: number
    reviewsCount: number
    colors: { name: string; hex: string; images: string[] }[]
    sizes: string[]
  }
  wishlist: string[]
  onAddToCart: (params: {
    id: string
    name: string
    price: number
    color: string
    size: string
    image: string
    quantity: number
  }) => void
  onToggleWishlist: (id: string) => void
  onSelectColor: (index: number) => void
  selectedColorIndex: number
}

export function ProductInfo({
  product,
  wishlist,
  onAddToCart,
  onToggleWishlist,
  onSelectColor,
  selectedColorIndex,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const isWishlisted = wishlist.includes(product.id)
  const currentColor = product.colors[selectedColorIndex]

  const handleAddToCart = () => {
    setIsAdding(true)
    setTimeout(() => {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        color: currentColor.name,
        size: selectedSize,
        image: currentColor.images[0],
        quantity: quantity,
      })
      setIsAdding(false)
    }, 800)
  }

  const handleScrollToReviews = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('reviews-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex flex-col space-y-6 text-left">
      {/* Category & Badge */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="glow" className="text-[10px] uppercase font-bold tracking-wider">
          Best Seller
        </Badge>
        <span className="text-xs text-muted-foreground font-semibold">Studio Acoustics</span>
      </div>

      {/* Title & Price */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {product.name}
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-foreground">\${product.price}.00</span>
          <span className="text-base text-muted-foreground line-through">\${product.originalPrice}.00</span>
          <Badge className="bg-red-500/10 text-red-600 dark:text-red-400 dark:bg-red-500/20 border-red-500/20 text-[10px] font-bold">
            Save \${(product.originalPrice - product.price)}.00
          </Badge>
        </div>
      </div>

      {/* Ratings summary */}
      <div className="flex items-center gap-2 pb-2 border-b border-border/80">
        <div className="flex items-center gap-0.5 text-amber-500">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1
            if (ratingValue <= Math.floor(product.rating)) {
              return <Star key={i} className="h-4 w-4 fill-current" />
            } else if (ratingValue === Math.ceil(product.rating)) {
              const fractionPercent = Math.round((product.rating % 1) * 100)
              return (
                <div key={i} className="relative h-4 w-4 shrink-0">
                  <Star className="absolute inset-0 h-full w-full text-muted-foreground/30 fill-current" />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: \`\${fractionPercent}%\` }}>
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              )
            } else {
              return <Star key={i} className="h-4 w-4 text-muted-foreground/30 fill-current" />
            }
          })}
        </div>
        <span className="text-xs font-bold text-foreground">{product.rating}</span>
        <span className="text-xs text-muted-foreground">•</span>
        <a
          href="#reviews-section"
          onClick={handleScrollToReviews}
          className="text-xs text-primary hover:underline font-semibold"
        >
          {product.reviewsCount} customer reviews
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Configurations Color selection */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Color: <span className="text-foreground capitalize">{currentColor.name}</span>
        </span>
        <div className="flex gap-2.5 pt-1.5">
          {product.colors.map((c, idx) => (
            <button
              key={c.name}
              onClick={() => onSelectColor(idx)}
              className={\`h-8 w-8 rounded-full border transition-all flex items-center justify-center cursor-pointer \${
                selectedColorIndex === idx
                  ? 'border-foreground ring-2 ring-primary/30 ring-offset-2 ring-offset-background scale-105'
                  : 'border-border/80 hover:border-foreground/50'
              }\`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
              aria-label={\`Select \${c.name} color\`}
            />
          ))}
        </div>
      </div>

      {/* Configurations Size selection */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Ear Cushion Style
        </span>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? 'default' : 'outline'}
              onClick={() => setSelectedSize(size)}
              className={\`text-xs h-9 px-4 font-semibold rounded-lg cursor-pointer \${
                selectedSize === size
                  ? ''
                  : 'border-border/85 text-foreground hover:bg-muted/30'
              }\`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Quantity & CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        {/* Quantity control */}
        <div className="flex items-center rounded-lg border border-border bg-muted/20 self-start sm:self-auto w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="h-10 w-10 text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-8 text-center text-xs font-bold text-foreground">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="h-10 w-10 text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Buttons wrapper (Forces Add to Cart and Wishlist side-by-side on mobile) */}
        <div className="flex flex-1 gap-2.5 w-full">
          {/* Add to Cart button */}
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            variant={isAdding ? 'glow' : 'shine'}
            className="flex-1 font-bold h-10 shadow-md shadow-primary/10 transition-all cursor-pointer flex justify-center items-center gap-2 text-xs uppercase tracking-wider"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
          </Button>

          {/* Wishlist button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onToggleWishlist(product.id)}
            className={\`h-10 w-10 rounded-lg border-border hover:bg-muted/30 cursor-pointer shrink-0 transition-colors \${
              isWishlisted ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'
            }\`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={\`h-4 w-4 \${isWishlisted ? 'fill-current' : ''}\`} />
          </Button>
        </div>
      </div>

      {/* Stock warning status */}
      <div className="text-[11px] text-orange-600 dark:text-orange-400 font-semibold flex items-center gap-1.5 pt-1">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-ping" />
        <span>Only 3 items remaining in stock - order soon!</span>
      </div>

      {/* Detailed Technical Specifications Accordion */}
      <div className="pt-4 border-t border-border/80">
        <Accordion type="single" collapsible defaultValue="specs" className="w-full">
          <AccordionItem value="specs">
            <AccordionTrigger className="font-bold text-xs uppercase tracking-wider text-foreground hover:no-underline">
              Technical Specifications
            </AccordionTrigger>
            <AccordionContent className="text-xs space-y-2 pt-2">
              <div className="grid grid-cols-2 py-1 border-b border-border/40">
                <span className="font-semibold text-muted-foreground">Frequency Range</span>
                <span className="text-foreground">5 Hz - 40 kHz (Hi-Res Audio)</span>
              </div>
              <div className="grid grid-cols-2 py-1 border-b border-border/40">
                <span className="font-semibold text-muted-foreground">Transducer Driver</span>
                <span className="text-foreground">40mm Beryllium Diaphragm</span>
              </div>
              <div className="grid grid-cols-2 py-1 border-b border-border/40">
                <span className="font-semibold text-muted-foreground">Impedance</span>
                <span className="text-foreground">32 Ohms</span>
              </div>
              <div className="grid grid-cols-2 py-1">
                <span className="font-semibold text-muted-foreground">Connectivity</span>
                <span className="text-foreground">Bluetooth 5.3 & 3.5mm Gold Jack</span>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shipping">
            <AccordionTrigger className="font-bold text-xs uppercase tracking-wider text-foreground hover:no-underline">
              Shipping & Returns
            </AccordionTrigger>
            <AccordionContent className="text-xs space-y-3.5 pt-3">
              <div className="flex items-start gap-2.5">
                <Truck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-foreground">Free Standard Shipping</p>
                  <p className="text-muted-foreground">Dispatched next business day, delivered within 2-4 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <RotateCcw className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-foreground">30-Day Hassle-Free Returns</p>
                  <p className="text-muted-foreground">Return your unused box inside 30 days for a full refund check.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="warranty">
            <AccordionTrigger className="font-bold text-xs uppercase tracking-wider text-foreground hover:no-underline">
              Warranty & Service
            </AccordionTrigger>
            <AccordionContent className="text-xs flex items-start gap-2.5 pt-3">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-semibold text-foreground">2-Year Full Coverage</p>
                <p className="text-muted-foreground">Includes coverage for battery degradation, driver hardware, and casing layout damage.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  )
}
`,
  'components/product-reviews.tsx': `'use client'

import React, { useState } from 'react'
import { Star, ShieldCheck, ThumbsUp, Camera, PenTool } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface Review {
  id: string
  author: string
  avatar: string
  rating: number
  date: string
  title: string
  content: string
  verified: boolean
  likes: number
  images?: string[]
}

export function ProductReviews() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({})

  const [reviewsList, setReviewsList] = useState<Review[]>([
    {
      id: 'rev-1',
      author: 'David K.',
      avatar: 'DK',
      rating: 5,
      date: '2 days ago',
      title: 'Absolutely stellar sound signature!',
      content: 'I have used several reference monitors in my home studio, and the acoustic clarity on these Beryllium drivers is top-tier. Sub-bass is present but not muddy, and highs resolve with crisp precision. Highly recommended for audiophiles.',
      verified: true,
      likes: 12,
      images: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=300&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=300&auto=format&fit=crop',
      ],
    },
    {
      id: 'rev-2',
      author: 'Sophia R.',
      avatar: 'SR',
      rating: 5,
      date: '1 week ago',
      title: 'Comfortable for 8+ hour editing sessions',
      content: 'The leatherette memory foam ear cushions fit perfectly and block out the low hum of my air conditioner even with ANC turned off. When I turn on ANC, it is total silence. The battery life easily matches the 45-hour claim.',
      verified: true,
      likes: 8,
      images: [
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=300&auto=format&fit=crop',
      ],
    },
    {
      id: 'rev-3',
      author: 'Marcus L.',
      avatar: 'ML',
      rating: 4,
      date: '2 weeks ago',
      title: 'Solid build quality, slightly heavy',
      content: 'The metal band slider feels very premium and solid. The clamping force is just right so they do not fall off during movement, but because of the high-quality aluminum build, they feel slightly heavier than all-plastic alternatives.',
      verified: false,
      likes: 3,
    },
  ])

  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false)
  const [formRating, setFormRating] = useState(3)
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [formName, setFormName] = useState('')
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const ratingDistribution = [
    { stars: 5, percentage: 82 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ]

  const handleLike = (id: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate network latency
    setTimeout(() => {
      const newReview: Review = {
        id: \`rev-\${Date.now()}\`,
        author: formName.trim() || 'Anonymous',
        avatar: (formName.trim() || 'A').substring(0, 2).toUpperCase(),
        rating: formRating,
        date: 'Just now',
        title: formTitle.trim() || 'Highly impressed!',
        content: formContent.trim() || 'Excellent sound signature and great build quality.',
        verified: true,
        likes: 0,
      }

      setReviewsList((prev) => [newReview, ...prev])
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Auto close after success message
      setTimeout(() => {
        setIsWriteReviewOpen(false)
        // Reset fields
        setFormName('')
        setFormTitle('')
        setFormContent('')
        setFormRating(3)
        setSubmitSuccess(false)
      }, 1500)
    }, 1000)
  }

  return (
    <div id="reviews-section" className="space-y-10 text-left pt-6 border-t border-border/85">
      
      {/* Reviews Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start bg-muted/10 border border-border/60 p-6 sm:p-8 rounded-2xl">
        
        {/* Left Score Card */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-muted-foreground/90">Customer Reviews</h3>
          <div className="flex items-baseline gap-2 flex-row justify-center md:justify-start pt-1">
            <span className="text-5xl font-black text-foreground">4.8</span>
            <span className="text-muted-foreground text-xs font-semibold">out of 5</span>
          </div>
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1
              if (ratingValue <= Math.floor(4.8)) {
                return <Star key={i} className="h-4.5 w-4.5 fill-current" />
              } else if (ratingValue === Math.ceil(4.8)) {
                return (
                  <div key={i} className="relative h-4.5 w-4.5 shrink-0">
                    <Star className="absolute inset-0 h-full w-full text-muted-foreground/30 fill-current" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                      <Star className="h-4.5 w-4.5 fill-current" />
                    </div>
                  </div>
                )
              } else {
                return <Star key={i} className="h-4.5 w-4.5 text-muted-foreground/30 fill-current" />
              }
            })}
          </div>
          <p className="text-[11px] text-muted-foreground font-medium">Based on 182 product ratings</p>
        </div>

        {/* Middle Stars Distribution Bars */}
        <div className="md:col-span-5 w-full space-y-2.5">
          {ratingDistribution.map((dist) => (
            <div key={dist.stars} className="flex items-center gap-3 text-xs">
              <button className="w-12 text-left font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1.5">
                <span>{dist.stars} star</span>
              </button>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden relative">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-primary rounded-full transition-all duration-500"
                  style={{ width: \`\${dist.percentage}%\` }}
                />
              </div>
              <span className="w-8 text-right font-bold text-muted-foreground">{dist.percentage}%</span>
            </div>
          ))}
        </div>

        {/* Right Write a Review Card */}
        <div className="md:col-span-4 flex flex-col space-y-3 text-left">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-muted-foreground/90">Share your feedback</h3>
          <p className="text-xs text-muted-foreground leading-relaxed pt-1">
            Have you purchased this product? Let other customers know about your experience!
          </p>
          <Button
            variant="outline"
            onClick={() => setIsWriteReviewOpen(true)}
            className="w-full text-xs font-bold h-9 gap-1.5 cursor-pointer hover:bg-muted/40 mt-1"
          >
            <PenTool className="h-3.5 w-3.5" />
            <span>Write a Customer Review</span>
          </Button>
        </div>

      </div>

      {/* Reviews Cards List */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">
          Featured Feedback
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => {
            const isLiked = likedReviews[review.id]
            const totalLikes = review.likes + (isLiked ? 1 : 0)

            return (
              <Card key={review.id} className="border-border/70 bg-card/20 shadow-xs">
                <CardContent className="p-6 space-y-4">
                  {/* Reviewer Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 border border-border">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="flex items-center gap-2 flex-row">
                          <span className="text-xs font-bold text-foreground">{review.author}</span>
                          {review.verified && (
                            <Badge variant="glow" className="text-[8px] font-extrabold uppercase px-1 py-0 border-primary/20 bg-primary/5 text-primary flex items-center gap-0.5 select-none shrink-0">
                              <ShieldCheck className="h-2 w-2 inline" />
                              <span>Verified</span>
                            </Badge>
                          )}
                        </div>
                        <p className="text-[10px] text-muted-foreground">{review.date}</p>
                      </div>
                    </div>

                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={\`h-3.5 w-3.5 \${
                            i < review.rating ? 'fill-current' : 'text-muted/50'
                          }\`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Title & Content */}
                  <div className="space-y-2 text-left">
                    <h5 className="text-sm font-bold text-foreground">{review.title}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{review.content}</p>
                  </div>

                  {/* Customer Uploaded Image Attachments */}
                  {review.images && review.images.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {review.images.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedImage(img)}
                          className="h-16 w-16 rounded-md overflow-hidden bg-muted/40 border border-border/80 relative cursor-pointer group shrink-0"
                          title="Click to enlarge"
                        >
                          <img
                            src={img}
                            alt="Attachment preview"
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                            <Camera className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Review Footer / Likes */}
                  <div className="flex items-center gap-4 pt-1.5 border-t border-border/40">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(review.id)}
                      className={\`h-7 px-2.5 text-[10px] font-bold gap-1.5 rounded-md cursor-pointer \${
                        isLiked ? 'text-primary hover:bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                      }\`}
                    >
                      <ThumbsUp className={\`h-3 w-3 \${isLiked ? 'fill-current' : ''}\`} />
                      <span>Helpful ({totalLikes})</span>
                    </Button>
                  </div>

                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Enlarged Image Dialog Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-2xl bg-card border-border p-4 flex flex-col items-center">
          <DialogTitle className="sr-only">Customer Review Photo Preview</DialogTitle>
          <DialogDescription className="sr-only">Enlarged customer photo attachment view</DialogDescription>
          {selectedImage && (
            <div className="w-full relative aspect-[4/3] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Enlarged attachment"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Write a Review Modal Dialog */}
      <Dialog open={isWriteReviewOpen} onOpenChange={(open) => {
        setIsWriteReviewOpen(open)
        if (!open) {
          setFormName('')
          setFormTitle('')
          setFormContent('')
          setFormRating(3)
          setSubmitSuccess(false)
        }
      }}>
        <DialogContent className="max-w-md bg-card border-border p-6 space-y-4 text-left">
          <DialogTitle className="text-lg font-bold text-foreground">Write a Review</DialogTitle>
          <DialogDescription className="text-xs text-foreground/80">
            Share your thoughts and feedback on Vibe Sound Pro X with other audiophiles.
          </DialogDescription>

          {submitSuccess ? (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h5 className="text-sm font-bold text-foreground">Review Posted Successfully!</h5>
              <p className="text-xs text-foreground/80 max-w-xs leading-relaxed">
                Thank you! Your feedback has been published and added to the review feed.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Star rating selector */}
              <div className="space-y-2">
                <Label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Overall Rating</Label>
                <div className="flex gap-1.5 text-amber-500 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="cursor-pointer transition-transform hover:scale-110"
                      aria-label={\`Rate \${star} star\`}
                    >
                      <Star
                        className={\`h-6 w-6 \${
                          star <= (hoverRating ?? formRating) ? 'fill-current' : 'text-muted-foreground/30'
                        }\`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Your Name</Label>
                <Input
                  id="name"
                  placeholder="e.g. John Doe"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="bg-background border-border text-foreground text-xs"
                />
              </div>

              {/* Title Input */}
              <div className="space-y-1.5">
                <Label htmlFor="title" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Review Title</Label>
                <Input
                  id="title"
                  placeholder="e.g. Incredible sound clarity"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  className="bg-background border-border text-foreground text-xs"
                />
              </div>

              {/* Description Textarea */}
              <div className="space-y-1.5">
                <Label htmlFor="content" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Review Content</Label>
                <Textarea
                  id="content"
                  placeholder="Tell us what you liked or disliked about Beryllium drivers, cushion comfort, and wireless ANC..."
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  required
                  rows={4}
                  className="bg-background border-border text-foreground text-xs resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="!h-9 flex-1 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="default"
                  size="sm"
                  className="!h-9 flex-1 text-xs font-bold cursor-pointer"
                >
                  {isSubmitting ? 'Posting...' : 'Submit Review'}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

    </div>
  )
`,
}

export const chat01Code = {
  'app/chat/page.tsx': `'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  Bot,
  Trash,
  ChevronRight,
  ChevronDown,
  PanelLeft,
  SquarePen,
  Check,
  Upload,
  Pin,
  Archive,
  MoreHorizontal,
  FolderClosed,
  Library,
  FolderPlus
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu'
import { ChatSidebar } from './components/chat-sidebar'
import { ChatMessageItem, Message } from './components/chat-message-item'
import { ChatComposer } from './components/chat-composer'
import { ChatWelcome } from './components/chat-welcome'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion, AnimatePresence } from 'motion/react'

interface Conversation {
  id: string
  title: string
  model: string
  updatedAt: Date
  previewText?: string
}

interface AttachedFile {
  id: string
  name: string
  type: 'image' | 'document'
  size: string
  url?: string
}

export function Chat01Page() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'chat-1',
      title: 'Greeting exchange',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 600000), // 10 mins ago
      previewText: 'Here is a welcoming email draft you can use to greet your new team member...',
    },
    {
      id: 'chat-2',
      title: 'Write Audit Prompt',
      model: 'Vibe Ultra',
      updatedAt: new Date(Date.now() - 3600000), // 1 hour ago
      previewText: 'Audit prompts focus on identifying logic flaws and security vulnerabilities...',
    },
    {
      id: 'chat-3',
      title: 'How LLMs Work',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 7200000), // 2 hours ago
      previewText: 'Large Language Models process and predict tokens based on probability distributions...',
    },
    {
      id: 'chat-4',
      title: 'Deploy Next.js Netlify',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 14400000), // 4 hours ago
      previewText: 'Configuring custom netlify.toml headers for Next.js app deployments...',
    },
    {
      id: 'chat-5',
      title: 'CKEditor Issues Review',
      model: 'Vibe Ultra',
      updatedAt: new Date(Date.now() - 86400000), // 1 day ago
      previewText: 'CKEditor custom build integrations might trigger focus leaks or styling conflicts...',
    },
    {
      id: 'chat-6',
      title: 'Next Steps After Git Pull',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 172800000), // 2 days ago
      previewText: 'Running package installations and clearing dev caches to sync your branch...',
    },
    {
      id: 'chat-7',
      title: 'HTML block formatting explanation',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 259200000), // 3 days ago
      previewText: 'To format code snippets in HTML block tags, use clean pre tags combined with class formatting...',
    },
  ])

  const [messages, setMessages] = useState<Record<string, Message[]>>({
    'chat-1': [
      {
        id: 'msg-1-1',
        role: 'user',
        content: 'Hello! Can you help me write a quick email welcoming a new frontend developer to the team?',
        timestamp: new Date(Date.now() - 700000),
      },
      {
        id: 'msg-1-2',
        role: 'assistant',
        content: 'Here is a welcoming email draft you can use to greet your new team member:\\n\\n> **Subject:** Welcome to the team, [Name]!\\n>\\n> Hi [Name],\\n>\\n> We are thrilled to welcome you to the Vibe UI development team! Your background in responsive frontend styling and components is a fantastic fit, and we are excited to have you on board.\\n>\\n> We will get you set up with your development credentials and introduce you to the team later today. Let us know if you need anything in the meantime!\\n>\\n> Best regards,  \\n> [Your Name]\\n\\nLet me know if you would like to customize this with specific details!',
        timestamp: new Date(Date.now() - 600000),
      },
    ],
    'chat-2': [
      {
        id: 'msg-2-1',
        role: 'user',
        content: 'Write an audit prompt for code analysis.',
        timestamp: new Date(Date.now() - 3700000),
      },
      {
        id: 'msg-2-2',
        role: 'assistant',
        content: 'Here is a structured prompt for auditing code files:\\n\\n\`\`\`markdown\\nYou are an expert security auditor. Scan the following React component code block for potential issues, including memory leaks inside useEffect hooks, missing accessibility tags, and state synchronization leaks.\\n\`\`\`\\n\\nRun this against your codebase to identify quick architectural improvements!',
        timestamp: new Date(Date.now() - 3600000),
      },
    ],
    'chat-3': [
      {
        id: 'msg-3-1',
        role: 'user',
        content: 'Explain how Large Language Models work in simple terms.',
        timestamp: new Date(Date.now() - 7300000),
      },
      {
        id: 'msg-3-2',
        role: 'assistant',
        content: 'Large Language Models (LLMs) function like advanced autocomplete engines:\\n\\n* **Tokenization:** They split your sentences into smaller parts called tokens (words or syllables).\\n* **Probability:** They calculate which token is most likely to come next based on patterns learned from reading billions of web pages.\\n* **Attention mechanism:** They look at all the words in your prompt simultaneously to understand context and relationships.',
        timestamp: new Date(Date.now() - 7200000),
      },
    ],
    'chat-4': [],
    'chat-5': [],
    'chat-6': [],
    'chat-7': [],
  })

  const [activeId, setActiveId] = useState<string | null>('chat-1')
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedModel, setSelectedModel] = useState('Vibe Pro')
  const [sideOffset, setSideOffset] = useState(8)

  useEffect(() => {
    const handleResize = () => {
      setSideOffset(window.innerWidth < 640 ? -190 : 8)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  const messagesEndRef = useRef<HTMLDivElement>(null)
  const streamTimeoutRef = useRef<any>(null)

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, activeId, isGenerating])

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current)
    }
  }, [])

  // Start new conversation
  const handleNewChat = () => {
    const newId = \`chat-\${Date.now()}\`
    const newChat: Conversation = {
      id: newId,
      title: 'New Conversation',
      model: selectedModel,
      updatedAt: new Date(),
      previewText: 'Start writing your message below...',
    }

    setConversations((prev) => [newChat, ...prev])
    setMessages((prev) => ({ ...prev, [newId]: [] }))
    setActiveId(newId)
    setInput('')
    if (streamTimeoutRef.current) {
      clearTimeout(streamTimeoutRef.current)
      setIsGenerating(false)
    }
  }

  // Switch active conversation
  const handleSelectConversation = (id: string) => {
    setActiveId(id)
    const chat = conversations.find((c) => c.id === id)
    if (chat) {
      setSelectedModel(chat.model)
    }
    setInput('')
    if (streamTimeoutRef.current) {
      clearTimeout(streamTimeoutRef.current)
      setIsGenerating(false)
    }
  }

  // Rename conversation title
  const handleRenameChat = (id: string, newTitle: string) => {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, title: newTitle } : c))
    )
  }

  // Delete conversation
  const handleDeleteChat = (id: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== id))
    setMessages((prev) => {
      const copy = { ...prev }
      delete copy[id]
      return copy
    })

    if (activeId === id) {
      const remaining = conversations.filter((c) => c.id !== id)
      if (remaining.length > 0) {
        setActiveId(remaining[0].id)
      } else {
        setActiveId(null)
      }
    }
  }

  // Clear current active conversation history
  const handleClearHistory = () => {
    if (!activeId) return
    setMessages((prev) => ({ ...prev, [activeId]: [] }))
    setConversations((prev) =>
      prev.map((c) => (c.id === activeId ? { ...c, previewText: '' } : c))
    )
  }

  // Rate message thumbs feedback
  const handleRateMessage = (id: string, rating: 'like' | 'dislike') => {
    if (!activeId) return
    setMessages((prev) => {
      const currentMsgs = prev[activeId] || []
      return {
        ...prev,
        [activeId]: currentMsgs.map((m) =>
          m.id === id ? { ...m, rating: m.rating === rating ? null : rating } : m
        ),
      }
    })
  }

  // Composer Send Message operation
  const handleSendMessage = (text: string, attachments: AttachedFile[]) => {
    if (!activeId) return
    const userMsgText = text.trim()
    if (!userMsgText && attachments.length === 0) return

    const userMessage: Message = {
      id: \`msg-usr-\${Date.now()}\`,
      role: 'user',
      content: userMsgText || \`Uploaded files: \${attachments.map(a => a.name).join(', ')}\`,
      timestamp: new Date(),
    }

    // Update messages log
    const updatedMessages = [...(messages[activeId] || []), userMessage]
    setMessages((prev) => ({
      ...prev,
      [activeId]: updatedMessages,
    }))

    // Update conversation preview text
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              previewText: userMsgText.substring(0, 60) + (userMsgText.length > 60 ? '...' : ''),
              updatedAt: new Date(),
            }
          : c
      )
    )

    // Trigger AI mock response
    simulateAIResponse(userMsgText)
  }

  // Simulated AI responses based on prompt keywords
  const simulateAIResponse = (promptText: string) => {
    if (!activeId) return
    setIsGenerating(true)

    const responseTemplate = getMockResponseTemplate(promptText)
    const newAiMsgId = \`msg-ai-\${Date.now()}\`

    // Insert empty streaming assistant bubble
    setMessages((prev) => ({
      ...prev,
      [activeId]: [
        ...(prev[activeId] || []),
        {
          id: newAiMsgId,
          role: 'assistant',
          content: '',
          timestamp: new Date(),
          isStreaming: true,
        },
      ],
    }))

    let currentLength = 0
    const words = responseTemplate.split(' ')
    let currentContent = ''

    const streamNextWord = () => {
      if (currentLength >= words.length) {
        // Complete stream
        setMessages((prev) => {
          const chatMsgs = prev[activeId] || []
          return {
            ...prev,
            [activeId]: chatMsgs.map((m) =>
              m.id === newAiMsgId
                ? { ...m, content: responseTemplate, isStreaming: false }
                : m
            ),
          }
        })
        setIsGenerating(false)
        return
      }

      currentContent += (currentContent ? ' ' : '') + words[currentLength]
      currentLength++

      setMessages((prev) => {
        const chatMsgs = prev[activeId] || []
        return {
          ...prev,
          [activeId]: chatMsgs.map((m) =>
            m.id === newAiMsgId ? { ...m, content: currentContent } : m
          ),
        }
      })

      // Schedule next word
      streamTimeoutRef.current = setTimeout(streamNextWord, 45 + Math.random() * 25)
    }

    // Begin streaming
    streamTimeoutRef.current = setTimeout(streamNextWord, 600)
  }

  const getMockResponseTemplate = (text: string): string => {
    const query = text.toLowerCase()
    if (query.includes('explain code') || query.includes('view transition') || query.includes('framer')) {
      return 'React View Transitions allow snap animations between page elements. By integrating with \`framer-motion\`, you can synchronize the animation timing:\\n\\n\`\`\`javascript\\n// Transition block component hooks\\nimport { motion } from \\'framer-motion\\'\\n\\nexport function TransitionContainer({ children }) {\\n  return (\\n    <motion.div\\n      initial={{ opacity: 0, y: 10 }}\\n      animate={{ opacity: 1, y: 0 }}\\n      exit={{ opacity: 0, y: -10 }}\\n      transition={{ duration: 0.35, ease: \\'easeInOut\\' }}\\n    >\\n      {children}\\n    </motion.div>\\n  )\\n}\\n\`\`\`\\n\\nTo prevent text blurring, avoid active filter properties on the animated container and instead trigger transitions natively on route mounts.'
    }
    
    if (query.includes('analyze layout') || query.includes('ecommerce') || query.includes('grid')) {
      return 'For high-fidelity mobile grids, you should use the following layout rules:\\n\\n1. **2-Column Layout:** Use \`grid-cols-2\` on viewports below \`640px\` instead of single stacking. This lets you display more items above the fold.\\n2. **Paddings and Gaps:** Restrict card padding to \`p-2\` on mobile, and grids gaps to \`gap-3\` to avoid wasted screen area.\\n3. **Typography Scaling:** Shrink title text to \`text-[11px]\` and descriptions to \`text-[9px] line-clamp-1\` to avoid ugly text truncation inside narrow cards.'
    }

    if (query.includes('email') || query.includes('feedback') || query.includes('draft')) {
      return 'Here is a professional draft requesting feedback on your components:\\n\\n> **Subject:** Feedback Requested: Vibe UI Library components release\\n>\\n> Hello team,\\n>\\n> We have just compiled the preview block packages for Vibe UI version \`0.1.12\`. Could you please review the responsive card grids and theme variants inside the docs?\\n>\\n> Best regards,\\n> Vibe Developer Team'
    }

    return 'Hello! I am Vibe Assistant, your coding companion. I am fully built with custom **Vibe UI React components**. How can I help you customize your developer layouts, style configurations, or component code snippets today?'
  }

  // Stop Generation trigger
  const handleStopGeneration = () => {
    if (streamTimeoutRef.current) {
      clearTimeout(streamTimeoutRef.current)
    }
    setIsGenerating(false)
    if (!activeId) return
    setMessages((prev) => {
      const chatMsgs = prev[activeId] || []
      return {
        ...prev,
        [activeId]: chatMsgs.map((m) =>
          m.isStreaming ? { ...m, isStreaming: false, content: m.content + ' [Generation Stopped]' } : m
        ),
      }
    })
  }

  // Regenerate Response trigger
  const handleRegenerateResponse = (msgId: string) => {
    if (!activeId || isGenerating) return
    
    const chatMsgs = messages[activeId] || []
    const targetIdx = chatMsgs.findIndex((m) => m.id === msgId)
    if (targetIdx === -1) return

    // Find the user query just preceding this response
    let userQuery = ''
    for (let i = targetIdx - 1; i >= 0; i--) {
      if (chatMsgs[i].role === 'user') {
        userQuery = chatMsgs[i].content
        break
      }
    }

    // Delete all messages from the target response onwards
    const truncatedMsgs = chatMsgs.slice(0, targetIdx)
    setMessages((prev) => ({
      ...prev,
      [activeId]: truncatedMsgs,
    }))

    // Re-simulate response
    simulateAIResponse(userQuery || 'Hello')
  }

  const activeMessages = activeId ? messages[activeId] || [] : []

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white dark:bg-[#0d0d0d] text-foreground font-sans relative selection:bg-primary/10">
      
      {/* 1. Left Sidebar Navigation Panel */}
      <ChatSidebar
        conversations={conversations}
        activeId={activeId}
        onSelectConversation={handleSelectConversation}
        onNewChat={handleNewChat}
        onRenameChat={handleRenameChat}
        onDeleteChat={handleDeleteChat}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
      />

      {/* 2. Main Conversation Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Header Controls bar */}
        <header className="h-14 flex items-center justify-between px-4 bg-white/85 dark:bg-[#0d0d0d]/85 backdrop-blur-md z-20 shrink-0 select-none">
          <div className="flex items-center gap-2">
            {/* Mobile Sidebar Toggle button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-9 w-9 text-zinc-500 hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg flex"
              aria-label="Open sidebar"
            >
              <PanelLeft className="h-5 w-5" />
            </Button>

            {/* Mobile Show New Chat Button */}
            <Button
              onClick={handleNewChat}
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 text-zinc-500 hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              aria-label="New Chat"
            >
              <SquarePen className="h-5 w-5" />
            </Button>
            
            {/* Model Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-350 hover:text-foreground hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 transition-all font-semibold text-xs sm:text-[14.5px] cursor-pointer focus:outline-none select-none">
                  <div className="flex items-center gap-1.5">
                    {selectedModel === 'Vibe Pro' ? (
                      <Sparkles className="h-4 w-4 text-primary shrink-0 animate-pulse" />
                    ) : (
                      <Bot className="h-4 w-4 text-indigo-500 shrink-0" />
                    )}
                    <span className="hidden sm:inline">{selectedModel}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-zinc-400 shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 border-border bg-card" align="start">
                <DropdownMenuItem
                  onClick={() => setSelectedModel('Vibe Pro')}
                  className="text-xs flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Vibe Pro (Default)</span>
                  </div>
                  {selectedModel === 'Vibe Pro' && <Check className="h-3.5 w-3.5 text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedModel('Vibe Ultra')}
                  className="text-xs flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Bot className="h-3.5 w-3.5 text-indigo-500" />
                    <span>Vibe Ultra</span>
                  </div>
                  {selectedModel === 'Vibe Ultra' && <Check className="h-3.5 w-3.5 text-indigo-500" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex h-8.5 gap-1.5 px-3 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg text-xs font-semibold"
            >
              <Upload className="h-3.5 w-3.5" />
              <span>Share</span>
            </Button>

            {/* Menu options dropdown matching Image 3 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8.5 w-8.5 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
                  aria-label="More options"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 bg-card border-border text-foreground p-1.5 rounded-xl shadow-xl" align="end">
                {/* Share option (visible only on mobile) */}
                <DropdownMenuItem className="sm:hidden text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <Upload className="h-4 w-4 text-zinc-400" />
                  <span>Share</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <Library className="h-4 w-4 text-zinc-400" />
                  <span>View files in chat</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <Pin className="h-4 w-4 text-zinc-400" />
                  <span>Pin chat</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <Archive className="h-4 w-4 text-zinc-400" />
                  <span>Archive</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleClearHistory}
                  className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive rounded-lg font-medium"
                >
                  <Trash className="h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer rounded-lg focus:bg-zinc-100 dark:focus:bg-zinc-800 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <FolderClosed className="h-4 w-4 text-zinc-400" />
                      <span>Move to project</span>
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-44 sm:w-52 bg-card border-border text-foreground p-1.5 rounded-xl shadow-xl" sideOffset={sideOffset}>
                      <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                        <FolderPlus className="h-4 w-4 text-zinc-400" />
                        <span>New project</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                        <FolderClosed className="h-4 w-4 text-zinc-400" />
                        <span>Money take</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                        <FolderClosed className="h-4 w-4 text-zinc-400" />
                        <span>Library for components</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                        <FolderClosed className="h-4 w-4 text-zinc-400" />
                        <span>Renewable Energy</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* 3. Messages log area / Empty Welcome state panel */}
        <div className="flex-1 overflow-hidden relative min-h-0">
          {activeMessages.length === 0 ? (
            <div className="h-full overflow-y-auto">
              <ChatWelcome
                onSelectPrompt={(prompt) => {
                  setInput(prompt)
                  // Auto submit
                  setTimeout(() => {
                    handleSendMessage(prompt, [])
                  }, 150)
                }}
                selectedModel={selectedModel}
              />
            </div>
          ) : (
            <ScrollArea className="h-full w-full">
              <div className="w-full max-w-4xl mx-auto px-4 md:px-6 pb-2">
                <AnimatePresence initial={false}>
                  {activeMessages.map((msg, idx) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx === activeMessages.length - 1 ? 0 : 0.05 }}
                    >
                      <ChatMessageItem
                        message={msg}
                        onRegenerate={msg.role === 'assistant' ? handleRegenerateResponse : undefined}
                        onRateMessage={msg.role === 'assistant' ? handleRateMessage : undefined}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Disclaimer in the scroll flow */}
                <div className="w-full text-center pt-14 pb-2">
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed select-none">
                    Vibe AI can make mistakes. Please verify important design code snapshots, specifications, or parameters.
                  </p>
                </div>

                {/* Scroll anchor */}
                <div ref={messagesEndRef} className="h-0" />
              </div>
            </ScrollArea>
          )}
        </div>

        {/* 4. Chat Composer container at the bottom */}
        <div className="w-full bg-gradient-to-t from-white via-white dark:from-[#0d0d0d] dark:via-[#0d0d0d] to-transparent pt-2 pb-6 shrink-0 z-20 pointer-events-none">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-6 pointer-events-auto">
            <ChatComposer
              input={input}
              setInput={setInput}
              onSend={handleSendMessage}
              isGenerating={isGenerating}
              onStop={handleStopGeneration}
              selectedModel={selectedModel}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
`,
  'components/chat-sidebar.tsx': `'use client'

import React, { useState, useEffect } from 'react'
import {
  SquarePen,
  Library,
  FolderClosed,
  Clock,
  AtSign,
  Code2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bot,
  LogOut,
  Search,
  Check,
  PanelLeft,
  ChevronDown,
  Settings,
  Pin,
  Store,
  CircleHelp,
  UserCircle,
  SlidersHorizontal,
  Crown,
  Upload,
  Trash,
  FolderPlus,
  Pencil,
  Archive,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Tooltip } from '@/components/ui/tooltip'

interface Conversation {
  id: string
  title: string
  model: string
  updatedAt: Date
  previewText?: string
}

interface ChatSidebarProps {
  conversations: Conversation[]
  activeId: string | null
  onSelectConversation: (id: string) => void
  onNewChat: () => void
  onRenameChat: (id: string, newTitle: string) => void
  onDeleteChat: (id: string) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  selectedModel: string
  onSelectModel: (model: string) => void
}

export function ChatSidebar({
  conversations,
  activeId,
  onSelectConversation,
  onNewChat,
  onRenameChat,
  onDeleteChat,
  isCollapsed,
  onToggleCollapse,
  searchQuery,
  setSearchQuery,
  mobileOpen,
  setMobileOpen,
  selectedModel,
  onSelectModel,
}: ChatSidebarProps) {


  const [sideOffset, setSideOffset] = useState(8)

  useEffect(() => {
    const handleResize = () => {
      setSideOffset(window.innerWidth < 640 ? -190 : 8)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const filteredConversations = conversations.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectRecent = (id: string) => {
    onSelectConversation(id)
    setMobileOpen(false)
  }

  // Shared dropdown menu content for profile (reused in expanded & collapsed)
  const profileDropdownItems = (
    <>
      {/* Profile header */}
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarFallback className="bg-blue-600 text-white text-[11px] font-bold">JE</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-zinc-900 dark:text-white">jenish</p>
            <p className="text-[11px] text-zinc-500">Go</p>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
      </div>

      <Separator className="bg-zinc-200 dark:bg-zinc-800 my-1" />

      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <Crown className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Upgrade plan</span>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <SlidersHorizontal className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Personalization</span>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <UserCircle className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <Settings className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Settings</span>
      </DropdownMenuItem>

      <Separator className="bg-zinc-200 dark:bg-zinc-800 my-1" />

      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <CircleHelp className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <span>Help</span>
        </div>
        <ChevronRight className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <LogOut className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Log out</span>
      </DropdownMenuItem>
    </>
  )

  // Expanded sidebar content panel
  const sidebarContent = (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#171717] text-zinc-700 dark:text-zinc-200 select-none border-r border-zinc-200 dark:border-zinc-800/40 text-left">
      {/* Sticky top header (Logo + Search button + Collapse button) */}
      <div className="h-14 flex items-center justify-between px-3 shrink-0 sticky top-0 z-10 bg-zinc-50 dark:bg-[#171717]">
        <div className="flex items-center gap-2 select-none">
          <div className="h-6 w-6 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shrink-0">
            <Sparkles className="h-3.5 w-3.5 fill-white" />
          </div>
          <span className="text-[16px] font-semibold tracking-tight text-zinc-900 dark:text-white">Vibe Chat</span>
        </div>
        <div className="flex items-center gap-0.5">
          <Tooltip content="Search conversations">
            <Button
              variant="ghost"
              size="icon"
              className="h-8.5 w-8.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 rounded-lg cursor-pointer"
            >
              <Search className="h-4.5 w-4.5" />
            </Button>
          </Tooltip>
          {!mobileOpen && (
            <Tooltip content="Close sidebar">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleCollapse}
                className="hidden lg:flex h-8.5 w-8.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 rounded-lg cursor-pointer"
                aria-label="Collapse sidebar"
              >
                <PanelLeft className="h-4.5 w-4.5" />
              </Button>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Scrollable body: nav + recents + profile all scroll together */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="flex flex-col">
          {/* Main navigation list */}
          <div className="px-2.5 space-y-0.5 select-none">
            <button
              onClick={() => {
                onNewChat()
                setMobileOpen(false)
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none"
            >
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <SquarePen className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">New chat</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <Library className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Library</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <FolderClosed className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Projects</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <Clock className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Scheduled</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <AtSign className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Plugins</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <Code2 className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Codex</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <MoreHorizontal className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">More</span>
            </button>
          </div>

          {/* Recents header */}
          <div className="px-3.5 pt-4 pb-1.5 flex items-center justify-between group/recents-header">
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider select-none transition-colors focus:outline-none">
              <span>Recents</span>
              <ChevronDown className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-550 group-hover/recents-header:text-zinc-600 dark:group-hover/recents-header:text-zinc-350 transition-colors" />
            </button>
            
            <div className="flex items-center gap-1.5">
              <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors cursor-pointer focus:outline-none" title="New chat">
                <SquarePen className="h-3.5 w-3.5" />
              </button>
              <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors cursor-pointer focus:outline-none" title="Recents options">
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Recents logs area */}
          <div className="px-2 py-1.5">
            <div className="space-y-px">
              {filteredConversations.map((c) => {
                const isActive = c.id === activeId
                return (
                  <div
                    key={c.id}
                    onClick={() => handleSelectRecent(c.id)}
                    className={\`group w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13.5px] transition-all duration-150 text-left select-none relative cursor-pointer \${
                      isActive
                        ? 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium'
                        : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-150'
                    }\`}
                  >
                    <span className="truncate flex-1 pr-2">{c.title}</span>
                    
                    {/* Trailing actions on hover */}
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors focus:outline-none"
                        title="Pin conversation"
                      >
                        <Pin className="h-3.5 w-3.5" />
                      </button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                            }}
                            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors focus:outline-none cursor-pointer"
                            title="Conversation options"
                          >
                            <MoreHorizontal className="h-3.5 w-3.5" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 sm:w-52 bg-card border-border text-foreground p-1.5 rounded-xl shadow-xl" align="end" side="bottom">
                          {/* Share */}
                          <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                            <Upload className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                            <span>Share</span>
                          </DropdownMenuItem>

                          {/* Rename */}
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              const newTitle = prompt("Rename conversation:", c.title);
                              if (newTitle) onRenameChat(c.id, newTitle);
                            }}
                            className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg"
                          >
                            <Pencil className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                            <span>Rename</span>
                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          {/* Pin */}
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg"
                          >
                            <Pin className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                            <span>Pin chat</span>
                          </DropdownMenuItem>

                          {/* Archive */}
                          <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                            <Archive className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                            <span>Archive</span>
                          </DropdownMenuItem>

                          {/* Delete */}
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm("Delete this conversation?")) onDeleteChat(c.id);
                            }}
                            variant="destructive"
                            className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer rounded-lg font-medium"
                          >
                            <Trash className="h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          {/* Move to project Submenu */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer rounded-lg focus:bg-zinc-100 dark:focus:bg-zinc-800 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800">
                              <div className="flex items-center gap-2.5">
                                <FolderClosed className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                <span>Move to project</span>
                              </div>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="w-44 sm:w-52 bg-card border-border text-foreground p-1.5 rounded-xl shadow-xl" sideOffset={sideOffset}>
                                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                                  <FolderPlus className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                  <span>New project</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                                  <FolderClosed className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                  <span>Money take</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                                  <FolderClosed className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                  <span>Library for components</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                                  <FolderClosed className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                  <span>Renewable Energy</span>
                                </DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Bottom Profile — pinned outside scroll */}
      <div className="p-2 select-none border-t border-zinc-200 dark:border-zinc-800/40 bg-zinc-50 dark:bg-[#171717] shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center justify-between p-1.5 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/30 transition-colors text-left cursor-pointer focus:outline-none">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Avatar className="h-7 w-7 shrink-0">
                  <AvatarFallback className="bg-blue-600 text-white text-[10px] font-bold">JE</AvatarFallback>
                </Avatar>
                <div className="min-w-0 leading-tight">
                  <p className="text-[13px] font-semibold text-zinc-900 dark:text-white truncate">jenish</p>
                  <p className="text-[10px] text-zinc-500 truncate font-normal">Go</p>
                </div>
              </div>
              <Store className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[240px] border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#171717] text-zinc-700 dark:text-zinc-200 p-1.5" side="top" align="start" sideOffset={8}>
            {profileDropdownItems}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )

  // Render collapsible placeholder on desktop, and sheet trigger on mobile
  return (
    <>
      {/* Mobile Drawer (Sheet) */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0 w-64 border-r border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-[#171717]">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Conversations log and settings switcher</SheetDescription>
          </SheetHeader>
          {sidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar — single container, smooth width animation */}
      <div
        className={\`hidden lg:flex h-full shrink-0 bg-zinc-50 dark:bg-[#171717] border-r border-zinc-200 dark:border-zinc-800/40 transition-all duration-300 ease-in-out overflow-hidden \${
          isCollapsed ? 'w-[52px]' : 'w-60'
        }\`}
      >
        {/* Collapsed icon strip */}
        <div
          className={\`flex flex-col items-center justify-between py-3 w-[52px] shrink-0 h-full select-none transition-opacity duration-200 \${
            isCollapsed ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'
          }\`}
        >
          {/* Top icons */}
          <div className="flex flex-col items-center gap-1 w-full">
            <Tooltip content="Open sidebar">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleCollapse}
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <PanelLeft className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="New chat">
              <Button
                variant="ghost"
                size="icon"
                onClick={onNewChat}
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <SquarePen className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="Search">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="Recents">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <Library className="h-5 w-5" />
              </Button>
            </Tooltip>
          </div>

          {/* Bottom profile avatar */}
          <div className="flex items-center justify-center pb-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 active:scale-95 transition-all focus:outline-none rounded-full">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-blue-600 text-white text-[10px] font-bold">JE</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[240px] border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#171717] text-zinc-700 dark:text-zinc-200 p-1.5" side="right" align="end" sideOffset={8}>
                {profileDropdownItems}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Expanded sidebar content */}
        <div
          className={\`h-full w-60 shrink-0 transition-opacity duration-200 \${
            isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }\`}
        >
          {sidebarContent}
        </div>
      </div>
    </>
  )
}
`,
  'components/chat-message-item.tsx': `'use client'

import React, { useState, useEffect } from 'react'
import {
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Sparkles,
  Pencil,
  Download,
  Maximize2,
  Minimize2,
  Store,
  Upload
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Highlight, themes } from 'prism-react-renderer'
import { cn } from '@/lib/utils'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  isStreaming?: boolean
  rating?: 'like' | 'dislike' | null
}

interface ChatMessageItemProps {
  message: Message
  onRegenerate?: (id: string) => void
  onRateMessage?: (id: string, rating: 'like' | 'dislike') => void
}

const mapLanguage = (lang: string): string => {
  const mapped: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    jsx: 'jsx',
    tsx: 'tsx',
    py: 'python',
    rs: 'rust',
    sh: 'bash',
    shell: 'bash',
    yml: 'yaml',
    md: 'markdown',
    html: 'html',
    css: 'css',
    json: 'json',
    sql: 'sql',
    go: 'go',
  }
  return mapped[lang.toLowerCase()] || lang.toLowerCase() || 'text'
}

interface HighlightedCodeBlockProps {
  code: string
  language: string
  index: number
  onCopy: (code: string, index: number) => void
  copiedIndex: number | null
}

function HighlightedCodeBlock({
  code,
  language,
  index,
  onCopy,
  copiedIndex,
}: HighlightedCodeBlockProps) {
  const cleanCode = code.replace(/\\n$/, '')
  const langKey = mapLanguage(language)
  
  return (
    <div className="my-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#0d0d0d] text-zinc-100 overflow-hidden shadow-md text-left font-mono">
      {/* Header bar: dark theme */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-[#1e1e1e] select-none text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
        <span className="uppercase font-bold tracking-wider font-sans">
          {language || 'text'}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCopy(cleanCode, index)}
          className="h-6 px-2.5 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-foreground hover:bg-zinc-200 dark:hover:bg-white/5 gap-1.5 cursor-pointer rounded-md transition-all border-none"
        >
          {copiedIndex === index ? (
            <>
              <Check className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy code</span>
            </>
          )}
        </Button>
      </div>
      
      {/* Code body with styling and line numbers */}
      <div className="relative overflow-x-auto select-text text-[11.5px] sm:text-[13px] leading-relaxed max-w-full bg-[#0d0d0d]">
        <Highlight theme={themes.vsDark} code={cleanCode} language={langKey}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn('p-4 font-mono overflow-x-auto m-0 bg-transparent w-full table', className)}
              style={{ ...style, backgroundColor: 'transparent' }}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className="table-row hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors"
                >
                  {/* Line number column */}
                  <span className="table-cell select-none text-right pr-4 text-[10.5px] sm:text-xs w-8 align-top text-zinc-400/50 dark:text-zinc-650">
                    {i + 1}
                  </span>
                  {/* Content column */}
                  <span className="table-cell align-top whitespace-pre">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export function ChatMessageItem({
  message,
  onRegenerate,
  onRateMessage,
}: ChatMessageItemProps) {
  const [copied, setCopied] = useState(false)
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyCodeToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedCodeIndex(index)
    setTimeout(() => setCopiedCodeIndex(null), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([message.content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = \`response-\${message.id.slice(-4)}.txt\`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // Parse bold **text**, italics *text*, code \`code\`, and links [text](url)
  const parseInlineMarkdown = (text: string) => {
    if (!text) return []
    const tokenRegex = /(\\*\\*.*?\\*\\*|__.*?__|\`.*?\`|\\[.*?\\]\\(.*?\\)|[*_].*?[*_])/g
    const parts = text.split(tokenRegex)
    
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-bold text-zinc-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith('__') && part.endsWith('__')) {
        return (
          <strong key={idx} className="font-bold text-zinc-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith('\`') && part.endsWith('\`')) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800/50 font-mono text-[11px] sm:text-[12px] text-pink-600 dark:text-pink-400 border border-zinc-200 dark:border-zinc-800/40"
          >
            {part.slice(1, -1)}
          </code>
        )
      }
      if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const mid = part.indexOf('](')
        const label = part.slice(1, mid)
        const url = part.slice(mid + 2, -1)
        return (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium break-all"
          >
            {label}
          </a>
        )
      }
      if (
        (part.startsWith('*') && part.endsWith('*')) ||
        (part.startsWith('_') && part.endsWith('_'))
      ) {
        return (
          <em key={idx} className="italic text-zinc-700 dark:text-zinc-300">
            {part.slice(1, -1)}
          </em>
        )
      }
      return part
    })
  }

  // Stateful Markdown-to-React parser that groups list items and handles streaming code blocks
  const renderMessageContent = (content: string) => {
    if (!content) return null

    // Split content by triple backticks, capturing unclosed blocks for streaming
    const parts = content.split(/(\`\`\`[\\s\\S]*?(?:\`\`\`|$))/g)
    let codeBlockIndex = 0

    return parts.map((part, index) => {
      // Check if it's a code block
      if (part.startsWith('\`\`\`')) {
        const isClosed = part.endsWith('\`\`\`')
        const rawCode = isClosed ? part.slice(3, -3) : part.slice(3)
        
        const lines = rawCode.split('\\n')
        const firstLine = (lines[0] || '').trim()
        
        const knownLanguages = [
          'javascript', 'typescript', 'python', 'html', 'css', 'json', 'bash', 
          'rust', 'go', 'sql', 'yaml', 'markdown', 'js', 'ts', 'py', 'rs', 
          'sh', 'yml', 'md', 'cpp', 'c', 'java'
        ]
        
        const isLanguageDeclared = knownLanguages.includes(firstLine.toLowerCase())
        const language = isLanguageDeclared ? firstLine : 'code'
        const codeStartIdx = isLanguageDeclared ? 1 : 0
        const codeString = lines.slice(codeStartIdx).join('\\n')
        const currentCodeIdx = codeBlockIndex++

        return (
          <HighlightedCodeBlock
            key={index}
            code={codeString}
            language={language}
            index={currentCodeIdx}
            onCopy={copyCodeToClipboard}
            copiedIndex={copiedCodeIndex}
          />
        )
      }

      // Stateful parser for regular markdown lines to group lists and paragraphs
      const lines = part.split('\\n')
      const renderedBlocks: React.ReactNode[] = []
      let currentList: { type: 'ul' | 'ol'; items: React.ReactNode[] } | null = null

      const flushList = (key: string) => {
        if (!currentList) return
        const listClass = "list-inside pl-5 my-3 space-y-1.5 text-[12px] sm:text-[14px] leading-relaxed text-zinc-800 dark:text-zinc-200"
        if (currentList.type === 'ul') {
          renderedBlocks.push(
            <ul key={key} className={\`list-disc \${listClass}\`}>
              {currentList.items}
            </ul>
          )
        } else {
          renderedBlocks.push(
            <ol key={key} className={\`list-decimal \${listClass}\`}>
              {currentList.items}
            </ol>
          )
        }
        currentList = null
      }

      lines.forEach((line, lineIdx) => {
        const trimmed = line.trim()

        // 1. Lists: matches "- ", "* ", or "1. "
        const bulletMatch = line.match(/^(\\s*)(?:[-*+]|\\d+\\.)\\s+(.*)/)
        if (bulletMatch) {
          const isNumbered = /^\\d+\\./.test(trimmed)
          const listType = isNumbered ? 'ol' : 'ul'
          const content = bulletMatch[2]

          if (currentList && currentList.type !== listType) {
            flushList(\`list-flush-\${lineIdx}\`)
          }

          if (!currentList) {
            currentList = { type: listType, items: [] }
          }

          currentList.items.push(
            <li key={\`li-\${lineIdx}\`} className="pl-1">
              {parseInlineMarkdown(content)}
            </li>
          )
          return
        }

        // Standard line: flush any pending list
        if (currentList) {
          flushList(\`list-flush-\${lineIdx}\`)
        }

        // 2. Blockquotes: matches ">"
        if (trimmed.startsWith('>')) {
          const content = line.replace(/^\\s*>\\s?/, '')
          renderedBlocks.push(
            <blockquote key={\`quote-\${lineIdx}\`} className="border-l-4 border-zinc-400 dark:border-zinc-700 pl-4 py-1 my-3 text-[12px] sm:text-[13.5px] italic text-zinc-500 bg-zinc-100/50 dark:bg-zinc-800/20 rounded-r-md">
              {parseInlineMarkdown(content)}
            </blockquote>
          )
          return
        }

        // 3. Headings: matches "# Heading"
        const headingMatch = trimmed.match(/^(#{1,6})\\s+(.*)/)
        if (headingMatch) {
          const level = headingMatch[1].length
          const content = headingMatch[2]
          const HeadingTag = \`h\${level}\` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          const headingClasses = [
            'text-xl font-bold mt-5 mb-2.5 text-zinc-900 dark:text-white first:mt-0', // h1
            'text-lg font-bold mt-4.5 mb-2 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1', // h2
            'text-base font-semibold mt-4 mb-1.5 text-zinc-900 dark:text-white', // h3
            'text-sm font-semibold mt-3.5 mb-1 text-zinc-900 dark:text-white', // h4
            'text-xs font-semibold mt-3 mb-1 text-zinc-900 dark:text-white', // h5
            'text-[10px] font-semibold mt-3 mb-1 text-zinc-500 dark:text-zinc-400 uppercase tracking-wider', // h6
          ]
          renderedBlocks.push(
            <HeadingTag key={\`h-\${lineIdx}\`} className={headingClasses[level - 1]}>
              {parseInlineMarkdown(content)}
            </HeadingTag>
          )
          return
        }

        // 4. Paragraph
        if (trimmed) {
          renderedBlocks.push(
            <p key={\`p-\${lineIdx}\`} className="text-[12px] sm:text-[14px] leading-relaxed text-zinc-750 dark:text-zinc-300 my-2 break-words">
              {parseInlineMarkdown(line)}
            </p>
          )
        }
      })

      // Flush list at the end of parts
      if (currentList) {
        flushList(\`list-flush-end-\${index}\`)
      }

      return <React.Fragment key={index}>{renderedBlocks}</React.Fragment>
    })
  }

  const isUser = message.role === 'user'

  if (isUser) {
    // User Message: Styled as a right-aligned ChatGPT-style message bubble
    // Dynamic copy, share, and edit action buttons only display on hover
    return (
      <div className="flex flex-col items-end w-full py-2 group select-none">
        <div className="flex justify-end w-full">
          <div className="relative min-w-0 overflow-hidden rounded-[22px] px-4 py-2.5 leading-6 bg-[#1b72e8] text-white max-w-[70%] text-[13.5px] sm:text-sm text-left break-words select-text font-sans">
            <div className="max-w-full min-w-0 [overflow-wrap:anywhere] whitespace-pre-wrap">
              {message.content}
            </div>
          </div>
        </div>
        
        {/* Bottom hover action buttons */}
        <div className="flex items-center gap-1.5 mt-1 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={copyToClipboard}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-150 cursor-pointer"
            title={copied ? "Copied" : "Copy message"}
          >
            {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
          </button>
          
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
              alert('Copied link to clipboard!')
            }}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-150 cursor-pointer"
            title="Share prompt"
          >
            <Upload className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => {
              const newContent = prompt('Edit message:', message.content)
              if (newContent !== null && newContent.trim() !== '') {
                alert('Successfully edited message to: ' + newContent)
              }
            }}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-150 cursor-pointer"
            title="Edit message"
          >
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }

  // Assistant Message: Styled container block with top actions and bottom feedback row
  return (
    <div className={\`w-full py-2 text-left \${isFullscreen ? 'fixed inset-0 z-50 bg-background p-6 md:p-10 overflow-y-auto' : ''}\`}>
      <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#fafafa] dark:bg-[#2a2a2a] overflow-hidden shadow-xs flex flex-col">
        
        {/* Top Header Bar Inside the Block */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-[#1b1b1b]/50 select-none">
          {/* Left edit trigger */}
          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1 px-2.5 text-xs text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 font-medium"
          >
            <Pencil className="h-3.5 w-3.5" />
            <span>Edit</span>
          </Button>

          {/* Right actions list */}
          <div className="flex items-center gap-1">
            {/* Copy button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="h-7 w-7 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
              title="Copy output text"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            </Button>

            {/* Download button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDownload}
              className="h-7 w-7 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
              title="Download content"
            >
              <Download className="h-3.5 w-3.5" />
            </Button>

            {/* Maximize button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-7 w-7 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
              title={isFullscreen ? "Exit Fullscreen" : "Maximize view"}
            >
              {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </Button>
          </div>
        </div>

        {/* Card Body block content */}
        <div className="p-4 sm:p-5 flex-1 min-h-[60px] text-foreground/90 select-text">
          {renderMessageContent(message.content)}
          
          {/* Animated typing dots overlay */}
          {message.isStreaming && (
            <div className="flex items-center gap-1 py-2 select-none" aria-label="Thinking...">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400 animate-bounce [animation-delay:-0.3s]"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400 animate-bounce [animation-delay:-0.15s]"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400 animate-bounce"></span>
            </div>
          )}
        </div>

        {/* Bottom Feedback Actions Row */}
        {!message.isStreaming && (
          <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/30 dark:bg-[#1b1b1b]/20 select-none">
            <div className="flex items-center gap-1">
              {onRateMessage && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRateMessage(message.id, 'like')}
                    className={\`h-7.5 w-7.5 cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 \${message.rating === 'like' ? 'text-primary' : 'text-zinc-500 hover:text-foreground'}\`}
                    title="Good response"
                  >
                    <ThumbsUp className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRateMessage(message.id, 'dislike')}
                    className={\`h-7.5 w-7.5 cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 \${message.rating === 'dislike' ? 'text-destructive' : 'text-zinc-500 hover:text-foreground'}\`}
                    title="Bad response"
                  >
                    <ThumbsDown className="h-3.5 w-3.5" />
                  </Button>
                </>
              )}
            </div>

            {onRegenerate && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRegenerate(message.id)}
                className="h-7.5 w-7.5 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
                title="Regenerate response"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
`,
  'components/chat-composer.tsx': `'use client'

import React, { useRef, useState, useEffect } from 'react'
import {
  Plus,
  Paperclip,
  Library,
  Image as ImageIcon,
  Globe,
  ShoppingBag,
  Sparkles,
  Search,
  Key,
  Palette,
  Mic,
  Brain,
  ChevronDown,
  ArrowUp,
  LineChart,
  FileText,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'
import { Textarea } from '@/components/ui/textarea'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

const NextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 17V7l10 10V7" />
  </svg>
)

interface AttachedFile {
  id: string
  name: string
  type: 'image' | 'document'
  size: string
  url?: string
}

interface ChatComposerProps {
  input: string
  setInput: (value: string) => void
  onSend: (text: string, attachments: AttachedFile[]) => void
  isGenerating: boolean
  onStop: () => void
  selectedModel: string
}

export function ChatComposer({
  input,
  setInput,
  onSend,
  isGenerating,
  onStop,
  selectedModel,
}: ChatComposerProps) {
  const [attachments, setAttachments] = useState<AttachedFile[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [isThinkActive, setIsThinkActive] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const isExpanded = isFocused || !!input || attachments.length > 0 || isDropdownOpen || isRecording || isThinkActive

  // Synchronize textarea height based on input and expansion states
  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    if (isExpanded) {
      textarea.style.height = 'auto'
      if (input) {
        textarea.style.height = \`\${textarea.scrollHeight}px\`
      }
    } else {
      textarea.style.height = '34px'
    }
  }, [input, isExpanded])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    
    // Custom height resizing
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = \`\${textarea.scrollHeight}px\`
    }
  }

  const handleSend = () => {
    if (!input.trim() && attachments.length === 0) return
    onSend(input, attachments)
    setInput('')
    setAttachments([])
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const newAttachments: AttachedFile[] = Array.from(files).map((file, idx) => {
      const type = file.type.startsWith('image/') ? 'image' : 'document'
      const url = type === 'image' ? URL.createObjectURL(file) : undefined
      const sizeKB = Math.round(file.size / 1024)
      const sizeStr = sizeKB > 1024 ? \`\${(sizeKB / 1024).toFixed(1)} MB\` : \`\${sizeKB} KB\`

      return {
        id: \`attach-\${Date.now()}-\${idx}\`,
        name: file.name,
        type,
        size: sizeStr,
        url,
      }
    })

    setAttachments((prev) => [...prev, ...newAttachments])
    e.target.value = ''
  }

  const removeAttachment = (id: string) => {
    setAttachments((prev) => {
      const target = prev.find((a) => a.id === id)
      if (target?.url) {
        URL.revokeObjectURL(target.url)
      }
      return prev.filter((a) => a.id !== id)
    })
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      setTimeout(() => {
        setInput(input ? input + ' ' + 'Show me a layout preview of a data dashboard component.' : 'Show me a layout preview of a data dashboard component.')
        setIsRecording(false)
      }, 3000)
    }
  }

  const hasContent = input.trim().length > 0 || attachments.length > 0

  return (
    <div
      className={\`w-full bg-[#f4f4f4] dark:bg-[#232323] border border-zinc-200 dark:border-zinc-800 rounded-[24px] transition-all duration-200 ease-in-out text-left shadow-sm relative flex flex-col gap-1 \${
        isExpanded
          ? 'min-h-[92px] pt-2 px-2 pb-[46px]'
          : 'min-h-[46px] py-1.5 px-2'
      }\`}
    >
      
      {/* File Upload Attachment Previews Row */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 px-3 pb-2 border-b border-zinc-200/50 dark:border-zinc-800/50 max-h-40 overflow-y-auto mb-1 select-none">
          {attachments.map((file) => (
            <div
              key={file.id}
              className="relative flex items-center gap-2 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#e4e4e4] dark:bg-zinc-800 group shrink-0"
            >
              {file.type === 'image' ? (
                <div className="h-8 w-8 rounded overflow-hidden bg-muted">
                  <img src={file.url} alt={file.name} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="h-8 w-8 rounded bg-zinc-300 dark:bg-zinc-700 flex items-center justify-center">
                  <FileText className="h-4.5 w-4.5 text-foreground" />
                </div>
              )}
              <div className="text-left max-w-[100px] select-none pr-1">
                <p className="text-[10px] font-medium text-foreground truncate">{file.name}</p>
                <p className="text-[8px] text-zinc-500">{file.size}</p>
              </div>
              <button
                onClick={() => removeAttachment(file.id)}
                className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-[#ececec] dark:bg-zinc-700 hover:bg-destructive rounded-full border border-zinc-200 dark:border-zinc-800 hover:text-white flex items-center justify-center text-[9px] transition-colors cursor-pointer"
                aria-label="Remove attachment"
              >
                <X className="h-2.5 w-2.5 text-zinc-300" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Textarea Area */}
      <div className="w-full">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ask anything"
          autoResize={isExpanded}
          variant="bottom"
          className={\`w-full border-0 border-b-0 focus-visible:border-b-0 focus-visible:ring-0 focus-visible:border-transparent bg-transparent text-[15px] text-foreground placeholder-zinc-500 dark:placeholder-zinc-400 resize-none outline-none align-middle shadow-none focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-transparent focus:ring-0 transition-all duration-200 ease-in-out \${
            isExpanded
              ? '!overflow-y-auto !min-h-[38px] !max-h-[200px] pl-3 pr-3 !pt-2 !pb-1'
              : 'overflow-hidden pl-11 pr-[90px] sm:pr-[170px]'
          }\`}
          style={
            isExpanded
              ? {}
              : {
                  paddingTop: '8px',
                  paddingBottom: '6px',
                  minHeight: '34px',
                  height: '34px',
                }
          }
        />
      </div>

      {/* Left actions: Plus button */}
      <div className="absolute left-3 bottom-[6px] z-10">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8.5 w-8.5 rounded-full bg-[#e4e4e4] hover:bg-[#d8d8d8] dark:bg-[#2f2f2f] dark:hover:bg-[#3f3f3f] text-zinc-700 dark:text-zinc-200 cursor-pointer shrink-0 flex items-center justify-center shadow-xs"
              aria-label="More plugins"
            >
              <Plus className="h-5 w-5 stroke-[2.5]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[320px] bg-white dark:bg-[#171717] border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-200 p-2 rounded-2xl shadow-xl z-50 max-h-[420px] overflow-y-auto" 
            align="start"
            alignOffset={0}
            sideOffset={8}
          >
            <DropdownMenuItem onClick={() => { triggerFileUpload(); setIsDropdownOpen(false); }} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <Paperclip className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Add photos & files</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Upload from computer</span>
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <Library className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Add from library</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Browse and search your files</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <ImageIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Create image</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Visualize anything</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-805/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <Globe className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Web search</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Find real-time news and info</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <ShoppingBag className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Shopping</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Find products you'll love</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <Sparkles className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Deep research</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Get a detailed report</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <Palette className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Canva</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Create, review, edit designs</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <Key className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">OpenAI Platform</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Manage OpenAI API keys</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
              <LineChart className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
              <div className="flex items-baseline gap-2.5 truncate">
                <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Visualize</span>
                <span className="text-[11px] text-zinc-500 font-normal truncate">Create visualizations and tools</span>
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-zinc-200 dark:bg-zinc-800/60 my-1.5" />
            <div className="px-3.5 py-2.5 flex items-center justify-between text-[12px] text-zinc-500 font-semibold cursor-default">
              <span>Type to search plugins, files...</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
      </div>

      {/* Right actions: Think + Mic + Send */}
      <div className="absolute right-3 bottom-[6px] z-10 flex items-center gap-2">
        {/* Think toggle button */}
        <Button
          onClick={() => setIsThinkActive(!isThinkActive)}
          variant="ghost"
          className={\`hidden sm:flex h-8.5 px-3 rounded-full text-xs font-semibold gap-1.5 transition-all cursor-pointer select-none border-0 \${
            isThinkActive
              ? 'bg-zinc-350 text-[#171717] dark:bg-zinc-700 dark:text-white'
              : 'bg-[#e4e4e4] hover:bg-[#d8d8d8] text-zinc-750 dark:bg-[#2f2f2f] dark:hover:bg-[#3f3f3f] dark:text-zinc-200'
          }\`}
        >
          <Brain className="h-3.5 w-3.5" />
          <span>Think</span>
        </Button>

        {/* Voice microphone button */}
        <Tooltip content={isRecording ? 'Listening...' : 'Use voice input'}>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleRecording}
            className={\`h-8.5 w-8.5 rounded-full cursor-pointer shrink-0 transition-colors \${
              isRecording
                ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30 animate-pulse'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-[#303030]'
            }\`}
            aria-label="Voice input"
          >
            <Mic className="h-4.5 w-4.5" />
          </Button>
        </Tooltip>

        {/* Circular Send Button */}
        {isGenerating ? (
          <Button
            variant="default"
            size="icon"
            onClick={onStop}
            className="h-8.5 w-8.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:opacity-85 transition-opacity cursor-pointer shrink-0 flex items-center justify-center shadow-xs"
            aria-label="Stop generation"
          >
            <Plus className="h-4 w-4 rotate-45 stroke-[2.5]" />
          </Button>
        ) : (
          <Button
            variant="default"
            size="icon"
            onClick={handleSend}
            disabled={!hasContent}
            className={\`h-8.5 w-8.5 rounded-full cursor-pointer shrink-0 flex items-center justify-center transition-opacity shadow-xs border-0 \${
              hasContent
                ? 'bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white'
                : 'bg-[#e4e4e4] text-zinc-400 dark:bg-[#2f2f2f] dark:text-zinc-600 cursor-not-allowed'
            }\`}
            aria-label="Send message"
          >
            <ArrowUp className="h-4.5 w-4.5 stroke-[2.5]" />
          </Button>
        )}
      </div>

    </div>
  )
}
`,
  'components/chat-welcome.tsx': `'use client'

import React from 'react'
import {
  Code,
  FileText,
  Lightbulb,
  Compass,
  ArrowUpRight
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Bot } from 'lucide-react'

interface SuggestedPrompt {
  title: string
  prompt: string
  desc: string
  icon: any
}

interface ChatWelcomeProps {
  onSelectPrompt: (prompt: string) => void
  selectedModel: string
}

export function ChatWelcome({ onSelectPrompt, selectedModel }: ChatWelcomeProps) {
  const prompts: SuggestedPrompt[] = [
    {
      title: 'Explain code',
      prompt: 'Explain how React view transitions work with framer-motion.',
      desc: 'Understand rendering hooks and transitions',
      icon: Code,
    },
    {
      title: 'Analyze layout',
      prompt: 'Review the responsive rules for a 2-column e-commerce grid.',
      desc: 'Check viewport sizes and padding rules',
      icon: Compass,
    },
    {
      title: 'Draft message',
      prompt: 'Draft an email requesting feedback on a new React component library release.',
      desc: 'Friendly update asking for design input',
      icon: FileText,
    },
    {
      title: 'Brainstorm layouts',
      prompt: 'Brainstorm creative navigation menu ideas for a developer blog site.',
      desc: 'Aesthetics suggestions using glassmorphism',
      icon: Lightbulb,
    },
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto px-4 py-16 text-center select-none">
      
      {/* Centered ChatGPT-style logo symbol */}
      <div className="mb-6 select-none">
        <div className="h-12 w-12 rounded-full border border-border bg-[#f4f4f4] dark:bg-[#2f2f2f] flex items-center justify-center text-foreground shadow-xs animate-pulse">
          <Bot className="h-7 w-7 text-zinc-800 dark:text-zinc-200" />
        </div>
      </div>

      {/* Main welcoming header */}
      <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
        How can Vibe UI help you today?
      </h2>

      {/* Suggestion Prompt Cards Grid */}
      <div className="grid grid-cols-2 gap-2.5 w-full mt-10">
        {prompts.map((p) => {
          const Icon = p.icon
          return (
            <Card
              key={p.title}
              onClick={() => onSelectPrompt(p.prompt)}
              className="group text-left border border-zinc-200 dark:border-zinc-800 bg-[#f9f9f9]/30 dark:bg-[#171717]/20 hover:bg-[#f4f4f4] dark:hover:bg-[#2f2f2f] transition-all duration-200 cursor-pointer shadow-xs rounded-[16px] p-2.5 sm:p-4 flex items-center justify-between"
            >
              <div className="space-y-0.5 flex-1 pr-2 sm:pr-4 min-w-0">
                <span className="block text-[12px] sm:text-xs font-semibold text-foreground truncate">
                  {p.title}
                </span>
                <span className="block text-[9.5px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                  {p.desc}
                </span>
              </div>
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center shrink-0 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors" />
              </div>
            </Card>
          )
        })}
      </div>

    </div>
  )
}
`,
}

export const auth01Code = {
  'app/auth/page.tsx': `'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { LoginForm } from './components/login-form'
import { RegisterForm } from './components/register-form'
import { ForgotPasswordForm } from './components/forgot-password-form'
import { ResetPasswordForm } from './components/reset-password-form'

export default function AuthPage() {
  const [view, setView] = useState<'login' | 'register' | 'forgot-password' | 'reset-password'>('login')

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center py-16 px-6 bg-background text-foreground overflow-hidden font-sans">
      {/* Premium background mesh and glowing radial orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.09)_0%,transparent_70%)] blur-[80px] sm:blur-[120px] pointer-events-none" />
      {/* Dotted Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25] bg-[radial-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Animated Form Container */}
      <div className="w-full max-w-md flex justify-center relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full flex justify-center"
          >
            {view === 'login' && <LoginForm onViewChange={setView} />}
            {view === 'register' && <RegisterForm onViewChange={setView} />}
            {view === 'forgot-password' && <ForgotPasswordForm onViewChange={setView} />}
            {view === 'reset-password' && <ResetPasswordForm onViewChange={setView} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
`,
  'app/auth/components/login-form.tsx': `'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  rememberMe: z.boolean().default(false),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm({ onViewChange }: { onViewChange: any }) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
  })

  function onSubmit(values: LoginValues) {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("Login Success: " + values.email)
    }, 1000)
  }

  return (
    <Card className="border-zinc-200 dark:border-zinc-800 shadow-xl bg-card/70 backdrop-blur-md w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
        <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="••••••••" type={showPassword ? 'text' : 'password'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>Sign In</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
`,
  'app/auth/components/register-form.tsx': `'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
})

type RegisterValues = z.infer<typeof registerSchema>

export function RegisterForm({ onViewChange }: { onViewChange: any }) {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', acceptTerms: false },
  })

  function onSubmit(values: RegisterValues) {
    alert("Register Success: " + values.email)
  }

  return (
    <Card className="border-zinc-200 dark:border-zinc-800 shadow-xl bg-card/70 backdrop-blur-md w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Create account</CardTitle>
        <CardDescription className="text-center font-light">Create a free account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Registration form markup */}
      </CardContent>
    </Card>
  )
}
`,
  'app/auth/components/forgot-password-form.tsx': `'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
})

export function ForgotPasswordForm({ onViewChange }: { onViewChange: any }) {
  return (
    <Card className="border-zinc-200 dark:border-zinc-850 bg-card w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Recovery form markup */}
      </CardContent>
    </Card>
  )
}
`,
  'app/auth/components/reset-password-form.tsx': `'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function ResetPasswordForm({ onViewChange }: { onViewChange: any }) {
  return (
    <Card className="border-zinc-200 dark:border-zinc-855 bg-card w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Reset form markup */}
      </CardContent>
    </Card>
  )
}
`,
}

export const cryptoGlass01Code = {
  'app/crypto-dashboard/page.tsx': `'use client'

import React, { useState } from 'react'
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  ArrowUpDown,
  Settings,
  Bell,
  Search,
  ChevronRight,
  Info,
  Layers,
  Percent,
  CheckCircle2,
  Activity,
  ArrowDown,
  RefreshCw,
  Gauge,
  ShieldCheck,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

interface CoinData {
  name: string
  symbol: string
  price: string
  change: string
  isPositive: boolean
  holdings: string
  value: string
  color: string
}

const COINS: CoinData[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$64,281.50',
    change: '+2.4%',
    isPositive: true,
    holdings: '0.24 BTC',
    value: '$15,427.56',
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$3,450.20',
    change: '+4.1%',
    isPositive: true,
    holdings: '2.15 ETH',
    value: '$7,417.93',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: '$142.80',
    change: '-1.2%',
    isPositive: false,
    holdings: '12.4 SOL',
    value: '$1,770.72',
    color: 'from-cyan-450 to-emerald-450'
  }
]

interface StakingPool {
  token: string;
  apr: string;
  staked: string;
  rewards: string;
  period: string;
}

const STAKING_POOLS: StakingPool[] = [
  { token: 'SOL Liquid Staking', apr: '7.8% APR', staked: '45.2 SOL', rewards: '+2.14 SOL', period: 'Flexible' },
  { token: 'ETH Validator Pool', apr: '5.2% APR', staked: '1.5 ETH', rewards: '+0.038 ETH', period: '30 Days Lock' },
  { token: 'USDC High-Yield', apr: '9.4% APR', staked: '500.0 USDC', rewards: '+12.45 USDC', period: 'Flexible' }
]

export default function CryptoGlass01Page() {
  const [activeTab, setActiveTab] = useState<'all' | 'gainers' | 'losers'>('all')
  const [stakingTab, setStakingTab] = useState<'pools' | 'calculator'>('pools')
  const [sidebarActive, setSidebarActive] = useState('Dashboard')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [swapFrom, setSwapFrom] = useState('ETH')
  const [swapTo, setSwapTo] = useState('USDC')
  const [swapAmount, setSwapAmount] = useState('1.5')
  const [isSwapping, setIsSwapping] = useState(false)
  const [swapSuccess, setSwapSuccess] = useState(false)
  const [calcAmount, setCalcAmount] = useState('1000')
  const [calcPeriod, setCalcPeriod] = useState('365')
  const [rpcNode, setRpcNode] = useState('solana-mainnet')
  const [gasThreshold, setGasThreshold] = useState(30)
  const [autoCompound, setAutoCompound] = useState(true)

  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Staking Rewards Deposited', desc: 'Successfully claimed +2.14 SOL reward.', time: '5m ago', unread: true },
    { id: '2', title: 'Solana Price Alert', desc: 'SOL price moved past resistance of $142.00.', time: '1h ago', unread: true }
  ])

  const notificationContainerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!showNotifications) return
    function handleDocumentClick(e: MouseEvent) {
      if (
        notificationContainerRef.current && 
        !notificationContainerRef.current.contains(e.target as Node)
      ) {
        setShowNotifications(false)
      }
    }
    const timer = setTimeout(() => {
      document.addEventListener('click', handleDocumentClick)
    }, 0)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [showNotifications])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', \`\${x}px\`)
    card.style.setProperty('--mouse-y', \`\${y}px\`)
  }

  const getSwapOutput = () => {
    const amt = parseFloat(swapAmount) || 0
    if (swapFrom === 'ETH' && swapTo === 'USDC') return (amt * 3450.2).toFixed(2)
    return (amt * 1.01).toFixed(2)
  }

  const handleSwapExecute = () => {
    setIsSwapping(true)
    setTimeout(() => {
      setIsSwapping(false)
      setSwapSuccess(true)
    }, 1500)
  }

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <div className="relative w-full min-h-screen bg-slate-50 dark:bg-[#090b11] text-slate-900 dark:text-slate-100 font-sans flex flex-col transition-colors duration-300">
      {/* Sidebar */}
      <aside className={\`fixed inset-y-0 left-0 w-64 border-r border-slate-200/60 dark:border-white/10 bg-slate-100/40 dark:bg-white/[0.02] backdrop-blur-xl p-6 flex flex-col justify-between z-30 transition-all duration-300 \\\${mobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}\`}>
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Wallet className="size-5" />
            <h2 className="text-sm font-bold">VIBE SYSTEM</h2>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col relative z-10 lg:pl-64 w-full">
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200/60 dark:border-white/10 relative z-20">
          <h1 className="text-sm font-bold">VIBE CRYPTO</h1>
          <div className="flex gap-2 relative" ref={notificationContainerRef}>
            <div className="relative inline-block">
              <Button variant="liquid-glass" size="icon" onClick={() => setShowNotifications(!showNotifications)}>
                <Bell className="size-4" />
              </Button>
              {unreadCount > 0 && <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-sky-500 border border-[#090b11] text-[9px] font-extrabold text-white flex items-center justify-center animate-bounce z-10 pointer-events-none">{unreadCount}</span>}
            </div>
            <Button variant="liquid-glass" size="icon" onClick={() => setShowSettings(!showSettings)}>
              <Settings className="size-4" />
            </Button>
          </div>
        </header>

        {showSettings && (
          <div onClick={() => setShowSettings(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <Card onClick={(e) => e.stopPropagation()} variant="glass" className="w-full max-w-md p-6 relative">
              <h3 className="text-sm font-bold">Workspace Settings</h3>
              <div className="space-y-4 py-2">
                <Switch checked={autoCompound} onCheckedChange={setAutoCompound} />
              </div>
            </Card>
          </div>
        )}

        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card variant="glass" onMouseMove={handleMouseMove} className="p-6 relative overflow-hidden group">
                <h2 className="text-3xl font-extrabold">$24,616.21</h2>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
`
}
