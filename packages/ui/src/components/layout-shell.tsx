'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import { tv, type VariantProps } from 'tailwind-variants'
import { Menu, ChevronLeft } from 'lucide-react'

// Layout Context for sharing collapsing state
interface LayoutShellContextValue {
  isSidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  isCollapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const LayoutShellContext = React.createContext<
  LayoutShellContextValue | undefined
>(undefined)

function useLayoutShell() {
  const context = React.useContext(LayoutShellContext)
  if (!context) {
    throw new Error(
      'LayoutShell compound components must be rendered inside <LayoutShell />',
    )
  }
  return context
}

export interface LayoutShellProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCollapsed?: boolean
}

const LayoutShell = React.forwardRef<HTMLDivElement, LayoutShellProps>(
  ({ className, children, defaultCollapsed = false, ...props }, ref) => {
    const [isSidebarOpen, setSidebarOpen] = React.useState(false)
    const [isCollapsed, setCollapsed] = React.useState(defaultCollapsed)

    return (
      <LayoutShellContext.Provider
        value={{ isSidebarOpen, setSidebarOpen, isCollapsed, setCollapsed }}
      >
        <div
          ref={ref}
          data-slot="layout-shell"
          className={cn(
            'flex min-h-screen w-full bg-background overflow-hidden font-sans',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </LayoutShellContext.Provider>
    )
  },
)
LayoutShell.displayName = 'LayoutShell'

const sidebarVariants = tv({
  base: 'fixed inset-y-0 left-0 z-40 flex flex-col border-r border-border bg-card/90 backdrop-blur-md transition-all duration-300 md:sticky md:z-10 text-card-foreground',
  variants: {
    isCollapsed: {
      true: 'w-16',
      false: 'w-64',
    },
    isOpen: {
      true: 'translate-x-0',
      false: '-translate-x-full md:translate-x-0',
    },
  },
  defaultVariants: {
    isCollapsed: false,
    isOpen: false,
  },
})

export interface LayoutShellSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutShellSidebar = React.forwardRef<
  HTMLDivElement,
  LayoutShellSidebarProps
>(({ className, children, ...props }, ref) => {
  const { isSidebarOpen, setSidebarOpen, isCollapsed, setCollapsed } =
    useLayoutShell()

  return (
    <>
      {/* Mobile backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-35 bg-black/40 backdrop-blur-xs md:hidden"
        />
      )}

      <aside
        ref={ref}
        data-slot="layout-shell-sidebar"
        className={cn(
          sidebarVariants({ isCollapsed, isOpen: isSidebarOpen }),
          className,
        )}
        {...props}
      >
        {children}

        {/* Desktop collapse toggle button at the bottom */}
        <button
          onClick={() => setCollapsed(!isCollapsed)}
          className="hidden md:flex absolute bottom-4 right-[-12px] h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-all shadow-md cursor-pointer"
        >
          <ChevronLeft
            className={cn(
              'h-3.5 w-3.5 transition-transform duration-300',
              isCollapsed && 'rotate-180',
            )}
          />
        </button>
      </aside>
    </>
  )
})
LayoutShellSidebar.displayName = 'LayoutShellSidebar'

export interface LayoutShellBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutShellBrand = React.forwardRef<
  HTMLDivElement,
  LayoutShellBrandProps
>(({ className, children, ...props }, ref) => {
  const { isCollapsed } = useLayoutShell()

  const renderChildren = () => {
    const array = React.Children.toArray(children)
    if (isCollapsed) {
      return array[1] || array[0]
    }
    return array[0]
  }

  return (
    <div
      ref={ref}
      data-slot="layout-shell-brand"
      className={cn(
        'flex h-16 items-center border-b border-border px-6 font-bold tracking-tight text-foreground transition-all overflow-hidden',
        isCollapsed ? 'justify-center px-0 text-center' : 'justify-between',
        className,
      )}
      {...props}
    >
      {renderChildren()}
    </div>
  )
})
LayoutShellBrand.displayName = 'LayoutShellBrand'

export interface LayoutShellNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutShellNav = React.forwardRef<HTMLDivElement, LayoutShellNavProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      data-slot="layout-shell-nav"
      className={cn(
        'flex-1 space-y-1.5 p-3 overflow-y-auto no-scrollbar',
        className,
      )}
      {...props}
    />
  ),
)
LayoutShellNav.displayName = 'LayoutShellNav'

export interface LayoutShellNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: React.ReactNode
}

const LayoutShellNavItem = React.forwardRef<
  HTMLButtonElement,
  LayoutShellNavItemProps
>(({ className, active = false, icon, children, ...props }, ref) => {
  const { isCollapsed } = useLayoutShell()

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (
          isCollapsed &&
          (child.type === 'span' ||
            (typeof child.type === 'string' && child.type !== 'svg'))
        ) {
          return null
        }
        return child
      }
      if (isCollapsed && typeof child === 'string') {
        return null
      }
      return child
    })
  }

  return (
    <button
      ref={ref}
      data-slot="layout-shell-nav-item"
      className={cn(
        'flex w-full items-center gap-3 px-3 py-2 text-xs font-semibold rounded-lg transition-all text-left cursor-pointer',
        active
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        isCollapsed && 'justify-center px-0',
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {renderChildren()}
    </button>
  )
})
LayoutShellNavItem.displayName = 'LayoutShellNavItem'

export interface LayoutShellHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutShellHeader = React.forwardRef<
  HTMLDivElement,
  LayoutShellHeaderProps
>(({ className, children, ...props }, ref) => {
  const { isSidebarOpen, setSidebarOpen } = useLayoutShell()

  return (
    <header
      ref={ref}
      data-slot="layout-shell-header"
      className={cn(
        'flex h-16 w-full items-center border-b border-border bg-card/50 backdrop-blur-md px-6 justify-between relative z-20 text-card-foreground',
        className,
      )}
      {...props}
    >
      {/* Mobile menu trigger */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="mr-4 rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted md:hidden cursor-pointer"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex flex-1 items-center justify-between">{children}</div>
    </header>
  )
})
LayoutShellHeader.displayName = 'LayoutShellHeader'

export interface LayoutShellContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutShellContent = React.forwardRef<
  HTMLDivElement,
  LayoutShellContentProps
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    data-slot="layout-shell-content"
    className={cn(
      'flex-1 flex flex-col min-w-0 overflow-y-auto p-8 relative',
      className,
    )}
    {...props}
  />
))
LayoutShellContent.displayName = 'LayoutShellContent'

export {
  LayoutShell,
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
  LayoutShellHeader,
  LayoutShellContent,
  useLayoutShell,
}
