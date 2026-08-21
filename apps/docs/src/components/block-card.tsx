'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import {
  Check,
  Copy,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
} from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { useTheme } from 'next-themes'
import { stripTypeScript } from '../lib/strip-typescript'

interface BlockCardProps {
  title: string
  description: string
  urlPath: string
  code: string | Record<string, string>
  previewComponent: React.ReactNode
  vibeDeps?: string
}

interface FileNode {
  name: string
  type: 'file' | 'directory'
  path: string
  children?: FileNode[]
}

function buildFileTree(paths: string[]): FileNode[] {
  const root: FileNode[] = []

  for (const p of paths) {
    const parts = p.split('/')
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isLast = i === parts.length - 1
      const type = isLast ? 'file' : 'directory'
      const nodePath = parts.slice(0, i + 1).join('/')

      let existing = currentLevel.find(
        (n) => n.name === part && n.type === type,
      )
      if (!existing) {
        existing = { name: part, type, path: nodePath }
        if (!isLast) {
          existing.children = []
        }
        currentLevel.push(existing)
      }
      currentLevel = existing.children || []
    }
  }

  const sortNodes = (nodes: FileNode[]) => {
    nodes.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'directory' ? -1 : 1
      }
      return a.name.localeCompare(b.name)
    })
    nodes.forEach((n) => {
      if (n.children) sortNodes(n.children)
    })
  }
  sortNodes(root)
  return root
}

function FileTreeItem({
  node,
  selectedPath,
  onSelect,
  lang,
  level = 0,
}: {
  node: FileNode
  selectedPath: string
  onSelect: (path: string) => void
  lang: 'ts' | 'js'
  level?: number
}) {
  const [isOpen, setIsOpen] = useState(true)
  const isSelected = node.type === 'file' && node.path === selectedPath

  if (node.type === 'file') {
    const isJsxOrTsx = node.name.endsWith('.tsx')
    const badgeLabel =
      lang === 'js' ? (isJsxOrTsx ? 'JSX' : 'JS') : isJsxOrTsx ? 'TSX' : 'TS'

    const displayName =
      lang === 'js'
        ? node.name.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js')
        : node.name

    return (
      <button
        onClick={() => onSelect(node.path)}
        className={cn(
          'flex items-center gap-2 w-full text-left py-1.5 px-2 rounded text-xs transition-colors hover:bg-muted/60 hover:text-foreground cursor-pointer select-none',
          isSelected
            ? 'bg-muted text-foreground font-semibold'
            : 'text-muted-foreground',
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <span className="text-[10px] font-bold font-mono text-muted-foreground/80">
          {badgeLabel}
        </span>
        <span className="truncate">{displayName}</span>
      </button>
    )
  }

  return (
    <div className="space-y-0.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left py-1.5 px-2 rounded text-xs text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground cursor-pointer select-none"
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <span className="text-[9px] text-muted-foreground/60">
          {isOpen ? '▼' : '▶'}
        </span>
        <span className="font-semibold text-foreground/80">{node.name}</span>
      </button>
      {isOpen && node.children && (
        <div className="space-y-0.5">
          {node.children.map((child) => (
            <FileTreeItem
              key={child.path}
              node={child}
              selectedPath={selectedPath}
              onSelect={onSelect}
              lang={lang}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function BlockCard({
  title,
  description,
  urlPath,
  code,
  previewComponent,
  vibeDeps,
}: BlockCardProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const [pkgManager, setPkgManager] = useState<'pnpm' | 'npx' | 'yarn' | 'bun'>(
    'pnpm',
  )
  const [copied, setCopied] = useState(false)
  const [lang, setLang] = useState<'ts' | 'js'>('ts')
  const [isExpanded, setIsExpanded] = useState(false)
  const [commandCopied, setCommandCopied] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('custom-ui-lang-preference') as
      'ts' | 'js'
    if (savedLang) setLang(savedLang)

    const savedPkg = localStorage.getItem('custom-ui-pkg-preference') as
      'pnpm' | 'npx' | 'yarn' | 'bun'
    if (savedPkg) setPkgManager(savedPkg)
  }, [])

  const handleLangChange = (newLang: 'ts' | 'js') => {
    setLang(newLang)
    localStorage.setItem('custom-ui-lang-preference', newLang)
    window.dispatchEvent(new Event('custom-ui-lang-changed'))
  }

  const handlePkgChange = (newPm: 'pnpm' | 'npx' | 'yarn' | 'bun') => {
    setPkgManager(newPm)
    localStorage.setItem('custom-ui-pkg-preference', newPm)
    window.dispatchEvent(new Event('custom-ui-pkg-changed'))
  }

  useEffect(() => {
    const handleSyncLang = () => {
      const saved = localStorage.getItem('custom-ui-lang-preference') as
        'ts' | 'js'
      if (saved) setLang(saved)
    }
    const handleSyncPkg = () => {
      const saved = localStorage.getItem('custom-ui-pkg-preference') as
        'pnpm' | 'npx' | 'yarn' | 'bun'
      if (saved) setPkgManager(saved)
    }
    window.addEventListener('custom-ui-lang-changed', handleSyncLang)
    window.addEventListener('custom-ui-pkg-changed', handleSyncPkg)
    return () => {
      window.removeEventListener('custom-ui-lang-changed', handleSyncLang)
      window.removeEventListener('custom-ui-pkg-changed', handleSyncPkg)
    }
  }, [])

  const commands = {
    pnpm: `pnpm dlx vibe-ui-kit@latest add ${urlPath}`,
    npx: `npx vibe-ui-kit@latest add ${urlPath}`,
    yarn: `yarn dlx vibe-ui-kit@latest add ${urlPath}`,
    bun: `bunx vibe-ui-kit@latest add ${urlPath}`,
  }
  const currentCommand = commands[pkgManager]

  const copyCommand = () => {
    navigator.clipboard.writeText(currentCommand)
    setCommandCopied(true)
    setTimeout(() => setCommandCopied(false), 2000)
  }

  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>(
    'desktop',
  )

  const filesMap = typeof code === 'string' ? { 'page.tsx': code } : (code || {})
  const filePaths = Object.keys(filesMap)
  const [selectedFile, setSelectedFile] = useState(filePaths[0] || '')

  const isDark = mounted ? resolvedTheme === 'dark' : true

  const currentCode = filesMap[selectedFile] || ''
  const activeCode = lang === 'js' ? stripTypeScript(currentCode) : currentCode
  const lineCount = activeCode.split('\n').length

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fileTree = buildFileTree(filePaths)

  return (
    <div className="flex flex-col space-y-4">
      {/* Block Information */}
      <div className="flex flex-col space-y-2 text-left">
        <div className="flex flex-col space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {vibeDeps && (
          <div className="flex flex-wrap items-center gap-1.5 select-none">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mr-1">
              Requires components:
            </span>
            {vibeDeps
              .split(',')
              .map((d) => d.trim())
              .map((dep) => (
                <span
                  key={dep}
                  className="text-[10px] font-mono bg-muted border border-border text-foreground px-2 py-0.5 rounded-md font-bold"
                >
                  {dep}
                </span>
              ))}
          </div>
        )}
      </div>

      {/* Block Viewer Container */}
      <div className="flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        {/* Toolbar Header Bar */}
        <div className="flex h-12 items-center justify-between bg-muted/20 border-b border-border px-4 select-none shrink-0 gap-4">
          <div className="flex items-center gap-4">
            {/* Tab Selector */}
            <div className="flex bg-muted/60 rounded p-0.5 text-xs font-semibold border border-border/45">
              <button
                onClick={() => setTab('preview')}
                className={cn(
                  'px-3 py-1 rounded-sm cursor-pointer transition-all text-xs font-medium',
                  tab === 'preview'
                    ? 'bg-card text-foreground shadow-sm font-semibold'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                Preview
              </button>
              <button
                onClick={() => {
                  setTab('code')
                  setIsExpanded(false)
                }}
                className={cn(
                  'px-3 py-1 rounded-sm cursor-pointer transition-all text-xs font-medium',
                  tab === 'code'
                    ? 'bg-card text-foreground shadow-sm font-semibold'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                Code
              </button>
            </div>

            {/* Quick Actions (TS/JS & Copy if in Code Tab) */}
            {tab === 'code' && (
              <div className="flex items-center gap-2">
                <div className="flex bg-muted/60 rounded p-0.5 text-[10px] font-semibold border border-border/45">
                  <button
                    onClick={() => handleLangChange('ts')}
                    className={cn(
                      'px-1.5 py-0.5 rounded-sm cursor-pointer transition-all',
                      lang === 'ts'
                        ? 'bg-card text-foreground shadow-sm font-semibold'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    TS
                  </button>
                  <button
                    onClick={() => handleLangChange('js')}
                    className={cn(
                      'px-1.5 py-0.5 rounded-sm cursor-pointer transition-all',
                      lang === 'js'
                        ? 'bg-card text-foreground shadow-sm font-semibold'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    JS
                  </button>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex h-6 w-6 items-center justify-center rounded bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border transition-all cursor-pointer"
                  title="Copy code"
                >
                  {copied ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>
            )}
          </div>

          <span className="hidden lg:block text-xs text-muted-foreground/80 font-medium truncate max-w-[200px] xl:max-w-[400px]">
            {description}
          </span>

          <div className="flex items-center gap-3 ml-auto">
            {/* Device Selector (If in Preview Tab) */}
            {tab === 'preview' && (
              <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded border border-border/45">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={cn(
                    'p-1.5 rounded transition-all cursor-pointer',
                    deviceMode === 'desktop'
                      ? 'bg-card text-primary shadow-sm'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  title="Desktop view"
                >
                  <Monitor className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('tablet')}
                  className={cn(
                    'p-1.5 rounded transition-all cursor-pointer',
                    deviceMode === 'tablet'
                      ? 'bg-card text-primary shadow-sm'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  title="Tablet view"
                >
                  <Tablet className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={cn(
                    'p-1.5 rounded transition-all cursor-pointer',
                    deviceMode === 'mobile'
                      ? 'bg-card text-primary shadow-sm'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  title="Mobile view"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            <a
              href={`/preview/${urlPath}?theme=${mounted ? resolvedTheme : 'dark'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-medium border border-border/45 transition-all cursor-pointer"
              title="Open Fullscreen Block View"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Fullscreen</span>
            </a>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative bg-background flex-1 flex flex-col">
          {tab === 'preview' && (
            <div className="flex flex-col flex-1">
              {/* Responsive Device Control Bar */}
              <div className="flex items-center justify-between border-b border-border bg-muted/10 px-4 py-2 select-none shrink-0 gap-4 flex-wrap">
                {/* CLI command display with package manager switcher */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex bg-background rounded border border-border p-0.5 text-[9px] font-bold text-muted-foreground">
                    {(['pnpm', 'npx', 'yarn', 'bun'] as const).map((pm) => (
                      <button
                        key={pm}
                        onClick={() => handlePkgChange(pm)}
                        className={cn(
                          'px-1.5 py-0.5 rounded-sm transition-all cursor-pointer',
                          pkgManager === pm
                            ? 'bg-muted text-foreground shadow-sm font-bold'
                            : 'text-muted-foreground/60 hover:text-foreground',
                        )}
                      >
                        {pm}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={copyCommand}
                    className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono bg-background hover:bg-muted/40 border border-border rounded px-2.5 py-1.5 cursor-pointer transition-all select-none active:scale-[0.98] outline-none"
                    title="Copy command to clipboard"
                  >
                    <span className="text-primary font-bold">{`>_`}</span>
                    <span>
                      {commandCopied ? 'Copied command!' : currentCommand}
                    </span>
                    {commandCopied ? (
                      <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                    ) : (
                      <Copy className="h-3 w-3 text-muted-foreground/60 shrink-0" />
                    )}
                  </button>
                </div>

                {/* Device Mode label indicator */}
                <div className="text-[10px] text-muted-foreground font-mono font-bold uppercase tracking-wider">
                  {deviceMode === 'desktop'
                    ? 'Responsive Desktop'
                    : deviceMode === 'tablet'
                      ? 'Tablet Width: 768px'
                      : 'Mobile Width: 375px'}
                </div>
              </div>

              {/* Centered responsive frame viewport */}
              <div
                className="bg-muted/20 flex items-center justify-center min-h-[400px] overflow-x-auto w-full border-t border-border p-0"
              >
                <div
                  className={cn(
                    'transition-all duration-300 ease-in-out w-full',
                    deviceMode === 'desktop' && 'max-w-full',
                    deviceMode === 'tablet' &&
                      'max-w-[768px] border-x border-dashed border-border bg-background rounded-xl shadow-lg',
                    deviceMode === 'mobile' &&
                      'max-w-[375px] border-x border-dashed border-border bg-background rounded-2xl shadow-xl',
                  )}
                >
                  <iframe
                    src={`/preview/${urlPath}`}
                    className={cn(
                      'w-full overflow-hidden bg-background block shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)]',
                      deviceMode === 'desktop'
                        ? 'border-0 rounded-none'
                        : 'border border-border rounded-xl',
                    )}
                    style={{
                      height: urlPath.startsWith('dashboard')
                        ? '720px'
                        : urlPath.startsWith('login')
                          ? '620px'
                          : '580px',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {tab === 'code' && (
            <div
              className={cn(
                'relative grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 overflow-hidden',
                isDark ? 'bg-zinc-950' : 'bg-zinc-50',
              )}
            >
              {/* File Explorer Tree (Left Panel) - Always visible for a consistent layout */}
              {filePaths.length >= 1 && (
                <div className="md:col-span-1 p-4 bg-zinc-100/40 dark:bg-zinc-950/40 border-r border-zinc-200 dark:border-zinc-800/80 max-h-[400px] overflow-y-auto no-scrollbar flex flex-col space-y-3">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block border-b border-zinc-800 pb-2 select-none">
                    Files Explorer
                  </span>
                  <div className="space-y-1">
                    {fileTree.map((node) => (
                      <FileTreeItem
                        key={node.path}
                        node={node}
                        selectedPath={selectedFile}
                        lang={lang}
                        onSelect={(path) => {
                          setSelectedFile(path)
                          setIsExpanded(false)
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Code display (Right Panel) */}
              <div
                className={cn(
                  'relative overflow-hidden transition-all duration-300 min-w-0',
                  filePaths.length >= 1 ? 'md:col-span-3' : 'w-full',
                )}
              >
                {/* Code file header strip */}
                <div className="bg-zinc-100/60 dark:bg-zinc-900/40 border-b border-zinc-200 dark:border-zinc-800/40 px-5 py-2 text-[10px] font-mono text-zinc-550 dark:text-zinc-500 flex justify-between select-none">
                  <span>
                    {lang === 'js'
                      ? selectedFile
                          .replace(/\.tsx$/, '.jsx')
                          .replace(/\.ts$/, '.js')
                      : selectedFile}
                  </span>
                  <span>{lineCount} lines</span>
                </div>
                <div
                  className={cn(
                    'transition-all duration-300',
                    !isExpanded && lineCount > 12
                      ? 'max-h-[300px] overflow-hidden'
                      : 'max-h-[600px] overflow-y-auto',
                  )}
                >
                  <Highlight
                    theme={isDark ? themes.vsDark : themes.vsLight}
                    code={activeCode}
                    language={
                      selectedFile.endsWith('.json')
                        ? 'json'
                        : lang === 'ts'
                          ? 'tsx'
                          : 'jsx'
                    }
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <pre
                        className={cn(
                          'overflow-x-auto p-5 text-xs font-mono leading-relaxed',
                          className,
                        )}
                        style={{ ...style, backgroundColor: 'transparent' }}
                      >
                        {tokens.map((line, i) => (
                          <div
                            key={i}
                            {...getLineProps({ line })}
                            className="table-row"
                          >
                            <span
                              className={cn(
                                'table-cell select-none text-right pr-4 text-[10px] w-6 align-top pt-0.5',
                                isDark ? 'text-zinc-700' : 'text-zinc-400',
                              )}
                            >
                              {i + 1}
                            </span>
                            <span className="table-cell align-top whitespace-pre text-left">
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                              ))}
                            </span>
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </div>
                {!isExpanded && lineCount > 12 && (
                  <div className="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent pb-4">
                    <button
                      type="button"
                      onClick={() => setIsExpanded(true)}
                      className="relative z-10 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm hover:bg-muted transition-all duration-200 cursor-pointer"
                    >
                      View Code
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
