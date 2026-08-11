import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../table'

describe('Table Component', () => {
  it('renders structured HTML tabular elements correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Heading</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell Value</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )

    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Cell Value')).toBeInTheDocument()
  })
})
