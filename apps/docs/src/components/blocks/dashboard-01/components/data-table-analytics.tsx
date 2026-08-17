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
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface AnalyticsSession {
  source: string
  category: string
  status: string
  conversion: string
  duration: string
  agent: string
}

export function DataTableAnalytics() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const sessions: AnalyticsSession[] = [
    {
      source: 'github.com/vibe-ui',
      category: 'Referral',
      status: 'Active',
      conversion: '4.2%',
      duration: '4m 12s',
      agent: 'Chrome / Win',
    },
    {
      source: 'google.com/search',
      category: 'Organic Search',
      status: 'Active',
      conversion: '1.5%',
      duration: '0m 45s',
      agent: 'Safari / iOS',
    },
    {
      source: 'npmjs.com/package',
      category: 'Referral',
      status: 'Idle',
      conversion: '0.8%',
      duration: '2m 10s',
      agent: 'Firefox / Mac',
    },
    {
      source: 't.co (Twitter / X)',
      category: 'Social',
      status: 'Active',
      conversion: '3.1%',
      duration: '3m 05s',
      agent: 'Brave / Linux',
    },
    {
      source: 'direct / none',
      category: 'Direct',
      status: 'Active',
      conversion: '5.0%',
      duration: '5m 30s',
      agent: 'Chrome / Mac',
    },
    {
      source: 'bing.com',
      category: 'Organic Search',
      status: 'Idle',
      conversion: '0.5%',
      duration: '1m 15s',
      agent: 'Edge / Win',
    },
  ]

  const totalPages = Math.ceil(sessions.length / pageSize) || 1
  const paginated = sessions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  const isAllSelected =
    paginated.length > 0 &&
    paginated.every((t) => selectedRows.includes(t.source))
  const handleSelectAllChange = (checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => {
        const newSelected = [...prev]
        paginated.forEach((t) => {
          if (!newSelected.includes(t.source)) newSelected.push(t.source)
        })
        return newSelected
      })
    } else {
      setSelectedRows((prev) =>
        prev.filter((source) => !paginated.some((t) => t.source === source)),
      )
    }
  }

  const handleSelectRowChange = (source: string, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, source])
    } else {
      setSelectedRows((prev) => prev.filter((s) => s !== source))
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
                  Referral Source
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Traffic Category
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Status
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Conversion Rate
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Duration
                </TableHead>
                <TableHead className="text-left text-muted-foreground border-border/80">
                  Session Agent
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
                        checked={selectedRows.includes(t.source)}
                        onCheckedChange={(checked) =>
                          handleSelectRowChange(t.source, checked === true)
                        }
                      />
                    </TableCell>
                    <TableCell className="font-semibold text-foreground truncate max-w-[200px] border-border/40">
                      {t.source}
                    </TableCell>
                    <TableCell className="border-border/40">
                      <Badge className="bg-muted text-foreground border border-border py-0.5 px-2 text-[10px] font-medium">
                        {t.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="border-border/40">
                      <span
                        className={
                          t.status === 'Active'
                            ? 'text-foreground font-semibold text-xs'
                            : 'text-muted-foreground font-medium text-xs'
                        }
                      >
                        {t.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-left font-mono text-xs text-muted-foreground border-border/40">
                      {t.conversion}
                    </TableCell>
                    <TableCell className="text-left font-mono text-xs text-muted-foreground border-border/40">
                      {t.duration}
                    </TableCell>
                    <TableCell className="border-border/40">
                      <div className="flex items-center gap-2 select-none">
                        <Avatar className="h-6 w-6 shrink-0">
                          <AvatarFallback className="text-[9px] bg-primary text-primary-foreground font-bold">
                            {t.agent
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground font-medium">
                          {t.agent}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="h-24 text-center text-muted-foreground text-xs"
                  >
                    No sessions found matching filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border border-border bg-muted/10 rounded-b-lg text-xs text-muted-foreground select-none shrink-0">
        <div className="text-center sm:text-left">
          Showing {sessions.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}{' '}
          to {Math.min(currentPage * pageSize, sessions.length)} of{' '}
          {sessions.length} entries
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
                <SelectTrigger className="h-7 text-[11px] bg-muted border-border font-sans py-0 px-2">
                  <SelectValue placeholder="4" />
                </SelectTrigger>
                <SelectContent className="min-w-0 w-16 text-xs bottom-full mb-2 top-auto mt-0">
                  <SelectItem value="3" className="text-[11px] py-1 pl-7">
                    3
                  </SelectItem>
                  <SelectItem value="4" className="text-[11px] py-1 pl-7">
                    4
                  </SelectItem>
                  <SelectItem value="5" className="text-[11px] py-1 pl-7">
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
