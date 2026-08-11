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
        'hover:bg-white/15 dark:hover:bg-white/10 hover:text-foreground data-[selected=true]:bg-white/20 data-[selected=true]:font-semibold text-muted-foreground hover:text-foreground',
      retro:
        'rounded-none hover:bg-foreground hover:text-background data-[selected=true]:font-bold data-[selected=true]:bg-foreground data-[selected=true]:text-background',
      glow: 'hover:bg-primary/20 hover:text-primary-foreground data-[selected=true]:bg-primary/30 data-[selected=true]:font-semibold',
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
  options: ComboboxOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  className?: string
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}

export function Combobox({
  options = [],
  value,
  defaultValue = '',
  onValueChange,
  placeholder = 'Select option...',
  searchPlaceholder = 'Search...',
  emptyText = 'No option found.',
  className,
  variant = 'default',
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(
    value || defaultValue,
  )
  const [searchQuery, setSearchQuery] = React.useState('')

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const selectedOption = options.find((opt) => opt.value === selectedValue)

  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [options, searchQuery])

  return (
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
              const isSelected = selectedValue === option.value
              return (
                <div
                  key={option.value}
                  data-selected={isSelected}
                  onClick={() => {
                    const newValue = isSelected ? '' : option.value
                    if (value === undefined) {
                      setSelectedValue(newValue)
                    }
                    onValueChange?.(newValue)
                    setOpen(false)
                    setSearchQuery('')
                  }}
                  className={cn(comboboxItemVariants({ variant }))}
                  data-slot="combobox-item"
                >
                  <Check
                    className={cn(
                      'h-3.5 w-3.5 shrink-0',
                      isSelected ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <span>{option.label}</span>
                </div>
              )
            })
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
