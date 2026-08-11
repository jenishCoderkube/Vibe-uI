'use client'

import * as React from 'react'
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  Button,
} from 'vibe-ui'
import { User, Settings, Terminal, ShieldAlert, Sparkles, Folder, Keyboard } from 'lucide-react'

// Single Default Theme Trigger Demo (Main Preview)
export const CommandDemoBasic = () => {
  const [open, setOpen] = React.useState(false)

  // Listen to CMD+K / CTRL+K to open default Command menu
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="w-full max-w-xl py-6 select-none text-center">
      <p className="text-xs text-muted-foreground mb-4 font-medium flex items-center justify-center gap-1.5">
        <Keyboard className="h-3.5 w-3.5 text-primary" /> Click below or press <kbd className="bg-muted px-1.5 py-0.5 rounded border border-border text-[10px] font-mono">⌘K</kbd> / <kbd className="bg-muted px-1.5 py-0.5 rounded border border-border text-[10px] font-mono">Ctrl+K</kbd> to open command menu.
      </p>
      
      <Button onClick={() => setOpen(true)} variant="default" size="sm">
        Press ⌘K or Click to Open Menu
      </Button>

      <CommandDialog 
        open={open} 
        onOpenChange={setOpen}
        variant="default"
      >
        <CommandInput placeholder="Search workspace files & tasks..." />
        <CommandList>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => { alert('Launching Terminal...'); setOpen(false); }}>
              <Terminal className="h-4 w-4 mr-2 text-primary" />
              <span>Open Developer Terminal</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { alert('Opening Search...'); setOpen(false); }}>
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span>Search AI Features</span>
              <CommandShortcut>⌘F</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => { alert('Opening Projects...'); setOpen(false); }}>
              <Folder className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Go to Workspace Folders</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { alert('Opening Settings...'); setOpen(false); }}>
              <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Preferences & Configurations</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}

// 4-Theme Variant Triggers Demo (Themes Section)
export const CommandDemoThemes = () => {
  const [activeTheme, setActiveTheme] = React.useState<'default' | 'glass' | 'retro' | 'glow' | null>(null)

  const openCommand = (theme: 'default' | 'glass' | 'retro' | 'glow') => {
    setActiveTheme(theme)
  }

  return (
    <div className="w-full max-w-xl py-6 select-none text-center">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={() => openCommand('default')} variant="outline" size="sm">
          Default Menu
        </Button>
        <Button onClick={() => openCommand('glass')} variant="glass" size="sm">
          Glass Menu
        </Button>
        <Button onClick={() => openCommand('retro')} variant="retro" size="sm">
          Retro Menu
        </Button>
        <Button onClick={() => openCommand('glow')} variant="glow" size="sm">
          Glow Menu
        </Button>
      </div>

      <CommandDialog 
        open={activeTheme !== null} 
        onOpenChange={(open) => !open && setActiveTheme(null)}
        variant={activeTheme || 'default'}
      >
        <CommandInput placeholder="Search workspace files & tasks..." />
        <CommandList>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => { alert('Launching Terminal...'); setActiveTheme(null); }}>
              <Terminal className="h-4 w-4 mr-2 text-primary" />
              <span>Open Developer Terminal</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { alert('Opening Search...'); setActiveTheme(null); }}>
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span>Search AI Features</span>
              <CommandShortcut>⌘F</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => { alert('Opening Projects...'); setActiveTheme(null); }}>
              <Folder className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Go to Workspace Folders</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { alert('Opening Settings...'); setActiveTheme(null); }}>
              <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Preferences & Configurations</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { alert('Opening Profiles...'); setActiveTheme(null); }}>
              <User className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Account & User Profile</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="System Status">
            <CommandItem onSelect={() => { alert('Opening Security Panel...'); setActiveTheme(null); }}>
              <ShieldAlert className="h-4 w-4 mr-2 text-destructive" />
              <span>Access Security Center</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
