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
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
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
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Progress,
  CircularProgress,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Skeleton,
  SkeletonCircle,
  SkeletonLine,
  SkeletonDashboard,
  Slider,
  Spinner,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
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
  UploadCloud,
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
  Globe,
  Heart,
  MessageSquare,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  Edit,
  GripVertical,
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

export function PaginationDemoNavControls() {
  const [page, setPage] = React.useState(4)
  return (
    <div className="flex flex-col gap-4 w-full max-w-md items-center py-2">
      <PaginationDropdown
        totalPages={10}
        currentPage={page}
        onPageChange={setPage}
        variant="default"
      />
      <PaginationSlider
        totalPages={10}
        currentPage={page}
        onPageChange={setPage}
        variant="default"
      />
    </div>
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
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  )

  return (
    <ScrollArea className="h-48 w-48 rounded-md border border-border bg-card text-foreground">
      <div className="p-4">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Tags
        </h4>
        {tags.map((tag, idx) => (
          <div key={tag}>
            <div className="text-sm py-1.5 font-medium">{tag}</div>
            {idx < tags.length - 1 && (
              <div className="h-[1px] bg-border/50 my-1" />
            )}
          </div>
        ))}
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
        <div className="text-left space-y-1">
          <PopoverTitle>Simple Popover</PopoverTitle>
          <PopoverDescription>
            A customizable floating container for context details.
          </PopoverDescription>
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
        <div className="text-left space-y-1">
          <PopoverTitle>Glassmorphic</PopoverTitle>
          <PopoverDescription>
            Glossy blurred glass card panels.
          </PopoverDescription>
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
      <PopoverContent variant="retro" className="w-56 font-mono">
        <div className="text-left space-y-1">
          <PopoverTitle>Neobrutalist</PopoverTitle>
          <PopoverDescription>
            Brutalist thick boundary card.
          </PopoverDescription>
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
        <div className="text-left space-y-1">
          <PopoverTitle>Neon Glow</PopoverTitle>
          <PopoverDescription>
            Neon backlight border drop shadow card.
          </PopoverDescription>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoCyberpunk() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="cyberpunk"
          className="border-emerald-500/80 bg-emerald-950/20 text-emerald-400 font-mono rounded-none"
        >
          Cyberpunk Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="cyberpunk" className="w-56">
        <div className="text-left space-y-1 font-mono">
          <PopoverTitle className="text-emerald-400">CYBER_POP</PopoverTitle>
          <PopoverDescription className="text-emerald-500/80">
            Terminal aesthetic monospace system layout.
          </PopoverDescription>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverDemoPresets() {
  return (
    <div className="flex flex-wrap items-center gap-4 justify-center p-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Default</Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <div className="text-left space-y-1">
            <PopoverTitle>Default Style</PopoverTitle>
            <PopoverDescription>
              Standard clean popover layout with light/dark tokens.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="glass">Glass</Button>
        </PopoverTrigger>
        <PopoverContent variant="glass" className="w-56">
          <div className="text-left space-y-1">
            <PopoverTitle>Glassmorphic</PopoverTitle>
            <PopoverDescription>
              Glossy blurred translucent card style overlay.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="retro">Retro</Button>
        </PopoverTrigger>
        <PopoverContent variant="retro" className="w-56 font-mono">
          <div className="text-left space-y-1">
            <PopoverTitle>Neobrutalist</PopoverTitle>
            <PopoverDescription>
              Bold borders and solid shadow styling offsets.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="glow">Glow</Button>
        </PopoverTrigger>
        <PopoverContent variant="glow" className="w-56">
          <div className="text-left space-y-1">
            <PopoverTitle>Neon Glow</PopoverTitle>
            <PopoverDescription>
              Backlight border drop shadow highlighting focus.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="cyberpunk"
            className="border-emerald-500/80 bg-emerald-950/20 text-emerald-400 font-mono rounded-none"
          >
            Cyberpunk
          </Button>
        </PopoverTrigger>
        <PopoverContent variant="cyberpunk" className="w-56">
          <div className="text-left space-y-1 font-mono">
            <PopoverTitle className="text-emerald-400">CYBER_POP</PopoverTitle>
            <PopoverDescription className="text-emerald-500/80">
              Terminal aesthetic monospace system layout.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>
    </div>
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
          <PopoverTitle className="text-xs font-bold">
            System Settings
          </PopoverTitle>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-[11px]" htmlFor="pop-sw-1-basic">
                Auto Update
              </Label>
              <Switch id="pop-sw-1-basic" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[11px]" htmlFor="pop-sw-2-basic">
                Developer Mode
              </Label>
              <Switch id="pop-sw-2-basic" />
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
        <div className="flex items-center gap-2 cursor-pointer bg-card border rounded p-1.5 w-fit">
          <span
            className="h-4 w-4 rounded-full border border-white/20"
            style={{ backgroundColor: selected }}
          />
          <span className="text-xs font-semibold text-foreground">
            Color Picker
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <div className="text-left space-y-2">
          <PopoverTitle className="text-xs font-bold">
            Select Accent Color
          </PopoverTitle>
          <div className="flex gap-2 flex-wrap">
            {colors.map((c) => (
              <span
                key={c}
                onClick={() => setSelected(c)}
                className={
                  'h-5 w-5 rounded-full cursor-pointer border-2 transition-all hover:scale-110 ' +
                  (selected === c ? 'border-foreground' : 'border-transparent')
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
          <PopoverTitle className="text-xs font-bold">Your Cart</PopoverTitle>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            <div className="flex justify-between text-xs border-b border-border/30 pb-1.5 text-foreground">
              <span>Switch Component</span>
              <span className="font-bold">$12</span>
            </div>
            <div className="flex justify-between text-xs text-foreground">
              <span>Card Component</span>
              <span className="font-bold">$15</span>
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
          <PopoverTitle className="text-xs font-bold">
            Send Feedback
          </PopoverTitle>
          <textarea
            className="w-full h-16 bg-muted border border-border rounded text-xs p-2 text-foreground outline-none focus:border-primary/50"
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
          <PopoverTitle className="text-xs font-bold">
            Share page link
          </PopoverTitle>
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
          <PopoverTitle className="text-rose-400">
            Are you absolutely sure?
          </PopoverTitle>
          <PopoverDescription>
            Deleting this repository will wipe all registry packages forever.
          </PopoverDescription>
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

export function PopoverDemoPremiumGroup1() {
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
    <div className="flex flex-wrap items-center gap-4 justify-center p-6">
      {/* 1. System Settings Config Panel */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="text-left space-y-3">
            <PopoverTitle className="text-xs font-bold">
              System Settings
            </PopoverTitle>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-[11px]" htmlFor="pop-sw-1-g1">
                  Auto Update
                </Label>
                <Switch id="pop-sw-1-g1" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-[11px]" htmlFor="pop-sw-2-g1">
                  Developer Mode
                </Label>
                <Switch id="pop-sw-2-g1" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* 2. Accent Color Palette Selector */}
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer bg-card border rounded p-1.5">
            <span
              className="h-4 w-4 rounded-full border border-white/20"
              style={{ backgroundColor: selected }}
            />
            <span className="text-xs font-semibold text-foreground">
              Color Picker
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-52">
          <div className="text-left space-y-2">
            <PopoverTitle className="text-xs font-bold">
              Select Accent Color
            </PopoverTitle>
            <div className="flex gap-2 flex-wrap">
              {colors.map((c) => (
                <span
                  key={c}
                  onClick={() => setSelected(c)}
                  className={
                    'h-5 w-5 rounded-full cursor-pointer border-2 transition-all hover:scale-110 ' +
                    (selected === c
                      ? 'border-foreground'
                      : 'border-transparent')
                  }
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* 3. Interactive Feedback Form */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <HelpCircle className="h-4 w-4 mr-1.5" />
            Help
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="text-left space-y-2.5">
            <PopoverTitle className="text-xs font-bold">
              Send Feedback
            </PopoverTitle>
            <textarea
              className="w-full h-16 bg-muted border border-border rounded text-xs p-2 text-foreground outline-none focus:border-primary/50"
              placeholder="Tell us what you think..."
            />
            <Button className="w-full h-8 text-xs">Submit</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function PopoverDemoPremiumGroup2() {
  const [copied, setCopied] = React.useState(false)
  const link = 'https://vibe-ui-kit.vercel.app/'

  return (
    <div className="flex flex-wrap items-center gap-4 justify-center p-6">
      {/* 1. Shopping mini-cart checkout dropdown */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">View Cart (2)</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" variant="glass">
          <div className="text-left space-y-3">
            <PopoverTitle className="text-xs font-bold">Your Cart</PopoverTitle>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              <div className="flex justify-between text-xs border-b border-border/30 pb-1.5 text-foreground">
                <span>Switch Component</span>
                <span className="font-bold">$12</span>
              </div>
              <div className="flex justify-between text-xs text-foreground">
                <span>Card Component</span>
                <span className="font-bold">$15</span>
              </div>
            </div>
            <Button className="w-full h-8 text-[11px] font-semibold mt-1">
              Checkout
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* 2. URL Share copied links panel */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Share link</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="text-left space-y-2">
            <PopoverTitle className="text-xs font-bold">
              Share page link
            </PopoverTitle>
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

      {/* 3. Glow destructive validation check */}
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
            <PopoverTitle className="text-rose-400">
              Are you absolutely sure?
            </PopoverTitle>
            <PopoverDescription>
              Deleting this repository will wipe all registry packages forever.
            </PopoverDescription>
            <Button
              variant="destructive"
              className="w-full h-8 text-[11px] font-semibold bg-rose-600"
            >
              Delete Project
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

// ==========================================
// 7. TOAST DEMOS (10 Examples)
// ==========================================

export function ToastDemoBasic() {
  return (
    <ToastProvider>
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
    </ToastProvider>
  )
}

export function ToastDemoGlass() {
  return (
    <ToastProvider>
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
    </ToastProvider>
  )
}

export function ToastDemoRetro() {
  return (
    <ToastProvider>
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
    </ToastProvider>
  )
}

export function ToastDemoGlow() {
  return (
    <ToastProvider>
      <Toast variant="glow" open={true}>
        <div className="grid gap-1 text-left">
          <ToastTitle>Neon Glow Active</ToastTitle>
          <ToastDescription>Ambient drop shadows lighting up.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport
        position="inline"
        className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
      />
    </ToastProvider>
  )
}

export function ToastDemoCyberpunk() {
  return (
    <ToastProvider>
      <Toast variant="cyberpunk" open={true}>
        <div className="grid gap-1 text-left">
          <ToastTitle>CYBERPUNK ACTIVATED</ToastTitle>
          <ToastDescription>EMERALD SCANLINES ENGAGED.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport
        position="inline"
        className="relative bottom-auto right-auto top-auto p-0 max-w-full z-0 flex flex-col gap-2"
      />
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
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Neon Streets',
      location: 'Tokyo, Japan',
      image:
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Ocean Breeze',
      location: 'Maldives',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Desert Dunes',
      location: 'Sahara Desert',
      image:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Forest Pathways',
      location: 'Redwood National Park',
      image:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
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
        <Label
          htmlFor="premium-infinite-switch"
          className="text-xs font-semibold cursor-pointer select-none"
        >
          Infinite Loop
        </Label>
      </div>

      <Carousel
        key={isInfinite ? 'infinite' : 'standard'}
        className="w-full"
        loop={isInfinite}
        opts={{ align: 'start' }}
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
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
                      <h4 className="font-bold text-sm text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                      >
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
  {
    id: 'alice',
    name: 'Alice Vance',
    role: 'System Admin',
    status: 'active',
    avatar: 'AV',
    group: 'Active Members',
  },
  {
    id: 'bob',
    name: 'Bob Smith',
    role: 'Lead Developer',
    status: 'active',
    avatar: 'BS',
    group: 'Active Members',
  },
  {
    id: 'charlie',
    name: 'Charlie Day',
    role: 'UI/UX Designer',
    status: 'away',
    avatar: 'CD',
    group: 'Active Members',
  },
  {
    id: 'diana',
    name: 'Diana Prince',
    role: 'Security Analyst',
    status: 'dnd',
    avatar: 'DP',
    group: 'Active Members',
  },
  {
    id: 'eva',
    name: 'Eva Long',
    role: 'External Auditor',
    status: 'offline',
    avatar: 'EL',
    group: 'Invited',
  },
]

// Internal helper component to consume context and filter composed members list
function AssigneeList() {
  const { searchQuery } = React.useContext(ComboboxContext)

  const filtered = React.useMemo(() => {
    return members.filter(
      (m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  const activeGroup = filtered.filter((m) => m.group === 'Active Members')
  const invitedGroup = filtered.filter((m) => m.group === 'Invited')

  if (filtered.length === 0) {
    return <ComboboxEmpty>No members found.</ComboboxEmpty>
  }

  return (
    <ComboboxList>
      {activeGroup.length > 0 && (
        <ComboboxGroup>
          <ComboboxLabel>Active Members</ComboboxLabel>
          {activeGroup.map((member) => (
            <ComboboxItem key={member.id} value={member.id}>
              <div className="relative shrink-0">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary text-[10px] font-semibold flex items-center justify-center border border-primary/20">
                  {member.avatar}
                </div>
                <span
                  className={`absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-background ${
                    member.status === 'active'
                      ? 'bg-emerald-500'
                      : member.status === 'away'
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                  }`}
                />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="font-medium text-foreground text-xs leading-none truncate">
                  {member.name}
                </span>
                <span className="text-[10px] text-muted-foreground leading-none mt-0.5 truncate">
                  {member.role}
                </span>
              </div>
            </ComboboxItem>
          ))}
        </ComboboxGroup>
      )}

      {activeGroup.length > 0 && invitedGroup.length > 0 && (
        <ComboboxSeparator />
      )}

      {invitedGroup.length > 0 && (
        <ComboboxGroup>
          <ComboboxLabel>Invited</ComboboxLabel>
          {invitedGroup.map((member) => (
            <ComboboxItem
              key={member.id}
              value={member.id}
              className="opacity-60"
            >
              <div className="relative shrink-0">
                <div className="h-6 w-6 rounded-full bg-muted text-muted-foreground text-[10px] font-semibold flex items-center justify-center border border-border">
                  {member.avatar}
                </div>
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="font-medium text-foreground text-xs leading-none truncate">
                  {member.name}
                </span>
                <span className="text-[10px] text-muted-foreground leading-none mt-0.5 truncate">
                  {member.role}
                </span>
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
      <Combobox
        options={frameworks}
        placeholder="Select framework..."
        defaultValue="next"
      />
    </div>
  )
}

export function ComboboxDemoThemes() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-2 select-none">
      <Combobox
        options={frameworks}
        placeholder="Default Presets"
        variant="default"
      />
      <Combobox
        options={frameworks}
        placeholder="Glass Presets"
        variant="glass"
      />
      <Combobox
        options={frameworks}
        placeholder="Retro Presets"
        variant="retro"
      />
      <Combobox
        options={frameworks}
        placeholder="Glow Presets"
        variant="glow"
      />
    </div>
  )
}

export function ComboboxDemoComposed() {
  const [selectedId, setSelectedId] = React.useState('alice')
  const selectedMember = members.find((m) => m.id === selectedId)

  return (
    <div className="flex flex-col gap-2 w-[240px] text-left select-none py-4">
      <Label className="text-xs font-semibold text-foreground/80">
        Project Assignee
      </Label>
      <Combobox value={selectedId} onValueChange={setSelectedId}>
        <ComboboxTrigger asChild>
          <Button
            variant="outline"
            className="w-[240px] justify-between font-normal"
            role="combobox"
          >
            {selectedMember ? (
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold flex items-center justify-center border border-primary/20">
                  {selectedMember.avatar}
                </div>
                <span className="text-xs font-medium text-foreground">
                  {selectedMember.name}
                </span>
              </div>
            ) : (
              <span className="text-xs text-muted-foreground">
                Select assignee...
              </span>
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
      <ContextMenuTrigger className="flex h-[140px] w-full max-w-[300px] items-center justify-center rounded-xl border border-border/80 bg-white/20 dark:bg-black/20 backdrop-blur-md hover:bg-white/30 dark:hover:bg-black/30 text-xs text-foreground font-medium select-none">
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

export function ContextMenuCyberpunkDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[140px] w-full max-w-[300px] items-center justify-center border border-emerald-500/30 bg-black text-xs font-mono text-emerald-500 select-none shadow-[0_0_15px_rgba(16,185,129,0.15)] rounded-none">
        RIGHT CLICK (CYBERPUNK)
      </ContextMenuTrigger>
      <ContextMenuContent variant="cyberpunk">
        <ContextMenuItem>SYSTEM_SCAN</ContextMenuItem>
        <ContextMenuItem>BYPASS_FIREWALL</ContextMenuItem>
        <ContextMenuSeparator className="bg-emerald-500/30" />
        <ContextMenuItem>TERMINATE_SESSION</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
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
        <h4 className="text-sm font-semibold text-foreground">
          Notification Preferences
        </h4>
        <p className="text-xs text-muted-foreground">
          Manage how you receive alerts and newsletters.
        </p>
      </div>

      <div className="space-y-4">
        <div
          className="flex items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/40 transition-colors cursor-pointer select-none"
          onClick={() => setNewsletters(!newsletters)}
        >
          <Checkbox
            id="pref-newsletters"
            checked={newsletters}
            onCheckedChange={(checked) => setNewsletters(!!checked)}
            onClick={(e: any) => e.stopPropagation()}
            className="mt-1"
          />
          <div className="space-y-1">
            <Label
              htmlFor="pref-newsletters"
              className="text-xs font-semibold pb-0 cursor-pointer"
            >
              Weekly Newsletters
            </Label>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Get a digest of new features, articles, and community updates
              every Tuesday.
            </p>
          </div>
        </div>

        <div
          className="flex items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/40 transition-colors cursor-pointer select-none"
          onClick={() => setPromotions(!promotions)}
        >
          <Checkbox
            id="pref-promotions"
            checked={promotions}
            onCheckedChange={(checked) => setPromotions(!!checked)}
            onClick={(e: any) => e.stopPropagation()}
            className="mt-1"
          />
          <div className="space-y-1">
            <Label
              htmlFor="pref-promotions"
              className="text-xs font-semibold pb-0 cursor-pointer"
            >
              Promotional Emails
            </Label>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Receive updates on discounts, sales, and special offers from our
              partners.
            </p>
          </div>
        </div>

        <div
          className="flex items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/40 transition-colors cursor-pointer select-none"
          onClick={() => setSecurity(!security)}
        >
          <Checkbox
            id="pref-security"
            checked={security}
            onCheckedChange={(checked) => setSecurity(!!checked)}
            onClick={(e: any) => e.stopPropagation()}
            className="mt-1"
          />
          <div className="space-y-1">
            <Label
              htmlFor="pref-security"
              className="text-xs font-semibold pb-0 cursor-pointer"
            >
              Security & Safety Alerts
            </Label>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Get instant alerts about login attempts, security patches, and
              critical updates.
            </p>
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
              ? 'border-primary bg-primary/[0.02] shadow-[0_0_10px_rgba(168,85,247,0.05)]'
              : 'border-border bg-card hover:bg-muted/40'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-foreground">
                Hobby Plan
              </span>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                For personal projects
              </p>
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
              ? 'border-primary bg-primary/[0.02] shadow-[0_0_10px_rgba(168,85,247,0.05)]'
              : 'border-border bg-card hover:bg-muted/40'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-foreground">
                Startup Pro
              </span>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                For small teams & scale
              </p>
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
          <DialogDescription>
            Make changes to your profile details here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-left">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="modal-name" className="text-right pb-0">
              Name
            </Label>
            <Input
              id="modal-name"
              defaultValue="Evil Rabbit"
              className="col-span-3"
            />
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
            <DialogDescription>
              Standard dialog style with clean neutral borders.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left">
            <p className="text-sm text-muted-foreground">
              This is the default system variant modal view.
            </p>
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
            <DialogDescription>
              Semi-transparent overlay with a glass backdrop effect.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left">
            <p className="text-sm text-muted-foreground">
              Fits over visual grids, overlays, and color patterns.
            </p>
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
            <DialogTitle className="text-foreground">
              Neobrutalist Dialog
            </DialogTitle>
            <DialogDescription className="text-foreground/80">
              Retro black borders and hard shadow offsets.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left text-foreground">
            <p className="text-sm">
              Retro 90s aesthetic styling layout with mono typography.
            </p>
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
            <DialogDescription>
              Premium dialog with a glowing purple shadow backdrop.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-left">
            <p className="text-sm text-muted-foreground">
              Perfect for glowing accents, highlights, and primary modals.
            </p>
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
            <DrawerDescription>
              Standard sliding drawer panel with default borders.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">
              This is the default system variant drawer panel.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">
                Close
              </Button>
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
            <DrawerDescription>
              Translucent frosted glass layout with backdrop blur.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">
              Fits beautifully over rich graphical overlays and grids.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="glass" className="w-full">
                Close
              </Button>
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
            <DrawerTitle className="text-foreground">
              Neobrutalist Drawer
            </DrawerTitle>
            <DrawerDescription className="text-foreground/80">
              Retro black borders and hard shadow offsets.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left text-foreground">
            <p>
              Retro 90s aesthetic styling layout with monospaced design tokens.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="retro" className="w-full">
                Dismiss
              </Button>
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
            <DrawerDescription>
              Premium sliding drawer panel with a glowing purple shadow
              backdrop.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">
              Perfect for accent highlights and interactive dashboards.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="glow" className="w-full">
                Close
              </Button>
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
            <DrawerDescription>
              This panel slides in from the top edge.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">
              Useful for banner notifications, quick search, or full-width
              actions.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">
                Close
              </Button>
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
            <DrawerDescription>
              This panel slides in from the bottom edge.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">
              Standard mobile-friendly overlay layout.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">
                Close
              </Button>
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
            <DrawerDescription>
              This panel slides in from the left edge.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">
              Perfect for navigation menus and sidebars.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">
                Close
              </Button>
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
            <DrawerDescription>
              This panel slides in from the right edge.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 px-4 text-sm text-left">
            <p className="text-muted-foreground">
              Great for detail views and settings panels.
            </p>
          </div>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="default" className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export function DropdownMenuHoverDemo() {
  const [open, setOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="glass"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover to Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <DropdownMenuLabel>Hover Mode</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ProgressDemoPresets() {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Horizontal Presets
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Default
            </span>
            <Progress value={60} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Glassmorphic
            </span>
            <Progress value={45} variant="glass" indicatorVariant="glass" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Retro Neobrutalist
            </span>
            <Progress value={75} variant="retro" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Neon Glow
            </span>
            <Progress value={85} variant="glow" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-xs font-medium text-muted-foreground">
              Cyberpunk Terminal
            </span>
            <Progress value={30} variant="cyberpunk" />
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-4 flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Circular Presets
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-items-center">
          <div className="flex flex-col items-center gap-1.5">
            <CircularProgress value={60} showValue size={60} strokeWidth={5} />
            <span className="text-[11px] font-medium text-muted-foreground">
              Default
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <CircularProgress
              value={45}
              variant="glass"
              indicatorVariant="glass"
              showValue
              size={60}
              strokeWidth={5}
            />
            <span className="text-[11px] font-medium text-muted-foreground">
              Glass
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <CircularProgress
              value={75}
              variant="retro"
              showValue
              size={60}
              strokeWidth={5}
            />
            <span className="text-[11px] font-medium text-muted-foreground">
              Retro
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <CircularProgress
              value={85}
              variant="glow"
              showValue
              size={60}
              strokeWidth={5}
            />
            <span className="text-[11px] font-medium text-muted-foreground">
              Glow
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 col-span-2 sm:col-span-1">
            <CircularProgress
              value={30}
              variant="cyberpunk"
              showValue
              size={60}
              strokeWidth={5}
            />
            <span className="text-[11px] font-medium text-muted-foreground">
              Cyberpunk
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProgressDemoBasic() {
  return <Progress value={50} className="w-full max-w-md" />
}

export function RadioGroupDemoBasic() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="basic-option-one" />
        <Label htmlFor="basic-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="basic-option-two" />
        <Label htmlFor="basic-option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}

export function RadioGroupDemoPresets() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-4xl mx-auto shadow-sm">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Default style
        </span>
        <RadioGroup defaultValue="1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="presets-def-1" />
            <Label htmlFor="presets-def-1">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="presets-def-2" />
            <Label htmlFor="presets-def-2">Option B</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Glassmorphic
        </span>
        <RadioGroup defaultValue="1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="presets-glass-1" variant="glass" />
            <Label htmlFor="presets-glass-1">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="presets-glass-2" variant="glass" />
            <Label htmlFor="presets-glass-2">Option B</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Retro Neobrutalist
        </span>
        <RadioGroup defaultValue="1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="presets-retro-1" variant="retro" />
            <Label htmlFor="presets-retro-1">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="presets-retro-2" variant="retro" />
            <Label htmlFor="presets-retro-2">Option B</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Neon Glow
        </span>
        <RadioGroup defaultValue="1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="presets-glow-1" variant="glow" />
            <Label htmlFor="presets-glow-1">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="presets-glow-2" variant="glow" />
            <Label htmlFor="presets-glow-2">Option B</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-1">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Cyberpunk Monospace
        </span>
        <RadioGroup defaultValue="1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="1"
              id="presets-cyber-1"
              variant="cyberpunk"
            />
            <Label
              htmlFor="presets-cyber-1"
              className="font-mono text-emerald-500"
            >
              OPTION_A
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="presets-cyber-2"
              variant="cyberpunk"
            />
            <Label
              htmlFor="presets-cyber-2"
              className="font-mono text-emerald-500"
            >
              OPTION_B
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export function RadioGroupInteractiveDemo() {
  const [variant, setVariant] = React.useState<
    'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('default')
  const [layout, setLayout] = React.useState<'vertical' | 'horizontal'>(
    'vertical',
  )
  const [selectedValue, setSelectedValue] = React.useState('pro')

  const containerClass = {
    default: 'p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm',
    glass:
      'p-6 rounded-xl border border-white/20 bg-white/10 dark:bg-black/30 backdrop-blur-md',
    retro:
      'p-6 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none',
    glow: 'p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 dark:bg-purple-950/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]',
    cyberpunk:
      'p-6 border border-emerald-500/30 bg-emerald-950/10 dark:bg-black rounded-none font-mono text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
  }[variant]

  return (
    <div className="flex flex-col gap-8 p-6 rounded-2xl border border-border bg-card/10 backdrop-blur-xs w-full max-w-2xl mx-auto shadow-sm">
      {/* Config Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-border/50">
        {/* Variant selector */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Select Preset Variant
          </span>
          <div className="flex flex-wrap gap-2">
            {(['default', 'glass', 'retro', 'glow', 'cyberpunk'] as const).map(
              (v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    'px-2.5 py-1 text-xs font-semibold rounded-md border border-border transition-all cursor-pointer capitalize',
                    variant === v
                      ? 'bg-primary text-primary-foreground border-transparent shadow-sm'
                      : 'bg-background hover:bg-muted text-muted-foreground hover:text-foreground',
                  )}
                >
                  {v}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Layout switcher */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Layout Orientation
          </span>
          <div className="flex gap-2">
            {(['vertical', 'horizontal'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLayout(l)}
                className={cn(
                  'px-2.5 py-1 text-xs font-semibold rounded-md border border-border transition-all cursor-pointer capitalize',
                  layout === l
                    ? 'bg-primary text-primary-foreground border-transparent shadow-sm'
                    : 'bg-background hover:bg-muted text-muted-foreground hover:text-foreground',
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Component under test */}
      <div className="flex flex-col items-center justify-center py-4">
        <div
          className={cn(
            'w-full max-w-md transition-all duration-300',
            containerClass,
          )}
        >
          <div className="mb-4">
            <h3
              className={cn(
                'text-sm font-semibold text-foreground',
                variant === 'cyberpunk' &&
                  'text-emerald-500 font-mono uppercase tracking-wider',
              )}
            >
              Subscription Billing
            </h3>
            <p
              className={cn(
                'text-xs text-muted-foreground mt-0.5',
                variant === 'cyberpunk' && 'text-emerald-500/70 font-mono',
              )}
            >
              Choose a pricing tier for your project
            </p>
          </div>

          <RadioGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
            className={cn(
              layout === 'horizontal'
                ? 'flex flex-row gap-6 flex-wrap'
                : 'grid gap-3',
            )}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="starter"
                id="int-radio-starter"
                variant={variant}
              />
              <Label
                htmlFor="int-radio-starter"
                className={cn(
                  'cursor-pointer text-sm font-medium text-foreground',
                  variant === 'cyberpunk' && 'font-mono text-emerald-500',
                )}
              >
                Starter Pack ($10)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="pro"
                id="int-radio-pro"
                variant={variant}
              />
              <Label
                htmlFor="int-radio-pro"
                className={cn(
                  'cursor-pointer text-sm font-medium text-foreground',
                  variant === 'cyberpunk' && 'font-mono text-emerald-500',
                )}
              >
                Professional ($30)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="enterprise"
                id="int-radio-enterprise"
                variant={variant}
              />
              <Label
                htmlFor="int-radio-enterprise"
                className={cn(
                  'cursor-pointer text-sm font-medium text-foreground',
                  variant === 'cyberpunk' && 'font-mono text-emerald-500',
                )}
              >
                Enterprise ($90)
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export function ScrollAreaDemoPresets() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          Default
        </span>
        <ScrollArea className="h-40 border border-border bg-card rounded-md">
          <div className="p-3">
            {tags.slice(0, 10).map((tag) => (
              <div key={tag} className="text-xs py-1 font-medium">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          Glassmorphic
        </span>
        <ScrollArea
          variant="glass"
          className="h-40 border border-white/20 bg-white/5 dark:bg-black/20 rounded-md"
        >
          <div className="p-3">
            {tags.slice(0, 10).map((tag) => (
              <div key={tag} className="text-xs py-1 font-medium">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          Retro
        </span>
        <ScrollArea
          variant="retro"
          className="h-40 border-2 border-foreground bg-background rounded-none"
        >
          <div className="p-3">
            {tags.slice(0, 10).map((tag) => (
              <div key={tag} className="text-xs py-1 font-bold font-mono">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          Glow
        </span>
        <ScrollArea
          variant="glow"
          className="h-40 border border-purple-500/20 bg-purple-500/5 dark:bg-purple-950/10 shadow-[0_0_10px_rgba(168,85,247,0.1)] rounded-md"
        >
          <div className="p-3">
            {tags.slice(0, 10).map((tag) => (
              <div
                key={tag}
                className="text-xs py-1 font-medium text-purple-600 dark:text-purple-400"
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          Cyberpunk
        </span>
        <ScrollArea
          variant="cyberpunk"
          className="h-40 border border-emerald-500/30 bg-emerald-950/10 dark:bg-black rounded-none"
        >
          <div className="p-3">
            {tags.slice(0, 10).map((tag) => (
              <div
                key={tag}
                className="text-xs py-1 font-mono text-emerald-500"
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export function SeparatorDemoBasic() {
  return (
    <div className="w-full max-w-xs p-4 rounded-xl border border-border bg-card text-foreground">
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-foreground">Radix Primitives</h4>
        <p className="text-xs text-muted-foreground leading-normal">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-4 items-center gap-3 text-xs font-medium text-muted-foreground">
        <span className="hover:text-foreground cursor-pointer transition-colors">
          Blog
        </span>
        <Separator orientation="vertical" />
        <span className="hover:text-foreground cursor-pointer transition-colors">
          Docs
        </span>
        <Separator orientation="vertical" />
        <span className="hover:text-foreground cursor-pointer transition-colors">
          Source
        </span>
      </div>
    </div>
  )
}

export function SeparatorDemoPresets() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm shadow-sm mx-auto">
      {/* Horizontal presets */}
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Horizontal Presets
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] text-muted-foreground font-medium">
              Default
            </span>
            <Separator variant="default" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] text-muted-foreground font-medium">
              Glassmorphic
            </span>
            <Separator variant="glass" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] text-muted-foreground font-medium">
              Retro Neobrutalist
            </span>
            <Separator variant="retro" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] text-muted-foreground font-medium">
              Neon Glow
            </span>
            <Separator variant="glow" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] text-muted-foreground font-medium">
              Cyberpunk Terminal
            </span>
            <Separator variant="cyberpunk" />
          </div>
        </div>
      </div>

      {/* Vertical presets */}
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Vertical Presets
        </span>
        <div className="flex justify-around items-stretch h-24 p-3">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] text-muted-foreground font-mono">
              DEF
            </span>
            <Separator orientation="vertical" variant="default" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] text-muted-foreground font-mono">
              GLS
            </span>
            <Separator orientation="vertical" variant="glass" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] text-muted-foreground font-mono">
              RTR
            </span>
            <Separator orientation="vertical" variant="retro" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] text-muted-foreground font-mono">
              GLW
            </span>
            <Separator orientation="vertical" variant="glow" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] text-muted-foreground font-mono">
              CYB
            </span>
            <Separator orientation="vertical" variant="cyberpunk" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SelectDemoBasic() {
  return (
    <div className="w-[200px] max-w-full">
      <Select defaultValue="react">
        <SelectTrigger>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="nextjs">Next.js</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export function SelectDemoPresets() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-4xl mx-auto shadow-sm">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Default style
        </span>
        <Select defaultValue="react">
          <SelectTrigger>
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Glassmorphic
        </span>
        <Select defaultValue="react" variant="glass">
          <SelectTrigger>
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Retro Neobrutalist
        </span>
        <Select defaultValue="react" variant="retro">
          <SelectTrigger>
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Neon Glow
        </span>
        <Select defaultValue="react" variant="glow">
          <SelectTrigger>
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-1">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Cyberpunk Monospace
        </span>
        <Select defaultValue="react" variant="cyberpunk">
          <SelectTrigger>
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">REACT_JS</SelectItem>
            <SelectItem value="vue">VUE_JS</SelectItem>
            <SelectItem value="svelte">SVELTE_JS</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export function SkeletonDemoBasic() {
  return (
    <div className="flex items-center space-x-4 w-[280px] max-w-full mx-auto text-left">
      <SkeletonCircle size={48} />
      <div className="space-y-2 flex-1">
        <SkeletonLine height="1rem" className="w-5/6" />
        <SkeletonLine height="0.75rem" className="w-2/3" />
      </div>
    </div>
  )
}

export function SkeletonDemoPresets() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-3xl mx-auto shadow-sm">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Pulse (Default)
        </span>
        <Skeleton className="h-12 w-full" variant="pulse" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Shimmer (Wave)
        </span>
        <Skeleton className="h-12 w-full" variant="shimmer" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Neon Glow
        </span>
        <Skeleton className="h-12 w-full" variant="glow" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Glassmorphic
        </span>
        <Skeleton className="h-12 w-full" variant="glass" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Retro Brutalist
        </span>
        <Skeleton className="h-12 w-full" variant="retro" />
      </div>
    </div>
  )
}

export function SkeletonDemoPremium() {
  return (
    <div className="w-full">
      <SkeletonDashboard />
    </div>
  )
}

export function SliderDemoBasic() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  )
}

export function SliderDemoPresets() {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">
          Default style
        </span>
        <Slider defaultValue={[40]} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">
          Glassmorphic
        </span>
        <Slider defaultValue={[60]} variant="glass" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">
          Retro Neobrutalist
        </span>
        <Slider defaultValue={[50]} variant="retro" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">
          Neon Glow
        </span>
        <Slider defaultValue={[75]} variant="glow" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">
          Cyberpunk Monospace
        </span>
        <Slider defaultValue={[30]} variant="cyberpunk" />
      </div>
    </div>
  )
}

export function SliderDemoInteractive() {
  const [value, setValue] = React.useState<number[]>([20, 80])
  return (
    <div className="flex flex-col gap-8 w-full max-w-xl mx-auto p-6 rounded-xl border border-border bg-card/30 shadow-sm">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-xs font-semibold text-foreground">
          <span>Range Slider (Double Handle)</span>
          <span className="font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">
            {value[0]} - {value[1]}
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
          step={1}
          showTooltip
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-foreground text-center">
          Discrete Steps & Ticks
        </span>
        <Slider
          defaultValue={[40]}
          min={0}
          max={100}
          step={20}
          marks={[
            { value: 0, label: '0%' },
            { value: 20, label: '20%' },
            { value: 40, label: '40%' },
            { value: 60, label: '60%' },
            { value: 80, label: '80%' },
            { value: 100, label: '100%' },
          ]}
          showTooltip
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold text-foreground text-center">
          Vertical Sliders (Single & Double Dot)
        </span>
        <div className="h-64 flex justify-center items-center gap-12 py-4">
          <div className="flex flex-col items-center gap-2 h-full">
            <span className="text-[10px] text-muted-foreground font-medium">
              Single Dot
            </span>
            <Slider
              defaultValue={[50]}
              min={0}
              max={100}
              step={1}
              orientation="vertical"
              showTooltip
            />
          </div>
          <div className="flex flex-col items-center gap-2 h-full">
            <span className="text-[10px] text-muted-foreground font-medium">
              Double Dot
            </span>
            <Slider
              defaultValue={[30, 70]}
              min={0}
              max={100}
              step={1}
              orientation="vertical"
              showTooltip
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SpinnerDemoBasic() {
  return (
    <div className="flex items-center gap-3 justify-center py-4">
      <Spinner variant="glow" size="md" />
      <span className="text-sm font-semibold text-foreground">
        Loading workspace...
      </span>
    </div>
  )
}

export function SpinnerDemoPresets() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-3xl mx-auto shadow-sm">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Default
        </span>
        <Spinner variant="default" size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Glassmorphic
        </span>
        <Spinner variant="glass" size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Retro Brutalist
        </span>
        <Spinner variant="retro" size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Neon Glow
        </span>
        <Spinner variant="glow" size="md" />
      </div>
      <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Cyberpunk
        </span>
        <Spinner variant="cyberpunk" size="md" />
      </div>
    </div>
  )
}

export function SpinnerDemoInteractive() {
  const [loading, setLoading] = React.useState(false)
  const [uploading, setUploading] = React.useState(false)
  const [uploadDone, setUploadDone] = React.useState(false)
  const [overlayLoading, setOverlayLoading] = React.useState(false)

  const triggerLoad = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const handleUpload = () => {
    if (uploading || uploadDone) return
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      setUploadDone(true)
      setTimeout(() => setUploadDone(false), 2000)
    }, 2000)
  }

  const triggerOverlay = () => {
    setOverlayLoading(true)
    setTimeout(() => setOverlayLoading(false), 2000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
      {/* Button Loader */}
      <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card/30 shadow-sm justify-center">
        <Button
          variant="glow"
          onClick={triggerLoad}
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <>
              <Spinner variant="glow" size="sm" className="mr-2" />
              <span>Fetching Data...</span>
            </>
          ) : (
            <span>Load Workspace</span>
          )}
        </Button>
      </div>

      {/* Uploader Feedback */}
      <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card/30 shadow-sm justify-center">
        <div
          onClick={handleUpload}
          className="flex flex-col items-center justify-center p-4 border border-dashed border-border rounded-lg bg-muted/10 cursor-pointer hover:bg-muted/20 transition-all select-none min-h-[90px] w-full"
        >
          {uploading ? (
            <>
              <Spinner variant="cyberpunk" size="md" className="mb-2" />
              <span className="text-[10px] font-mono text-emerald-500 animate-pulse">
                UPLOADING DATA PACKET (45%)...
              </span>
            </>
          ) : uploadDone ? (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span className="text-xs font-semibold text-emerald-500">
                Upload Completed!
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <UploadCloud className="h-6 w-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Click to upload large document
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Blur Overlay */}
      <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card/30 shadow-sm justify-center md:col-span-2 animate-in fade-in duration-300">
        <div className="relative p-4 border border-border rounded-lg bg-muted/20 overflow-hidden w-full">
          {overlayLoading && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center gap-2 z-10">
              <Spinner variant="glow" size="md" />
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                Refreshing Node...
              </span>
            </div>
          )}
          <div className="space-y-3 text-xs">
            <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
              <span>Node ID</span>
              <span>#0921B-NODE</span>
            </div>
            <p className="font-bold text-foreground">Database Sync Status</p>
            <Button
              variant="glass"
              size="sm"
              className="w-full h-8"
              onClick={triggerOverlay}
            >
              Sync Node Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SpinnerDemoShapes() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">
          Rotating Circle
        </span>
        <Spinner design="circle" variant="glow" size="md" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">
          Bouncing Dots
        </span>
        <Spinner design="dots" variant="glow" size="md" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">
          Pulsating Bars
        </span>
        <Spinner design="bars" variant="glow" size="md" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">
          Flashing Grid
        </span>
        <Spinner design="grid" variant="glow" size="md" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">
          Radial Pinwheel
        </span>
        <Spinner design="pinwheel" variant="glow" size="md" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">
          Expanding Ripple
        </span>
        <Spinner design="pulse" variant="glow" size="md" />
      </div>
    </div>
  )
}

export function SpinnerDemoPremium() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>(
    'idle',
  )
  const [logs, setLogs] = React.useState<string[]>([])

  const systemLogs = [
    'Establishing SSH Handshake...',
    'Loading Secure Kernel Modules...',
    'Fetching Quantum Entropy Matrix...',
    'Verifying Encrypted Credentials...',
    'Node fully initialized. Welcome back, agent.',
  ]

  const startBoot = () => {
    setStatus('loading')
    setLogs([])

    systemLogs.forEach((log, index) => {
      setTimeout(
        () => {
          setLogs((prev) => [...prev, log])
          if (index === systemLogs.length - 1) {
            setStatus('success')
          }
        },
        (index + 1) * 800,
      )
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-emerald-500/20 bg-zinc-950 p-6 font-mono text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.07)] select-none">
      <div className="flex justify-between items-center border-b border-emerald-500/20 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-emerald-500/60 ml-2">
            AGENT_NODE_INIT.SH
          </span>
        </div>
        <span className="text-[10px] text-emerald-500/60 font-mono">
          PORT 8820 // SECURE_SHELL
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2 flex flex-col items-center justify-center border border-emerald-500/10 rounded-xl bg-emerald-950/5 p-6 min-h-[220px]">
          {status === 'idle' && (
            <div className="text-center space-y-4 w-full">
              <div className="h-16 w-16 mx-auto rounded-full border border-dashed border-emerald-500/30 flex items-center justify-center text-emerald-500/50 text-xl font-bold animate-pulse">
                ?
              </div>
              <p className="text-[11px] text-emerald-500/70">
                Node connection offline.
              </p>
              <Button
                onClick={startBoot}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black border-none font-bold text-xs"
              >
                BOOT CONSOLE
              </Button>
            </div>
          )}

          {status === 'loading' && (
            <div className="text-center space-y-4 flex flex-col items-center">
              <Spinner variant="cyberpunk" size="lg" className="h-16 w-16" />
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider animate-pulse">
                  Initializing
                </p>
                <p className="text-[10px] text-emerald-500/60">
                  Booting modules...
                </p>
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center space-y-4 w-full">
              <div className="h-16 w-16 mx-auto rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-500 font-bold text-2xl shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                ✓
              </div>
              <p className="text-[11px] text-emerald-400 font-bold">
                Node online and secure.
              </p>
              <Button
                onClick={startBoot}
                variant="glass"
                className="w-full text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10 font-bold text-xs"
              >
                REBOOT CONSOLE
              </Button>
            </div>
          )}
        </div>

        <div className="md:col-span-3 flex flex-col justify-between border border-emerald-500/10 rounded-xl bg-black/50 p-4 h-[220px]">
          <div className="overflow-y-auto space-y-1.5 text-[11px]">
            <div className="text-emerald-500/40">
              {'>'} systemctl start agent-node.service
            </div>
            {logs.map((log, index) => (
              <div
                key={index}
                className="flex gap-2 animate-in fade-in duration-200"
              >
                <span
                  className={
                    index === systemLogs.length - 1
                      ? 'text-emerald-400 font-bold'
                      : 'text-emerald-500/80'
                  }
                >
                  {index === systemLogs.length - 1 ? '[ OK ]' : '•'} {log}
                </span>
              </div>
            ))}
            {status === 'loading' && (
              <div className="flex gap-2 items-center text-emerald-400 animate-pulse mt-1">
                <Spinner
                  variant="cyberpunk"
                  size="sm"
                  className="h-3 w-3 shrink-0"
                />
                <span>Working...</span>
              </div>
            )}
          </div>
          <div className="text-[10px] text-emerald-500/30 border-t border-emerald-500/10 pt-2 flex justify-between mt-2">
            <span>MEM: 12.4 GB / 32 GB</span>
            <span>CPU: 34%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SwitchDemoBasic() {
  return (
    <div className="flex items-center space-x-2 justify-center py-4">
      <Switch id="airplane-mode-basic" defaultChecked />
      <span className="text-sm font-semibold text-foreground cursor-pointer select-none">
        Airplane Mode
      </span>
    </div>
  )
}

export function SwitchDemoPresets() {
  return (
    <div className="flex flex-wrap items-center gap-8 justify-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex items-center space-x-2">
        <Switch id="sw-default-preset" variant="default" defaultChecked />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Default
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="sw-glass-preset" variant="glass" defaultChecked />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Glass
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="sw-retro-preset" variant="retro" defaultChecked />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Retro
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="sw-glow-preset" variant="glow" defaultChecked />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Glow
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="sw-cyberpunk-preset" variant="cyberpunk" defaultChecked />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
          Cyberpunk
        </span>
      </div>
    </div>
  )
}

export function SwitchDemoInteractive() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      {/* Settings Card */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-4 text-left">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Notification Preferences
          </h4>
          <p className="text-xs text-muted-foreground">
            Choose what updates you want to receive.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-border/50 p-4 bg-muted/10">
            <div className="space-y-0.5 text-left">
              <span className="text-sm font-semibold text-foreground">
                Security Alerts
              </span>
              <p className="text-xs text-muted-foreground">
                Get notified about suspicious logins.
              </p>
            </div>
            <Switch defaultChecked variant="glow" />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/50 p-4 bg-muted/10">
            <div className="space-y-0.5 text-left">
              <span className="text-sm font-semibold text-foreground">
                Weekly Digest
              </span>
              <p className="text-xs text-muted-foreground">
                Receive weekly stats and highlights.
              </p>
            </div>
            <Switch variant="glass" />
          </div>
        </div>
      </div>

      {/* Disabled States Showcase */}
      <div className="flex gap-6 justify-center p-4 rounded-xl border border-border/40 bg-card/20 text-xs">
        <div className="flex items-center gap-2">
          <Switch disabled />
          <span className="text-muted-foreground opacity-55">Disabled Off</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch disabled defaultChecked />
          <span className="text-muted-foreground opacity-55">Disabled On</span>
        </div>
      </div>
    </div>
  )
}

export function TableDemoPresets() {
  const data = [
    { name: 'Core Engine', type: 'System', status: 'Active' },
    { name: 'API Bridge', type: 'Gateway', status: 'Pending' },
  ]

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-5xl mx-auto p-4">
      {/* 1. Default */}
      <div className="space-y-2 text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Default
        </span>
        <Table variant="default">
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-semibold">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell className="text-right text-emerald-500">
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 2. Glassmorphic */}
      <div className="space-y-2 text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Glassmorphic
        </span>
        <Table variant="glass">
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-semibold">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell className="text-right text-emerald-500">
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 3. Retro Neobrutalism */}
      <div className="space-y-2 text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Retro Neobrutalism
        </span>
        <Table variant="retro">
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-semibold">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell className="text-right text-emerald-500">
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 4. Glow Accent */}
      <div className="space-y-2 text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Glow Accent
        </span>
        <Table variant="glow">
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-semibold">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell className="text-right text-emerald-500">
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 5. Cyberpunk Matrix */}
      <div className="space-y-2 text-left xl:col-span-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
          Cyberpunk Matrix
        </span>
        <Table variant="cyberpunk">
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-semibold">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell className="text-right text-emerald-400">
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export function TableDemoPremium() {
  const [activeTab, setActiveTab] = React.useState<
    'status' | 'pricing' | 'inventory' | 'tasks' | 'files' | 'db'
  >('status')

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap gap-2 justify-center border-b border-border pb-4">
        <Button
          variant={activeTab === 'status' ? 'glow' : 'outline'}
          onClick={() => setActiveTab('status')}
          size="sm"
        >
          Server Status
        </Button>
        <Button
          variant={activeTab === 'pricing' ? 'glow' : 'outline'}
          onClick={() => setActiveTab('pricing')}
          size="sm"
        >
          Pricing Matrix
        </Button>
        <Button
          variant={activeTab === 'inventory' ? 'glow' : 'outline'}
          onClick={() => setActiveTab('inventory')}
          size="sm"
        >
          Inventory SKU
        </Button>
        <Button
          variant={activeTab === 'tasks' ? 'glow' : 'outline'}
          onClick={() => setActiveTab('tasks')}
          size="sm"
        >
          Tasks Backlog
        </Button>
        <Button
          variant={activeTab === 'files' ? 'glow' : 'outline'}
          onClick={() => setActiveTab('files')}
          size="sm"
        >
          File Explorer
        </Button>
        <Button
          variant={activeTab === 'db' ? 'glow' : 'outline'}
          onClick={() => setActiveTab('db')}
          size="sm"
        >
          DB Schema
        </Button>
      </div>
      <div className="animate-in fade-in duration-300">
        {activeTab === 'status' && <TableDemoSystemStatus />}
        {activeTab === 'pricing' && <TableDemoPricing />}
        {activeTab === 'inventory' && <TableDemoInventory />}
        {activeTab === 'tasks' && <TableDemoTasks />}
        {activeTab === 'files' && <TableDemoFiles />}
        {activeTab === 'db' && <TableDemoDbSchema />}
      </div>
    </div>
  )
}

interface UserItem {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'pending' | 'inactive'
  amount: number
  date: string
  avatarUrl?: string
}

const SAMPLE_USERS: UserItem[] = [
  {
    id: '1',
    name: 'Sarah Connor',
    email: 'sarah@skynet-resistance.org',
    role: 'Team Lead',
    status: 'active',
    amount: 1540.0,
    date: '2026-08-12',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: '2',
    name: 'John Connor',
    email: 'john@skynet-resistance.org',
    role: 'Commander',
    status: 'active',
    amount: 2850.5,
    date: '2026-08-10',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: '3',
    name: 'Marcus Wright',
    email: 'marcus@cyberdyne.sys',
    role: 'Infiltrator',
    status: 'pending',
    amount: 890.0,
    date: '2026-08-11',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
  {
    id: '4',
    name: 'Kyle Reese',
    email: 'kyle@resistance.net',
    role: 'Sergeant',
    status: 'active',
    amount: 1200.0,
    date: '2026-08-09',
    avatarUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  },
  {
    id: '5',
    name: 'T-800 Model 101',
    email: 'cyberdyne101@cyberdyne.sys',
    role: 'Guardian',
    status: 'active',
    amount: 4500.0,
    date: '2026-08-08',
  },
  {
    id: '6',
    name: 'T-1000 Prototype',
    email: 'liquid@skynet.net',
    role: 'Liquid Metal Assassin',
    status: 'inactive',
    amount: 5200.0,
    date: '2026-08-07',
  },
  {
    id: '7',
    name: 'Dr. Miles Dyson',
    email: 'dyson@cyberdyne.sys',
    role: 'Lead Researcher',
    status: 'inactive',
    amount: 3100.0,
    date: '2026-08-05',
  },
  {
    id: '8',
    name: 'Katherine Brewster',
    email: 'kate@resistance.net',
    role: 'Medic',
    status: 'pending',
    amount: 950.25,
    date: '2026-08-06',
  },
  {
    id: '9',
    name: 'T-X Terminatrix',
    email: 'tx@skynet.net',
    role: 'Cybernetic Assassin',
    status: 'inactive',
    amount: 6100.0,
    date: '2026-08-04',
  },
  {
    id: '10',
    name: 'Danny Dyson',
    email: 'danny@cyberdyne.sys',
    role: 'System Admin',
    status: 'active',
    amount: 750.0,
    date: '2026-08-03',
  },
]

export function TableDemoInteractive() {
  const [data, setData] = React.useState<UserItem[]>(SAMPLE_USERS)
  const [search, setSearch] = React.useState('')
  const [status, setStatus] = React.useState('all')
  const [sortKey, setSortKey] = React.useState<keyof UserItem | 'custom'>(
    'date',
  )
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('desc')
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set())
  const [page, setPage] = React.useState(1)
  const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = React.useState<number | null>(null)

  const itemsPerPage = 4

  // Reset page when filters change
  React.useEffect(() => {
    setPage(1)
  }, [search, status])

  // Filter Data
  const filteredData = React.useMemo(() => {
    return data.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = status === 'all' || user.status === status
      return matchesSearch && matchesStatus
    })
  }, [data, search, status])

  // Sort Data
  const sortedData = React.useMemo(() => {
    if (sortKey === 'custom') return filteredData

    return [...filteredData].sort((a, b) => {
      const valA = a[sortKey as keyof UserItem]
      const valB = b[sortKey as keyof UserItem]

      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortDir === 'asc' ? valA - valB : valB - valA
      }
      return sortDir === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA))
    })
  }, [filteredData, sortKey, sortDir])

  // Paginated Data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage) || 1
  const paginatedData = React.useMemo(() => {
    const start = (page - 1) * itemsPerPage
    return sortedData.slice(start, start + itemsPerPage)
  }, [sortedData, page])

  const handleSort = (key: keyof UserItem) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  // Row Selection Handlers
  const handleSelectRow = (id: string, checked: boolean) => {
    const next = new Set(selectedIds)
    if (checked) {
      next.add(id)
    } else {
      next.delete(id)
    }
    setSelectedIds(next)
  }

  const handleSelectAllOnPage = (checked: boolean) => {
    const next = new Set(selectedIds)
    paginatedData.forEach((item) => {
      if (checked) {
        next.add(item.id)
      } else {
        next.delete(item.id)
      }
    })
    setSelectedIds(next)
  }

  const isAllPageSelected =
    paginatedData.length > 0 &&
    paginatedData.every((item) => selectedIds.has(item.id))

  const handleBulkDelete = () => {
    setData(data.filter((u) => !selectedIds.has(u.id)))
    setSelectedIds(new Set())
  }

  const handleBulkStatus = (newStatus: 'active' | 'pending' | 'inactive') => {
    setData(
      data.map((u) => {
        if (selectedIds.has(u.id)) {
          return { ...u, status: newStatus }
        }
        return u
      }),
    )
    setSelectedIds(new Set())
  }

  const handleExportCSV = () => {
    const headers = [
      'Name',
      'Email',
      'Role',
      'Status',
      'Joined Date',
      'Balance',
    ]
    const rows = sortedData.map((u) => [
      u.name,
      u.email,
      u.role,
      u.status,
      u.date,
      u.amount.toFixed(2),
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map((r) =>
        r.map((val) => `"${val.replace(/"/g, '""')}"`).join(','),
      ),
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute(
      'download',
      `vibe_table_export_${new Date().toISOString().slice(0, 10)}.csv`,
    )
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDragStart = (e: React.DragEvent, globalIndex: number) => {
    setDraggedIndex(globalIndex)
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', String(globalIndex))
    }
  }

  const handleDragOver = (e: React.DragEvent, globalIndex: number) => {
    e.preventDefault()
    if (dragOverIndex !== globalIndex) {
      setDragOverIndex(globalIndex)
    }
  }

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null)
      setDragOverIndex(null)
      return
    }

    const updatedData = [...data]
    const draggedUser = sortedData[draggedIndex]
    const targetUser = sortedData[targetIndex]

    if (draggedUser && targetUser) {
      const srcIndex = updatedData.findIndex((u) => u.id === draggedUser.id)
      const dstIndex = updatedData.findIndex((u) => u.id === targetUser.id)

      if (srcIndex !== -1 && dstIndex !== -1) {
        const [removed] = updatedData.splice(srcIndex, 1)
        updatedData.splice(dstIndex, 0, removed)
        setData(updatedData)
        setSortKey('custom')
      }
    }

    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const renderSortIndicator = (key: keyof UserItem) => {
    if (sortKey !== key) {
      return <ArrowUpDown className="ml-1.5 h-3.5 w-3.5 opacity-40 shrink-0" />
    }
    return sortDir === 'asc' ? (
      <ChevronUp className="ml-1.5 h-3.5 w-3.5 text-primary shrink-0" />
    ) : (
      <ChevronDown className="ml-1.5 h-3.5 w-3.5 text-primary shrink-0" />
    )
  }

  return (
    <div className="w-full bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md border border-border/80 rounded-2xl shadow-xl p-4 sm:p-5 space-y-5 text-left text-foreground">
      {/* Control Bar */}
      <div className="flex items-center justify-between gap-4">
        {selectedIds.size > 0 ? (
          /* Bulk Actions Row */
          <div className="flex items-center justify-between bg-primary/10 border border-primary/20 rounded-xl px-4 py-2 w-full animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="text-xs font-semibold text-primary">
              {selectedIds.size} user(s) selected
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBulkStatus('active')}
                className="h-8 text-xs hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                Mark Active
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBulkStatus('inactive')}
                className="h-8 text-xs hover:bg-rose-500/10 hover:text-rose-400"
              >
                Mark Inactive
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleBulkDelete}
                className="h-8 text-xs text-rose-400 border-rose-500/30 hover:bg-rose-500/20"
              >
                Delete
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedIds(new Set())}
                className="h-8 text-xs text-muted-foreground"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          /* Search & Filter Row */
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex items-center gap-3">
              <div className="w-40 shrink-0">
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="h-9 text-xs font-sans py-0">
                    <SelectValue placeholder="Filter Status" />
                  </SelectTrigger>
                  <SelectContent className="text-xs">
                    <SelectItem value="all" className="text-xs">
                      All Status
                    </SelectItem>
                    <SelectItem value="active" className="text-xs">
                      Active
                    </SelectItem>
                    <SelectItem value="pending" className="text-xs">
                      Pending
                    </SelectItem>
                    <SelectItem value="inactive" className="text-xs">
                      Inactive
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportCSV}
                className="h-9 text-xs flex items-center gap-1.5 hover:bg-muted border-border text-foreground bg-transparent"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </Button>
            </div>
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search name, email, or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-9 text-xs"
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Table */}
      <Table variant="glass" className="min-w-[800px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">
              <Checkbox
                checked={isAllPageSelected}
                onCheckedChange={(c) => handleSelectAllOnPage(!!c)}
                className="h-5 w-5"
              />
            </TableHead>
            <TableHead
              className="cursor-pointer select-none"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center">
                User
                {renderSortIndicator('name')}
              </div>
            </TableHead>
            <TableHead className="hidden md:table-cell">Role</TableHead>
            <TableHead
              className="cursor-pointer select-none"
              onClick={() => handleSort('status')}
            >
              <div className="flex items-center">
                Status
                {renderSortIndicator('status')}
              </div>
            </TableHead>
            <TableHead
              className="cursor-pointer select-none hidden sm:table-cell min-w-[125px] whitespace-nowrap"
              onClick={() => handleSort('date')}
            >
              <div className="flex items-center">
                Joined Date
                {renderSortIndicator('date')}
              </div>
            </TableHead>
            <TableHead
              className="cursor-pointer select-none text-right"
              onClick={() => handleSort('amount')}
            >
              <div className="flex items-center justify-end">
                Balance
                {renderSortIndicator('amount')}
              </div>
            </TableHead>
            <TableHead className="w-16 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-32 text-center text-xs text-muted-foreground"
              >
                No users found. Try adjusting your search query or filters.
              </TableCell>
            </TableRow>
          ) : (
            paginatedData.map((user, index) => {
              const isSelected = selectedIds.has(user.id)
              const globalIndex = (page - 1) * itemsPerPage + index
              return (
                <TableRow
                  key={user.id}
                  data-state={isSelected ? 'selected' : undefined}
                  className={cn(
                    'hover:bg-muted/40 transition-colors cursor-grab active:cursor-grabbing',
                    draggedIndex === globalIndex && 'opacity-40 bg-muted/60',
                    dragOverIndex === globalIndex &&
                      draggedIndex !== globalIndex &&
                      'border-t-2 border-t-primary bg-primary/5',
                  )}
                  draggable
                  onDragStart={(e) => handleDragStart(e, globalIndex)}
                  onDragOver={(e) => handleDragOver(e, globalIndex)}
                  onDrop={(e) => handleDrop(e, globalIndex)}
                  onDragEnd={handleDragEnd}
                >
                  <TableCell className="text-center">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={(c) => handleSelectRow(user.id, !!c)}
                      onClick={(e) => e.stopPropagation()}
                      className="h-5 w-5"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 shrink-0">
                        {user.avatarUrl ? (
                          <AvatarImage src={user.avatarUrl} alt={user.name} />
                        ) : null}
                        <AvatarFallback className="text-[10px] bg-primary/20 text-primary font-bold">
                          {user.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-semibold text-foreground truncate">
                          {user.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground truncate">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs hidden md:table-cell">
                    {user.role}
                  </TableCell>
                  <TableCell>
                    <Switch checked={user.status === 'active'} disabled />
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">
                    {user.date}
                  </TableCell>
                  <TableCell className="text-right text-xs font-semibold text-foreground">
                    ${user.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-muted/80 rounded-lg cursor-pointer"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-32 bg-background border-border text-xs"
                      >
                        <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-muted rounded-md cursor-pointer text-xs">
                          <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-muted rounded-md cursor-pointer text-xs">
                          <Edit className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-rose-500/10 focus:bg-rose-500/10 hover:text-rose-400 rounded-md cursor-pointer text-rose-500 text-xs"
                          onClick={() =>
                            setData(data.filter((u) => u.id !== user.id))
                          }
                        >
                          <Trash2 className="h-3.5 w-3.5 text-rose-500 hover:text-rose-400" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <span className="text-[11px] text-muted-foreground">
          Showing {Math.min(sortedData.length, (page - 1) * itemsPerPage + 1)}-
          {Math.min(sortedData.length, page * itemsPerPage)} of{' '}
          {sortedData.length} users
        </span>
        <div className="flex items-center space-x-1.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-[11px] font-medium text-foreground px-3">
            Page {page} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// TABS & TEXTAREA INTERACTIVE COMBINED DEMO
// ==========================================

export function TabsTextareaDemoInteractive() {
  const [variant, setVariant] = React.useState<
    'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('default')
  const [autoResize, setAutoResize] = React.useState(true)
  const [text, setText] = React.useState(
    "Hello World! This is a premium interactive showcase combining Vibe UI's Tabs and Textarea components.\n\nTry typing more lines here to see the textarea automatically grow and adjust its height dynamically without scrollbars. Change the variant preset above to see the entire component transition themes!",
  )
  const [title, setTitle] = React.useState('My Workspace Draft')
  const [errorOverride, setErrorOverride] = React.useState(false)

  const maxChars = 280
  const charCount = text.length
  const isOverLimit = charCount > maxChars
  const isWarning = charCount > maxChars - 50 && charCount <= maxChars
  const isTextareaError = errorOverride || isOverLimit

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 text-left">
      {/* Preset Theme Customizer */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-muted/40 border border-border/80 rounded-xl p-3.5">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-foreground">
            Theme Variant Preset
          </span>
          <span className="text-[10px] text-muted-foreground">
            Select styling and indicator animation preset
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {(['default', 'glass', 'retro', 'glow', 'cyberpunk'] as const).map(
            (v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={cn(
                  'px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all capitalize cursor-pointer',
                  variant === v
                    ? 'bg-primary border-primary text-primary-foreground shadow-sm'
                    : 'bg-background border-border text-muted-foreground hover:text-foreground hover:bg-muted',
                )}
              >
                {v}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Main Workspace Card Container */}
      <div
        className={cn(
          'w-full rounded-2xl border p-5 sm:p-6 transition-all duration-300',
          variant === 'glass' &&
            'bg-card/40 border-white/10 dark:border-white/5 backdrop-blur-md shadow-xl',
          variant === 'retro' &&
            'border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
          variant === 'glow' &&
            'bg-card border-border shadow-[0_0_25px_rgba(168,85,247,0.06)]',
          variant === 'cyberpunk' &&
            'bg-black border border-emerald-500/40 rounded-none shadow-[0_0_20px_rgba(16,185,129,0.1)]',
          variant === 'default' && 'bg-card border-border shadow-lg',
        )}
      >
        <Tabs
          defaultValue="compose"
          variant={variant}
          className="w-full space-y-5"
        >
          {/* Tabs header strip */}
          <div className="flex items-center justify-between border-b border-border/60 pb-3 flex-wrap gap-3">
            <TabsList>
              <TabsTrigger value="compose">Compose</TabsTrigger>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-1.5">
              <span
                className={cn(
                  'h-2 w-2 rounded-full',
                  isTextareaError
                    ? 'bg-destructive animate-pulse'
                    : isWarning
                      ? 'bg-amber-400'
                      : 'bg-emerald-500',
                )}
              />
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                {isTextareaError
                  ? 'Error State'
                  : isWarning
                    ? 'Warning limit'
                    : 'Draft Saved'}
              </span>
            </div>
          </div>

          {/* Tab 1: Compose Editor */}
          <TabsContent
            value="compose"
            className="space-y-4 focus-visible:ring-0"
          >
            <div className="space-y-1 text-left">
              <Label
                htmlFor="draft-title"
                className="text-xs font-semibold text-muted-foreground"
              >
                Draft Title
              </Label>
              <Input
                id="draft-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name your draft..."
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <Label
                htmlFor="draft-desc"
                className="text-xs font-semibold text-muted-foreground"
              >
                Content Details
              </Label>
              <Textarea
                id="draft-desc"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write description here..."
                variant={variant}
                autoResize={autoResize}
                error={isTextareaError}
                rows={4}
                className="w-full min-h-[90px]"
              />

              {/* Count tracker bar */}
              <div className="flex items-center justify-between text-[11px] pt-1">
                <span
                  className={cn(
                    'font-medium',
                    isOverLimit
                      ? 'text-destructive'
                      : isWarning
                        ? 'text-amber-500'
                        : 'text-muted-foreground',
                  )}
                >
                  {isOverLimit
                    ? 'Character limit exceeded!'
                    : isWarning
                      ? 'Approaching character limit...'
                      : 'Dynamic auto-growing height active'}
                </span>
                <span
                  className={cn(
                    'font-mono font-bold px-1.5 py-0.5 rounded',
                    isOverLimit
                      ? 'bg-destructive/10 text-destructive border border-destructive/20'
                      : isWarning
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                        : 'bg-muted text-muted-foreground',
                  )}
                >
                  {charCount} / {maxChars}
                </span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button size="sm" disabled={isOverLimit} className="text-xs h-8">
                Save Workspace
              </Button>
            </div>
          </TabsContent>

          {/* Tab 2: Live Preview */}
          <TabsContent value="preview" className="focus-visible:ring-0">
            <div
              className={cn(
                'p-5 rounded-xl border text-left',
                variant === 'glass' &&
                  'bg-white/5 border-white/10 backdrop-blur-md text-foreground',
                variant === 'retro' &&
                  'border-2 border-foreground bg-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] text-foreground',
                variant === 'glow' &&
                  'bg-card border-border shadow-[0_0_15px_rgba(168,85,247,0.08)] text-foreground',
                variant === 'cyberpunk' &&
                  'bg-black border border-emerald-500/50 text-emerald-400 font-mono shadow-[0_0_10px_rgba(16,185,129,0.1)]',
                variant === 'default' &&
                  'bg-muted/40 border-border text-foreground',
              )}
            >
              <h3 className="text-sm font-bold mb-2 uppercase tracking-wide border-b border-border/40 pb-1">
                {title || 'Untitled Draft'}
              </h3>
              <p className="text-xs leading-relaxed whitespace-pre-wrap min-h-[60px]">
                {text || (
                  <span className="italic text-muted-foreground">
                    No content details provided yet.
                  </span>
                )}
              </p>
            </div>
          </TabsContent>

          {/* Tab 3: Settings Config */}
          <TabsContent
            value="settings"
            className="space-y-4 focus-visible:ring-0 text-left pt-2"
          >
            <div className="flex items-center justify-between p-3 rounded-lg border border-border/60 bg-muted/20">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground">
                  AutoResize Textarea
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Adjust input height dynamically to fit text
                </span>
              </div>
              <Switch checked={autoResize} onCheckedChange={setAutoResize} />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-border/60 bg-muted/20">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground">
                  Force Error Border
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Demonstrate validation error states manually
                </span>
              </div>
              <Switch
                checked={errorOverride}
                onCheckedChange={setErrorOverride}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
