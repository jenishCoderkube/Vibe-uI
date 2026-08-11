'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { docsConfig } from '../config/docs'
import { cn } from '../lib/utils'

export function Sidebar({ open }: { open?: boolean }) {
  const pathname = usePathname()

  React.useEffect(() => {
    const container =
      document.getElementById('docs-sidebar-mobile-aside') ||
      document.getElementById('docs-sidebar-aside')
    if (!container) return

    // 1. Restore scroll position or center active item
    const scrollState = (() => {
      try {
        return JSON.parse(sessionStorage.getItem('vibe-sidebar-scroll') ?? '')
      } catch {
        return null
      }
    })()

    if (scrollState && scrollState.pathname === pathname) {
      container.scrollTop = scrollState.scrollTop
    } else {
      // scroll to active link with a slight delay to allow layout stability
      const timer = setTimeout(() => {
        const activeLink = container.querySelector(
          'a[data-active="true"]',
        ) as HTMLElement
        if (activeLink) {
          const containerRect = container.getBoundingClientRect()
          const linkRect = activeLink.getBoundingClientRect()
          const relativeTop =
            linkRect.top - containerRect.top + container.scrollTop
          const targetScroll =
            relativeTop - containerRect.height / 2 + linkRect.height / 2
          container.scrollTo({
            top: Math.max(0, targetScroll),
            behavior: 'smooth',
          })
        }
      }, 350) // wait for drawer transition (300ms) to complete
      return () => clearTimeout(timer)
    }

    // 2. Save scroll position on scroll
    const onScroll = () => {
      try {
        sessionStorage.setItem(
          'vibe-sidebar-scroll',
          JSON.stringify({
            pathname: window.location.pathname,
            scrollTop: container.scrollTop,
          }),
        )
      } catch {}
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', onScroll)
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
                      data-active={isActive}
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
