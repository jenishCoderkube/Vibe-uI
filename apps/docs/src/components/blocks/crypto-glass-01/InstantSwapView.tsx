import React from 'react'
import { ArrowDown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

interface InstantSwapViewProps {
  swapAmount: string
  setSwapAmount: (amount: string) => void
  swapFrom: string
  setSwapFrom: (asset: string) => void
  swapTo: string
  setSwapTo: (asset: string) => void
  getSwapOutput: () => string
  swapSuccess: boolean
  isSwapping: boolean
  handleSwapExecute: () => void
}

export default function InstantSwapView({
  swapAmount,
  setSwapAmount,
  swapFrom,
  setSwapFrom,
  swapTo,
  setSwapTo,
  getSwapOutput,
  swapSuccess,
  isSwapping,
  handleSwapExecute
}: InstantSwapViewProps) {
  return (
    <Card variant="glass" className="max-w-xl mx-auto p-6 bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 space-y-6 animate-in fade-in duration-200 text-left">
      <h3 className="text-sm font-bold uppercase text-slate-800 dark:text-slate-300 text-left">Instant Liquidity Swap</h3>
      
      <div className="space-y-4">
        <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-slate-900/5 dark:bg-white/[0.01] flex items-center justify-between">
          <div className="space-y-1 text-left">
            <label className="text-[10px] text-slate-500 uppercase">Input Amount</label>
            <Input type="number" value={swapAmount} onChange={(e) => setSwapAmount(e.target.value)} className="w-32 bg-transparent text-lg font-bold text-slate-900 dark:text-white shadow-none h-8 p-0" />
          </div>
          <Select value={swapFrom} onValueChange={setSwapFrom}>
            <SelectTrigger className="w-20 h-8 bg-white/50 dark:bg-white/5 border-slate-200/60 dark:border-white/10 text-xs text-slate-900 dark:text-white">
              <SelectValue placeholder="Asset" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
              <SelectItem value="ETH">ETH</SelectItem>
              <SelectItem value="SOL">SOL</SelectItem>
              <SelectItem value="BTC">BTC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-slate-950 flex items-center justify-center shrink-0">
          <ArrowDown className="size-4 text-sky-500 dark:text-sky-400" />
        </div>

        <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-slate-900/5 dark:bg-white/[0.01] flex items-center justify-between">
          <div className="space-y-1 text-left">
            <label className="text-[10px] text-slate-500 uppercase">Received Output</label>
            <div className="text-lg font-extrabold text-slate-900 dark:text-white">{getSwapOutput()}</div>
          </div>
          <Select value={swapTo} onValueChange={setSwapTo}>
            <SelectTrigger className="w-20 h-8 bg-white/50 dark:bg-white/5 border-slate-200/60 dark:border-white/10 text-xs text-slate-900 dark:text-white">
              <SelectValue placeholder="Asset" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
              <SelectItem value="USDC">USDC</SelectItem>
              <SelectItem value="SOL">SOL</SelectItem>
              <SelectItem value="ETH">ETH</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {swapSuccess ? (
        <div className="h-9 w-full rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">Successfully swapped {swapAmount} {swapFrom}!</div>
      ) : (
        <Button onClick={handleSwapExecute} disabled={isSwapping} variant="liquid-glass" className="h-9 text-xs font-bold w-full text-slate-900 dark:text-white">
          {isSwapping ? 'Executing Swapping...' : 'Execute Swap'}
        </Button>
      )}
    </Card>
  )
}
