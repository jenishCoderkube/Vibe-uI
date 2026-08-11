'use client'

import React, { useState, useEffect } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '../lib/utils'
import { stripTypeScript } from '../lib/strip-typescript'

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

export function CodeBlockPre({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false)
  const [lang, setLang] = useState<'ts' | 'js'>('ts')
  const preRef = React.useRef<HTMLPreElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('custom-ui-lang-preference') as
      'ts' | 'js'
    if (saved) setLang(saved)

    const handleSync = () => {
      const updated = localStorage.getItem('custom-ui-lang-preference') as
        'ts' | 'js'
      if (updated) setLang(updated)
    }

    window.addEventListener('custom-ui-lang-changed', handleSync)
    return () =>
      window.removeEventListener('custom-ui-lang-changed', handleSync)
  }, [])

  const handleLangChange = (newLang: 'ts' | 'js') => {
    setLang(newLang)
    localStorage.setItem('custom-ui-lang-preference', newLang)
    window.dispatchEvent(new Event('custom-ui-lang-changed'))
  }

  const isTypeScriptConvertible = !!(
    className?.includes('language-ts') ||
    className?.includes('language-tsx') ||
    className?.includes('language-js') ||
    className?.includes('language-jsx') ||
    className?.includes('language-typescript') ||
    className?.includes('language-javascript')
  )

  const match = className?.match(/language-(\w+)/)
  const langLabel = match ? match[1].toUpperCase() : ''

  const rawCode = getTextFromChildren(children).trim()
  const displayCode =
    isTypeScriptConvertible && lang === 'js'
      ? stripTypeScript(rawCode)
      : rawCode

  const onCopy = () => {
    navigator.clipboard.writeText(displayCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const CopyIcon = Copy as any
  const CheckIcon = Check as any

  return (
    <div className="group relative my-6 rounded-lg border border-border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2 text-xs font-semibold">
        {isTypeScriptConvertible ? (
          <div className="flex items-center gap-0.5 rounded-md bg-muted p-0.5">
            <button
              onClick={() => handleLangChange('ts')}
              className={cn(
                'px-2 py-1 rounded-sm cursor-pointer transition-all',
                lang === 'ts'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              TS
            </button>
            <button
              onClick={() => handleLangChange('js')}
              className={cn(
                'px-2 py-1 rounded-sm cursor-pointer transition-all',
                lang === 'js'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              JS
            </button>
          </div>
        ) : (
          <span className="text-muted-foreground uppercase tracking-wider text-[10px] font-bold">
            {langLabel}
          </span>
        )}
        <button
          onClick={onCopy}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 cursor-pointer shadow-sm"
          title="Copy code"
        >
          {copied ? (
            <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <CopyIcon className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      <pre
        ref={preRef}
        className={cn(
          'overflow-x-auto p-4 font-mono text-sm leading-relaxed text-foreground bg-transparent m-0',
          className,
        )}
        {...props}
      >
        <code>{displayCode}</code>
      </pre>
    </div>
  )
}
