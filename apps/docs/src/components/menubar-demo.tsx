'use client'

import React, { useState } from 'react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarGroup,
} from 'vibe-ui'

// 1. MenubarDefaultTheme
export function MenubarDefaultTheme() {
  return (
    <Menubar variant="default">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘⇧N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⌘Y</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 2. MenubarGlassTheme
export function MenubarGlassTheme() {
  return (
    <Menubar variant="glass">
      <MenubarMenu>
        <MenubarTrigger>Workspace</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Status Details</MenubarItem>
          <MenubarItem>Rebuild Cache</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 3. MenubarRetroTheme
export function MenubarRetroTheme() {
  return (
    <Menubar variant="retro">
      <MenubarMenu>
        <MenubarTrigger>System</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Start Logs</MenubarItem>
          <MenubarItem>Quit Process</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 4. MenubarGlowTheme
export function MenubarGlowTheme() {
  return (
    <Menubar variant="glow">
      <MenubarMenu>
        <MenubarTrigger>Effects</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Glitch Mode</MenubarItem>
          <MenubarItem>Aura Shadow</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 5. MenubarCyberTheme
export function MenubarCyberTheme() {
  return (
    <Menubar variant="cyberpunk">
      <MenubarMenu>
        <MenubarTrigger>CONSOLE</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            EXEC_SH <MenubarShortcut>CTRL+X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            REBOOT_SYS <MenubarShortcut>CTRL+R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 6. Submenus (Radix nested menu triggers)
export function MenubarSubmenus() {
  return (
    <Menubar variant="default">
      <MenubarMenu>
        <MenubarTrigger>Share</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Email Link</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Send via Outlook</MenubarItem>
              <MenubarItem>Send via Gmail</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>Copy Share URL</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 7. Checkboxes
export function MenubarCheckboxes() {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)

  return (
    <Menubar variant="default">
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={checked1} onCheckedChange={setChecked1}>
            Show Status Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={checked2} onCheckedChange={setChecked2}>
            Glitch Overlay
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 8. Radios
export function MenubarRadios() {
  const [theme, setTheme] = useState('dark')

  return (
    <Menubar variant="default">
      <MenubarMenu>
        <MenubarTrigger>Theme</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light Mode</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark Mode</MenubarRadioItem>
            <MenubarRadioItem value="system">System Default</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 9. MenubarShortcuts
export function MenubarShortcuts() {
  return (
    <Menubar variant="default">
      <MenubarMenu>
        <MenubarTrigger>Terminal</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Clear Screen <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Interrupt Task <MenubarShortcut>CTRL+C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 10. Destructive Action Items
export function MenubarDestructive() {
  return (
    <Menubar variant="default">
      <MenubarMenu>
        <MenubarTrigger>Database</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Optimize Indexes</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Truncate Table</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 11. Disabled State items
export function MenubarDisabled() {
  return (
    <Menubar variant="default">
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>Advanced debugger</MenubarItem>
          <MenubarItem>Standard Linters</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// 12. MenubarGroup
export function MenubarDynamicTabs() {
  return (
    <Menubar variant="glow">
      <MenubarMenu>
        <MenubarTrigger>Settings</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>Account Options</MenubarItem>
            <MenubarItem>Security Keys</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Sign Out</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
