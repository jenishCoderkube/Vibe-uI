'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  Bell,
  Search,
  SlidersHorizontal,
  X,
  Gauge,
  Activity,
  Percent,
  ShieldCheck,
  Settings
} from 'lucide-react'

// Local UI components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

// Local Sub-Components
import Sidebar from './Sidebar'
import SettingsDrawer from './SettingsDrawer'
import DashboardView from './DashboardView'
import AssetsRatesView from './AssetsRatesView'
import YieldStakingView from './YieldStakingView'
import InstantSwapView from './InstantSwapView'

const COINS = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$64,281.50',
    change: '+2.4%',
    isPositive: true,
    holdings: '0.24 BTC',
    value: '$15,427.56',
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$3,450.20',
    change: '+4.1%',
    isPositive: true,
    holdings: '2.15 ETH',
    value: '$7,417.93',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: '$142.80',
    change: '-1.2%',
    isPositive: false,
    holdings: '12.4 SOL',
    value: '$1,770.72',
    color: 'from-cyan-400 to-emerald-400'
  }
]

const STAKING_POOLS = [
  {
    token: 'SOL Liquid Staking',
    apr: '7.8% APR',
    staked: '45.2 SOL',
    rewards: '+2.14 SOL',
    period: 'Flexible',
    efficiency: '99.2%'
  },
  {
    token: 'ETH Validator Pool',
    apr: '5.2% APR',
    staked: '1.5 ETH',
    rewards: '+0.038 ETH',
    period: '30 Days Lock',
    efficiency: '98.7%'
  },
  {
    token: 'USDC High-Yield',
    apr: '9.4% APR',
    staked: '500.0 USDC',
    rewards: '+12.45 USDC',
    period: 'Flexible',
    efficiency: '100.0%'
  }
]

export default function CryptoGlass01Page() {
  const [stakingTab, setStakingTab] = useState('pools')
  const [sidebarActive, setSidebarActive] = useState('Dashboard')
  
  // Interactive UI panels
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [mobileSidebar, setMobileSidebar] = useState(false)

  // Swap panel state
  const [swapFrom, setSwapFrom] = useState('ETH')
  const [swapTo, setSwapTo] = useState('USDC')
  const [swapAmount, setSwapAmount] = useState('1.5')
  const [isSwapping, setIsSwapping] = useState(false)
  const [swapSuccess, setSwapSuccess] = useState(false)

  // Calculator state
  const [calcAmount, setCalcAmount] = useState('1000')
  const [calcPeriod, setCalcPeriod] = useState('365')

  // Settings states
  const [rpcNode, setRpcNode] = useState('solana-mainnet')
  const [gasThreshold, setGasThreshold] = useState(30)
  const [autoCompound, setAutoCompound] = useState(true)

  // Mock Notifications list
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Staking Rewards Deposited',
      desc: 'Successfully claimed +2.14 SOL liquid staking reward.',
      time: '5m ago',
      unread: true,
      type: 'reward'
    },
    {
      id: '2',
      title: 'Solana Price Alert',
      desc: 'SOL price moved past resistance of $142.00 (+4.1%).',
      time: '1h ago',
      unread: true,
      type: 'info'
    },
    {
      id: '3',
      title: 'Validator Node Outage',
      desc: 'Backup RPC nodes swapped due to network latency on node-8.',
      time: '4h ago',
      unread: false,
      type: 'warning'
    }
  ])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  // Swap calculation logic
  const getSwapOutput = () => {
    const amt = parseFloat(swapAmount) || 0
    if (swapFrom === 'ETH' && swapTo === 'USDC') return (amt * 3450.2).toFixed(2)
    if (swapFrom === 'ETH' && swapTo === 'SOL') return (amt * 24.16).toFixed(2)
    if (swapFrom === 'SOL' && swapTo === 'USDC') return (amt * 142.8).toFixed(2)
    if (swapFrom === 'SOL' && swapTo === 'ETH') return (amt / 24.16).toFixed(4)
    if (swapFrom === 'BTC' && swapTo === 'USDC') return (amt * 64281.5).toFixed(2)
    return (amt * 1.01).toFixed(2)
  }

  const handleSwapExecute = () => {
    setIsSwapping(true)
    setTimeout(() => {
      setIsSwapping(false)
      setSwapSuccess(true)
      setTimeout(() => setSwapSuccess(false), 3000)
    }, 1500)
  }

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })))
  }

  const calculatedReturn = (parseFloat(calcAmount) * (0.082) * (parseInt(calcPeriod) / 365)).toFixed(2)
  const unreadCount = notifications.filter(n => n.unread).length

  // Ref to detect clicks outside notifications list
  const notificationContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showNotifications) return
    function handleDocumentClick(e: MouseEvent) {
      if (
        notificationContainerRef.current && 
        !notificationContainerRef.current.contains(e.target as Node)
      ) {
        setShowNotifications(false)
      }
    }
    const timer = setTimeout(() => {
      document.addEventListener('click', handleDocumentClick)
    }, 0)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [showNotifications])

  return (
    <div className="relative w-full min-h-screen bg-slate-50 dark:bg-[#090b11] text-slate-900 dark:text-slate-100 font-sans flex flex-col transition-colors duration-300">
      
      {/* 🔮 Fluid Animating Blobs behind Glass */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] animate-pulse" />
        <div 
          className="absolute top-[20%] right-[-5%] h-[550px] w-[550px] rounded-full bg-purple-500/15 dark:bg-purple-600/10 blur-[130px]"
          style={{ animation: 'float 25s ease-in-out infinite' }}
        />
        <div className="absolute bottom-[-10%] left-[20%] h-[450px] w-[450px] rounded-full bg-emerald-500/15 dark:bg-emerald-600/10 blur-[100px] animate-pulse" />
      </div>

      {/* 🧭 Left Sidebar Navigation */}
      <Sidebar 
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSidebar}
      />

      {/* 📂 Main Content Pane */}
      <div className="flex-1 min-w-0 flex flex-col relative z-10 lg:pl-64 w-full">
        
        {/* 🚀 Header */}
        <header className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200/60 dark:border-white/10 bg-slate-100/20 dark:bg-[#090b11]/30 backdrop-blur-md relative z-20">
          {/* Mobile Sidebar Trigger Toggle */}
          <button 
            onClick={() => setMobileSidebar(!mobileSidebar)}
            className="lg:hidden h-9 w-9 rounded-lg bg-slate-900/5 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
          >
            <SlidersHorizontal className="size-4" />
          </button>

          {/* Search asset input bar */}
          <div className="relative max-w-xs flex-1 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input 
              type="text" 
              placeholder="Search assets..." 
              className="h-9 w-full pl-9 pr-4 bg-white/[0.02] dark:bg-white/[0.04] border-slate-200/60 dark:border-white/10 text-xs focus:outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-2.5 ml-auto relative">
            {/* 🔔 Notifications Button */}
            <div ref={notificationContainerRef} className="relative">
              <div className="relative inline-block">
                <Button 
                  onClick={() => {
                    setShowNotifications(!showNotifications)
                    setShowSettings(false)
                  }} 
                  variant="liquid-glass" 
                  size="icon" 
                  className="h-9 w-9 rounded-lg animate-none"
                >
                  <Bell className="size-4" />
                </Button>
                {unreadCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-sky-500 border border-slate-200 dark:border-[#090b11] text-[9px] font-extrabold text-white flex items-center justify-center animate-bounce z-10 pointer-events-none">
                    {unreadCount}
                  </span>
                )}
              </div>

              {/* Notification glassmorphic drop-down list */}
              {showNotifications && (
                <div className="absolute right-0 top-11 w-80 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/95 dark:bg-[#090b11]/80 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15),_inset_0_1px_1px_rgba(255,255,255,0.15)] p-4 z-[100] space-y-3 animate-in fade-in zoom-in-95 duration-150 text-left">
                  <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-white/5 pb-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Bell className="size-3.5 text-sky-400" /> Notifications
                    </span>
                    <button 
                      onClick={markAllRead} 
                      className="text-[9px] font-bold text-sky-500 dark:text-sky-400 hover:underline cursor-pointer"
                    >
                      Mark all read
                    </button>
                  </div>

                  <div className="max-h-60 overflow-y-auto space-y-2.5 pr-1">
                    {notifications.map((notif, idx) => (
                      <div key={idx} className={`p-2.5 rounded-xl border transition-all ${notif.unread ? 'bg-slate-900/5 dark:bg-white/[0.03] border-slate-200/60 dark:border-white/10' : 'bg-transparent border-transparent opacity-65'}`}>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{notif.title}</h4>
                          <span className="text-[8px] text-slate-500 font-semibold shrink-0">{notif.time}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">{notif.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200/60 dark:border-white/5 pt-2 flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500">
                    <span>Clean log records</span>
                    <button 
                      onClick={() => setShowNotifications(false)}
                      className="h-5 w-5 rounded-md hover:bg-slate-900/5 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer text-slate-550 dark:text-slate-400"
                    >
                      <X className="size-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ⚙️ Settings Toggle Button */}
            <Button 
              onClick={() => {
                setShowSettings(!showSettings)
                setShowNotifications(false)
              }} 
              variant="liquid-glass" 
              size="icon" 
              className="h-9 w-9 rounded-lg"
            >
              <Settings className="size-4" />
            </Button>
          </div>
        </header>

        {/* 🟢 Live Network Stats Strip */}
        <section className="flex items-center justify-between gap-6 px-6 py-2.5 border-b border-slate-200/60 dark:border-white/10 bg-slate-100/10 dark:bg-[#090b11]/20 text-[11px] text-slate-500 dark:text-slate-400 select-none overflow-x-auto no-scrollbar whitespace-nowrap transition-colors duration-300">
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-1.5">
              <Gauge className="size-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>ETH Gas:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">14 Gwei</span>
              <Badge variant="glow" className="text-emerald-500 dark:text-emerald-450 bg-emerald-500/10 border-transparent text-[9px] py-0.5 px-1.5 font-bold">Low</Badge>
            </div>

            <div className="flex items-center gap-1.5">
              <Activity className="size-3.5 text-purple-500 dark:text-purple-400" />
              <span>Solana Ping:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">18 ms</span>
              <Badge variant="glow" className="text-emerald-500 dark:text-emerald-450 bg-emerald-500/10 border-transparent text-[9px] py-0.5 px-1.5 font-bold">Optimal</Badge>
            </div>

            <div className="flex items-center gap-1.5">
              <Percent className="size-3.5 text-amber-600 dark:text-amber-550" />
              <span>BTC Mempool:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">42 sat/vB</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-550 dark:text-emerald-400 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-xs flex items-center gap-1">
              <ShieldCheck className="size-3" /> Core RPC Active
            </span>
          </div>
        </section>

        {/* Settings modal configuration overlay drawer */}
        <SettingsDrawer 
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          rpcNode={rpcNode}
          setRpcNode={setRpcNode}
          gasThreshold={gasThreshold}
          setGasThreshold={setGasThreshold}
          autoCompound={autoCompound}
          setAutoCompound={setAutoCompound}
        />

        {/* Main Content Panels routing */}
        <main className="flex-1 p-6 md:p-8">
          {sidebarActive === 'Dashboard' && (
            <DashboardView 
              COINS={COINS}
              STAKING_POOLS={STAKING_POOLS}
              handleMouseMove={handleMouseMove}
              stakingTab={stakingTab}
              setStakingTab={setStakingTab}
              calcAmount={calcAmount}
              setCalcAmount={setCalcAmount}
              calculatedReturn={calculatedReturn}
              swapFrom={swapFrom}
              setSwapFrom={setSwapFrom}
              swapTo={swapTo}
              setSwapTo={setSwapTo}
              swapAmount={swapAmount}
              setSwapAmount={setSwapAmount}
              isSwapping={isSwapping}
              swapSuccess={swapSuccess}
              handleSwapExecute={handleSwapExecute}
              getSwapOutput={getSwapOutput}
            />
          )}

          {sidebarActive === 'Assets & Rates' && (
            <AssetsRatesView COINS={COINS} />
          )}

          {sidebarActive === 'Yield Staking' && (
            <YieldStakingView STAKING_POOLS={STAKING_POOLS} />
          )}

          {sidebarActive === 'Instant Swap' && (
            <InstantSwapView 
              swapAmount={swapAmount}
              setSwapAmount={setSwapAmount}
              swapFrom={swapFrom}
              setSwapFrom={setSwapFrom}
              swapTo={swapTo}
              setSwapTo={setSwapTo}
              getSwapOutput={getSwapOutput}
              swapSuccess={swapSuccess}
              isSwapping={isSwapping}
              handleSwapExecute={handleSwapExecute}
            />
          )}
        </main>
      </div>

      {/* CSS Floating animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-40px) translateX(30px) scale(1.08); }
        }
      `}</style>
    </div>
  )
}
