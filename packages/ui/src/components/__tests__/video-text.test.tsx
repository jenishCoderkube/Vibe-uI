import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoText } from '../video-text'

describe('VideoText Component', () => {
  it('renders video element masking layer', () => {
    render(<VideoText src="video.mp4">Video Overlay</VideoText>)
    expect(
      screen.getByText('Video Overlay', { selector: '.sr-only' }),
    ).toBeInTheDocument()
  })
})
