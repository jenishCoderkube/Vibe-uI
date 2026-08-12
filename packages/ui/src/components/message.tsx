'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const messageVariants = tv({
  base: 'group/message relative flex w-full min-w-0 gap-3 text-sm transition-all duration-200 select-none',
  variants: {
    align: {
      start: 'flex-row text-left justify-start',
      end: 'flex-row-reverse text-left justify-start',
    },
  },
  defaultVariants: {
    align: 'start',
  },
})

const bubbleVariants = tv({
  base: 'relative flex flex-col gap-1 rounded-2xl px-4 py-2.5 max-w-[80%] border w-fit text-left',
  variants: {
    variant: {
      default: 'bg-muted border-border text-foreground',
      glass:
        'bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/15 backdrop-blur-md text-foreground dark:text-white',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)]',
      glow: 'border-primary/20 bg-primary/10 text-primary shadow-[0_0_12px_rgba(168,85,247,0.15)]',
      cyberpunk:
        'border-emerald-500/30 bg-emerald-950/20 dark:bg-black text-emerald-600 dark:text-emerald-400 font-mono',
    },
    align: {
      start: 'rounded-tl-none mr-auto',
      end: 'rounded-tr-none ml-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    align: 'start',
  },
})

// Message context to pass details downwards
const MessageContext = React.createContext<{
  align: 'start' | 'end'
  variant: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}>({ align: 'start', variant: 'default' })

export interface MessageProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, align = 'start', variant = 'default', ...props }, ref) => {
    return (
      <MessageContext.Provider value={{ align, variant }}>
        <div
          ref={ref}
          data-slot="message"
          className={cn(messageVariants({ align }), className)}
          {...props}
        />
      </MessageContext.Provider>
    )
  },
)
Message.displayName = 'Message'

export interface MessageGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageGroup = React.forwardRef<HTMLDivElement, MessageGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="message-group"
        className={cn(
          'flex flex-col gap-4 w-full max-w-xl mx-auto p-4',
          className,
        )}
        {...props}
      />
    )
  },
)
MessageGroup.displayName = 'MessageGroup'

export interface MessageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageAvatar = React.forwardRef<HTMLDivElement, MessageAvatarProps>(
  ({ className, ...props }, ref) => {
    const { align } = React.useContext(MessageContext)
    return (
      <div
        ref={ref}
        data-slot="message-avatar"
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full overflow-hidden border border-border bg-muted text-xs font-semibold text-foreground select-none',
          align === 'start' ? 'self-start' : 'self-end',
          className,
        )}
        {...props}
      />
    )
  },
)
MessageAvatar.displayName = 'MessageAvatar'

export interface MessageContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageContent = React.forwardRef<HTMLDivElement, MessageContentProps>(
  ({ className, ...props }, ref) => {
    const { align, variant } = React.useContext(MessageContext)
    return (
      <div
        ref={ref}
        data-slot="message-content"
        className={cn(bubbleVariants({ variant, align }), className)}
        {...props}
      />
    )
  },
)
MessageContent.displayName = 'MessageContent'

export interface MessageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageHeader = React.forwardRef<HTMLDivElement, MessageHeaderProps>(
  ({ className, ...props }, ref) => {
    const { align } = React.useContext(MessageContext)
    return (
      <div
        ref={ref}
        data-slot="message-header"
        className={cn(
          'text-[10px] text-muted-foreground font-mono tracking-wider mb-0.5 select-none',
          align === 'end' && 'text-right ml-auto',
          className,
        )}
        {...props}
      />
    )
  },
)
MessageHeader.displayName = 'MessageHeader'

export interface MessageFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageFooter = React.forwardRef<HTMLDivElement, MessageFooterProps>(
  ({ className, ...props }, ref) => {
    const { align } = React.useContext(MessageContext)
    return (
      <div
        ref={ref}
        data-slot="message-footer"
        className={cn(
          'text-[9px] text-muted-foreground font-mono select-none mt-0.5',
          align === 'end' && 'text-right ml-auto',
          className,
        )}
        {...props}
      />
    )
  },
)
MessageFooter.displayName = 'MessageFooter'

export {
  Message,
  MessageGroup,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageFooter,
}
