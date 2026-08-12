'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

interface TocItem {
  id: string
  text: string
  level: number
  children: TocItem[]
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article =
      document.querySelector('article') || document.querySelector('main')
    if (!article) return

    const allHeadings = Array.from(article.querySelectorAll('h2, h3'))
    const headingElements = allHeadings.filter(
      (el) =>
        !el.closest('.not-typeset') &&
        !el.closest('[data-not-typeset]') &&
        !el.closest('[role="alert"]'),
    )
    const items: TocItem[] = []
    const seenIds = new Set<string>()
    let currentParent: TocItem | null = null

    headingElements.forEach((el) => {
      if (!el.id) {
        el.id = el.textContent
          ? el.textContent
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
          : ''
      }

      if (seenIds.has(el.id)) return
      seenIds.add(el.id)

      let headingText = el.textContent || ''
      if (headingText.endsWith('#')) {
        headingText = headingText.slice(0, -1).trim()
      }

      const item: TocItem = {
        id: el.id,
        text: headingText,
        level: el.tagName === 'H2' ? 2 : 3,
        children: [],
      }

      if (item.level === 2) {
        items.push(item)
        currentParent = item
      } else if (item.level === 3 && currentParent) {
        currentParent.children.push(item)
      } else {
        items.push(item)
      }
    })

    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id)
        }
      },
      { rootMargin: '0px 0px -75% 0px', threshold: 0.1 },
    )

    headingElements.forEach((el) => observer.observe(el))

    return () => {
      headingElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Scroll active item to the center of the TOC viewport
  useEffect(() => {
    if (!activeId) return
    const activeElement = document.getElementById(`toc-${activeId}`)
    if (activeElement) {
      const container =
        activeElement.closest('aside') ||
        activeElement.closest('ul')?.parentElement
      if (container) {
        const containerRect = container.getBoundingClientRect()
        const elementRect = activeElement.getBoundingClientRect()
        const relativeTop =
          elementRect.top - containerRect.top + container.scrollTop

        container.scrollTo({
          top:
            relativeTop -
            container.clientHeight / 2 +
            activeElement.clientHeight / 2,
          behavior: 'smooth',
        })
      }
    }
  }, [activeId])

  if (headings.length === 0) return null

  const isParentActive = (parent: TocItem) => {
    if (activeId === parent.id) return true
    return parent.children.some((child) => child.id === activeId)
  }

  return (
    <div className="space-y-3 select-none pl-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 pl-4 mb-2">
        On This Page
      </p>
      <ul className="relative flex flex-col gap-1.5 text-[0.8rem] border-l border-border/40 ml-0.5">
        {headings.map((parent) => {
          const isActive = isParentActive(parent)
          const hasChildren = parent.children.length > 0

          return (
            <li key={parent.id} className="flex flex-col gap-1">
              <a
                id={`toc-${parent.id}`}
                href={`#${parent.id}`}
                className={cn(
                  'block transition-all duration-200 hover:text-foreground no-underline py-0.5 border-l-2 -ml-[1.5px] text-xs leading-5 pl-4',
                  activeId === parent.id || (isActive && hasChildren)
                    ? 'border-primary text-foreground font-semibold'
                    : 'border-transparent text-muted-foreground',
                )}
              >
                {parent.text}
              </a>

              {/* Dynamic Sub-dropdown (Children H3 list) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: isActive && hasChildren ? '1fr' : '0fr',
                  opacity: isActive && hasChildren ? 1 : 0,
                  visibility: isActive && hasChildren ? 'visible' : 'hidden',
                  transition:
                    'grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 300ms',
                }}
              >
                <div className="overflow-hidden">
                  <ul className="relative flex flex-col gap-0.5 border-l border-border/60 ml-6 pl-2 mt-1 mb-2">
                    {parent.children.map((child) => (
                      <li key={child.id}>
                        <a
                          id={`toc-${child.id}`}
                          href={`#${child.id}`}
                          className={cn(
                            'block transition-all duration-200 hover:text-foreground no-underline py-0.5 text-[11px] leading-4 text-left border-l border-transparent -ml-[9px] pl-[8px]',
                            activeId === child.id
                              ? 'text-primary font-semibold border-primary'
                              : 'text-muted-foreground/90',
                          )}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
