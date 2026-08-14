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

export function CardsDemo() {
  return (
    <section className="hidden md:block w-full border-t border-border/40 py-16 dark:bg-background">
      <div className="relative">
        
        {/* Height-balanced 3-column masonry grid where column bottom cards align symmetrically */}
        <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] items-start px-4">
          
          {/* Column 1 (Total: ~1390px, ends with NewMilestone h-290px) */}
          <div className="flex flex-col gap-8">
            <UIElements />
            <SidebarNav />
            <SavingsTargets />
            <PayoutThreshold />
            <NewMilestone />
          </div>

          {/* Column 2 (Total: ~1480px, ends with NotificationSettings h-290px) */}
          <div className="hidden flex-col gap-8 md:flex">
            <ContributionHistory />
            <ClaimableBalance />
            <DividendIncome />
            <TransferFunds />
            <NotificationSettings />
          </div>

          {/* Column 3 (Total: ~1330px, ends with AccountAccess h-290px) */}
          <div className="hidden flex-col gap-8 lg:flex">
            <QrConnect />
            <NewChat />
            <Payments />
            <EmptyDistributeTrack />
            <AccountAccess />
          </div>
        </div>

        {/* Fading bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none lg:h-80 xl:h-64 dark:via-background/80" />
      </div>
    </section>
  )
}
export default CardsDemo
