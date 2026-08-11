'use client'

import React, { useState } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Transaction {
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

interface DataTableProps {
  transactions: Transaction[]
}

export function DataTable({ transactions }: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const totalPages = Math.ceil(transactions.length / pageSize) || 1
  const paginated = transactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  const isAllSelected =
    paginated.length > 0 &&
    paginated.every((t) => selectedRows.includes(t.header))
  const handleSelectAllChange = (checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => {
        const newSelected = [...prev]
        paginated.forEach((t) => {
          if (!newSelected.includes(t.header)) newSelected.push(t.header)
        })
        return newSelected
      })
    } else {
      setSelectedRows((prev) =>
        prev.filter((header) => !paginated.some((t) => t.header === header)),
      )
    }
  }

  const handleSelectRowChange = (header: string, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, header])
    } else {
      setSelectedRows((prev) => prev.filter((h) => h !== header))
    }
  }

  return (
    <div className="space-y-4 w-full">
      <div className="border border-border/80 rounded-t-lg bg-muted/20 w-full">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[800px] !overflow-visible bg-transparent text-foreground border-border/80">
            <TableHeader className="bg-muted/40 border-b border-border/80 [&_tr]:border-border/80 sticky top-0 z-10">
              <TableRow className="border-b border-border/80">
                <TableHead className="w-12 text-center text-muted-foreground border-border/80">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={(checked) =>
                      handleSelectAllChange(checked === true)
                    }
                  />
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Header
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Section Type
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Status
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Value
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  User
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length > 0 ? (
                paginated.map((t, i) => (
                  <TableRow
                    key={i}
                    className="hover:hover:bg-muted/50 border-b border-border/40 text-left"
                  >
                    <TableCell className="text-center text-muted-foreground border-border/40">
                      <Checkbox
                        checked={selectedRows.includes(t.header)}
                        onCheckedChange={(checked) =>
                          handleSelectRowChange(t.header, checked === true)
                        }
                      />
                    </TableCell>
                    <TableCell className="font-semibold text-foreground truncate max-w-[200px] border-border/40">
                      {t.header}
                    </TableCell>
                    <TableCell className="border-border/40">
                      <Badge className="bg-muted text-foreground border border-border py-0.5 px-2 text-[10px] font-medium">
                        {t.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="border-border/40">
                      <span
                        className={
                          t.status === 'Done'
                            ? 'text-emerald-400 font-medium text-xs'
                            : 'text-amber-400 font-medium text-xs'
                        }
                      >
                        {t.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs text-muted-foreground border-border/40">
                      {t.target}
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs text-muted-foreground border-border/40">
                      {t.limit}
                    </TableCell>
                    <TableCell className="pl-6 border-border/40">
                      {t.reviewer === 'Assign reviewer' ? (
                        <div className="w-36">
                          <Select defaultValue="assign">
                            <SelectTrigger className="h-7 text-[11px] bg-muted border-border font-sans py-0 px-2 text-foreground" />
                            <SelectContent className="w-36 text-xs bg-card border-border">
                              <SelectItem
                                value="assign"
                                className="text-[11px] py-1 pl-8 text-foreground"
                              >
                                Assign reviewer
                              </SelectItem>
                              <SelectItem
                                value="lake"
                                className="text-[11px] py-1 pl-8 text-foreground"
                              >
                                Eddie Lake
                              </SelectItem>
                              <SelectItem
                                value="jamik"
                                className="text-[11px] py-1 pl-8 text-foreground"
                              >
                                Jamik Tashpulatov
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          {t.reviewer}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="h-24 text-center text-muted-foreground text-xs"
                  >
                    No transactions found matching filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border border-border bg-muted/10 rounded-b-lg text-xs text-muted-foreground select-none shrink-0">
        <div className="text-center sm:text-left">
          Showing{' '}
          {transactions.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to{' '}
          {Math.min(currentPage * pageSize, transactions.length)} of{' '}
          {transactions.length} entries
        </div>
        <div className="flex flex-row items-center gap-3 sm:gap-4 justify-center">
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline">Rows per page:</span>
            <div className="w-16">
              <Select
                value={String(pageSize)}
                onValueChange={(val) => {
                  setPageSize(Number(val))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="h-7 text-[11px] bg-muted border-border font-sans py-0 px-2" />
                <SelectContent className="w-16 text-xs bottom-full mb-2 top-auto mt-0">
                  <SelectItem value="3" className="text-[11px] py-1 pl-8">
                    3
                  </SelectItem>
                  <SelectItem value="4" className="text-[11px] py-1 pl-8">
                    4
                  </SelectItem>
                  <SelectItem value="5" className="text-[11px] py-1 pl-8">
                    5
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-7 w-7 p-0 flex items-center justify-center bg-muted border-border cursor-pointer hover:bg-muted-foreground/10 text-foreground"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </Button>
            <span className="text-xs font-medium text-foreground font-mono">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              className="h-7 w-7 p-0 flex items-center justify-center bg-muted border-border cursor-pointer hover:bg-muted-foreground/10 text-foreground"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
