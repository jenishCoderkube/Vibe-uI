'use client'

import React, { useState } from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'vibe-ui'
import {
  ChevronsUpDown,
  Settings,
  ChevronRight,
  Folder,
  FolderOpen,
  FileCode2,
  FileText,
} from 'lucide-react'

// Styling configurations
const containerStyles = {
  default:
    'w-full border border-border bg-card text-card-foreground rounded-xl p-4 shadow-sm transition-all duration-300',
  glass:
    'w-full border border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.03] backdrop-blur-md text-foreground dark:text-white rounded-xl p-4 shadow-md transition-all duration-300',
  retro:
    'w-full border-2 border-foreground bg-background text-foreground rounded-none p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300',
  glow: 'w-full border border-purple-500/30 bg-purple-500/[0.01] dark:bg-purple-500/[0.02] text-foreground rounded-xl p-4 shadow-[0_0_15px_rgba(168,85,247,0.1)] dark:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300',
}

const triggerButtonStyles = {
  default:
    'h-7 w-7 p-0 flex items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground transition-colors cursor-pointer',
  glass:
    'h-7 w-7 p-0 flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 hover:dark:bg-white/15 text-foreground dark:text-white transition-colors cursor-pointer',
  retro:
    'h-7 w-7 p-0 flex items-center justify-center rounded-none border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer font-bold',
  glow: 'h-7 w-7 p-0 flex items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 text-purple-600 dark:text-purple-400 transition-colors cursor-pointer shadow-[0_0_8px_rgba(168,85,247,0.2)]',
}

const panelStyles = {
  default:
    'rounded-lg border border-border bg-muted/40 px-3.5 py-2.5 text-xs text-muted-foreground transition-all',
  glass:
    'rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] px-3.5 py-2.5 text-xs text-muted-foreground dark:text-white/70 transition-all',
  retro:
    'border-2 border-foreground bg-background px-3.5 py-2.5 text-xs font-mono rounded-none transition-all',
  glow: 'rounded-lg border border-purple-500/10 bg-purple-500/[0.01] px-3.5 py-2.5 text-xs text-purple-600/90 dark:text-purple-400/90 transition-all',
}

const Chevrons = ChevronsUpDown as any

// Helper Single Themed Card
function CollapsibleThemedCard({
  theme,
  isOpen,
  setIsOpen,
  title,
}: {
  theme: 'default' | 'glass' | 'retro' | 'glow'
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  title: string
}) {
  return (
    <div className={containerStyles[theme]}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Settings
              className={`h-4 w-4 ${theme === 'glow' ? 'text-purple-400' : theme === 'retro' ? 'text-foreground' : 'text-primary'}`}
            />
            <span className="text-xs font-bold uppercase tracking-wider">
              {title}
            </span>
          </div>
          <CollapsibleTrigger asChild>
            <button className={triggerButtonStyles[theme]}>
              <Chevrons className="h-4 w-4" />
            </button>
          </CollapsibleTrigger>
        </div>

        <div className={panelStyles[theme]}>
          This panel content is always visible.
        </div>

        <CollapsibleContent className="space-y-2">
          <div className={panelStyles[theme]}>
            This sub-content slides open when triggered.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

// 1. CollapsibleBasic (Simple Default Theme Card)
export function CollapsibleBasic() {
  const [open, setOpen] = useState(true)

  return (
    <div className="w-full max-w-[360px] py-4 select-none">
      <CollapsibleThemedCard
        theme="default"
        isOpen={open}
        setIsOpen={setOpen}
        title="System Preferences"
      />
    </div>
  )
}

// 2. CollapsibleThemes (2x2 Grid of 4 Themes)
export function CollapsibleThemes() {
  const [openDefault, setOpenDefault] = useState(true)
  const [openGlass, setOpenGlass] = useState(true)
  const [openRetro, setOpenRetro] = useState(true)
  const [openGlow, setOpenGlow] = useState(true)

  return (
    <div className="w-full max-w-[760px] py-4 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <CollapsibleThemedCard
          theme="default"
          isOpen={openDefault}
          setIsOpen={setOpenDefault}
          title="Default Theme"
        />
        <CollapsibleThemedCard
          theme="glass"
          isOpen={openGlass}
          setIsOpen={setOpenGlass}
          title="Glass Theme"
        />
        <CollapsibleThemedCard
          theme="retro"
          isOpen={openRetro}
          setIsOpen={setOpenRetro}
          title="Retro Theme"
        />
        <CollapsibleThemedCard
          theme="glow"
          isOpen={openGlow}
          setIsOpen={setOpenGlow}
          title="Glow Theme"
        />
      </div>
    </div>
  )
}

// Dummy exports to prevent import errors in apps/docs/src/app/docs/[[...slug]]/page.tsx
export function CollapsibleFAQ() {
  return null
}
// 3. CollapsibleCode (Workspace Directory Tree)
export function CollapsibleCode() {
  const [appsOpen, setAppsOpen] = useState(true)
  const [docsOpen, setDocsOpen] = useState(true)
  const [packagesOpen, setPackagesOpen] = useState(true)
  const [uiOpen, setUiOpen] = useState(true)
  const [srcOpen, setSrcOpen] = useState(true)
  const [componentsOpen, setComponentsOpen] = useState(true)

  const Chevron = ChevronRight as any
  const FolderIcon = Folder as any
  const FolderOpenIcon = FolderOpen as any
  const FileCodeIcon = FileCode2 as any
  const FileTextIcon = FileText as any
  const SettingsIcon = Settings as any

  return (
    <div className="w-full max-w-[360px] py-4 select-none">
      <div className="w-full border border-border bg-card text-foreground rounded-xl p-4 shadow-sm">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Workspace Tree
            </span>
          </div>
          <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-mono">
            vibe-ui
          </span>
        </div>

        {/* Tree Root */}
        <div className="space-y-1 font-mono text-xs text-left">
          {/* apps/ folder */}
          <Collapsible open={appsOpen} onOpenChange={setAppsOpen}>
            <div className="flex items-center justify-between py-1 hover:bg-muted/60 rounded px-1.5 cursor-pointer">
              <CollapsibleTrigger asChild>
                <div className="flex items-center gap-2 flex-1">
                  <Chevron
                    className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${appsOpen ? 'rotate-90' : ''}`}
                  />
                  {appsOpen ? (
                    <FolderOpenIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                  ) : (
                    <FolderIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                  )}
                  <span className="text-foreground">apps</span>
                </div>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="pl-3 ml-2.5 border-l border-border/60 space-y-1 mt-0.5">
              {/* docs/ folder */}
              <Collapsible open={docsOpen} onOpenChange={setDocsOpen}>
                <div className="flex items-center justify-between py-1 hover:bg-muted/60 rounded px-1.5 cursor-pointer">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center gap-2 flex-1">
                      <Chevron
                        className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${docsOpen ? 'rotate-90' : ''}`}
                      />
                      {docsOpen ? (
                        <FolderOpenIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                      ) : (
                        <FolderIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                      )}
                      <span className="text-foreground">docs</span>
                    </div>
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent className="pl-3 ml-2.5 border-l border-border/60 space-y-1 mt-0.5">
                  <div className="flex items-center gap-2 py-1 px-1.5 text-muted-foreground hover:text-foreground cursor-pointer rounded hover:bg-muted/60">
                    <FileCodeIcon className="h-3.5 w-3.5 text-amber-600 dark:text-amber-500" />
                    <span>next.config.js</span>
                  </div>
                  <div className="flex items-center gap-2 py-1 px-1.5 text-muted-foreground hover:text-foreground cursor-pointer rounded hover:bg-muted/60">
                    <FileTextIcon className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
                    <span>package.json</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>

          {/* packages/ folder */}
          <Collapsible open={packagesOpen} onOpenChange={setPackagesOpen}>
            <div className="flex items-center justify-between py-1 hover:bg-muted/60 rounded px-1.5 cursor-pointer">
              <CollapsibleTrigger asChild>
                <div className="flex items-center gap-2 flex-1">
                  <Chevron
                    className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${packagesOpen ? 'rotate-90' : ''}`}
                  />
                  {packagesOpen ? (
                    <FolderOpenIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                  ) : (
                    <FolderIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                  )}
                  <span className="text-foreground">packages</span>
                </div>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="pl-3 ml-2.5 border-l border-border/60 space-y-1 mt-0.5">
              {/* ui/ folder */}
              <Collapsible open={uiOpen} onOpenChange={setUiOpen}>
                <div className="flex items-center justify-between py-1 hover:bg-muted/60 rounded px-1.5 cursor-pointer">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center gap-2 flex-1">
                      <Chevron
                        className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${uiOpen ? 'rotate-90' : ''}`}
                      />
                      {uiOpen ? (
                        <FolderOpenIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                      ) : (
                        <FolderIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                      )}
                      <span className="text-foreground">ui</span>
                    </div>
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent className="pl-3 ml-2.5 border-l border-border/60 space-y-1 mt-0.5">
                  {/* src/ folder */}
                  <Collapsible open={srcOpen} onOpenChange={setSrcOpen}>
                    <div className="flex items-center justify-between py-1 hover:bg-muted/60 rounded px-1.5 cursor-pointer">
                      <CollapsibleTrigger asChild>
                        <div className="flex items-center gap-2 flex-1">
                          <Chevron
                            className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${srcOpen ? 'rotate-90' : ''}`}
                          />
                          {srcOpen ? (
                            <FolderOpenIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                          ) : (
                            <FolderIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                          )}
                          <span className="text-foreground">src</span>
                        </div>
                      </CollapsibleTrigger>
                    </div>

                    <CollapsibleContent className="pl-3 ml-2.5 border-l border-border/60 space-y-1 mt-0.5">
                      {/* components/ folder */}
                      <Collapsible
                        open={componentsOpen}
                        onOpenChange={setComponentsOpen}
                      >
                        <div className="flex items-center justify-between py-1 hover:bg-muted/60 rounded px-1.5 cursor-pointer">
                          <CollapsibleTrigger asChild>
                            <div className="flex items-center gap-2 flex-1">
                              <Chevron
                                className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${componentsOpen ? 'rotate-90' : ''}`}
                              />
                              {componentsOpen ? (
                                <FolderOpenIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                              ) : (
                                <FolderIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                              )}
                              <span className="text-foreground">
                                components
                              </span>
                            </div>
                          </CollapsibleTrigger>
                        </div>

                        <CollapsibleContent className="pl-3 ml-2.5 border-l border-border/60 space-y-1 mt-0.5">
                          <div className="flex items-center gap-2 py-1 px-1.5 text-muted-foreground hover:text-foreground cursor-pointer rounded hover:bg-muted/60">
                            <FileCodeIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-500" />
                            <span>button.tsx</span>
                          </div>
                          <div className="flex items-center gap-2 py-1 px-1.5 text-muted-foreground hover:text-foreground cursor-pointer rounded hover:bg-muted/60">
                            <FileCodeIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-500" />
                            <span>collapsible.tsx</span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CollapsibleContent>
                  </Collapsible>
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>

          {/* Root config files */}
          <div className="flex items-center gap-2 py-1 px-1.5 text-muted-foreground hover:text-foreground cursor-pointer rounded hover:bg-muted/60 pl-7">
            <FileCodeIcon className="h-3.5 w-3.5 text-purple-600 dark:text-purple-500" />
            <span>turbo.json</span>
          </div>
          <div className="flex items-center gap-2 py-1 px-1.5 text-muted-foreground hover:text-foreground cursor-pointer rounded hover:bg-muted/60 pl-7">
            <FileTextIcon className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
            <span>pnpm-workspace.yaml</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export function CollapsibleFolder() {
  return null
}
export function CollapsibleFilters() {
  return null
}
export function CollapsibleInvoice() {
  return null
}
export function CollapsibleProfile() {
  return null
}
export function CollapsibleComments() {
  return null
}
export function CollapsibleLogs() {
  return null
}
export function CollapsibleGlassSettings() {
  return null
}
