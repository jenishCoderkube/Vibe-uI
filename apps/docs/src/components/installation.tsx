'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, Copy } from 'lucide-react'
import { cn } from '../lib/utils'
import { Highlight, themes } from 'prism-react-renderer'
import { useTheme } from 'next-themes'
import { stripTypeScript } from '../lib/strip-typescript'
import { ButtonGroup, Button } from 'vibe-ui'

interface InstallationProps {
  name: string
  vibeDeps?: string
  npmDeps?: string
  children: React.ReactNode
}

function getTextFromChildren(children: React.ReactNode): string {
  let text = ''
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child
    } else if (React.isValidElement(child)) {
      const element = child as React.ReactElement<{
        children?: React.ReactNode
      }>
      if (element.props.children) {
        text += getTextFromChildren(element.props.children)
      }
    }
  })
  return text
}

export function Installation({
  name,
  vibeDeps,
  npmDeps,
  children,
}: InstallationProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<'command' | 'manual'>('command')
  const [pkgManager, setPkgManager] = useState<'pnpm' | 'npx' | 'yarn' | 'bun'>(
    'pnpm',
  )
  const [copied, setCopied] = useState(false)
  const [copiedNpm, setCopiedNpm] = useState(false)
  const [lang, setLang] = useState<'ts' | 'js'>('ts')

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('custom-ui-lang-preference') as
      'ts' | 'js'
    if (savedLang) setLang(savedLang)

    const savedPkg = localStorage.getItem('custom-ui-pkg-preference') as
      'pnpm' | 'npx' | 'yarn' | 'bun'
    if (savedPkg) setPkgManager(savedPkg)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

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

  const depsList = vibeDeps ? vibeDeps.split(',').map((d) => d.trim()) : []
  const commandSuffix = depsList.length > 0 ? ` ${depsList.join(' ')}` : ''

  const commands = {
    pnpm: `pnpm dlx vibe-ui-kit@latest add ${name}${commandSuffix}`,
    npx: `npx vibe-ui-kit@latest add ${name}${commandSuffix}`,
    yarn: `yarn dlx vibe-ui-kit@latest add ${name}${commandSuffix}`,
    bun: `bunx vibe-ui-kit@latest add ${name}${commandSuffix}`,
  }

  const defaultDeps = 'lucide-react tailwind-variants clsx tailwind-merge'
  const effectiveNpmDeps =
    npmDeps && npmDeps.trim()
      ? npmDeps
          .split(',')
          .map((d) => d.trim())
          .join(' ')
      : defaultDeps

  const npmInstallCommands = {
    pnpm: `pnpm add ${effectiveNpmDeps}`,
    npx: `npm install ${effectiveNpmDeps}`,
    yarn: `yarn add ${effectiveNpmDeps}`,
    bun: `bun add ${effectiveNpmDeps}`,
  }

  const currentCommand = commands[pkgManager]
  const currentNpmCommand = npmInstallCommands[pkgManager]
  const rawCode = getTextFromChildren(children).trim()
  const activeCode = lang === 'js' ? stripTypeScript(rawCode) : rawCode

  const copyToClipboard = (text: string, isNpm: boolean = false) => {
    const docUrl = typeof window !== 'undefined' ? window.location.href : ''
    const formattedText =
      isNpm ||
      text.startsWith('pnpm') ||
      text.startsWith('npx') ||
      text.startsWith('bun') ||
      text.startsWith('yarn')
        ? text
        : docUrl
          ? `// Source: ${docUrl}\n${text}`
          : text
    navigator.clipboard.writeText(formattedText)
    if (isNpm) {
      setCopiedNpm(true)
      setTimeout(() => setCopiedNpm(false), 2000)
    } else {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
        Installation
      </h2>

      {/* Main Tabs */}
      <div className="flex border-b border-border mb-4 gap-4 text-sm justify-between items-center">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('command')}
            className={cn(
              'pb-2 border-b-2 cursor-pointer font-semibold transition-all duration-200',
              activeTab === 'command'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground',
            )}
          >
            Command
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={cn(
              'pb-2 border-b-2 cursor-pointer font-semibold transition-all duration-200',
              activeTab === 'manual'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground',
            )}
          >
            Manual
          </button>
        </div>
        {activeTab === 'manual' && (
          <ButtonGroup
            value={lang}
            onValueChange={(val) => handleLangChange(val as 'ts' | 'js')}
            className="mb-2"
          >
            <Button value="ts" className="!px-2.5 !h-7 text-xs font-semibold">
              TS
            </Button>
            <Button value="js" className="!px-2.5 !h-7 text-xs font-semibold">
              JS
            </Button>
          </ButtonGroup>
        )}
      </div>

      {activeTab === 'command' ? (
        <div className="space-y-4">
          {/* Package Manager Selector */}
          <ButtonGroup
            value={pkgManager}
            onValueChange={(val) =>
              handlePkgChange(val as 'pnpm' | 'npx' | 'yarn' | 'bun')
            }
            className="w-fit"
          >
            <Button value="pnpm">pnpm</Button>
            <Button value="npx">npx</Button>
            <Button value="yarn">yarn</Button>
            <Button value="bun">bun</Button>
          </ButtonGroup>

          {/* CLI Code block */}
          <div className="relative flex items-center justify-between rounded-lg border border-border p-4 font-mono text-sm shadow-sm bg-muted/30 text-foreground">
            <span className="select-all">{currentCommand}</span>
            <button
              onClick={() => copyToClipboard(currentCommand)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer ml-4 shadow-sm"
              title="Copy command"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="relative pl-9 space-y-8 before:absolute before:left-3.5 before:top-3.5 before:bottom-3.5 before:w-px before:bg-border">
          {/* Step 1: Install Dependencies */}
          <div className="relative space-y-3">
            <div className="absolute -left-9 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-foreground shadow-xs">
              1
            </div>
            <h3 className="text-sm font-semibold text-foreground pt-0.5">
              Install the following dependencies:
            </h3>

            {/* Package Manager Selector */}
            <ButtonGroup
              value={pkgManager}
              onValueChange={(val) =>
                handlePkgChange(val as 'pnpm' | 'npx' | 'yarn' | 'bun')
              }
              className="w-fit"
            >
              <Button value="pnpm">pnpm</Button>
              <Button value="npx">npx</Button>
              <Button value="yarn">yarn</Button>
              <Button value="bun">bun</Button>
            </ButtonGroup>

            {/* Dependency Install Command */}
            <div className="relative flex items-center justify-between rounded-lg border border-border p-4 font-mono text-xs shadow-sm bg-muted/30 text-foreground">
              <span className="select-all">{currentNpmCommand}</span>
              <button
                onClick={() => copyToClipboard(currentNpmCommand, true)}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer ml-4 shadow-sm shrink-0"
                title="Copy command"
              >
                {copiedNpm ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Step 2: Copy Code */}
          <div className="relative space-y-3">
            <div className="absolute -left-9 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-foreground shadow-xs">
              2
            </div>
            <h3 className="text-sm font-semibold text-foreground pt-0.5">
              Copy and paste the following code into your project.
            </h3>

            {/* Manual Code Block Container */}
            <div className="relative rounded-xl border border-border overflow-hidden shadow-sm bg-muted/10">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/40 text-xs text-muted-foreground font-mono">
                <span className="font-semibold text-foreground">
                  components/ui/{name}.{lang === 'ts' ? 'tsx' : 'jsx'}
                </span>
                <button
                  onClick={() => copyToClipboard(activeCode)}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-xs"
                  title="Copy code"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
              <div className="relative">
                <Highlight
                  theme={isDark ? themes.vsDark : themes.vsLight}
                  code={activeCode}
                  language={lang === 'ts' ? 'tsx' : 'jsx'}
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
                        'overflow-x-auto p-5 text-sm font-mono leading-relaxed max-h-[400px]',
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
                          <span className="table-cell select-none text-right pr-4 text-xs w-6 align-top pt-0.5 text-muted-foreground/60">
                            {i + 1}
                          </span>
                          <span className="table-cell align-top whitespace-pre">
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
            </div>
          </div>
        </div>
      )}

      {/* Vibe UI Internal Dependencies Notification */}
      {depsList.length > 0 && (
        <div className="mt-6 p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs text-muted-foreground flex flex-col gap-1.5 text-left backdrop-blur-md">
          <span className="font-semibold text-foreground flex items-center gap-1.5 text-[13px]">
            <span className="text-primary font-extrabold">
              💡 Vibe UI Component Dependencies:
            </span>{' '}
            This component requires other components to work correctly
          </span>
          <span className="leading-relaxed">
            Please make sure you also install these Vibe UI component
            dependencies:{' '}
            {depsList.map((dep, index) => (
              <React.Fragment key={dep}>
                <Link
                  href={`/docs/components/${dep.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary hover:underline font-bold capitalize"
                >
                  {dep}
                </Link>
                {index < depsList.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </span>
        </div>
      )}
    </div>
  )
}
