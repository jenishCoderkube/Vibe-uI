'use client'

import React from 'react'
import {
  Message,
  MessageGroup,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageFooter,
  Marker,
  MarkerContent,
} from 'vibe-ui'
import { CheckCheck } from 'lucide-react'

// Simple avatar placeholder component
function AvatarPlaceholder({ text }: { text: string }) {
  return (
    <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-xs font-bold text-white uppercase select-none">
      {text}
    </div>
  )
}

// 1. MessageBasicStart
export function MessageBasicStart() {
  return (
    <Message align="start" variant="default" className="max-w-[340px]">
      <MessageContent className="bg-zinc-900 border-zinc-800 text-white rounded-2xl rounded-tl-none">
        Hello! How can I help you build Vibe UI library today?
      </MessageContent>
    </Message>
  )
}

// 2. MessageBasicEnd
export function MessageBasicEnd() {
  return (
    <Message align="end" variant="default" className="max-w-[340px]">
      <MessageContent className="bg-blue-600 border-transparent text-white rounded-2xl rounded-tr-none">
        I want to add some remaining Vibe UI components natively.
      </MessageContent>
    </Message>
  )
}

// 3. MessageDefaultTheme
export function MessageDefaultTheme() {
  return (
    <Message align="start" variant="default" className="max-w-[340px]">
      <MessageContent>Sure! Let's choose Input OTP and Menubar.</MessageContent>
    </Message>
  )
}

// 4. MessageGlassTheme
export function MessageGlassTheme() {
  return (
    <Message align="start" variant="glass" className="max-w-[340px]">
      <MessageContent>
        Perfect. Added backdrop filters to support transparency preset themes.
      </MessageContent>
    </Message>
  )
}

// 5. MessageRetroTheme
export function MessageRetroTheme() {
  return (
    <Message align="start" variant="retro" className="max-w-[340px]">
      <MessageContent className="font-bold text-foreground">
        YES! Neo brutalist borders look extremely clean.
      </MessageContent>
    </Message>
  )
}

// 6. MessageGlowTheme
export function MessageGlowTheme() {
  return (
    <Message align="start" variant="glow" className="max-w-[340px]">
      <MessageContent>
        Neon aura glows can be enabled in settings dashboard panels.
      </MessageContent>
    </Message>
  )
}

// 7. MessageCyberTheme
export function MessageCyberTheme() {
  return (
    <Message align="start" variant="cyberpunk" className="max-w-[340px]">
      <MessageContent>
        SYS_LOG: Message packet resolved successfully inside monorepos.
      </MessageContent>
    </Message>
  )
}

// 8. MessageWithAvatar
export function MessageWithAvatar() {
  return (
    <Message
      align="start"
      variant="default"
      className="max-w-[340px] items-end"
    >
      <AvatarPlaceholder text="JS" />
      <MessageContent>
        The layout places avatars at the bottom of the group stack.
      </MessageContent>
    </Message>
  )
}

// 9. MessageWithHeader
export function MessageWithHeader() {
  return (
    <Message
      align="start"
      variant="default"
      className="flex-col items-start gap-1 max-w-[340px]"
    >
      <MessageHeader className="pl-11">
        Jenish Sabhadiya • 10:45 AM
      </MessageHeader>
      <div className="flex gap-3 w-full items-end">
        <AvatarPlaceholder text="JS" />
        <MessageContent>
          Looks good! The username aligns with the content text box.
        </MessageContent>
      </div>
    </Message>
  )
}

// 10. MessageWithFooter
export function MessageWithFooter() {
  return (
    <Message
      align="start"
      variant="default"
      className="flex-col items-start gap-1 max-w-[340px]"
    >
      <div className="flex gap-3 w-full items-end">
        <AvatarPlaceholder text="JS" />
        <MessageContent>
          We can add check ticks to display read receipt states.
        </MessageContent>
      </div>
      <MessageFooter className="pl-11">Delivered</MessageFooter>
    </Message>
  )
}

// 11. MessageGroupFeed
export function MessageGroupFeed() {
  return (
    <MessageGroup className="p-0 gap-3 max-w-md w-full bg-zinc-950 p-6 rounded-2xl border border-zinc-900 relative">
      {/* 1. Right align user message */}
      <Message align="end" variant="default" className="items-end gap-2">
        <AvatarPlaceholder text="ME" />
        <MessageContent className="bg-blue-600 border-transparent text-white rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[70%]">
          Deploying to prod real quick.
        </MessageContent>
      </Message>

      {/* 2. Left align user reply */}
      <Message align="start" variant="default" className="items-end gap-2">
        <AvatarPlaceholder text="OL" />
        <MessageContent className="bg-zinc-800 border-transparent text-white rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[70%]">
          It's 4:55 PM. On a Friday.
        </MessageContent>
      </Message>

      {/* 3. Right align user reply */}
      <Message
        align="end"
        variant="default"
        className="flex-col items-end gap-1"
      >
        <div className="flex items-end gap-2 w-full justify-end">
          <MessageContent className="bg-blue-600 border-transparent text-white rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[70%]">
            It's a one-line change.
          </MessageContent>
          <AvatarPlaceholder text="ME" />
        </div>
        <MessageFooter className="pr-10 text-[10px] text-zinc-500 font-medium">
          Delivered
        </MessageFooter>
      </Message>

      {/* 4. Left align reply */}
      <Message align="start" variant="default" className="items-end gap-2">
        <AvatarPlaceholder text="OL" />
        <MessageContent className="bg-zinc-800 border-transparent text-white rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[70%]">
          It's always a one-line change 😭.
        </MessageContent>
      </Message>

      {/* 5. Left align reply with emoji reaction badge */}
      <Message
        align="start"
        variant="default"
        className="flex-col items-start gap-1"
      >
        <div className="flex items-end gap-2 w-full">
          <AvatarPlaceholder text="OL" />
          <div className="relative max-w-[70%] w-fit">
            <MessageContent className="bg-zinc-800 border-transparent text-white rounded-2xl rounded-tl-none text-xs leading-relaxed">
              Alright, let me take a look.
            </MessageContent>
            {/* Floating emoji reaction badge */}
            <div className="absolute -bottom-2 right-6 h-5 w-7 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-750 text-[10px] shadow-md select-none cursor-pointer">
              👍
            </div>
          </div>
        </div>
      </Message>

      {/* Typing indicator using Marker component */}
      <Marker className="pl-10 flex items-center gap-1 select-none">
        <MarkerContent className="text-xs text-zinc-500 italic">
          Oliver is typing
        </MarkerContent>
        <span className="flex gap-0.5 items-center justify-center pt-1.5">
          <span className="h-1 w-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="h-1 w-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="h-1 w-1 bg-zinc-500 rounded-full animate-bounce" />
        </span>
      </Marker>
    </MessageGroup>
  )
}

// 12. MessageStatusTick
export function MessageStatusTick() {
  const DoubleCheck = CheckCheck as any
  return (
    <Message
      align="end"
      variant="glow"
      className="flex-col items-end gap-1 max-w-[340px]"
    >
      <div className="flex gap-3 w-full justify-end items-end">
        <MessageContent>Check status of packages compilation.</MessageContent>
      </div>
      <MessageFooter className="flex items-center gap-1 select-none">
        <span>Read 10:46 AM</span>
        <DoubleCheck className="h-3 w-3 text-emerald-400" />
      </MessageFooter>
    </Message>
  )
}
