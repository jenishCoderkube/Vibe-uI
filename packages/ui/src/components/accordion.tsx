'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { tv } from 'tailwind-variants'
import { cn } from '../lib/utils'

const accordionItemVariants = tv({
  base: 'transition-all duration-200',
  variants: {
    variant: {
      default: 'border-b border-border last:border-b-0',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mb-4 rounded-lg overflow-hidden transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
      glass:
        'bg-card/70 backdrop-blur-md border border-border text-card-foreground rounded-xl mb-3 overflow-hidden shadow-sm',
      cyberpunk:
        'bg-card border border-emerald-500/60 rounded-none text-emerald-600 dark:text-emerald-400 font-mono shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:border-emerald-400 mb-3 overflow-hidden transition-all duration-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, defaultValue, value, ...props }, ref) => {
  let normalizedDefaultValue = defaultValue
  if (props.type === 'multiple' && typeof defaultValue === 'string') {
    try {
      const trimmed = (defaultValue as string).trim()
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        normalizedDefaultValue = JSON.parse(trimmed.replace(/'/g, '"'))
      } else {
        normalizedDefaultValue = trimmed.split(',').map((s) => s.trim())
      }
    } catch {
      normalizedDefaultValue = [defaultValue as string]
    }
  }

  let normalizedValue = value
  if (props.type === 'multiple' && typeof value === 'string') {
    try {
      const trimmed = (value as string).trim()
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        normalizedValue = JSON.parse(trimmed.replace(/'/g, '"'))
      } else {
        normalizedValue = trimmed.split(',').map((s) => s.trim())
      }
    } catch {
      normalizedValue = [value as string]
    }
  }

  const rootProps: any = {
    ref,
    className: cn('[&>p]:hidden', className),
    ...props,
  }

  if (normalizedDefaultValue !== undefined) {
    rootProps.defaultValue = normalizedDefaultValue
  }

  if (normalizedValue !== undefined) {
    rootProps.value = normalizedValue
  }

  return <AccordionPrimitive.Root data-slot="accordion" {...rootProps} />
})
Accordion.displayName = 'Accordion'

interface AccordionItemProps extends React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
> {
  variant?: 'default' | 'retro' | 'glass' | 'cyberpunk'
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item"
    className={cn(
      accordionItemVariants({ variant }),
      '[&>p]:hidden',
      className,
    )}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex m-0">
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger"
      className={cn(
        'flex flex-1 items-center justify-between py-3 px-4 font-semibold text-sm transition-all [&[data-state=open]>svg]:rotate-180 text-left cursor-pointer select-none gap-4',
        className,
      )}
      {...props}
    >
      <span className="flex items-center flex-1">{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content"
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(
        'pb-4 pt-0 px-4 text-muted-foreground leading-relaxed [&_p]:my-0',
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
