'use client'

import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Button,
  Card,
  Switch,
  Slider,
} from 'vibe-ui'
import {
  ChevronsUpDown,
  Folder,
  FolderOpen,
  Code,
  Settings,
  Filter,
  FileText,
  User,
  HelpCircle,
  Terminal,
  HelpCircle as HelpIcon,
} from 'lucide-react'

// Helper Wrapper
function CollapsibleCard({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon: any
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-[350px] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 p-4 shadow-xl text-left text-white font-sans select-none">
      <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
        <Icon className="h-4 w-4 text-primary" />
        <h4 className="text-xs font-bold uppercase tracking-wider">{title}</h4>
      </div>
      {children}
    </div>
  )
}

// 1. CollapsibleBasic
export function CollapsibleBasic() {
  const [open, setOpen] = useState(false)
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Simple Expand" icon={HelpIcon}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">Togglable Panel Content</span>
          <CollapsibleTrigger asChild>
            <Button
              variant="glass"
              className="h-7 w-7 p-0 flex items-center justify-center rounded-lg"
            >
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-lg border border-white/5 bg-zinc-900/60 px-4 py-2.5 text-xs">
          This content is always visible.
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-lg border border-white/5 bg-zinc-900/60 px-4 py-2.5 text-xs text-muted-foreground">
            This sub-content slides open when triggered.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 2. FAQ
export function CollapsibleFAQ() {
  const [open, setOpen] = useState(false)
  const Help = HelpCircle as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="FAQ Toggle" icon={Help}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold leading-tight">
            What payment methods are supported?
          </span>
          <CollapsibleTrigger asChild>
            <Button variant="glow" className="h-7 w-7 p-0 shrink-0">
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2 p-2.5 border border-primary/20 bg-primary/[0.02] rounded-lg">
            We support all major credit cards, Stripe, PayPal, Apple Pay, and
            cryptocurrency presets.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 3. CollapsibleCode
export function CollapsibleCode() {
  const [open, setOpen] = useState(false)
  const CodeIcon = Code as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Code Expander" icon={CodeIcon}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-400">
            package.json
          </span>
          <CollapsibleTrigger asChild>
            <Button
              variant="cyberpunk"
              className="h-7 w-7 p-0 flex items-center justify-center"
            >
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <pre className="rounded border border-emerald-950 bg-black p-3 font-mono text-[10px] text-emerald-600">
          {`{ "name": "vibe-ui", "version": "0.1.0" }`}
        </pre>
        <CollapsibleContent>
          <pre className="rounded border border-emerald-950 bg-black p-3 font-mono text-[10px] text-emerald-600 mt-2">
            {`"dependencies": {\n  "react": "^19.0.0",\n  "clsx": "^2.1.1"\n}`}
          </pre>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 4. Folder
export function CollapsibleFolder() {
  const [open, setOpen] = useState(false)
  const FolderIcon = Folder as any
  const FolderOpenIcon = FolderOpen as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard
      title="Directory Tree"
      icon={open ? FolderOpenIcon : FolderIcon}
    >
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold flex items-center gap-2">
            {open ? (
              <FolderOpenIcon className="h-3.5 w-3.5" />
            ) : (
              <FolderIcon className="h-3.5 w-3.5" />
            )}
            src/components
          </span>
          <CollapsibleTrigger asChild>
            <Button variant="glass" className="h-7 w-7 p-0">
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pl-4 space-y-1 mt-2 border-l border-white/10">
          <div className="text-xs text-muted-foreground p-1 hover:text-white cursor-pointer">
            button.tsx
          </div>
          <div className="text-xs text-muted-foreground p-1 hover:text-white cursor-pointer">
            card.tsx
          </div>
          <div className="text-xs text-muted-foreground p-1 hover:text-white cursor-pointer">
            switch.tsx
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 5. Filters
export function CollapsibleFilters() {
  const [open, setOpen] = useState(false)
  const FilterIcon = Filter as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Sidebar Filters" icon={FilterIcon}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">Filter Controls</span>
          <CollapsibleTrigger asChild>
            <Button variant="default" className="h-7 w-7 p-0">
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-3 pt-2">
          <div className="space-y-1">
            <label className="text-[10px] text-muted-foreground uppercase font-bold">
              Category
            </label>
            <select className="w-full text-xs bg-zinc-900 border border-white/10 rounded px-2.5 py-1.5 outline-none text-white">
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs">Include Archive</span>
            <Switch variant="glow" defaultChecked />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 6. Invoice
export function CollapsibleInvoice() {
  const [open, setOpen] = useState(false)
  const InvoiceIcon = FileText as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Brutalist Billing" icon={InvoiceIcon}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold">INV-09871</span>
          <CollapsibleTrigger asChild>
            <Button
              variant="retro"
              className="h-7 w-7 p-0 flex items-center justify-center"
            >
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded border-2 border-foreground bg-background p-3 text-xs text-foreground font-mono font-bold flex justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span>Total Balance</span>
          <span>$1,420.00</span>
        </div>
        <CollapsibleContent className="space-y-2 mt-2">
          <div className="p-3 border-2 border-foreground bg-background text-[11px] font-mono text-muted-foreground space-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$1,300.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%):</span>
              <span>$120.00</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 7. Profile
export function CollapsibleProfile() {
  const [open, setOpen] = useState(false)
  const UserIcon = User as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Profile Drawer" icon={UserIcon}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs">
            JS
          </div>
          <div className="flex-1 text-xs">
            <div className="font-bold">Jenish Sabhadiya</div>
            <div className="text-[10px] text-muted-foreground">
              Admin Access
            </div>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="glass" className="h-7 w-7 p-0">
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 pt-2">
          <input
            type="text"
            placeholder="Edit Title..."
            className="w-full text-xs bg-zinc-900 border border-white/5 rounded px-2.5 py-1.5 text-white outline-none"
          />
          <Button variant="glass" className="w-full py-1 text-[11px] h-8">
            Save Changes
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 8. Comments
export function CollapsibleComments() {
  const [open, setOpen] = useState(false)
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Comments Thread" icon={FileText}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="text-xs">
          <p className="font-semibold text-primary">Alex Mercer</p>
          <p className="text-muted-foreground mt-0.5">
            Will this package build cleanly on Node 18?
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-zinc-500">2 replies received</span>
          <CollapsibleTrigger asChild>
            <Button variant="default" className="text-[10px] h-6 px-2">
              Replies
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pl-4 border-l-2 border-primary/20 space-y-2 mt-2">
          <div className="text-[11px] bg-zinc-900/40 p-2.5 rounded">
            <p className="font-semibold">Jenish Sabhadiya</p>
            <p className="text-muted-foreground mt-0.5">
              Yes! It compiled successfully on both Node 18 and 20.
            </p>
          </div>
          <div className="text-[11px] bg-zinc-900/40 p-2.5 rounded">
            <p className="font-semibold">Developer B</p>
            <p className="text-muted-foreground mt-0.5">
              Confirmed, tested inside Next.js 15 environments.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 9. Logs
export function CollapsibleLogs() {
  const [open, setOpen] = useState(false)
  const LogIcon = Terminal as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Terminal Output" icon={LogIcon}>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="space-y-2 font-mono"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs text-emerald-400 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            turbo run build
          </span>
          <CollapsibleTrigger asChild>
            <Button
              variant="cyberpunk"
              className="h-7 w-7 p-0 flex items-center justify-center"
            >
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded border border-emerald-950 bg-black p-2.5 text-[10px] text-emerald-500/80">
          • turbo 2.10.5 running ...
        </div>
        <CollapsibleContent className="space-y-1">
          <div className="rounded border border-emerald-950 bg-black p-2.5 text-[10px] text-emerald-600 space-y-1">
            <div>vibe-ui-kit:build: cache hit</div>
            <div>@custom-ui/docs:build: cache hit</div>
            <div className="text-emerald-400">Tasks: 3 successful, 3 total</div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}

// 10. GlassSettings
export function CollapsibleGlassSettings() {
  const [open, setOpen] = useState(false)
  const SettingsIcon = Settings as any
  const Chevrons = ChevronsUpDown as any

  return (
    <CollapsibleCard title="Glass Presets" icon={SettingsIcon}>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">Visual Controls</span>
          <CollapsibleTrigger asChild>
            <Button variant="glass" className="h-7 w-7 p-0">
              <Chevrons className="h-3.5 w-3.5" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="text-[11px] text-muted-foreground p-1 select-none">
          Click button above to slider adjust HSL.
        </div>
        <CollapsibleContent className="space-y-3 pt-2">
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400">Blur Radius</span>
            <Slider max={20} min={0} step={2} defaultValue={[8]} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400">Opacity Alpha</span>
            <Slider max={100} min={10} step={10} defaultValue={[20]} />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleCard>
  )
}
