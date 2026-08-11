import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Uploader } from '../uploader'

describe('Uploader Component', () => {
  it('renders drag-and-drop zone and placeholder text', () => {
    render(<Uploader />)
    expect(screen.getByText(/drag & drop files/i)).toBeInTheDocument()
    expect(screen.getByText(/browse/i)).toBeInTheDocument()
  })

  it('renders uploaded files list', () => {
    const filesList = [
      {
        id: 'file-1',
        name: 'document.pdf',
        size: 1024 * 1024,
        type: 'application/pdf',
        progress: 100,
        status: 'completed' as const,
      },
    ]

    render(<Uploader files={filesList} />)
    expect(screen.getByText('document.pdf')).toBeInTheDocument()
    expect(screen.getByText(/1 MB/i)).toBeInTheDocument()
  })
})
