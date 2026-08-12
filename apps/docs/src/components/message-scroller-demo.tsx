'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  Message,
  MessageContent,
  MessageAvatar,
  Input,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from 'vibe-ui'
import {
  RefreshCw,
  Send,
  RotateCw,
  Plus,
  Paperclip,
  Image,
  Globe,
  Search,
} from 'lucide-react'

// Simple avatar placeholder
function AvatarPlaceholder({ text }: { text: string }) {
  return (
    <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-muted border border-border text-xs font-bold text-foreground uppercase select-none">
      {text}
    </div>
  )
}

// Main Interactive Preview Demo (shadcn style)
export function ScrollerDemo() {
  const [messages, setMessages] = useState<
    Array<{ id: number; sender: 'user' | 'ai'; text: string; time: string }>
  >([
    {
      id: 1,
      sender: 'user',
      text: "I'm building a chat app and the scroll behavior is jumping around when streaming responses.",
      time: '10:45 AM',
    },
    {
      id: 2,
      sender: 'ai',
      text: 'Wrap your message list in MessageScroller — the viewport pins to the bottom as new messages arrive.',
      time: '10:46 AM',
    },
    {
      id: 3,
      sender: 'user',
      text: 'Does auto-scroll pause if I scroll up to read earlier history?',
      time: '10:47 AM',
    },
    {
      id: 4,
      sender: 'ai',
      text: 'Yes! The moment you scroll up, auto-scroll pauses and MessageScrollerButton appears so you can return anytime.',
      time: '10:48 AM',
    },
  ])
  const [inputVal, setInputVal] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        sender: 'user',
        text: "I'm building a chat app and the scroll behavior is jumping around when streaming responses.",
        time: '10:45 AM',
      },
      {
        id: 2,
        sender: 'ai',
        text: 'Wrap your message list in MessageScroller — the viewport pins to the bottom as new messages arrive.',
        time: '10:46 AM',
      },
    ])
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim()) return

    const userMsg = {
      id: Date.now(),
      sender: 'user' as const,
      text: inputVal.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputVal('')
    inputRef.current?.focus()

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai' as const,
          text: 'Thanks for testing! MessageScroller automatically pins to the bottom when new content arrives.',
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ])
    }, 800)
  }

  return (
    <div className="w-full max-w-full flex flex-col gap-2 my-2 h-full">
      <div className="rounded-xl border border-border bg-card text-card-foreground shadow-md overflow-hidden flex flex-col h-[520px] w-full">
        {/* Card Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40 select-none">
          <div>
            <h4 className="text-sm font-semibold leading-none">New Chat</h4>
            <p className="text-[11px] text-muted-foreground mt-1">
              How can I help you today?
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="h-8 w-8 p-0 cursor-pointer"
            title="Reset conversation"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* MessageScroller Viewport */}
        <div className="flex-1 min-h-0 overflow-hidden relative">
          <MessageScroller
            variant="default"
            className="h-full border-none rounded-none bg-transparent"
          >
            <MessageScrollerViewport className="p-4">
              <MessageScrollerContent className="gap-3">
                {messages.map((msg) => (
                  <MessageScrollerItem key={msg.id}>
                    <Message
                      align={msg.sender === 'user' ? 'end' : 'start'}
                      variant="default"
                      className="gap-2"
                    >
                      <AvatarPlaceholder
                        text={msg.sender === 'user' ? 'ME' : 'AI'}
                      />
                      <MessageContent
                        className={`text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-primary text-primary-foreground border-transparent'
                            : 'bg-muted text-foreground border-border'
                        }`}
                      >
                        {msg.text}
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </div>

        {/* Form Footer */}
        <form
          onSubmit={handleSend}
          className="p-3 border-t border-border bg-card"
        >
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 p-0 shrink-0 cursor-pointer"
                  title="Add files or actions"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="top" className="w-48">
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Paperclip className="h-4 w-4 text-muted-foreground" />
                  <span>Add Photos & Files</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Image className="h-4 w-4 text-muted-foreground" />
                  <span>Create Image</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>Web Search</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span>Deep Research</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Input
              ref={inputRef}
              autoFocus
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a message..."
              className="text-xs h-9 flex-1"
            />
            <Button
              type="submit"
              size="icon"
              variant="default"
              disabled={!inputVal.trim()}
              className="h-9 w-9 shrink-0 cursor-pointer"
              title="Send message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
      <div className="text-center text-[11px] text-muted-foreground select-none">
        Press send to test auto-scrolling behavior.
      </div>
    </div>
  )
}

// 2. ScrollerStreaming (Streaming AI Response Demo)
export function ScrollerStreaming() {
  const [messages, setMessages] = useState<
    Array<{ id: number; sender: 'user' | 'ai'; text: string }>
  >([
    {
      id: 1,
      sender: 'user',
      text: 'How does MessageScroller handle live streaming AI text?',
    },
    {
      id: 2,
      sender: 'ai',
      text: 'MessageScroller detects new content as tokens land in the viewport. When autoScroll is active, it automatically keeps the newest text in view without jarring page shifts.',
    },
  ])
  const [isStreaming, setIsStreaming] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isStreaming) {
      inputRef.current?.focus()
    }
  }, [isStreaming])

  const fullAiResponse =
    "That's the classic streaming scroll solution! As AI model tokens arrive character-by-character or word-by-word, MessageScroller automatically pins to the bottom of the thread so you watch the live answer assemble seamlessly."

  const triggerStream = (userText: string) => {
    if (isStreaming) return
    const userMsgId = Date.now()
    const aiMsgId = Date.now() + 1

    const newMessages = [
      ...messages,
      { id: userMsgId, sender: 'user' as const, text: userText },
      { id: aiMsgId, sender: 'ai' as const, text: '' },
    ]
    setMessages(newMessages)
    setIsStreaming(true)

    const words = fullAiResponse.split(' ')
    let currentWordIdx = 0

    const interval = setInterval(() => {
      if (currentWordIdx < words.length) {
        const partialText = words.slice(0, currentWordIdx + 1).join(' ')
        setMessages((prev) =>
          prev.map((m) => (m.id === aiMsgId ? { ...m, text: partialText } : m)),
        )
        currentWordIdx++
      } else {
        clearInterval(interval)
        setIsStreaming(false)
      }
    }, 45)
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim() || isStreaming) return
    const txt = inputVal.trim()
    setInputVal('')
    triggerStream(txt)
  }

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        sender: 'user',
        text: 'How does MessageScroller handle live streaming AI text?',
      },
      {
        id: 2,
        sender: 'ai',
        text: 'MessageScroller detects new content as tokens land in the viewport. When autoScroll is active, it automatically keeps the newest text in view without jarring page shifts.',
      },
    ])
    setIsStreaming(false)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  return (
    <div className="w-full max-w-full flex flex-col gap-2 my-2 h-full">
      <div className="rounded-xl border border-border bg-card text-card-foreground shadow-md overflow-hidden flex flex-col h-[520px] w-full">
        {/* Card Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40 select-none">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold leading-none">
                Streaming Messages
              </h4>
              {isStreaming && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Auto-scroll follows the live edge as tokens stream in
              word-by-word.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            disabled={isStreaming}
            className="h-8 w-8 p-0 cursor-pointer"
            title="Reset stream"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* MessageScroller Viewport */}
        <div className="flex-1 min-h-0 overflow-hidden relative">
          <MessageScroller
            variant="default"
            className="h-full border-none rounded-none bg-transparent"
          >
            <MessageScrollerViewport className="p-4">
              <MessageScrollerContent className="gap-3">
                {messages.map((msg) => (
                  <MessageScrollerItem key={msg.id}>
                    <Message
                      align={msg.sender === 'user' ? 'end' : 'start'}
                      variant="default"
                      className="gap-2"
                    >
                      <AvatarPlaceholder
                        text={msg.sender === 'user' ? 'ME' : 'AI'}
                      />
                      <MessageContent
                        className={`text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-primary text-primary-foreground border-transparent'
                            : 'bg-muted text-foreground border-border'
                        }`}
                      >
                        {msg.text}
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </div>

        {/* Form Footer */}
        <form
          onSubmit={handleSend}
          className="p-3 border-t border-border bg-card"
        >
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 p-0 shrink-0 cursor-pointer"
                  title="Add files or actions"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="top" className="w-48">
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Paperclip className="h-4 w-4 text-muted-foreground" />
                  <span>Add Photos & Files</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Image className="h-4 w-4 text-muted-foreground" />
                  <span>Create Image</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>Web Search</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span>Deep Research</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Input
              ref={inputRef}
              autoFocus
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={
                isStreaming
                  ? 'AI is typing...'
                  : 'Type a message to stream response...'
              }
              disabled={isStreaming}
              className="text-xs h-9 flex-1"
            />
            <Button
              type="submit"
              size="icon"
              variant="default"
              disabled={!inputVal.trim() || isStreaming}
              className="h-9 w-9 shrink-0 cursor-pointer"
              title="Send message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
      <div className="text-center text-[11px] text-muted-foreground select-none">
        Streaming is simulated word-by-word. Auto-scroll follows the live text
        edge.
      </div>
    </div>
  )
}

// 1. ScrollerBasic
export function ScrollerBasic() {
  return (
    <div className="h-40 border border-border rounded-lg w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 10 }).map((_, idx) => (
              <MessageScrollerItem
                key={idx}
                className="text-xs text-muted-foreground"
              >
                Log line details item segment #{idx + 1}
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </div>
  )
}

// 2. ScrollerAutoScroll
export function ScrollerAutoScroll() {
  const [messages, setMessages] = useState<string[]>([
    'Initial node setup complete.',
    'Database cluster status: OK',
  ])

  const appendLog = () => {
    setMessages((prev) => [
      ...prev,
      `New log line resolved at ${new Date().toLocaleTimeString()}`,
    ])
  }

  return (
    <div className="space-y-3 w-full max-w-[340px]">
      <div className="h-40 border border-border rounded-lg">
        <MessageScroller variant="default">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              {messages.map((msg, idx) => (
                <MessageScrollerItem
                  key={idx}
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400"
                >
                  &gt; {msg}
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
        </MessageScroller>
      </div>
      <Button
        variant="glass"
        size="sm"
        onClick={appendLog}
        className="w-full h-8 text-xs"
      >
        Append Log Details
      </Button>
    </div>
  )
}

// 3. ScrollerScrollToBottom
export function ScrollerScrollToBottom() {
  return (
    <div className="h-40 border border-border rounded-lg w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 15 }).map((_, idx) => (
              <MessageScrollerItem
                key={idx}
                className="text-xs text-muted-foreground"
              >
                Message dialog line slot #{idx + 1}
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </div>
  )
}

// 4. ScrollerDefaultTheme
export function ScrollerDefaultTheme() {
  return (
    <div className="h-32 w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem className="text-xs text-foreground">
              Scroll content blocks ...
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </div>
  )
}

// 5. ScrollerGlassTheme
export function ScrollerGlassTheme() {
  return (
    <div className="h-32 w-full max-w-[340px]">
      <MessageScroller variant="glass">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem className="text-xs text-foreground dark:text-white">
              Translucent window items ...
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </div>
  )
}

// 6. ScrollerRetroTheme
export function ScrollerRetroTheme() {
  return (
    <div className="h-32 w-full max-w-[340px]">
      <MessageScroller variant="retro">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem className="text-xs font-mono text-foreground">
              Retro terminal scroll ...
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </div>
  )
}

// 7. ScrollerGlowTheme
export function ScrollerGlowTheme() {
  return (
    <div className="h-32 w-full max-w-[340px]">
      <MessageScroller variant="glow">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem className="text-xs text-primary">
              Purple highlights ...
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </div>
  )
}

// 8. ScrollerCyberTheme
export function ScrollerCyberTheme() {
  return (
    <div className="h-32 w-full max-w-[340px]">
      <MessageScroller variant="cyberpunk">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem className="text-xs font-mono text-emerald-600 dark:text-emerald-500">
              SYS_CONSOLE_LOADED ...
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </div>
  )
}

// 9. ScrollerLoadMore
export function ScrollerLoadMore() {
  const [items, setItems] = useState<string[]>(['Item 3', 'Item 4', 'Item 5'])
  const [loading, setLoading] = useState(false)

  const loadPrevious = () => {
    setLoading(true)
    setTimeout(() => {
      setItems((prev) => [`Item ${3 - prev.length}`, ...prev])
      setLoading(false)
    }, 600)
  }

  return (
    <div className="space-y-3 w-full max-w-[340px]">
      <div className="h-40 border border-border rounded-lg">
        <MessageScroller variant="default">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              <MessageScrollerItem className="text-center py-2">
                <Button
                  variant="glass"
                  size="sm"
                  onClick={loadPrevious}
                  disabled={loading}
                  className="h-7 text-[10px]"
                >
                  {loading ? (
                    <RefreshCw className="h-3 w-3 animate-spin mr-1.5" />
                  ) : null}
                  Fetch Historical Logs
                </Button>
              </MessageScrollerItem>
              {items.map((it, idx) => (
                <MessageScrollerItem
                  key={idx}
                  className="text-xs text-muted-foreground pl-2"
                >
                  {it}
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
        </MessageScroller>
      </div>
    </div>
  )
}

// 10. ScrollerMaxHeight
export function ScrollerMaxHeight() {
  return (
    <div className="h-24 border border-border rounded-lg w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport className="p-2">
          <MessageScrollerContent className="gap-2">
            <MessageScrollerItem className="text-[11px] text-muted-foreground">
              Micro row slot A
            </MessageScrollerItem>
            <MessageScrollerItem className="text-[11px] text-muted-foreground">
              Micro row slot B
            </MessageScrollerItem>
            <MessageScrollerItem className="text-[11px] text-muted-foreground">
              Micro row slot C
            </MessageScrollerItem>
            <MessageScrollerItem className="text-[11px] text-muted-foreground">
              Micro row slot D
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </div>
  )
}

// 11. ScrollerScrollArrows
export function ScrollerScrollArrows() {
  return (
    <div className="h-36 border border-border rounded-lg relative w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 8 }).map((_, idx) => (
              <MessageScrollerItem
                key={idx}
                className="text-xs text-muted-foreground"
              >
                Item listings line #{idx + 1}
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </div>
  )
}

// 12. Complete Chat Interface
export function ScrollerChatInterface() {
  const [messages, setMessages] = useState<string[]>([
    'Deploying to prod real quick.',
    "It's 4:55 PM. On a Friday.",
    "It's a one-line change.",
  ])
  const [text, setText] = useState('')

  const send = () => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, text])
    setText('')
  }

  return (
    <div className="space-y-3 w-full max-w-md bg-card p-6 rounded-2xl border border-border">
      <div className="h-48 rounded-lg bg-muted/40 overflow-hidden relative">
        <MessageScroller variant="glass">
          <MessageScrollerViewport className="p-3">
            <MessageScrollerContent className="gap-3">
              {messages.map((msg, idx) => (
                <MessageScrollerItem key={idx}>
                  <Message
                    align={idx % 2 === 0 ? 'end' : 'start'}
                    variant="glass"
                    className="items-end gap-2"
                  >
                    {idx % 2 !== 0 ? (
                      <AvatarPlaceholder text="OL" />
                    ) : (
                      <AvatarPlaceholder text="ME" />
                    )}
                    <MessageContent
                      className={`text-[11px] py-1.5 px-3 leading-relaxed rounded-2xl ${idx % 2 === 0 ? 'bg-primary border-transparent text-primary-foreground rounded-tr-none' : 'bg-muted border-border text-foreground rounded-tl-none'}`}
                    >
                      {msg}
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Type your message..."
          className="flex-1 text-xs bg-background border border-border rounded px-2.5 py-1.5 text-foreground placeholder:text-muted-foreground outline-none"
        />
        <Button
          type="button"
          size="icon"
          variant="default"
          onClick={send}
          className="h-8 w-8 shrink-0 cursor-pointer"
          title="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
