import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { DataTable, type DataTableColumn } from '../data-table'

interface TestRow {
  id: number
  name: string
  role: string
}

describe('DataTable Component', () => {
  const columns: DataTableColumn<TestRow>[] = [
    { key: 'name', header: 'Name', accessor: (row) => row.name },
    { key: 'role', header: 'Role', accessor: (row) => row.role },
  ]

  const data: TestRow[] = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
  ]

  it('renders table headers and rows correctly', () => {
    render(<DataTable columns={columns} data={data} searchable={false} />)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Role')).toBeInTheDocument()
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
  })

  it('filters data based on search input', () => {
    render(<DataTable columns={columns} data={data} searchable />)

    const searchInput = screen.getByPlaceholderText('Filter data...')
    fireEvent.change(searchInput, { target: { value: 'Alice' } })

    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.queryByText('Bob')).not.toBeInTheDocument()
  })
})
