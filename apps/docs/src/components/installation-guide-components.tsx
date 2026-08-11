'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '../lib/utils'
import {
  Info,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'

export function FrameworkGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {children}
    </div>
  )
}

export interface FrameworkCardProps {
  href: string
  title: string
  description: string
  badge?: string
  icon?: React.ReactNode
}

export function FrameworkCard({
  href,
  title,
  description,
  badge,
  icon,
}: FrameworkCardProps) {
  let cardIcon = icon
  const lowerTitle = title.toLowerCase()

  if (lowerTitle.includes('next')) {
    cardIcon = (
      <svg
        className="h-6 w-6 text-foreground"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
      </svg>
    )
  } else if (lowerTitle.includes('vite')) {
    cardIcon = (
      <svg
        className="h-6 w-6 text-foreground"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
      </svg>
    )
  } else if (lowerTitle.includes('manual')) {
    cardIcon = (
      <svg
        className="h-6 w-6 text-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    )
  }

  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 no-underline"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
            {cardIcon}
          </div>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-4 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Setup guide</span>
        <ArrowRight className="ml-1 h-3.5 w-3.5" />
      </div>
    </Link>
  )
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="my-8 space-y-8 [counter-reset:step]">{children}</div>
}

export interface StepProps {
  title: string
  children: React.ReactNode
  stepNumber?: number
}

export function Step({ title, children, stepNumber }: StepProps) {
  return (
    <div className="relative pl-10 before:content-[counter(step)] [counter-increment:step] before:absolute before:left-0 before:top-0 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-primary/30 before:bg-primary/10 before:text-xs before:font-bold before:text-primary before:shadow-xs">
      <h3 className="text-lg font-bold text-foreground tracking-tight mb-2 pt-0.5">
        {title}
      </h3>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export interface CalloutProps {
  type?: 'info' | 'warning' | 'tip' | 'success'
  title?: string
  children: React.ReactNode
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const icons = {
    info: <Info className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />,
    warning: (
      <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
    ),
    tip: <Lightbulb className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />,
    success: (
      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
    ),
  }

  const styles = {
    info: 'border-blue-500/30 bg-blue-500/5 text-blue-950 dark:text-blue-200',
    warning:
      'border-amber-500/30 bg-amber-500/5 text-amber-950 dark:text-amber-200',
    tip: 'border-purple-500/30 bg-purple-500/5 text-purple-950 dark:text-purple-200',
    success:
      'border-emerald-500/30 bg-emerald-500/5 text-emerald-950 dark:text-emerald-200',
  }

  return (
    <div
      className={cn(
        'my-6 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed shadow-xs',
        styles[type],
      )}
    >
      {icons[type]}
      <div className="space-y-1">
        {title && (
          <h5 className="font-bold tracking-tight text-foreground">{title}</h5>
        )}
        <div>{children}</div>
      </div>
    </div>
  )
}
