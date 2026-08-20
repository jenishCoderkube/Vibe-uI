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
                            <p className="text-[10px] text-muted-foreground">\$299.00</p>
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
                <span>Shop Now — \$299</span>
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
                      <span className="text-xs text-muted-foreground line-through">\$399.00</span>
                      <Badge variant="destructive" className="text-[9px] font-extrabold px-1.5 py-0.2 rounded">
                        -25%
                      </Badge>
                    </div>
                    <span className="text-2xl font-black text-foreground">\$299.00</span>
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
}
`,
}
