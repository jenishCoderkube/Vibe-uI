'use client'

import React from 'react'
import {
  Code,
  FileText,
  Lightbulb,
  Compass,
  ArrowUpRight
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Bot } from 'lucide-react'

interface SuggestedPrompt {
  title: string
  prompt: string
  desc: string
  icon: any
}

interface ChatWelcomeProps {
  onSelectPrompt: (prompt: string) => void
  selectedModel: string
}

export function ChatWelcome({ onSelectPrompt, selectedModel }: ChatWelcomeProps) {
  const prompts: SuggestedPrompt[] = [
    {
      title: 'Explain code',
      prompt: 'Explain how React view transitions work with framer-motion.',
      desc: 'Understand rendering hooks and transitions',
      icon: Code,
    },
    {
      title: 'Analyze layout',
      prompt: 'Review the responsive rules for a 2-column e-commerce grid.',
      desc: 'Check viewport sizes and padding rules',
      icon: Compass,
    },
    {
      title: 'Draft message',
      prompt: 'Draft an email requesting feedback on a new React component library release.',
      desc: 'Friendly update asking for design input',
      icon: FileText,
    },
    {
      title: 'Brainstorm layouts',
      prompt: 'Brainstorm creative navigation menu ideas for a developer blog site.',
      desc: 'Aesthetics suggestions using glassmorphism',
      icon: Lightbulb,
    },
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto px-4 py-16 text-center select-none">
      
      {/* Centered ChatGPT-style logo symbol */}
      <div className="mb-6 select-none">
        <div className="h-12 w-12 rounded-full border border-border bg-[#f4f4f4] dark:bg-[#2f2f2f] flex items-center justify-center text-foreground shadow-xs animate-pulse">
          <Bot className="h-7 w-7 text-zinc-800 dark:text-zinc-200" />
        </div>
      </div>

      {/* Main welcoming header */}
      <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
        How can Vibe UI help you today?
      </h2>

      {/* Suggestion Prompt Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-10">
        {prompts.map((p) => {
          const Icon = p.icon
          return (
            <Card
              key={p.title}
              onClick={() => onSelectPrompt(p.prompt)}
              className="group text-left border border-zinc-200 dark:border-zinc-800 bg-[#f9f9f9]/30 dark:bg-[#171717]/20 hover:bg-[#f4f4f4] dark:hover:bg-[#2f2f2f] transition-all duration-200 cursor-pointer shadow-xs rounded-[16px] p-4 flex items-center justify-between"
            >
              <div className="space-y-0.5 flex-1 pr-4">
                <span className="block text-xs font-semibold text-foreground">
                  {p.title}
                </span>
                <span className="block text-[11px] text-zinc-500 truncate leading-relaxed">
                  {p.desc}
                </span>
              </div>
              <div className="h-7 w-7 rounded-full bg-[#f4f4f4] dark:bg-[#2f2f2f] group-hover:bg-[#e4e4e4] dark:group-hover:bg-[#3f3f3f] flex items-center justify-center shrink-0 transition-colors">
                <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-foreground transition-colors" />
              </div>
            </Card>
          )
        })}
      </div>

    </div>
  )
}
