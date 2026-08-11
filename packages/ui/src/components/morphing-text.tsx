'use client'

import { useCallback, useEffect, useRef, useId } from 'react'
import { cn } from '../lib/utils'

const morphTime = 1.5
const cooldownTime = 0.5

export interface MorphingTextProps {
  className?: string
  texts?: string[]
  direction?: 'horizontal' | 'vertical'
}

const useMorphingText = (
  texts: string[] = [],
  direction: 'horizontal' | 'vertical' = 'horizontal',
) => {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(new Date())

  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current]
      if (!current1 || !current2) return

      const safeTexts = texts && texts.length > 0 ? texts : ['']

      const blur2 = Math.min(8 / fraction - 8, 100)
      const opacity2 = Math.pow(fraction, 0.4) * 100
      const offset2 = (1 - fraction) * 20

      current2.style.filter = `blur(${blur2}px)`
      current2.style.opacity = `${opacity2}%`
      current2.style.transform =
        direction === 'vertical'
          ? `translate3d(0, ${offset2}px, 0)`
          : `translate3d(${offset2}px, 0, 0)`

      const invertedFraction = 1 - fraction
      const blur1 = Math.min(8 / invertedFraction - 8, 100)
      const opacity1 = Math.pow(invertedFraction, 0.4) * 100
      const offset1 = -fraction * 20

      current1.style.filter = `blur(${blur1}px)`
      current1.style.opacity = `${opacity1}%`
      current1.style.transform =
        direction === 'vertical'
          ? `translate3d(0, ${offset1}px, 0)`
          : `translate3d(${offset1}px, 0, 0)`

      current1.textContent = safeTexts[textIndexRef.current % safeTexts.length]
      current2.textContent =
        safeTexts[(textIndexRef.current + 1) % safeTexts.length]
    },
    [texts, direction],
  )

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0

    let fraction = morphRef.current / morphTime

    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
      textIndexRef.current++
    }
  }, [setStyles])

  const doCooldown = useCallback(() => {
    morphRef.current = 0
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (current1 && current2) {
      current2.style.filter = 'none'
      current2.style.opacity = '100%'
      current2.style.transform = 'translate3d(0, 0px, 0)'
      current1.style.filter = 'none'
      current1.style.opacity = '0%'
      current1.style.transform = 'translate3d(0, 0px, 0)'
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number
    timeRef.current = new Date()

    const safeTexts = texts && texts.length > 0 ? texts : ['Vibe', 'UI']
    if (text1Ref.current) text1Ref.current.textContent = safeTexts[0]
    if (text2Ref.current)
      text2Ref.current.textContent = safeTexts[1] || safeTexts[0]

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const newTime = new Date()
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000
      timeRef.current = newTime

      cooldownRef.current -= dt

      if (cooldownRef.current <= 0) doMorph()
      else doCooldown()
    }

    animate()
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [doMorph, doCooldown, texts])

  return { text1Ref, text2Ref }
}

const Texts: React.FC<Pick<MorphingTextProps, 'texts' | 'direction'>> = ({
  texts = [],
  direction = 'horizontal',
}) => {
  const { text1Ref, text2Ref } = useMorphingText(texts, direction)
  const isVertical = direction === 'vertical'
  return (
    <>
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center text-center py-6 will-change-transform',
          isVertical && '[writing-mode:vertical-rl] [text-orientation:upright]',
        )}
        ref={text1Ref}
      />
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center text-center py-6 will-change-transform',
          isVertical && '[writing-mode:vertical-rl] [text-orientation:upright]',
        )}
        ref={text2Ref}
      />
    </>
  )
}

const SvgFilters: React.FC<{ id: string }> = ({ id }) => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id={id}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
)

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts = ['Vibe', 'Interactive', 'Dynamic', 'Beautiful'],
  direction = 'horizontal',
  className,
}) => {
  const uniqueId = useId().replace(/:/g, '')
  const filterId = `threshold-${uniqueId}`
  const isVertical = direction === 'vertical'

  return (
    <div
      data-slot="morphing-text"
      style={{ filter: `url(#${filterId}) blur(0.6px)` }}
      className={cn(
        'relative mx-auto text-center font-sans font-extrabold text-foreground flex items-center justify-center select-none max-w-full',
        isVertical
          ? 'min-h-[260px] sm:min-h-[320px] w-full py-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl [writing-mode:vertical-rl] [text-orientation:upright] [letter-spacing:-0.32em] leading-none'
          : 'h-16 md:h-24 w-full max-w-2xl text-3xl md:text-5xl lg:text-6xl px-4',
        className,
      )}
    >
      <Texts texts={texts} direction={direction} />
      <SvgFilters id={filterId} />
    </div>
  )
}
