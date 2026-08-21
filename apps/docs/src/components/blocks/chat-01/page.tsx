'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  Bot,
  Trash,
  ChevronRight,
  ChevronDown,
  PanelLeft,
  SquarePen,
  Check,
  Upload,
  Pin,
  Archive,
  MoreHorizontal,
  FolderClosed,
  Library
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { ChatSidebar } from './components/chat-sidebar'
import { ChatMessageItem, Message } from './components/chat-message-item'
import { ChatComposer } from './components/chat-composer'
import { ChatWelcome } from './components/chat-welcome'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion, AnimatePresence } from 'motion/react'

interface Conversation {
  id: string
  title: string
  model: string
  updatedAt: Date
  previewText?: string
}

interface AttachedFile {
  id: string
  name: string
  type: 'image' | 'document'
  size: string
  url?: string
}

export function Chat01Page() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'chat-1',
      title: 'Greeting exchange',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 600000), // 10 mins ago
      previewText: 'Here is a welcoming email draft you can use to greet your new team member...',
    },
    {
      id: 'chat-2',
      title: 'Write Audit Prompt',
      model: 'Vibe Ultra',
      updatedAt: new Date(Date.now() - 3600000), // 1 hour ago
      previewText: 'Audit prompts focus on identifying logic flaws and security vulnerabilities...',
    },
    {
      id: 'chat-3',
      title: 'How LLMs Work',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 7200000), // 2 hours ago
      previewText: 'Large Language Models process and predict tokens based on probability distributions...',
    },
    {
      id: 'chat-4',
      title: 'Deploy Next.js Netlify',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 14400000), // 4 hours ago
      previewText: 'Configuring custom netlify.toml headers for Next.js app deployments...',
    },
    {
      id: 'chat-5',
      title: 'CKEditor Issues Review',
      model: 'Vibe Ultra',
      updatedAt: new Date(Date.now() - 86400000), // 1 day ago
      previewText: 'CKEditor custom build integrations might trigger focus leaks or styling conflicts...',
    },
    {
      id: 'chat-6',
      title: 'Next Steps After Git Pull',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 172800000), // 2 days ago
      previewText: 'Running package installations and clearing dev caches to sync your branch...',
    },
    {
      id: 'chat-7',
      title: 'HTML block formatting explanation',
      model: 'Vibe Pro',
      updatedAt: new Date(Date.now() - 259200000), // 3 days ago
      previewText: 'To format code snippets in HTML block tags, use clean pre tags combined with class formatting...',
    },
  ])

  const [messages, setMessages] = useState<Record<string, Message[]>>({
    'chat-1': [
      {
        id: 'msg-1-1',
        role: 'user',
        content: 'Hello! Can you help me write a quick email welcoming a new frontend developer to the team?',
        timestamp: new Date(Date.now() - 700000),
      },
      {
        id: 'msg-1-2',
        role: 'assistant',
        content: 'Here is a welcoming email draft you can use to greet your new team member:\n\n> **Subject:** Welcome to the team, [Name]!\n>\n> Hi [Name],\n>\n> We are thrilled to welcome you to the Vibe UI development team! Your background in responsive frontend styling and components is a fantastic fit, and we are excited to have you on board.\n>\n> We will get you set up with your development credentials and introduce you to the team later today. Let us know if you need anything in the meantime!\n>\n> Best regards,  \n> [Your Name]\n\nLet me know if you would like to customize this with specific details!',
        timestamp: new Date(Date.now() - 600000),
      },
    ],
    'chat-2': [
      {
        id: 'msg-2-1',
        role: 'user',
        content: 'Write an audit prompt for code analysis.',
        timestamp: new Date(Date.now() - 3700000),
      },
      {
        id: 'msg-2-2',
        role: 'assistant',
        content: 'Here is a structured prompt for auditing code files:\n\n```markdown\nYou are an expert security auditor. Scan the following React component code block for potential issues, including memory leaks inside useEffect hooks, missing accessibility tags, and state synchronization leaks.\n```\n\nRun this against your codebase to identify quick architectural improvements!',
        timestamp: new Date(Date.now() - 3600000),
      },
    ],
    'chat-3': [
      {
        id: 'msg-3-1',
        role: 'user',
        content: 'Explain how Large Language Models work in simple terms.',
        timestamp: new Date(Date.now() - 7300000),
      },
      {
        id: 'msg-3-2',
        role: 'assistant',
        content: 'Large Language Models (LLMs) function like advanced autocomplete engines:\n\n* **Tokenization:** They split your sentences into smaller parts called tokens (words or syllables).\n* **Probability:** They calculate which token is most likely to come next based on patterns learned from reading billions of web pages.\n* **Attention mechanism:** They look at all the words in your prompt simultaneously to understand context and relationships.',
        timestamp: new Date(Date.now() - 7200000),
      },
    ],
    'chat-4': [],
    'chat-5': [],
    'chat-6': [],
    'chat-7': [],
  })

  const [activeId, setActiveId] = useState<string | null>('chat-1')
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedModel, setSelectedModel] = useState('Vibe Pro')

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const streamTimeoutRef = useRef<any>(null)

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, activeId, isGenerating])

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current)
    }
  }, [])

  // Start new conversation
  const handleNewChat = () => {
    const newId = `chat-${Date.now()}`
    const newChat: Conversation = {
      id: newId,
      title: 'New Conversation',
      model: selectedModel,
      updatedAt: new Date(),
      previewText: 'Start writing your message below...',
    }

    setConversations((prev) => [newChat, ...prev])
    setMessages((prev) => ({ ...prev, [newId]: [] }))
    setActiveId(newId)
    setInput('')
    if (streamTimeoutRef.current) {
      clearTimeout(streamTimeoutRef.current)
      setIsGenerating(false)
    }
  }

  // Switch active conversation
  const handleSelectConversation = (id: string) => {
    setActiveId(id)
    const chat = conversations.find((c) => c.id === id)
    if (chat) {
      setSelectedModel(chat.model)
    }
    setInput('')
    if (streamTimeoutRef.current) {
      clearTimeout(streamTimeoutRef.current)
      setIsGenerating(false)
    }
  }

  // Rename conversation title
  const handleRenameChat = (id: string, newTitle: string) => {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, title: newTitle } : c))
    )
  }

  // Delete conversation
  const handleDeleteChat = (id: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== id))
    setMessages((prev) => {
      const copy = { ...prev }
      delete copy[id]
      return copy
    })

    if (activeId === id) {
      const remaining = conversations.filter((c) => c.id !== id)
      if (remaining.length > 0) {
        setActiveId(remaining[0].id)
      } else {
        setActiveId(null)
      }
    }
  }

  // Clear current active conversation history
  const handleClearHistory = () => {
    if (!activeId) return
    setMessages((prev) => ({ ...prev, [activeId]: [] }))
    setConversations((prev) =>
      prev.map((c) => (c.id === activeId ? { ...c, previewText: '' } : c))
    )
  }

  // Rate message thumbs feedback
  const handleRateMessage = (id: string, rating: 'like' | 'dislike') => {
    if (!activeId) return
    setMessages((prev) => {
      const currentMsgs = prev[activeId] || []
      return {
        ...prev,
        [activeId]: currentMsgs.map((m) =>
          m.id === id ? { ...m, rating: m.rating === rating ? null : rating } : m
        ),
      }
    })
  }

  // Composer Send Message operation
  const handleSendMessage = (text: string, attachments: AttachedFile[]) => {
    if (!activeId) return
    const userMsgText = text.trim()
    if (!userMsgText && attachments.length === 0) return

    const userMessage: Message = {
      id: `msg-usr-${Date.now()}`,
      role: 'user',
      content: userMsgText || `Uploaded files: ${attachments.map(a => a.name).join(', ')}`,
      timestamp: new Date(),
    }

    // Update messages log
    const updatedMessages = [...(messages[activeId] || []), userMessage]
    setMessages((prev) => ({
      ...prev,
      [activeId]: updatedMessages,
    }))

    // Update conversation preview text
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              previewText: userMsgText.substring(0, 60) + (userMsgText.length > 60 ? '...' : ''),
              updatedAt: new Date(),
            }
          : c
      )
    )

    // Trigger AI mock response
    simulateAIResponse(userMsgText)
  }

  // Simulated AI responses based on prompt keywords
  const simulateAIResponse = (promptText: string) => {
    if (!activeId) return
    setIsGenerating(true)

    const responseTemplate = getMockResponseTemplate(promptText)
    const newAiMsgId = `msg-ai-${Date.now()}`

    // Insert empty streaming assistant bubble
    setMessages((prev) => ({
      ...prev,
      [activeId]: [
        ...(prev[activeId] || []),
        {
          id: newAiMsgId,
          role: 'assistant',
          content: '',
          timestamp: new Date(),
          isStreaming: true,
        },
      ],
    }))

    let currentLength = 0
    const words = responseTemplate.split(' ')
    let currentContent = ''

    const streamNextWord = () => {
      if (currentLength >= words.length) {
        // Complete stream
        setMessages((prev) => {
          const chatMsgs = prev[activeId] || []
          return {
            ...prev,
            [activeId]: chatMsgs.map((m) =>
              m.id === newAiMsgId
                ? { ...m, content: responseTemplate, isStreaming: false }
                : m
            ),
          }
        })
        setIsGenerating(false)
        return
      }

      currentContent += (currentContent ? ' ' : '') + words[currentLength]
      currentLength++

      setMessages((prev) => {
        const chatMsgs = prev[activeId] || []
        return {
          ...prev,
          [activeId]: chatMsgs.map((m) =>
            m.id === newAiMsgId ? { ...m, content: currentContent } : m
          ),
        }
      })

      // Schedule next word
      streamTimeoutRef.current = setTimeout(streamNextWord, 45 + Math.random() * 25)
    }

    // Begin streaming
    streamTimeoutRef.current = setTimeout(streamNextWord, 600)
  }

  const getMockResponseTemplate = (text: string): string => {
    const query = text.toLowerCase()
    if (query.includes('explain code') || query.includes('view transition') || query.includes('framer')) {
      return 'React View Transitions allow snap animations between page elements. By integrating with `framer-motion`, you can synchronize the animation timing:\n\n```javascript\n// Transition block component hooks\nimport { motion } from \'framer-motion\'\n\nexport function TransitionContainer({ children }) {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 10 }}\n      animate={{ opacity: 1, y: 0 }}\n      exit={{ opacity: 0, y: -10 }}\n      transition={{ duration: 0.35, ease: \'easeInOut\' }}\n    >\n      {children}\n    </motion.div>\n  )\n}\n```\n\nTo prevent text blurring, avoid active filter properties on the animated container and instead trigger transitions natively on route mounts.'
    }
    
    if (query.includes('analyze layout') || query.includes('ecommerce') || query.includes('grid')) {
      return 'For high-fidelity mobile grids, you should use the following layout rules:\n\n1. **2-Column Layout:** Use `grid-cols-2` on viewports below `640px` instead of single stacking. This lets you display more items above the fold.\n2. **Paddings and Gaps:** Restrict card padding to `p-2` on mobile, and grids gaps to `gap-3` to avoid wasted screen area.\n3. **Typography Scaling:** Shrink title text to `text-[11px]` and descriptions to `text-[9px] line-clamp-1` to avoid ugly text truncation inside narrow cards.'
    }

    if (query.includes('email') || query.includes('feedback') || query.includes('draft')) {
      return 'Here is a professional draft requesting feedback on your components:\n\n> **Subject:** Feedback Requested: Vibe UI Library components release\n>\n> Hello team,\n>\n> We have just compiled the preview block packages for Vibe UI version `0.1.12`. Could you please review the responsive card grids and theme variants inside the docs?\n>\n> Best regards,\n> Vibe Developer Team'
    }

    return 'Hello! I am Vibe Assistant, your coding companion. I am fully built with custom **Vibe UI React components**. How can I help you customize your developer layouts, style configurations, or component code snippets today?'
  }

  // Stop Generation trigger
  const handleStopGeneration = () => {
    if (streamTimeoutRef.current) {
      clearTimeout(streamTimeoutRef.current)
    }
    setIsGenerating(false)
    if (!activeId) return
    setMessages((prev) => {
      const chatMsgs = prev[activeId] || []
      return {
        ...prev,
        [activeId]: chatMsgs.map((m) =>
          m.isStreaming ? { ...m, isStreaming: false, content: m.content + ' [Generation Stopped]' } : m
        ),
      }
    })
  }

  // Regenerate Response trigger
  const handleRegenerateResponse = (msgId: string) => {
    if (!activeId || isGenerating) return
    
    const chatMsgs = messages[activeId] || []
    const targetIdx = chatMsgs.findIndex((m) => m.id === msgId)
    if (targetIdx === -1) return

    // Find the user query just preceding this response
    let userQuery = ''
    for (let i = targetIdx - 1; i >= 0; i--) {
      if (chatMsgs[i].role === 'user') {
        userQuery = chatMsgs[i].content
        break
      }
    }

    // Delete all messages from the target response onwards
    const truncatedMsgs = chatMsgs.slice(0, targetIdx)
    setMessages((prev) => ({
      ...prev,
      [activeId]: truncatedMsgs,
    }))

    // Re-simulate response
    simulateAIResponse(userQuery || 'Hello')
  }

  const activeMessages = activeId ? messages[activeId] || [] : []

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white dark:bg-[#0d0d0d] text-foreground font-sans relative selection:bg-primary/10">
      
      {/* 1. Left Sidebar Navigation Panel */}
      <ChatSidebar
        conversations={conversations}
        activeId={activeId}
        onSelectConversation={handleSelectConversation}
        onNewChat={handleNewChat}
        onRenameChat={handleRenameChat}
        onDeleteChat={handleDeleteChat}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
      />

      {/* 2. Main Conversation Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Header Controls bar */}
        <header className="h-14 flex items-center justify-between px-4 bg-white/85 dark:bg-[#0d0d0d]/85 backdrop-blur-md z-20 shrink-0 select-none">
          <div className="flex items-center gap-2">
            {/* Mobile Sidebar Toggle button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-9 w-9 text-zinc-500 hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg flex"
              aria-label="Open sidebar"
            >
              <PanelLeft className="h-5 w-5" />
            </Button>

            {/* Mobile Show New Chat Button */}
            <Button
              onClick={handleNewChat}
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 text-zinc-500 hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg"
              aria-label="New Chat"
            >
              <SquarePen className="h-5 w-5" />
            </Button>
            
            {/* Model Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-350 hover:text-foreground hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 transition-all font-semibold text-[14.5px] cursor-pointer focus:outline-none select-none">
                  <span>{selectedModel}</span>
                  <ChevronDown className="h-4 w-4 text-zinc-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 border-border bg-card" align="start">
                <DropdownMenuItem
                  onClick={() => setSelectedModel('Vibe Pro')}
                  className="text-xs flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Vibe Pro (Default)</span>
                  </div>
                  {selectedModel === 'Vibe Pro' && <Check className="h-3.5 w-3.5 text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedModel('Vibe Ultra')}
                  className="text-xs flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Bot className="h-3.5 w-3.5 text-indigo-500" />
                    <span>Vibe Ultra</span>
                  </div>
                  {selectedModel === 'Vibe Ultra' && <Check className="h-3.5 w-3.5 text-indigo-500" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <Button
              variant="outline"
              size="sm"
              className="h-8.5 gap-1.5 px-3 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-lg text-xs font-semibold"
            >
              <Upload className="h-3.5 w-3.5" />
              <span>Share</span>
            </Button>

            {/* Menu options dropdown matching Image 3 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8.5 w-8.5 text-zinc-500 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
                  aria-label="More options"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 bg-card border-border text-foreground p-1.5 rounded-xl shadow-xl" align="end">
                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <Library className="h-4 w-4 text-zinc-400" />
                  <span>View files in chat</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <Pin className="h-4 w-4 text-zinc-400" />
                  <span>Pin chat</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <Archive className="h-4 w-4 text-zinc-400" />
                  <span>Archive</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleClearHistory}
                  className="text-xs flex items-center gap-2.5 px-3 py-2 cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive rounded-lg font-medium"
                >
                  <Trash className="h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem className="text-xs flex items-center justify-between px-3 py-2 cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 rounded-lg">
                  <div className="flex items-center gap-2.5">
                    <FolderClosed className="h-4 w-4 text-zinc-400" />
                    <span>Move to project</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-zinc-500" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* 3. Messages log area / Empty Welcome state panel */}
        <div className="flex-1 overflow-hidden relative min-h-0">
          {activeMessages.length === 0 ? (
            <div className="h-full overflow-y-auto">
              <ChatWelcome
                onSelectPrompt={(prompt) => {
                  setInput(prompt)
                  // Auto submit
                  setTimeout(() => {
                    handleSendMessage(prompt, [])
                  }, 150)
                }}
                selectedModel={selectedModel}
              />
            </div>
          ) : (
            <ScrollArea className="h-full w-full">
              <div className="w-full max-w-4xl mx-auto px-4 md:px-6 pb-2">
                <AnimatePresence initial={false}>
                  {activeMessages.map((msg, idx) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx === activeMessages.length - 1 ? 0 : 0.05 }}
                    >
                      <ChatMessageItem
                        message={msg}
                        onRegenerate={msg.role === 'assistant' ? handleRegenerateResponse : undefined}
                        onRateMessage={msg.role === 'assistant' ? handleRateMessage : undefined}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Disclaimer in the scroll flow */}
                <div className="w-full text-center pt-14 pb-2">
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed select-none">
                    Vibe AI can make mistakes. Please verify important design code snapshots, specifications, or parameters.
                  </p>
                </div>

                {/* Scroll anchor */}
                <div ref={messagesEndRef} className="h-0" />
              </div>
            </ScrollArea>
          )}
        </div>

        {/* 4. Chat Composer container at the bottom */}
        <div className="w-full bg-gradient-to-t from-white via-white dark:from-[#0d0d0d] dark:via-[#0d0d0d] to-transparent pt-2 pb-6 shrink-0 z-20 pointer-events-none">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-6 pointer-events-auto">
            <ChatComposer
              input={input}
              setInput={setInput}
              onSend={handleSendMessage}
              isGenerating={isGenerating}
              onStop={handleStopGeneration}
              selectedModel={selectedModel}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
