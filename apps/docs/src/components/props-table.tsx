'use client'

import React from 'react'

export interface PropRowProps {
  prop?: string
  name?: string
  type?: string
  default?: string
  defaultValue?: string
  description?: string
}

export function PropRow({
  prop,
  name,
  type,
  default: def,
  defaultValue,
  description,
}: PropRowProps) {
  const propName = prop || name || '-'
  const propType = type || 'string'
  const propDefault = def || defaultValue || '-'
  const propDesc = description || ''

  return (
    <tr className="hover:bg-muted/30 transition-colors border-b border-border/50 last:border-b-0">
      <td className="px-4 py-3 align-middle">
        <span className="inline-flex items-center rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-foreground border border-border/60 whitespace-nowrap">
          {propName}
        </span>
      </td>
      <td className="px-4 py-3 align-middle break-words">
        <span className="inline-flex items-center rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground border border-border/60 whitespace-normal break-all">
          {propType}
        </span>
      </td>
      <td className="px-4 py-3 align-middle">
        <span className="inline-flex items-center rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground border border-border/60 whitespace-nowrap">
          {propDefault}
        </span>
      </td>
      <td className="px-4 py-3 align-middle leading-normal text-muted-foreground text-xs font-medium">
        {propDesc}
      </td>
    </tr>
  )
}

export interface PropsTableProps {
  title?: string
  items?: PropRowProps[]
  data?: PropRowProps[]
  props?: PropRowProps[]
  rows?: PropRowProps[]
  children?: React.ReactNode
}

export function PropsTable({
  title,
  items,
  data,
  props: rawProps,
  rows,
  children,
}: PropsTableProps) {
  const propRows = items || data || rawProps || rows

  return (
    <div className="space-y-3 my-6">
      <div className="w-full overflow-x-auto rounded-lg border border-border custom-scrollbar bg-card shadow-xs">
        <table className="w-full min-w-[650px] text-sm text-left border-collapse">
          <thead className="bg-muted/50 border-b border-border text-foreground font-semibold">
            <tr>
              <th className="w-[25%] px-4 py-3 whitespace-nowrap">Prop</th>
              <th className="w-[35%] px-4 py-3 whitespace-nowrap">Type</th>
              <th className="w-[15%] px-4 py-3 whitespace-nowrap">Default</th>
              <th className="w-[25%] px-4 py-3 whitespace-nowrap">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-foreground/80">
            {Array.isArray(propRows) && propRows.length > 0
              ? propRows.map((row, idx) => (
                  <PropRow key={row.prop || row.name || idx} {...row} />
                ))
              : children}
          </tbody>
        </table>
      </div>
    </div>
  )
}
