import ts from 'typescript'

const tsCode = `
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

export const buttonVariants = tv({
  base: 'button-base',
  variants: {
    variant: {
      default: 'btn-default'
    }
  }
})

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : 'button') as any
    return (
      <Comp
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
export { Button }
`

const result = ts.transpileModule(tsCode, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    jsx: ts.JsxEmit.Preserve,
    removeComments: false,
  },
})

console.log(result.outputText)
