'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from './dialog'
import { cn } from '../lib/utils'

const CommandContext = React.createContext<{
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}>({})

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    variant?: 'default' | 'glass' | 'retro' | 'glow'
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <CommandContext.Provider value={{ variant }}>
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
        (variant === 'glass' || variant === 'glow') && 'bg-transparent text-foreground dark:text-white',
        variant === 'retro' && 'bg-background text-foreground',
        className,
      )}
      {...props}
    />
  </CommandContext.Provider>
))
Command.displayName = CommandPrimitive.displayName

export interface CommandDialogProps extends React.ComponentPropsWithoutRef<
  typeof Dialog
> {
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}

const CommandDialog = ({ children, variant = 'default', ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent 
        variant={variant}
        showCloseButton={false}
        className={cn(
          "overflow-hidden p-0 shadow-lg border-border",
          variant === 'glass' && 'bg-card/45 dark:bg-white/[0.03] backdrop-blur-md border-black/10 dark:border-white/10',
          variant === 'retro' && 'border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]',
          variant === 'glow' && 'border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] dark:shadow-[0_0_30px_rgba(168,85,247,0.25)] bg-card/95 dark:bg-zinc-950/95'
        )}
      >
        <DialogTitle className="sr-only">Command Search Menu</DialogTitle>
        <Command 
          variant={variant}
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-2"
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext)
  return (
    <div className={cn("flex items-center border-b px-3", variant === 'retro' && 'border-b-2 border-foreground')} cmdk-input-wrapper="">
      <Search className={cn("mr-2 h-4 w-4 shrink-0 opacity-50", variant === 'glow' && 'text-primary opacity-80')} />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          variant === 'retro' && 'font-mono placeholder:text-neutral-500',
          className,
        )}
        {...props}
      />
    </div>
  )
})
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext)
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        variant === 'retro' && '[&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase',
        className,
      )}
      {...props}
    />
  )
})
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext)
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn(
        '-mx-1 h-px bg-border',
        variant === 'retro' && 'h-0.5 bg-foreground',
        className,
      )}
      {...props}
    />
  )
})
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(CommandContext)
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        variant === 'retro'
          ? 'aria-selected:bg-foreground aria-selected:text-background aria-selected:rounded-none font-mono'
          : variant === 'glow'
          ? 'aria-selected:bg-purple-500/10 dark:aria-selected:bg-purple-500/20 aria-selected:text-purple-600 dark:aria-selected:text-purple-300 border border-purple-500/20 dark:border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
          : variant === 'glass'
          ? 'aria-selected:bg-white/10 dark:aria-selected:bg-white/10 aria-selected:backdrop-blur-sm'
          : 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
})
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const { variant } = React.useContext(CommandContext)
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        variant === 'retro' && 'font-mono text-neutral-400',
        className,
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
