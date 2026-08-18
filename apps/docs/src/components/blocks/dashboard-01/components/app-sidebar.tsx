'use client'

import React from 'react'
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
  Activity,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const LayersIcon = Layers as any
const UsersIcon = Users as any
const DatabaseIcon = Database as any
const FolderIcon = Folder as any
const ActivityIcon = Activity as any

export function AppSidebar({
  activeTab = 'Dashboard',
  setActiveTab,
}: {
  activeTab?: string
  setActiveTab?: (tab: string) => void
}) {
  const { isMobile, state, setOpenMobile } = useSidebar()
  const isCollapsed = state === 'collapsed'

  const navItems = [
    { title: 'Dashboard', icon: LayersIcon },
    { title: 'Lifecycle', icon: ActivityIcon },
    { title: 'Analytics', icon: DatabaseIcon },
    { title: 'Projects', icon: FolderIcon },
    { title: 'Team', icon: UsersIcon },
  ]

  return (
    <Sidebar
      className="border-r border-border bg-muted/60 backdrop-blur-md"
      collapsible="icon"
    >
      <SidebarHeader
        className={cn(
          'border-b border-border h-12 flex flex-row items-center',
          isCollapsed ? 'justify-center px-2' : 'justify-between px-4',
        )}
      >
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground shrink-0">
            <GalleryVerticalEnd className="size-3.5" />
          </div>
          {!isCollapsed && (
            <span className="text-sm font-bold tracking-tight text-foreground font-mono">
              Vibe Inc.
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu className={cn('flex flex-col items-center', isCollapsed ? 'gap-3' : 'gap-1.5')}>
          {navItems.map((item) => (
            <SidebarMenuItem
              key={item.title}
              className="w-full flex justify-center"
            >
              <SidebarMenuButton
                isActive={activeTab === item.title}
                onClick={() => {
                  setActiveTab?.(item.title)
                  if (isMobile) setOpenMobile(false)
                }}
                className={cn(
                  'relative w-full cursor-pointer overflow-hidden transition-all duration-500',
                  activeTab === item.title
                    ? 'text-primary bg-primary/10 font-bold'
                    : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground',
                  isCollapsed ? 'group-data-[collapsible=icon]:h-14! group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:p-0!' : 'h-10 px-3',
                )}
              >
                <div
                  className={cn(
                    'absolute transition-all duration-500 ease-in-out flex items-center justify-center',
                    isCollapsed
                      ? 'left-1/2 -translate-x-1/2 top-[9px] h-5 w-5 scale-110'
                      : 'left-3 top-1/2 -translate-y-1/2 h-4 w-4 scale-100',
                  )}
                >
                  <item.icon className="h-full w-full shrink-0" />
                </div>
                <span
                  className={cn(
                    'absolute transition-all duration-500 ease-in-out whitespace-nowrap origin-center',
                    isCollapsed
                      ? 'left-1/2 -translate-x-1/2 top-[34px] text-[9px] font-medium opacity-80'
                      : 'left-9 top-1/2 -translate-y-1/2 text-xs font-semibold opacity-100',
                  )}
                >
                  {item.title}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {/* Collapsible Dropdown Option for User Settings */}
          {isCollapsed ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuItem className="w-full flex justify-center">
                  <SidebarMenuButton className="relative w-full text-muted-foreground cursor-pointer overflow-hidden transition-all duration-500 group-data-[collapsible=icon]:h-14! group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:p-0! hover:bg-muted/40 hover:text-foreground">
                    <div className="absolute left-1/2 -translate-x-1/2 top-[9px] h-5 w-5 scale-110 flex items-center justify-center">
                      <User className="h-full w-full shrink-0" />
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-[34px] text-[9px] font-medium opacity-80 whitespace-nowrap">
                      User
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="start"
                sideOffset={12}
                className="w-48 bg-background border-border text-muted-foreground"
              >
                <div className="px-2.5 py-2 text-[10px] font-bold text-foreground font-mono uppercase tracking-wider">
                  User Settings
                </div>
                <DropdownMenuSeparator className="bg-muted-foreground/10" />
                <DropdownMenuItem
                  onClick={() => {
                    setActiveTab?.('Profile')
                    if (isMobile) setOpenMobile(false)
                  }}
                  className={cn(
                    'flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs border-0 bg-transparent',
                    activeTab === 'Profile'
                      ? 'text-primary font-bold bg-primary/5'
                      : 'text-muted-foreground',
                  )}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    alert('Navigating to Billing Settings')
                    if (isMobile) setOpenMobile(false)
                  }}
                  className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent"
                >
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    alert('Navigating to Notification Preferences')
                    if (isMobile) setOpenMobile(false)
                  }}
                  className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted focus:bg-muted focus:text-foreground rounded-md cursor-pointer transition-colors text-xs text-muted-foreground border-0 bg-transparent"
                >
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Collapsible className="group/collapsible w-full">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="text-muted-foreground cursor-pointer flex items-center justify-between w-full h-10 px-3 hover:bg-muted/40 hover:text-foreground transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 shrink-0" />
                      <span>User</span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={activeTab === 'Profile'}
                      >
                        <button
                          onClick={() => {
                            setActiveTab?.('Profile')
                            if (isMobile) setOpenMobile(false)
                          }}
                          className="text-xs text-muted-foreground hover:text-foreground cursor-pointer w-full text-left py-1.5 pl-4 block bg-transparent border-0 outline-none"
                        >
                          Profile
                        </button>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <button
                          onClick={() => {
                            alert('Navigating to Billing Settings')
                            if (isMobile) setOpenMobile(false)
                          }}
                          className="text-xs text-muted-foreground hover:text-foreground cursor-pointer w-full text-left py-1.5 pl-4 block bg-transparent border-0 outline-none"
                        >
                          Billing
                        </button>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <button
                          onClick={() => {
                            alert('Navigating to Notification Preferences')
                            if (isMobile) setOpenMobile(false)
                          }}
                          className="text-xs text-muted-foreground hover:text-foreground cursor-pointer w-full text-left py-1.5 pl-4 block bg-transparent border-0 outline-none"
                        >
                          Notifications
                        </button>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-2 border-t border-border/40 shrink-0 flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                'w-full flex items-center gap-3 rounded-lg hover:bg-muted-foreground/5 cursor-pointer transition-colors outline-none border-0 bg-transparent',
                isCollapsed
                  ? 'justify-center p-0 size-12! h-12'
                  : 'p-2 justify-between text-left',
              )}
            >
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
                {!isCollapsed && (
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-xs font-bold text-foreground truncate">
                      vibe ui
                    </span>
                    <span className="text-[10px] text-muted-foreground truncate">
                      m@example.com
                    </span>
                  </div>
                )}
              </div>
              {!isCollapsed && (
                <MoreVertical className="h-4 w-4 shrink-0 text-muted-foreground hover:text-foreground transition-colors" />
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-background border-border text-muted-foreground"
            side={isMobile ? 'bottom' : 'right'}
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
      </SidebarFooter>
    </Sidebar>
  )
}
