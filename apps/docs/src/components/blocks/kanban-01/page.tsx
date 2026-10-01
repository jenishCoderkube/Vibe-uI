'use client'

import React, { useState, useMemo } from 'react'
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  Flame,
  Calendar,
  Paperclip,
  MessageSquare,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  BarChart3,
  User,
  Trash2,
  Tag,
  Check,
  X,
  Play,
  Eye,
  SlidersHorizontal,
  RefreshCw,
  Send,
  Kanban as KanbanIcon,
  CheckSquare,
  ArrowUpRight,
  ListTodo,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from '@/components/ui/avatar'
import { Progress, CircularProgress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tooltip } from '@/components/ui/tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Kbd } from '@/components/ui/kbd'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// Types
export type ColumnId = 'backlog' | 'in-progress' | 'in-review' | 'done'
export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low'

export interface CreateTaskFormValues {
  title: string
  column: ColumnId
  priority: PriorityLevel
  tag: string
  assigneeId: string
  dueDate: string
  description: string
}

export interface Subtask {
  id: string
  title: string
  completed: boolean
}

export interface Comment {
  id: string
  author: string
  avatar: string
  text: string
  timeAgo: string
}

export interface TaskItem {
  id: string
  code: string
  title: string
  description: string
  column: ColumnId
  priority: PriorityLevel
  tag: string
  assignee: {
    id: string
    name: string
    avatar: string
    initials: string
    role: string
  }
  dueDate: string
  isDueSoon?: boolean
  subtasks: Subtask[]
  comments: Comment[]
  attachmentsCount: number
}

// Initial Mock Data
const INITIAL_MEMBERS = [
  {
    id: 'am',
    name: 'Alex Morgan',
    initials: 'AM',
    role: 'Lead Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: 'sc',
    name: 'Sarah Chen',
    initials: 'SC',
    role: 'Full-Stack Dev',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: 'mv',
    name: 'Marcus Vance',
    initials: 'MV',
    role: 'AI Researcher',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: 'er',
    name: 'Elena Rostova',
    initials: 'ER',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: 'dk',
    name: 'David Kim',
    initials: 'DK',
    role: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
  },
]

const INITIAL_TASKS: TaskItem[] = [
  {
    id: 't-1',
    code: 'VIBE-101',
    title: 'Implement WebGPU particle physics pipeline',
    description:
      'Port existing compute shaders to native WebGPU with graceful WebGL2 fallbacks. Optimize frame budget to stay under 16ms on mobile.',
    column: 'backlog',
    priority: 'high',
    tag: 'AI Core',
    assignee: INITIAL_MEMBERS[2],
    dueDate: 'Oct 18',
    subtasks: [
      { id: 'st-1', title: 'Write WGSL compute shader pass', completed: true },
      { id: 'st-2', title: 'Verify buffer layout alignment', completed: false },
      { id: 'st-3', title: 'Add iOS Safari feature detection', completed: false },
      { id: 'st-4', title: 'Benchmarking on low-power devices', completed: false },
    ],
    comments: [
      {
        id: 'c-1',
        author: 'Alex Morgan',
        avatar: INITIAL_MEMBERS[0].avatar,
        text: 'Make sure we fallback to 60fps canvas on older iPads.',
        timeAgo: '2h ago',
      },
    ],
    attachmentsCount: 2,
  },
  {
    id: 't-2',
    code: 'VIBE-102',
    title: 'Self-hosted telemetry and error beacon receiver',
    description:
      'Build minimal ingestion proxy handling OTEL traces and client-side error beacons without external vendor lock-in.',
    column: 'backlog',
    priority: 'medium',
    tag: 'DevOps',
    assignee: INITIAL_MEMBERS[4],
    dueDate: 'Oct 24',
    subtasks: [
      { id: 'st-5', title: 'Define Protobuf envelope specs', completed: true },
      { id: 'st-6', title: 'Configure Redis buffering worker', completed: false },
      { id: 'st-7', title: 'Write integration health check', completed: false },
    ],
    comments: [],
    attachmentsCount: 1,
  },
  {
    id: 't-3',
    code: 'VIBE-103',
    title: 'Design dark mode neon token system in Figma',
    description:
      'Audit all HSL color variables and construct a unified token mapping for glow and retro variants across desktop and mobile.',
    column: 'backlog',
    priority: 'low',
    tag: 'Design',
    assignee: INITIAL_MEMBERS[3],
    dueDate: 'Oct 28',
    subtasks: [
      { id: 'st-8', title: 'Export Figma token library JSON', completed: false },
      { id: 'st-9', title: 'Validate WCAG AAA contrast in OLED mode', completed: false },
    ],
    comments: [],
    attachmentsCount: 3,
  },
  {
    id: 't-4',
    code: 'VIBE-104',
    title: 'Real-time collaborative canvas state sync via WebSocket',
    description:
      'Implement conflict-free replicated data types (CRDT) for multi-cursor and block dragging sync across concurrent client sessions.',
    column: 'in-progress',
    priority: 'urgent',
    tag: 'Frontend',
    assignee: INITIAL_MEMBERS[0],
    dueDate: 'Oct 10',
    isDueSoon: true,
    subtasks: [
      { id: 'st-10', title: 'Yjs document binding with React state', completed: true },
      { id: 'st-11', title: 'Ephemeral awareness protocol for cursors', completed: true },
      { id: 'st-12', title: 'Stress test with 50 parallel nodes', completed: true },
      { id: 'st-13', title: 'Connection drop auto-reconnect logic', completed: false },
      { id: 'st-14', title: 'Edge worker broadcast gateway', completed: false },
    ],
    comments: [
      {
        id: 'c-2',
        author: 'Sarah Chen',
        avatar: INITIAL_MEMBERS[1].avatar,
        text: 'Tested on staging edge worker — latency dropped to 14ms!',
        timeAgo: '1d ago',
      },
    ],
    attachmentsCount: 4,
  },
  {
    id: 't-5',
    code: 'VIBE-105',
    title: 'Fine-tune local quantized model embeddings',
    description:
      'Train lightweight vector embeddings for offline component semantic search running directly in web workers.',
    column: 'in-progress',
    priority: 'high',
    tag: 'AI Core',
    assignee: INITIAL_MEMBERS[2],
    dueDate: 'Oct 12',
    subtasks: [
      { id: 'st-15', title: 'Scrape Vibe UI docs and props taxonomy', completed: true },
      { id: 'st-16', title: 'Generate ONNX runtime quantized bundle', completed: true },
      { id: 'st-17', title: 'Validate cosine distance accuracy', completed: false },
      { id: 'st-18', title: 'Integrate in command palette search', completed: false },
    ],
    comments: [],
    attachmentsCount: 1,
  },
  {
    id: 't-6',
    code: 'VIBE-106',
    title: 'Zero-knowledge proof session validation middleware',
    description:
      'Integrate cryptographic session signature verification into the edge middleware layer to prevent session spoofing.',
    column: 'in-review',
    priority: 'high',
    tag: 'Security',
    assignee: INITIAL_MEMBERS[1],
    dueDate: 'Oct 08',
    isDueSoon: true,
    subtasks: [
      { id: 'st-19', title: 'Draft security spec and threat model', completed: true },
      { id: 'st-20', title: 'Implement Rust WebAssembly verifier', completed: true },
      { id: 'st-21', title: 'Pass penetration review test suite', completed: true },
    ],
    comments: [
      {
        id: 'c-3',
        author: 'Marcus Vance',
        avatar: INITIAL_MEMBERS[2].avatar,
        text: 'Verifier memory footprint is under 3MB. Ready for final audit.',
        timeAgo: '4h ago',
      },
    ],
    attachmentsCount: 2,
  },
  {
    id: 't-7',
    code: 'VIBE-107',
    title: 'Adaptive responsive sheet drawer with gesture drag',
    description:
      'Refactor sheet and drawer primitive to smoothly snap to 35%, 65%, and 100% viewport heights with native touch inertia.',
    column: 'in-review',
    priority: 'medium',
    tag: 'Frontend',
    assignee: INITIAL_MEMBERS[3],
    dueDate: 'Oct 07',
    subtasks: [
      { id: 'st-22', title: 'Add velocity swipe detection', completed: true },
      { id: 'st-23', title: 'Implement rubberband resistance bounds', completed: true },
      { id: 'st-24', title: 'Test on Android Chrome and Safari iOS', completed: true },
      { id: 'st-25', title: 'Write unit tests for state machine', completed: true },
    ],
    comments: [],
    attachmentsCount: 0,
  },
  {
    id: 't-8',
    code: 'VIBE-108',
    title: 'Vibe UI 2.0 component library tree-shaking optimizer',
    description:
      'Configure sideEffects flags and separate CSS bundle entries to achieve sub-4KB gzip baseline bundle overhead.',
    column: 'done',
    priority: 'urgent',
    tag: 'DevOps',
    assignee: INITIAL_MEMBERS[0],
    dueDate: 'Oct 02',
    subtasks: [
      { id: 'st-26', title: 'Audit bundle analyzer chunks', completed: true },
      { id: 'st-27', title: 'Split Radix primitive re-exports', completed: true },
      { id: 'st-28', title: 'Verify npm pack dry-run artifacts', completed: true },
    ],
    comments: [
      {
        id: 'c-4',
        author: 'Sarah Chen',
        avatar: INITIAL_MEMBERS[1].avatar,
        text: 'Benchmark validated: total production size down 38%!',
        timeAgo: '3d ago',
      },
    ],
    attachmentsCount: 3,
  },
  {
    id: 't-9',
    code: 'VIBE-109',
    title: 'Multi-currency SaaS billing checkout drawer',
    description:
      'Built interactive pricing tier calculation with annual discount toggle, currency converter, and coupon validator.',
    column: 'done',
    priority: 'medium',
    tag: 'Design',
    assignee: INITIAL_MEMBERS[1],
    dueDate: 'Oct 01',
    subtasks: [
      { id: 'st-29', title: 'Create currency switcher UI', completed: true },
      { id: 'st-30', title: 'Hook discount code validation hook', completed: true },
      { id: 'st-31', title: 'Add responsive breakdown table', completed: true },
      { id: 'st-32', title: 'Run cross-browser QA tests', completed: true },
    ],
    comments: [],
    attachmentsCount: 1,
  },
]

const COLUMNS: {
  id: ColumnId
  label: string
  icon: React.ElementType
  dotClass: string
}[] = [
  {
    id: 'backlog',
    label: 'Backlog',
    icon: ListTodo,
    dotClass: 'bg-muted-foreground/40',
  },
  {
    id: 'in-progress',
    label: 'In Progress',
    icon: Play,
    dotClass: 'bg-foreground',
  },
  {
    id: 'in-review',
    label: 'In Review',
    icon: Eye,
    dotClass: 'bg-muted-foreground',
  },
  {
    id: 'done',
    label: 'Done',
    icon: CheckCircle2,
    dotClass: 'bg-foreground',
  },
]

const TAGS = ['All', 'Frontend', 'Backend', 'AI Core', 'Design', 'Security', 'DevOps']

export default function Kanban01Block() {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPriority, setSelectedPriority] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const [selectedAssignee, setSelectedAssignee] = useState<string>('all')
  const [activeTab, setActiveTab] = useState<'board' | 'metrics'>('board')
  const [mobileColumnTab, setMobileColumnTab] = useState<ColumnId | 'all'>('all')

  // Modals state
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const handleOpenChangeCreate = (open: boolean) => {
    setIsCreateOpen(open)
    if (!open && typeof document !== 'undefined') {
      setTimeout(() => {
        document.body.style.pointerEvents = ''
        document.body.style.overflow = ''
        document.body.removeAttribute('data-scroll-locked')
      }, 0)
    }
  }

  const handleOpenChangeDetail = (open: boolean) => {
    setIsDetailOpen(open)
    if (!open && typeof document !== 'undefined') {
      setTimeout(() => {
        document.body.style.pointerEvents = ''
        document.body.style.overflow = ''
        document.body.removeAttribute('data-scroll-locked')
      }, 0)
    }
  }

  // React Hook Form for Task Creation
  const form = useForm<CreateTaskFormValues>({
    defaultValues: {
      title: '',
      column: 'backlog',
      priority: 'medium',
      tag: 'Frontend',
      assigneeId: INITIAL_MEMBERS[0].id,
      dueDate: 'Oct 20',
      description: '',
    },
  })

  const handleOpenCreate = (columnId: ColumnId = 'backlog') => {
    form.reset({
      title: '',
      column: columnId,
      priority: 'medium',
      tag: 'Frontend',
      assigneeId: INITIAL_MEMBERS[0].id,
      dueDate: 'Oct 20',
      description: '',
    })
    handleOpenChangeCreate(true)
  }

  // New comment input in drawer
  const [commentInput, setCommentInput] = useState('')
  // New subtask input in drawer
  const [newSubtaskInput, setNewSubtaskInput] = useState('')

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.code.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPriority =
        selectedPriority === 'all' || task.priority === selectedPriority
      const matchesTag = selectedTag === 'All' || task.tag === selectedTag
      const matchesAssignee =
        selectedAssignee === 'all' || task.assignee.id === selectedAssignee
      return matchesSearch && matchesPriority && matchesTag && matchesAssignee
    })
  }, [tasks, searchQuery, selectedPriority, selectedTag, selectedAssignee])

  // Move task to another column
  const handleMoveTask = (taskId: string, targetColumn: ColumnId) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, column: targetColumn } : t)),
    )
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask((prev) => (prev ? { ...prev, column: targetColumn } : null))
    }
  }

  // Delete task
  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId))
    if (selectedTask?.id === taskId) {
      handleOpenChangeDetail(false)
      setSelectedTask(null)
    }
  }

  // Toggle subtask in task
  const handleToggleSubtask = (taskId: string, subtaskId: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== taskId) return t
        const updatedSubtasks = t.subtasks.map((st) =>
          st.id === subtaskId ? { ...st, completed: !st.completed } : st,
        )
        return { ...t, subtasks: updatedSubtasks }
      }),
    )
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask((prev) => {
        if (!prev) return null
        return {
          ...prev,
          subtasks: prev.subtasks.map((st) =>
            st.id === subtaskId ? { ...st, completed: !st.completed } : st,
          ),
        }
      })
    }
  }

  // Add subtask inside detail drawer
  const handleAddSubtask = () => {
    if (!selectedTask || !newSubtaskInput.trim()) return
    const newSt: Subtask = {
      id: `st-${Date.now()}`,
      title: newSubtaskInput.trim(),
      completed: false,
    }
    const updatedSubtasks = [...selectedTask.subtasks, newSt]

    setTasks((prev) =>
      prev.map((t) =>
        t.id === selectedTask.id ? { ...t, subtasks: updatedSubtasks } : t,
      ),
    )
    setSelectedTask((prev) =>
      prev ? { ...prev, subtasks: updatedSubtasks } : null,
    )
    setNewSubtaskInput('')
  }

  // Add comment in detail drawer
  const handleAddComment = () => {
    if (!selectedTask || !commentInput.trim()) return
    const newComm: Comment = {
      id: `c-${Date.now()}`,
      author: 'You (Current User)',
      avatar: INITIAL_MEMBERS[0].avatar,
      text: commentInput.trim(),
      timeAgo: 'Just now',
    }
    const updatedComments = [newComm, ...selectedTask.comments]

    setTasks((prev) =>
      prev.map((t) =>
        t.id === selectedTask.id ? { ...t, comments: updatedComments } : t,
      ),
    )
    setSelectedTask((prev) =>
      prev ? { ...prev, comments: updatedComments } : null,
    )
    setCommentInput('')
  }

  // Create task submission via React Hook Form
  const onSubmitCreateTask = (values: CreateTaskFormValues) => {
    const assignedMember =
      INITIAL_MEMBERS.find((m) => m.id === values.assigneeId) ||
      INITIAL_MEMBERS[0]

    const newTask: TaskItem = {
      id: `t-${Date.now()}`,
      code: `VIBE-${Math.floor(110 + tasks.length)}`,
      title: values.title.trim(),
      description:
        values.description.trim() ||
        'Standard operational ticket assigned to active sprint cadence.',
      column: values.column,
      priority: values.priority,
      tag: values.tag,
      assignee: assignedMember,
      dueDate: values.dueDate || 'Oct 20',
      subtasks: [
        { id: `st-${Date.now()}-1`, title: 'Define acceptance criteria', completed: false },
        { id: `st-${Date.now()}-2`, title: 'Implementation & unit tests', completed: false },
      ],
      comments: [],
      attachmentsCount: 0,
    }

    setTasks((prev) => [newTask, ...prev])
    handleOpenChangeCreate(false)
    form.reset()
  }

  // Metrics computation
  const totalTasksCount = tasks.length
  const completedTasksCount = tasks.filter((t) => t.column === 'done').length
  const inProgressCount = tasks.filter((t) => t.column === 'in-progress').length
  const inReviewCount = tasks.filter((t) => t.column === 'in-review').length
  const backlogCount = tasks.filter((t) => t.column === 'backlog').length
  const urgentCount = tasks.filter((t) => t.priority === 'urgent').length
  const sprintProgress =
    totalTasksCount > 0
      ? Math.round((completedTasksCount / totalTasksCount) * 100)
      : 0

  // Priority badge styling helper
  const renderPriorityBadge = (priority: PriorityLevel) => {
    switch (priority) {
      case 'urgent':
        return (
          <Badge
            variant="destructive"
            className="gap-1 px-2 py-0 text-[10px] font-semibold uppercase tracking-wider shadow-xs"
          >
            <Flame className="size-3 shrink-0" />
            Urgent
          </Badge>
        )
      case 'high':
        return (
          <Badge
            variant="default"
            className="gap-1 px-2 py-0 text-[10px] font-semibold uppercase tracking-wider"
          >
            <AlertCircle className="size-3 shrink-0" />
            High
          </Badge>
        )
      case 'medium':
        return (
          <Badge
            variant="secondary"
            className="gap-1 px-2 py-0 text-[10px] font-medium uppercase tracking-wider"
          >
            Medium
          </Badge>
        )
      case 'low':
        return (
          <Badge
            variant="outline"
            className="gap-1 px-2 py-0 text-[10px] font-normal uppercase tracking-wider text-muted-foreground"
          >
            Low
          </Badge>
        )
    }
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground flex flex-col font-sans select-none antialiased">
        {/* TOP COMMAND & TOOLBAR */}
        <header className="sticky top-0 z-20 border-b border-border/80 bg-background/95 backdrop-blur-md px-4 sm:px-6 py-3.5 space-y-3.5 transition-all">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Left Sprint Header */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <KanbanIcon className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-base sm:text-lg font-bold tracking-tight">
                      Sprint 42 · Core Platform
                    </h1>
                    <Badge variant="secondary" className="text-[10px] py-0 px-2 font-mono">
                      Active
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    Oct 1 — Oct 15 · {completedTasksCount}/{totalTasksCount} completed ({sprintProgress}%)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Quick Actions & Tabs */}
            <div className="flex items-center gap-2.5 flex-wrap justify-between md:justify-end">
              <Tabs
                value={activeTab}
                onValueChange={(val) => setActiveTab(val as 'board' | 'metrics')}
                className="w-auto"
              >
                <TabsList className="h-8 p-0.5 bg-muted/60 border border-border/60">
                  <TabsTrigger value="board" className="text-xs px-2.5 py-1 gap-1.5">
                    <KanbanIcon className="size-3.5" />
                    Board
                  </TabsTrigger>
                  <TabsTrigger value="metrics" className="text-xs px-2.5 py-1 gap-1.5">
                    <BarChart3 className="size-3.5" />
                    Analytics
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <Button
                size="sm"
                variant="default"
                onClick={() => handleOpenCreate('backlog')}
                className="gap-1.5 shadow-sm text-xs font-semibold h-8"
              >
                <Plus className="size-4" />
                <span>New Task</span>
              </Button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between pt-1">
            <div className="flex items-center gap-2 flex-1 flex-wrap">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground pointer-events-none" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter tasks or code..."
                  className="h-8 pl-8 text-xs bg-muted/30 focus-visible:bg-background border-border/70"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground text-xs"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>

              {/* Priority Select */}
              <div className="w-32 sm:w-36">
                <Select
                  value={selectedPriority}
                  onValueChange={(v) => setSelectedPriority(v)}
                >
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tag Pill Filter */}
              <div className="flex items-center gap-1 overflow-x-auto max-w-full py-0.5 scrollbar-none no-scrollbar">
                {TAGS.slice(0, 5).map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className="h-7 px-2 text-[11px] rounded-full shrink-0"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Assignee Filter with Tooltips */}
            <div className="flex items-center gap-2 self-start lg:self-center">
              <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                Member:
              </span>
              <div className="flex items-center -space-x-1.5">
                <Tooltip content="Show all members">
                  <button
                    onClick={() => setSelectedAssignee('all')}
                    className={`size-7 rounded-full text-[10px] font-bold border-2 transition-all flex items-center justify-center ${
                      selectedAssignee === 'all'
                        ? 'border-primary bg-primary text-primary-foreground scale-105 z-10'
                        : 'border-background bg-muted text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    ALL
                  </button>
                </Tooltip>

                {INITIAL_MEMBERS.map((member) => {
                  const isSelected = selectedAssignee === member.id
                  return (
                    <Tooltip
                      key={member.id}
                      content={`${member.name} (${member.role})`}
                    >
                      <button
                        onClick={() =>
                          setSelectedAssignee(isSelected ? 'all' : member.id)
                        }
                        className={`relative rounded-full transition-transform ${
                          isSelected
                            ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 z-10'
                            : 'hover:scale-105 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <Avatar size="sm" className="size-7 border border-background">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-[10px]">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      </button>
                    </Tooltip>
                  )
                })}
              </div>

              {(searchQuery ||
                selectedPriority !== 'all' ||
                selectedTag !== 'All' ||
                selectedAssignee !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedPriority('all')
                    setSelectedTag('All')
                    setSelectedAssignee('all')
                  }}
                  className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground gap-1"
                >
                  <RefreshCw className="size-3" />
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Column Quick Switcher */}
          <div className="flex md:hidden items-center gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-none">
            <Button
              variant={mobileColumnTab === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMobileColumnTab('all')}
              className="h-7 text-xs rounded-full shrink-0"
            >
              All Columns
            </Button>
            {COLUMNS.map((col) => {
              const count = tasks.filter((t) => t.column === col.id).length
              return (
                <Button
                  key={col.id}
                  variant={mobileColumnTab === col.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setMobileColumnTab(col.id)}
                  className="h-7 text-xs rounded-full shrink-0 gap-1.5"
                >
                  <span className={`size-2 rounded-full ${col.dotClass}`} />
                  {col.label} ({count})
                </Button>
              )
            })}
          </div>
        </header>

        {/* MAIN BODY: BOARD OR ANALYTICS */}
        <main className="flex-1 w-full p-3 sm:p-5 lg:p-6 overflow-y-auto">
          {activeTab === 'board' ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
              {COLUMNS.map((column) => {
                // If mobile view is filtered to one column, hide others
                if (mobileColumnTab !== 'all' && mobileColumnTab !== column.id) {
                  return null
                }

                const colTasks = filteredTasks.filter(
                  (task) => task.column === column.id,
                )
                const ColumnIcon = column.icon

                return (
                  <div
                    key={column.id}
                    className="min-w-0 flex flex-col rounded-xl border border-border bg-card/60 p-3 transition-colors shadow-xs"
                  >
                    {/* Column Header */}
                    <div className="flex items-center justify-between pb-3 px-1">
                      <div className="flex items-center gap-2">
                        <span className={`size-2.5 rounded-full ${column.dotClass}`} />
                        <h2 className="text-sm font-semibold tracking-tight">
                          {column.label}
                        </h2>
                        <Badge
                          variant="secondary"
                          className="px-1.5 py-0 text-[11px] font-mono rounded-md"
                        >
                          {colTasks.length}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-1">
                        <Tooltip content={`Add card to ${column.label}`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleOpenCreate(column.id)}
                            className="size-7 rounded-md hover:bg-muted"
                          >
                            <Plus className="size-3.5 text-muted-foreground" />
                          </Button>
                        </Tooltip>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-7 rounded-md hover:bg-muted"
                            >
                              <MoreVertical className="size-3.5 text-muted-foreground" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-44 text-xs">
                            <DropdownMenuLabel>Column Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => handleOpenCreate(column.id)}
                            >
                              <Plus className="mr-2 size-3.5" />
                              Add New Task
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => {
                                setTasks((prev) =>
                                  prev.filter((t) => t.column !== column.id),
                                )
                              }}
                              className="text-destructive focus:text-destructive"
                            >
                              <Trash2 className="mr-2 size-3.5" />
                              Clear All ({colTasks.length})
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    {/* Column Cards Container */}
                    <div className="flex flex-col gap-2.5 min-h-[160px]">
                      {colTasks.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 px-4 text-center rounded-lg border border-dashed border-border/60 bg-muted/20">
                          <ColumnIcon className="size-6 text-muted-foreground/40 mb-1" />
                          <p className="text-xs font-medium text-muted-foreground">
                            No tasks here
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleOpenCreate(column.id)}
                            className="text-[11px] h-7 mt-2 text-primary gap-1"
                          >
                            <Plus className="size-3" />
                            Create one
                          </Button>
                        </div>
                      ) : (
                        colTasks.map((task) => {
                          const completedSubtasks = task.subtasks.filter(
                            (st) => st.completed,
                          ).length
                          const totalSubtasks = task.subtasks.length
                          const subtaskPercent =
                            totalSubtasks > 0
                              ? Math.round(
                                  (completedSubtasks / totalSubtasks) * 100,
                                )
                              : 0

                          return (
                            <Card
                              key={task.id}
                              onClick={() => {
                                setSelectedTask(task)
                                setIsDetailOpen(true)
                              }}
                              className="group relative cursor-pointer border border-border/70 hover:border-primary/50 bg-card/90 hover:bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md overflow-hidden p-3.5 space-y-2.5"
                            >
                              {/* Top Bar: Code + Priority + Menu */}
                              <div className="flex items-center justify-between gap-1.5">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="font-mono text-[10px] text-muted-foreground font-semibold">
                                    {task.code}
                                  </span>
                                  <Badge
                                    variant="glass"
                                    className="px-1.5 py-0 text-[10px] text-muted-foreground"
                                  >
                                    {task.tag}
                                  </Badge>
                                </div>

                                <div className="flex items-center gap-1">
                                  {renderPriorityBadge(task.priority)}

                                  {/* Task quick menu */}
                                  <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <button className="size-6 inline-flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                                          <MoreVertical className="size-3.5" />
                                        </button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent
                                        align="end"
                                        className="w-44 text-xs"
                                      >
                                        <DropdownMenuLabel>
                                          Move Task To
                                        </DropdownMenuLabel>
                                        {COLUMNS.map((col) => (
                                          <DropdownMenuItem
                                            key={col.id}
                                            disabled={task.column === col.id}
                                            onClick={() =>
                                              handleMoveTask(task.id, col.id)
                                            }
                                          >
                                            <span
                                              className={`mr-2 size-2 rounded-full ${col.dotClass}`}
                                            />
                                            {col.label}
                                          </DropdownMenuItem>
                                        ))}
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                          onClick={() =>
                                            handleDeleteTask(task.id)
                                          }
                                          className="text-destructive focus:text-destructive"
                                        >
                                          <Trash2 className="mr-2 size-3.5" />
                                          Delete
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                </div>
                              </div>

                              {/* Title & Excerpt */}
                              <div>
                                <h3 className="text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                  {task.title}
                                </h3>
                                <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                                  {task.description}
                                </p>
                              </div>

                              {/* Subtasks progress bar */}
                              {totalSubtasks > 0 && (
                                <div className="space-y-1 pt-1">
                                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <CheckSquare className="size-3" />
                                      {completedSubtasks}/{totalSubtasks} Subtasks
                                    </span>
                                    <span className="font-mono">{subtaskPercent}%</span>
                                  </div>
                                  <Progress
                                    value={subtaskPercent}
                                    variant="default"
                                    className="h-1.5"
                                  />
                                </div>
                              )}

                              <Separator className="opacity-50" />

                              {/* Card Footer: Assignee + Date + Meta */}
                              <div className="flex items-center justify-between text-[11px] pt-0.5">
                                <div className="flex items-center gap-1.5">
                                  <Tooltip
                                    content={`${task.assignee.name} (${task.assignee.role})`}
                                  >
                                    <Avatar size="sm" className="size-6 border border-border">
                                      <AvatarImage
                                        src={task.assignee.avatar}
                                        alt={task.assignee.name}
                                      />
                                      <AvatarFallback className="text-[9px]">
                                        {task.assignee.initials}
                                      </AvatarFallback>
                                    </Avatar>
                                  </Tooltip>

                                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                    <Calendar className="size-3" />
                                    <span
                                      className={
                                        task.isDueSoon
                                          ? 'text-amber-500 font-semibold'
                                          : ''
                                      }
                                    >
                                      {task.dueDate}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                  {task.attachmentsCount > 0 && (
                                    <span className="flex items-center gap-0.5">
                                      <Paperclip className="size-3" />
                                      {task.attachmentsCount}
                                    </span>
                                  )}
                                  {task.comments.length > 0 && (
                                    <span className="flex items-center gap-0.5">
                                      <MessageSquare className="size-3" />
                                      {task.comments.length}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Card>
                          )
                        })
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* ANALYTICS & SPRINT SUMMARY VIEW - FULL WIDTH & RESPONSIVE */
            <div className="w-full space-y-6 py-2">
              {/* Top KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                <Card className="p-4 border-border/80 bg-card/60 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      Total Tasks
                    </span>
                    <Layers className="size-4 text-primary" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono">
                    {totalTasksCount}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Across 4 agile swimlanes
                  </p>
                </Card>

                <Card className="p-4 border-border bg-card">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      In Flight
                    </span>
                    <Play className="size-4 text-foreground" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono text-foreground">
                    {inProgressCount + inReviewCount}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {inProgressCount} active · {inReviewCount} in review
                  </p>
                </Card>

                <Card className="p-4 border-border bg-card">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      Completed
                    </span>
                    <CheckCircle2 className="size-4 text-foreground" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono text-foreground">
                    {completedTasksCount}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {sprintProgress}% sprint velocity
                  </p>
                </Card>

                <Card className="p-4 border-border/80 bg-card/60 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      Urgent Issues
                    </span>
                    <Flame className="size-4 text-destructive" />
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono text-destructive">
                    {urgentCount}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Requires immediate triage
                  </p>
                </Card>
              </div>

              {/* Middle Section: Progress Circle + Stage Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="p-5 flex flex-col items-center justify-center text-center bg-card/60">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Sprint Completion
                  </span>
                  <CircularProgress
                    value={sprintProgress}
                    size={110}
                    strokeWidth={10}
                    variant="default"
                    showValue
                  />
                  <p className="text-xs text-muted-foreground mt-4 max-w-[200px]">
                    {completedTasksCount} of {totalTasksCount} issues resolved this sprint cycle.
                  </p>
                </Card>

                <Card className="lg:col-span-2 p-5 space-y-4 bg-card/60">
                  <div>
                    <h3 className="text-sm font-semibold">Workflow Column Allocation</h3>
                    <p className="text-xs text-muted-foreground">
                      Real-time distribution of issues across the development lifecycle.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    {COLUMNS.map((col) => {
                      const count = tasks.filter((t) => t.column === col.id).length
                      const percentage =
                        totalTasksCount > 0
                          ? Math.round((count / totalTasksCount) * 100)
                          : 0
                      return (
                        <div key={col.id} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1.5 font-medium">
                              <span className={`size-2 rounded-full ${col.dotClass}`} />
                              {col.label}
                            </span>
                            <span className="font-mono text-muted-foreground">
                              {count} tasks ({percentage}%)
                            </span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                        </div>
                      )
                    })}
                  </div>
                </Card>
              </div>

              {/* Team Workload Table */}
              <Card className="p-4 sm:p-5 space-y-3 bg-card/60 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">Team Allocation & Velocity</h3>
                    <p className="text-xs text-muted-foreground">
                      Active issues currently assigned per team member.
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {INITIAL_MEMBERS.length} Engineers
                  </Badge>
                </div>

                <div className="divide-y divide-border/60 pt-2">
                  {INITIAL_MEMBERS.map((member) => {
                    const assigned = tasks.filter(
                      (t) => t.assignee.id === member.id,
                    )
                    const doneCount = assigned.filter(
                      (t) => t.column === 'done',
                    ).length
                    const inFlight = assigned.length - doneCount

                    return (
                      <div
                        key={member.id}
                        className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar size="default" className="size-9 border border-border shrink-0">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-foreground truncate">
                              {member.name}
                            </div>
                            <div className="text-[11px] text-muted-foreground truncate">
                              {member.role}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-5 text-xs font-mono">
                          <div className="text-left sm:text-right">
                            <span className="text-muted-foreground text-[10px] block">
                              ACTIVE
                            </span>
                            <span className="font-bold text-foreground">
                              {inFlight}
                            </span>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="text-muted-foreground text-[10px] block">
                              RESOLVED
                            </span>
                            <span className="font-bold text-foreground">
                              {doneCount}
                            </span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedAssignee(member.id)
                              setActiveTab('board')
                            }}
                            className="h-7 text-xs shrink-0"
                          >
                            View Cards
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>
          )}
        </main>

        {/* CREATE TASK MODAL (DIALOG) WITH REACT-HOOK-FORM */}
        <Dialog open={isCreateOpen} onOpenChange={handleOpenChangeCreate}>
          <DialogContent className="sm:max-w-lg p-5">
            <DialogHeader>
              <DialogTitle className="text-base font-bold flex items-center gap-2">
                <Plus className="size-4 text-primary" />
                Create New Kanban Issue
              </DialogTitle>
              <DialogDescription className="text-xs">
                Fill in ticket details to schedule work into Sprint 42 using React Hook Form.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmitCreateTask)} className="space-y-4 pt-2">
                <FormField
                  control={form.control}
                  name="title"
                  rules={{ required: 'Task title is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-foreground">
                        Task Title <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Implement WebGPU particle compute pass"
                          className="h-9 text-xs"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="column"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-foreground">
                          Initial Column
                        </FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-9 text-xs">
                              <SelectValue placeholder="Column" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {COLUMNS.map((col) => (
                              <SelectItem key={col.id} value={col.id}>
                                {col.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-foreground">
                          Priority
                        </FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-9 text-xs">
                              <SelectValue placeholder="Priority" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="tag"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-foreground">
                          Category Tag
                        </FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-9 text-xs">
                              <SelectValue placeholder="Tag" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {TAGS.filter((t) => t !== 'All').map((tag) => (
                              <SelectItem key={tag} value={tag}>
                                {tag}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="assigneeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-foreground">
                          Assignee
                        </FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-9 text-xs">
                              <SelectValue placeholder="Assignee" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {INITIAL_MEMBERS.map((m) => (
                              <SelectItem key={m.id} value={m.id}>
                                {m.name} ({m.initials})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-foreground">
                        Target Due Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Oct 20"
                          className="h-9 text-xs"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-foreground">
                        Description & Context
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Provide technical scope, specs, or acceptance requirements..."
                          className="text-xs min-h-[75px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter className="pt-2 gap-2 sm:gap-0">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    variant="default"
                    size="sm"
                    className="text-xs font-semibold"
                  >
                    Create Issue
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {/* TASK DETAIL DRAWER (SHEET) */}
        <Sheet open={isDetailOpen} onOpenChange={handleOpenChangeDetail}>
          <SheetContent className="w-full sm:max-w-xl overflow-y-auto p-5 space-y-5">
            {selectedTask && (
              <>
                <SheetHeader className="space-y-2 border-b border-border/70 pb-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground font-bold">
                        {selectedTask.code}
                      </span>
                      <Badge variant="glass" className="text-xs">
                        {selectedTask.tag}
                      </Badge>
                      {renderPriorityBadge(selectedTask.priority)}
                    </div>

                    <Select
                      value={selectedTask.column}
                      onValueChange={(val) =>
                        handleMoveTask(selectedTask.id, val as ColumnId)
                      }
                    >
                      <SelectTrigger className="h-7 text-xs w-36">
                        <SelectValue placeholder="Move Column" />
                      </SelectTrigger>
                      <SelectContent>
                        {COLUMNS.map((col) => (
                          <SelectItem key={col.id} value={col.id}>
                            <span className="flex items-center gap-1.5">
                              <span className={`size-2 rounded-full ${col.dotClass}`} />
                              {col.label}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <SheetTitle className="text-base font-bold text-left leading-snug">
                    {selectedTask.title}
                  </SheetTitle>
                  <SheetDescription className="text-xs text-left leading-relaxed">
                    {selectedTask.description}
                  </SheetDescription>
                </SheetHeader>

                {/* Assignee & Dates Summary */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-lg border border-border/60 bg-muted/20 text-xs">
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase font-semibold block">
                      Assigned Engineer
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar size="sm" className="size-6">
                        <AvatarImage src={selectedTask.assignee.avatar} />
                        <AvatarFallback>
                          {selectedTask.assignee.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="font-semibold block leading-tight">
                          {selectedTask.assignee.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {selectedTask.assignee.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase font-semibold block">
                      Sprint Target
                    </span>
                    <div className="flex items-center gap-1.5 mt-1.5 font-mono">
                      <Calendar className="size-3.5 text-muted-foreground" />
                      <span>{selectedTask.dueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Subtasks Checklist */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <CheckSquare className="size-3.5" />
                      Subtask Checklist
                    </h4>
                    <span className="text-xs font-mono text-muted-foreground">
                      {selectedTask.subtasks.filter((s) => s.completed).length}/
                      {selectedTask.subtasks.length} done
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {selectedTask.subtasks.map((st) => (
                      <div
                        key={st.id}
                        onClick={() =>
                          handleToggleSubtask(selectedTask.id, st.id)
                        }
                        className={`flex items-center gap-2.5 p-2 rounded-md border text-xs cursor-pointer transition-colors ${
                          st.completed
                            ? 'bg-muted/40 border-border/40 text-muted-foreground line-through'
                            : 'bg-card border-border/70 text-foreground hover:border-primary/50'
                        }`}
                      >
                        <Checkbox
                          checked={st.completed}
                          onCheckedChange={() =>
                            handleToggleSubtask(selectedTask.id, st.id)
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <span className="flex-1 select-none">{st.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Add subtask field */}
                  <div className="flex items-center gap-2 pt-1">
                    <Input
                      value={newSubtaskInput}
                      onChange={(e) => setNewSubtaskInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          handleAddSubtask()
                        }
                      }}
                      placeholder="Add another checklist item..."
                      className="h-8 text-xs"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleAddSubtask}
                      className="h-8 text-xs shrink-0"
                    >
                      Add
                    </Button>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <MessageSquare className="size-3.5" />
                    Discussion & Activity ({selectedTask.comments.length})
                  </h4>

                  {/* Comment composer */}
                  <div className="space-y-2">
                    <Textarea
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      placeholder="Leave a comment or QA note..."
                      className="min-h-[60px] text-xs"
                    />
                    <div className="flex justify-end">
                      <Button
                        size="sm"
                        variant="default"
                        disabled={!commentInput.trim()}
                        onClick={handleAddComment}
                        className="h-7 text-xs gap-1 font-semibold"
                      >
                        <Send className="size-3" />
                        Post Note
                      </Button>
                    </div>
                  </div>

                  {/* Comment stream */}
                  <div className="space-y-2.5 pt-2">
                    {selectedTask.comments.length === 0 ? (
                      <p className="text-xs text-muted-foreground text-center py-3">
                        No comments yet. Start the discussion!
                      </p>
                    ) : (
                      selectedTask.comments.map((comm) => (
                        <div
                          key={comm.id}
                          className="p-3 rounded-lg border border-border/60 bg-muted/20 space-y-1.5 text-xs"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 font-semibold">
                              <Avatar size="sm" className="size-5">
                                <AvatarImage src={comm.avatar} />
                                <AvatarFallback className="text-[9px]">
                                  {comm.author[0]}
                                </AvatarFallback>
                              </Avatar>
                              <span>{comm.author}</span>
                            </div>
                            <span className="text-[10px] text-muted-foreground font-mono">
                              {comm.timeAgo}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {comm.text}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <SheetFooter className="border-t border-border/70 pt-4 flex flex-row items-center justify-between gap-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteTask(selectedTask.id)}
                    className="text-xs gap-1"
                  >
                    <Trash2 className="size-3.5" />
                    Delete Issue
                  </Button>
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      Close Drawer
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
  )
}
