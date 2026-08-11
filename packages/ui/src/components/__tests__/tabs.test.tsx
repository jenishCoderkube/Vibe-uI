import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../tabs'

describe('Tabs Component', () => {
  it('renders triggers and displays active content by default', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
        <TabsContent value="tab-2">Content 2</TabsContent>
      </Tabs>,
    )

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()
  })

  it('switches tabs on trigger click', () => {
    const handleValueChange = vi.fn()
    render(
      <Tabs defaultValue="tab-1" onValueChange={handleValueChange}>
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
        <TabsContent value="tab-2">Content 2</TabsContent>
      </Tabs>,
    )

    const trigger2 = screen.getByRole('tab', { name: /tab 2/i })
    fireEvent.click(trigger2)

    expect(handleValueChange).toHaveBeenCalledWith('tab-2')
    expect(screen.getByText('Content 2')).toBeInTheDocument()
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })

  it('navigates triggers via keyboard arrows', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
        <TabsContent value="tab-2">Content 2</TabsContent>
        <TabsContent value="tab-3">Content 3</TabsContent>
      </Tabs>,
    )

    const triggers = screen.getAllByRole('tab')

    // Focus first trigger
    triggers[0].focus()
    expect(document.activeElement).toBe(triggers[0])

    // ArrowRight to navigate to Tab 2
    fireEvent.keyDown(triggers[0], { key: 'ArrowRight' })
    expect(document.activeElement).toBe(triggers[1])
    expect(screen.getByText('Content 2')).toBeInTheDocument()

    // End key to navigate to Tab 3
    fireEvent.keyDown(triggers[1], { key: 'End' })
    expect(document.activeElement).toBe(triggers[2])
    expect(screen.getByText('Content 3')).toBeInTheDocument()

    // Home key to navigate back to Tab 1
    fireEvent.keyDown(triggers[2], { key: 'Home' })
    expect(document.activeElement).toBe(triggers[0])
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })
})
