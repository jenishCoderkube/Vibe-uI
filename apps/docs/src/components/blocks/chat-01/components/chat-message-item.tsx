'use client'

import React, { useState } from 'react'
import {
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Sparkles,
  Pencil,
  Download,
  Maximize2,
  Minimize2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  isStreaming?: boolean
  rating?: 'like' | 'dislike' | null
}

interface ChatMessageItemProps {
  message: Message
  onRegenerate?: (id: string) => void
  onRateMessage?: (id: string, rating: 'like' | 'dislike') => void
}

export function ChatMessageItem({
  message,
  onRegenerate,
  onRateMessage,
}: ChatMessageItemProps) {
  const [copied, setCopied] = useState(false)
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyCodeToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedCodeIndex(index)
    setTimeout(() => setCopiedCodeIndex(null), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([message.content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `response-${message.id.slice(-4)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // Simple, robust Markdown parser that outputs rich React components
  const renderMessageContent = (content: string) => {
    if (!content) return null

    // Split by code blocks: ```lang code ```
    const parts = content.split(/(```[\s\S]*?```)/g)
    let codeBlockCount = 0

    return parts.map((part, index) => {
      // Check if it's a code block
      if (part.startsWith('```') && part.endsWith('```')) {
        const lines = part.slice(3, -3).trim().split('\n')
        const firstLine = lines[0] || ''
        const language = ['javascript', 'typescript', 'python', 'html', 'css', 'json', 'bash', 'rust'].includes(firstLine.toLowerCase())
          ? firstLine
          : 'code'
        
        const codeStartIdx = language === 'code' ? 0 : 1
        const codeString = lines.slice(codeStartIdx).join('\n')
        const currentCodeIdx = codeBlockCount++

        return (
          <div key={index} className="my-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0d0d0d] text-zinc-800 dark:text-zinc-100 overflow-hidden shadow-sm text-left font-mono">
            {/* Code block header bar */}
            <div className="flex items-center justify-between px-4 py-1.5 border-b border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900/60 select-none">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                {language}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyCodeToClipboard(codeString, currentCodeIdx)}
                className="h-6 px-2 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-white/5 gap-1 cursor-pointer rounded-md"
              >
                {copiedCodeIndex === currentCodeIdx ? (
                  <>
                    <Check className="h-3 w-3 text-green-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy code</span>
                  </>
                )}
              </Button>
            </div>
            
            {/* Preformatted code snippet block */}
            <div className="p-4 overflow-x-auto text-[13px] leading-relaxed max-w-full">
              <pre><code>{codeString}</code></pre>
            </div>
          </div>
        )
      }

      // Render inline styles: blockquotes, lists, tables, bold markdown
      const lines = part.split('\n')
      const renderedLines: React.ReactNode[] = []

      lines.forEach((line, lineIdx) => {
        // 1. Blockquotes
        if (line.startsWith('> ')) {
          renderedLines.push(
            <blockquote key={lineIdx} className="border-l-2 border-zinc-400 dark:border-zinc-700 pl-4 py-0.5 my-2 text-[13px] italic text-zinc-500 bg-muted/[0.02]">
              {line.substring(2)}
            </blockquote>
          )
          return
        }

        // 2. Lists
        if (line.startsWith('- ') || line.startsWith('* ')) {
          renderedLines.push(
            <ul key={lineIdx} className="list-disc pl-5 my-1 text-[13px] sm:text-[14px] leading-relaxed text-foreground/90">
              <li>{parseInlineMarkdown(line.substring(2))}</li>
            </ul>
          )
          return
        }

        // Standard Paragraph
        if (line.trim()) {
          renderedLines.push(
            <p key={lineIdx} className="text-[13px] sm:text-[14px] leading-relaxed text-foreground/90 my-2">
              {parseInlineMarkdown(line)}
            </p>
          )
        }
      })

      return <React.Fragment key={index}>{renderedLines}</React.Fragment>
    })
  }

  // Parse bold **text** and inline code `code`
  const parseInlineMarkdown = (text: string) => {
    const boldParts = text.split(/(\*\*.*?\*\*|`.*?`)/g)
    return boldParts.map((bPart, idx) => {
      if (bPart.startsWith('**') && bPart.endsWith('**')) {
        return <strong key={idx} className="font-semibold text-foreground">{bPart.slice(2, -2)}</strong>
      }
      if (bPart.startsWith('`') && bPart.endsWith('`')) {
        return <code key={idx} className="px-1 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800/50 font-mono text-[12px] border border-border/40">{bPart.slice(1, -1)}</code>
      }
      return bPart
    })
  }

  const isUser = message.role === 'user'

  if (isUser) {
    // User Message: Light gray in light mode, Dark gray in dark mode (ChatGPT style)
    return (
      <div className="flex w-full justify-end py-2">
        <div className="bg-zinc-100 dark:bg-[#2f2f2f] text-zinc-900 dark:text-zinc-100 px-4.5 py-3 rounded-[20px] rounded-tr-[4px] max-w-[75%] sm:max-w-[70%] text-[13.5px] sm:text-sm leading-relaxed text-left break-words shadow-sm">
          {message.content}
        </div>
      </div>
    )
  }

  // Assistant Message: Styled container block with top actions and bottom feedback row
  return (
    <div className={`w-full py-2 text-left ${isFullscreen ? 'fixed inset-0 z-50 bg-background p-6 md:p-10 overflow-y-auto' : ''}`}>
      <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#fafafa] dark:bg-[#2a2a2a] overflow-hidden shadow-xs flex flex-col">
        
        {/* Top Header Bar Inside the Block */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-[#1b1b1b]/50 select-none">
          {/* Left edit trigger */}
          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1 px-2.5 text-xs text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 font-medium"
          >
            <Pencil className="h-3.5 w-3.5" />
            <span>Edit</span>
          </Button>

          {/* Right actions list */}
          <div className="flex items-center gap-1">
            {/* Copy button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="h-7 w-7 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
              title="Copy output text"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            </Button>

            {/* Download button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDownload}
              className="h-7 w-7 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
              title="Download content"
            >
              <Download className="h-3.5 w-3.5" />
            </Button>

            {/* Maximize button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-7 w-7 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
              title={isFullscreen ? "Exit Fullscreen" : "Maximize view"}
            >
              {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </Button>
          </div>
        </div>

        {/* Card Body block content */}
        <div className="p-4 sm:p-5 flex-1 min-h-[60px] text-foreground/90 select-text">
          {renderMessageContent(message.content)}
          
          {/* Animated typing dots overlay */}
          {message.isStreaming && (
            <div className="flex items-center gap-1 py-2 select-none" aria-label="Thinking...">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400 animate-bounce [animation-delay:-0.3s]"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400 animate-bounce [animation-delay:-0.15s]"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400 animate-bounce"></span>
            </div>
          )}
        </div>

        {/* Bottom Feedback Actions Row */}
        {!message.isStreaming && (
          <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/30 dark:bg-[#1b1b1b]/20 select-none">
            <div className="flex items-center gap-1">
              {onRateMessage && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRateMessage(message.id, 'like')}
                    className={`h-7.5 w-7.5 cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 ${message.rating === 'like' ? 'text-primary' : 'text-zinc-500 hover:text-foreground'}`}
                    title="Good response"
                  >
                    <ThumbsUp className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRateMessage(message.id, 'dislike')}
                    className={`h-7.5 w-7.5 cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 ${message.rating === 'dislike' ? 'text-destructive' : 'text-zinc-500 hover:text-foreground'}`}
                    title="Bad response"
                  >
                    <ThumbsDown className="h-3.5 w-3.5" />
                  </Button>
                </>
              )}
            </div>

            {onRegenerate && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRegenerate(message.id)}
                className="h-7.5 w-7.5 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
                title="Regenerate response"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
