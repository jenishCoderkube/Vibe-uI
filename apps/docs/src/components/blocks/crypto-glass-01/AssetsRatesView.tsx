import React from 'react'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table'

interface CoinData {
  name: string
  symbol: string
  price: string
  change: string
  isPositive: boolean
  holdings: string
  value: string
}

interface AssetsRatesViewProps {
  COINS: CoinData[]
}

export default function AssetsRatesView({ COINS }: AssetsRatesViewProps) {
  return (
    <Card variant="glass" className="p-6 bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 flex flex-col gap-4 animate-in fade-in duration-200 text-left">
      <h3 className="text-sm font-bold uppercase text-slate-800 dark:text-slate-300 text-left">Market Assets & Ledger Rates</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-200/60 dark:border-white/10 hover:bg-transparent">
              <TableHead className="py-3 px-2 text-slate-500 dark:text-slate-400">Asset Name</TableHead>
              <TableHead className="py-3 px-2 text-slate-500 dark:text-slate-400">Price</TableHead>
              <TableHead className="py-3 px-2 text-slate-500 dark:text-slate-400">24h Change</TableHead>
              <TableHead className="py-3 px-2 text-slate-500 dark:text-slate-400">My Balance</TableHead>
              <TableHead className="py-3 px-2 text-slate-500 dark:text-slate-400">Value ($)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-slate-200/60 dark:divide-white/5">
            {COINS.map((c, idx) => (
              <TableRow key={idx} className="hover:bg-slate-900/5 dark:hover:bg-white/[0.02] border-transparent transition-colors">
                <TableCell className="py-3 px-2 font-bold text-slate-900 dark:text-white text-left">{c.name} ({c.symbol})</TableCell>
                <TableCell className="py-3 px-2 text-left text-slate-800 dark:text-slate-350">{c.price}</TableCell>
                <TableCell className={`py-3 px-2 font-bold text-left ${c.isPositive ? 'text-emerald-550 dark:text-emerald-400' : 'text-red-550 dark:text-red-400'}`}>{c.change}</TableCell>
                <TableCell className="py-3 px-2 text-left text-slate-800 dark:text-slate-350">{c.holdings}</TableCell>
                <TableCell className="py-3 px-2 font-bold text-slate-900 dark:text-white text-left">{c.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
