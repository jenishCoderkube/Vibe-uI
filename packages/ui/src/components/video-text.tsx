'use client'

import React, {
  useEffect,
  useState,
  type ElementType,
  type ReactNode,
} from 'react'

import { cn } from '../lib/utils'

export interface VideoTextProps {
  src?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  preload?: 'auto' | 'metadata' | 'none'
  children: ReactNode
  direction?: 'horizontal' | 'vertical'
  fontSize?: string | number
  fontWeight?: string | number
  textAnchor?: string
  dominantBaseline?: string
  fontFamily?: string
  as?: ElementType
}

function extractTextFromNode(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractTextFromNode).join('')
  if (node && typeof node === 'object' && 'props' in node) {
    const element = node as React.ReactElement<{ children?: ReactNode }>
    if (element.props && element.props.children) {
      return extractTextFromNode(element.props.children)
    }
  }
  return ''
}

export function VideoText({
  src = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  children,
  className = '',
  direction = 'horizontal',
  autoPlay = true,
  muted = true,
  loop = true,
  preload = 'auto',
  fontSize,
  fontWeight = '900',
  textAnchor = 'middle',
  dominantBaseline = 'middle',
  fontFamily = 'sans-serif',
  as: Component = 'div',
}: VideoTextProps) {
  const [svgMask, setSvgMask] = useState('')
  const content = extractTextFromNode(children) || 'VIBE UI'
  const isVertical = direction === 'vertical'

  useEffect(() => {
    const updateSvgMask = () => {
      let newSvgMask = ''

      if (isVertical) {
        const chars = Array.from(content)
        const fontVal = fontSize
          ? typeof fontSize === 'number'
            ? fontSize
            : 22
          : 22
        const initialShiftEm = -((chars.length - 1) * 0.48)

        const tspans = chars
          .map((char, i) => {
            const charText = char === ' ' ? '&#160;' : char
            const dyAttr = i === 0 ? `${initialShiftEm}em` : '0.95em'
            return `<tspan x='50' dy='${dyAttr}'>${charText}</tspan>`
          })
          .join('')

        newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet' width='100%' height='100%'><text x='50' y='50' font-size='${fontVal}' font-weight='${fontWeight}' text-anchor='middle' dominant-baseline='central' font-family='${fontFamily}'>${tspans}</text></svg>`
      } else {
        const defaultFontSize = fontSize ?? 20
        const responsiveFontSize =
          typeof defaultFontSize === 'number'
            ? `${defaultFontSize}vw`
            : defaultFontSize

        newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${content}</text></svg>`
      }

      setSvgMask(newSvgMask)
    }

    updateSvgMask()
    window.addEventListener('resize', updateSvgMask)
    return () => window.removeEventListener('resize', updateSvgMask)
  }, [
    content,
    fontSize,
    fontWeight,
    textAnchor,
    dominantBaseline,
    fontFamily,
    isVertical,
  ])

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`

  return (
    <Component
      data-slot="video-text"
      className={cn(
        'relative size-full flex items-center justify-center text-center',
        isVertical ? 'min-h-[300px] py-4' : 'min-h-[160px]',
        className,
      )}
    >
      <div
        className="absolute inset-0 flex items-center justify-center text-center"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      >
        <video
          className="h-full w-full object-cover bg-black"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source
            src={src}
            type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'}
          />
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <span className="sr-only">{content}</span>
    </Component>
  )
}
