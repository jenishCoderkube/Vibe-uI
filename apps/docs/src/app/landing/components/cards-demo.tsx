'use client'

import * as React from 'react'
import { UIElements } from './cards/ui-elements'
import { SidebarNav } from './cards/sidebar-nav'
import { SavingsTargets } from './cards/savings-targets'
import { ContributionHistory } from './cards/contribution-history'
import { ClaimableBalance } from './cards/claimable-balance'
import { DividendIncome } from './cards/dividend-income'
import { NewMilestone } from './cards/new-milestone'
import { PayoutThreshold } from './cards/payout-threshold'
import { AccountAccess } from './cards/account-access'
import { QrConnect } from './cards/qr-connect'
import { NewChat } from './cards/new-chat'
import { Payments } from './cards/payments'
import { EmptyDistributeTrack } from './cards/empty-distribute-track'
import { NotificationSettings } from './cards/notification-settings'
import { TransferFunds } from './cards/transfer-funds'
import { AnalyticsCard } from './cards/analytics-card'
import { PowerUsage } from './cards/power-usage'
import { VerificationCodeCard } from './cards/verification-code'
import { BookingCard } from './cards/booking-card'
import { TeamMembers } from './cards/team-members'
import { FileUploadCard } from './cards/file-upload'
import { CommandPaletteCard } from './cards/command-palette'
import { AccordionDemoCard } from './cards/accordion-card'
import { SliderDemoCard } from './cards/slider-card'
import { TabsDemoCard } from './cards/tabs-card'
import { CarouselDemoCard } from './cards/carousel-card'
import { SparklesDemoCard } from './cards/sparkles-card'
import { ProgressDemoCard } from './cards/progress-card'

export function CardsDemo() {
  return (
    <section className="hidden md:block w-full border-t border-border/40 py-16 dark:bg-background">
      <div className="relative">
        
        {/* Simple native CSS Masonry layout for auto-filling vertical space */}
        <div className="mx-auto w-full px-4 md:px-8 columns-1 md:columns-2 lg:columns-3 2xl:columns-4 gap-8 pb-16">
          
          <div className="break-inside-avoid mb-8"><UIElements /></div>
          <div className="break-inside-avoid mb-8"><SidebarNav /></div>
          <div className="break-inside-avoid mb-8"><SavingsTargets /></div>
          <div className="break-inside-avoid mb-8"><PayoutThreshold /></div>
          <div className="break-inside-avoid mb-8"><AnalyticsCard /></div>
          <div className="break-inside-avoid mb-8"><CommandPaletteCard /></div>
          <div className="break-inside-avoid mb-8"><AccountAccess /></div>
          
          <div className="break-inside-avoid mb-8"><BookingCard /></div>
          <div className="break-inside-avoid mb-8"><TeamMembers /></div>
          <div className="break-inside-avoid mb-8"><ContributionHistory /></div>
          <div className="break-inside-avoid mb-8"><DividendIncome /></div>
          <div className="break-inside-avoid mb-8"><ClaimableBalance /></div>
          
          {/* These will naturally fall into the later columns */}
          <div className="break-inside-avoid mb-8"><QrConnect /></div>
          <div className="break-inside-avoid mb-8"><NewChat /></div>
          <div className="break-inside-avoid mb-8"><Payments /></div>
          
          <div className="break-inside-avoid mb-8"><FileUploadCard /></div>
          <div className="break-inside-avoid mb-8"><AccordionDemoCard /></div>
          <div className="break-inside-avoid mb-8"><SliderDemoCard /></div>
          <div className="break-inside-avoid mb-8"><TabsDemoCard /></div>
          
          <div className="break-inside-avoid mb-8"><TransferFunds /></div>
          <div className="break-inside-avoid mb-8"><NewMilestone /></div>
          <div className="break-inside-avoid mb-8"><EmptyDistributeTrack /></div>
          <div className="break-inside-avoid mb-8"><PowerUsage /></div>
          <div className="break-inside-avoid mb-8"><VerificationCodeCard /></div>
          <div className="break-inside-avoid mb-8"><NotificationSettings /></div>

          {/* Brand new additions */}
          <div className="break-inside-avoid mb-8"><CarouselDemoCard /></div>
          <div className="break-inside-avoid mb-8"><SparklesDemoCard /></div>
          <div className="break-inside-avoid mb-8"><ProgressDemoCard /></div>
        </div>
      </div>
    </section>
  )
}
export default CardsDemo
