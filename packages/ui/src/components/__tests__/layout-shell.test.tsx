import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  LayoutShell,
  LayoutShellSidebar,
  LayoutShellHeader,
  LayoutShellContent,
} from '../layout-shell'

describe('LayoutShell Component', () => {
  it('renders layout shell elements and children correctly', () => {
    render(
      <LayoutShell>
        <LayoutShellSidebar>Sidebar Menu</LayoutShellSidebar>
        <LayoutShellHeader>Header Section</LayoutShellHeader>
        <LayoutShellContent>Content Area</LayoutShellContent>
      </LayoutShell>,
    )

    expect(screen.getByText('Sidebar Menu')).toBeInTheDocument()
    expect(screen.getByText('Header Section')).toBeInTheDocument()
    expect(screen.getByText('Content Area')).toBeInTheDocument()
  })
})
