'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp, Search } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

// Helper function to extract text content recursively from React Nodes for searching
function getOptionText(node: React.ReactNode): string {
  if (!node) return ''
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }
  let text = ''
  React.Children.forEach(node, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child
    } else if (React.isValidElement(child)) {
      const element = child as React.ReactElement<{
        children?: React.ReactNode
      }>
      if (element.props.children) {
        text += getOptionText(element.props.children)
      }
    }
  })
  return text
}

const selectVariants = tv({
  base: 'flex w-full items-center justify-between rounded-md border border-input bg-background transition-all duration-200 select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    variant: {
      default: 'border-border bg-background hover:bg-accent/50',
      glass:
        'bg-white/10 dark:bg-white/[0.03] backdrop-blur-md border-white/20 dark:border-white/10 text-foreground hover:bg-white/15 dark:hover:bg-white/[0.08] shadow-sm',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]',
      glow: 'bg-primary/10 border border-primary/45 text-primary shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]',
    },
    size: {
      default: 'h-10 px-3 py-2 text-sm',
      sm: 'h-8 px-2.5 py-1.5 text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

// Create a context to share variant styling with subcomponents
interface SelectContextValue {
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}

const SelectVariantContext = React.createContext<SelectContextValue>({
  variant: 'default',
})

const Select = ({
  variant = 'default',
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}) => (
  <SelectVariantContext.Provider value={{ variant }}>
    <SelectPrimitive.Root {...props} />
  </SelectVariantContext.Provider>
)

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  size?: 'default' | 'sm'
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, size = 'default', ...props }, ref) => {
  const { variant } = React.useContext(SelectVariantContext)
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(selectVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

export interface SelectContentProps extends React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> {
  showSearch?: boolean
}

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(
  (
    { className, children, position = 'popper', showSearch = false, ...props },
    ref,
  ) => {
    const { variant } = React.useContext(SelectVariantContext)
    const [searchQuery, setSearchQuery] = React.useState('')

    // Filter items matching the query if search is enabled
    const filteredChildren = React.Children.toArray(children).filter(
      (child: any) => {
        if (!showSearch || !searchQuery) return true
        // We only filter items, groups or separators are kept
        if (child.props && child.props.value) {
          const rawText = getOptionText(child.props.children)
          const value = child.props.value || ''
          return (
            String(rawText).toLowerCase().includes(searchQuery.toLowerCase()) ||
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
          )
        }
        return true
      },
    )

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          position={position}
          className={cn(
            'relative z-[110] max-h-60 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            variant === 'glass' &&
              'bg-popover/90 backdrop-blur-md border-border text-popover-foreground',
            variant === 'retro' &&
              'border-2 border-foreground bg-background text-foreground rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
            variant === 'glow' &&
              'border-primary/45 shadow-[0_0_20px_rgba(168,85,247,0.15)] bg-popover/95 text-popover-foreground',
            className,
          )}
          {...props}
        >
          <SelectScrollUpButton />
          {showSearch && (
            <div className="flex items-center border-b border-border/80 px-2 py-1.5 gap-2 shrink-0">
              <Search className="h-3.5 w-3.5 opacity-50" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex h-7 w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                onKeyDown={(e) => {
                  // Prevent keyboard navigation inside Select triggering on Space/Enter inside input
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.stopPropagation()
                  }
                }}
              />
            </div>
          )}
          <SelectPrimitive.Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            )}
          >
            {filteredChildren.length > 0 ? (
              filteredChildren
            ) : (
              <div className="py-2 text-center text-xs text-muted-foreground">
                No results found.
              </div>
            )}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  },
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(SelectVariantContext)
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-all duration-150 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground',
        variant === 'retro' &&
          'focus:bg-foreground focus:text-background rounded-none',
        variant === 'glow' &&
          'focus:bg-primary/25 focus:text-primary-foreground',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
