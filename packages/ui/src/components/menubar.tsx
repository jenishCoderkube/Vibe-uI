'use client'

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const menubarVariants = tv({
  base: 'flex h-10 items-center gap-1 rounded-md border p-1 shadow-xs select-none',
  variants: {
    variant: {
      default: 'border-border bg-background text-foreground',
      glass:
        'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-md text-foreground',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'border-primary/20 bg-primary/[0.02] text-primary shadow-[0_0_15px_rgba(168,85,247,0.15)]',
      cyberpunk: 'border-emerald-950 bg-black text-emerald-500 font-mono',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const menubarContentVariants = tv({
  base: 'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  variants: {
    variant: {
      default: 'border-border bg-popover text-popover-foreground',
      glass:
        'bg-popover/90 dark:bg-black/80 border border-border dark:border-white/10 text-popover-foreground backdrop-blur-md shadow-lg',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'border-primary/20 bg-popover dark:bg-black/90 text-primary shadow-[0_0_20px_rgba(168,85,247,0.15)] dark:shadow-[0_0_20px_rgba(168,85,247,0.25)]',
      cyberpunk:
        'border-emerald-500/50 dark:border-emerald-500 bg-popover dark:bg-black text-emerald-600 dark:text-emerald-500 font-mono shadow-[0_0_12px_rgba(16,185,129,0.2)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const menubarItemVariants = tv({
  base: "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive! cursor-pointer",
  variants: {
    variant: {
      default: '',
      glass:
        'focus:bg-accent focus:text-accent-foreground dark:focus:bg-white/10 dark:focus:text-white',
      retro: 'rounded-none focus:bg-foreground focus:text-background',
      glow: 'focus:bg-primary/10 dark:focus:bg-primary/20 focus:text-primary',
      cyberpunk:
        'focus:bg-emerald-500/10 focus:text-emerald-600 dark:focus:text-emerald-400 font-mono',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

// Variant contexts for passing the variant prop to items and content dropdowns
const MenubarVariantContext = React.createContext<
  'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
>('default')

export interface MenubarProps
  extends
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>,
    VariantProps<typeof menubarVariants> {}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  MenubarProps
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <MenubarVariantContext.Provider value={variant}>
      <MenubarPrimitive.Root
        ref={ref}
        data-slot="menubar"
        className={cn(menubarVariants({ variant }), className)}
        {...props}
      />
    </MenubarVariantContext.Provider>
  )
})
Menubar.displayName = 'Menubar'

const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarRadioGroup = MenubarPrimitive.RadioGroup
const MenubarSub = MenubarPrimitive.Sub

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(MenubarVariantContext)
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      data-slot="menubar-trigger"
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground cursor-pointer transition-colors duration-150',
        variant === 'retro' &&
          'rounded-none focus:bg-foreground focus:text-background data-[state=open]:bg-foreground data-[state=open]:text-background',
        variant === 'cyberpunk' &&
          'font-mono focus:bg-emerald-500/10 focus:text-emerald-400 data-[state=open]:bg-emerald-500/10 data-[state=open]:text-emerald-400',
        className,
      )}
      {...props}
    />
  )
})
MenubarTrigger.displayName = 'MenubarTrigger'

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => {
    const variant = React.useContext(MenubarVariantContext)
    return (
      <MenubarPortal data-slot="menubar-portal">
        <MenubarPrimitive.Content
          ref={ref}
          data-slot="menubar-content"
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
          className={cn(menubarContentVariants({ variant }), className)}
          {...props}
        />
      </MenubarPortal>
    )
  },
)
MenubarContent.displayName = 'MenubarContent'

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
    variant?: 'default' | 'destructive'
  }
>(({ className, inset, variant = 'default', ...props }, ref) => {
  const parentVariant = React.useContext(MenubarVariantContext)
  return (
    <MenubarPrimitive.Item
      ref={ref}
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        menubarItemVariants({ variant: parentVariant }),
        variant === 'destructive' &&
          'text-destructive focus:bg-destructive/10 focus:text-destructive dark:focus:bg-destructive/20',
        className,
      )}
      {...props}
    />
  )
})
MenubarItem.displayName = 'MenubarItem'

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const variant = React.useContext(MenubarVariantContext)
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      data-slot="menubar-checkbox-item"
      className={cn(menubarItemVariants({ variant }), 'pl-8', className)}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
})
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem'

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const variant = React.useContext(MenubarVariantContext)
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      data-slot="menubar-radio-item"
      className={cn(menubarItemVariants({ variant }), 'pl-8', className)}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
})
MenubarRadioItem.displayName = 'MenubarRadioItem'

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    data-slot="menubar-label"
    data-inset={inset}
    className={cn(
      'px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider data-[inset]:pl-8',
      className,
    )}
    {...props}
  />
))
MenubarLabel.displayName = 'MenubarLabel'

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    data-slot="menubar-separator"
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
))
MenubarSeparator.displayName = 'MenubarSeparator'

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground font-mono select-none pl-4',
        className,
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayName = 'MenubarShortcut'

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => {
  const variant = React.useContext(MenubarVariantContext)
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(menubarItemVariants({ variant }), className)}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
})
MenubarSubTrigger.displayName = 'MenubarSubTrigger'

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(MenubarVariantContext)
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      data-slot="menubar-sub-content"
      className={cn(menubarContentVariants({ variant }), className)}
      {...props}
    />
  )
})
MenubarSubContent.displayName = 'MenubarSubContent'

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
