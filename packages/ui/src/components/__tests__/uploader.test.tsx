import React from 'react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Uploader } from '../uploader'

describe('Uploader Component', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders default dropzone elements', () => {
    render(<Uploader maxSizeMB={10} />)
    expect(screen.getByText(/drag & drop files here/i)).toBeInTheDocument()
    expect(screen.getByText(/browse/i)).toBeInTheDocument()
    expect(
      screen.getByText(/supports image, pdf or files up to 10mb/i),
    ).toBeInTheDocument()
  })

  it('triggers file input click when dropzone is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Uploader />)

    const dropzone = container.querySelector(
      '[data-slot="uploader-dropzone"]',
    ) as HTMLElement
    expect(dropzone).toBeInTheDocument()

    const input = container.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement
    expect(input).toBeInTheDocument()

    const clickSpy = vi.spyOn(input, 'click')
    await user.click(dropzone)
    expect(clickSpy).toHaveBeenCalled()
  })

  it('validates and adds files to the queue, simulating upload progress using timers', () => {
    vi.useFakeTimers()
    const handleFilesSelected = vi.fn()

    const { container } = render(
      <Uploader onFilesSelected={handleFilesSelected} />,
    )
    const dropzone = container.querySelector(
      '[data-slot="uploader-dropzone"]',
    ) as HTMLElement
    expect(dropzone).toBeInTheDocument()

    const file = new File(['hello'], 'hello.png', { type: 'image/png' })

    // Simulate dropping the file
    fireEvent.drop(dropzone, {
      dataTransfer: {
        files: [file],
      },
    })

    expect(handleFilesSelected).toHaveBeenCalledWith([file])

    // Should show in the queue with status uploading
    expect(screen.getByText('hello.png')).toBeInTheDocument()
    expect(screen.getByText('Uploading...')).toBeInTheDocument()

    // Advance all timers inside act to flush state updates
    act(() => {
      vi.runAllTimers()
    })

    // Should now show status completed (checkmark icon renders, Uploading goes away)
    expect(screen.queryByText('Uploading...')).not.toBeInTheDocument()
  })

  it('validates file size limit constraints', () => {
    const { container } = render(<Uploader maxSizeMB={2} />)
    const dropzone = container.querySelector(
      '[data-slot="uploader-dropzone"]',
    ) as HTMLElement
    expect(dropzone).toBeInTheDocument()

    // Create a 3MB file
    const largeFile = new File(
      [new ArrayBuffer(3 * 1024 * 1024)],
      'large.pdf',
      {
        type: 'application/pdf',
      },
    )

    fireEvent.drop(dropzone, {
      dataTransfer: {
        files: [largeFile],
      },
    })

    // Should show error state in queue (renders large.pdf and Error badge)
    expect(screen.getByText('large.pdf')).toBeInTheDocument()
    expect(screen.getAllByText('Error').length).toBeGreaterThan(0)
  })

  it('validates unsupported file formats using accept patterns', () => {
    const { container } = render(<Uploader accept={['image/*', '.pdf']} />)
    const dropzone = container.querySelector(
      '[data-slot="uploader-dropzone"]',
    ) as HTMLElement
    expect(dropzone).toBeInTheDocument()

    const textFile = new File(['dummy content'], 'document.txt', {
      type: 'text/plain',
    })

    fireEvent.drop(dropzone, {
      dataTransfer: {
        files: [textFile],
      },
    })

    expect(screen.getByText('document.txt')).toBeInTheDocument()
    expect(screen.getAllByText('Error').length).toBeGreaterThan(0)
  })

  it('removes file from queue and triggers onFileRemoved callback', async () => {
    const user = userEvent.setup()
    const handleFileRemoved = vi.fn()
    const initialFiles = [
      {
        id: 'file-1',
        name: 'test.png',
        size: 512,
        type: 'image/png',
        progress: 100,
        status: 'completed' as const,
      },
    ]

    render(<Uploader files={initialFiles} onFileRemoved={handleFileRemoved} />)

    expect(screen.getByText('test.png')).toBeInTheDocument()

    // Find and click remove button (it is the X button inside the file item row)
    const removeBtn = screen.getByRole('button')
    await user.click(removeBtn)

    expect(handleFileRemoved).toHaveBeenCalledWith('file-1')
    expect(screen.queryByText('test.png')).not.toBeInTheDocument()
  })
})
