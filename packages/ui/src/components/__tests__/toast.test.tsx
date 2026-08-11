import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from '../toast'

describe('Toast Component', () => {
  it('renders correctly inside ToastProvider', () => {
    render(
      <ToastProvider>
        <Toast open>
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>Updates loaded</ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>,
    )

    expect(screen.getByText('Notification')).toBeInTheDocument()
    expect(screen.getByText('Updates loaded')).toBeInTheDocument()
  })
})
