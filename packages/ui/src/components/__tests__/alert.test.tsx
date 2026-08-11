import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from '../alert'

describe('Alert Component', () => {
  it('renders title and description inside alert wrapper', () => {
    render(
      <Alert>
        <AlertTitle>Warning Title</AlertTitle>
        <AlertDescription>Danger warning details</AlertDescription>
      </Alert>,
    )

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(screen.getByText('Warning Title')).toBeInTheDocument()
    expect(screen.getByText('Danger warning details')).toBeInTheDocument()
  })
})
