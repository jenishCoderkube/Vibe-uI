'use client'

import React, { useState } from 'react'
import {
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  Message,
  MessageContent,
  MessageAvatar,
  Button,
} from 'vibe-ui'
import { RefreshCw, Send } from 'lucide-react'

// Simple avatar placeholder
function AvatarPlaceholder({ text }: { text: string }) {
  return (
    <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-xs font-bold text-white uppercase select-none">
      {text}
    </div>
  )
}

// 1. ScrollerBasic
export function ScrollerBasic() {
  return (
    <div className="h-40 border border-zinc-800 rounded-lg w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 10 }).map((_, idx) => (
              <MessageScrollerItem key={idx} className="text-xs text-zinc-400">
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
      <div className="h-40 border border-zinc-800 rounded-lg">
        <MessageScroller variant="default">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              {messages.map((msg, idx) => (
                <MessageScrollerItem
                  key={idx}
                  className="text-xs font-mono text-emerald-400"
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
    <div className="h-40 border border-zinc-800 rounded-lg w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 15 }).map((_, idx) => (
              <MessageScrollerItem key={idx} className="text-xs text-zinc-400">
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
            <MessageScrollerItem className="text-xs">
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
            <MessageScrollerItem className="text-xs text-white">
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
            <MessageScrollerItem className="text-xs font-mono text-emerald-500">
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
  const Refresh = RefreshCw as any

  const loadPrevious = () => {
    setLoading(true)
    setTimeout(() => {
      setItems((prev) => ['Loaded Item 1', 'Loaded Item 2', ...prev])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-3 w-full max-w-[340px]">
      <div className="h-40 border border-zinc-800 rounded-lg">
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
                    <Refresh className="h-3 w-3 animate-spin mr-1.5" />
                  ) : null}
                  Fetch Historical Logs
                </Button>
              </MessageScrollerItem>
              {items.map((it, idx) => (
                <MessageScrollerItem
                  key={idx}
                  className="text-xs text-zinc-400 pl-2"
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
    <div className="h-24 border border-zinc-850 rounded-lg w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport className="p-2">
          <MessageScrollerContent className="gap-2">
            <MessageScrollerItem className="text-[11px] text-zinc-400">
              Micro row slot A
            </MessageScrollerItem>
            <MessageScrollerItem className="text-[11px] text-zinc-400">
              Micro row slot B
            </MessageScrollerItem>
            <MessageScrollerItem className="text-[11px] text-zinc-400">
              Micro row slot C
            </MessageScrollerItem>
            <MessageScrollerItem className="text-[11px] text-zinc-400">
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
    <div className="h-36 border border-zinc-800 rounded-lg relative w-full max-w-[340px]">
      <MessageScroller variant="default">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 8 }).map((_, idx) => (
              <MessageScrollerItem key={idx} className="text-xs text-zinc-400">
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
  const PaperPlane = Send as any

  const send = () => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, text])
    setText('')
  }

  return (
    <div className="space-y-3 w-full max-w-md bg-zinc-950 p-6 rounded-2xl border border-zinc-900">
      <div className="h-48 rounded-lg bg-black/30 overflow-hidden relative">
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
                      className={`text-[11px] py-1.5 px-3 leading-relaxed rounded-2xl ${idx % 2 === 0 ? 'bg-blue-600 border-transparent text-white rounded-tr-none' : 'bg-zinc-800 border-transparent text-white rounded-tl-none'}`}
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
          className="flex-1 text-xs bg-zinc-900 border border-white/10 rounded px-2.5 py-1.5 text-white outline-none"
        />
        <Button
          variant="glow"
          onClick={send}
          className="h-8 w-8 p-0 flex items-center justify-center rounded"
        >
          <PaperPlane className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  )
}
