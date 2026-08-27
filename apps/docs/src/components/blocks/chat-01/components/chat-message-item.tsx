'use client'

import React, { useState, useEffect } from 'react'
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
  Minimize2,
  Store,
  Upload
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Highlight, themes } from 'prism-react-renderer'
import { cn } from '@/lib/utils'

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

const mapLanguage = (lang: string): string => {
  const mapped: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    jsx: 'jsx',
    tsx: 'tsx',
    py: 'python',
    rs: 'rust',
    sh: 'bash',
    shell: 'bash',
    yml: 'yaml',
    md: 'markdown',
    html: 'html',
    css: 'css',
    json: 'json',
    sql: 'sql',
    go: 'go',
  }
  return mapped[lang.toLowerCase()] || lang.toLowerCase() || 'text'
}

interface HighlightedCodeBlockProps {
  code: string
  language: string
  index: number
  onCopy: (code: string, index: number) => void
  copiedIndex: number | null
}

function HighlightedCodeBlock({
  code,
  language,
  index,
  onCopy,
  copiedIndex,
}: HighlightedCodeBlockProps) {
  const cleanCode = code.replace(/\n$/, '')
  const langKey = mapLanguage(language)
  
  return (
    <div className="my-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#0d0d0d] text-zinc-100 overflow-hidden shadow-md text-left font-mono">
      {/* Header bar: dark theme */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-[#1e1e1e] select-none text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
        <span className="uppercase font-bold tracking-wider font-sans">
          {language || 'text'}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCopy(cleanCode, index)}
          className="h-6 px-2.5 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-foreground hover:bg-zinc-200 dark:hover:bg-white/5 gap-1.5 cursor-pointer rounded-md transition-all border-none"
        >
          {copiedIndex === index ? (
            <>
              <Check className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy code</span>
            </>
          )}
        </Button>
      </div>
      
      {/* Code body with styling and line numbers */}
      <div className="relative overflow-x-auto select-text text-[11.5px] sm:text-[13px] leading-relaxed max-w-full bg-[#0d0d0d]">
        <Highlight theme={themes.vsDark} code={cleanCode} language={langKey}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn('p-4 font-mono overflow-x-auto m-0 bg-transparent w-full table', className)}
              style={{ ...style, backgroundColor: 'transparent' }}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className="table-row hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors"
                >
                  {/* Line number column */}
                  <span className="table-cell select-none text-right pr-4 text-[10.5px] sm:text-xs w-8 align-top text-zinc-400/50 dark:text-zinc-650">
                    {i + 1}
                  </span>
                  {/* Content column */}
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
  )
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

  // Parse bold **text**, italics *text*, code `code`, and links [text](url)
  const parseInlineMarkdown = (text: string) => {
    if (!text) return []
    const tokenRegex = /(\*\*.*?\*\*|__.*?__|`.*?`|\[.*?\]\(.*?\)|[*_].*?[*_])/g
    const parts = text.split(tokenRegex)
    
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-bold text-zinc-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith('__') && part.endsWith('__')) {
        return (
          <strong key={idx} className="font-bold text-zinc-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800/50 font-mono text-[11px] sm:text-[12px] text-pink-600 dark:text-pink-400 border border-zinc-200 dark:border-zinc-800/40"
          >
            {part.slice(1, -1)}
          </code>
        )
      }
      if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const mid = part.indexOf('](')
        const label = part.slice(1, mid)
        const url = part.slice(mid + 2, -1)
        return (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium break-all"
          >
            {label}
          </a>
        )
      }
      if (
        (part.startsWith('*') && part.endsWith('*')) ||
        (part.startsWith('_') && part.endsWith('_'))
      ) {
        return (
          <em key={idx} className="italic text-zinc-700 dark:text-zinc-300">
            {part.slice(1, -1)}
          </em>
        )
      }
      return part
    })
  }

  // Stateful Markdown-to-React parser that groups list items and handles streaming code blocks
  const renderMessageContent = (content: string) => {
    if (!content) return null

    // Split content by triple backticks, capturing unclosed blocks for streaming
    const parts = content.split(/(```[\s\S]*?(?:```|$))/g)
    let codeBlockIndex = 0

    return parts.map((part, index) => {
      // Check if it's a code block
      if (part.startsWith('```')) {
        const isClosed = part.endsWith('```')
        const rawCode = isClosed ? part.slice(3, -3) : part.slice(3)
        
        const lines = rawCode.split('\n')
        const firstLine = (lines[0] || '').trim()
        
        const knownLanguages = [
          'javascript', 'typescript', 'python', 'html', 'css', 'json', 'bash', 
          'rust', 'go', 'sql', 'yaml', 'markdown', 'js', 'ts', 'py', 'rs', 
          'sh', 'yml', 'md', 'cpp', 'c', 'java'
        ]
        
        const isLanguageDeclared = knownLanguages.includes(firstLine.toLowerCase())
        const language = isLanguageDeclared ? firstLine : 'code'
        const codeStartIdx = isLanguageDeclared ? 1 : 0
        const codeString = lines.slice(codeStartIdx).join('\n')
        const currentCodeIdx = codeBlockIndex++

        return (
          <HighlightedCodeBlock
            key={index}
            code={codeString}
            language={language}
            index={currentCodeIdx}
            onCopy={copyCodeToClipboard}
            copiedIndex={copiedCodeIndex}
          />
        )
      }

      // Stateful parser for regular markdown lines to group lists and paragraphs
      const lines = part.split('\n')
      const renderedBlocks: React.ReactNode[] = []
      let currentList: { type: 'ul' | 'ol'; items: React.ReactNode[] } | null = null

      const flushList = (key: string) => {
        if (!currentList) return
        const listClass = "list-inside pl-5 my-3 space-y-1.5 text-[12px] sm:text-[14px] leading-relaxed text-zinc-800 dark:text-zinc-200"
        if (currentList.type === 'ul') {
          renderedBlocks.push(
            <ul key={key} className={`list-disc ${listClass}`}>
              {currentList.items}
            </ul>
          )
        } else {
          renderedBlocks.push(
            <ol key={key} className={`list-decimal ${listClass}`}>
              {currentList.items}
            </ol>
          )
        }
        currentList = null
      }

      lines.forEach((line, lineIdx) => {
        const trimmed = line.trim()

        // 1. Lists: matches "- ", "* ", or "1. "
        const bulletMatch = line.match(/^(\s*)(?:[-*+]|\d+\.)\s+(.*)/)
        if (bulletMatch) {
          const isNumbered = /^\d+\./.test(trimmed)
          const listType = isNumbered ? 'ol' : 'ul'
          const content = bulletMatch[2]

          if (currentList && currentList.type !== listType) {
            flushList(`list-flush-${lineIdx}`)
          }

          if (!currentList) {
            currentList = { type: listType, items: [] }
          }

          currentList.items.push(
            <li key={`li-${lineIdx}`} className="pl-1">
              {parseInlineMarkdown(content)}
            </li>
          )
          return
        }

        // Standard line: flush any pending list
        if (currentList) {
          flushList(`list-flush-${lineIdx}`)
        }

        // 2. Blockquotes: matches ">"
        if (trimmed.startsWith('>')) {
          const content = line.replace(/^\s*>\s?/, '')
          renderedBlocks.push(
            <blockquote key={`quote-${lineIdx}`} className="border-l-4 border-zinc-400 dark:border-zinc-700 pl-4 py-1 my-3 text-[12px] sm:text-[13.5px] italic text-zinc-500 bg-zinc-100/50 dark:bg-zinc-800/20 rounded-r-md">
              {parseInlineMarkdown(content)}
            </blockquote>
          )
          return
        }

        // 3. Headings: matches "# Heading"
        const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)/)
        if (headingMatch) {
          const level = headingMatch[1].length
          const content = headingMatch[2]
          const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          const headingClasses = [
            'text-xl font-bold mt-5 mb-2.5 text-zinc-900 dark:text-white first:mt-0', // h1
            'text-lg font-bold mt-4.5 mb-2 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1', // h2
            'text-base font-semibold mt-4 mb-1.5 text-zinc-900 dark:text-white', // h3
            'text-sm font-semibold mt-3.5 mb-1 text-zinc-900 dark:text-white', // h4
            'text-xs font-semibold mt-3 mb-1 text-zinc-900 dark:text-white', // h5
            'text-[10px] font-semibold mt-3 mb-1 text-zinc-500 dark:text-zinc-400 uppercase tracking-wider', // h6
          ]
          renderedBlocks.push(
            <HeadingTag key={`h-${lineIdx}`} className={headingClasses[level - 1]}>
              {parseInlineMarkdown(content)}
            </HeadingTag>
          )
          return
        }

        // 4. Paragraph
        if (trimmed) {
          renderedBlocks.push(
            <p key={`p-${lineIdx}`} className="text-[12px] sm:text-[14px] leading-relaxed text-zinc-750 dark:text-zinc-300 my-2 break-words">
              {parseInlineMarkdown(line)}
            </p>
          )
        }
      })

      // Flush list at the end of parts
      if (currentList) {
        flushList(`list-flush-end-${index}`)
      }

      return <React.Fragment key={index}>{renderedBlocks}</React.Fragment>
    })
  }

  const isUser = message.role === 'user'

  if (isUser) {
    // User Message: Styled as a right-aligned ChatGPT-style message bubble
    // Dynamic copy, share, and edit action buttons only display on hover
    return (
      <div className="flex flex-col items-end w-full py-2 group select-none">
        <div className="flex justify-end w-full">
          <div className="relative min-w-0 overflow-hidden rounded-[22px] px-4 py-2.5 leading-6 bg-[#1b72e8] text-white max-w-[70%] text-[13.5px] sm:text-sm text-left break-words select-text font-sans">
            <div className="max-w-full min-w-0 [overflow-wrap:anywhere] whitespace-pre-wrap">
              {message.content}
            </div>
          </div>
        </div>
        
        {/* Bottom hover action buttons */}
        <div className="flex items-center gap-1.5 mt-1 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={copyToClipboard}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-150 cursor-pointer"
            title={copied ? "Copied" : "Copy message"}
          >
            {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
          </button>
          
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
              alert('Copied link to clipboard!')
            }}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-150 cursor-pointer"
            title="Share prompt"
          >
            <Upload className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => {
              const newContent = prompt('Edit message:', message.content)
              if (newContent !== null && newContent.trim() !== '') {
                alert('Successfully edited message to: ' + newContent)
              }
            }}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-150 cursor-pointer"
            title="Edit message"
          >
            <Pencil className="h-4 w-4" />
          </button>
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
