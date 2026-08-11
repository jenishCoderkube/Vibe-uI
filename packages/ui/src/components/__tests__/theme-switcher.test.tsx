import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeSwitcher } from '../theme-switcher'

describe('ThemeSwitcher Component', () => {
  it('renders theme selector trigger button correctly', () => {
    render(<ThemeSwitcher />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
