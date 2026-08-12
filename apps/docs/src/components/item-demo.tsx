'use client'

import React from 'react'
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
  ItemFooter,
  Button,
} from 'vibe-ui'
import { ShieldCheck, Edit2, MoreVertical, ArrowRight } from 'lucide-react'

// 1. ItemBasic
export function ItemBasic() {
  return (
    <Item variant="default" className="w-full max-w-[340px]">
      <ItemContent>
        <ItemTitle>System Update</ItemTitle>
        <ItemDescription>
          Configuration file resolved successfully.
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 2. Default Theme
export function ItemDefaultTheme() {
  return (
    <Item
      variant="default"
      className="w-full max-w-[340px] border border-border bg-card/50"
    >
      <ItemContent>
        <ItemTitle>Notification Hub</ItemTitle>
        <ItemDescription>Receive workspace events instantly.</ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 3. Glass Theme
export function ItemGlassTheme() {
  return (
    <Item variant="glass" className="w-full max-w-[340px]">
      <ItemContent>
        <ItemTitle>Frosted Dashboard</ItemTitle>
        <ItemDescription>
          Blur radius configured around backdrop opacity.
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 4. Retro Theme
export function ItemRetroTheme() {
  return (
    <Item variant="retro" className="w-full max-w-[340px]">
      <ItemContent>
        <ItemTitle className="font-bold text-foreground">
          Neo brutalist element
        </ItemTitle>
        <ItemDescription className="font-mono text-zinc-500">
          SHADOW_OFFSET: [2px]
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 5. Glow Theme
export function ItemGlowTheme() {
  return (
    <Item variant="glow" className="w-full max-w-[340px]">
      <ItemContent>
        <ItemTitle className="text-primary font-bold">
          Purple Aura panel
        </ItemTitle>
        <ItemDescription className="text-primary/60">
          Glow shadows enabled on hover.
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 6. Cyber Theme
export function ItemCyberTheme() {
  return (
    <Item variant="cyberpunk" className="w-full max-w-[340px]">
      <ItemContent>
        <ItemTitle className="text-emerald-400 font-mono">
          SYS_STATUS: RESOLVED
        </ItemTitle>
        <ItemDescription className="text-emerald-600/70 font-mono">
          Port 3000 listening...
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 7. ItemMedia Image
export function ItemWithImage() {
  return (
    <Item variant="outline" className="w-full max-w-[340px]">
      <ItemMedia variant="image">
        <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
          IMG
        </div>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Widescreen graphic</ItemTitle>
        <ItemDescription>Attached banner catalog file.</ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 8. ItemMedia Icon/Avatar
export function ItemWithAvatar() {
  const UserIcon = ShieldCheck as any
  return (
    <Item variant="outline" className="w-full max-w-[340px]">
      <ItemMedia variant="icon">
        <UserIcon className="h-4 w-4 text-emerald-400" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Security Guard</ItemTitle>
        <ItemDescription>Verification completed.</ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 9. ItemActions
export function ItemWithActions() {
  const EditIcon = Edit2 as any
  const MoreIcon = MoreVertical as any

  return (
    <Item variant="outline" className="w-full max-w-[340px]">
      <ItemContent>
        <ItemTitle>Document.txt</ItemTitle>
        <ItemDescription>Edited 2 hours ago.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          variant="glass"
          className="h-7 w-7 p-0 flex items-center justify-center"
        >
          <EditIcon className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="glass"
          className="h-7 w-7 p-0 flex items-center justify-center"
        >
          <MoreIcon className="h-3.5 w-3.5" />
        </Button>
      </ItemActions>
    </Item>
  )
}

// 10. ItemHeader & ItemFooter
export function ItemFooterDetails() {
  return (
    <Item
      variant="outline"
      className="flex-col items-start gap-1 w-full max-w-[340px]"
    >
      <ItemHeader>
        <span className="text-[10px] uppercase font-bold text-primary">
          Workspace status
        </span>
        <span className="text-[10px] text-zinc-500 font-mono">ID: #092</span>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>Production Cluster</ItemTitle>
        <ItemDescription>Scaling nodes automatically.</ItemDescription>
      </ItemContent>
      <ItemFooter>
        <span>Last sync: 1m ago</span>
        <span className="text-emerald-400">Online</span>
      </ItemFooter>
    </Item>
  )
}

// 11. ItemGroup
export function ItemGroupedList() {
  return (
    <ItemGroup className="w-full max-w-[340px]">
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Item A</ItemTitle>
          <ItemDescription>First items task.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Item B</ItemTitle>
          <ItemDescription>Second items task.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  )
}

// 12. Hoverable Navigation Card
export function ItemHoverable() {
  const Arrow = ArrowRight as any
  return (
    <Item variant="glow" className="cursor-pointer w-full max-w-[340px]">
      <ItemContent>
        <ItemTitle>Explore Components</ItemTitle>
        <ItemDescription>
          Read our 38+ production-ready component sheets.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Arrow className="h-4 w-4 text-primary group-hover/item:translate-x-1 transition-transform" />
      </ItemActions>
    </Item>
  )
}
