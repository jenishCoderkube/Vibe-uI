'use client'

import React, { useState } from 'react'
import { Slider } from 'vibe-ui'

export function SliderValueDemo() {
  const [value, setValue] = useState([80])

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between items-center text-xs font-semibold text-foreground">
        <span>Volume setting</span>
        <span className="font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">
          {value[0]}%
        </span>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
    </div>
  )
}
