'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import { Check, Copy, Sliders, RotateCcw } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { ComponentPlayground } from './playground'
import { useTheme } from 'next-themes'
import { stripTypeScript } from '../lib/strip-typescript'
import { ButtonGroup, Button } from 'vibe-ui'

interface ComponentPreviewProps {
  children: React.ReactNode
  code?: string
  className?: string
  sandbox?: string
  name?: string
  vibeDeps?: string
  npmDeps?: string
  noBorder?: boolean
  noPadding?: boolean
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

export function ComponentPreview({
  children,
  code = '',
  className,
  sandbox,
  name,
  vibeDeps,
  npmDeps,
  noBorder = false,
  noPadding = false,
}: ComponentPreviewProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [tab, setTab] = useState<'preview' | 'code' | 'sandbox'>('preview')
  const [copied, setCopied] = useState(false)
  const [copiedDep, setCopiedDep] = useState(false)
  const [lang, setLang] = useState<'ts' | 'js'>('ts')
  const [pkgManager, setPkgManager] = useState<'pnpm' | 'npx' | 'yarn' | 'bun'>(
    'pnpm',
  )
  const [isExpanded, setIsExpanded] = useState(false)
  const [previewKey, setPreviewKey] = useState(0)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('custom-ui-lang-preference') as
      'ts' | 'js'
    if (saved) setLang(saved)

    const savedPkg = localStorage.getItem('custom-ui-pkg-preference') as
      'pnpm' | 'npx' | 'yarn' | 'bun'
    if (savedPkg) setPkgManager(savedPkg)
  }, [])

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

  const isDark = mounted ? resolvedTheme === 'dark' : true

  const handleLangChange = (newLang: 'ts' | 'js') => {
    setLang(newLang)
    localStorage.setItem('custom-ui-lang-preference', newLang)
    window.dispatchEvent(new Event('custom-ui-lang-changed'))
  }

  useEffect(() => {
    const handleSync = () => {
      const saved = localStorage.getItem('custom-ui-lang-preference') as
        'ts' | 'js'
      if (saved) setLang(saved)
    }
    window.addEventListener('custom-ui-lang-changed', handleSync)
    return () =>
      window.removeEventListener('custom-ui-lang-changed', handleSync)
  }, [])

  const childrenArray = React.Children.toArray(children).filter((child) => {
    if (typeof child === 'string') {
      return child.trim().length > 0
    }
    return true
  })
  const hasMultipleChildren = childrenArray.length > 1
  const previewChild = hasMultipleChildren ? childrenArray[0] : children
  const codeChild = hasMultipleChildren ? childrenArray[1] : null

  const rawCode = codeChild
    ? getTextFromChildren(codeChild).trim()
    : code.trim()
  const activeCode = lang === 'js' ? stripTypeScript(rawCode) : rawCode
  const lineCount = activeCode.split('\n').length

  const copyToClipboard = () => {
    const docUrl = typeof window !== 'undefined' ? window.location.href : ''
    const formattedCode = docUrl
      ? `// Source: ${docUrl}\n${activeCode}`
      : activeCode
    navigator.clipboard.writeText(formattedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReplay = () => {
    setPreviewKey((prev) => prev + 1)
  }

  const SlidersIcon = Sliders as any
  const CheckIcon = Check as any
  const CopyIcon = Copy as any
  const RotateCcwIcon = RotateCcw as any

  return (
    <div className="group relative my-6 flex flex-col space-y-2">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-4 text-sm font-medium">
          <button
            onClick={() => setTab('preview')}
            className={cn(
              'border-b-2 px-1 pb-1 transition-all cursor-pointer font-semibold text-sm',
              tab === 'preview'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground',
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
              'border-b-2 px-1 pb-1 transition-all cursor-pointer font-semibold text-sm',
              tab === 'code'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground',
            )}
          >
            Code
          </button>
          {sandbox && tab === 'sandbox' && (
            <button
              onClick={() => setTab('sandbox')}
              className={cn(
                'border-b-2 px-1 pb-1 transition-all cursor-pointer font-semibold text-sm flex items-center gap-1',
                tab === 'sandbox'
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground',
              )}
            >
              Sandbox
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          {tab === 'preview' && (
            <button
              onClick={handleReplay}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
              title="Replay animation"
            >
              <RotateCcwIcon className="h-3.5 w-3.5" />
            </button>
          )}
          {tab === 'code' && (
            <ButtonGroup
              value={lang}
              onValueChange={(val) => handleLangChange(val as 'ts' | 'js')}
              radius="none"
              className="mr-2 !h-[22px] !p-0.5 [&_button]:!h-[18px] [&_button]:!px-2 [&_button]:text-[9px] [&_button]:font-bold [&_button]:tracking-wider"
            >
              <Button value="ts">TS</Button>
              <Button value="js">JS</Button>
            </ButtonGroup>
          )}
          {sandbox && tab === 'preview' && (
            <button
              onClick={() => setTab('sandbox')}
              className="flex h-8 px-2.5 items-center justify-center gap-1 rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer text-xs font-semibold"
              title="Open sandbox playground"
            >
              <SlidersIcon className="h-3.5 w-3.5" />
              <span>Sandbox</span>
            </button>
          )}
          {tab === 'code' && (
            <button
              onClick={copyToClipboard}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
              title="Copy code"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-emerald-500" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>
      <div
        className={cn(
          'relative rounded-lg',
          !noBorder && 'border border-border bg-card shadow-sm overflow-hidden',
          tab === 'code' && 'overflow-hidden border border-border bg-zinc-950',
        )}
      >
        {tab === 'preview' && (
          <div
            className={cn(
              'relative flex min-h-[220px] sm:min-h-[350px] w-full items-center justify-center bg-background not-typeset not-prose',
              noPadding ? 'p-0' : 'p-2 sm:p-6 md:p-10',
              className?.includes('overflow-visible')
                ? 'overflow-visible z-20'
                : 'overflow-hidden',
              noBorder && 'border-0 bg-transparent shadow-none p-0 min-h-0',
              className,
            )}
            data-not-typeset
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none rounded-lg" />
            <div
              key={previewKey}
              className={cn(
                'relative z-10 flex gap-4 flex-wrap w-full max-w-full not-typeset not-prose',
                noPadding ? 'p-0' : 'py-2 px-1 sm:py-4 sm:px-2',
                className?.includes('overflow-visible')
                  ? 'overflow-visible items-center justify-center z-20'
                  : 'items-center justify-center overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
              )}
              data-not-typeset
            >
              {previewChild}
            </div>
          </div>
        )}
        {tab === 'code' && (
          <div
            className={cn(
              'relative overflow-hidden',
              isDark ? 'bg-zinc-950' : 'bg-zinc-50',
            )}
          >
            {(() => {
              const vibeDepsList = vibeDeps
                ? vibeDeps
                    .split(',')
                    .map((d) => d.trim())
                    .filter((d) => d)
                    .join(' ')
                : ''
              const npmDepsList = npmDeps
                ? npmDeps
                    .split(',')
                    .map((d) => d.trim())
                    .join(' ')
                : ''

              let currentDepCommand = ''
              if (vibeDepsList) {
                if (pkgManager === 'pnpm')
                  currentDepCommand = `pnpm dlx vibe-ui-kit@latest add ${vibeDepsList}`
                else if (pkgManager === 'npx')
                  currentDepCommand = `npx vibe-ui-kit@latest add ${vibeDepsList}`
                else if (pkgManager === 'yarn')
                  currentDepCommand = `yarn dlx vibe-ui-kit@latest add ${vibeDepsList}`
                else if (pkgManager === 'bun')
                  currentDepCommand = `bunx vibe-ui-kit@latest add ${vibeDepsList}`
              } else if (npmDepsList) {
                if (pkgManager === 'pnpm')
                  currentDepCommand = `pnpm add ${npmDepsList}`
                else if (pkgManager === 'npx')
                  currentDepCommand = `npm install ${npmDepsList}`
                else if (pkgManager === 'yarn')
                  currentDepCommand = `yarn add ${npmDepsList}`
                else if (pkgManager === 'bun')
                  currentDepCommand = `bun add ${npmDepsList}`
              }

              if (!currentDepCommand) return null

              const copyDepToClipboard = () => {
                navigator.clipboard.writeText(currentDepCommand)
                setCopiedDep(true)
                setTimeout(() => setCopiedDep(false), 2000)
              }

              return (
                <div className="p-5 border-b border-border/80 bg-muted/10 space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-foreground">
                      1. Install the following dependencies:
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-normal">
                      Note: Make sure you have already installed the main{' '}
                      <code className="bg-muted px-1.5 py-0.5 rounded border border-border/60 font-mono text-[10px] text-foreground">
                        {name || sandbox || 'component'}
                      </code>{' '}
                      component before adding these.
                    </div>
                    <div className="flex items-center gap-1.5 rounded-md bg-muted p-0.5 text-[10px] font-semibold w-fit">
                      {(['pnpm', 'npx', 'yarn', 'bun'] as const).map((pm) => (
                        <button
                          key={pm}
                          type="button"
                          onClick={() => handlePkgChange(pm)}
                          className={cn(
                            'px-2 py-1 rounded-sm cursor-pointer transition-all',
                            pkgManager === pm
                              ? 'bg-background text-foreground shadow-xs font-semibold'
                              : 'text-muted-foreground hover:text-foreground',
                          )}
                        >
                          {pm}
                        </button>
                      ))}
                    </div>
                    <div className="relative flex items-center justify-between rounded-lg border border-border p-3 font-mono text-xs bg-muted/40 text-foreground">
                      <span className="select-all">{currentDepCommand}</span>
                      <button
                        type="button"
                        onClick={copyDepToClipboard}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
                        title="Copy install command"
                      >
                        {copiedDep ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-foreground">
                    2. Copy and paste the following code into your project:
                  </div>
                </div>
              )
            })()}
            <div
              className={cn(
                'transition-all duration-300',
                !isExpanded && lineCount > 10
                  ? 'max-h-[180px] overflow-hidden'
                  : 'max-h-[600px] overflow-y-auto',
              )}
            >
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
                      'overflow-x-auto p-5 text-sm font-mono leading-relaxed',
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
                            'table-cell select-none text-right pr-4 text-xs w-6 align-top pt-0.5',
                            isDark ? 'text-zinc-600' : 'text-zinc-400',
                          )}
                        >
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
            {!isExpanded && lineCount > 10 && (
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
        )}
        {tab === 'sandbox' && sandbox && (
          <div className="p-1.5 bg-background">
            <ComponentPlayground component={sandbox as any} />
          </div>
        )}
      </div>
    </div>
  )
}
