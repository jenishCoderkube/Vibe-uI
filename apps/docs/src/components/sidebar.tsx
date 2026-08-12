'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { docsConfig } from '../config/docs'
import { cn } from '../lib/utils'

export function Sidebar({ open }: { open?: boolean }) {
  const pathname = usePathname()
  const isInitialMount = React.useRef(true)

  React.useEffect(() => {
    const handleScroll = (behavior: ScrollBehavior) => {
      const desktopContainer = document.getElementById('docs-sidebar-aside')
      const mobileContainer = document.getElementById(
        'docs-sidebar-mobile-aside',
      )

      // Use the mobile container if it is active/visible, otherwise default to desktop container
      let container = desktopContainer
      if (
        mobileContainer &&
        mobileContainer.getBoundingClientRect().height > 0
      ) {
        container = mobileContainer
      }

      if (!container) return

      const activeLink = (container.querySelector(`a[href="${pathname}"]`) ||
        container.querySelector('a.bg-accent') ||
        container.querySelector('a[data-active="true"]')) as HTMLElement
      if (activeLink) {
        const containerRect = container.getBoundingClientRect()
        const linkRect = activeLink.getBoundingClientRect()
        const relativeTop =
          linkRect.top - containerRect.top + container.scrollTop
        const targetScroll =
          relativeTop - containerRect.height / 2 + linkRect.height / 2
        container.scrollTo({
          top: Math.max(0, targetScroll),
          behavior,
        })
      }
    }

    // Try scrolling instantly in case layout is already stable
    handleScroll('auto')

    // Run again with a slight delay to override browser scroll restoration and wait for transitions
    const timer = setTimeout(() => {
      handleScroll(isInitialMount.current ? 'auto' : 'smooth')
      isInitialMount.current = false
    }, 400)

    const handleTrigger = () => {
      handleScroll('smooth')
    }
    window.addEventListener('vibe-sidebar-center', handleTrigger)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('vibe-sidebar-center', handleTrigger)
    }
  }, [pathname, open])

  return (
    <aside className="w-full h-full">
      <div className="py-6 pr-4 lg:py-8">
        {docsConfig.sidebarNav.map((item, index) => (
          <div key={index} className="pb-5">
            <h4 className="mb-2 px-2.5 text-[0.75rem] font-medium tracking-tight text-muted-foreground">
              {item.title}
            </h4>
            {item.items?.length > 0 && (
              <div className="grid grid-flow-row auto-rows-max gap-0.5">
                {item.items.map((subItem, subIndex) => {
                  const isActive = pathname === subItem.href
                  const isNew =
                    subItem.isNew ||
                    subItem.title === 'Typeset' ||
                    subItem.label === 'new'
                  return (
                    <Link
                      key={subIndex}
                      href={subItem.href || '#'}
                      data-active={isActive ? 'true' : 'false'}
                      className={cn(
                        'group flex h-[30px] w-full items-center justify-between rounded-md px-2.5 text-[0.8rem] transition-all duration-150',
                        isActive ? 'bg-accent shadow-xs' : 'hover:bg-accent/50',
                      )}
                    >
                      <span className="truncate">{subItem.title}</span>
                      {isNew && (
                        <span
                          className="flex h-2 w-2 rounded-full bg-blue-500 shrink-0 ml-2"
                          title="New"
                        />
                      )}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}
