'use client'

import React, { useState } from 'react'
import {
  LayoutShell,
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
  LayoutShellHeader,
  LayoutShellContent,
  useLayoutShell,
  cn,
  Progress,
  Badge,
  Button,
  Uploader,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from 'vibe-ui'
import {
  Layers,
  Settings,
  Users,
  Database,
  Terminal,
  Shield,
  Bell,
  CreditCard,
  Cloud,
  RefreshCw,
  Plus,
  Play,
  ArrowUpRight,
  HardDrive,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  User,
  LogOut,
} from 'lucide-react'

// Icon wrappers for standard ESM definitions
const LayersIcon = Layers as any
const SettingsIcon = Settings as any
const UsersIcon = Users as any
const DatabaseIcon = Database as any
const TerminalIcon = Terminal as any
const ShieldIcon = Shield as any
const BellIcon = Bell as any
const CreditCardIcon = CreditCard as any
const CloudIcon = Cloud as any
const RefreshCwIcon = RefreshCw as any
const PlusIcon = Plus as any
const PlayIcon = Play as any
const ArrowUpRightIcon = ArrowUpRight as any
const HardDriveIcon = HardDrive as any
const CpuIcon = Cpu as any
const CheckIcon = CheckCircle2 as any
const WarningIcon = AlertTriangle as any
const UserIcon = User as any
const LogOutIcon = LogOut as any

function SidebarUserMenu() {
  const { isCollapsed } = useLayoutShell()

  return (
    <div
      className={cn(
        'border-t border-primary/10 p-3 mt-auto flex items-center gap-3',
        isCollapsed ? 'justify-center' : 'justify-between',
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              'flex items-center focus:outline-none cursor-pointer',
              isCollapsed
                ? 'justify-center w-full'
                : 'text-left w-full gap-2.5',
            )}
          >
            <Avatar className="h-7 w-7 border border-primary/30 shrink-0">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                alt="Cyber Admin"
              />
              <AvatarFallback className="bg-primary/10 text-primary text-[9px] font-mono font-bold">
                CA
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono text-zinc-200 font-bold uppercase tracking-wider truncate">
                  Node Admin
                </span>
                <span className="text-[8px] font-mono text-muted-foreground truncate">
                  admin@cyber.analytics
                </span>
              </div>
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={isCollapsed ? 'center' : 'start'}
          side={isCollapsed ? 'right' : 'top'}
          variant="glass"
          className="w-48 bg-zinc-950/90 border-primary/20 text-zinc-200"
        >
          <div className="flex flex-col p-2 select-none border-b border-primary/10 pb-2 mb-1">
            <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
              Node Admin
            </span>
            <span className="text-[9px] font-mono text-muted-foreground truncate">
              admin@cyber.analytics
            </span>
          </div>
          <DropdownMenuItem className="cursor-pointer gap-2 text-xs hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
            <UserIcon className="h-3.5 w-3.5 text-primary/70" />
            <span>Secure Node Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer gap-2 text-xs hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
            <CreditCardIcon className="h-3.5 w-3.5 text-primary/70" />
            <span>Resource Allocation</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer gap-2 text-xs hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
            <SettingsIcon className="h-3.5 w-3.5 text-primary/70" />
            <span>Node Config</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-primary/10" />
          <DropdownMenuItem className="cursor-pointer gap-2 text-xs text-red-400 hover:bg-red-500/10 hover:text-red-300 focus:bg-red-500/10 focus:text-red-300">
            <LogOutIcon className="h-3.5 w-3.5" />
            <span>Terminate Session</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

// ────────────────────────────────────────────────────────
// 1. Premium Analytics Dashboard Demo (Emerald Cyber Theme)
// ────────────────────────────────────────────────────────
export function LayoutDemoAnalytics() {
  return (
    <div className="border border-emerald-500/10 rounded-xl overflow-hidden h-[450px] w-full bg-zinc-950 text-white select-none shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)]">
      <LayoutShell
        defaultCollapsed
        className="min-h-0 h-full bg-gradient-to-br from-zinc-950 to-zinc-900"
      >
        <LayoutShellSidebar className="border-r border-emerald-500/10 bg-zinc-900/60 backdrop-blur-md">
          <LayoutShellBrand>
            <span className="text-xs font-black tracking-wider text-emerald-400 font-mono">
              CYBER.ANALYTICS
            </span>
            <span className="text-xs font-black text-emerald-400 font-mono">
              CA
            </span>
          </LayoutShellBrand>
          <LayoutShellNav>
            <LayoutShellNavItem
              active
              className="text-emerald-400 bg-emerald-500/10"
            >
              <LayersIcon className="h-4 w-4 shrink-0" />
              <span>Overview</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem>
              <UsersIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Team Nodes</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem>
              <DatabaseIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Cache Pools</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem>
              <SettingsIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Config</span>
            </LayoutShellNavItem>
          </LayoutShellNav>
          <SidebarUserMenu />
        </LayoutShellSidebar>
        <div className="flex-1 flex flex-col min-w-0">
          <LayoutShellHeader className="border-b border-emerald-500/10 bg-zinc-900/40">
            <span className="text-[10px] font-mono text-emerald-400/70">
              ENVIRONMENT: PRODUCTION
            </span>
            <div className="flex items-center gap-3.5">
              <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Sync Active
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative focus:outline-none cursor-pointer p-1 rounded-md hover:bg-emerald-500/5 transition-colors">
                    <BellIcon className="h-4 w-4 text-emerald-400/60 hover:text-emerald-400 transition-colors" />
                    <span className="absolute top-1 right-1 flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  variant="glass"
                  className="w-64 bg-zinc-950/90 border-emerald-500/20 text-zinc-200 p-2"
                >
                  <div className="flex items-center justify-between p-2 select-none border-b border-emerald-500/10 pb-2 mb-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      Active Alerts
                    </span>
                    <Badge className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[8px] font-mono font-bold px-1.5 py-0">
                      3 NEW
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-2 rounded hover:bg-emerald-500/10 focus:bg-emerald-500/10 transition-colors">
                      <div className="flex items-center gap-1.5 w-full">
                        <WarningIcon className="h-3 w-3 text-amber-500 shrink-0" />
                        <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                          Node Utilization Peak
                        </span>
                      </div>
                      <span className="text-[9px] text-zinc-400 leading-normal pl-4">
                        Core cluster-3 hit 94% CPU workload average. Autoscale
                        initiated.
                      </span>
                      <span className="text-[8px] font-mono text-muted-foreground/60 pl-4 mt-0.5">
                        2 minutes ago
                      </span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-2 rounded hover:bg-emerald-500/10 focus:bg-emerald-500/10 transition-colors">
                      <div className="flex items-center gap-1.5 w-full">
                        <ShieldIcon className="h-3 w-3 text-emerald-400 shrink-0" />
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                          SecOps Authorization
                        </span>
                      </div>
                      <span className="text-[9px] text-zinc-400 leading-normal pl-4">
                        Remote shell session authorized for root terminal
                        admin-02.
                      </span>
                      <span className="text-[8px] font-mono text-muted-foreground/60 pl-4 mt-0.5">
                        14 minutes ago
                      </span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-2 rounded hover:bg-emerald-500/10 focus:bg-emerald-500/10 transition-colors">
                      <div className="flex items-center gap-1.5 w-full">
                        <CheckIcon className="h-3 w-3 text-emerald-400 shrink-0" />
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                          Database Sync Complete
                        </span>
                      </div>
                      <span className="text-[9px] text-zinc-400 leading-normal pl-4">
                        Uptime database transaction logs successfully mirrored
                        to backup pools.
                      </span>
                      <span className="text-[8px] font-mono text-muted-foreground/60 pl-4 mt-0.5">
                        1 hour ago
                      </span>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </LayoutShellHeader>
          <LayoutShellContent className="p-5 space-y-5 overflow-y-auto no-scrollbar">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 bg-zinc-900/40 border border-emerald-500/10 rounded-lg space-y-1 min-w-0">
                <span className="text-[8px] text-muted-foreground font-mono uppercase tracking-wider block whitespace-nowrap truncate">
                  Traffic
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-black font-mono">2.4M</span>
                  <span className="text-[8px] text-emerald-400 font-mono font-bold whitespace-nowrap">
                    ↗+12%
                  </span>
                </div>
              </div>
              <div className="p-2.5 bg-zinc-900/40 border border-emerald-500/10 rounded-lg space-y-1 min-w-0">
                <span className="text-[8px] text-muted-foreground font-mono uppercase tracking-wider block whitespace-nowrap truncate">
                  Sockets
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-black font-mono">48.2K</span>
                  <span className="text-[8px] text-emerald-400 font-mono font-bold whitespace-nowrap">
                    ↗+8%
                  </span>
                </div>
              </div>
              <div className="p-2.5 bg-zinc-900/40 border border-emerald-500/10 rounded-lg space-y-1 min-w-0">
                <span className="text-[8px] text-muted-foreground font-mono uppercase tracking-wider block whitespace-nowrap truncate">
                  Uptime
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-black font-mono">99.9%</span>
                  <span className="text-[8px] text-muted-foreground font-mono whitespace-nowrap">
                    ok
                  </span>
                </div>
              </div>
            </div>

            {/* Performance charts grid mock */}
            <div className="p-4 bg-zinc-900/30 border border-emerald-500/10 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400/80">
                  Active CPU Workload
                </h4>
                <span className="text-[10px] font-mono font-bold text-emerald-400">
                  42% load avg
                </span>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-muted-foreground font-mono">
                    <span>core-master-0</span>
                    <span className="text-emerald-400 font-bold">58%</span>
                  </div>
                  <Progress
                    value={58}
                    className="h-1.5 bg-zinc-800 [&>div]:bg-emerald-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-muted-foreground font-mono">
                    <span>worker-daemon-1</span>
                    <span className="text-emerald-400 font-bold">26%</span>
                  </div>
                  <Progress
                    value={26}
                    className="h-1.5 bg-zinc-800 [&>div]:bg-emerald-500/80"
                  />
                </div>
              </div>
            </div>
          </LayoutShellContent>
        </div>
      </LayoutShell>
    </div>
  )
}

// ────────────────────────────────────────────────────────
// 2. Database Management Console (Amethyst Purple Theme)
// ────────────────────────────────────────────────────────
export function LayoutDemoDatabase() {
  const [synced, setSynced] = useState(true)

  return (
    <div className="border border-indigo-500/10 rounded-xl overflow-hidden h-[450px] w-full bg-slate-950 text-slate-100 select-none shadow-[0_0_50px_-12px_rgba(99,102,241,0.1)]">
      <LayoutShell className="min-h-0 h-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/20">
        <LayoutShellSidebar className="border-r border-indigo-500/10 bg-slate-900/60 backdrop-blur-md">
          <LayoutShellBrand>
            <span className="text-xs font-black tracking-wider text-indigo-400 font-sans">
              AMETHYST.DB
            </span>
            <span className="text-xs font-black text-indigo-400 font-sans">
              AM
            </span>
          </LayoutShellBrand>
          <LayoutShellNav>
            <LayoutShellNavItem>
              <LayersIcon className="h-4 w-4 shrink-0 text-slate-400" />
              <span>Clusters</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem
              active
              className="text-indigo-400 bg-indigo-500/10"
            >
              <DatabaseIcon className="h-4 w-4 shrink-0" />
              <span>Instances</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem>
              <ShieldIcon className="h-4 w-4 shrink-0 text-slate-400" />
              <span>Security</span>
            </LayoutShellNavItem>
          </LayoutShellNav>
        </LayoutShellSidebar>
        <div className="flex-1 flex flex-col min-w-0">
          <LayoutShellHeader className="border-b border-indigo-500/10 bg-slate-900/40">
            <span className="text-[10px] font-sans text-indigo-400">
              CONN: main-cluster.aws.internal
            </span>
            <Button
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md text-xs py-1 px-3 h-8 cursor-pointer rounded-lg border border-indigo-500/30"
              onClick={() => {
                setSynced(false)
                setTimeout(() => setSynced(true), 1500)
              }}
            >
              <RefreshCwIcon
                className={`h-3 w-3 mr-1.5 ${!synced && 'animate-spin'}`}
              />
              {synced ? 'Backup Node' : 'Syncing...'}
            </Button>
          </LayoutShellHeader>
          <LayoutShellContent className="p-5 space-y-4 overflow-y-auto no-scrollbar">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 text-left">
              Relational Data Clusters
            </h3>

            {/* Custom columns spacing grid layout to prevent text collision */}
            <div className="border border-indigo-500/10 rounded-lg overflow-hidden bg-slate-900/40 text-[11px]">
              <div className="grid grid-cols-[1.5fr_1.2fr_1.2fr_1fr] p-2 bg-indigo-500/5 border-b border-indigo-500/10 font-bold uppercase tracking-wider text-[9px] text-indigo-400/80">
                <span>Node Name</span>
                <span>Type</span>
                <span>Version</span>
                <span className="text-right">Status</span>
              </div>
              <div className="grid grid-cols-[1.5fr_1.2fr_1.2fr_1fr] p-2.5 border-b border-indigo-500/5 items-center">
                <span className="font-mono text-white font-semibold truncate">
                  db-primary-node
                </span>
                <span className="text-slate-300 truncate">PostgreSQL</span>
                <span className="text-slate-400 font-mono text-[10px]">
                  16.2-AWS
                </span>
                <span className="text-right">
                  <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 text-[9px]">
                    Active
                  </Badge>
                </span>
              </div>
              <div className="grid grid-cols-[1.5fr_1.2fr_1.2fr_1fr] p-2.5 border-b border-indigo-500/5 items-center">
                <span className="font-mono text-white font-semibold truncate">
                  db-replica-east
                </span>
                <span className="text-slate-300 truncate">PostgreSQL</span>
                <span className="text-slate-400 font-mono text-[10px]">
                  16.2-AWS
                </span>
                <span className="text-right">
                  <Badge className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 py-0.5 px-1.5 text-[9px]">
                    Mirror
                  </Badge>
                </span>
              </div>
              <div className="grid grid-cols-[1.5fr_1.2fr_1.2fr_1fr] p-2.5 items-center">
                <span className="font-mono text-white font-semibold truncate">
                  db-glacier-vault
                </span>
                <span className="text-slate-300 truncate">S3 Glacier</span>
                <span className="text-slate-400 font-mono text-[10px]">
                  Standard
                </span>
                <span className="text-right">
                  <Badge className="bg-slate-800 text-slate-400 border border-slate-700 py-0.5 px-1.5 text-[9px]">
                    Static
                  </Badge>
                </span>
              </div>
            </div>

            <div className="p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-lg flex items-start gap-3">
              <CheckIcon className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-left">
                <h4 className="text-xs font-bold text-indigo-300">
                  Automated Storage Safe
                </h4>
                <p className="text-[10px] text-slate-400">
                  All data nodes verified. Database integrity indexes are
                  optimal.
                </p>
              </div>
            </div>
          </LayoutShellContent>
        </div>
      </LayoutShell>
    </div>
  )
}

// ────────────────────────────────────────────────────────
// 3. DevOps Terminal Monitor (Green Terminal Theme)
// ────────────────────────────────────────────────────────
export function LayoutDemoDevOps() {
  const [logs, setLogs] = useState<string[]>([
    'SYS: Init bind process on port 443...',
    'SEC: SSL Certificates loaded successfully (LetsEncrypt)',
    'CLUSTER: Spawning daemon worker clusters...',
    'CLUSTER: Thread-0 registered at PID 8044',
    'CLUSTER: Thread-1 registered at PID 8045',
  ])

  const addMockLog = () => {
    const timestamp = new Date().toTimeString().split(' ')[0]
    const list = [
      `[${timestamp}] ROUTER: Cache hit GET /api/v1/telemetry`,
      `[${timestamp}] COMPILER: Bundle built successfully (14ms)`,
      `[${timestamp}] SOCKETS: Flushing old socket stream buffer`,
      `[${timestamp}] DAEMON: Telemetry ping delivered to server`,
    ]
    const randomLog = list[Math.floor(Math.random() * list.length)]
    setLogs((prev) => [...prev.slice(-4), randomLog])
  }

  return (
    <div className="border border-green-500/20 rounded-xl overflow-hidden h-[450px] w-full bg-black text-green-400 select-none shadow-[0_0_60px_-15px_rgba(34,197,94,0.15)] font-mono">
      <LayoutShell
        className="min-h-0 h-full"
        style={{ backgroundColor: '#09090b' }}
      >
        <LayoutShellSidebar
          className="border-r border-green-500/20"
          style={{ backgroundColor: '#18181b' }}
        >
          <LayoutShellBrand className="border-b border-green-500/20 px-4">
            <span className="text-xs font-black tracking-widest text-green-400 uppercase">
              CORE_DAEMON
            </span>
            <span className="text-xs font-black text-green-400">CD</span>
          </LayoutShellBrand>
          <LayoutShellNav className="p-2 space-y-1">
            <LayoutShellNavItem
              active
              className="text-black bg-green-500 border border-green-500/80 hover:bg-green-500/90"
            >
              <TerminalIcon className="h-4 w-4 shrink-0" />
              <span>SYSTEM_LOG</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem className="text-green-400/80 hover:bg-green-500/5 hover:text-green-400">
              <CpuIcon className="h-4 w-4 shrink-0" />
              <span>METRICS</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem className="text-green-400/80 hover:bg-green-500/5 hover:text-green-400">
              <CloudIcon className="h-4 w-4 shrink-0" />
              <span>NETWORK</span>
            </LayoutShellNavItem>
          </LayoutShellNav>
        </LayoutShellSidebar>
        <div
          className="flex-1 flex flex-col min-w-0"
          style={{ backgroundColor: '#09090b' }}
        >
          <LayoutShellHeader
            className="border-b border-green-500/20"
            style={{ backgroundColor: '#09090b' }}
          >
            <span className="text-[10px] text-green-400/60 font-bold uppercase">
              DAEMON_PID: 90224
            </span>
            <Button
              className="bg-black hover:bg-green-500/10 text-green-400 hover:text-green-950 font-mono border border-green-500/30 text-xs px-2.5 h-7 cursor-pointer"
              onClick={addMockLog}
            >
              <PlusIcon className="h-3 w-3 mr-1" /> INPUT_EVENT
            </Button>
          </LayoutShellHeader>
          <LayoutShellContent
            className="p-5 flex flex-col space-y-4 h-full overflow-hidden"
            style={{ backgroundColor: '#09090b' }}
          >
            {/* Resource details */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2 border border-green-500/25 bg-green-500/5 text-left">
                <span className="text-[9px] text-green-400/60 font-bold uppercase tracking-wider block">
                  CORE_TEMP
                </span>
                <span className="text-base font-black text-green-400">
                  46.8 °C
                </span>
              </div>
              <div className="p-2 border border-green-500/25 bg-green-500/5 text-left">
                <span className="text-[9px] text-green-400/60 font-bold uppercase tracking-wider block">
                  RAM_ALLOC
                </span>
                <span className="text-base font-black text-green-400">
                  3.4 GB
                </span>
              </div>
            </div>

            {/* Terminal output console */}
            <div className="flex-1 border border-green-500/20 bg-green-500/5 p-3 font-mono text-[10px] text-green-400 text-left overflow-y-auto no-scrollbar space-y-1 relative">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none" />
              {logs.map((log, i) => (
                <div
                  key={i}
                  className="leading-relaxed whitespace-pre-wrap"
                >{`> ${log}`}</div>
              ))}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="animate-pulse h-2.5 w-1.5 bg-green-500 inline-block" />
                <span className="text-green-400/40">ready_for_input_</span>
              </div>
            </div>
          </LayoutShellContent>
        </div>
      </LayoutShell>
    </div>
  )
}

// ────────────────────────────────────────────────────────
// 4. Asset Storage & File Manager (Rose Quartz / Pink Theme)
// ────────────────────────────────────────────────────────
export function LayoutDemoAssets() {
  return (
    <div className="border border-pink-500/10 rounded-xl overflow-hidden h-[450px] w-full bg-zinc-950 text-white select-none shadow-[0_0_50px_-12px_rgba(244,63,94,0.1)]">
      <LayoutShell className="min-h-0 h-full bg-gradient-to-br from-zinc-950 to-pink-950/10">
        <LayoutShellSidebar className="border-r border-pink-500/10 bg-zinc-900/60 backdrop-blur-md">
          <LayoutShellBrand>
            <span className="text-xs font-black tracking-wider text-pink-400 font-sans">
              ROSE.ASSETS
            </span>
            <span className="text-xs font-black text-pink-400 font-sans">
              RA
            </span>
          </LayoutShellBrand>
          <LayoutShellNav>
            <LayoutShellNavItem active className="text-pink-400 bg-pink-500/10">
              <HardDriveIcon className="h-4 w-4 shrink-0" />
              <span>Assets</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem>
              <LayersIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Buckets</span>
            </LayoutShellNavItem>
          </LayoutShellNav>
        </LayoutShellSidebar>
        <div className="flex-1 flex flex-col min-w-0">
          <LayoutShellHeader className="border-b border-pink-500/10 bg-zinc-900/40">
            <span className="text-[10px] font-sans text-pink-400/80">
              ALLOCATION: 10 GB MAX
            </span>
            <span className="text-[10px] font-sans text-muted-foreground">
              Used: 4.22 GB (42%)
            </span>
          </LayoutShellHeader>

          {/* Horizontal Split Grid (prevents Uploader overlapping / overflowing the cards) */}
          <LayoutShellContent className="p-5 h-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full items-stretch">
              {/* Left col - Uploader box */}
              <div className="flex flex-col justify-center border border-dashed border-pink-500/20 bg-pink-500/5 rounded-xl p-4 text-center space-y-2">
                <Uploader
                  maxSizeMB={2}
                  accept={['.png', '.jpg', '.jpeg']}
                  className="w-full h-full min-h-0 border-0 bg-transparent py-0"
                />
              </div>

              {/* Right col - File details list */}
              <div className="flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-2">
                  <span className="text-[9px] text-pink-400 font-bold uppercase tracking-wider block">
                    Storage Allocation Summary
                  </span>
                  <div className="p-3 bg-zinc-900/60 border border-white/5 rounded-lg space-y-1.5">
                    <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                      <span>Image Assets</span>
                      <span className="text-white font-bold">3.4 GB</span>
                    </div>
                    <Progress
                      value={34}
                      className="h-1 bg-zinc-800 [&>div]:bg-pink-500"
                    />
                  </div>
                  <div className="p-3 bg-zinc-900/60 border border-white/5 rounded-lg space-y-1.5">
                    <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                      <span>Document Assets</span>
                      <span className="text-white font-bold">820 MB</span>
                    </div>
                    <Progress
                      value={8}
                      className="h-1 bg-zinc-800 [&>div]:bg-pink-400"
                    />
                  </div>
                </div>

                <div className="p-3 bg-pink-500/5 border border-pink-500/20 rounded-lg flex items-center gap-2">
                  <CloudIcon className="h-4 w-4 text-pink-400 shrink-0" />
                  <span className="text-[9px] text-muted-foreground">
                    Assets auto-sync with edge CDN network latency under 4ms.
                  </span>
                </div>
              </div>
            </div>
          </LayoutShellContent>
        </div>
      </LayoutShell>
    </div>
  )
}

// ────────────────────────────────────────────────────────
// 5. Billing & Subscription Panel (Gold Obsidian Theme)
// ────────────────────────────────────────────────────────
export function LayoutDemoBilling() {
  return (
    <div className="border border-amber-500/20 rounded-xl overflow-hidden h-[450px] w-full bg-zinc-950 text-stone-100 select-none shadow-[0_0_50px_-12px_rgba(245,158,11,0.1)]">
      <LayoutShell className="min-h-0 h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950/10">
        <LayoutShellSidebar className="border-r border-amber-500/20 bg-zinc-900/60 backdrop-blur-md">
          <LayoutShellBrand>
            <span className="text-xs font-black tracking-wider text-amber-400 font-serif">
              GOLD.Obsidian
            </span>
            <span className="text-xs font-black text-amber-400 font-serif">
              GO
            </span>
          </LayoutShellBrand>
          <LayoutShellNav>
            <LayoutShellNavItem
              active
              className="text-amber-400 bg-amber-500/10"
            >
              <CreditCardIcon className="h-4 w-4 shrink-0" />
              <span>Billing</span>
            </LayoutShellNavItem>
            <LayoutShellNavItem>
              <LayersIcon className="h-4 w-4 shrink-0 text-stone-400" />
              <span>History</span>
            </LayoutShellNavItem>
          </LayoutShellNav>
        </LayoutShellSidebar>
        <div className="flex-1 flex flex-col min-w-0">
          <LayoutShellHeader className="border-b border-amber-500/20 bg-zinc-900/40">
            <span className="text-[10px] font-sans text-stone-400">
              TIER: PROFESSIONAL SEED
            </span>
            <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px] py-0.5 px-1.5 font-bold">
              Premium Active
            </Badge>
          </LayoutShellHeader>
          <LayoutShellContent className="p-5 space-y-4 overflow-y-auto no-scrollbar">
            {/* Card tiers */}
            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3 border border-amber-500/30 bg-amber-500/5 rounded-lg space-y-1.5 relative">
                <span className="absolute top-1.5 right-1.5">
                  <Badge className="bg-amber-500 text-zinc-950 font-black text-[8px] py-0 px-1 border-0">
                    ACTIVE
                  </Badge>
                </span>
                <h4 className="font-bold text-[11px] text-amber-400 uppercase tracking-wider">
                  Professional
                </h4>
                <div className="flex items-baseline">
                  <span className="text-xl font-black font-mono">$49</span>
                  <span className="text-[9px] text-stone-400 ml-1">/ mo</span>
                </div>
                <ul className="text-[9px] text-stone-400 space-y-0.5 list-disc list-inside">
                  <li>20 GB Cloud space</li>
                  <li>Unlimited clusters</li>
                </ul>
              </div>

              <div className="p-3 border border-white/5 bg-zinc-900/40 rounded-lg space-y-1.5 hover:border-amber-500/10 transition-colors">
                <h4 className="font-bold text-[11px] text-stone-300 uppercase tracking-wider">
                  Enterprise
                </h4>
                <div className="flex items-baseline">
                  <span className="text-xl font-black font-mono">$199</span>
                  <span className="text-[9px] text-stone-400 ml-1">/ mo</span>
                </div>
                <ul className="text-[9px] text-stone-400 space-y-0.5 list-disc list-inside">
                  <li>Unlimited Edge space</li>
                  <li>Dedicated safe vaults</li>
                </ul>
              </div>
            </div>

            {/* Invoices */}
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-amber-500/70 text-left mt-2">
              Historical Invoices
            </h4>
            <div className="border border-white/5 bg-zinc-900/40 rounded-lg text-[10px] overflow-hidden text-left font-mono">
              <div className="grid grid-cols-3 p-1.5 border-b border-white/5 text-stone-400 bg-white/5 text-[9px] font-bold">
                <span>INVOICE_ID</span>
                <span>DATE</span>
                <span className="text-right">TOTAL</span>
              </div>
              <div className="grid grid-cols-3 p-2 border-b border-white/5">
                <span className="text-stone-300">#GO-80442</span>
                <span className="text-stone-400">Jul 24, 2026</span>
                <span className="text-right font-bold text-amber-400">
                  $49.00
                </span>
              </div>
              <div className="grid grid-cols-3 p-2">
                <span className="text-stone-300">#GO-78241</span>
                <span className="text-stone-400">Jun 24, 2026</span>
                <span className="text-right font-bold text-amber-400">
                  $49.00
                </span>
              </div>
            </div>
          </LayoutShellContent>
        </div>
      </LayoutShell>
    </div>
  )
}
