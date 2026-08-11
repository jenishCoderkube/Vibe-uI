import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Item, ItemGroup } from '../item'

describe('Item Component', () => {
  it('renders items in a list layout group correctly', () => {
    render(
      <ItemGroup>
        <Item>List item content</Item>
      </ItemGroup>,
    )

    expect(screen.getByText('List item content')).toBeInTheDocument()
  })
})
