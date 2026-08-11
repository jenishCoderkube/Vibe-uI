'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 16 / 9, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="aspect-ratio"
        style={
          {
            aspectRatio: `${ratio}`,
            ...style,
          } as React.CSSProperties
        }
        className={cn('w-full overflow-hidden relative', className)}
        {...props}
      />
    )
  },
)

AspectRatio.displayName = 'AspectRatio'

export { AspectRatio }
