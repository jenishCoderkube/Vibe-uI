import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface StakingPool {
  token: string
  apr: string
  staked: string
  rewards: string
  period: string
  efficiency: string
}

interface YieldStakingViewProps {
  STAKING_POOLS: StakingPool[]
}

export default function YieldStakingView({ STAKING_POOLS }: YieldStakingViewProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <h3 className="text-sm font-bold uppercase text-slate-800 dark:text-slate-300 text-left">Staking Validator Node Registry</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STAKING_POOLS.map((p, idx) => (
          <Card key={idx} variant="glass" className="p-5 bg-white/40 dark:bg-white/[0.01] border-slate-200/60 dark:border-white/15 flex flex-col justify-between min-h-[160px] shadow-none text-left">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.token}</h4>
              <Badge variant="glow" className="text-emerald-500 dark:text-emerald-455 bg-emerald-500/10 border-transparent text-xs font-bold py-0.5 px-2">{p.apr}</Badge>
            </div>
            <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-450 pt-4 text-left">
              <div className="flex justify-between"><span>My Stake:</span><span className="font-semibold text-slate-800 dark:text-slate-200">{p.staked}</span></div>
              <div className="flex justify-between"><span>Node Efficiency:</span><span className="font-semibold text-sky-500 dark:text-sky-400">{p.efficiency}</span></div>
            </div>
            <Button variant="liquid-glass" className="h-8 text-xs font-bold w-full mt-4 text-slate-900 dark:text-white">Compound Yield</Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
