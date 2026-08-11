import React from 'react'

export interface AsChildProp {
  asChild?: boolean
}

export type BaseProps<T extends HTMLElement = HTMLElement> =
  React.HTMLAttributes<T> & AsChildProp
