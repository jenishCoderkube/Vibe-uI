'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

interface TocItem {
  id: string
  text: string
  level: number
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

      items.push({
        id: el.id,
        text: headingText,
        level: el.tagName === 'H2' ? 2 : 3,
      })
    })

    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id)
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 },
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

  return (
    <div className="space-y-3 select-none pl-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 pl-4">
        On This Page
      </p>
      <ul className="relative flex flex-col gap-1 text-[0.8rem] border-l border-border/40 ml-0.5">
        {headings.map((item) => (
          <li key={item.id}>
            <a
              id={`toc-${item.id}`}
              href={`#${item.id}`}
              className={cn(
                'block transition-all duration-200 hover:text-foreground no-underline py-1 border-l-2 -ml-[1.5px] text-xs leading-5 pl-4',
                activeId === item.id
                  ? 'border-primary text-foreground font-semibold'
                  : 'border-transparent text-muted-foreground',
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
