'use client'

import React, { useState } from 'react'
import {
  SquarePen,
  Library,
  FolderClosed,
  Clock,
  AtSign,
  Code2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bot,
  LogOut,
  Search,
  Check,
  PanelLeft,
  ChevronDown,
  Settings,
  Pin,
  Store,
  CircleHelp,
  UserCircle,
  SlidersHorizontal,
  Crown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Tooltip } from '@/components/ui/tooltip'

interface Conversation {
  id: string
  title: string
  model: string
  updatedAt: Date
  previewText?: string
}

interface ChatSidebarProps {
  conversations: Conversation[]
  activeId: string | null
  onSelectConversation: (id: string) => void
  onNewChat: () => void
  onRenameChat: (id: string, newTitle: string) => void
  onDeleteChat: (id: string) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  selectedModel: string
  onSelectModel: (model: string) => void
}

export function ChatSidebar({
  conversations,
  activeId,
  onSelectConversation,
  onNewChat,
  onRenameChat,
  onDeleteChat,
  isCollapsed,
  onToggleCollapse,
  searchQuery,
  setSearchQuery,
  mobileOpen,
  setMobileOpen,
  selectedModel,
  onSelectModel,
}: ChatSidebarProps) {
  const filteredConversations = conversations.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectRecent = (id: string) => {
    onSelectConversation(id)
    setMobileOpen(false)
  }

  // Shared dropdown menu content for profile (reused in expanded & collapsed)
  const profileDropdownItems = (
    <>
      {/* Profile header */}
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarFallback className="bg-blue-600 text-white text-[11px] font-bold">JE</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-zinc-900 dark:text-white">jenish</p>
            <p className="text-[11px] text-zinc-500">Go</p>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
      </div>

      <Separator className="bg-zinc-200 dark:bg-zinc-800 my-1" />

      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <Crown className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Upgrade plan</span>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <SlidersHorizontal className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Personalization</span>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <UserCircle className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <Settings className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Settings</span>
      </DropdownMenuItem>

      <Separator className="bg-zinc-200 dark:bg-zinc-800 my-1" />

      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <CircleHelp className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <span>Help</span>
        </div>
        <ChevronRight className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[13px] cursor-pointer gap-2.5 py-2 px-2 rounded-md focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-white">
        <LogOut className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        <span>Log out</span>
      </DropdownMenuItem>
    </>
  )

  // Expanded sidebar content panel
  const sidebarContent = (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#171717] text-zinc-700 dark:text-zinc-200 select-none border-r border-zinc-200 dark:border-zinc-800/40 text-left">
      {/* Sticky top header (Logo + Search button + Collapse button) */}
      <div className="h-14 flex items-center justify-between px-3 shrink-0 sticky top-0 z-10 bg-zinc-50 dark:bg-[#171717]">
        <div className="flex items-center gap-1 select-none">
          <span className="text-[17px] font-semibold tracking-tight text-zinc-900 dark:text-white">Vibe Chat</span>
          <span className="text-zinc-400 dark:text-zinc-500 font-normal text-xs ml-0.5">Go</span>
        </div>
        <div className="flex items-center gap-0.5">
          <Tooltip content="Search conversations">
            <Button
              variant="ghost"
              size="icon"
              className="h-8.5 w-8.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 rounded-lg cursor-pointer"
            >
              <Search className="h-4.5 w-4.5" />
            </Button>
          </Tooltip>
          {!mobileOpen && (
            <Tooltip content="Close sidebar">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleCollapse}
                className="hidden lg:flex h-8.5 w-8.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 rounded-lg cursor-pointer"
                aria-label="Collapse sidebar"
              >
                <PanelLeft className="h-4.5 w-4.5" />
              </Button>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Scrollable body: nav + recents + profile all scroll together */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="flex flex-col">
          {/* Main navigation list */}
          <div className="px-2.5 space-y-0.5 select-none">
            <button
              onClick={() => {
                onNewChat()
                setMobileOpen(false)
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none"
            >
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <SquarePen className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">New chat</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <Library className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Library</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <FolderClosed className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Projects</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <Clock className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Scheduled</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <AtSign className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Plugins</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <Code2 className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">Codex</span>
            </button>

            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white transition-all text-left focus:outline-none">
              <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400">
                <MoreHorizontal className="h-4.5 w-4.5" />
              </div>
              <span className="truncate flex-1">More</span>
            </button>
          </div>

          {/* Recents header */}
          <div className="px-3.5 pt-4 pb-1.5 flex items-center justify-between group/recents-header">
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider select-none transition-colors focus:outline-none">
              <span>Recents</span>
              <ChevronDown className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-550 group-hover/recents-header:text-zinc-600 dark:group-hover/recents-header:text-zinc-350 transition-colors" />
            </button>
            
            <div className="flex items-center gap-1.5">
              <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors cursor-pointer focus:outline-none" title="New chat">
                <SquarePen className="h-3.5 w-3.5" />
              </button>
              <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors cursor-pointer focus:outline-none" title="Recents options">
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Recents logs area */}
          <div className="px-2 py-1.5">
            <div className="space-y-px">
              {filteredConversations.map((c) => {
                const isActive = c.id === activeId
                return (
                  <div
                    key={c.id}
                    onClick={() => handleSelectRecent(c.id)}
                    className={`group w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13.5px] transition-all duration-150 text-left select-none relative cursor-pointer ${
                      isActive
                        ? 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium'
                        : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-150'
                    }`}
                  >
                    <span className="truncate flex-1 pr-2">{c.title}</span>
                    
                    {/* Trailing actions on hover */}
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors focus:outline-none"
                        title="Pin conversation"
                      >
                        <Pin className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-0.5 rounded transition-colors focus:outline-none"
                        title="Conversation options"
                      >
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Bottom Profile — pinned outside scroll */}
      <div className="p-2 select-none border-t border-zinc-200 dark:border-zinc-800/40 bg-zinc-50 dark:bg-[#171717] shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center justify-between p-1.5 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/30 transition-colors text-left cursor-pointer focus:outline-none">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Avatar className="h-7 w-7 shrink-0">
                  <AvatarFallback className="bg-blue-600 text-white text-[10px] font-bold">JE</AvatarFallback>
                </Avatar>
                <div className="min-w-0 leading-tight">
                  <p className="text-[13px] font-semibold text-zinc-900 dark:text-white truncate">jenish</p>
                  <p className="text-[10px] text-zinc-500 truncate font-normal">Go</p>
                </div>
              </div>
              <Store className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[240px] border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#171717] text-zinc-700 dark:text-zinc-200 p-1.5" side="top" align="start" sideOffset={8}>
            {profileDropdownItems}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )

  // Render collapsible placeholder on desktop, and sheet trigger on mobile
  return (
    <>
      {/* Mobile Drawer (Sheet) */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0 w-64 border-r border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-[#171717]">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Conversations log and settings switcher</SheetDescription>
          </SheetHeader>
          {sidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar — single container, smooth width animation */}
      <div
        className={`hidden lg:flex h-full shrink-0 bg-zinc-50 dark:bg-[#171717] border-r border-zinc-200 dark:border-zinc-800/40 transition-all duration-300 ease-in-out overflow-hidden ${
          isCollapsed ? 'w-[52px]' : 'w-60'
        }`}
      >
        {/* Collapsed icon strip */}
        <div
          className={`flex flex-col items-center justify-between py-3 w-[52px] shrink-0 h-full select-none transition-opacity duration-200 ${
            isCollapsed ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'
          }`}
        >
          {/* Top icons */}
          <div className="flex flex-col items-center gap-1 w-full">
            <Tooltip content="Open sidebar">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleCollapse}
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <PanelLeft className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="New chat">
              <Button
                variant="ghost"
                size="icon"
                onClick={onNewChat}
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <SquarePen className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="Search">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Tooltip>

            <Tooltip content="Recents">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              >
                <Library className="h-5 w-5" />
              </Button>
            </Tooltip>
          </div>

          {/* Bottom profile avatar */}
          <div className="flex items-center justify-center pb-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 active:scale-95 transition-all focus:outline-none rounded-full">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-blue-600 text-white text-[10px] font-bold">JE</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[240px] border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#171717] text-zinc-700 dark:text-zinc-200 p-1.5" side="right" align="end" sideOffset={8}>
                {profileDropdownItems}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Expanded sidebar content */}
        <div
          className={`h-full w-60 shrink-0 transition-opacity duration-200 ${
            isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {sidebarContent}
        </div>
      </div>
    </>
  )
}
