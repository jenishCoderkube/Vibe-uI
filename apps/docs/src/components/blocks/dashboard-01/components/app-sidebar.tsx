'use client'

import React from 'react'
import {
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
} from '@/components/ui/layout-shell'
import {
  GalleryVerticalEnd,
  Layers,
  Users,
  Database,
  Folder,
  MoreVertical,
  User,
  CreditCard,
  Bell,
  LogOut,
} from 'lucide-react'
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
          <span className="text-sm font-bold tracking-tight text-foreground font-mono">
            Vibe Inc.
          </span>
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
            <button className="w-full flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-muted-foreground/5 text-left cursor-pointer transition-colors outline-none border-0 bg-transparent">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage
                    src="https://github.com/vibeui.png"
                    alt="vibe ui"
                  />
                  <AvatarFallback className="bg-muted text-foreground font-bold text-xs">
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
              <MoreVertical className="h-4 w-4 shrink-0 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-background border-border text-muted-foreground"
            side="top"
            align="end"
            sideOffset={12}
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
    </LayoutShellSidebar>
  )
}
