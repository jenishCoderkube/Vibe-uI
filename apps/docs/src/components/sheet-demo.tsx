'use client'

import React from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  Button,
} from 'vibe-ui'

export function SheetBasicDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default">Open Sheet (Right)</Button>
        </SheetTrigger>
        <SheetContent side="right" variant="default" className="sm:max-w-md">
          <SheetHeader className="text-left border-b border-border pb-4">
            <SheetTitle>User Profile Configuration</SheetTitle>
            <SheetDescription>
              Configure your workspace preferences and credentials below. Click save when finished.
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 py-6 space-y-4">
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                type="text"
                defaultValue="Sarah Connor"
                className="w-full px-3 py-2 text-sm bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Username</label>
              <input
                type="text"
                defaultValue="sconnor_rebel"
                className="w-full px-3 py-2 text-sm bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</label>
              <input
                type="text"
                defaultValue="System Administrator"
                className="w-full px-3 py-2 text-sm bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              />
            </div>
          </div>
          <SheetFooter className="border-t border-border pt-4 mt-auto">
            <SheetClose asChild>
              <Button variant="default" className="w-full sm:w-auto">Cancel</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="glow" className="w-full sm:w-auto">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export function SheetSidesDemo() {
  const sides = ['top', 'right', 'bottom', 'left'] as const

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="default" className="capitalize w-32">
              Side: {side}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader className="text-left border-b border-border pb-4">
              <SheetTitle className="capitalize">Sheet Side: {side}</SheetTitle>
              <SheetDescription>
                This panel slides in from the {side} edge of the screen.
              </SheetDescription>
            </SheetHeader>
            <div className="flex-1 py-8 flex items-center justify-center text-sm text-muted-foreground font-mono">
              [Panel Content Container - {side.toUpperCase()}]
            </div>
            <SheetFooter className="border-t border-border pt-4">
              <SheetClose asChild>
                <Button variant="default" className="w-full sm:w-auto">Close Panel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

export function SheetVariantsDemo() {
  const variants = [
    { name: 'default', desc: 'Standard UI styling matching core layout primitives.' },
    { name: 'glass', desc: 'Sleek frosted glassmorphism backdrop filter and subtle border highlights.' },
    { name: 'retro', desc: 'Thick solid borders with flat offsets and harsh shadows.' },
    { name: 'glow', desc: 'Neon purple ambient edge lighting casting outer visual depth.' },
  ] as const

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
      {variants.map((v) => (
        <Sheet key={v.name}>
          <SheetTrigger asChild>
            <Button variant={v.name === 'default' ? 'default' : v.name} className="w-full capitalize">
              {v.name}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" variant={v.name} className="sm:max-w-md">
            <SheetHeader className="text-left border-b border-border/10 pb-4">
              <SheetTitle className="capitalize">{v.name} Visual Variant</SheetTitle>
              <SheetDescription>
                Experience the customized styling and shadow themes applied.
              </SheetDescription>
            </SheetHeader>
            <div className="flex-1 py-8 space-y-4">
              <div className="rounded-lg p-4 border border-border/10 bg-muted/40 text-xs text-foreground leading-relaxed">
                This card utilizes the <code className="font-mono bg-black/20 px-1 py-0.5 rounded">{v.name}</code> variant styling configurations, transforming overlays and borders.
              </div>
            </div>
            <SheetFooter className="border-t border-border/10 pt-4">
              <SheetClose asChild>
                <Button variant={v.name === 'default' ? 'default' : v.name} className="w-full sm:w-auto">Dismiss</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
