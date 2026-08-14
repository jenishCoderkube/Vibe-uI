'use client'

import React from 'react'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'vibe-ui'

export function DashboardPreview() {
  return (
    <section className="block md:hidden w-full my-8 space-y-4 px-2">
      <div className="text-center space-y-1">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
          Interactive Mockups
        </h3>
        <p className="text-xs text-muted-foreground">
          Toggle layouts to preview production interfaces on mobile.
        </p>
      </div>

      <Tabs defaultValue="analytics" className="w-full">
        {/* Dynamic switcher tabs */}
        <div className="flex justify-center mb-4">
          <TabsList className="h-9 px-1 bg-muted/60 border border-border/40 rounded-full">
            <TabsTrigger value="analytics" className="text-[11px] px-3 py-1 rounded-full">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="saas" className="text-[11px] px-3 py-1 rounded-full">
              SaaS Panel
            </TabsTrigger>
            <TabsTrigger value="ecom" className="text-[11px] px-3 py-1 rounded-full">
              E-Commerce
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Browser Mockup Shell */}
        <div className="w-full rounded-xl border border-border/80 bg-card overflow-hidden shadow-lg">
          {/* Mock Window Header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/60 bg-muted/30">
            {/* Window Dots */}
            <div className="flex gap-1.5 shrink-0">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
            </div>
            {/* Mock Search/Address Bar */}
            <div className="mx-auto w-3/5 bg-background border border-border/40 rounded-md py-0.5 text-[10px] text-center text-muted-foreground select-none truncate">
              http://localhost:3000/dashboard
            </div>
          </div>

          {/* Tab Views */}
          <TabsContent value="analytics" className="mt-0">
            <div className="relative aspect-[4/3] w-full bg-muted/10">
              <Image
                src="/images/dashboard-1.jpg"
                alt="Analytics Preview Light"
                width={1280}
                height={960}
                className="block object-cover w-full h-full dark:hidden"
                priority
              />
              <Image
                src="/images/dashboard-1-dark.jpg"
                alt="Analytics Preview Dark"
                width={1280}
                height={960}
                className="hidden object-cover w-full h-full dark:block"
                priority
              />
            </div>
          </TabsContent>

          <TabsContent value="saas" className="mt-0">
            <div className="relative aspect-[4/3] w-full bg-muted/10">
              <Image
                src="/images/dashboard-2.jpg"
                alt="SaaS Preview Light"
                width={1280}
                height={960}
                className="block object-cover w-full h-full dark:hidden"
              />
              <Image
                src="/images/dashboard-2-dark.jpg"
                alt="SaaS Preview Dark"
                width={1280}
                height={960}
                className="hidden object-cover w-full h-full dark:block"
              />
            </div>
          </TabsContent>

          <TabsContent value="ecom" className="mt-0">
            <div className="relative aspect-[4/3] w-full bg-muted/10">
              <Image
                src="/images/dashboard-3.jpg"
                alt="E-Commerce Preview Light"
                width={1280}
                height={960}
                className="block object-cover w-full h-full dark:hidden"
              />
              <Image
                src="/images/dashboard-3-dark.jpg"
                alt="E-Commerce Preview Dark"
                width={1280}
                height={960}
                className="hidden object-cover w-full h-full dark:block"
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
