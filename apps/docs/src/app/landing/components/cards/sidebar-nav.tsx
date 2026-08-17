'use client'

import * as React from 'react'
import {
  BarChart2,
  ArrowLeftRight,
  TrendingUp,
  Wallet,
  PieChart,
  FileText,
  CreditCard,
  ScrollText,
  Target,
  CalendarDays,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Activity,
  Globe,
  User,
  Bell,
  Shield,
  Palette,
} from 'lucide-react'
import { Card, cn } from 'vibe-ui'

interface SidebarItemProps {
  icon: React.ComponentType<any>
  label: string
  isActive?: boolean
}

function SidebarItem({ icon: Icon, label, isActive }: SidebarItemProps) {
  return (
    <button
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium select-none cursor-pointer transition-all duration-150 text-left',
        isActive
          ? 'bg-muted text-foreground font-semibold'
          : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground',
      )}
    >
      <Icon className="size-3.5 shrink-0" />
      {label}
    </button>
  )
}

function SidebarSection({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={cn('w-full p-3 space-y-2', className)}>
      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/70 pl-1 select-none">
        {label}
      </span>
      <div className="flex flex-col gap-0.5">{children}</div>
    </Card>
  )
}

export function SidebarNav() {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      <SidebarSection label="Planning">
        <SidebarItem icon={FileText} label="Documents" />
        <SidebarItem icon={CreditCard} label="Budget" />
        <SidebarItem icon={ScrollText} label="Reports" />
        <SidebarItem icon={Target} label="Goals" />
        <SidebarItem icon={CalendarDays} label="Calendar" />
      </SidebarSection>

      <SidebarSection label="Support">
        <SidebarItem icon={HelpCircle} label="Help Center" />
        <SidebarItem icon={BookOpen} label="Docs" />
        <SidebarItem icon={MessageSquare} label="Contact Us" />
        <SidebarItem icon={Activity} label="Status" />
        <SidebarItem icon={Globe} label="Community" />
      </SidebarSection>

      <SidebarSection label="Overview">
        <SidebarItem icon={BarChart2} label="Analytics" isActive />
        <SidebarItem icon={ArrowLeftRight} label="Transactions" />
        <SidebarItem icon={TrendingUp} label="Investments" />
        <SidebarItem icon={Wallet} label="Accounts" />
        <SidebarItem icon={PieChart} label="Spending" />
      </SidebarSection>

      <SidebarSection label="Account">
        <SidebarItem icon={User} label="Profile" />
        <SidebarItem icon={CreditCard} label="Billing" isActive />
        <SidebarItem icon={Bell} label="Notifications" />
        <SidebarItem icon={Shield} label="Security" />
        <SidebarItem icon={Palette} label="Appearance" />
      </SidebarSection>
    </div>
  )
}
