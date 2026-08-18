'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Select,
  SelectTrigger,
  SelectValue,
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
  X,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer'
import { Uploader } from '@/components/ui/uploader'
import { AppSidebar } from './components/app-sidebar'
import { ChartAreaInteractive } from './components/chart-area-interactive'
import { ChartAnalytics } from './components/chart-analytics'
import { TeamDirectory } from './components/team-directory'
import { ProjectsDirectory } from './components/projects-directory'
import { LifecycleDirectory } from './components/lifecycle-directory'
import { ProfileDirectory } from './components/profile-directory'
import { DataTable } from './components/data-table'
import { DataTableAnalytics } from './components/data-table-analytics'
import { cn } from '@/lib/utils'

const SearchIcon = Search as any
const FileIcon = File as any
const PlusCircleIcon = PlusCircle as any

export default function Dashboard01Page() {
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [timeFilter, setTimeFilter] = useState('24h')
  const [teamFilter, setTeamFilter] = useState('all')

  const [productList, setProductList] = useState([
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
  ])

  // Form states for adding new product
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [newProductName, setNewProductName] = useState('')
  const [newSectionType, setNewSectionType] = useState('UI Component')
  const [newStatus, setNewStatus] = useState('Done')
  const [newProgress, setNewProgress] = useState('')
  const [newVersion, setNewVersion] = useState('')
  const [newReviewer, setNewReviewer] = useState('Assign reviewer')
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])

  const filtered = productList.filter((t) => {
    const matchesSearch =
      t.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.reviewer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleSave = () => {
    if (
      !newProductName ||
      !newSectionType ||
      !newStatus ||
      !newProgress ||
      !newVersion ||
      !newReviewer
    ) {
      alert('Please fill out all product fields before saving.')
      return
    }

    const newProduct = {
      header: newProductName,
      type: newSectionType,
      status: newStatus,
      target: newProgress,
      limit: newVersion,
      reviewer: newReviewer,
    }

    setProductList((prev) => [newProduct, ...prev])

    // Reset Form fields
    setNewProductName('')
    setNewSectionType('UI Component')
    setNewStatus('Done')
    setNewProgress('')
    setNewVersion('')
    setNewReviewer('Assign reviewer')
    setUploadedFiles([])

    setIsDrawerOpen(false)
  }

  // Define effective tab value to display content
  const viewMode =
    activeTab === 'Analytics'
      ? 'Analytics'
      : activeTab === 'Team'
        ? 'Team'
        : activeTab === 'Projects'
          ? 'Projects'
          : activeTab === 'Lifecycle'
            ? 'Lifecycle'
            : activeTab === 'Profile'
              ? 'Profile'
              : 'Dashboard'

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '16rem',
          '--sidebar-width-icon': '4.5rem',
        } as React.CSSProperties
      }
    >
      <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SidebarInset className="bg-background text-foreground flex flex-col min-h-screen">
        <header className="flex h-12 shrink-0 items-center gap-2 px-4 border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-20 justify-between">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="h-8 w-8 text-foreground" />
            <span className="text-xs text-muted-foreground font-medium hidden sm:block">
              Building Blocks / dashboard-01 / {viewMode.toLowerCase()}
            </span>
          </div>
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <div className="relative w-28 sm:w-40">
              <SearchIcon className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder={
                  viewMode === 'Analytics'
                    ? 'Search metrics...'
                    : viewMode === 'Team'
                      ? 'Search members...'
                      : viewMode === 'Projects'
                        ? 'Search projects...'
                        : viewMode === 'Lifecycle'
                          ? 'Search releases...'
                          : viewMode === 'Profile'
                            ? 'Search settings...'
                            : 'Search docs...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-8 text-[11px] bg-muted/50 border-border text-foreground placeholder-muted-foreground"
              />
            </div>
            {viewMode === 'Dashboard' && (
              <div className="w-24 sm:w-32">
                <Select
                  value={statusFilter}
                  onValueChange={(val) => setStatusFilter(val)}
                >
                  <SelectTrigger className="h-8 text-[11px] bg-muted/50 border-border text-foreground font-sans py-0 px-2">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="w-24 sm:w-32 text-xs">
                    <SelectItem value="all" className="text-[11px] py-1.5 pl-8">
                      All
                    </SelectItem>
                    <SelectItem
                      value="Done"
                      className="text-[11px] py-1.5 pl-8"
                    >
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
            )}
            {viewMode === 'Analytics' && (
              <div className="w-24 sm:w-32">
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="h-8 text-[11px] bg-muted/50 border-border text-foreground font-sans py-0 px-2">
                    <SelectValue placeholder="24 Hours" />
                  </SelectTrigger>
                  <SelectContent className="w-24 sm:w-32 text-xs">
                    <SelectItem value="24h" className="text-[11px] py-1.5 pl-8">
                      24 Hours
                    </SelectItem>
                    <SelectItem value="7d" className="text-[11px] py-1.5 pl-8">
                      7 Days
                    </SelectItem>
                    <SelectItem value="30d" className="text-[11px] py-1.5 pl-8">
                      30 Days
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {viewMode === 'Team' && (
              <div className="w-24 sm:w-32">
                <Select value={teamFilter} onValueChange={setTeamFilter}>
                  <SelectTrigger className="h-8 text-[11px] bg-muted/50 border-border text-foreground font-sans py-0 px-2">
                    <SelectValue placeholder="All Members" />
                  </SelectTrigger>
                  <SelectContent className="w-24 sm:w-32 text-xs">
                    <SelectItem value="all" className="text-[11px] py-1.5 pl-8">
                      All Members
                    </SelectItem>
                    <SelectItem
                      value="Online"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Online
                    </SelectItem>
                    <SelectItem
                      value="Offline"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Offline
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {viewMode === 'Projects' && (
              <div className="w-24 sm:w-32">
                <Select
                  value={statusFilter}
                  onValueChange={(val) => setStatusFilter(val)}
                >
                  <SelectTrigger className="h-8 text-[11px] bg-muted/50 border-border text-foreground font-sans py-0 px-2">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent className="w-24 sm:w-32 text-xs">
                    <SelectItem value="all" className="text-[11px] py-1.5 pl-8">
                      All Statuses
                    </SelectItem>
                    <SelectItem
                      value="Healthy"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Healthy
                    </SelectItem>
                    <SelectItem
                      value="Building"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Building
                    </SelectItem>
                    <SelectItem
                      value="Needs Attention"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Needs Attention
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {viewMode === 'Lifecycle' && (
              <div className="w-24 sm:w-32">
                <Select
                  value={statusFilter}
                  onValueChange={(val) => setStatusFilter(val)}
                >
                  <SelectTrigger className="h-8 text-[11px] bg-muted/50 border-border text-foreground font-sans py-0 px-2">
                    <SelectValue placeholder="All Channels" />
                  </SelectTrigger>
                  <SelectContent className="w-24 sm:w-32 text-xs">
                    <SelectItem value="all" className="text-[11px] py-1.5 pl-8">
                      All Channels
                    </SelectItem>
                    <SelectItem
                      value="Stable"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Stable
                    </SelectItem>
                    <SelectItem
                      value="Beta"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Beta
                    </SelectItem>
                    <SelectItem
                      value="Alpha"
                      className="text-[11px] py-1.5 pl-8"
                    >
                      Alpha
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
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
                className="w-56 bg-background border-border text-foreground"
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
        </header>
        <main className="p-4 md:p-6 space-y-6 overflow-y-auto flex-1">
          {viewMode === 'Dashboard' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                <Card className="bg-muted/40 border-border p-4 space-y-2">
                  <span className="text-xs text-muted-foreground font-medium block">
                    Total Revenue
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black">$1,250.00</span>
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
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
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
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
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
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
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
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
                      className={cn(
                        'px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all',
                        statusFilter === status
                          ? 'bg-background text-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
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
                    className="h-8 text-xs bg-muted border-border text-muted-foreground hover:text-foreground px-3 flex items-center gap-1.5 cursor-pointer flex-1 sm:flex-none justify-center"
                  >
                    <FileIcon className="h-3.5 w-3.5" />
                    <span>Export</span>
                  </Button>
                  <Button
                    className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90 px-3 flex items-center gap-1.5 cursor-pointer flex-1 sm:flex-none justify-center"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    <PlusCircleIcon className="h-3.5 w-3.5" />
                    <span>Add Product</span>
                  </Button>
                </div>
              </div>

              {/* Relational Data Table */}
              <DataTable transactions={filtered} />
            </>
          )}

          {viewMode === 'Analytics' && (
            <>
              {/* Analytics relative stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                <Card className="bg-muted/40 border-border p-4 space-y-2">
                  <span className="text-xs text-muted-foreground font-medium block">
                    Total Page Views
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black">245,892</span>
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
                      +8.2%
                    </Badge>
                  </div>
                  <span className="text-[10px] text-muted-foreground block">
                    Trending up this period
                  </span>
                </Card>
                <Card className="bg-muted/40 border-border p-4 space-y-2">
                  <span className="text-xs text-muted-foreground font-medium block">
                    Unique Visitors
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black">142,384</span>
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
                      +12.4%
                    </Badge>
                  </div>
                  <span className="text-[10px] text-muted-foreground block">
                    Strong organic search traffic
                  </span>
                </Card>
                <Card className="bg-muted/40 border-border p-4 space-y-2">
                  <span className="text-xs text-muted-foreground font-medium block">
                    Avg. Session Duration
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black">2m 45s</span>
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
                      -1.2%
                    </Badge>
                  </div>
                  <span className="text-[10px] text-muted-foreground block">
                    Average duration per visit
                  </span>
                </Card>
                <Card className="bg-muted/40 border-border p-4 space-y-2">
                  <span className="text-xs text-muted-foreground font-medium block">
                    Bounce Rate
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black">42.5%</span>
                    <Badge
                      variant="secondary"
                      className="border border-border/40 py-0.5 px-1.5 text-[9px] font-medium"
                    >
                      -5.4%
                    </Badge>
                  </div>
                  <span className="text-[10px] text-muted-foreground block">
                    Steady session retention
                  </span>
                </Card>
              </div>

              {/* Analytics interactive charts */}
              <ChartAnalytics />

              {/* Analytics time filter tabs & action buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                <div className="flex bg-muted/60 rounded-lg p-0.5 border border-border/80 self-start sm:self-auto">
                  {(['24h', '7d', '30d'] as const).map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeFilter(time)}
                      className={cn(
                        'px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all',
                        timeFilter === time
                          ? 'bg-background text-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                    >
                      {time === '24h'
                        ? '24 Hours'
                        : time === '7d'
                          ? '7 Days'
                          : '30 Days'}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <Button
                    variant="outline"
                    className="h-8 text-xs bg-muted border-border text-muted-foreground hover:text-foreground px-3 flex items-center gap-1.5 cursor-pointer flex-1 sm:flex-none justify-center"
                  >
                    <FileIcon className="h-3.5 w-3.5" />
                    <span>Export Report</span>
                  </Button>
                </div>
              </div>

              {/* Analytics sessions breakdown table */}
              <DataTableAnalytics />
            </>
          )}

          {viewMode === 'Team' && (
            <TeamDirectory searchQuery={searchQuery} teamFilter={teamFilter} />
          )}

          {viewMode === 'Projects' && (
            <ProjectsDirectory
              searchQuery={searchQuery}
              statusFilter={statusFilter}
            />
          )}

          {viewMode === 'Lifecycle' && (
            <LifecycleDirectory
              searchQuery={searchQuery}
              channelFilter={statusFilter}
            />
          )}

          {viewMode === 'Profile' && <ProfileDirectory />}
        </main>
      </SidebarInset>

      {/* Right side Drawer for Adding Products */}
      <Drawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        direction="right"
      >
        <DrawerContent className="h-full flex flex-col justify-between w-full sm:max-w-sm border-l border-border bg-background">
          <div className="flex flex-col flex-1 overflow-hidden">
            <DrawerHeader className="border-b border-border/40 pb-4 shrink-0 relative text-left">
              <DrawerTitle className="text-sm font-bold text-foreground">
                Add New Product
              </DrawerTitle>
              <DrawerDescription className="text-[11px] text-muted-foreground">
                Fill in the product details and save it to add it to the table
                list.
              </DrawerDescription>
              <DrawerClose asChild>
                <Button
                  variant="ghost"
                  className="absolute right-4 top-4 h-6 w-6 p-0 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <div className="p-4 space-y-4 overflow-y-auto flex-1 text-left">
              {/* Product Image Uploader first */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold tracking-tight text-foreground block">
                  Product Image
                </span>
                <Uploader
                  accept={['image/*']}
                  maxSizeMB={2}
                  files={uploadedFiles}
                  onFilesSelected={(selected) => {
                    setUploadedFiles(
                      selected.map((f) => ({
                        id: Math.random().toString(36).substring(7),
                        name: f.name,
                        size: f.size,
                        type: f.type,
                        progress: 100,
                        status: 'completed',
                      })),
                    )
                  }}
                  onFileRemoved={() => setUploadedFiles([])}
                />
              </div>

              {/* Product Name (Header) */}
              <div className="space-y-1">
                <label
                  htmlFor="product-name"
                  className="text-[11px] font-bold text-foreground block"
                >
                  Product Name (Header)
                </label>
                <Input
                  id="product-name"
                  placeholder="e.g., Button Component Docs"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  className="h-8 text-xs bg-muted/40 border-border text-foreground"
                />
              </div>

              {/* Section Type */}
              <div className="space-y-1">
                <label
                  htmlFor="section-type"
                  className="text-[11px] font-bold text-foreground block"
                >
                  Section Type
                </label>
                <Select
                  value={newSectionType}
                  onValueChange={setNewSectionType}
                >
                  <SelectTrigger
                    id="section-type"
                    className="h-8 text-xs bg-muted/40 border-border text-foreground font-sans"
                  >
                    <SelectValue placeholder="Select type..." />
                  </SelectTrigger>
                  <SelectContent className="text-xs bg-card border-border">
                    <SelectItem value="UI Component">UI Component</SelectItem>
                    <SelectItem value="Layout Primitive">
                      Layout Primitive
                    </SelectItem>
                    <SelectItem value="Doc Utility">Doc Utility</SelectItem>
                    <SelectItem value="Navigation">Navigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status */}
              <div className="space-y-1">
                <label
                  htmlFor="product-status"
                  className="text-[11px] font-bold text-foreground block"
                >
                  Status
                </label>
                <Select value={newStatus} onValueChange={setNewStatus}>
                  <SelectTrigger
                    id="product-status"
                    className="h-8 text-xs bg-muted/40 border-border text-foreground font-sans"
                  >
                    <SelectValue placeholder="Select status..." />
                  </SelectTrigger>
                  <SelectContent className="text-xs bg-card border-border">
                    <SelectItem value="Done">Released</SelectItem>
                    <SelectItem value="In Progress">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Progress */}
              <div className="space-y-1">
                <label
                  htmlFor="product-progress"
                  className="text-[11px] font-bold text-foreground block"
                >
                  Progress (Value)
                </label>
                <Input
                  id="product-progress"
                  placeholder="e.g., 100%"
                  value={newProgress}
                  onChange={(e) => setNewProgress(e.target.value)}
                  className="h-8 text-xs bg-muted/40 border-border text-foreground"
                />
              </div>

              {/* Version */}
              <div className="space-y-1">
                <label
                  htmlFor="product-version"
                  className="text-[11px] font-bold text-foreground block"
                >
                  Version (User)
                </label>
                <Input
                  id="product-version"
                  placeholder="e.g., v1.0.0"
                  value={newVersion}
                  onChange={(e) => setNewVersion(e.target.value)}
                  className="h-8 text-xs bg-muted/40 border-border text-foreground"
                />
              </div>

              {/* Reviewer */}
              <div className="space-y-1">
                <label
                  htmlFor="product-reviewer"
                  className="text-[11px] font-bold text-foreground block"
                >
                  Reviewer (Date)
                </label>
                <Select value={newReviewer} onValueChange={setNewReviewer}>
                  <SelectTrigger
                    id="product-reviewer"
                    className="h-8 text-xs bg-muted/40 border-border text-foreground font-sans"
                  >
                    <SelectValue placeholder="Select reviewer..." />
                  </SelectTrigger>
                  <SelectContent className="text-xs bg-card border-border">
                    <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                    <SelectItem value="Jamik Tashpulatov">
                      Jamik Tashpulatov
                    </SelectItem>
                    <SelectItem value="Antigravity AI">
                      Antigravity AI
                    </SelectItem>
                    <SelectItem value="Emily Whalen">Emily Whalen</SelectItem>
                    <SelectItem value="Assign reviewer">
                      Assign reviewer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DrawerFooter className="border-t border-border/40 p-4 shrink-0 flex flex-row gap-2">
            <Button className="flex-1 h-9 text-xs" onClick={handleSave}>
              Save Product
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="flex-1 h-9 text-xs bg-muted border-border"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </SidebarProvider>
  )
}
