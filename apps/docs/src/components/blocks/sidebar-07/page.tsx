'use client'

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
    <LayoutShell className="h-screen min-h-0 w-full bg-zinc-950 text-foreground">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <LayoutShellHeader className="border-b border-border bg-zinc-900/40 px-6 justify-between flex items-center h-12">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="hover:text-white transition-colors cursor-pointer">
              Build Your Application
            </span>
            <span>/</span>
            <span className="text-white font-medium">Data Fetching</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full cursor-pointer outline-none border-0 p-0 bg-transparent flex">
                <Avatar className="h-7 w-7 hover:opacity-80 transition-opacity">
                  <AvatarFallback className="text-[10px] bg-primary text-primary-foreground font-bold font-mono">
                    AD
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-zinc-950 border-zinc-800 text-zinc-300"
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
                  <AvatarFallback className="bg-zinc-800 text-white font-bold text-sm">
                    VU
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="text-xs font-bold text-white truncate">
                    vibe ui
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    m@example.com
                  </span>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-zinc-900 focus:bg-zinc-900 focus:text-white rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                <User className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-zinc-900 focus:bg-zinc-900 focus:text-white rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                <CreditCard className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-zinc-900 focus:bg-zinc-900 focus:text-white rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                <Bell className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-2 hover:bg-zinc-900 focus:bg-zinc-900 focus:text-white rounded-md cursor-pointer transition-colors text-xs text-zinc-300 border-0 bg-transparent">
                <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </LayoutShellHeader>
        <LayoutShellContent className="p-6 space-y-6 overflow-y-auto">
          {/* 3 Grid items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="aspect-video rounded-xl bg-zinc-900/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">
                card_node_1.dfr
              </span>
            </div>
            <div className="aspect-video rounded-xl bg-zinc-900/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">
                card_node_2.dfr
              </span>
            </div>
            <div className="aspect-video rounded-xl bg-zinc-900/50 border border-border/40 flex items-center justify-center p-4">
              <span className="text-xs text-muted-foreground font-mono">
                card_node_3.dfr
              </span>
            </div>
          </div>

          {/* Bottom main panel */}
          <div className="min-h-[180px] rounded-xl bg-zinc-900/30 border border-border/40 p-6 flex flex-col justify-center items-center text-center space-y-1">
            <h3 className="text-sm font-semibold text-white font-mono">
              Primary Main Workspace
            </h3>
            <p className="text-xs text-muted-foreground">
              Select a sidebar item to fetch nodes into the compiler shell.
            </p>
          </div>
        </LayoutShellContent>
      </div>
    </LayoutShell>
  )
}
