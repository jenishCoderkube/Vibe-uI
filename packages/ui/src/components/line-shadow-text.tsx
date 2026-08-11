'use client'

import { type CSSProperties, type HTMLAttributes } from 'react'
import {
  motion,
  type DOMMotionComponents,
  type MotionProps,
} from 'motion/react'

import { cn } from '../lib/utils'

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span,
} as const

type MotionElementType = Extract<
  keyof DOMMotionComponents,
  keyof typeof motionElements
>

export interface LineShadowTextProps
  extends Omit<HTMLAttributes<HTMLElement>, keyof MotionProps>, MotionProps {
  children: string
  shadowColor?: string
  as?: MotionElementType
  direction?: 'left' | 'right'
  animateDirection?: 'left-to-right' | 'right-to-left'
}

export function LineShadowText({
  children,
  shadowColor = 'currentColor',
  className,
  as: Component = 'span',
  direction = 'right',
  animateDirection = 'left-to-right',
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motionElements[Component]

  return (
    <MotionComponent
      data-slot="line-shadow-text"
      style={{ '--shadow-color': shadowColor } as CSSProperties}
      className={cn(
        'relative z-0 inline-flex whitespace-nowrap',
        'after:absolute after:top-[0.04em] after:content-[attr(data-text)]',
        direction === 'left' ? 'after:left-[-0.04em]' : 'after:left-[0.04em]',
        direction === 'left'
          ? 'after:bg-[linear-gradient(-45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]'
          : 'after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]',
        'after:-z-10 after:bg-[size:0.06em_0.06em] after:bg-clip-text after:text-transparent after:whitespace-nowrap',
        'after:animate-line-shadow',
        animateDirection === 'right-to-left' &&
          'after:[animation-direction:reverse]',
        className,
      )}
      data-text={children}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
