'use client'

import React, { useState } from 'react'
import { RotateCw, Send, Paperclip, MessageSquareDashed, Image, FileText, MapPin } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Input,
  MessageAvatar,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  WordRotate,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton
} from 'vibe-ui'

export function NewChat() {
  const [messages, setMessages] = useState<Array<{ id: number; role: 'user' | 'ai'; text: string; time: string }>>([
    {
      id: 1,
      role: 'user',
      text: "I'm building a chat app and the scroll behavior is driving me nuts.",
      time: '10:45 AM',
    },
    {
      id: 2,
      role: 'ai',
      text: "Try using our MessageScroller component—it anchors scroll and handles streaming views smoothly.",
      time: '10:46 AM',
    }
  ])
  const [inputValue, setInputValue] = useState('')
  // Scroll managed by MessageScroller component

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    setMessages([
      ...messages,
      {
        id: Date.now(),
        role: 'user',
        text: inputValue.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ])
    setInputValue('')
  }

  const handleReset = () => {
    setMessages([])
  }

  return (
    <Card className="relative w-full h-[290px] flex flex-col justify-between overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-3.5 pb-2">
        <div className="space-y-0.5 text-left">
          <CardTitle className="text-xs font-semibold">AI Copilot</CardTitle>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground leading-none h-4">
            <span>Ask me about</span>
            <WordRotate
              words={['routing', 'styling', 'state', 'motion']}
              className="text-primary font-bold"
              duration={2000}
            />
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleReset}
          className="size-6 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-md"
        >
          <RotateCw className="size-3" />
        </Button>
      </CardHeader>

      <MessageScroller className="flex-1 min-h-0 border-none bg-transparent" threshold={20}>
        <MessageScrollerViewport className="p-3.5 select-text overflow-y-auto scrollbar-none flex flex-col">
          <MessageScrollerContent className="gap-3 flex flex-col w-full h-fit">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[150px] text-center p-2 space-y-1.5 opacity-80 select-none">
                <div className="size-7 rounded-full bg-muted flex items-center justify-center border border-border/40">
                  <MessageSquareDashed className="size-3.5 text-muted-foreground" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-semibold">Morning, friend!</p>
                  <p className="text-[9px] text-muted-foreground max-w-[180px] leading-relaxed">
                    What are we working on today? Press send to start a new conversation.
                  </p>
                </div>
              </div>
            ) : (
              messages.map((msg) => {
                const isUser = msg.role === 'user'
                return (
                  <MessageScrollerItem
                    key={msg.id}
                    className={`flex items-start gap-2 w-full ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <MessageAvatar className="size-6 text-[8px] shrink-0 border border-border/50 select-none">
                        AI
                      </MessageAvatar>
                    )}
                    <div
                      className={`p-2 px-3 text-[11px] leading-relaxed rounded-2xl w-fit max-w-[75%] text-left ${
                        isUser
                          ? 'bg-primary text-primary-foreground rounded-tr-none ml-auto'
                          : 'bg-muted border border-border/40 text-foreground rounded-tl-none mr-auto'
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    {isUser && (
                      <MessageAvatar className="size-6 text-[8px] shrink-0 border border-border/50 select-none">
                        ME
                      </MessageAvatar>
                    )}
                  </MessageScrollerItem>
                )
              })
            )}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton
          threshold={20}
          className="bottom-2 left-1/2 -translate-x-1/2 h-7 w-7 rounded-full shadow-md bg-background hover:bg-muted border border-border/80 text-foreground animate-none"
        />
      </MessageScroller>

      <CardFooter className="p-2.5 border-t border-border/40 bg-muted/20">
        <form onSubmit={handleSend} className="flex w-full items-center gap-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button type="button" variant="ghost" size="icon" className="size-6.5 text-muted-foreground shrink-0 p-0 rounded-md">
                <Paperclip className="size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              <DropdownMenuItem className="text-xs gap-2 cursor-pointer">
                <Image className="size-3.5 text-muted-foreground" />
                Upload Photo
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs gap-2 cursor-pointer">
                <FileText className="size-3.5 text-muted-foreground" />
                Attach File
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs gap-2 cursor-pointer">
                <MapPin className="size-3.5 text-muted-foreground" />
                Share Location
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="h-7 text-[11px] flex-grow px-2"
          />
          <Button type="submit" size="icon" className="size-7 shrink-0 rounded-md">
            <Send className="size-3" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
export default NewChat
