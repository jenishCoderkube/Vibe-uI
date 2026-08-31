import React from 'react'
import {
  TrendingUp,
  Info,
  Percent,
  ArrowUpDown,
  ArrowDown
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

interface CoinData {
  name: string
  symbol: string
  price: string
  change: string
  isPositive: boolean
  holdings: string
  value: string
  color: string
}

interface StakingPool {
  token: string
  apr: string
  staked: string
  rewards: string
  period: string
  efficiency: string
}

interface DashboardViewProps {
  COINS: CoinData[]
  STAKING_POOLS: StakingPool[]
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  stakingTab: string
  setStakingTab: (tab: string) => void
  calcAmount: string
  setCalcAmount: (amount: string) => void
  calculatedReturn: string
  swapFrom: string
  setSwapFrom: (asset: string) => void
  swapTo: string
  setSwapTo: (asset: string) => void
  swapAmount: string
  setSwapAmount: (amount: string) => void
  isSwapping: boolean
  swapSuccess: boolean
  handleSwapExecute: () => void
  getSwapOutput: () => string
}

export default function DashboardView({
  COINS,
  STAKING_POOLS,
  handleMouseMove,
  stakingTab,
  setStakingTab,
  calcAmount,
  setCalcAmount,
  calculatedReturn,
  swapFrom,
  setSwapFrom,
  swapTo,
  setSwapTo,
  swapAmount,
  setSwapAmount,
  isSwapping,
  swapSuccess,
  handleSwapExecute,
  getSwapOutput
}: DashboardViewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column: Balance Overview & Yield & Swap */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        
        {/* 💎 Interactive Balance Card */}
        <Card 
          variant="glass"
          onMouseMove={handleMouseMove}
          className="relative overflow-hidden group p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06),_inset_0_1px_1px_rgba(255,255,255,0.45),_inset_0_-1px_2px_rgba(0,0,0,0.25)] bg-white/40 dark:bg-white/[0.03] border-slate-200/60 dark:border-white/15 text-left"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(280px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.1),transparent_80%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none z-0" />

          <div className="relative z-10 flex flex-wrap justify-between items-start gap-4">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Net Asset Value</span>
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">$24,616.21</h2>
                <Badge variant="glow" className="text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-transparent text-xs py-0.5 px-1.5 font-semibold flex items-center">
                  <TrendingUp className="size-3 mr-0.5" /> +12.4%
                </Badge>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="liquid-glass" className="h-8 text-xs font-bold px-3">
                Deposit
              </Button>
              <Button variant="liquid-glass" className="h-8 text-xs font-bold px-3 bg-slate-900/5 dark:bg-white/15 hover:bg-slate-900/10 dark:hover:bg-white/25 text-slate-900 dark:text-white">
                Send
              </Button>
            </div>
          </div>

          {/* 📊 Vector Trend Chart inside Glass */}
          <div className="relative z-10 mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Monitored Performance (7D)</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
                <Info className="size-3 text-slate-400 dark:text-slate-500" /> Auto-updates every 10s
              </span>
            </div>

            <div className="w-full h-36">
              <svg className="w-full h-full text-sky-500 dark:text-sky-400" viewBox="0 0 500 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(56, 189, 248)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(56, 189, 248)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M 0 90 Q 75 70 125 100 T 250 40 T 375 70 T 500 20 L 500 120 L 0 120 Z" fill="url(#chart-glow)" />
                <path d="M 0 90 Q 75 70 125 100 T 250 40 T 375 70 T 500 20" fill="none" stroke="currentColor" strokeWidth="2.5" className="drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
        </Card>

        {/* Staking Pools / Yield Farming Card */}
        <Card variant="glass" className="p-5 bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 flex flex-col gap-4 text-left">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <h3 className="text-sm font-bold tracking-tight uppercase text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
              <Percent className="size-4 text-emerald-500 dark:text-emerald-400" /> Yield Optimizations
            </h3>
            <div className="flex gap-1 bg-slate-900/5 dark:bg-white/5 p-0.5 rounded-lg border border-slate-200/60 dark:border-white/5">
              <button 
                onClick={() => setStakingTab('pools')}
                className={`text-[10px] px-2 py-1 rounded font-semibold transition-all cursor-pointer ${stakingTab === 'pools' ? 'bg-white/80 dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
              >
                Active Pools
              </button>
              <button 
                onClick={() => setStakingTab('calculator')}
                className={`text-[10px] px-2 py-1 rounded font-semibold transition-all cursor-pointer ${stakingTab === 'calculator' ? 'bg-white/80 dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
              >
                APY Calculator
              </button>
            </div>
          </div>

          {stakingTab === 'pools' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STAKING_POOLS.map((pool, idx) => (
                <Card key={idx} variant="glass" className="p-4 bg-white/30 dark:bg-white/[0.01] hover:bg-white/50 dark:hover:bg-white/[0.03] border-slate-200/60 dark:border-white/5 flex flex-col justify-between min-h-[140px] shadow-none">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{pool.token}</span>
                    <Badge variant="glow" className="text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-transparent text-[10px] font-bold py-0.5 px-1.5">{pool.apr}</Badge>
                  </div>
                  <div className="space-y-1 mt-4 text-[10px] text-slate-500 dark:text-slate-400">
                    <div className="flex justify-between"><span>My Deposit:</span><span className="font-semibold text-slate-800 dark:text-slate-200">{pool.staked}</span></div>
                    <div className="flex justify-between"><span>Rewards:</span><span className="font-semibold text-emerald-500 dark:text-emerald-400">{pool.rewards}</span></div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-900/5 dark:bg-white/[0.01] border border-slate-200/60 dark:border-white/5 flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Staking Amount ($)</label>
                  <Input type="number" value={calcAmount} onChange={(e) => setCalcAmount(e.target.value)} className="h-9 w-full px-3 bg-white/50 dark:bg-white/[0.03] border-slate-200/65 dark:border-white/10 text-xs text-slate-900 dark:text-white" />
                </div>
              </div>
              <Card variant="glass" className="w-full md:w-56 p-4 text-center bg-white/50 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 flex flex-col justify-between shadow-none">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">Estimated Yield (8.2% APY)</span>
                <h4 className="text-2xl font-extrabold text-emerald-500 dark:text-emerald-400 mt-2">${calculatedReturn}</h4>
              </Card>
            </div>
          )}
        </Card>

        {/* Swap Card */}
        <Card variant="glass" className="p-5 bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 flex flex-col gap-4 text-left">
          <h3 className="text-sm font-bold tracking-tight uppercase text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
            <ArrowUpDown className="size-4 text-sky-500 dark:text-sky-400" /> Instant Exchange Swap
          </h3>
          
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 w-full p-3 rounded-xl border border-slate-200/60 dark:border-white/5 bg-slate-900/5 dark:bg-white/[0.01] flex items-center justify-between">
              <Input type="number" value={swapAmount} onChange={(e) => setSwapAmount(e.target.value)} className="w-20 bg-transparent border-none text-sm font-bold text-slate-900 dark:text-white shadow-none h-8 p-0" />
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

            <div className="h-8 w-8 rounded-full border border-slate-200/60 dark:border-white/10 bg-white dark:bg-slate-950 flex items-center justify-center shrink-0 md:rotate-90">
              <ArrowDown className="size-4 text-sky-500 dark:text-sky-400" />
            </div>

            <div className="flex-1 w-full p-3 rounded-xl border border-slate-200/60 dark:border-white/5 bg-slate-900/5 dark:bg-white/[0.01] flex items-center justify-between">
              <div className="text-sm font-extrabold text-slate-800 dark:text-slate-200">{getSwapOutput()}</div>
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

          <Button onClick={handleSwapExecute} disabled={isSwapping} variant="liquid-glass" className="h-9 text-xs font-bold text-slate-900 dark:text-white">
            {isSwapping ? 'Executing Swapping...' : 'Execute Swap'}
          </Button>
        </Card>
      </div>

      {/* Right Column: Asset List & Activity */}
      <div className="flex flex-col gap-6 text-left">
        {/* My Assets Ledger */}
        <Card variant="glass" className="p-5 bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase text-slate-800 dark:text-slate-300">My Assets</h3>
          </div>
          <div className="flex flex-col gap-3">
            {COINS.map((coin, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/5 dark:bg-white/[0.02] hover:bg-slate-900/10 dark:hover:bg-white/[0.05] border border-slate-200/65 dark:border-white/5 select-none">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-tr ${coin.color} flex items-center justify-center font-bold text-xs text-white`}>{coin.symbol}</div>
                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-slate-800 dark:text-white">{coin.name}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{coin.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="glow" className={`text-[10px] font-bold py-0.5 px-1.5 border-transparent ${coin.isPositive ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-red-500/10 text-red-650 dark:text-red-405'}`}>{coin.change}</Badge>
                  <p className="text-[10px] text-slate-800 dark:text-slate-300 font-semibold mt-1">{coin.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Donut Chart allocation */}
        <Card variant="glass" className="p-5 bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase text-slate-800 dark:text-slate-300">Asset Allocation</h3>
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="62.7 37.3" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#8b5cf6" strokeWidth="3.5" strokeDasharray="30.1 69.9" strokeDashoffset="-62.7" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#06b6d4" strokeWidth="3.5" strokeDasharray="7.2 92.8" strokeDashoffset="-92.8" />
              </svg>
            </div>
            <div className="flex-1 space-y-1.5 text-xs text-slate-500 dark:text-slate-450">
              <div className="flex justify-between"><span>BTC</span><span className="font-semibold text-slate-800 dark:text-slate-200">62.7%</span></div>
              <div className="flex justify-between"><span>ETH</span><span className="font-semibold text-slate-800 dark:text-slate-200">30.1%</span></div>
              <div className="flex justify-between"><span>SOL</span><span className="font-semibold text-slate-800 dark:text-slate-200">7.2%</span></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
