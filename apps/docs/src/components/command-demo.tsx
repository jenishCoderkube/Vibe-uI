'use client'

import * as React from 'react'
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  Button,
} from 'vibe-ui'
import { User, Settings, Terminal, ShieldAlert } from 'lucide-react'

export const CommandDialogTriggerDemo = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="glow">
        Press ⌘K or Click to Open Menu
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a search query..." />
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => alert('Launching Terminal...')}>
              <Terminal className="h-4 w-4 mr-2 opacity-70" />
              <span>Developer Terminal</span>
            </CommandItem>
            <CommandItem onSelect={() => alert('Opening Profile...')}>
              <User className="h-4 w-4 mr-2 opacity-70" />
              <span>User Profile</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => alert('Opening Preferences...')}>
              <Settings className="h-4 w-4 mr-2 opacity-70" />
              <span>Preferences</span>
            </CommandItem>
            <CommandItem onSelect={() => alert('Accessing Security Panel...')}>
              <ShieldAlert className="h-4 w-4 mr-2 opacity-70" />
              <span>Security & Access Control</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
