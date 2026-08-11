'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Check,
  Copy,
  ExternalLink,
  Terminal,
  ChevronDown,
  FileText,
  Zap,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from 'lucide-react'
import { cn } from '../lib/utils'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from 'vibe-ui'

export interface ComponentHeaderProps {
  name: string
  title?: string
  description: string
  radixUrl?: string
  prevItem?: { title: string; href: string } | null
  nextItem?: { title: string; href: string } | null
}

export function ComponentHeader({
  name,
  title,
  description,
  radixUrl,
  prevItem,
  nextItem,
}: ComponentHeaderProps) {
  const [copied, setCopied] = useState(false)
  const [copiedPage, setCopiedPage] = useState(false)
  const [copyingPage, setCopyingPage] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  React.useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    setIsMobile(media.matches)
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])
  const displayTitle =
    title ||
    name
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  const cliCommand = `npx vibe-ui-kit add ${name}`

  const copyCommand = () => {
    navigator.clipboard.writeText(cliCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getDynamicDocUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href
    }
    const envUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000')
    return `${envUrl}/docs/components/${name}`
  }

  const handleAIAction = async (provider: 'chatgpt' | 'claude' | 'v0') => {
    // 1. Instantly close dropdown & restore document body pointer events
    setDropdownOpen(false)
    if (typeof document !== 'undefined') {
      document.body.style.pointerEvents = ''
    }

    try {
      const docUrl = getDynamicDocUrl()
      // 2. Fetch the raw markdown content dynamically
      let rawMarkdown = ''
      try {
        const res = await fetch(`/api/components/${name}`)
        if (res.ok) {
          rawMarkdown = await res.text()
        }
      } catch (e) {
        console.error('Failed to pre-fetch markdown:', e)
      }

      // 3. Automatically copy it to clipboard with doc URL header
      if (rawMarkdown) {
        const markdownWithUrl = `<!-- Documentation URL: ${docUrl} -->\n# ${displayTitle}\nSource: ${docUrl}\n\n${rawMarkdown}`
        await navigator.clipboard.writeText(markdownWithUrl)
      }

      // 4. Construct a clean prompt informing the AI of the component and doc URL
      const promptText = `I want to use the Vibe UI component "${displayTitle}" (Doc URL: ${docUrl}). I have copied its complete code and documentation to my clipboard. Please analyze the code I paste next and help me use it.`

      // 5. Open AI tool in a new tab asynchronously so Radix finishes unmounting
      setTimeout(() => {
        if (provider === 'chatgpt') {
          window.open(
            `https://chatgpt.com/?q=${encodeURIComponent(promptText)}`,
            '_blank',
          )
        } else if (provider === 'claude') {
          window.open(
            `https://claude.ai/new?q=${encodeURIComponent(promptText)}`,
            '_blank',
          )
        } else if (provider === 'v0') {
          window.open(
            `https://v0.dev/?q=${encodeURIComponent(promptText)}`,
            '_blank',
          )
        }
      }, 50)
    } catch (err) {
      console.error('AI redirect failed:', err)
    }
  }

  const handleCopyPageContent = async () => {
    try {
      setCopyingPage(true)
      setDropdownOpen(false)
      if (typeof document !== 'undefined') {
        document.body.style.pointerEvents = ''
      }
      const docUrl = getDynamicDocUrl()
      const res = await fetch(`/api/components/${name}`)
      if (!res.ok) throw new Error('Failed to fetch markdown')
      const rawMarkdown = await res.text()
      const markdownWithUrl = `<!-- Documentation URL: ${docUrl} -->\n# ${displayTitle}\nSource: ${docUrl}\n\n${rawMarkdown}`
      await navigator.clipboard.writeText(markdownWithUrl)
      setCopiedPage(true)
      setTimeout(() => setCopiedPage(false), 2000)
    } catch (err) {
      console.error('Failed to copy page content:', err)
    } finally {
      setCopyingPage(false)
    }
  }

  const CopyIcon = Copy as any
  const CheckIcon = Check as any

  return (
    <div className="mb-8 space-y-4 border-b border-border pb-6">
      {/* Header Title, Description & Action Button side-by-side */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="space-y-2 flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {displayTitle}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Copy Page Split Button Dropdown & Navigation Arrows */}
        <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-2 shrink-0 select-none">
          <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center border border-border bg-muted/30 rounded-lg overflow-hidden h-8 shadow-2xs">
                {/* Main Copy Button */}
                <button
                  type="button"
                  disabled={copyingPage}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyPageContent()
                  }}
                  onPointerDown={(e) => {
                    e.stopPropagation()
                  }}
                  className="flex items-center gap-1.5 px-3 h-full text-xs font-semibold text-foreground hover:bg-muted/80 hover:text-foreground transition-all cursor-pointer border-r border-border disabled:opacity-75 disabled:cursor-not-allowed focus:outline-none"
                >
                  {copyingPage ? (
                    <Loader2 className="h-3.5 w-3.5 text-muted-foreground animate-spin shrink-0" />
                  ) : copiedPage ? (
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  ) : (
                    <CopyIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  )}
                  <span>
                    {copyingPage
                      ? 'Copying...'
                      : copiedPage
                        ? 'Copied!'
                        : 'Copy Page'}
                  </span>
                </button>

                {/* Dropdown Trigger Chevron */}
                <button
                  type="button"
                  className="flex items-center justify-center w-7 h-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all cursor-pointer focus:outline-none"
                  title="More options"
                >
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={isMobile ? 'start' : 'end'}
              className="w-56 bg-popover border border-border rounded-xl p-1 shadow-lg z-50"
            >
              <DropdownMenuItem
                onClick={() =>
                  window.open(
                    `/docs/components/${cleanNameForUrl(name)}.md`,
                    '_blank',
                  )
                }
                className="flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-muted rounded-lg cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                <span>View as Markdown</span>
              </DropdownMenuItem>
              <div className="h-px bg-border my-1" />
              <DropdownMenuItem
                onClick={() => handleAIAction('v0')}
                className="flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-muted rounded-lg cursor-pointer"
              >
                <Zap className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Open in v0</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleAIAction('chatgpt')}
                className="flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-muted rounded-lg cursor-pointer"
              >
                <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Open in ChatGPT</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleAIAction('claude')}
                className="flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-muted rounded-lg cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Open in Claude</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Navigation Arrows */}
          {(prevItem || nextItem) && (
            <div className="flex items-center gap-1 md:border-l md:border-border md:pl-2 md:ml-1">
              {prevItem && (
                <Link
                  href={prevItem.href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all cursor-pointer shadow-2xs group"
                  title={`Previous: ${prevItem.title}`}
                >
                  <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                </Link>
              )}
              {nextItem && (
                <Link
                  href={nextItem.href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all cursor-pointer shadow-2xs group"
                  title={`Next: ${nextItem.title}`}
                >
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action Bar: Component API Link */}
      {radixUrl && (
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={radixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors no-underline"
          >
            <span>Component API</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  )
}

function cleanNameForUrl(name: string): string {
  return name.replace(/\.md$/, '')
}
