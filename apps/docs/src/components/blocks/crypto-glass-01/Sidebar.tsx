import React from 'react'
import {
  Wallet,
  LayoutDashboard,
  Layers,
  Percent,
  ArrowUpDown,
  LogOut,
  LucideIcon
} from 'lucide-react'

interface LinkItem {
  name: string
  icon: LucideIcon
}

interface SidebarProps {
  sidebarActive: string
  setSidebarActive: (name: string) => void
  mobileSidebar: boolean
  setMobileSidebar: (open: boolean) => void
}

export default function Sidebar({
  sidebarActive,
  setSidebarActive,
  mobileSidebar,
  setMobileSidebar
}: SidebarProps) {
  const links: LinkItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Assets & Rates', icon: Layers },
    { name: 'Yield Staking', icon: Percent },
    { name: 'Instant Swap', icon: ArrowUpDown }
  ]

  return (
    <aside className={`fixed inset-y-0 left-0 w-64 border-r border-slate-200/60 dark:border-white/10 bg-slate-100/40 dark:bg-white/[0.02] backdrop-blur-xl p-6 flex flex-col justify-between z-30 transition-all duration-300 ${mobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="space-y-8">
        {/* Logo brand */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Wallet className="size-5 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              VIBE SYSTEM
            </h2>
            <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold tracking-wider uppercase">Crypto Workspace</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1.5">
          {links.map((link, idx) => {
            const Icon = link.icon
            const isActive = sidebarActive === link.name
            return (
              <button
                key={idx}
                onClick={() => {
                  setSidebarActive(link.name)
                  setMobileSidebar(false)
                }}
                className={`flex items-center gap-3 px-4 py-3 text-xs font-semibold rounded-xl transition-all w-full text-left cursor-pointer border border-transparent ${
                  isActive 
                    ? 'bg-slate-900/5 dark:bg-white/10 border-slate-900/10 dark:border-white/15 text-slate-900 dark:text-white shadow-[0_4px_20px_rgba(255,255,255,0.05),_inset_0_1px_1px_rgba(255,255,255,0.2)]' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5'
                }`}
              >
                <Icon className="size-4 shrink-0" />
                <span>{link.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* User profile credential widget at the bottom */}
      <div className="border-t border-slate-200/60 dark:border-white/10 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 border border-white/20 flex items-center justify-center font-bold text-xs text-white">
            J
          </div>
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Jenish</h4>
            <p className="text-[10px] text-slate-500 font-medium font-mono">0x7a...d8e2</p>
          </div>
        </div>

        <button className="h-8 w-8 rounded-lg bg-slate-900/5 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-400 transition-all flex items-center justify-center border border-slate-200/60 dark:border-white/5 text-slate-500 dark:text-slate-400 cursor-pointer">
          <LogOut className="size-4" />
        </button>
      </div>
    </aside>
  )
}
