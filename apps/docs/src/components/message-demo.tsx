'use client'

import React from 'react'
import {
  Message,
  MessageGroup,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageFooter,
  Marker,
  MarkerContent,
  Input,
  Button,
} from 'vibe-ui'
import { CheckCheck, Send } from 'lucide-react'

// Simple avatar placeholder component
function AvatarPlaceholder({ text }: { text: string }) {
  return (
    <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-muted border border-border text-xs font-bold text-foreground uppercase select-none">
      {text}
    </div>
  )
}

// 1. MessageBasicStart
export function MessageBasicStart() {
  return (
    <Message align="start" variant="default" className="max-w-[340px]">
      <MessageContent className="bg-muted border-border text-foreground rounded-2xl rounded-tl-none">
        Hello! How can I help you build Vibe UI library today?
      </MessageContent>
    </Message>
  )
}

// 2. MessageBasicEnd
export function MessageBasicEnd() {
  return (
    <Message align="end" variant="default" className="max-w-[340px]">
      <MessageContent className="bg-primary border-transparent text-primary-foreground rounded-2xl rounded-tr-none">
        I want to add some remaining Vibe UI components natively.
      </MessageContent>
    </Message>
  )
}

// 3. MessageDefaultTheme
export function MessageDefaultTheme() {
  return (
    <Message align="start" variant="default" className="max-w-[340px]">
      <MessageContent>Sure! Let's choose Input OTP and Menubar.</MessageContent>
    </Message>
  )
}

// 4. MessageGlassTheme
export function MessageGlassTheme() {
  return (
    <Message align="start" variant="glass" className="max-w-[340px]">
      <MessageContent>
        Perfect. Added backdrop filters to support transparency preset themes.
      </MessageContent>
    </Message>
  )
}

// 5. MessageRetroTheme
export function MessageRetroTheme() {
  return (
    <Message align="start" variant="retro" className="max-w-[340px]">
      <MessageContent className="font-bold text-foreground">
        YES! Neo brutalist borders look extremely clean.
      </MessageContent>
    </Message>
  )
}

// 6. MessageGlowTheme
export function MessageGlowTheme() {
  return (
    <Message align="start" variant="glow" className="max-w-[340px]">
      <MessageContent>
        Neon aura glows can be enabled in settings dashboard panels.
      </MessageContent>
    </Message>
  )
}

// 7. MessageCyberTheme
export function MessageCyberTheme() {
  return (
    <Message align="start" variant="cyberpunk" className="max-w-[340px]">
      <MessageContent>
        SYS_LOG: Message packet resolved successfully inside monorepos.
      </MessageContent>
    </Message>
  )
}

// 8. MessageWithAvatar
export function MessageWithAvatar() {
  return (
    <Message
      align="start"
      variant="default"
      className="max-w-[340px] items-end"
    >
      <AvatarPlaceholder text="JS" />
      <MessageContent>
        The layout places avatars at the bottom of the group stack.
      </MessageContent>
    </Message>
  )
}

// 9. MessageWithHeader
export function MessageWithHeader() {
  return (
    <Message
      align="start"
      variant="default"
      className="flex-col items-start gap-1 max-w-[340px]"
    >
      <MessageHeader className="pl-11">
        Jenish Sabhadiya • 10:45 AM
      </MessageHeader>
      <div className="flex gap-3 w-full items-end">
        <AvatarPlaceholder text="JS" />
        <MessageContent>
          Looks good! The username aligns with the content text box.
        </MessageContent>
      </div>
    </Message>
  )
}

// 10. MessageWithFooter
export function MessageWithFooter() {
  return (
    <Message
      align="start"
      variant="default"
      className="flex-col items-start gap-1 max-w-[340px]"
    >
      <div className="flex gap-3 w-full items-end">
        <AvatarPlaceholder text="JS" />
        <MessageContent>
          We can add check ticks to display read receipt states.
        </MessageContent>
      </div>
      <MessageFooter className="pl-11">Delivered</MessageFooter>
    </Message>
  )
}

// 11. MessageGroupFeed
export function MessageGroupFeed() {
  return (
    <MessageGroup className="p-0 gap-3 max-w-md w-full bg-card p-6 rounded-2xl border border-border relative">
      {/* 1. Right align user message */}
      <Message align="end" variant="default" className="items-end gap-2">
        <AvatarPlaceholder text="ME" />
        <MessageContent className="bg-primary border-transparent text-primary-foreground rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[70%]">
          Deploying to prod real quick.
        </MessageContent>
      </Message>

      {/* 2. Left align user reply */}
      <Message align="start" variant="default" className="items-end gap-2">
        <AvatarPlaceholder text="OL" />
        <MessageContent className="bg-muted border-border text-foreground rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[70%]">
          It's 4:55 PM. On a Friday.
        </MessageContent>
      </Message>

      {/* 3. Right align user reply */}
      <Message
        align="end"
        variant="default"
        className="flex-col items-end gap-1"
      >
        <div className="flex items-end gap-2 w-full justify-end">
          <MessageContent className="bg-primary border-transparent text-primary-foreground rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[70%]">
            It's a one-line change.
          </MessageContent>
          <AvatarPlaceholder text="ME" />
        </div>
        <MessageFooter className="pr-10 text-[10px] text-muted-foreground font-medium">
          Delivered
        </MessageFooter>
      </Message>

      {/* 4. Left align reply */}
      <Message align="start" variant="default" className="items-end gap-2">
        <AvatarPlaceholder text="OL" />
        <MessageContent className="bg-muted border-border text-foreground rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[70%]">
          It's always a one-line change 😭.
        </MessageContent>
      </Message>

      {/* 5. Left align reply with emoji reaction badge */}
      <Message
        align="start"
        variant="default"
        className="flex-col items-start gap-1"
      >
        <div className="flex items-end gap-2 w-full">
          <AvatarPlaceholder text="OL" />
          <div className="relative max-w-[70%] w-fit">
            <MessageContent className="bg-muted border-border text-foreground rounded-2xl rounded-tl-none text-xs leading-relaxed">
              Alright, let me take a look.
            </MessageContent>
            {/* Floating emoji reaction badge */}
            <div className="absolute -bottom-2 right-6 h-5 w-7 flex items-center justify-center rounded-full bg-card border border-border text-[10px] shadow-md select-none cursor-pointer">
              👍
            </div>
          </div>
        </div>
      </Message>

      {/* Typing indicator using Marker component */}
      <Marker className="pl-10 flex items-center gap-1 select-none">
        <MarkerContent className="text-xs text-muted-foreground italic">
          Oliver is typing
        </MarkerContent>
        <span className="flex gap-0.5 items-center justify-center pt-1.5">
          <span className="h-1 w-1 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="h-1 w-1 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="h-1 w-1 bg-muted-foreground/60 rounded-full animate-bounce" />
        </span>
      </Marker>
    </MessageGroup>
  )
}

// 12. MessageStatusTick
export function MessageStatusTick() {
  return (
    <Message
      align="end"
      variant="glow"
      className="flex-col items-end gap-1 max-w-[340px]"
    >
      <div className="flex gap-3 w-full justify-end items-end">
        <MessageContent>Check status of packages compilation.</MessageContent>
      </div>
      <MessageFooter className="flex items-center gap-1 select-none">
        <span>Read 10:46 AM</span>
        <CheckCheck className="h-3 w-3 text-emerald-400" />
      </MessageFooter>
    </Message>
  )
}

interface ChatMessageItem {
  id: number
  sender: 'user' | 'ai'
  align: 'start' | 'end'
  text: string
  time: string
}

// 13. MessagePremiumChatApp
export function MessagePremiumChatApp() {
  const [messages, setMessages] = React.useState<ChatMessageItem[]>([
    {
      id: 1,
      sender: 'user',
      align: 'end',
      text: 'How do I use the Message component in Next.js?',
      time: '10:45 AM',
    },
    {
      id: 2,
      sender: 'ai',
      align: 'start',
      text: "Import Message and MessageContent from '@/components/ui/message', then set align to 'start' or 'end'.",
      time: '10:46 AM',
    },
  ])
  const [inputVal, setInputVal] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(false)
  const chatContainerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim()) return

    const nowStr = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    const userMsg: ChatMessageItem = {
      id: Date.now(),
      sender: 'user',
      align: 'end',
      text: inputVal.trim(),
      time: nowStr,
    }

    setMessages((prev) => [...prev, userMsg])
    setInputVal('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const aiReply: ChatMessageItem = {
        id: Date.now() + 1,
        sender: 'ai',
        align: 'start',
        text: 'Thanks for your message! Message components support default, glass, retro, glow, and cyberpunk variants.',
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }
      setMessages((prev) => [...prev, aiReply])
    }, 1000)
  }

  return (
    <div className="w-full max-w-lg mx-auto rounded-xl border border-border bg-card text-card-foreground shadow-md overflow-hidden flex flex-col my-2">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40 select-none">
        <div className="flex items-center gap-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <h4 className="text-sm font-medium">Assistant Chat</h4>
        </div>
        <span className="text-xs text-muted-foreground font-mono">vibe-ui</span>
      </div>

      {/* Chat Feed */}
      <div
        ref={chatContainerRef}
        className="p-4 space-y-4 max-h-[360px] min-h-[260px] overflow-y-auto bg-background/50"
      >
        {messages.map((msg) =>
          msg.sender === 'user' ? (
            <Message
              key={msg.id}
              align="end"
              variant="default"
              className="flex-col items-end gap-1"
            >
              <div className="flex items-end gap-2 w-full justify-end">
                <MessageContent className="bg-primary text-primary-foreground border-transparent text-xs leading-relaxed max-w-[80%]">
                  {msg.text}
                </MessageContent>
                <AvatarPlaceholder text="ME" />
              </div>
              <MessageFooter className="pr-10 text-[10px] text-muted-foreground flex items-center gap-1">
                <span>{msg.time}</span>
                <CheckCheck className="h-3 w-3 text-emerald-500" />
              </MessageFooter>
            </Message>
          ) : (
            <Message
              key={msg.id}
              align="start"
              variant="default"
              className="flex-col items-start gap-1"
            >
              <div className="flex items-start gap-2 w-full">
                <AvatarPlaceholder text="AI" />
                <div className="flex flex-col gap-1 max-w-[80%]">
                  <MessageHeader className="pl-1">
                    Assistant • {msg.time}
                  </MessageHeader>
                  <MessageContent className="text-xs leading-relaxed">
                    {msg.text}
                  </MessageContent>
                </div>
              </div>
            </Message>
          ),
        )}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 pl-1 py-1">
            <AvatarPlaceholder text="AI" />
            <Marker className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border/50 select-none">
              <MarkerContent className="text-[11px] text-muted-foreground italic">
                Assistant is typing
              </MarkerContent>
              <span className="flex gap-1 items-center justify-center pt-0.5">
                <span className="h-1.5 w-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 bg-muted-foreground/60 rounded-full animate-bounce" />
              </span>
            </Marker>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={handleSend}
        className="p-3 border-t border-border bg-card"
      >
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a message..."
            className="text-xs h-9"
          />
          <Button
            type="submit"
            size="sm"
            disabled={!inputVal.trim()}
            className="h-9 px-3.5 shrink-0 cursor-pointer gap-1.5"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Send</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
