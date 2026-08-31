import React from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

interface SettingsDrawerProps {
  showSettings: boolean
  setShowSettings: (show: boolean) => void
  rpcNode: string
  setRpcNode: (node: string) => void
  gasThreshold: number
  setGasThreshold: (threshold: number) => void
  autoCompound: boolean
  setAutoCompound: (compound: boolean) => void
}

export default function SettingsDrawer({
  showSettings,
  setShowSettings,
  rpcNode,
  setRpcNode,
  gasThreshold,
  setGasThreshold,
  autoCompound,
  setAutoCompound
}: SettingsDrawerProps) {
  if (!showSettings) return null

  return (
    <div 
      onClick={() => setShowSettings(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 dark:bg-slate-955/45 backdrop-blur-[2px] p-4 animate-in fade-in duration-200"
    >
      <Card 
        onClick={(e) => e.stopPropagation()}
        variant="glass"
        className="w-full max-w-md rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/90 dark:bg-[#090b11]/30 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15),_inset_0_1px_1px_rgba(255,255,255,0.15)] p-6 relative flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 text-left"
      >
        <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-white/10 pb-3">
          <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-sky-400" /> Workspace Settings
          </span>
          <button 
            onClick={() => setShowSettings(false)}
            className="h-6 w-6 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer text-slate-500 dark:text-slate-400"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Settings Controls */}
        <div className="space-y-4 py-2 text-left">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">RPC Server Node</label>
            <Select value={rpcNode} onValueChange={setRpcNode}>
              <SelectTrigger className="w-full h-9 bg-slate-900/5 dark:bg-white/[0.02] hover:bg-slate-900/10 dark:hover:bg-white/[0.06] border-slate-200/60 dark:border-white/10 text-xs text-slate-900 dark:text-white backdrop-blur-md transition-all">
                <SelectValue placeholder="Select RPC Server" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                <SelectItem value="solana-mainnet">Solana Mainnet (Default)</SelectItem>
                <SelectItem value="alchemy-infura">Alchemy Secure Gateway</SelectItem>
                <SelectItem value="localhost">Localhost DevNode (127.0.0.1)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Gas Fee Cap Alert</label>
              <span className="text-xs text-sky-500 dark:text-sky-400 font-semibold">{gasThreshold} Gwei</span>
            </div>
            <Slider 
              min={10} 
              max={150} 
              step={1} 
              value={[gasThreshold]} 
              onValueChange={(val) => setGasThreshold(val[0])}
              variant="glass"
              className="w-full"
            />
            <div className="flex justify-between text-[9px] text-slate-500 font-bold">
              <span>10 Gwei</span>
              <span>150 Gwei</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-left space-y-0.5">
              <h5 className="text-xs font-bold text-slate-900 dark:text-white">Auto-Compound Yield</h5>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Reinvest reward tokens back to validator nodes daily.</p>
            </div>
            <Switch checked={autoCompound} onCheckedChange={setAutoCompound} />
          </div>
        </div>

        <div className="border-t border-slate-200/60 dark:border-white/10 pt-4 flex justify-end gap-2.5">
          <Button 
            onClick={() => setShowSettings(false)} 
            variant="outline" 
            className="h-9 text-xs font-bold px-4 hover:bg-slate-900/5 dark:hover:bg-white/5 border-slate-200/60 dark:border-white/10"
          >
            Cancel
          </Button>
          <Button 
            onClick={() => setShowSettings(false)} 
            variant="liquid-glass" 
            className="h-9 text-xs font-bold px-4"
          >
            Apply Settings
          </Button>
        </div>
      </Card>
    </div>
  )
}
