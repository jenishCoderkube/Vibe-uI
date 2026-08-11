'use client'

import * as React from 'react'
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package,
  Search,
  Users,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Badge } from './badge'
import { Button } from './button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card'
import { Input } from './input'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

export function DashboardBlock02() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur-md md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground md:text-base"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-extrabold">
              V
            </div>
            <span>Vibe UI</span>
          </a>
          <a
            href="#"
            className="text-foreground transition-colors hover:text-foreground font-semibold"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-bold text-foreground"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-extrabold">
                  V
                </div>
                <span>Vibe UI</span>
              </a>
              <a href="#" className="hover:text-foreground">
                Dashboard
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-semibold">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground mt-1">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-semibold">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground mt-1">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-semibold">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground mt-1">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-semibold">
                Active Now
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground mt-1">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent customer transactions across your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1 text-xs">
                <a href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-xs">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <th className="h-10 px-4 text-left align-middle font-semibold text-muted-foreground">
                        Customer
                      </th>
                      <th className="h-10 px-4 text-left align-middle font-semibold text-muted-foreground hidden xl:table-cell">
                        Type
                      </th>
                      <th className="h-10 px-4 text-left align-middle font-semibold text-muted-foreground hidden xl:table-cell">
                        Status
                      </th>
                      <th className="h-10 px-4 text-left align-middle font-semibold text-muted-foreground hidden md:table-cell">
                        Date
                      </th>
                      <th className="h-10 px-4 text-right align-middle font-semibold text-muted-foreground">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">
                        <div className="font-semibold text-foreground">
                          Liam Johnson
                        </div>
                        <div className="hidden text-xs text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </td>
                      <td className="p-4 align-middle hidden xl:table-cell">
                        Sale
                      </td>
                      <td className="p-4 align-middle hidden xl:table-cell">
                        <Badge
                          variant="outline"
                          className="text-xs bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                        >
                          Approved
                        </Badge>
                      </td>
                      <td className="p-4 align-middle hidden md:table-cell">
                        2026-06-23
                      </td>
                      <td className="p-4 align-middle text-right font-semibold">
                        $250.00
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">
                        <div className="font-semibold text-foreground">
                          Olivia Smith
                        </div>
                        <div className="hidden text-xs text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </td>
                      <td className="p-4 align-middle hidden xl:table-cell">
                        Refund
                      </td>
                      <td className="p-4 align-middle hidden xl:table-cell">
                        <Badge
                          variant="outline"
                          className="text-xs bg-amber-500/10 text-amber-600 border-amber-500/20"
                        >
                          Declined
                        </Badge>
                      </td>
                      <td className="p-4 align-middle hidden md:table-cell">
                        2026-06-24
                      </td>
                      <td className="p-4 align-middle text-right font-semibold">
                        $150.00
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">
                        <div className="font-semibold text-foreground">
                          Noah Williams
                        </div>
                        <div className="hidden text-xs text-muted-foreground md:inline">
                          noah@example.com
                        </div>
                      </td>
                      <td className="p-4 align-middle hidden xl:table-cell">
                        Subscription
                      </td>
                      <td className="p-4 align-middle hidden xl:table-cell">
                        <Badge
                          variant="outline"
                          className="text-xs bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                        >
                          Approved
                        </Badge>
                      </td>
                      <td className="p-4 align-middle hidden md:table-cell">
                        2026-06-25
                      </td>
                      <td className="p-4 align-middle text-right font-semibold">
                        $350.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback className="text-xs font-semibold">
                    OM
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-xs font-semibold leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-xs text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-semibold text-xs">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback className="text-xs font-semibold">
                    JL
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-xs font-semibold leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-xs text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-semibold text-xs">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback className="text-xs font-semibold">
                    IN
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-xs font-semibold leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-xs text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-semibold text-xs">+$299.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
