'use client'

import React, { useState, useMemo } from 'react'
import {
  Check,
  X,
  Zap,
  Shield,
  HelpCircle,
  CreditCard,
  ArrowRight,
  Lock,
  Building2,
  Users,
  Rocket,
  Star,
  CheckCircle2,
  Tag,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'

type Currency = 'USD' | 'EUR' | 'GBP'

interface Plan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  annualMonthlyPrice: number
  badge?: string
  isPopular?: boolean
  cta: string
  features: string[]
  icon: React.ElementType
}

const CURRENCY_MAP: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for independent creators, developers, and side projects.',
    monthlyPrice: 19,
    annualMonthlyPrice: 14,
    cta: 'Start 14-Day Free Trial',
    icon: Rocket,
    features: [
      'Up to 3 active workspaces',
      '15,000 monthly API requests',
      'Standard Vibe UI primitives & components',
      'Community Discord & GitHub support',
      'Basic analytics & event logs (7-day retention)',
      'Single user seat',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Engineered for scaling startups, indie hackers, and agile teams.',
    monthlyPrice: 49,
    annualMonthlyPrice: 36,
    badge: 'Most Popular',
    isPopular: true,
    cta: 'Get Started with Pro',
    icon: Zap,
    features: [
      'Unlimited workspaces & projects',
      '250,000 monthly API requests',
      'Complete Glassmorphism & Cyberpunk presets',
      'Priority 24/7 Slack & Email support',
      'Real-time webhooks & event streaming',
      'Team collaboration (up to 10 member seats)',
      'Custom domains & brand white-labeling',
      'Advanced rate limits & security telemetry',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Dedicated infrastructure, custom SLAs, and enterprise compliance.',
    monthlyPrice: 199,
    annualMonthlyPrice: 149,
    badge: 'High Scale',
    cta: 'Contact Enterprise Sales',
    icon: Building2,
    features: [
      'Unlimited member seats & volume capacity',
      'Dedicated Technical Account Manager',
      '99.99% guaranteed uptime SLA agreement',
      'Enterprise SSO (SAML, Okta, Google Workspace)',
      'SOC2 Type II & HIPAA compliance docs',
      'Dedicated private Slack channel',
      'Custom invoice billing & vendor paperwork',
      'Custom WebGL shaders & bespoke primitives',
    ],
  },
]

interface MatrixRow {
  feature: string
  tooltip: string
  starter: string | boolean
  pro: string | boolean
  enterprise: string | boolean
}

const FEATURE_MATRIX: { category: string; rows: MatrixRow[] }[] = [
  {
    category: 'Core Usage & Capacity',
    rows: [
      {
        feature: 'Active Team Seats',
        tooltip: 'Number of members who can collaborate within your organization.',
        starter: '1 Seat',
        pro: '10 Seats',
        enterprise: 'Unlimited',
      },
      {
        feature: 'Monthly API Calls',
        tooltip: 'Outbound and inbound requests through the Vibe UI runtime.',
        starter: '15,000',
        pro: '250,000',
        enterprise: 'Unlimited',
      },
      {
        feature: 'Workspace Projects',
        tooltip: 'Number of concurrent application instances managed.',
        starter: '3 Workspaces',
        pro: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        feature: 'Telemetry Data Retention',
        tooltip: 'Audit logs and analytics storage duration.',
        starter: '7 Days',
        pro: '90 Days',
        enterprise: '365 Days',
      },
    ],
  },
  {
    category: 'Design & Engineering Capabilities',
    rows: [
      {
        feature: 'Full Component Primitives',
        tooltip: 'Access to the complete library of 90+ accessible Radix-based components.',
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        feature: 'Liquid Glass & Cyberpunk Themes',
        tooltip: 'High-end refractive shaders and glow aesthetics.',
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        feature: 'Custom WebGL Shader Pipelines',
        tooltip: 'Custom canvas background animations and bespoke shader scripts.',
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        feature: 'Custom Domain White-Labeling',
        tooltip: 'Remove Vibe branding and point your own root domains.',
        starter: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Security & Compliance',
    rows: [
      {
        feature: 'Two-Factor Authentication (2FA)',
        tooltip: 'Mandatory TOTP / OTP code verification on user accounts.',
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        feature: 'SSO & SAML 2.0 Integration',
        tooltip: 'Sign in with Okta, Azure AD, or Google Workspace.',
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        feature: 'SOC2 Type II Report & HIPAA BAA',
        tooltip: 'Certified audit documentation for regulated compliance.',
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        feature: 'Role-Based Access Control (RBAC)',
        tooltip: 'Fine-grained permissions for Admin, Editor, and Viewer roles.',
        starter: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Support & SLAs',
    rows: [
      {
        feature: 'Support Channel',
        tooltip: 'Communication mediums available for technical assistance.',
        starter: 'Community Discord',
        pro: 'Priority Email & Slack',
        enterprise: 'Dedicated Slack + TAM',
      },
      {
        feature: 'Response Time Guarantee',
        tooltip: 'Maximum turnaround time for critical support tickets.',
        starter: 'Best effort',
        pro: '< 4 hours',
        enterprise: '< 15 minutes',
      },
      {
        feature: 'Uptime SLA',
        tooltip: 'Guaranteed platform availability with financial credits.',
        starter: '99.5%',
        pro: '99.9%',
        enterprise: '99.99%',
      },
    ],
  },
]

const FAQS = [
  {
    q: 'Can I switch or upgrade my plan at any time?',
    a: 'Yes, absolutely. You can upgrade, downgrade, or cancel your subscription whenever you want from your billing settings. Upgrades apply immediately with prorated billing, while downgrades take effect at the end of your current cycle.',
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'Both our Starter and Pro tiers come with a full 14-day free trial. No charges are incurred during the trial period. If you cancel before the 14 days expire, your credit card will never be billed.',
  },
  {
    q: 'What payment methods do you support?',
    a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and SEPA transfers. Enterprise customers can also pay via wire transfer, ACH, or purchase order with net-30 terms.',
  },
  {
    q: 'Do you offer educational or open-source discounts?',
    a: 'Yes! We love open source and students. We provide a 50% discount on all paid tiers for non-profit open source projects and verified students. Contact support to claim your coupon code.',
  },
  {
    q: 'What happens if our team exceeds API limits?',
    a: 'We never hard-cutoff your traffic without notice. You will receive email notifications at 80% and 100% capacity. Any soft overage is billed at standard nominal micro-rates or you can smoothly upgrade to the next tier.',
  },
]

export default function Pricing01Page() {
  const [isYearly, setIsYearly] = useState(true)
  const [currency, setCurrency] = useState<Currency>('USD')
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const currencyInfo = CURRENCY_MAP[currency]

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currencyInfo.rate)
    return `${currencyInfo.symbol}${converted}`
  }

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault()
    setPromoError('')
    const code = promoCode.trim().toUpperCase()
    if (code === 'VIBE2026' || code === 'VIBE10' || code === 'PROMO10') {
      setPromoApplied(true)
    } else {
      setPromoError('Invalid coupon code. Try "VIBE2026"')
    }
  }

  const handleCheckout = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 1200)
  }

  const handleCloseDrawer = () => {
    setSelectedPlan(null)
    setIsSuccess(false)
    setIsProcessing(false)
    setPromoApplied(false)
    setPromoCode('')
    setPromoError('')
  }

  // Calculate checkout details
  const checkoutSummary = useMemo(() => {
    if (!selectedPlan) return null
    const baseMonthly = isYearly
      ? selectedPlan.annualMonthlyPrice
      : selectedPlan.monthlyPrice
    const billingMultiplier = isYearly ? 12 : 1
    const subtotal = Math.round(baseMonthly * currencyInfo.rate * billingMultiplier)
    const discount = promoApplied ? Math.round(subtotal * 0.1) : 0
    const tax = Math.round((subtotal - discount) * 0.08)
    const total = subtotal - discount + tax
    return { subtotal, discount, tax, total }
  }, [selectedPlan, isYearly, currencyInfo, promoApplied])

  return (
    <TooltipProvider>
      <div className="relative min-h-screen w-full bg-background text-foreground font-sans selection:bg-primary/20">
        {/* Background glow and subtle ambient gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[120px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-10 sm:space-y-14 lg:space-y-20">
          
          {/* Currency and Billing Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              {/* Billing Switcher */}
              <div className="flex items-center gap-2 sm:gap-3 bg-muted/50 border border-border/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm max-w-[95vw]">
                <span
                  onClick={() => setIsYearly(false)}
                  className={`text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                    !isYearly ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="sm:hidden">Monthly</span>
                  <span className="hidden sm:inline">Monthly billing</span>
                </span>

                <Switch
                  checked={isYearly}
                  onCheckedChange={setIsYearly}
                  aria-label="Toggle annual billing"
                />

                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span
                    onClick={() => setIsYearly(true)}
                    className={`text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                      isYearly ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="sm:hidden">Annual</span>
                    <span className="hidden sm:inline">Annual billing</span>
                  </span>
                  <Badge variant="secondary" className="text-[9px] sm:text-[10px] uppercase font-bold py-0.5 px-1.5 sm:px-2">
                    Save 25%
                  </Badge>
                </div>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-lg border border-border/60">
                {(['USD', 'EUR', 'GBP'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                      currency === cur
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cur} ({CURRENCY_MAP[cur].symbol})
                  </button>
                ))}
              </div>
            </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan) => {
              const Icon = plan.icon
              const price = isYearly ? plan.annualMonthlyPrice : plan.monthlyPrice

              return (
                <Card
                  key={plan.id}
                  className={`relative flex flex-col justify-between transition-all duration-300 ${
                    plan.isPopular
                      ? 'border-primary shadow-2xl shadow-primary/10 ring-1 ring-primary/40 bg-card/95 hover:-translate-y-1.5'
                      : 'border-border/80 bg-card/60 backdrop-blur-sm hover:border-border hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {/* Popular Floating Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge
                        variant={plan.isPopular ? 'default' : 'secondary'}
                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md"
                      >
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pt-8 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-muted-foreground">
                        {isYearly ? 'Billed annually' : 'Billed monthly'}
                      </span>
                    </div>

                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed text-muted-foreground min-h-[36px]">
                      {plan.description}
                    </CardDescription>

                    {/* Price display */}
                    <div className="pt-4 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        {formatPrice(price)}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        / month
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-[11px] text-muted-foreground font-mono">
                        {formatPrice(price * 12)} billed every 12 months
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4 pt-2">
                    <div className="h-px bg-border/60 w-full" />
                    <p className="text-xs font-semibold text-foreground tracking-wide uppercase">
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button
                      onClick={() => setSelectedPlan(plan)}
                      variant={plan.isPopular ? 'default' : 'outline'}
                      className={`w-full font-semibold rounded-lg h-10 ${
                        plan.isPopular ? 'shadow-lg shadow-primary/20' : ''
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          {/* Feature Comparison Matrix Section */}
          <div className="space-y-8 pt-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Compare Plan Features
              </h2>
              <p className="text-sm text-muted-foreground">
                Detailed side-by-side comparison of capabilities, security standards, and support.
              </p>
            </div>

            <div className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md overflow-hidden shadow-sm">
              <Table variant="glass" className="min-w-[580px] sm:min-w-full">
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b border-border/70">
                    <TableHead className="w-[35%] py-4 text-sm font-bold text-foreground pl-6">
                      Feature & Specification
                    </TableHead>
                    <TableHead className="w-[21%] text-center py-4 text-sm font-bold text-foreground">
                      Starter
                    </TableHead>
                    <TableHead className="w-[22%] text-center py-4 text-sm font-bold text-primary">
                      Pro
                    </TableHead>
                    <TableHead className="w-[22%] text-center py-4 text-sm font-bold text-foreground pr-6">
                      Enterprise
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {FEATURE_MATRIX.map((group, groupIdx) => (
                    <React.Fragment key={groupIdx}>
                      <TableRow className="bg-muted/30 hover:bg-muted/40 border-y border-border/60">
                        <TableCell
                          colSpan={4}
                          className="py-2.5 pl-6 text-xs font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          {group.category}
                        </TableCell>
                      </TableRow>

                      {group.rows.map((row, rowIdx) => (
                        <TableRow key={rowIdx} className="hover:bg-muted/15 border-b border-border/40">
                          <TableCell className="py-3 pl-6">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs sm:text-sm font-medium text-foreground">
                                {row.feature}
                              </span>
                              <Tooltip content={row.tooltip}>
                                <button
                                  type="button"
                                  className="text-muted-foreground hover:text-foreground inline-flex items-center"
                                  aria-label={`Learn more about ${row.feature}`}
                                >
                                  <HelpCircle className="h-3.5 w-3.5" />
                                </button>
                              </Tooltip>
                            </div>
                          </TableCell>

                          <TableCell className="text-center py-3">
                            {typeof row.starter === 'boolean' ? (
                              row.starter ? (
                                <Check className="h-4 w-4 text-foreground mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                              )
                            ) : (
                              <span className="text-xs font-semibold text-muted-foreground">
                                {row.starter}
                              </span>
                            )}
                          </TableCell>

                          <TableCell className="text-center py-3 bg-muted/30">
                            {typeof row.pro === 'boolean' ? (
                              row.pro ? (
                                <Check className="h-4 w-4 text-primary font-bold mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                              )
                            ) : (
                              <span className="text-xs font-semibold text-primary">
                                {row.pro}
                              </span>
                            )}
                          </TableCell>

                          <TableCell className="text-center py-3 pr-6">
                            {typeof row.enterprise === 'boolean' ? (
                              row.enterprise ? (
                                <Check className="h-4 w-4 text-foreground mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                              )
                            ) : (
                              <span className="text-xs font-semibold text-foreground">
                                {row.enterprise}
                              </span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="max-w-3xl mx-auto space-y-6 pt-4">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted-foreground">
                Everything you need to know about billing, trials, and team licenses.
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="px-4"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Trust Banner & Guarantee */}
          <div className="border border-border/80 rounded-2xl bg-card/40 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  30-Day Money Back Guarantee
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Try Vibe UI risk-free. If you're not 100% thrilled within 30 days, we'll cheerfully refund your purchase.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground">
                4.9/5 from over 1,200 developers
              </span>
            </div>
          </div>

        </div>

        {/* Slide-over Interactive Checkout Drawer */}
        <Sheet open={Boolean(selectedPlan)} onOpenChange={(open) => !open && handleCloseDrawer()}>
          <SheetContent side="right" className="w-full sm:max-w-md p-6 flex flex-col justify-between overflow-y-auto">
            {selectedPlan && (
              <>
                <SheetHeader className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <Badge variant="glow" className="text-[10px] font-mono uppercase">
                      {isYearly ? 'Annual Billing' : 'Monthly Billing'}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">
                      Safe 256-Bit SSL
                    </span>
                  </div>

                  <SheetTitle className="text-xl font-bold flex items-center gap-2">
                    <span>{selectedPlan.name} Plan</span>
                    {selectedPlan.isPopular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                        Recommended
                      </span>
                    )}
                  </SheetTitle>
                  <SheetDescription className="text-xs text-muted-foreground">
                    Complete your subscription order to activate your workspace instantly.
                  </SheetDescription>
                </SheetHeader>

                {!isSuccess ? (
                  <div className="space-y-6 py-6 flex-1">
                    {/* Order Details Card */}
                    <div className="rounded-xl border border-border/80 bg-muted/30 p-4 space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Plan Base ({isYearly ? '12 months' : '1 month'})</span>
                        <span className="font-semibold text-foreground">
                          {currencyInfo.symbol}{checkoutSummary?.subtotal}
                        </span>
                      </div>

                      {promoApplied && (
                        <div className="flex justify-between text-xs text-foreground font-medium">
                          <span className="flex items-center gap-1">
                            <Tag className="h-3 w-3" /> Promo Code (10% Off)
                          </span>
                          <span className="font-bold">
                            -{currencyInfo.symbol}{checkoutSummary?.discount}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Estimated Tax (8%)</span>
                        <span>{currencyInfo.symbol}{checkoutSummary?.tax}</span>
                      </div>

                      <div className="h-px bg-border/80" />

                      <div className="flex justify-between text-sm font-bold text-foreground">
                        <span>Total Due Today</span>
                        <span className="text-primary text-base font-extrabold">
                          {currencyInfo.symbol}{checkoutSummary?.total}
                        </span>
                      </div>
                    </div>

                    {/* Promo Code Form */}
                    <form onSubmit={handleApplyPromo} className="space-y-2">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                        <Tag className="h-3 w-3 text-primary" /> Have a discount coupon?
                      </label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="e.g. VIBE2026"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          disabled={promoApplied}
                          className="h-9 text-xs font-mono uppercase"
                        />
                        <Button
                          type="submit"
                          variant="secondary"
                          size="sm"
                          disabled={promoApplied || !promoCode.trim()}
                          className="h-9 px-3 text-xs"
                        >
                          Apply
                        </Button>
                      </div>
                      {promoApplied && (
                        <p className="text-[11px] font-medium text-foreground flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Coupon applied successfully!
                        </p>
                      )}
                      {promoError && (
                        <p className="text-[11px] font-medium text-destructive">
                          {promoError}
                        </p>
                      )}
                    </form>

                    {/* Mock Payment Details */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <CreditCard className="h-3.5 w-3.5 text-primary" /> Payment Method
                      </label>

                      <div className="space-y-2">
                        <Input
                          placeholder="Cardholder full name"
                          defaultValue="Alex Turner"
                          className="h-9 text-xs"
                        />
                        <div className="relative">
                          <Input
                            placeholder="Card Number"
                            defaultValue="•••• •••• •••• 4242"
                            className="h-9 text-xs font-mono pr-8"
                          />
                          <Lock className="h-3.5 w-3.5 absolute right-2.5 top-3 text-muted-foreground" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Input placeholder="MM / YY" defaultValue="12/28" className="h-9 text-xs font-mono text-center" />
                          <Input placeholder="CVC" defaultValue="888" className="h-9 text-xs font-mono text-center" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Success State */
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Welcome to {selectedPlan.name}!
                    </h3>
                    <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                      Your subscription has been activated successfully. Check your email for login and API credentials.
                    </p>
                    <div className="p-3 bg-muted rounded-lg text-xs font-mono text-muted-foreground w-full">
                      Transaction ID: #tx_{Math.random().toString(36).substring(2, 10).toUpperCase()}
                    </div>
                  </div>
                )}

                <SheetFooter className="pt-4 border-t border-border">
                  {!isSuccess ? (
                    <Button
                      onClick={handleCheckout}
                      disabled={isProcessing}
                      className="w-full h-10 font-bold text-xs rounded-lg"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Processing Order...
                        </>
                      ) : (
                        `Confirm & Pay ${currencyInfo.symbol}${checkoutSummary?.total}`
                      )}
                    </Button>
                  ) : (
                    <Button
                      onClick={handleCloseDrawer}
                      variant="outline"
                      className="w-full h-10 font-semibold text-xs rounded-lg"
                    >
                      Done
                    </Button>
                  )}
                </SheetFooter>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </TooltipProvider>
  )
}
