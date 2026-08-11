'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationDots,
  PaginationSlider,
  PaginationMini,
  PaginationLoadMore,
  PaginationDropdown,
  PaginationProgressLine,
  ScrollArea,
  ScrollBar,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Calendar,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  Button,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Input,
  Label,
  Checkbox,
  Switch,
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxSeparator,
  ComboboxContext,
  DatePicker,
  DateRangePicker,
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyActions,
  ButtonGroup,
  ButtonGroupItem,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  DataTable,
  DashboardBlock02,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from 'vibe-ui'
import {
  Home,
  User,
  Settings,
  ChevronRight,
  ChevronsUpDown,
  MoreHorizontal,
  Mail,
  Plus,
  Trash2,
  CalendarDays,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Copy,
  Check,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Volume2,
  Download,
  FolderOpen,
  LayoutGrid,
  FileCode,
  Terminal,
  Folder,
  Play,
  Code,
  List,
  Columns,
  Inbox,
  RefreshCw,
  Filter,
  ShieldCheck,
  Layers,
  Loader2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heart,
  MessageSquare,
  Globe,
} from 'lucide-react'

// ==========================================
// 1. TABLE DEMOS (10 Examples)
// ==========================================

export function TableDemoBasic() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Filename</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">index.html</TableCell>
          <TableCell>HTML File</TableCell>
          <TableCell className="text-right">12 KB</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">styles.css</TableCell>
          <TableCell>CSS Style</TableCell>
          <TableCell className="text-right">4.8 KB</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TableDemoUsers() {
  const [users, setUsers] = React.useState([
    {
      name: 'Sarah Vance',
      email: 'sarah@vibe.dev',
      role: 'Owner',
      status: 'Active',
      initials: 'SV',
      color: 'bg-violet-600',
    },
    {
      name: 'Alex Mercer',
      email: 'alex@vibe.dev',
      role: 'Member',
      status: 'Idle',
      initials: 'AM',
      color: 'bg-emerald-600',
    },
    {
      name: 'Elena Rostova',
      email: 'elena@vibe.dev',
      role: 'Admin',
      status: 'Active',
      initials: 'ER',
      color: 'bg-cyan-600',
    },
    {
      name: 'Marcus Vance',
      email: 'marcus@vibe.dev',
      role: 'Billing',
      status: 'Suspended',
      initials: 'MV',
      color: 'bg-rose-600',
    },
    {
      name: 'Liam Chen',
      email: 'liam@vibe.dev',
      role: 'Developer',
      status: 'Active',
      initials: 'LC',
      color: 'bg-amber-600',
    },
  ])
  const [search, setSearch] = React.useState('')
  const [selected, setSelected] = React.useState<string[]>([])
  const [statusFilter, setStatusFilter] = React.useState('All')
  const [roleFilter, setRoleFilter] = React.useState('All Roles')
  const [sortField, setSortField] = React.useState<'name' | 'role' | ''>('')
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc')
  const [pageSize, setPageSize] = React.useState(3)
  const [page, setPage] = React.useState(1)

  // 1. Filter by search
  let processedUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase()),
  )

  // 2. Filter by status
  if (statusFilter !== 'All') {
    processedUsers = processedUsers.filter((u) => u.status === statusFilter)
  }

  // 3. Filter by role
  if (roleFilter !== 'All Roles') {
    processedUsers = processedUsers.filter((u) => u.role === roleFilter)
  }

  // 4. Sort
  if (sortField) {
    processedUsers.sort((a, b) => {
      const valA = a[sortField].toLowerCase()
      const valB = b[sortField].toLowerCase()
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
  }

  // 5. Pagination
  const totalPages = Math.ceil(processedUsers.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const paginatedUsers = processedUsers.slice(startIndex, startIndex + pageSize)

  const isAllSelected =
    paginatedUsers.length > 0 &&
    paginatedUsers.every((u) => selected.includes(u.email))

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allEmails = paginatedUsers.map((u) => u.email)
      setSelected(Array.from(new Set([...selected, ...allEmails])))
    } else {
      const filteredEmails = paginatedUsers.map((u) => u.email)
      setSelected(selected.filter((email) => !filteredEmails.includes(email)))
    }
  }

  const handleSelectRow = (email: string, checked: boolean) => {
    if (checked) {
      setSelected([...selected, email])
    } else {
      setSelected(selected.filter((e) => e !== email))
    }
  }

  const handleSort = (field: 'name' | 'role') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const handleAddUser = () => {
    const names = [
      'John Doe',
      'Emma Watson',
      'Oliver Twist',
      'Sophia Loren',
      'Lucas Silva',
    ]
    const roles = [
      'Designer',
      'Product Manager',
      'QA Specialist',
      'Support Lead',
    ]
    const statuses = ['Active', 'Idle', 'Suspended']
    const colors = [
      'bg-indigo-600',
      'bg-teal-600',
      'bg-pink-600',
      'bg-lime-600',
    ]

    const name = names[Math.floor(Math.random() * names.length)]
    const email = `${name.toLowerCase().replace(/\s/g, '')}@vibe.dev`
    if (users.some((u) => u.email === email)) return

    const role = roles[Math.floor(Math.random() * roles.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
    const color = colors[Math.floor(Math.random() * colors.length)]

    setUsers([...users, { name, email, role, status, initials, color }])
  }

  const handleDeleteSelected = () => {
    setUsers(users.filter((u) => !selected.includes(u.email)))
    setSelected([])
    setPage(1)
  }

  const handleBulkStatusChange = (
    newStatus: 'Active' | 'Idle' | 'Suspended',
  ) => {
    setUsers(
      users.map((u) =>
        selected.includes(u.email) ? { ...u, status: newStatus } : u,
      ),
    )
    setSelected([])
  }

  const handleExportCSV = () => {
    const headers = 'Name,Email,Role,Status\n'
    const rows = processedUsers
      .map((u) => `"${u.name}","${u.email}","${u.role}","${u.status}"`)
      .join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'vibe_users_export.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const renderSortIcon = (field: 'name' | 'role') => {
    if (sortField !== field) return null
    return sortOrder === 'asc' ? ' ▴' : ' ▾'
  }

  return (
    <div className="w-full space-y-3.5 text-left p-4 rounded-xl bg-zinc-950/40 border border-white/10 backdrop-blur-md">
      {/* Top Search & Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            placeholder="Search users, roles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            className="pl-8 h-8.5 text-xs bg-zinc-900/50 border-white/10 text-white rounded-lg focus:border-primary/50"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
          {selected.length > 0 ? (
            <div className="flex items-center gap-2">
              <Button
                variant="destructive"
                className="h-8 px-3 text-[10px] font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                onClick={handleDeleteSelected}
              >
                <Trash2 className="h-3 w-3" />
                Delete ({selected.length})
              </Button>
              <Button
                variant="glass"
                className="h-8 px-3 text-[10px] font-bold rounded-lg cursor-pointer bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/30"
                onClick={() => handleBulkStatusChange('Active')}
              >
                Activate
              </Button>
              <Button
                variant="glass"
                className="h-8 px-3 text-[10px] font-bold rounded-lg cursor-pointer bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border-rose-500/30"
                onClick={() => handleBulkStatusChange('Suspended')}
              >
                Suspend
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="glass"
                className="h-8 px-3 text-[10px] font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                onClick={handleExportCSV}
              >
                <Download className="h-3.5 w-3.5" /> Export CSV
              </Button>
              <Button
                variant="glow"
                className="h-8 px-3 text-[10px] font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                onClick={handleAddUser}
              >
                <Plus className="h-3.5 w-3.5" /> Add User
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Filters: Status, Role & Page Size */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-1 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 bg-zinc-900/50 border border-white/5 p-0.5 rounded-lg">
            {['All', 'Active', 'Idle', 'Suspended'].map((status) => (
              <button
                key={status}
                onClick={() => {
                  setStatusFilter(status)
                  setPage(1)
                }}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-all ${statusFilter === status ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-white'}`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Role Filter Selector */}
          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value)
              setPage(1)
            }}
            className="h-8 px-2 text-xs bg-zinc-900/50 border border-white/5 text-muted-foreground rounded-lg focus:text-white focus:outline-none cursor-pointer"
          >
            {[
              'All Roles',
              'Owner',
              'Member',
              'Admin',
              'Billing',
              'Developer',
            ].map((role) => (
              <option
                key={role}
                value={role}
                className="bg-zinc-900 text-white"
              >
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Rows per page:</span>
          <div className="flex items-center gap-1 bg-zinc-900/50 border border-white/5 p-0.5 rounded-lg">
            {[3, 5].map((sz) => (
              <button
                key={sz}
                onClick={() => {
                  setPageSize(sz)
                  setPage(1)
                }}
                className={`px-2.5 py-0.5 rounded font-semibold cursor-pointer transition-all ${pageSize === sz ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'}`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="rounded-lg border border-white/5 bg-zinc-950/20 overflow-hidden">
        <Table variant="glass">
          <TableHeader className="bg-white/[0.02]">
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="w-10 p-4">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all rows"
                />
              </TableHead>
              <TableHead
                className="text-xs font-semibold text-zinc-400 cursor-pointer select-none hover:text-white transition-colors"
                onClick={() => handleSort('name')}
              >
                Member{renderSortIcon('name')}
              </TableHead>
              <TableHead
                className="text-xs font-semibold text-zinc-400 cursor-pointer select-none hover:text-white transition-colors"
                onClick={() => handleSort('role')}
              >
                Role{renderSortIcon('role')}
              </TableHead>
              <TableHead className="text-xs font-semibold text-zinc-400">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((u) => {
                const isSelected = selected.includes(u.email)
                return (
                  <TableRow
                    key={u.email}
                    className={`border-white/5 transition-all duration-150 ${isSelected ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-white/[0.02]'}`}
                  >
                    <TableCell className="p-4">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={(checked) =>
                          handleSelectRow(u.email, !!checked)
                        }
                        aria-label={`Select ${u.name}`}
                      />
                    </TableCell>
                    <TableCell className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-white/10 shrink-0">
                        <AvatarFallback
                          className={`${u.color} text-[10px] text-white font-bold`}
                        >
                          {u.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-semibold text-xs text-white">
                          {u.name}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {u.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-zinc-300 font-medium">
                      {u.role}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          u.status === 'Active'
                            ? 'glow'
                            : u.status === 'Suspended'
                              ? 'destructive'
                              : 'glass'
                        }
                        className="text-[9px] px-2 py-0.5"
                      >
                        {u.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              })
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="text-center py-8 text-xs text-muted-foreground"
                >
                  No users found matching your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Bottom Selection Stats & Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-muted-foreground">
        <div>
          {
            selected.filter((email) =>
              paginatedUsers.some((u) => u.email === email),
            ).length
          }{' '}
          of {paginatedUsers.length} row(s) selected.
        </div>
        <Pagination className="mx-0 w-auto">
          <PaginationContent className="gap-1">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (page > 1) setPage(page - 1)
                }}
                className={page === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (page < totalPages) setPage(page + 1)
                }}
                className={
                  page >= totalPages || totalPages === 0
                    ? 'pointer-events-none opacity-50'
                    : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export function TableDemoLogs() {
  return (
    <Table variant="retro">
      <TableHeader className="bg-foreground text-background">
        <TableRow>
          <TableHead className="text-background font-bold">Severity</TableHead>
          <TableHead className="text-background font-bold">Message</TableHead>
          <TableHead className="text-background font-bold text-right">
            Time
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Badge variant="destructive" className="rounded-none">
              Error
            </Badge>
          </TableCell>
          <TableCell className="font-mono text-xs">
            Auth failed: Invalid credentials
          </TableCell>
          <TableCell className="text-right text-xs">12:04:15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Badge variant="retro" className="rounded-none">
              Warning
            </Badge>
          </TableCell>
          <TableCell className="font-mono text-xs">
            Disk space warning: 85% full
          </TableCell>
          <TableCell className="text-right text-xs">12:03:10</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TableDemoEcom() {
  return (
    <Table variant="glow">
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Products</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono font-bold text-primary">
            #ORD-9024
          </TableCell>
          <TableCell className="text-xs">
            Vibe Button CLI, Switch Element
          </TableCell>
          <TableCell className="text-right font-bold text-white">
            $45.00
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono font-bold text-primary">
            #ORD-8115
          </TableCell>
          <TableCell className="text-xs">
            Circular Progress Indicator (Glow)
          </TableCell>
          <TableCell className="text-right font-bold text-white">
            $15.00
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TableDemoSystemStatus() {
  return (
    <Table variant="glass">
      <TableHeader>
        <TableRow>
          <TableHead>Node</TableHead>
          <TableHead>CPU</TableHead>
          <TableHead>Memory</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          {
            node: 'us-east-1',
            cpu: '24%',
            mem: '68%',
            status: 'Healthy',
            color: 'text-emerald-400',
          },
          {
            node: 'eu-west-2',
            cpu: '94%',
            mem: '89%',
            status: 'Degraded',
            color: 'text-rose-400',
          },
        ].map((s) => (
          <TableRow key={s.node}>
            <TableCell className="font-medium text-xs text-white">
              {s.node}
            </TableCell>
            <TableCell className="text-xs">{s.cpu}</TableCell>
            <TableCell className="text-xs">{s.mem}</TableCell>
            <TableCell className={'text-right text-xs font-bold ' + s.color}>
              {s.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function TableDemoPricing() {
  return (
    <Table variant="glass">
      <TableHeader>
        <TableRow>
          <TableHead>Plan</TableHead>
          <TableHead>Features</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-bold text-white">Developer</TableCell>
          <TableCell className="text-xs">
            CLI installer, standard components, custom support
          </TableCell>
          <TableCell className="text-right font-bold text-primary">
            Free
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-white">Pro</TableCell>
          <TableCell className="text-xs">
            All presets, source access, multi-workspace license
          </TableCell>
          <TableCell className="text-right font-bold text-primary">
            $19/mo
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TableDemoInventory() {
  return (
    <Table variant="retro">
      <TableHeader className="bg-foreground text-background">
        <TableRow>
          <TableHead className="text-background">SKU</TableHead>
          <TableHead className="text-background">Item</TableHead>
          <TableHead className="text-background text-right">In Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono text-xs">VIBE-BTN-01</TableCell>
          <TableCell className="text-xs">Neon Glow Button Widget</TableCell>
          <TableCell className="text-right font-bold">142</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono text-xs">VIBE-CRD-02</TableCell>
          <TableCell className="text-xs">Glassmorphic Card Panel</TableCell>
          <TableCell className="text-right font-bold">87</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TableDemoTasks() {
  return (
    <Table variant="glow">
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead className="text-right">Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-xs font-semibold text-white">
            Implement embla slider
          </TableCell>
          <TableCell className="text-xs">Sarah V.</TableCell>
          <TableCell className="text-right">
            <Badge variant="glow">High</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-xs font-semibold text-white">
            Style daypicker dates
          </TableCell>
          <TableCell className="text-xs">Alex M.</TableCell>
          <TableCell className="text-right">
            <Badge variant="default">Medium</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TableDemoFiles() {
  return (
    <Table variant="glass">
      <TableHeader>
        <TableRow>
          <TableHead>File Name</TableHead>
          <TableHead>Size</TableHead>
          <TableHead className="text-right">Date Modified</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="flex items-center gap-2 text-xs text-white">
            <FileText className="h-4 w-4 text-violet-400" />
            <span>components.json</span>
          </TableCell>
          <TableCell className="text-xs text-muted-foreground">
            3.2 KB
          </TableCell>
          <TableCell className="text-right text-xs">Today, 10:14 AM</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center gap-2 text-xs text-white">
            <FileText className="h-4 w-4 text-violet-400" />
            <span>utils.ts</span>
          </TableCell>
          <TableCell className="text-xs text-muted-foreground">
            1.1 KB
          </TableCell>
          <TableCell className="text-right text-xs">
            Yesterday, 4:45 PM
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function TableDemoDbSchema() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Column</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Constraints</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono text-xs font-bold text-primary">
            id
          </TableCell>
          <TableCell className="font-mono text-xs">UUID</TableCell>
          <TableCell className="text-right font-mono text-xs text-muted-foreground">
            PRIMARY KEY
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono text-xs font-bold text-primary">
            created_at
          </TableCell>
          <TableCell className="font-mono text-xs">TIMESTAMP</TableCell>
          <TableCell className="text-right font-mono text-xs text-muted-foreground">
            DEFAULT NOW()
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

// ==========================================
// 2. BREADCRUMB DEMOS (10 Examples)
// ==========================================

export function BreadcrumbDemoBasic() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoGlass() {
  return (
    <Breadcrumb>
      <BreadcrumbList variant="glass">
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="inline-flex items-center gap-1.5">
            <Home className="h-3.5 w-3.5" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Design</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Glassmorphic</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoRetro() {
  return (
    <Breadcrumb>
      <BreadcrumbList variant="retro">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">HOME</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4 font-bold" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">LIB</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4 font-bold" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>RETRO</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoGlow() {
  return (
    <Breadcrumb>
      <BreadcrumbList variant="glow">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Widgets</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary font-bold">
            Glow
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoIcons() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Home className="h-3.5 w-3.5" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <User className="h-3.5 w-3.5" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Settings className="h-3.5 w-3.5" />
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoFileExplorer() {
  return (
    <Breadcrumb>
      <BreadcrumbList variant="glass">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Root</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">packages</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ui</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>utils.ts</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoStepper() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-2">
        <BreadcrumbItem className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">
          1. Account
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold">
          2. Verification
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="opacity-50 text-xs">3. Done</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoEllipsis() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoBadge() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1">
        <BreadcrumbItem>
          <Badge variant="default">Home</Badge>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Badge variant="glass">Projects</Badge>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Badge variant="glow">Vibe UI</Badge>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbDemoStatus() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Builds</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">#241</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <BreadcrumbPage>Deploying</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

// ==========================================
// 3. PAGINATION DEMOS (10 Examples)
// ==========================================

function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
) {
  const totalPageNumbers = siblingCount * 2 + 5

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1

  const firstPageIndex = 1
  const lastPageIndex = totalPages

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount
    let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, 'ellipsis', totalPages]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount
    let rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1,
    )
    return [firstPageIndex, 'ellipsis', ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i,
    )
    return [
      firstPageIndex,
      'ellipsis',
      ...middleRange,
      'ellipsis',
      lastPageIndex,
    ]
  }

  return []
}

export function PaginationDemoBasic() {
  const [page, setPage] = React.useState(1)
  const total = 10
  const range = getPaginationRange(page, total)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
        {range.map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <PaginationItem key={`${page}-ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }
          return (
            <PaginationItem key={`${page}-${item}`}>
              <PaginationLink
                isActive={page === item}
                onClick={() => setPage(item as number)}
                className="cursor-pointer"
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((p) => Math.min(total, p + 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function PaginationDemoGlass() {
  const [page, setPage] = React.useState(1)
  const total = 10
  const range = getPaginationRange(page, total)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            variant="glass"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
        {range.map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <PaginationItem key={`${page}-ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }
          return (
            <PaginationItem key={`${page}-${item}`}>
              <PaginationLink
                variant="glass"
                isActive={page === item}
                onClick={() => setPage(item as number)}
                className="cursor-pointer"
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            variant="glass"
            onClick={() => setPage((p) => Math.min(total, p + 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function PaginationDemoRetro() {
  const [page, setPage] = React.useState(1)
  const total = 10
  const range = getPaginationRange(page, total)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            variant="retro"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
        {range.map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <PaginationItem key={`${page}-ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }
          return (
            <PaginationItem key={`${page}-${item}`}>
              <PaginationLink
                variant="retro"
                isActive={page === item}
                onClick={() => setPage(item as number)}
                className="cursor-pointer"
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            variant="retro"
            onClick={() => setPage((p) => Math.min(total, p + 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function PaginationDemoGlow() {
  const [page, setPage] = React.useState(1)
  const total = 10
  const range = getPaginationRange(page, total)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            variant="glow"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
        {range.map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <PaginationItem key={`${page}-ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }
          return (
            <PaginationItem key={`${page}-${item}`}>
              <PaginationLink
                variant="glow"
                isActive={page === item}
                onClick={() => setPage(item as number)}
                className="cursor-pointer"
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            variant="glow"
            onClick={() => setPage((p) => Math.min(total, p + 1))}
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function PaginationDemoJumper() {
  const [page, setPage] = React.useState(1)
  const total = 10
  const range = getPaginationRange(page, total)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    if (val >= 1 && val <= total) {
      setPage(val)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          {range.map((item, index) => {
            if (item === 'ellipsis') {
              return (
                <PaginationItem key={`${page}-ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            }
            return (
              <PaginationItem key={`${page}-${item}`}>
                <PaginationLink
                  isActive={page === item}
                  onClick={() => setPage(item as number)}
                  className="cursor-pointer"
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          })}
        </PaginationContent>
      </Pagination>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>Go to page:</span>
        <Input
          className="h-7 w-12 text-center text-xs p-1"
          value={page}
          onChange={handleInputChange}
          type="number"
          min={1}
          max={total}
        />
      </div>
    </div>
  )
}

export function PaginationDemoCompact() {
  const [page, setPage] = React.useState(3)
  const total = 10
  return (
    <Pagination>
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            size="default"
            className="cursor-pointer"
          />
        </PaginationItem>
        <PaginationItem className="text-xs text-muted-foreground font-semibold select-none">
          Page {page} of {total}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((p) => Math.min(total, p + 1))}
            size="default"
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function PaginationDemoDots() {
  const [active, setActive] = React.useState(1)
  return (
    <div className="flex items-center gap-1.5 p-2 bg-card border rounded-full">
      {[1, 2, 3, 4].map((i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={
            'h-2 rounded-full cursor-pointer transition-all focus:outline-none ' +
            (i === active
              ? 'bg-primary w-4'
              : 'bg-muted-foreground/30 hover:bg-muted-foreground w-2')
          }
          aria-label={`Dot ${i}`}
        />
      ))}
    </div>
  )
}

export function PaginationDemoResults() {
  const [page, setPage] = React.useState(1)
  const total = 3
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-md gap-4 px-4">
      <span className="text-xs text-muted-foreground select-none">
        Showing {(page - 1) * 10 + 1}-{Math.min(page * 10, 28)} of 28 results
      </span>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="cursor-pointer"
            />
          </PaginationItem>
          {Array.from({ length: total }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={page === i + 1}
                onClick={() => setPage(i + 1)}
                className="cursor-pointer"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage((p) => Math.min(total, p + 1))}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export function PaginationDemoRowSelector() {
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const total = 5

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-1.5 select-none">
        <span>Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value))
            setPage(1)
          }}
          className="bg-background border border-border rounded px-1.5 py-0.5 text-xs text-foreground cursor-pointer outline-none"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              size="default"
              className="cursor-pointer"
            />
          </PaginationItem>
          <span className="text-xs font-semibold px-2 select-none">
            Page {page} of {total}
          </span>
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage((p) => Math.min(total, p + 1))}
              size="default"
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export function PaginationDemoSegmented() {
  const [active, setActive] = React.useState(1)
  return (
    <div className="flex items-center rounded-lg border border-border bg-card p-0.5">
      {[1, 2, 3].map((i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={
            'px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ' +
            (i === active
              ? 'bg-primary text-primary-foreground shadow'
              : 'text-muted-foreground hover:text-foreground')
          }
        >
          Page {i}
        </button>
      ))}
    </div>
  )
}

// 6 NEW PREMIUM PAGINATION DEMOS
export function PaginationDemoNewDots() {
  const [page, setPage] = React.useState(1)
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="space-y-1">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
          Default & Glass presets
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <PaginationDots
            totalPages={5}
            currentPage={page}
            onPageChange={setPage}
            variant="default"
          />
          <PaginationDots
            totalPages={5}
            currentPage={page}
            onPageChange={setPage}
            variant="glass"
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
          Retro, Glow, & Cyberpunk presets
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <PaginationDots
            totalPages={5}
            currentPage={page}
            onPageChange={setPage}
            variant="retro"
          />
          <PaginationDots
            totalPages={5}
            currentPage={page}
            onPageChange={setPage}
            variant="glow"
          />
          <PaginationDots
            totalPages={5}
            currentPage={page}
            onPageChange={setPage}
            variant="cyberpunk"
          />
        </div>
      </div>
    </div>
  )
}

export function PaginationDemoNewSlider() {
  const [page, setPage] = React.useState(3)
  return (
    <PaginationSlider
      totalPages={10}
      currentPage={page}
      onPageChange={setPage}
      variant="cyberpunk"
    />
  )
}

export function PaginationDemoNewMini() {
  const [page, setPage] = React.useState(1)
  return (
    <div className="flex flex-wrap items-center gap-4 justify-center w-full">
      <PaginationMini
        totalPages={5}
        currentPage={page}
        onPageChange={setPage}
        variant="default"
      />
      <PaginationMini
        totalPages={5}
        currentPage={page}
        onPageChange={setPage}
        variant="glass"
      />
      <PaginationMini
        totalPages={5}
        currentPage={page}
        onPageChange={setPage}
        variant="retro"
      />
      <PaginationMini
        totalPages={5}
        currentPage={page}
        onPageChange={setPage}
        variant="glow"
      />
      <PaginationMini
        totalPages={5}
        currentPage={page}
        onPageChange={setPage}
        variant="cyberpunk"
      />
    </div>
  )
}

export function PaginationDemoNewLoadMore() {
  const [loadedCount, setLoadedCount] = React.useState(20)
  const [isLoading, setIsLoading] = React.useState(false)
  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setLoadedCount((prev) => Math.min(100, prev + 20))
      setIsLoading(false)
    }, 800)
  }
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <PaginationLoadMore
        isLoading={isLoading}
        onClick={handleLoadMore}
        hasNextPage={loadedCount < 100}
        loadedCount={loadedCount}
        totalCount={100}
        variant="glow"
      />
      {loadedCount === 100 && (
        <span className="text-xs text-emerald-500 font-semibold select-none animate-pulse">
          ✓ All items loaded successfully
        </span>
      )}
      <button
        onClick={() => setLoadedCount(20)}
        className="text-[10px] text-muted-foreground hover:text-foreground underline cursor-pointer"
      >
        Reset Demo
      </button>
    </div>
  )
}

export function PaginationDemoNewDropdown() {
  const [page, setPage] = React.useState(1)
  return (
    <PaginationDropdown
      totalPages={15}
      currentPage={page}
      onPageChange={setPage}
      variant="glass"
    />
  )
}

export function PaginationDemoNewProgressLine() {
  const [page, setPage] = React.useState(1)
  return (
    <PaginationProgressLine
      totalPages={5}
      currentPage={page}
      onPageChange={setPage}
      variant="default"
    />
  )
}

// ==========================================
// 4. SCROLL AREA DEMOS (10 Examples)
// ==========================================

export function ScrollAreaDemoBasic() {
  return (
    <ScrollArea className="h-32 w-52 border border-border rounded bg-card p-3">
      <div className="space-y-2">
        <div className="text-xs font-bold text-white">Scrollable logs</div>
        <div className="text-[11px] text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.
        </div>
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoGlass() {
  return (
    <ScrollArea
      variant="glass"
      className="h-32 w-52 border border-white/10 rounded bg-white/5 p-3"
    >
      <div className="h-48 text-[11px] text-muted-foreground">
        Semi-transparent glass tracking handles and tracks with custom blur
        backdrops.
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoRetro() {
  return (
    <ScrollArea
      variant="retro"
      className="h-32 w-52 border-2 border-foreground rounded-none bg-background p-3"
    >
      <div className="h-48 text-[11px] font-mono">
        Thick solid boxy brutalist offset handle scrollers.
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoGlow() {
  return (
    <ScrollArea
      variant="glow"
      className="h-32 w-52 border border-primary/25 rounded bg-primary/5 p-3"
    >
      <div className="h-48 text-[11px] text-muted-foreground">
        Neon glowing track scroll highlights active indicators.
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoHorizontal() {
  return (
    <ScrollArea
      className="w-52 h-20 border border-border rounded bg-card p-3"
      orientation="horizontal"
    >
      <div className="flex gap-2 w-[400px] h-full items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-muted p-2 rounded text-xs text-white shrink-0"
          >
            Item Card {i}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoBoth() {
  return (
    <ScrollArea
      className="w-52 h-32 border border-border rounded bg-card p-3"
      variant="glass"
    >
      <div className="w-[300px] h-[200px] p-2 text-xs text-muted-foreground">
        Scrolling in both horizontal and vertical directions works seamlessly
        with custom tracking bars.
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoChat() {
  return (
    <ScrollArea className="h-40 w-56 border border-border rounded-xl bg-card p-3">
      <div className="space-y-3">
        <div className="text-left bg-muted p-2.5 rounded-r-xl rounded-bl-xl text-xs max-w-[85%]">
          Hello! Is this the new Vibe UI scroll component?
        </div>
        <div className="text-right bg-primary text-primary-foreground p-2.5 rounded-l-xl rounded-br-xl text-xs max-w-[85%] ml-auto">
          Yes! Built on radix primitives.
        </div>
        <div className="text-left bg-muted p-2.5 rounded-r-xl rounded-bl-xl text-xs max-w-[85%]">
          Looks awesome and super smooth.
        </div>
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoMenu() {
  return (
    <ScrollArea className="h-40 w-48 border border-border rounded-lg bg-card p-2">
      <div className="flex flex-col gap-1">
        {[
          'Dashboard',
          'Analytics',
          'Components',
          'Registry',
          'Settings',
          'Profile',
          'Security',
          'Billing',
        ].map((m) => (
          <button
            key={m}
            className="text-left text-xs font-semibold px-2 py-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {m}
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoCart() {
  return (
    <ScrollArea className="h-40 w-56 border border-border rounded-xl bg-card p-3">
      <div className="space-y-3">
        {[
          { name: 'Button Component', price: '$15.00' },
          { name: 'Glassmorphic Card', price: '$20.00' },
          { name: 'Calendar Widget', price: '$25.00' },
          { name: 'Carousel Slider', price: '$30.00' },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center text-xs pb-2 border-b border-border/30 last:border-0"
          >
            <div>
              <div className="font-semibold text-white">{item.name}</div>
              <div className="text-[10px] text-muted-foreground">Qty: 1</div>
            </div>
            <span className="font-bold text-primary">{item.price}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoTerminal() {
  return (
    <ScrollArea
      variant="glow"
      className="h-40 w-64 border border-primary/20 rounded-lg bg-black p-3"
    >
      <div className="font-mono text-[11px] text-emerald-400 space-y-1.5">
        <div>$ npx vibe-ui-kit add calendar</div>
        <div className="text-white">✓ Resolving component "calendar"...</div>
        <div className="text-white">
          ✓ Created calendar.tsx at /components/ui
        </div>
        <div className="text-amber-400">
          ⚠ Peer dependencies detected: react-day-picker
        </div>
        <div className="text-primary font-bold">
          $ pnpm install react-day-picker
        </div>
        <div className="text-white">✓ Installed dependencies successfully.</div>
      </div>
    </ScrollArea>
  )
}

// ==========================================
// 5. HOVER CARD DEMOS (10 Examples)
// ==========================================

export function HoverCardDemoBasic() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="font-semibold text-primary underline cursor-pointer">
          @vibeui
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1 text-left">
          <h4 className="text-xs font-bold text-white">Vibe UI Kit</h4>
          <p className="text-[11px] text-muted-foreground">
            Premium design presets built for React & Tailwind CSS.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoGlass() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="font-semibold text-cyan-400 cursor-pointer">
          Glass Card
        </span>
      </HoverCardTrigger>
      <HoverCardContent variant="glass">
        <div className="text-xs text-left">
          Backdrop blur and thin border styling.
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoRetro() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="font-semibold text-amber-500 cursor-pointer">
          Retro Card
        </span>
      </HoverCardTrigger>
      <HoverCardContent variant="retro">
        <div className="text-xs text-left font-mono">
          Brutalist solid outline grids.
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoGlow() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="font-semibold text-violet-400 cursor-pointer">
          Glow Card
        </span>
      </HoverCardTrigger>
      <HoverCardContent variant="glow">
        <div className="text-xs text-left">
          Neon drop shadows backlight accents.
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoUserProfile() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="bg-violet-600 text-[8px] text-white">
              SV
            </AvatarFallback>
          </Avatar>
          <span className="text-xs font-semibold text-white hover:underline">
            Sarah Vance
          </span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3 text-left">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-violet-600 text-xs text-white">
              SV
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold text-xs text-white">Sarah Vance</div>
            <div className="text-[10px] text-muted-foreground">
              @sarah_design
            </div>
            <p className="text-[11px] text-white/80 mt-1.5 leading-relaxed">
              Product Engineer creating the next generation UI registry.
            </p>
            <div className="flex gap-3 text-[10px] text-muted-foreground mt-2">
              <span>
                <b>1.2k</b> Followers
              </span>
              <span>
                <b>390</b> Following
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoProduct() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="font-semibold text-primary underline cursor-pointer">
          Vibe Bundle
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-64" variant="glass">
        <div className="text-left space-y-2">
          <div className="h-28 w-full bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-extrabold text-sm shadow">
            Vibe Premium
          </div>
          <div className="font-bold text-xs text-white">
            All-Inclusive Bundle
          </div>
          <div className="text-[10px] text-muted-foreground">
            Access to all 35 components with source files and upgrades.
          </div>
          <div className="flex justify-between items-center pt-1.5">
            <span className="font-bold text-xs text-white">$49</span>
            <Button size="sm" className="h-7 text-[10px]">
              Buy Now
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoCode() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono cursor-pointer border border-border">
          buildRegistry()
        </code>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 font-mono text-[11px]" variant="glass">
        <div className="text-left space-y-1.5">
          <div className="text-violet-400 font-bold">
            function buildRegistry(): void
          </div>
          <div className="text-muted-foreground">
            Compiles all JSX/TSX source file nodes in the UI folder to output
            schema JSON configurations for the dev CLI.
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoLocation() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="font-semibold text-white hover:underline cursor-pointer">
          London, UK
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-56">
        <div className="text-left space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>London Node</span>
          </div>
          <div className="text-[10px] text-muted-foreground">
            Uptime: 99.98%
          </div>
          <div className="text-[10px] text-muted-foreground">
            Ping Latency: 12ms
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoDictionary() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="border-b border-dashed border-muted-foreground cursor-pointer">
          neobrutalism
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-60" variant="retro">
        <div className="text-left space-y-1">
          <div className="font-bold text-xs">neobrutalism [noun]</div>
          <div className="text-[10px] text-muted-foreground">
            An architectural and web design style defined by flat dark solid
            borders, high contrast layouts, and raw structure blocks.
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverCardDemoStatus() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="text-xs text-primary font-bold cursor-pointer">
          Deployment status
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-60" variant="glow">
        <div className="text-left space-y-1.5">
          <div className="font-bold text-xs text-white">Production V1.0.6</div>
          <div className="text-[10px] text-muted-foreground">
            Successfully published package vibe-ui-kit to npm.
          </div>
          <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Passed checks</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

// ==========================================
// 6. POPOVER DEMOS (10 Examples)
// ==========================================

export function PopoverDemoBasic() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="text-left text-xs">
          <div className="font-bold text-white mb-1">Simple Popover</div>
          <div className="text-muted-foreground">
            A customizable floating container for context details.
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoGlass() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="glass">Glass Popover</Button>
      </PopoverTrigger>
      <PopoverContent variant="glass" className="w-56">
        <div className="text-left text-xs">
          Glossy blurred glass card panels.
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoRetro() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="retro">Retro Popover</Button>
      </PopoverTrigger>
      <PopoverContent variant="retro" className="w-56">
        <div className="text-left text-xs font-mono">
          Brutalist thick boundary card.
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoGlow() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="glow">Glow Popover</Button>
      </PopoverTrigger>
      <PopoverContent variant="glow" className="w-56">
        <div className="text-left text-xs">
          Neon backlight border drop shadow card.
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoSettings() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="text-left space-y-3">
          <div className="font-bold text-xs text-white">System Settings</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-[11px]">Auto Update</Label>
              <Switch id="pop-sw-1" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[11px]">Developer Mode</Label>
              <Switch id="pop-sw-2" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoColorPicker() {
  const colors = [
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#3b82f6',
    '#6366f1',
    '#a855f7',
  ]
  const [selected, setSelected] = React.useState('#a855f7')

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer bg-card border rounded p-1.5">
          <span
            className="h-4 w-4 rounded-full border border-white/20"
            style={{ backgroundColor: selected }}
          />
          <span className="text-xs font-semibold text-white">Color Picker</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <div className="text-left space-y-2">
          <div className="text-xs font-bold text-white">
            Select Accent Color
          </div>
          <div className="flex gap-2 flex-wrap">
            {colors.map((c) => (
              <span
                key={c}
                onClick={() => setSelected(c)}
                className={
                  'h-5 w-5 rounded-full cursor-pointer border-2 transition-all hover:scale-110 ' +
                  (selected === c ? 'border-white' : 'border-transparent')
                }
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoMiniCart() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">View Cart (2)</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" variant="glass">
        <div className="text-left space-y-3">
          <div className="font-bold text-xs text-white">Your Cart</div>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            <div className="flex justify-between text-xs border-b border-border/30 pb-1.5">
              <span>Switch Component</span>
              <span className="font-bold text-white">$12</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Card Component</span>
              <span className="font-bold text-white">$15</span>
            </div>
          </div>
          <Button className="w-full h-8 text-[11px] font-semibold mt-1">
            Checkout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoFeedback() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <HelpCircle className="h-4 w-4 mr-1.5" />
          Help
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="text-left space-y-2.5">
          <div className="font-bold text-xs text-white">Send Feedback</div>
          <textarea
            className="w-full h-16 bg-muted border border-border rounded text-xs p-2 text-white outline-none focus:border-primary/50"
            placeholder="Tell us what you think..."
          />
          <Button className="w-full h-8 text-xs">Submit</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoShare() {
  const [copied, setCopied] = React.useState(false)
  const link = 'https://vibe-ui-kit.vercel.app/'

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Share link</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="text-left space-y-2">
          <div className="font-bold text-xs text-white">Share page link</div>
          <div className="flex items-center gap-1.5">
            <Input className="h-8 text-xs flex-1" readOnly value={link} />
            <Button
              size="icon"
              className="h-8 w-8"
              onClick={() => {
                navigator.clipboard.writeText(link)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
            >
              {copied ? (
                <Check className="h-4.5 w-4.5 text-emerald-400" />
              ) : (
                <Copy className="h-4.5 w-4.5" />
              )}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoAlert() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="glow"
          className="bg-rose-500/10 border-rose-500/40 text-rose-400 hover:bg-rose-500/20"
        >
          Danger zone
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 border-rose-500/40 bg-rose-500/5">
        <div className="text-left space-y-2.5">
          <div className="font-bold text-xs text-rose-400">
            Are you absolutely sure?
          </div>
          <div className="text-[10px] text-muted-foreground">
            Deleting this repository will wipe all registry packages forever.
          </div>
          <Button
            variant="destructive"
            className="w-full h-8 text-[11px] font-semibold bg-rose-600"
          >
            Delete Project
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// ==========================================
// 7. TOAST DEMOS (10 Examples)
// ==========================================

export function ToastDemoBasic() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast variant="default" open={true}>
          <div className="grid gap-1 text-left">
            <ToastTitle>Database Backup Completed</ToastTitle>
            <ToastDescription>
              All workspace schemas saved successfully.
            </ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoGlass() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast variant="glass" open={true}>
          <div className="grid gap-1 text-left">
            <ToastTitle>Glassmorphic Alert</ToastTitle>
            <ToastDescription>
              Backdrop blur filters applied successfully.
            </ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoRetro() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast variant="retro" open={true}>
          <div className="grid gap-1 text-left">
            <ToastTitle>RETRO WIDGET</ToastTitle>
            <ToastDescription>
              SOLID FLAT BLACK BORDERS IN ACTION.
            </ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoGlow() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast variant="glow" open={true}>
          <div className="grid gap-1 text-left">
            <ToastTitle>Neon Glow Active</ToastTitle>
            <ToastDescription>
              Ambient drop shadows lighting up.
            </ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoAction() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast open={true}>
          <div className="grid gap-1 text-left">
            <ToastTitle>Workspace file deleted</ToastTitle>
            <ToastDescription>
              file components.json was removed.
            </ToastDescription>
          </div>
          <ToastAction altText="Undo action">Undo</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoDestructive() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast variant="destructive" open={true}>
          <div className="grid gap-1 text-left">
            <ToastTitle>Connection Failed</ToastTitle>
            <ToastDescription>
              Could not reach npmjs registry servers.
            </ToastDescription>
          </div>
          <ToastAction altText="Retry connection">Retry</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoLoading() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast open={true}>
          <div className="flex items-center gap-3 text-left">
            <span className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin shrink-0" />
            <div>
              <ToastTitle>Building registry map</ToastTitle>
              <ToastDescription>
                Compiling CLI components schema...
              </ToastDescription>
            </div>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoInteractiveTrigger() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <Button
        onClick={() => {
          setOpen(true)
          setTimeout(() => setOpen(false), 3000)
        }}
      >
        Trigger Interactive Toast
      </Button>
      <ToastProvider>
        <Toast open={open} onOpenChange={setOpen} variant="glow">
          <div className="grid gap-1 text-left">
            <ToastTitle>Success!</ToastTitle>
            <ToastDescription>
              Interactive toast triggered successfully.
            </ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 mt-3 flex flex-col gap-2"
        />
      </ToastProvider>
    </div>
  )
}

export function ToastDemoVolume() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast open={true} variant="glass">
          <div className="flex items-center gap-2.5 text-left">
            <Volume2 className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
            <div>
              <ToastTitle>Volume Changed</ToastTitle>
              <ToastDescription>Output level set to 85%.</ToastDescription>
            </div>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoVerification() {
  return (
    <ToastProvider>
      <div className="p-4 bg-muted/20 border border-border/40 rounded-lg max-w-sm w-full">
        <Toast open={true} variant="glow">
          <div className="flex items-center gap-2.5 text-left">
            <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
            <div>
              <ToastTitle>Profile Verified</ToastTitle>
              <ToastDescription>
                Token authenticated successfully.
              </ToastDescription>
            </div>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport
          position="inline"
          className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
        />
      </div>
    </ToastProvider>
  )
}

export function ToastDemoPositions() {
  interface ToastItem {
    id: string
    position:
      | 'top-left'
      | 'top-right'
      | 'top-center'
      | 'bottom-left'
      | 'bottom-right'
      | 'bottom-center'
    title: string
    description: string
  }

  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  const triggerToast = (pos: ToastItem['position']) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: ToastItem = {
      id,
      position: pos,
      title: `Event Created (${pos.replace('-', ' ')})`,
      description: `Notification code: ${id.toUpperCase()}`,
    }
    setToasts((prev) => [...prev.filter((t) => t.position === pos), newToast])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }

  const positions: ToastItem['position'][] = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md p-6 rounded-xl border border-border bg-card shadow-xs">
      <div className="text-center space-y-1">
        <h4 className="font-bold text-foreground">Interactive Viewports</h4>
        <p className="text-xs text-muted-foreground">
          Select a position to dispatch a global notification.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 w-full">
        {positions.map((pos) => (
          <Button
            key={pos}
            size="sm"
            variant="outline"
            className="text-xs capitalize"
            onClick={() => triggerToast(pos)}
          >
            {pos.replace('-', ' ')}
          </Button>
        ))}
      </div>

      {positions.map((pos) => {
        const positionToasts = toasts.filter((t) => t.position === pos)
        return (
          <ToastProvider key={pos}>
            {positionToasts.map((toast, index) => {
              const activeIndex = positionToasts.length - 1 - index
              const isTop = pos.startsWith('top')
              const translateY = isTop ? activeIndex * 10 : -activeIndex * 10
              const scale = 1 - activeIndex * 0.05
              const opacity = activeIndex > 2 ? 0 : 1

              return (
                <Toast
                  key={toast.id}
                  variant="glow"
                  position={pos}
                  className="absolute w-[calc(100%-2rem)] md:max-w-[380px] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-xl"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    zIndex: 100 - activeIndex,
                    pointerEvents: activeIndex === 0 ? 'auto' : 'none',
                  }}
                  onOpenChange={(open) => {
                    if (!open) {
                      setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                    }
                  }}
                >
                  <div className="grid gap-1 text-left">
                    <ToastTitle>{toast.title}</ToastTitle>
                    <ToastDescription>{toast.description}</ToastDescription>
                  </div>
                  <ToastClose />
                </Toast>
              )
            })}
            <ToastViewport position={pos} />
          </ToastProvider>
        )
      })}
    </div>
  )
}

// ==========================================
// 7.5. CARD DEMOS (2 Per Row Grids)
// ==========================================

export function CardDemoPresets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      {/* Default Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Default Card
        </span>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-lg">Create Project</CardTitle>
            <CardDescription>
              Deploy your new application in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-left">
              <Label htmlFor="proj-name">Project Name</Label>
              <Input id="proj-name" placeholder="my-awesome-app" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Deploy</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Glassmorphic */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Glassmorphic
        </span>
        <Card variant="glass" className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-lg">Glassmorphic UI</CardTitle>
            <CardDescription>
              Frosted glass backdrop-blur effect.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left text-xs text-muted-foreground leading-relaxed">
            Blends translucently over dark or graphical background layers with
            crisp border light outlines.
          </CardContent>
        </Card>
      </div>

      {/* Retro Neobrutalism */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Retro Neobrutalism
        </span>
        <Card variant="retro" className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-lg font-black">
              Neobrutalist Card
            </CardTitle>
            <CardDescription className="text-foreground/80 font-medium">
              Solid offset shadows and bold outlines.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left text-xs text-foreground font-medium leading-relaxed">
            High-contrast 90s aesthetic styling with heavy offset drop shadows.
          </CardContent>
        </Card>
      </div>

      {/* Neon Glow */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Neon Glow
        </span>
        <Card variant="glow" className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-lg">Neon Glow Accent</CardTitle>
            <CardDescription>Dynamic hover glow light aura.</CardDescription>
          </CardHeader>
          <CardContent className="text-left text-xs text-muted-foreground leading-relaxed">
            Subtle primary color aura expansion when hovering over the card
            boundary.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function CardDemoApplications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      {/* Sign In Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Authentication Form
        </span>
        <Card className="w-full max-w-sm text-left">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="app-email">Email</Label>
              <Input id="app-email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="app-pass">Password</Label>
              <Input id="app-pass" type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full h-8 text-xs font-semibold">
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Pricing Tier Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Developer Pro Pricing
        </span>
        <Card
          variant="glass"
          className="w-full max-w-sm text-left relative overflow-hidden"
        >
          <CardHeader>
            <Badge variant="glow" className="w-fit mb-1 text-[10px]">
              MOST POPULAR
            </Badge>
            <CardTitle className="text-xl">Developer Pro</CardTitle>
            <CardDescription>
              Everything needed to deploy at scale.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-foreground">
                $29
              </span>
              <span className="text-xs text-muted-foreground">/month</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Unlimited dynamic deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Advanced component theme tokens</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="glow" className="w-full h-8 text-xs font-semibold">
              Upgrade to Pro
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Analytics Dashboard Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Analytics Metric Overview
        </span>
        <Card variant="glow" className="w-full max-w-sm text-left">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Total Revenue
              </CardTitle>
              <div className="text-2xl font-bold tracking-tight text-foreground">
                $45,231.89
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-1 text-xs text-emerald-500 font-semibold">
              <span>+12.5% from last month</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Monthly Target</span>
                <span>82%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: '82%' }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Control Center */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Security Settings Panel
        </span>
        <Card variant="glass" className="w-full max-w-sm text-left">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Security Config</CardTitle>
            <CardDescription>
              Configure application security toggles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-foreground">
                  Real-time Protection
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Intercept threats immediately.
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-foreground">
                  Hardware Key (MFA)
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Require physical device keys.
                </div>
              </div>
              <Badge variant="glow" className="text-[9px]">
                REQUIRED
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function CardDemoBrandCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      {/* Stripe Metallic Credit Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Stripe Metallic Card
        </span>
        <Card
          variant="glass"
          className="w-full max-w-sm h-[200px] bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 border border-white/10 rounded-2xl p-5 relative overflow-hidden shadow-2xl flex flex-col justify-between text-left"
        >
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
                Vault Card
              </span>
              <span className="text-xs font-black text-white tracking-wide">
                STRIPE BLACK
              </span>
            </div>
            <div className="h-8 w-10 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded border border-amber-600/40 p-1 shadow-inner">
              <div className="h-full w-full border border-black/10 rounded-xs grid grid-cols-3 gap-0.5 opacity-60">
                <div className="border-r border-black/20" />
                <div className="border-r border-black/20" />
              </div>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-3">
            <div className="text-lg font-bold font-mono text-white tracking-[0.2em]">
              •••• •••• •••• 8824
            </div>
            <div className="flex justify-between items-center text-xs">
              <div className="flex flex-col">
                <span className="text-[8px] text-white/40 uppercase">
                  Card Holder
                </span>
                <span className="font-semibold text-white/90 text-xs">
                  ALEX VANCE
                </span>
              </div>
              <div className="h-5 px-2 flex items-center justify-center font-bold text-white bg-white/10 rounded border border-white/20 text-[9px] tracking-wider">
                Stripe
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Linear Ticket Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Linear Issue Tracker
        </span>
        <Card
          variant="glass"
          className="w-full max-w-sm bg-zinc-950/80 border border-zinc-800 p-4 space-y-3 text-left"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge
                variant="glow"
                className="bg-purple-950/40 text-purple-400 border-purple-500/20 text-[9px] py-0 px-1.5 font-mono"
              >
                LIN-102
              </Badge>
              <span className="text-[10px] text-muted-foreground">
                In Progress
              </span>
            </div>
            <Avatar className="h-5 w-5 border border-zinc-950">
              <AvatarFallback className="bg-zinc-800 text-[8px] font-bold text-white">
                AV
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="text-xs font-semibold text-foreground leading-snug">
            Refactor component layout grid system
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2 border-t border-zinc-900">
            <span className="text-amber-500 font-medium">High Priority</span>
            <span>Updated 2m ago</span>
          </div>
        </Card>
      </div>
      {/* Vercel Deployment Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Vercel Production Deployment
        </span>
        <Card
          variant="glow"
          className="w-full max-w-sm bg-zinc-950 border border-zinc-800 p-4 space-y-3 text-left"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div className="text-xs font-bold text-foreground">
                Production Deployment
              </div>
            </div>
            <Badge className="bg-emerald-950/50 text-emerald-400 border-emerald-500/20 text-[9px]">
              READY
            </Badge>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between text-muted-foreground">
              <span>Branch</span>
              <span className="font-mono text-foreground font-semibold">
                main
              </span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Commit</span>
              <span className="font-mono text-primary">
                feat: grid layout (#14)
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Apple Spec Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Apple Hardware Spec
        </span>
        <Card
          variant="glass"
          className="w-full max-w-sm bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/5 p-5 space-y-3 text-left relative overflow-hidden"
        >
          <div className="space-y-0.5">
            <span className="text-[9px] font-black uppercase text-primary tracking-widest">
              M4 Chip
            </span>
            <CardTitle className="text-xl font-extrabold text-white tracking-tight">
              MacBook Studio
            </CardTitle>
          </div>
          <div className="grid grid-cols-2 gap-2 border-y border-white/5 py-3 text-xs">
            <div>
              <span className="text-[8px] text-white/40 uppercase font-bold block">
                CPU
              </span>
              <span className="font-bold text-white/90 text-xs">
                16-Core CPU
              </span>
            </div>
            <div>
              <span className="text-[8px] text-white/40 uppercase font-bold block">
                GPU
              </span>
              <span className="font-bold text-white/90 text-xs">
                40-Core GPU
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export function CardDemoModernDeveloper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      {/* Developer Profile & Portfolio Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Developer Profile & Showcase
        </span>
        <Card className="w-full max-w-sm sm:max-w-md overflow-hidden text-left shadow-sm border border-border bg-card">
          {/* Banner Cover Image */}
          <div className="h-28 w-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 relative p-4 flex justify-between items-start">
            <Badge className="bg-black/30 backdrop-blur-md text-white border-white/20 text-[10px] font-semibold">
              AVAILABLE FOR HIRE
            </Badge>
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[10px] font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PRO ARCHITECT</span>
            </div>
          </div>

          {/* Profile Header & Info */}
          <div className="px-5 pb-5 pt-0 relative">
            <div className="flex justify-between items-end -mt-10 mb-3">
              <div className="relative">
                <Avatar className="h-20 w-20 border-4 border-card rounded-full shadow-md">
                  <AvatarFallback className="bg-primary text-primary-foreground font-extrabold text-xl">
                    SJ
                  </AvatarFallback>
                </Avatar>
                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-card" />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs font-semibold px-3"
                >
                  Message
                </Button>
                <Button size="sm" className="h-8 text-xs font-semibold px-4">
                  Follow
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-foreground">
                  Sarah Jenkins
                </h4>
                <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 text-[10px] py-0.5 px-2 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="h-3 w-3 text-blue-500 fill-blue-500/20 shrink-0" />
                  <span>Verified</span>
                </Badge>
              </div>
              <p className="text-xs font-medium text-primary">
                Senior Staff Frontend Architect
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                Building next-generation design systems, micro-frontend
                architectures, and high-performance web apps.
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-3">
              <span className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-foreground">
                React 19
              </span>
              <span className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-foreground">
                TypeScript
              </span>
              <span className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-foreground">
                Tailwind CSS v4
              </span>
              <span className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-foreground">
                Next.js
              </span>
            </div>

            {/* Profile Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-border text-center">
              <div>
                <div className="text-base font-extrabold text-foreground">
                  142
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-base font-extrabold text-foreground">
                  18.4k
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Followers
                </div>
              </div>
              <div>
                <div className="text-base font-extrabold text-foreground">
                  99.8%
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Code Quality
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Modern Article & Content Showcase Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Article & Product Media Showcase
        </span>
        <Card className="w-full max-w-sm sm:max-w-md overflow-hidden text-left shadow-sm border border-border bg-card">
          {/* Article Cover Image Container */}
          <div className="h-44 w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-zinc-900 relative p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.2),transparent_60%)] pointer-events-none" />
            <div className="flex justify-between items-center relative z-10">
              <Badge className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                ENGINEERING
              </Badge>
              <span className="text-[10px] font-semibold text-white/70 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                5 min read
              </span>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest block mb-1">
                Architecture Series
              </span>
              <h3 className="text-base font-extrabold text-white leading-snug line-clamp-2">
                Architecting Micro-Frontends at Scale with React 19
              </h3>
            </div>
          </div>

          {/* Author Header & Article Excerpt */}
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border border-border">
                <AvatarFallback className="bg-indigo-600 text-white font-bold text-xs">
                  AR
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-foreground truncate">
                  Alex Rivera
                </div>
                <div className="text-[10px] text-muted-foreground truncate">
                  Principal Systems Engineer • Aug 7, 2026
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
              Discover how modern engineering teams decompose monolithic
              frontend codebases into independently deployable, resilient UI
              modules with zero bundle overhead.
            </p>

            {/* Footer Action & Interaction Row */}
            <div className="flex items-center justify-between pt-3 border-t border-border text-xs">
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1.5 font-semibold text-xs hover:text-rose-500 transition cursor-pointer group">
                  <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500/20 group-hover:scale-110 transition-transform" />
                  <span>428</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-xs hover:text-primary transition cursor-pointer group">
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>34</span>
                </span>
              </div>
              <Button size="sm" className="h-8 text-xs font-semibold px-4">
                Read Article
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export function CardDemoRealWorldDev() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      {/* SaaS Boilerplate & Starter Kit Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          SaaS Starter Kit & App Template
        </span>
        <Card className="w-full max-w-sm sm:max-w-md overflow-hidden text-left shadow-sm border border-border bg-card">
          {/* Professional IDE / Code Preview Image Header */}
          <div className="h-44 w-full bg-gradient-to-tr from-slate-950 via-indigo-950 to-violet-950 relative p-4 flex flex-col justify-between overflow-hidden border-b border-border">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.25),transparent_70%)] pointer-events-none" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] text-white/50 font-mono ml-2">
                  vibe-ai-studio.tsx
                </span>
              </div>
              <Badge className="bg-primary text-primary-foreground text-[10px] font-bold">
                NEXT.JS 15
              </Badge>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest block mb-1">
                PRO BOILERPLATE
              </span>
              <h3 className="text-base font-extrabold text-white leading-snug">
                Vibe AI Studio - Enterprise Fullstack Kit
              </h3>
            </div>
          </div>

          {/* Product Details & Author Info */}
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border border-border">
                <AvatarFallback className="bg-purple-600 text-white font-bold text-xs">
                  DV
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-foreground">
                  DevVibe Engineering
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Updated 2 days ago • 1,280 Sales
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-foreground">$49</div>
                <div className="text-[9px] text-emerald-500 font-semibold">
                  4.9 ★ (184)
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              Production-ready Next.js 15, Tailwind CSS v4, Authentication,
              Stripe payments, and AI agent integration out of the box.
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-border gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-semibold h-8"
              >
                Live Preview
              </Button>
              <Button size="sm" className="w-full text-xs font-semibold h-8">
                Get Starter Kit
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Developer Masterclass & Video Course Card */}
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Developer Masterclass & Video Course
        </span>
        <Card className="w-full max-w-sm sm:max-w-md overflow-hidden text-left shadow-sm border border-border bg-card">
          {/* Video Course Preview Image Header */}
          <div className="h-44 w-full bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 relative p-4 flex flex-col justify-between overflow-hidden border-b border-border group cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_70%)] pointer-events-none" />
            <div className="flex justify-between items-center relative z-10">
              <Badge className="bg-blue-600 text-white text-[10px] font-bold">
                MASTERCLASS
              </Badge>
              <span className="text-[10px] font-semibold text-white/80 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full font-mono">
                8h 45m
              </span>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-mono text-blue-300 uppercase tracking-widest block mb-1">
                ADVANCED COURSE
              </span>
              <h3 className="text-base font-extrabold text-white leading-snug">
                Building Real-time Micro-Frontends
              </h3>
            </div>
          </div>

          {/* Instructor Header & Course Info */}
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border border-border">
                <AvatarFallback className="bg-blue-600 text-white font-bold text-xs">
                  MC
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-foreground">
                  Marcus Chen
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Staff Architect • 4.8k Enrolled
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              Master state synchronization, module federation, and scalable
              design system architectures for enterprise React apps.
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-border gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-semibold h-8"
              >
                View Syllabus
              </Button>
              <Button
                size="sm"
                className="w-full text-xs font-semibold h-8 bg-blue-600 hover:bg-blue-700 text-white border-0"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// ==========================================
// 8. CALENDAR DEMOS (10 Examples)
// ==========================================

export function CalendarDemoPresets() {
  const [date1, setDate1] = React.useState<Date | undefined>(new Date())
  const [date2, setDate2] = React.useState<Date | undefined>(new Date())
  const [date3, setDate3] = React.useState<Date | undefined>(new Date())
  const [date4, setDate4] = React.useState<Date | undefined>(new Date())

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Default Card
        </span>
        <Calendar
          mode="single"
          selected={date1}
          onSelect={setDate1}
          className="w-fit border border-border rounded-lg bg-card shadow-xs"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Glassmorphic
        </span>
        <Calendar
          variant="glass"
          mode="single"
          selected={date2}
          onSelect={setDate2}
          className="w-fit"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Retro Neobrutalism
        </span>
        <Calendar
          variant="retro"
          mode="single"
          selected={date3}
          onSelect={setDate3}
          className="w-fit"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Neon Glow
        </span>
        <Calendar
          variant="glow"
          mode="single"
          selected={date4}
          onSelect={setDate4}
          className="w-fit"
        />
      </div>
    </div>
  )
}

export function CalendarDemoSelectionModes() {
  const [range, setRange] = React.useState<any>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  })
  const [days, setDays] = React.useState<Date[] | undefined>([new Date()])
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(
    new Date(),
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Date Range Selection
        </span>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          className="w-fit border border-border rounded-lg bg-card shadow-xs"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Multi-Date Selection
        </span>
        <Calendar
          mode="multiple"
          selected={days}
          onSelect={setDays}
          className="w-fit border border-border rounded-lg bg-card shadow-xs"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Weekdays Only (Weekends Disabled)
        </span>
        <Calendar
          mode="single"
          selected={singleDate}
          onSelect={setSingleDate}
          disabled={{ dayOfWeek: [0, 6] }}
          className="w-fit border border-border rounded-lg bg-card shadow-xs"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Clean Month View (No Outside Days)
        </span>
        <Calendar
          mode="single"
          selected={singleDate}
          onSelect={setSingleDate}
          showOutsideDays={false}
          className="w-fit border border-border rounded-lg bg-card shadow-xs"
        />
      </div>
    </div>
  )
}

export function CalendarDemoApplications() {
  const [bookingDate, setBookingDate] = React.useState<Date | undefined>(
    new Date(),
  )
  const [pickerDate, setPickerDate] = React.useState<Date | undefined>(
    new Date(),
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center w-full max-w-4xl">
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Interactive Booking Widget
        </span>
        <div className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-4 w-full max-w-xs shadow-sm">
          <div className="text-left w-full mb-1">
            <div className="font-bold text-xs text-foreground">
              Schedule Meeting
            </div>
            <div className="text-[10px] text-muted-foreground">
              Select an available date below
            </div>
          </div>
          <Calendar
            mode="single"
            selected={bookingDate}
            onSelect={setBookingDate}
            className="w-fit p-0 border-0"
          />
          <Button className="w-full h-8 text-xs font-semibold">
            Confirm Reservation
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Popover DatePicker Input
        </span>
        <div className="flex flex-col items-center justify-center min-h-[260px] w-full bg-card border border-border rounded-xl p-6 shadow-sm">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer bg-background border border-border rounded-lg px-3.5 py-2 text-xs text-foreground shadow-xs hover:border-primary/50 transition-all">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span className="font-medium">
                  {pickerDate ? pickerDate.toLocaleDateString() : 'Pick a date'}
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-none bg-transparent">
              <Calendar
                mode="single"
                selected={pickerDate}
                onSelect={setPickerDate}
                className="w-fit border border-border rounded-lg bg-card shadow-xl"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export function CalendarDemoBasic() {
  return (
    <Calendar
      mode="single"
      selected={new Date()}
      className="w-fit border border-border rounded-lg bg-card"
    />
  )
}

export function CalendarDemoGlass() {
  return (
    <Calendar
      variant="glass"
      mode="single"
      selected={new Date()}
      className="w-fit"
    />
  )
}

export function CalendarDemoRetro() {
  return (
    <Calendar
      variant="retro"
      mode="single"
      selected={new Date()}
      className="w-fit"
    />
  )
}

export function CalendarDemoGlow() {
  return (
    <Calendar
      variant="glow"
      mode="single"
      selected={new Date()}
      className="w-fit"
    />
  )
}

export function CalendarDemoRange() {
  const [range, setRange] = React.useState<any>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  })

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="w-fit border border-border rounded-lg bg-card"
    />
  )
}

export function CalendarDemoMultiple() {
  const [days, setDays] = React.useState<Date[] | undefined>([new Date()])

  return (
    <Calendar
      mode="multiple"
      selected={days}
      onSelect={setDays}
      className="w-fit border border-border rounded-lg bg-card"
    />
  )
}

export function CalendarDemoDisabled() {
  return (
    <Calendar
      mode="single"
      disabled={{ dayOfWeek: [0, 6] }}
      className="w-fit border border-border rounded-lg bg-card"
    />
  )
}

export function CalendarDemoDatePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer bg-card border border-border rounded-lg px-3 py-2 text-xs text-foreground">
          <CalendarDays className="h-4.5 w-4.5 text-primary" />
          <span>{date ? date.toLocaleDateString() : 'Pick a date'}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none bg-transparent">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-fit border border-border rounded-lg bg-card shadow-xl"
        />
      </PopoverContent>
    </Popover>
  )
}

export function CalendarDemoWeekView() {
  return (
    <Calendar
      mode="single"
      showOutsideDays={false}
      className="w-fit border border-border rounded-lg bg-card"
    />
  )
}

export function CalendarDemoBooking() {
  return (
    <div className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-4 w-fit">
      <div className="text-left w-full mb-1">
        <div className="font-bold text-xs text-white">Schedule meeting</div>
        <div className="text-[10px] text-muted-foreground">
          Select an available date below
        </div>
      </div>
      <Calendar
        mode="single"
        selected={new Date()}
        className="w-fit p-0 border-0"
      />
      <Button className="w-full h-8 text-xs font-semibold">
        Confirm Reservation
      </Button>
    </div>
  )
}

// ==========================================
// 9. CAROUSEL DEMOS
// ==========================================

export function CarouselDemo() {
  return (
    <div className="px-12 w-full max-w-[400px]">
      <Carousel className="w-full">
        <CarouselContent>
          {[1, 2, 3].map((i) => (
            <CarouselItem key={i}>
              <div className="flex h-48 items-center justify-center border border-border bg-card rounded-xl text-xs font-semibold text-foreground">
                Slide {i}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  )
}


export function CarouselDemoVertical() {
  return (
    <div className="py-12 w-full max-w-[280px]">
      <Carousel orientation="vertical" className="w-full">
        <CarouselContent className="h-64">
          {[1, 2, 3].map((i) => (
            <CarouselItem key={i}>
              <div className="flex h-48 items-center justify-center border border-border bg-card rounded-xl text-xs font-semibold text-foreground">
                Slide {i}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  )
}


export function CarouselDemoPremium() {
  const [isInfinite, setIsInfinite] = React.useState(false)

  const images = [
    {
      title: 'Mountain Retreat',
      location: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Neon Streets',
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Ocean Breeze',
      location: 'Maldives',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Desert Dunes',
      location: 'Sahara Desert',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Forest Pathways',
      location: 'Redwood National Park',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
    },
  ]

  return (
    <div className="px-12 w-full max-w-5xl space-y-4">
      <div className="flex items-center justify-end gap-2 pb-2">
        <Switch
          id="premium-infinite-switch"
          checked={isInfinite}
          onCheckedChange={setIsInfinite}
        />
        <Label htmlFor="premium-infinite-switch" className="text-xs font-semibold cursor-pointer select-none">
          Infinite Loop
        </Label>
      </div>

      <Carousel key={isInfinite ? 'infinite' : 'standard'} className="w-full" loop={isInfinite} opts={{ align: 'start' }}>
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[4/3] group shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-white/70 font-semibold mb-1">
                    {item.location}
                  </span>
                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  )
}



export function CarouselDemoTestimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Lead Designer at Vibe',
      avatar: 'S',
      rating: 5,
      text: 'Vibe UI has completely transformed our workflow. The pre-built configurations are robust and save us days of custom code writing.',
    },
    {
      name: 'David Chen',
      role: 'Software Architect',
      avatar: 'D',
      rating: 5,
      text: 'The Tailwind integration is extremely clean. It makes customizing standard components trivial while keeping performance top tier.',
    },
    {
      name: 'Elena Rostova',
      role: 'Product Manager',
      avatar: 'E',
      rating: 5,
      text: 'Accessibility and touch gestures are flawless. Embla engine is integrated beautifully under a simple shorthand API interface.',
    },
  ]

  return (
    <div className="px-12 w-full max-w-2xl">
      <Carousel className="w-full" autoplay autoplayInterval={5000}>
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <div className="border border-border bg-card rounded-2xl p-6 text-left shadow-sm flex flex-col justify-between min-h-[180px]">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  )
}

// ==========================================
// 11. COMBOBOX DEMOS
// ==========================================

// ==========================================
// 11. BUTTON GROUP DEMOS (6 Demos)
// ==========================================

export function ButtonGroupDemo() {
  return (
    <ButtonGroup defaultValue="day">
      <Button value="day">Day</Button>
      <Button value="week">Week</Button>
      <Button value="month">Month</Button>
      <Button value="year">Year</Button>
    </ButtonGroup>
  )
}

export function ButtonGroupPresetsDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center w-full max-w-2xl">
      <div className="flex flex-col items-center gap-1.5 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Default Segmented
        </span>
        <ButtonGroup variant="default" defaultValue="day">
          <Button value="day">Day</Button>
          <Button value="week">Week</Button>
          <Button value="month">Month</Button>
          <Button value="year">Year</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col items-center gap-1.5 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Glassmorphic
        </span>
        <ButtonGroup variant="glass" defaultValue="overview">
          <Button value="overview">Overview</Button>
          <Button value="analytics">Analytics</Button>
          <Button value="reports">Reports</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col items-center gap-1.5 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Retro Neobrutalism
        </span>
        <ButtonGroup variant="retro" defaultValue="grid">
          <Button value="grid">Grid View</Button>
          <Button value="list">List View</Button>
          <Button value="columns">Columns</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col items-center gap-1.5 w-full">
        <span className="text-xs text-muted-foreground font-medium">
          Neon Glow
        </span>
        <ButtonGroup variant="glow" defaultValue="all">
          <Button value="all">All Items</Button>
          <Button value="active">Active</Button>
          <Button value="completed">Completed</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export function ButtonGroupIconsDemo() {
  return (
    <ButtonGroup defaultValue="grid">
      <Button value="grid">
        <LayoutGrid className="h-4 w-4" />
        <span>Grid View</span>
      </Button>
      <Button value="list">
        <List className="h-4 w-4" />
        <span>List View</span>
      </Button>
      <Button value="columns">
        <Columns className="h-4 w-4" />
        <span>Columns</span>
      </Button>
    </ButtonGroup>
  )
}

export function ButtonGroupVerticalDemo() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 py-2">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground font-medium">
          Icon Only
        </span>
        <ButtonGroup
          orientation="vertical"
          defaultValue="general"
          className="w-12 p-1 gap-1"
        >
          <Button
            value="general"
            size="icon"
            className="!w-10 !h-10 !p-0 !justify-center"
          >
            <Settings className="h-4 w-4 shrink-0" />
          </Button>
          <Button
            value="security"
            size="icon"
            className="!w-10 !h-10 !p-0 !justify-center"
          >
            <ShieldCheck className="h-4 w-4 shrink-0" />
          </Button>
          <Button
            value="notifications"
            size="icon"
            className="!w-10 !h-10 !p-0 !justify-center"
          >
            <Mail className="h-4 w-4 shrink-0" />
          </Button>
        </ButtonGroup>
      </div>

      <div className="flex flex-col items-center sm:items-start gap-2">
        <span className="text-xs text-muted-foreground font-medium">
          With Labels
        </span>
        <ButtonGroup
          orientation="vertical"
          defaultValue="general"
          className="w-52 p-1 gap-1"
        >
          <Button
            value="general"
            className="!w-full !h-10 !justify-start !text-left !px-3.5"
          >
            <Settings className="h-4 w-4 shrink-0 mr-2" />
            <span>General</span>
          </Button>
          <Button
            value="security"
            className="!w-full !h-10 !justify-start !text-left !px-3.5"
          >
            <ShieldCheck className="h-4 w-4 shrink-0 mr-2" />
            <span>Security</span>
          </Button>
          <Button
            value="notifications"
            className="!w-full !h-10 !justify-start !text-left !px-3.5"
          >
            <Mail className="h-4 w-4 shrink-0 mr-2" />
            <span>Notifications</span>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export function ButtonGroupIconOnlyDemo() {
  return (
    <ButtonGroup defaultValue="bold">
      <Button value="bold" className="!px-2.5">
        <Bold className="h-4 w-4" />
      </Button>
      <Button value="italic" className="!px-2.5">
        <Italic className="h-4 w-4" />
      </Button>
      <Button value="underline" className="!px-2.5">
        <Underline className="h-4 w-4" />
      </Button>
      <Button value="strikethrough" className="!px-2.5">
        <Strikethrough className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  )
}

export function ButtonGroupGlowDemo() {
  return (
    <ButtonGroup variant="glow" defaultValue="analytics">
      <Button value="analytics">
        <TrendingUp className="h-4 w-4" />
        <span>Analytics</span>
      </Button>
      <Button value="reports">
        <FileText className="h-4 w-4" />
        <span>Reports</span>
      </Button>
      <Button value="realtime">
        <Clock className="h-4 w-4" />
        <span>Realtime</span>
      </Button>
    </ButtonGroup>
  )
}

export function ButtonGroupBadgesDemo() {
  return (
    <ButtonGroup defaultValue="all">
      <Button value="all">
        <span className="truncate">All Messages</span>
        <span className="ml-1 text-[10px] opacity-70 shrink-0 font-mono">
          (12)
        </span>
      </Button>
      <Button value="unread">
        <span className="truncate">Unread</span>
        <span className="ml-1 text-[10px] opacity-70 shrink-0 font-mono">
          (3)
        </span>
      </Button>
      <Button value="archived">
        <Loader2 className="h-3.5 w-3.5 animate-spin shrink-0" />
        <span className="truncate">Archived</span>
      </Button>
    </ButtonGroup>
  )
}

export function ButtonGroupRealWorldDemo() {
  const [timeRange, setTimeRange] = React.useState('7d')
  const [viewMode, setViewMode] = React.useState('chart')
  const [env, setEnv] = React.useState('prod')

  const statsMap: Record<string, { rev: string; users: string }> = {
    '24h': { rev: '$12.4k', users: '1.2k' },
    '7d': { rev: '$84.2k', users: '8.9k' },
    '30d': { rev: '$342.8k', users: '34.2k' },
    '1y': { rev: '$4.12M', users: '412k' },
  }
  const stats = statsMap[timeRange] || statsMap['7d']

  return (
    <div className="w-full rounded-xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm text-card-foreground">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm text-foreground">Analytics</h4>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            {env === 'prod' ? 'Prod' : 'Staging'}
          </span>
        </div>

        <ButtonGroup variant="glass" value={env} onValueChange={setEnv}>
          <Button value="prod">Prod</Button>
          <Button value="staging">Staging</Button>
        </ButtonGroup>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 py-3">
        <ButtonGroup value={viewMode} onValueChange={setViewMode}>
          <Button value="chart">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Chart</span>
          </Button>
          <Button value="table">
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Grid</span>
          </Button>
        </ButtonGroup>

        <ButtonGroup value={timeRange} onValueChange={setTimeRange}>
          <Button value="24h">24h</Button>
          <Button value="7d">7d</Button>
          <Button value="30d">30d</Button>
          <Button value="1y">1y</Button>
        </ButtonGroup>
      </div>

      <div className="rounded-md border border-border/60 bg-muted/20 p-3 text-xs">
        {viewMode === 'chart' ? (
          <div className="flex items-center justify-between">
            <div>
              <span className="text-muted-foreground">Revenue: </span>
              <span className="font-bold text-foreground">{stats.rev}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Users: </span>
              <span className="font-bold text-foreground">{stats.users}</span>
            </div>
            <div className="text-emerald-600 dark:text-emerald-400 font-medium">
              +22.5%
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-muted-foreground">
            <span>POST /api/v1/auth</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              200 OK
            </span>
            <span>42ms</span>
          </div>
        )}
      </div>
    </div>
  )
}

export function ButtonGroupVerticalRealWorldDemo() {
  const [activeTab, setActiveTab] = React.useState('files')

  return (
    <div className="w-full rounded-xl border border-border/80 bg-card p-4 shadow-sm text-card-foreground">
      <div className="flex items-center justify-between pb-3 border-b border-border/60 mb-3">
        <h4 className="font-semibold text-sm text-foreground">
          Workspace Sidebar
        </h4>
        <span className="text-[11px] text-muted-foreground font-mono">
          main branch
        </span>
      </div>

      <div className="flex gap-4 items-stretch min-h-[160px]">
        <ButtonGroup
          orientation="vertical"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-12 p-1 gap-1 shrink-0"
        >
          <Button
            value="files"
            size="icon"
            className="!w-10 !h-10 !p-0 !justify-center"
          >
            <Folder className="h-4 w-4 shrink-0" />
          </Button>
          <Button
            value="search"
            size="icon"
            className="!w-10 !h-10 !p-0 !justify-center"
          >
            <Search className="h-4 w-4 shrink-0" />
          </Button>
          <Button
            value="terminal"
            size="icon"
            className="!w-10 !h-10 !p-0 !justify-center"
          >
            <Terminal className="h-4 w-4 shrink-0" />
          </Button>
          <Button
            value="settings"
            size="icon"
            className="!w-10 !h-10 !p-0 !justify-center"
          >
            <Settings className="h-4 w-4 shrink-0" />
          </Button>
        </ButtonGroup>

        <div className="flex-1 rounded-md border border-border/60 bg-muted/20 p-3 text-xs flex flex-col justify-center">
          {activeTab === 'files' && (
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Folder className="h-3.5 w-3.5 text-blue-500" />
                <span>packages/ui/src</span>
              </div>
              <div className="pl-4 text-muted-foreground space-y-1">
                <div className="text-emerald-600 dark:text-emerald-400 font-medium">
                  📄 button-group.tsx
                </div>
                <div>📄 button.tsx</div>
                <div>📄 index.ts</div>
              </div>
            </div>
          )}

          {activeTab === 'search' && (
            <div className="space-y-2">
              <span className="font-semibold text-foreground">
                Global Search
              </span>
              <div className="rounded border border-border bg-background px-2.5 py-1.5 text-muted-foreground flex items-center gap-2 text-xs">
                <Search className="h-3.5 w-3.5" />
                <span>Search symbols, files...</span>
              </div>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="font-mono text-[11px] space-y-1">
              <span className="text-muted-foreground">
                $ pnpm dev --filter docs
              </span>
              <div className="text-emerald-600 dark:text-emerald-400 font-medium">
                ✓ Ready in 240ms at http://localhost:3000
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-1.5">
              <span className="font-semibold text-foreground">
                Workspace Config
              </span>
              <div className="flex items-center justify-between text-muted-foreground pt-1">
                <span>Auto Save</span>
                <span className="text-foreground font-medium">Enabled</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ==========================================
// 12. EMPTY STATE DEMOS (6 Demos)
// ==========================================

export function EmptyDemo() {
  return (
    <Empty className="w-full max-w-sm">
      <EmptyIcon>
        <FolderOpen className="h-6 w-6" />
      </EmptyIcon>
      <EmptyTitle>No Projects Found</EmptyTitle>
      <EmptyDescription>
        You haven't created any workspace projects yet. Get started by creating
        your first project.
      </EmptyDescription>
      <EmptyActions>
        <Button variant="default">Create Project</Button>
      </EmptyActions>
    </Empty>
  )
}

export function EmptySearchDemo() {
  return (
    <Empty className="w-full max-w-sm">
      <EmptyIcon variant="glow">
        <Search className="h-6 w-6" />
      </EmptyIcon>
      <EmptyTitle>No Search Matches</EmptyTitle>
      <EmptyDescription>
        We couldn't find any results matching your search terms. Try checking
        for typos or using different keywords.
      </EmptyDescription>
      <EmptyActions>
        <Button variant="outline">Clear Search Filter</Button>
      </EmptyActions>
    </Empty>
  )
}

export function EmptyInboxDemo() {
  return (
    <Empty variant="glass" className="w-full max-w-sm">
      <EmptyIcon variant="glass">
        <Inbox className="h-6 w-6" />
      </EmptyIcon>
      <EmptyTitle>Your Inbox is Empty</EmptyTitle>
      <EmptyDescription>
        All caught up! You have zero unread notifications or messages in your
        queue.
      </EmptyDescription>
      <EmptyActions>
        <Button variant="glass">Refresh Feed</Button>
      </EmptyActions>
    </Empty>
  )
}

export function EmptyErrorDemo() {
  return (
    <Empty className="w-full max-w-sm">
      <EmptyIcon className="bg-destructive/10 text-destructive border-destructive/20">
        <AlertTriangle className="h-6 w-6" />
      </EmptyIcon>
      <EmptyTitle>Connection Timeout</EmptyTitle>
      <EmptyDescription>
        Unable to sync data with the server. Please verify your network
        connection and try again.
      </EmptyDescription>
      <EmptyActions>
        <Button variant="destructive" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          <span>Retry Connection</span>
        </Button>
      </EmptyActions>
    </Empty>
  )
}

export function EmptyRetroDemo() {
  return (
    <Empty variant="retro" className="w-full max-w-sm">
      <EmptyIcon variant="retro">
        <Layers className="h-6 w-6" />
      </EmptyIcon>
      <EmptyTitle>NO DEPLOYMENTS FOUND</EmptyTitle>
      <EmptyDescription>
        Zero deployment instances registered in your cluster namespace.
        Initialize a container image to deploy.
      </EmptyDescription>
      <EmptyActions>
        <Button variant="retro">INITIALIZE CONTAINER</Button>
      </EmptyActions>
    </Empty>
  )
}

export function EmptyCompactDemo() {
  return (
    <div className="rounded-xl border border-border p-6 text-center w-full max-w-sm bg-card/50">
      <EmptyIcon className="mx-auto h-10 w-10 p-2 mb-3">
        <Globe className="h-5 w-5" />
      </EmptyIcon>
      <h3 className="font-semibold text-sm">No Custom Domains</h3>
      <p className="text-xs text-muted-foreground mt-1 mb-4">
        Connect a custom domain name to customize your app URL.
      </p>
      <Button size="sm" variant="outline">
        Connect Domain
      </Button>
    </div>
  )
}

// ==========================================
// 13. COMBOBOX DEMOS (6 Demos)
// ==========================================

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'vite', label: 'Vite' },
  { value: 'astro', label: 'Astro' },
  { value: 'remix', label: 'Remix' },
  { value: 'nuxt', label: 'Nuxt.js' },
]

const roles = [
  { value: 'admin', label: 'System Admin' },
  { value: 'developer', label: 'Lead Developer' },
  { value: 'designer', label: 'UI/UX Designer' },
  { value: 'viewer', label: 'Read-only Viewer' },
]

// Member details for composed assignee selector
const members = [
  { id: 'alice', name: 'Alice Vance', role: 'System Admin', status: 'active', avatar: 'AV', group: 'Active Members' },
  { id: 'bob', name: 'Bob Smith', role: 'Lead Developer', status: 'active', avatar: 'BS', group: 'Active Members' },
  { id: 'charlie', name: 'Charlie Day', role: 'UI/UX Designer', status: 'away', avatar: 'CD', group: 'Active Members' },
  { id: 'diana', name: 'Diana Prince', role: 'Security Analyst', status: 'dnd', avatar: 'DP', group: 'Active Members' },
  { id: 'eva', name: 'Eva Long', role: 'External Auditor', status: 'offline', avatar: 'EL', group: 'Invited' },
]

// Internal helper component to consume context and filter composed members list
function AssigneeList() {
  const { searchQuery } = React.useContext(ComboboxContext)
  
  const filtered = React.useMemo(() => {
    return members.filter(m => 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const activeGroup = filtered.filter(m => m.group === 'Active Members')
  const invitedGroup = filtered.filter(m => m.group === 'Invited')

  if (filtered.length === 0) {
    return <ComboboxEmpty>No members found.</ComboboxEmpty>
  }

  return (
    <ComboboxList>
      {activeGroup.length > 0 && (
        <ComboboxGroup>
          <ComboboxLabel>Active Members</ComboboxLabel>
          {activeGroup.map(member => (
            <ComboboxItem key={member.id} value={member.id}>
              <div className="relative shrink-0">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary text-[10px] font-semibold flex items-center justify-center border border-primary/20">
                  {member.avatar}
                </div>
                <span className={`absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-background ${
                  member.status === 'active' ? 'bg-emerald-500' :
                  member.status === 'away' ? 'bg-amber-500' :
                  'bg-rose-500'
                }`} />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="font-medium text-foreground text-xs leading-none truncate">{member.name}</span>
                <span className="text-[10px] text-muted-foreground leading-none mt-0.5 truncate">{member.role}</span>
              </div>
            </ComboboxItem>
          ))}
        </ComboboxGroup>
      )}

      {activeGroup.length > 0 && invitedGroup.length > 0 && <ComboboxSeparator />}

      {invitedGroup.length > 0 && (
        <ComboboxGroup>
          <ComboboxLabel>Invited</ComboboxLabel>
          {invitedGroup.map(member => (
            <ComboboxItem key={member.id} value={member.id} className="opacity-60">
              <div className="relative shrink-0">
                <div className="h-6 w-6 rounded-full bg-muted text-muted-foreground text-[10px] font-semibold flex items-center justify-center border border-border">
                  {member.avatar}
                </div>
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="font-medium text-foreground text-xs leading-none truncate">{member.name}</span>
                <span className="text-[10px] text-muted-foreground leading-none mt-0.5 truncate">{member.role}</span>
              </div>
            </ComboboxItem>
          ))}
        </ComboboxGroup>
      )}
    </ComboboxList>
  )
}

export function ComboboxDemo() {
  return (
    <div className="py-2 select-none">
      <Combobox options={frameworks} placeholder="Select framework..." defaultValue="next" />
    </div>
  )
}

export function ComboboxDemoThemes() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-2 select-none">
      <Combobox options={frameworks} placeholder="Default Presets" variant="default" />
      <Combobox options={frameworks} placeholder="Glass Presets" variant="glass" />
      <Combobox options={frameworks} placeholder="Retro Presets" variant="retro" />
      <Combobox options={frameworks} placeholder="Glow Presets" variant="glow" />
    </div>
  )
}

export function ComboboxDemoComposed() {
  const [selectedId, setSelectedId] = React.useState('alice')
  const selectedMember = members.find(m => m.id === selectedId)

  return (
    <div className="flex flex-col gap-2 w-[240px] text-left select-none py-4">
      <Label className="text-xs font-semibold text-foreground/80">Project Assignee</Label>
      <Combobox value={selectedId} onValueChange={setSelectedId}>
        <ComboboxTrigger asChild>
          <Button variant="outline" className="w-[240px] justify-between font-normal" role="combobox">
            {selectedMember ? (
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold flex items-center justify-center border border-primary/20">
                  {selectedMember.avatar}
                </div>
                <span className="text-xs font-medium text-foreground">{selectedMember.name}</span>
              </div>
            ) : (
              <span className="text-xs text-muted-foreground">Select assignee...</span>
            )}
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50 ml-2" />
          </Button>
        </ComboboxTrigger>
        <ComboboxContent className="w-[240px] p-0 shadow-2xl">
          <ComboboxInput placeholder="Search team members..." />
          <AssigneeList />
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

// ==========================================
// 14. DATE PICKER DEMOS (3 Demos)
// ==========================================

export function DatePickerDemo() {
  return <DatePicker placeholder="Pick a date" />
}

export function DatePickerDemoThemes() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-2 select-none">
      <DatePicker placeholder="Default Preset" variant="default" />
      <DatePicker placeholder="Glass Preset" variant="glass" />
      <DatePicker placeholder="Retro Preset" variant="retro" />
      <DatePicker placeholder="Glow Preset" variant="glow" />
    </div>
  )
}

export function DateRangePickerDemo() {
  return <DateRangePicker placeholder="Pick a date range" />
}

// ==========================================
// SHEET DEMOS
// ==========================================
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function SheetSideDemo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="capitalize">{side} Drawer</SheetTitle>
              <SheetDescription>
                This is a slide-over panel appearing from the {side} edge.
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 text-xs text-muted-foreground">
              Configure component options or view side panel context
              information.
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

export function SheetGlassDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="glass">Glass Sheet</Button>
      </SheetTrigger>
      <SheetContent variant="glass">
        <SheetHeader>
          <SheetTitle className="text-foreground">
            Glassmorphic Sheet
          </SheetTitle>
          <SheetDescription>
            Frosted glass slide-over drawer panel with backdrop blur effects.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 text-xs text-muted-foreground">
          Premium frosted glass drawer panel layout.
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SheetRetroDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="retro">RETRO SHEET</Button>
      </SheetTrigger>
      <SheetContent variant="retro">
        <SheetHeader>
          <SheetTitle>NEUBRUTALISM DRAWER</SheetTitle>
          <SheetDescription>
            Hard border shadows and retro brutalist typography.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 text-xs font-mono">
          High-contrast retro design system panel.
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SheetGlowDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="glow">Neon Sheet</Button>
      </SheetTrigger>
      <SheetContent variant="glow">
        <SheetHeader>
          <SheetTitle>Neon Glow Drawer</SheetTitle>
          <SheetDescription>
            Cyberpunk purple aura ambient glow drawer panel.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 text-xs text-muted-foreground">
          Neon ambient backlight slide-over.
        </div>
      </SheetContent>
    </Sheet>
  )
}

// ==========================================
// CONTEXT MENU DEMOS
// ==========================================
export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full max-w-[300px] items-center justify-center rounded-xl border border-dashed border-border bg-card text-xs text-muted-foreground font-medium select-none">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Tools</ContextMenuLabel>
        <ContextMenuItem>
          Inspect Element <ContextMenuShortcut>⌥⌘I</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function ContextMenuGlassDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[140px] w-full max-w-[300px] items-center justify-center rounded-xl border border-white/20 bg-slate-950/60 backdrop-blur-md text-xs text-foreground font-medium select-none">
        Right click (Glass)
      </ContextMenuTrigger>
      <ContextMenuContent variant="glass">
        <ContextMenuItem>
          New Tab <ContextMenuShortcut>⌘T</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          New Window <ContextMenuShortcut>⌘N</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Save Page As... <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function ContextMenuRetroDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[140px] w-full max-w-[300px] items-center justify-center border-2 border-foreground bg-background text-xs font-bold select-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
        RIGHT CLICK (RETRO)
      </ContextMenuTrigger>
      <ContextMenuContent variant="retro">
        <ContextMenuItem>
          COPY FILE <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          PASTE FILE <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          DELETE <ContextMenuShortcut>DEL</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function ContextMenuGlowDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[140px] w-full max-w-[300px] items-center justify-center rounded-xl border border-primary/40 bg-card text-xs text-foreground font-medium select-none shadow-[0_0_15px_rgba(168,85,247,0.2)]">
        Right click (Neon Glow)
      </ContextMenuTrigger>
      <ContextMenuContent variant="glow">
        <ContextMenuItem>Activate Matrix</ContextMenuItem>
        <ContextMenuItem>Cyberpunk Hack</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

// ==========================================
// DATA TABLE DEMOS
// ==========================================
const sampleUsers = [
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice@example.com',
    role: 'Administrator',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Bob Jones',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'Viewer',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'Administrator',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    role: 'Contributor',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Fiona Gallagher',
    email: 'fiona@example.com',
    role: 'Viewer',
    status: 'Inactive',
  },
]

const sampleColumns = [
  {
    key: 'name',
    header: 'Name',
    accessor: (r: any) => <span className="font-semibold">{r.name}</span>,
    sortable: true,
  },
  {
    key: 'email',
    header: 'Email',
    accessor: (r: any) => (
      <span className="text-muted-foreground">{r.email}</span>
    ),
  },
  {
    key: 'role',
    header: 'Role',
    accessor: (r: any) => <span>{r.role}</span>,
    sortable: true,
  },
  {
    key: 'status',
    header: 'Status',
    accessor: (r: any) => (
      <Badge
        variant={r.status === 'Active' ? 'default' : 'secondary'}
        className="text-[10px]"
      >
        {r.status}
      </Badge>
    ),
  },
]

export function DataTableDemo() {
  return (
    <div className="w-full max-w-2xl">
      <DataTable data={sampleUsers} columns={sampleColumns} pageSize={4} />
    </div>
  )
}

export function DataTableGlassDemo() {
  return (
    <div className="w-full max-w-2xl p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20">
      <DataTable
        data={sampleUsers}
        columns={sampleColumns}
        variant="glass"
        pageSize={4}
      />
    </div>
  )
}

export function DataTableRetroDemo() {
  return (
    <div className="w-full max-w-2xl">
      <DataTable
        data={sampleUsers}
        columns={sampleColumns}
        variant="retro"
        pageSize={4}
      />
    </div>
  )
}

export function DataTableGlowDemo() {
  return (
    <div className="w-full max-w-2xl">
      <DataTable
        data={sampleUsers}
        columns={sampleColumns}
        variant="glow"
        pageSize={4}
      />
    </div>
  )
}

// ==========================================
// DASHBOARD BLOCK 02 DEMO
// ==========================================
export function Dashboard02Demo() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border shadow-2xl scale-[0.95] origin-top">
      <DashboardBlock02 />
    </div>
  )
}

export function CheckboxFormDemo() {
  const [newsletters, setNewsletters] = React.useState(true)
  const [promotions, setPromotions] = React.useState(false)
  const [security, setSecurity] = React.useState(true)

  return (
    <div className="w-full max-w-[420px] rounded-xl border border-border bg-card p-5 text-left text-foreground">
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-foreground">Notification Preferences</h4>
        <p className="text-xs text-muted-foreground">Manage how you receive alerts and newsletters.</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/40 transition-colors cursor-pointer select-none" onClick={() => setNewsletters(!newsletters)}>
          <Checkbox id="pref-newsletters" checked={newsletters} onCheckedChange={(checked) => setNewsletters(!!checked)} onClick={(e: any) => e.stopPropagation()} className="mt-1" />
          <div className="space-y-1">
            <Label htmlFor="pref-newsletters" className="text-xs font-semibold pb-0 cursor-pointer">Weekly Newsletters</Label>
            <p className="text-[11px] text-muted-foreground leading-normal">Get a digest of new features, articles, and community updates every Tuesday.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/40 transition-colors cursor-pointer select-none" onClick={() => setPromotions(!promotions)}>
          <Checkbox id="pref-promotions" checked={promotions} onCheckedChange={(checked) => setPromotions(!!checked)} onClick={(e: any) => e.stopPropagation()} className="mt-1" />
          <div className="space-y-1">
            <Label htmlFor="pref-promotions" className="text-xs font-semibold pb-0 cursor-pointer">Promotional Emails</Label>
            <p className="text-[11px] text-muted-foreground leading-normal">Receive updates on discounts, sales, and special offers from our partners.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/40 transition-colors cursor-pointer select-none" onClick={() => setSecurity(!security)}>
          <Checkbox id="pref-security" checked={security} onCheckedChange={(checked) => setSecurity(!!checked)} onClick={(e: any) => e.stopPropagation()} className="mt-1" />
          <div className="space-y-1">
            <Label htmlFor="pref-security" className="text-xs font-semibold pb-0 cursor-pointer">Security & Safety Alerts</Label>
            <p className="text-[11px] text-muted-foreground leading-normal">Get instant alerts about login attempts, security patches, and critical updates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CheckboxCardDemo() {
  const [plans, setPlans] = React.useState<string[]>(['hobby'])

  const togglePlan = (id: string) => {
    if (plans.includes(id)) {
      setPlans(plans.filter((p) => p !== id))
    } else {
      setPlans([...plans, id])
    }
  }

  return (
    <div className="w-full max-w-[500px] py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
        
        {/* Plan 1 */}
        <div 
          onClick={() => togglePlan('hobby')}
          className={`flex flex-col justify-between rounded-xl border p-4 cursor-pointer select-none transition-all h-[130px] ${
            plans.includes('hobby') 
              ? "border-primary bg-primary/[0.02] shadow-[0_0_10px_rgba(168,85,247,0.05)]" 
              : "border-border bg-card hover:bg-muted/40"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-foreground">Hobby Plan</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">For personal projects</p>
            </div>
            <Checkbox 
              id="plan-hobby" 
              checked={plans.includes('hobby')} 
              onCheckedChange={() => togglePlan('hobby')}
              onClick={(e: any) => e.stopPropagation()} 
            />
          </div>
          <div className="mt-auto">
            <span className="text-sm font-bold text-foreground">$12</span>
            <span className="text-[10px] text-muted-foreground"> / month</span>
          </div>
        </div>

        {/* Plan 2 */}
        <div 
          onClick={() => togglePlan('pro')}
          className={`flex flex-col justify-between rounded-xl border p-4 cursor-pointer select-none transition-all h-[130px] ${
            plans.includes('pro') 
              ? "border-primary bg-primary/[0.02] shadow-[0_0_10px_rgba(168,85,247,0.05)]" 
              : "border-border bg-card hover:bg-muted/40"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-foreground">Startup Pro</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">For small teams & scale</p>
            </div>
            <Checkbox 
              id="plan-pro" 
              checked={plans.includes('pro')} 
              onCheckedChange={() => togglePlan('pro')}
              onClick={(e: any) => e.stopPropagation()} 
            />
          </div>
          <div className="mt-auto">
            <span className="text-sm font-bold text-foreground">$49</span>
            <span className="text-[10px] text-muted-foreground"> / month</span>
          </div>
        </div>

      </div>
    </div>
  )
}

// ==========================================
// 41. DIALOG DEMOS
// ==========================================

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile details here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-left">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="modal-name" className="text-right pb-0">Name</Label>
            <Input id="modal-name" defaultValue="Evil Rabbit" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DialogDemoThemes() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-2 select-none">
      {/* 1. Default */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Default Preset</Button>
        </DialogTrigger>
        <DialogContent variant="default">
          <DialogHeader>
            <DialogTitle>Default Dialog</DialogTitle>
            <DialogDescription>Standard dialog style with clean neutral borders.</DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left">
            <p className="text-sm text-muted-foreground">This is the default system variant modal view.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 2. Glass */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="glass">Glass Preset</Button>
        </DialogTrigger>
        <DialogContent variant="glass">
          <DialogHeader>
            <DialogTitle>Glassmorphic Dialog</DialogTitle>
            <DialogDescription>Semi-transparent overlay with a glass backdrop effect.</DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left">
            <p className="text-sm text-muted-foreground">Fits over visual grids, overlays, and color patterns.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 3. Retro */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="retro">Retro Preset</Button>
        </DialogTrigger>
        <DialogContent variant="retro">
          <DialogHeader>
            <DialogTitle className="text-foreground">Neobrutalist Dialog</DialogTitle>
            <DialogDescription className="text-foreground/80">Retro black borders and hard shadow offsets.</DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left text-foreground">
            <p className="text-sm">Retro 90s aesthetic styling layout with mono typography.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="retro">OK</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 4. Glow */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="glow">Glow Preset</Button>
        </DialogTrigger>
        <DialogContent variant="glow">
          <DialogHeader>
            <DialogTitle>Neon Glow Dialog</DialogTitle>
            <DialogDescription>Premium dialog with a glowing purple shadow backdrop.</DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left">
            <p className="text-sm text-muted-foreground">Perfect for glowing accents, highlights, and primary modals.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="default">Dismiss</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// ==========================================
// 42. DRAWER DEMOS
// ==========================================

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer (Right)</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader className="text-left">
          <DrawerTitle>Basic Drawer</DrawerTitle>
          <DrawerDescription>
            This is a standard right-aligned sliding side panel.
          </DrawerDescription>
        </DrawerHeader>
        <div className="py-4 text-sm text-left px-4">
          This panel slides in from the right edge. Use it for forms, filters,
          or additional details.
        </div>
        <DrawerFooter className="mt-auto">
          <DrawerClose asChild>
            <Button className="w-full">Close Drawer</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export function DrawerDemoThemes() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-2 select-none">
      {/* 1. Default */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="default">Default Preset</Button>
        </DrawerTrigger>
        <DrawerContent variant="default">
          <DrawerHeader className="text-left">
            <DrawerTitle>Default Drawer</DrawerTitle>
            <DrawerDescription>Standard sliding drawer panel with default borders.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">This is the default system variant drawer panel.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* 2. Glass */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="glass">Glass Preset</Button>
        </DrawerTrigger>
        <DrawerContent variant="glass">
          <DrawerHeader className="text-left">
            <DrawerTitle>Glassmorphic Drawer</DrawerTitle>
            <DrawerDescription>Translucent frosted glass layout with backdrop blur.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">Fits beautifully over rich graphical overlays and grids.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="glass" className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* 3. Retro */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="retro">Retro Preset</Button>
        </DrawerTrigger>
        <DrawerContent variant="retro">
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-foreground">Neobrutalist Drawer</DrawerTitle>
            <DrawerDescription className="text-foreground/80">Retro black borders and hard shadow offsets.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left text-foreground">
            <p>Retro 90s aesthetic styling layout with monospaced design tokens.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="retro" className="w-full">Dismiss</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* 4. Glow */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="glow">Glow Preset</Button>
        </DrawerTrigger>
        <DrawerContent variant="glow">
          <DrawerHeader className="text-left">
            <DrawerTitle>Neon Glow Drawer</DrawerTitle>
            <DrawerDescription>Premium sliding drawer panel with a glowing purple shadow backdrop.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">Perfect for accent highlights and interactive dashboards.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="glow" className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export function DrawerDemoSides() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-2 select-none">
      {/* 1. Top */}
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button variant="outline">Top Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="top">
          <DrawerHeader className="text-left">
            <DrawerTitle>Top Drawer</DrawerTitle>
            <DrawerDescription>This panel slides in from the top edge.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">Useful for banner notifications, quick search, or full-width actions.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* 2. Bottom */}
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Bottom Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="bottom">
          <DrawerHeader className="text-left">
            <DrawerTitle>Bottom Drawer</DrawerTitle>
            <DrawerDescription>This panel slides in from the bottom edge.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">Standard mobile-friendly overlay layout.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* 3. Left */}
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline">Left Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="left">
          <DrawerHeader className="text-left">
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerDescription>This panel slides in from the left edge.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">Perfect for navigation menus and sidebars.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* 4. Right */}
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">Right Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="right">
          <DrawerHeader className="text-left">
            <DrawerTitle>Right Drawer</DrawerTitle>
            <DrawerDescription>This panel slides in from the right edge.</DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">Great for detail views and settings panels.</p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
