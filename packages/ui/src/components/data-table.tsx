'use client'

import * as React from 'react'
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Input } from './input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

export interface DataTableColumn<T> {
  key: string
  header: string
  accessor: (row: T) => React.ReactNode
  sortable?: boolean
  className?: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: DataTableColumn<T>[]
  searchable?: boolean
  searchPlaceholder?: string
  selectable?: boolean
  onSelectionChange?: (selectedRows: T[]) => void
  pageSize?: number
  variant?: 'default' | 'glass' | 'retro' | 'glow'
  className?: string
}

export function DataTable<T extends { id?: string | number }>({
  data = [],
  columns = [],
  searchable = true,
  searchPlaceholder = 'Filter data...',
  selectable = true,
  onSelectionChange,
  pageSize = 5,
  variant = 'default',
  className,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [sortKey, setSortKey] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>(
    'asc',
  )
  const [selectedIds, setSelectedIds] = React.useState<Set<string | number>>(
    new Set(),
  )
  const [currentPage, setCurrentPage] = React.useState(1)

  // Filter Data
  const filteredData = React.useMemo(() => {
    if (!searchQuery) return data
    return data.filter((row) =>
      columns.some((col) => {
        const val = row[col.key as keyof T]
        return String(val ?? '')
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      }),
    )
  }, [data, columns, searchQuery])

  // Sort Data
  const sortedData = React.useMemo(() => {
    if (!sortKey) return filteredData
    return [...filteredData].sort((a, b) => {
      const valA = String(a[sortKey as keyof T] ?? '')
      const valB = String(b[sortKey as keyof T] ?? '')
      return sortDirection === 'asc'
        ? valA.localeCompare(valB, undefined, { numeric: true })
        : valB.localeCompare(valA, undefined, { numeric: true })
    })
  }, [filteredData, sortKey, sortDirection])

  // Paginate Data
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1
  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return sortedData.slice(start, start + pageSize)
  }, [sortedData, currentPage, pageSize])

  const handleSort = (key: string) => {
    if (sortKey === key) {
      if (sortDirection === 'asc') setSortDirection('desc')
      else {
        setSortKey(null)
        setSortDirection('asc')
      }
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(paginatedData.map((r, i) => r.id ?? i))
      setSelectedIds(allIds)
      onSelectionChange?.(paginatedData)
    } else {
      setSelectedIds(new Set())
      onSelectionChange?.([])
    }
  }

  const handleSelectRow = (row: T, index: number, checked: boolean) => {
    const id = row.id ?? index
    const next = new Set(selectedIds)
    if (checked) next.add(id)
    else next.delete(id)
    setSelectedIds(next)

    const selectedObjects = data.filter((r, i) => next.has(r.id ?? i))
    onSelectionChange?.(selectedObjects)
  }

  return (
    <div className={cn('w-full space-y-4', className)} data-slot="data-table">
      {searchable && (
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              value={searchQuery}
              data-slot="data-table-search"
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-9 h-9 text-xs"
            />
          </div>
          <div
            className="text-xs text-muted-foreground font-medium"
            data-slot="data-table-selection-info"
          >
            {selectedIds.size} of {filteredData.length} row(s) selected
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border overflow-hidden bg-card shadow-xs">
        <Table variant={variant}>
          <TableHeader>
            <TableRow>
              {selectable && (
                <TableHead className="w-12 text-center">
                  <Checkbox
                    checked={
                      paginatedData.length > 0 &&
                      paginatedData.every((r, i) => selectedIds.has(r.id ?? i))
                    }
                    onCheckedChange={(c) => handleSelectAll(!!c)}
                  />
                </TableHead>
              )}
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className={cn('font-semibold text-xs', col.className)}
                >
                  {col.sortable ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort(col.key)}
                      className="-ml-3 h-8 text-xs font-semibold hover:bg-muted/80"
                    >
                      <span>{col.header}</span>
                      <ArrowUpDown className="ml-1.5 h-3.5 w-3.5 opacity-60" />
                    </Button>
                  ) : (
                    col.header
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="h-24 text-center text-xs text-muted-foreground"
                >
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, index) => {
                const id = row.id ?? index
                const isSelected = selectedIds.has(id)
                return (
                  <TableRow
                    key={String(id)}
                    data-state={isSelected ? 'selected' : undefined}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    {selectable && (
                      <TableCell className="text-center">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={(c) =>
                            handleSelectRow(row, index, !!c)
                          }
                        />
                      </TableCell>
                    )}
                    {columns.map((col) => (
                      <TableCell
                        key={col.key}
                        className={cn('text-xs', col.className)}
                      >
                        {col.accessor(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1"
        data-slot="data-table-pagination"
      >
        <div className="text-xs text-muted-foreground">
          Page {currentPage} of {totalPages} ({sortedData.length} items total)
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
