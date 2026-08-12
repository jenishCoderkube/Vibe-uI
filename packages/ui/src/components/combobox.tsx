'use client'

import * as React from 'react'
import { Check, ChevronsUpDown, Search } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const comboboxItemVariants = tv({
  base: 'relative flex cursor-pointer select-none items-center rounded-md px-2.5 py-1.5 text-xs outline-none transition-colors gap-2',
  variants: {
    variant: {
      default:
        'hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent/60 data-[selected=true]:font-semibold',
      glass:
        'hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground dark:hover:text-white data-[selected=true]:bg-black/10 dark:data-[selected=true]:bg-white/20 data-[selected=true]:font-semibold text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white data-[selected=true]:text-foreground dark:data-[selected=true]:text-white',
      retro:
        'rounded-none hover:bg-foreground hover:text-background data-[selected=true]:font-bold data-[selected=true]:bg-foreground data-[selected=true]:text-background',
      glow: 'hover:bg-purple-500/10 dark:hover:bg-purple-500/20 hover:text-purple-600 dark:hover:text-purple-300 data-[selected=true]:bg-purple-500/20 dark:data-[selected=true]:bg-purple-500/30 data-[selected=true]:font-semibold data-[selected=true]:text-purple-600 dark:data-[selected=true]:text-purple-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ComboboxOption {
  value: string
  label: string
}

export interface ComboboxProps {
  options?: ComboboxOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  className?: string
  variant?: 'default' | 'glass' | 'retro' | 'glow'
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const ComboboxContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}>({
  open: false,
  setOpen: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
})

export function Combobox({
  options,
  value,
  defaultValue = '',
  onValueChange,
  placeholder = 'Select option...',
  searchPlaceholder = 'Search...',
  emptyText = 'No option found.',
  className,
  variant = 'default',
  children,
  open: controlledOpen,
  onOpenChange,
}: ComboboxProps) {
  const [localOpen, setLocalOpen] = React.useState(false)
  const open = controlledOpen !== undefined ? controlledOpen : localOpen
  const setOpen = onOpenChange !== undefined ? onOpenChange : setLocalOpen

  const [localValue, setLocalValue] = React.useState(defaultValue)
  const currentValue = value !== undefined ? value : localValue

  const [searchQuery, setSearchQuery] = React.useState('')

  const handleValueChange = (val: string) => {
    if (value === undefined) {
      setLocalValue(val)
    }
    onValueChange?.(val)
  }

  const contextValue = React.useMemo(
    () => ({
      value: currentValue,
      onValueChange: handleValueChange,
      open,
      setOpen,
      searchQuery,
      setSearchQuery,
      variant,
    }),
    [currentValue, open, searchQuery, variant],
  )

  if (children) {
    return (
      <ComboboxContext.Provider value={contextValue}>
        <Popover open={open} onOpenChange={setOpen}>
          {children}
        </Popover>
      </ComboboxContext.Provider>
    )
  }

  const selectedOption = options?.find((opt) => opt.value === currentValue)
  const filteredOptions = React.useMemo(() => {
    if (!options) return []
    if (!searchQuery) return options
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [options, searchQuery])

  return (
    <ComboboxContext.Provider value={contextValue}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={variant}
            role="combobox"
            data-slot="combobox"
            aria-expanded={open}
            className={cn(
              'w-[220px] justify-between text-left font-normal',
              className,
            )}
          >
            <span className="truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          variant={variant}
          data-slot="combobox-content"
          className="w-[220px] p-0 shadow-xl overflow-hidden"
          align="start"
        >
          <div className="flex items-center border-b border-border/50 px-3 py-2 gap-2">
            <Search className="h-4 w-4 opacity-50 shrink-0" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              data-slot="combobox-search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex h-8 w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="max-h-[220px] overflow-y-auto p-1 space-y-0.5">
            {filteredOptions.length === 0 ? (
              <div className="py-6 text-center text-xs text-muted-foreground">
                {emptyText}
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = currentValue === option.value
                return (
                  <div
                    key={option.value}
                    data-selected={isSelected}
                    onClick={() => {
                      const newValue = isSelected ? '' : option.value
                      handleValueChange(newValue)
                      setOpen(false)
                      setSearchQuery('')
                    }}
                    className={cn(
                      'flex w-full items-center justify-between',
                      comboboxItemVariants({ variant }),
                    )}
                    data-slot="combobox-item"
                  >
                    <span className="truncate">{option.label}</span>
                    <Check
                      className={cn(
                        'h-3.5 w-3.5 shrink-0 ml-2',
                        isSelected ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </div>
                )
              })
            )}
          </div>
        </PopoverContent>
      </Popover>
    </ComboboxContext.Provider>
  )
}

export const ComboboxTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverTrigger>,
  React.ComponentPropsWithoutRef<typeof PopoverTrigger>
>((props, ref) => <PopoverTrigger ref={ref} {...props} />)
ComboboxTrigger.displayName = 'ComboboxTrigger'

export const ComboboxContent = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(ComboboxContext)
  return (
    <PopoverContent
      ref={ref}
      variant={variant}
      className={cn('w-[220px] p-0 shadow-xl overflow-hidden', className)}
      align="start"
      {...props}
    >
      {children}
    </PopoverContent>
  )
})
ComboboxContent.displayName = 'ComboboxContent'

export const ComboboxInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, placeholder = 'Search...', ...props }, ref) => {
  const { searchQuery, setSearchQuery } = React.useContext(ComboboxContext)
  return (
    <div className="flex items-center border-b border-border/50 px-3 py-2 gap-2">
      <Search className="h-4 w-4 shrink-0 opacity-50" />
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        data-slot="combobox-search"
        onChange={(e) => setSearchQuery(e.target.value)}
        className={cn(
          'flex h-8 w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground',
          className,
        )}
        {...props}
      />
    </div>
  )
})
ComboboxInput.displayName = 'ComboboxInput'

export const ComboboxList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="combobox-list"
    className={cn('max-h-[220px] overflow-y-auto p-1 space-y-0.5', className)}
    {...props}
  >
    {children}
  </div>
))
ComboboxList.displayName = 'ComboboxList'

export interface ComboboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const ComboboxItem = React.forwardRef<HTMLDivElement, ComboboxItemProps>(
  ({ className, value: itemValue, children, ...props }, ref) => {
    const {
      value: selectedValue,
      onValueChange,
      setOpen,
      setSearchQuery,
      variant,
    } = React.useContext(ComboboxContext)
    const isSelected = selectedValue === itemValue
    return (
      <div
        ref={ref}
        data-selected={isSelected}
        onClick={() => {
          const newValue = isSelected ? '' : itemValue
          onValueChange?.(newValue)
          setOpen(false)
          setSearchQuery('')
        }}
        className={cn(
          'flex w-full items-center justify-between',
          comboboxItemVariants({ variant }),
          className,
        )}
        data-slot="combobox-item"
        {...props}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">{children}</div>
        <Check
          className={cn(
            'h-3.5 w-3.5 shrink-0 ml-2',
            isSelected ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>
    )
  },
)
ComboboxItem.displayName = 'ComboboxItem'

export const ComboboxEmpty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { searchQuery } = React.useContext(ComboboxContext)
  // Only display Empty status in composed structures if filter doesn't match
  return (
    <div
      ref={ref}
      className={cn(
        'py-6 text-center text-xs text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
ComboboxEmpty.displayName = 'ComboboxEmpty'

export const ComboboxGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-0.5', className)} {...props}>
    {children}
  </div>
))
ComboboxGroup.displayName = 'ComboboxGroup'

export const ComboboxLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'px-2.5 py-1.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider',
      className,
    )}
    {...props}
  >
    {children}
  </div>
))
ComboboxLabel.displayName = 'ComboboxLabel'

export const ComboboxSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-border/50', className)}
    {...props}
  />
))
ComboboxSeparator.displayName = 'ComboboxSeparator'
