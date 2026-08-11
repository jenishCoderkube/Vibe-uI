import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '../context-menu'

describe('ContextMenu Component', () => {
  it('renders context trigger zone', () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right click here</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    )

    expect(screen.getByText('Right click here')).toBeInTheDocument()
  })
})
