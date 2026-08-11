'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { ComponentPlayground } from '../components/playground'
import {
  LayoutDemoAnalytics,
  LayoutDemoDevOps,
} from '../components/layout-shell-demos'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Switch,
  Progress,
  CircularProgress,
  Slider,
  RadioGroup,
  RadioGroupItem,
  Label,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Separator,
  Input,
  Checkbox,
  Avatar,
  AvatarFallback,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Skeleton,
  InputOTP,
  Message,
  MessageGroup,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageFooter,
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  Marker,
  MarkerContent,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Marquee,
  // Animation components
  TextAnimate,
  BlurFade,
  NumberTicker,
  WordRotate,
  SparklesText,
  AuroraText,
  AnimatedShinyText,
  AnimatedGradientText,
  TypingAnimation,
  HyperText,
  SpinningText,
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from 'vibe-ui'
import {
  ArrowRight,
  Terminal,
  Sparkles,
  Layers,
  Shield,
  Zap,
  Bell,
  Wifi,
  Moon,
  Volume2,
  Copy,
  Check,
  Search,
  Mail,
  Lock,
  User,
  Star,
  Heart,
  TrendingUp,
  Download,
  Globe,
  Palette,
  Code2,
  Package,
  Eye,
  Settings,
  ChevronRight,
  Table2,
  Navigation,
  ScrollText,
  MousePointerClick,
  MessageSquare,
  CalendarDays,
  GalleryHorizontalEnd,
  Grip,
  PanelTop,
  Loader2,
  File,
  Image,
  Music,
  MoreHorizontal,
  Hash,
  AtSign,
  Smile,
  Type,
  Wand2,
} from 'lucide-react'

export default function LandingPage() {
  const [selectedTheme, setSelectedTheme] = React.useState<
    'glass' | 'retro' | 'glow' | 'default'
  >('glow')
  const [copied, setCopied] = React.useState(false)
  const [volume, setVolume] = React.useState([65])
  const [plan, setPlan] = React.useState('pro')
  const [uploadProgress, setUploadProgress] = React.useState(0)
  const [otp, setOtp] = React.useState('123456')
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Icons cast for Lucide
  const ArrowIcon = ArrowRight as any
  const TermIcon = Terminal as any
  const SparkIcon = Sparkles as any
  const LayIcon = Layers as any
  const ShieldIcon = Shield as any
  const ZapIcon = Zap as any
  const BellIcon = Bell as any
  const WifiIcon = Wifi as any
  const MoonIcon = Moon as any
  const VolumeIcon = Volume2 as any
  const CopyIcon = Copy as any
  const CheckIcon = Check as any
  const SearchIcon = Search as any
  const MailIcon = Mail as any
  const LockIcon = Lock as any
  const UserIcon = User as any
  const StarIcon = Star as any
  const HeartIcon = Heart as any
  const TrendingIcon = TrendingUp as any
  const DownloadIcon = Download as any
  const GlobeIcon = Globe as any
  const PaletteIcon = Palette as any
  const CodeIcon = Code2 as any
  const PackageIcon = Package as any
  const EyeIcon = Eye as any
  const SettingsIcon = Settings as any
  const ChevronRightIcon = ChevronRight as any
  const Table2Icon = Table2 as any
  const NavigationIcon = Navigation as any
  const ScrollTextIcon = ScrollText as any
  const MousePointerClickIcon = MousePointerClick as any
  const MessageSquareIcon = MessageSquare as any
  const CalendarDaysIcon = CalendarDays as any
  const GalleryIcon = GalleryHorizontalEnd as any
  const GripIcon = Grip as any
  const PanelTopIcon = PanelTop as any
  const Loader2Icon = Loader2 as any
  const TypeIcon = Type as any
  const WandIcon = Wand2 as any

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty('--mouse-x', `${x}px`)
      container.style.setProperty('--mouse-y', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animated upload progress
  React.useEffect(() => {
    const interval = setInterval(() => {
      setUploadProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 80)
    return () => clearInterval(interval)
  }, [])

  const copyCommand = () => {
    navigator.clipboard.writeText('npx vibe-ui-kit add')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const themeColors: Record<string, string> = {
    glow: 'rgba(139, 92, 246, 0.15)',
    glass: 'rgba(59, 130, 246, 0.15)',
    retro: 'rgba(245, 158, 11, 0.08)',
    default: 'rgba(255, 255, 255, 0.06)',
  }

  const componentCount = 59
  const animationCount = 20

  const allComponents = [
    'Button',
    'Input',
    'Textarea',
    'Checkbox',
    'Switch',
    'Slider',
    'Radio Group',
    'Select',
    'Multi-Select',
    'Command',
    'Card',
    'Accordion',
    'Tabs',
    'Separator',
    'Label',
    'Table',
    'Breadcrumb',
    'Scroll Area',
    'Calendar',
    'Progress',
    'Skeleton',
    'Badge',
    'Alert',
    'Tooltip',
    'Kbd',
    'Dialog',
    'Alert Dialog',
    'Drawer',
    'Dropdown Menu',
    'Popover',
    'Hover Card',
    'Avatar',
    'Pagination',
    'Toast',
    'Carousel',
    'Uploader',
    'Layout Shell',
    'Infinite Scroll',
    'Input OTP',
    'Item',
    'Menubar',
    'Message',
    'Message Scroller',
    'Marker',
  ]

  const allAnimations = [
    'Text Animate',
    'Blur Fade',
    'Number Ticker',
    'Word Rotate',
    'Sparkles Text',
    'Aurora Text',
    'Animated Shiny Text',
    'Animated Gradient Text',
    'Typing Animation',
    'Hyper Text',
    'Spinning Text',
    'Scroll Based Velocity',
    'Morphing Text',
    'Line Shadow Text',
    'Comic Text',
    'Dia Text Reveal',
    'Kinetic Text',
    'Text 3D Flip',
    'Video Text',
    'Text Reveal',
  ]

  const newComponents = [
    {
      name: 'Input OTP',
      icon: LockIcon,
      desc: 'Secure character slot inputs with premium backspace auto-focus and overwrite behavior',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Message Scroller',
      icon: ScrollTextIcon,
      desc: 'High-fidelity timeline message feed with auto-scroll lock, scroll-to-bottom buttons, and custom content styling',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      name: 'Message',
      icon: MessageSquareIcon,
      desc: 'Clean bubble alignment layout blocks with floating emoji badges, avatars, and inline status receipts',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      name: 'Menubar',
      icon: PanelTopIcon,
      desc: 'Flexible Radix-based navigation menus with dynamic submenus, checkbox toggles, and shortcuts',
      gradient: 'from-indigo-500 to-fuchsia-500',
    },
    {
      name: 'Item',
      icon: LayIcon,
      desc: 'Responsive item card primitives with inline actions, header blocks, and thumbnail media slots',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      name: 'Marker',
      icon: SparkIcon,
      desc: 'Highlighted alert labels with separator layouts and marquee styling presets',
      gradient: 'from-amber-500 to-orange-500',
    },
  ]

  const glowColors: Record<string, { glow1: string; glow2: string }> = {
    glow: { glow1: 'bg-violet-500/10', glow2: 'bg-fuchsia-500/5' },
    glass: { glow1: 'bg-blue-500/10', glow2: 'bg-cyan-500/5' },
    retro: { glow1: 'bg-amber-500/10', glow2: 'bg-orange-500/5' },
    default: { glow1: 'bg-emerald-500/10', glow2: 'bg-teal-500/5' },
  }

  return (
    <div
      ref={containerRef}
      className="flex min-h-screen flex-col bg-background text-foreground bg-grid-pattern relative overflow-hidden"
    >
      {/* Mouse Aura Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${themeColors[selectedTheme]}, transparent 80%)`,
        }}
      />
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none transition-colors duration-500" />
      <div
        className={`absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500 ${glowColors[selectedTheme]?.glow1 || 'bg-violet-500/10'}`}
      />
      <div
        className={`absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${glowColors[selectedTheme]?.glow2 || 'bg-fuchsia-500/5'}`}
      />

      <Header />

      <main className="flex-1">
        {/* ═══════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center space-y-8 relative z-10">
          {/* Release Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary backdrop-blur-md">
            <SparkIcon className="h-3.5 w-3.5" />
            <span className="font-medium">
              Vibe UI v1.0 — {componentCount}+ Premium Components
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
                Craft Stunning Interfaces.
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Control the Vibe.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A premium React component library with {componentCount}+
              components and {animationCount} text animations built on Radix UI
              primitives and Tailwind CSS v4. Toggle between Minimal,
              Glassmorphism, Brutalist, and Neon styles.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs/introduction">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 shadow-xl text-base font-semibold"
              >
                Get Started
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto h-12 px-8 border border-border bg-background/50 backdrop-blur-sm text-base"
              >
                <EyeIcon className="mr-2 h-4 w-4" />
                Explore Components
              </Button>
            </Link>
          </div>

          {/* Terminal-Style Command Bar */}
          <div className="max-w-lg mx-auto pt-2">
            <div
              onClick={copyCommand}
              className="relative flex items-center justify-between px-5 py-3.5 rounded-xl border border-border bg-zinc-950/80 backdrop-blur-md cursor-pointer hover:border-primary/30 transition-all group font-mono text-sm overflow-hidden"
            >
              {/* Terminal dots */}
              <div className="absolute top-2.5 left-3.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground group-hover:text-foreground transition-colors pl-12">
                <span className="text-emerald-400">$</span>
                <span>npx vibe-ui-kit add</span>
                <span className="animate-pulse text-primary">▊</span>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-primary/80 font-semibold uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-lg">
                {copied ? (
                  <CheckIcon className="h-3 w-3" />
                ) : (
                  <CopyIcon className="h-3 w-3" />
                )}
                {copied ? 'Copied!' : 'Copy'}
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 pt-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1.5">
              <PackageIcon className="h-4 w-4 text-primary" />
              <span>
                <span className="font-bold text-foreground">
                  {componentCount}+
                </span>{' '}
                Components
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <WandIcon className="h-4 w-4 text-fuchsia-500" />
              <span>
                <span className="font-bold text-foreground">
                  {animationCount}
                </span>{' '}
                Animations
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <PaletteIcon className="h-4 w-4 text-violet-500" />
              <span>
                <span className="font-bold text-foreground">4</span> Theme
                Presets
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <CodeIcon className="h-4 w-4 text-fuchsia-500" />
              <span>
                <span className="font-bold text-foreground">100%</span>{' '}
                TypeScript
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldIcon className="h-4 w-4 text-emerald-500" />
              <span>
                <span className="font-bold text-foreground">A11y</span> Ready
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            ANIMATED COMPONENT MARQUEE — using Marquee component
        ═══════════════════════════════════════════════ */}
        <section className="relative z-10 py-4 border-y border-border/40">
          <Marquee pauseOnHover fade speed={150} gap="0.75rem">
            {[...allComponents, ...allAnimations].map((name) => (
              <Link
                key={name}
                href={`/docs/${allAnimations.includes(name) ? 'animations' : 'components'}/${name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/60 bg-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors duration-200 shrink-0 cursor-pointer"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${allAnimations.includes(name) ? 'bg-primary' : 'bg-primary/40'}`}
                />
                {name}
              </Link>
            ))}
          </Marquee>
        </section>

        {/* ═══════════════════════════════════════════════
            LIVE THEME SHOWCASE — Bento Grid
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 relative z-10">
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <div className="text-center space-y-4 mb-12">
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="h2"
                className="text-3xl font-bold tracking-tight"
                startOnView
              >
                Interactive Preset Showcase
              </TextAnimate>
              <p className="text-muted-foreground max-w-md mx-auto">
                Toggle the visual theme to see every component respond in
                real-time.
              </p>

              {/* Theme Swapper */}
              <div className="flex justify-center pt-2">
                <div className="p-1 rounded-xl border border-border bg-card/60 backdrop-blur-sm flex space-x-1">
                  {(['default', 'glass', 'retro', 'glow'] as const).map(
                    (theme) => (
                      <button
                        key={theme}
                        onClick={() => setSelectedTheme(theme)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          selectedTheme === theme
                            ? 'bg-primary text-primary-foreground shadow-lg'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {theme}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* ── ROW 1: Three cards ── */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <BlurFade inView inViewMargin="-80px" delay={0.1}>
              {/* Card 1: Upload Manager (Progress + CircularProgress) */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col justify-between h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upload Manager</CardTitle>
                    <Badge variant={selectedTheme as any}>Live</Badge>
                  </div>
                  <CardDescription>
                    Real-time file upload progress with animated indicators.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 space-y-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-muted-foreground">
                      Uploading files...
                    </span>
                    <span className="font-mono font-bold text-primary">
                      {uploadProgress}%
                    </span>
                  </div>
                  <Progress
                    value={uploadProgress}
                    indicatorVariant="gradient"
                  />
                  <div className="flex items-center justify-around pt-2">
                    {[
                      {
                        label: 'Images',
                        value: uploadProgress,
                        variant: 'success' as const,
                      },
                      {
                        label: 'Videos',
                        value: Math.min(uploadProgress * 0.7, 100),
                        variant: 'gradient' as const,
                      },
                      {
                        label: 'Docs',
                        value: Math.min(uploadProgress * 1.2, 100),
                        variant: undefined,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <CircularProgress
                          value={item.value}
                          size={56}
                          strokeWidth={5}
                          showValue
                          indicatorVariant={item.variant}
                        />
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade inView inViewMargin="-80px" delay={0.2}>
              {/* Card 2: System Controls (Slider + Switches) */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col justify-between h-full"
              >
                <CardHeader>
                  <CardTitle>System Controls</CardTitle>
                  <CardDescription>
                    Fine-tune preferences with sliders, switches, and radio
                    groups.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 py-4">
                  {/* Slider with Tooltip */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <VolumeIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>Volume</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        {volume[0]}%
                      </span>
                    </div>
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      showTooltip
                      variant={
                        selectedTheme === 'glass'
                          ? 'glass'
                          : selectedTheme === 'retro'
                            ? 'retro'
                            : 'default'
                      }
                    />
                  </div>

                  <Separator />

                  {/* Toggle controls */}
                  <div className="space-y-3">
                    {[
                      { icon: BellIcon, label: 'Notifications', checked: true },
                      { icon: MoonIcon, label: 'Dark mode', checked: true },
                      { icon: WifiIcon, label: 'Auto-sync', checked: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>{item.label}</span>
                        </div>
                        <Switch
                          defaultChecked={item.checked}
                          variant={selectedTheme as any}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade inView inViewMargin="-80px" delay={0.3}>
              {/* Card 3: Plan Selector (RadioGroup + Accordion) */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col justify-between h-full"
              >
                <CardHeader>
                  <CardTitle>Choose Plan</CardTitle>
                  <CardDescription>
                    Select a subscription tier with radio controls.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 py-4">
                  <RadioGroup
                    value={plan}
                    onValueChange={setPlan}
                    className="space-y-2.5"
                  >
                    {[
                      { value: 'free', label: 'Free', desc: '5 projects, 1GB' },
                      { value: 'pro', label: 'Pro', desc: '50 projects, 20GB' },
                      {
                        value: 'enterprise',
                        label: 'Enterprise',
                        desc: 'Unlimited',
                      },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border cursor-pointer transition-all ${
                          plan === option.value
                            ? 'border-primary/50 bg-primary/5'
                            : 'border-border/50 hover:border-border'
                        }`}
                      >
                        <RadioGroupItem value={option.value} />
                        <div className="flex-1">
                          <span className="text-sm font-semibold">
                            {option.label}
                          </span>
                          <span className="text-xs text-muted-foreground ml-2">
                            {option.desc}
                          </span>
                        </div>
                        {option.value === 'pro' && (
                          <Badge
                            variant={selectedTheme as any}
                            className="text-[10px]"
                          >
                            Popular
                          </Badge>
                        )}
                      </label>
                    ))}
                  </RadioGroup>

                  <Separator />

                  {/* Mini Accordion FAQ */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq-1">
                      <AccordionTrigger className="text-xs py-2">
                        Can I switch plans?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground">
                        Yes, upgrade or downgrade at any time from your
                        dashboard.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                      <AccordionTrigger className="text-xs py-2">
                        Is there a free trial?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground">
                        All Pro features include a 14-day free trial period.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </BlurFade>
          </div>

          {/* ── ROW 2: Two wide cards ── */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <BlurFade inView inViewMargin="-80px" delay={0.1}>
              {/* Card 4: Team & Avatar Stack + Tabs */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col justify-between h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Team Dashboard</CardTitle>
                    <Badge variant={selectedTheme as any}>New</Badge>
                  </div>
                  <CardDescription>
                    Avatars, tabs, and skeleton loading states working together.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 space-y-5">
                  {/* Avatar Stack */}
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[
                        { initials: 'JD', color: 'bg-violet-600 text-white' },
                        { initials: 'AK', color: 'bg-emerald-600 text-white' },
                        { initials: 'SM', color: 'bg-amber-600 text-white' },
                        { initials: 'LP', color: 'bg-rose-600 text-white' },
                        {
                          initials: '+3',
                          color:
                            'bg-muted text-muted-foreground border border-border/40',
                        },
                      ].map((member, i) => (
                        <Avatar
                          key={i}
                          className="h-9 w-9 border-2 border-background"
                        >
                          <AvatarFallback
                            className={`${member.color} text-[10px] font-bold`}
                          >
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      8 active members
                    </span>
                  </div>

                  <Separator />

                  {/* Tabs */}
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="overview" className="flex-1 text-xs">
                        Overview
                      </TabsTrigger>
                      <TabsTrigger value="activity" className="flex-1 text-xs">
                        Activity
                      </TabsTrigger>
                      <TabsTrigger value="settings" className="flex-1 text-xs">
                        Settings
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="pt-3 space-y-2.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Tasks completed</span>
                        <span className="font-mono text-primary font-bold">
                          128/150
                        </span>
                      </div>
                      <Progress value={85} indicatorVariant="gradient" />
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {[
                          {
                            label: 'In Progress',
                            count: 12,
                            color: 'text-amber-500',
                          },
                          {
                            label: 'Review',
                            count: 8,
                            color: 'text-violet-500',
                          },
                          {
                            label: 'Done',
                            count: 128,
                            color: 'text-emerald-500',
                          },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="text-center p-2 rounded-lg bg-muted/30 border border-border/30"
                          >
                            <div
                              className={`text-lg font-extrabold ${stat.color}`}
                            >
                              {stat.count}
                            </div>
                            <div className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="activity" className="pt-3 space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Skeleton className="h-7 w-7 rounded-full" />
                          <div className="flex-1 space-y-1">
                            <Skeleton className="h-3 w-3/4 rounded" />
                            <Skeleton className="h-2 w-1/2 rounded" />
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="settings" className="pt-3 space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-xs">Email notifications</Label>
                        <Switch defaultChecked variant={selectedTheme as any} />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-xs">Public profile</Label>
                        <Switch variant={selectedTheme as any} />
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade inView inViewMargin="-80px" delay={0.2}>
              {/* Card 5: Form Preview (Inputs + Checkbox + Button) */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col justify-between h-full"
              >
                <CardHeader>
                  <CardTitle>Quick Form Preview</CardTitle>
                  <CardDescription>
                    Floating label inputs, checkboxes, and interactive controls.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email-demo"
                      className="text-xs font-semibold"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email-demo"
                        placeholder="john@example.com"
                        className="h-10 text-sm pl-9"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold">
                      Secure OTP Code
                    </Label>
                    <div className="flex justify-start">
                      <InputOTP
                        length={6}
                        value={otp}
                        onChange={setOtp}
                        variant={selectedTheme as any}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Slider Preview */}
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold">
                      Budget Range
                    </Label>
                    <Slider
                      defaultValue={[25, 75]}
                      max={100}
                      showTooltip
                      tooltipFormat={(v: number) => `$${v}k`}
                      variant={
                        selectedTheme === 'glass'
                          ? 'glass'
                          : selectedTheme === 'retro'
                            ? 'retro'
                            : 'default'
                      }
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Checkbox id="terms-demo" />
                    <Label
                      htmlFor="terms-demo"
                      className="text-xs text-muted-foreground"
                    >
                      I agree to the terms and conditions
                    </Label>
                  </div>
                  <div className="flex gap-3 pt-1">
                    <Button
                      variant={selectedTheme as any}
                      className="flex-1 h-10 text-sm font-semibold"
                    >
                      Submit
                    </Button>
                    <Button
                      variant="secondary"
                      className="h-10 text-sm border border-border"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>

          {/* ── ROW 3: Full-width Component Library card ── */}
          <BlurFade inView inViewMargin="-80px" delay={0.15}>
            <div className="mt-6">
              <Card variant={selectedTheme as any}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Component Library</CardTitle>
                    <Badge variant={selectedTheme as any}>
                      {componentCount}+ Components
                    </Badge>
                  </div>
                  <CardDescription>
                    Built-in Radix primitives with multi-preset visual theming.
                    Every component supports Default, Glass, Retro, and Glow
                    styles.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                    {[
                      {
                        label: 'Inputs',
                        count: 12,
                        color: 'text-emerald-500',
                        icon: SettingsIcon,
                      },
                      {
                        label: 'Layout',
                        count: 11,
                        color: 'text-violet-500',
                        icon: LayIcon,
                      },
                      {
                        label: 'Feedback',
                        count: 7,
                        color: 'text-amber-500',
                        icon: ZapIcon,
                      },
                      {
                        label: 'Overlay',
                        count: 6,
                        color: 'text-blue-500',
                        icon: EyeIcon,
                      },
                      {
                        label: 'Data',
                        count: 3,
                        color: 'text-rose-500',
                        icon: TrendingIcon,
                      },
                      {
                        label: 'Nav',
                        count: 5,
                        color: 'text-cyan-500',
                        icon: GlobeIcon,
                      },
                      {
                        label: 'Animations',
                        count: animationCount,
                        color: 'text-primary',
                        icon: WandIcon,
                      },
                    ].map((cat) => (
                      <div
                        key={cat.label}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border/40 bg-background/30 hover:bg-muted/30 transition-colors"
                      >
                        <cat.icon className={`h-5 w-5 ${cat.color}`} />
                        <span
                          className={`text-2xl font-extrabold ${cat.color}`}
                        >
                          {cat.count}
                        </span>
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                          {cat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {allComponents.map((name) => (
                      <Link
                        key={name}
                        href={`/docs/components/${name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-2.5 py-1 rounded-md bg-muted/60 text-[10px] font-medium text-muted-foreground border border-border/40 hover:bg-muted/90 hover:text-foreground hover:border-border/60 transition-all cursor-pointer"
                      >
                        {name}
                      </Link>
                    ))}
                    {allAnimations.map((name) => (
                      <Link
                        key={name}
                        href={`/docs/animations/${name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-2.5 py-1 rounded-md bg-primary/10 text-[10px] font-semibold text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer shadow-sm"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlurFade>
        </section>

        {/* ═══════════════════════════════════════════════
            INTERACTIVE SANDBOX PLAYGROUND
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 border-t border-border/60 relative z-10 text-center space-y-12">
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary font-bold backdrop-blur-md">
                <SparkIcon className="h-3.5 w-3.5" />
                <AnimatedShinyText className="!text-primary" shimmerWidth={100}>
                  Control the Vibe
                </AnimatedShinyText>
              </div>
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="h2"
                className="text-3xl font-bold tracking-tight"
                startOnView
              >
                Interactive Component Sandbox
              </TextAnimate>
              <p className="text-muted-foreground max-w-md mx-auto">
                Configure component properties, swap between Default, Glass,
                Retro, or Glow styles, and copy the dynamic code instantly.
              </p>
            </div>
          </BlurFade>
          <ComponentPlayground />
        </section>

        {/* ═══════════════════════════════════════════════
            ADMIN CONSOLE SHOWCASE
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 border-t border-border/60 relative z-10">
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center space-x-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)] backdrop-blur-md">
                <SparkIcon className="h-3.5 w-3.5 text-amber-400" />
                <span className="font-semibold">Premium Feature</span>
              </div>
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="h2"
                className="text-3xl font-bold tracking-tight"
                startOnView
              >
                Real-World Admin Console Layouts
              </TextAnimate>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Build fully functional admin panels, dashboards, and SaaS
                interfaces with our LayoutShell component system — collapsible
                sidebars, branded headers, and responsive content areas.
              </p>
            </div>
          </BlurFade>

          <div
            className="grid lg:grid-cols-2 gap-6"
            style={{
              ['--primary' as any]:
                selectedTheme === 'glow'
                  ? '262 83% 58%'
                  : selectedTheme === 'glass'
                    ? '217 91% 60%'
                    : selectedTheme === 'retro'
                      ? '38 92% 50%'
                      : '142 71% 45%',
              ['--primary-foreground' as any]:
                selectedTheme === 'glow'
                  ? '0 0% 100%'
                  : selectedTheme === 'glass'
                    ? '240 10% 3.9%'
                    : selectedTheme === 'retro'
                      ? '240 10% 3.9%'
                      : '0 0% 100%',
              ['--color-primary' as any]:
                selectedTheme === 'glow'
                  ? 'hsl(262 83% 58%)'
                  : selectedTheme === 'glass'
                    ? 'hsl(217 91% 60%)'
                    : selectedTheme === 'retro'
                      ? 'hsl(38 92% 50%)'
                      : 'hsl(142 71% 45%)',
              ['--color-primary-foreground' as any]:
                selectedTheme === 'glow'
                  ? 'hsl(0 0% 100%)'
                  : selectedTheme === 'glass'
                    ? 'hsl(240 10% 3.9%)'
                    : selectedTheme === 'retro'
                      ? 'hsl(240 10% 3.9%)'
                      : 'hsl(0 0% 100%)',
            }}
          >
            <BlurFade inView inViewMargin="-80px" delay={0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500 text-white shadow-sm">
                    <LayIcon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-bold">
                    Cyber Analytics Dashboard
                  </span>
                  <Badge variant="glass" className="text-[9px] px-2 py-0.5">
                    Cyber Emerald Theme
                  </Badge>
                </div>
                <LayoutDemoAnalytics />
              </div>
            </BlurFade>
            <BlurFade inView inViewMargin="-80px" delay={0.2}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-green-600 text-white shadow-sm">
                    <TermIcon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-bold">
                    DevOps Terminal Monitor
                  </span>
                  <Badge
                    variant="cyberpunk"
                    className="text-[9px] px-2 py-0.5 font-mono"
                  >
                    Green Terminal Theme
                  </Badge>
                </div>
                <LayoutDemoDevOps />
              </div>
            </BlurFade>
          </div>

          <BlurFade inView inViewMargin="-50px" delay={0.1}>
            <div className="flex justify-center mt-8">
              <Link href="/docs/components/layout-shell">
                <Button
                  variant="secondary"
                  className="h-10 px-6 text-sm border border-border font-semibold group"
                >
                  Explore All 5 Console Templates
                  <ArrowIcon className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </BlurFade>
        </section>

        {/* ═══════════════════════════════════════════════
            NEW COMPONENTS — LIVE SHOWCASE
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 border-t border-border/60 relative z-10">
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs text-emerald-400 backdrop-blur-md">
                <SparkIcon className="h-3.5 w-3.5" />
                <span className="font-semibold">
                  Just Shipped — 6 New Components
                </span>
              </div>
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="h2"
                className="text-3xl font-bold tracking-tight"
                startOnView
              >
                What&apos;s New in Vibe UI
              </TextAnimate>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Live interactive demos of our latest components — Message
                bubbles, Item lists, Menubar navigation, Marker labels, and
                InputOTP. Try them below.
              </p>
            </div>
          </BlurFade>

          {/* ── Row 1: Chat Messages + Item List ── */}
          <div className="grid lg:grid-cols-2 gap-6">
            <BlurFade inView inViewMargin="-80px" delay={0.1}>
              {/* Live Chat Messages Demo */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquareIcon className="h-4 w-4 text-violet-500" />
                      Message Bubbles
                    </CardTitle>
                    <Badge
                      variant={selectedTheme as any}
                      className="text-[9px]"
                    >
                      New
                    </Badge>
                  </div>
                  <CardDescription>
                    Chat-style message layouts with avatars, timestamps, and
                    alignment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 flex-1">
                  <MessageGroup className="!p-0 !max-w-full">
                    <Message
                      align="start"
                      variant={
                        selectedTheme === 'default'
                          ? 'default'
                          : selectedTheme === 'glass'
                            ? 'glass'
                            : selectedTheme === 'retro'
                              ? 'retro'
                              : 'glow'
                      }
                    >
                      <MessageAvatar>
                        <span className="text-[10px]">🧑‍💻</span>
                      </MessageAvatar>
                      <div className="flex flex-col gap-1 min-w-0">
                        <MessageHeader>Alex · 2m ago</MessageHeader>
                        <MessageContent>
                          Hey team! The new Vibe UI components are looking
                          amazing 🔥
                        </MessageContent>
                        <MessageFooter>✓ Read</MessageFooter>
                      </div>
                    </Message>

                    <Message
                      align="end"
                      variant={
                        selectedTheme === 'default'
                          ? 'default'
                          : selectedTheme === 'glass'
                            ? 'glass'
                            : selectedTheme === 'retro'
                              ? 'retro'
                              : 'glow'
                      }
                    >
                      <MessageAvatar>
                        <span className="text-[10px]">👩‍🎨</span>
                      </MessageAvatar>
                      <div className="flex flex-col gap-1 min-w-0">
                        <MessageHeader>Olivia · just now</MessageHeader>
                        <MessageContent>
                          Absolutely! The glass preset is my favourite ✨
                        </MessageContent>
                        <MessageFooter>
                          <span className="inline-flex items-center gap-1">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            typing…
                          </span>
                        </MessageFooter>
                      </div>
                    </Message>

                    <Message
                      align="start"
                      variant={
                        selectedTheme === 'default'
                          ? 'default'
                          : selectedTheme === 'glass'
                            ? 'glass'
                            : selectedTheme === 'retro'
                              ? 'retro'
                              : 'glow'
                      }
                    >
                      <MessageAvatar>
                        <span className="text-[10px]">🤖</span>
                      </MessageAvatar>
                      <div className="flex flex-col gap-1 min-w-0">
                        <MessageHeader>Bot · 1m ago</MessageHeader>
                        <MessageContent>
                          4 theme presets available: Default, Glass, Retro, and
                          Glow.
                        </MessageContent>
                      </div>
                    </Message>
                  </MessageGroup>

                  <div className="mt-4 flex justify-end">
                    <Link href="/docs/components/message">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs border border-border h-8"
                      >
                        View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade inView inViewMargin="-80px" delay={0.2}>
              {/* Live Item List Demo */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <LayIcon className="h-4 w-4 text-rose-500" />
                      Item List
                    </CardTitle>
                    <Badge
                      variant={selectedTheme as any}
                      className="text-[9px]"
                    >
                      New
                    </Badge>
                  </div>
                  <CardDescription>
                    Flexible list items with icons, descriptions, and inline
                    actions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 flex-1">
                  <ItemGroup>
                    {[
                      {
                        icon: File,
                        title: 'landing-page.tsx',
                        desc: 'Updated 5 minutes ago',
                        color: 'text-blue-400',
                        badge: '12 KB',
                      },
                      {
                        icon: Image,
                        title: 'hero-banner.png',
                        desc: 'Added by Olivia',
                        color: 'text-emerald-400',
                        badge: '2.4 MB',
                      },
                      {
                        icon: Music,
                        title: 'notification.mp3',
                        desc: 'Sound asset',
                        color: 'text-amber-400',
                        badge: '340 KB',
                      },
                    ].map((file) => {
                      const FileIcon = file.icon as any
                      const DotsIcon = MoreHorizontal as any
                      return (
                        <Item
                          key={file.title}
                          variant={
                            selectedTheme === 'default'
                              ? 'outline'
                              : selectedTheme === 'glass'
                                ? 'glass'
                                : selectedTheme === 'retro'
                                  ? 'retro'
                                  : 'glow'
                          }
                        >
                          <ItemMedia variant="icon">
                            <FileIcon className={`h-4 w-4 ${file.color}`} />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>{file.title}</ItemTitle>
                            <ItemDescription>{file.desc}</ItemDescription>
                          </ItemContent>
                          <ItemActions>
                            <Badge
                              variant={selectedTheme as any}
                              className="text-[9px] px-1.5 py-0.5"
                            >
                              {file.badge}
                            </Badge>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-1 rounded hover:bg-muted/50 outline-none">
                                  <DotsIcon className="h-4 w-4" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                variant={
                                  selectedTheme === 'default'
                                    ? 'default'
                                    : selectedTheme === 'glass'
                                      ? 'glass'
                                      : selectedTheme === 'retro'
                                        ? 'retro'
                                        : 'default'
                                }
                                className="w-40"
                              >
                                <DropdownMenuItem className="cursor-pointer gap-2 text-xs">
                                  <Eye className="h-3.5 w-3.5" />
                                  <span>Preview File</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer gap-2 text-xs">
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>Copy Name</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer gap-2 text-xs">
                                  <Download className="h-3.5 w-3.5" />
                                  <span>Download</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer gap-2 text-xs text-rose-500 focus:text-rose-500 focus:bg-rose-500/10">
                                  <Settings className="h-3.5 w-3.5" />
                                  <span>Settings</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </ItemActions>
                        </Item>
                      )
                    })}
                  </ItemGroup>

                  <div className="mt-4 flex justify-end">
                    <Link href="/docs/components/item">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs border border-border h-8"
                      >
                        View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>

          {/* ── Row 2: Menubar + Marker + InputOTP trio ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <BlurFade inView inViewMargin="-80px" delay={0.1}>
              {/* Menubar Demo */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <PanelTopIcon className="h-4 w-4 text-indigo-500" />
                      Menubar
                    </CardTitle>
                    <Badge
                      variant={selectedTheme as any}
                      className="text-[9px]"
                    >
                      New
                    </Badge>
                  </div>
                  <CardDescription>
                    Radix-based navigation with submenus and shortcuts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 flex-1 flex flex-col justify-between">
                  <Menubar
                    variant={
                      selectedTheme === 'default'
                        ? 'default'
                        : selectedTheme === 'glass'
                          ? 'glass'
                          : selectedTheme === 'retro'
                            ? 'retro'
                            : 'glow'
                    }
                    className="w-full"
                  >
                    <MenubarMenu>
                      <MenubarTrigger className="text-xs cursor-pointer">
                        File
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>New File</MenubarItem>
                        <MenubarItem>Open</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Save</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger className="text-xs cursor-pointer">
                        Edit
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>Undo</MenubarItem>
                        <MenubarItem>Redo</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger className="text-xs cursor-pointer">
                        View
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>Zoom In</MenubarItem>
                        <MenubarItem>Zoom Out</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                  <div className="mt-4 flex justify-end">
                    <Link href="/docs/components/menubar">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs border border-border h-8"
                      >
                        View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade inView inViewMargin="-80px" delay={0.2}>
              {/* Marker Demo */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <SparkIcon className="h-4 w-4 text-amber-500" />
                      Marker
                    </CardTitle>
                    <Badge
                      variant={selectedTheme as any}
                      className="text-[9px]"
                    >
                      New
                    </Badge>
                  </div>
                  <CardDescription>
                    Section labels, separators, and highlighted markers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 flex-1 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <Marker variant="separator">
                      <MarkerContent>Today</MarkerContent>
                    </Marker>
                    <Marker
                      variant={
                        selectedTheme === 'glass'
                          ? 'glass'
                          : selectedTheme === 'retro'
                            ? 'retro'
                            : selectedTheme === 'glow'
                              ? 'glow'
                              : 'default'
                      }
                    >
                      <MarkerContent>🔔 3 new notifications</MarkerContent>
                    </Marker>
                    <Marker variant="border">
                      <MarkerContent>Section Divider</MarkerContent>
                    </Marker>
                    <Marker
                      variant={
                        selectedTheme === 'glass'
                          ? 'glass'
                          : selectedTheme === 'retro'
                            ? 'retro'
                            : selectedTheme === 'glow'
                              ? 'glow'
                              : 'default'
                      }
                    >
                      <MarkerContent>✨ Featured Content</MarkerContent>
                    </Marker>
                  </div>
                  <div className="flex justify-end">
                    <Link href="/docs/components/marker">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs border border-border h-8"
                      >
                        View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade inView inViewMargin="-80px" delay={0.3}>
              {/* InputOTP Standalone Demo */}
              <Card
                variant={selectedTheme as any}
                className="flex flex-col h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <LockIcon className="h-4 w-4 text-cyan-500" />
                      Input OTP
                    </CardTitle>
                    <Badge
                      variant={selectedTheme as any}
                      className="text-[9px]"
                    >
                      New
                    </Badge>
                  </div>
                  <CardDescription>
                    Secure verification code inputs with auto-focus and
                    backspace handling.
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-muted-foreground">
                        Enter verification code
                      </Label>
                      <div className="flex justify-center">
                        <InputOTP
                          length={6}
                          value={otp}
                          onChange={setOtp}
                          variant={selectedTheme as any}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground">
                        Current value:{' '}
                        <span className="font-mono font-bold text-primary">
                          {otp || '—'}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link href="/docs/components/input-otp">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs border border-border h-8"
                      >
                        View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>

          {/* Quick links row */}
          <BlurFade inView inViewMargin="-50px" delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {newComponents.map((comp) => (
                <Link
                  key={comp.name}
                  href={`/docs/components/${comp.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <div
                    className={`p-1.5 rounded-lg bg-gradient-to-br ${comp.gradient} text-white`}
                  >
                    <comp.icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {comp.name}
                  </span>
                  <ChevronRightIcon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </BlurFade>
        </section>

        {/* ═══════════════════════════════════════════════
            TEXT ANIMATION SHOWCASE
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 border-t border-border/60 relative z-10">
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs text-primary backdrop-blur-md">
                <WandIcon className="h-3.5 w-3.5" />
                <AnimatedShinyText className="!text-primary" shimmerWidth={100}>
                  {animationCount} Text Animations
                </AnimatedShinyText>
              </div>
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="h2"
                className="text-3xl font-bold tracking-tight"
                startOnView
              >
                Animation Components Showcase
              </TextAnimate>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Beautiful text animations that bring your interfaces to life.
                From aurora gradients to typing effects — every animation is
                scroll-triggered, performant, and theme-aware.
              </p>
            </div>
          </BlurFade>

          {/* ── Animation Demo Grid ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WordRotate Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.1}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                      <TypeIcon className="h-3 w-3" />
                    </div>
                    Word Rotate
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <div className="text-center">
                    <span className="text-lg font-bold text-foreground">
                      Build{' '}
                    </span>
                    <WordRotate
                      words={['Stunning', 'Premium', 'Beautiful', 'Modern']}
                      duration={2000}
                      className="text-lg font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent inline-block"
                    />
                    <span className="text-lg font-bold text-foreground">
                      {' '}
                      UIs
                    </span>
                  </div>
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/word-rotate">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>

            {/* TypingAnimation Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.15}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                      <TermIcon className="h-3 w-3" />
                    </div>
                    Typing Animation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <TypingAnimation
                    words={[
                      'npx vibe-ui-kit add',
                      'npm install vibe-ui',
                      'pnpm add vibe-ui',
                    ]}
                    className="text-sm font-mono text-primary"
                    typeSpeed={60}
                    deleteSpeed={40}
                    pauseDelay={1500}
                    loop
                    showCursor
                    cursorStyle="line"
                  />
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/typing-animation">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>

            {/* SparklesText Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.2}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                      <SparkIcon className="h-3 w-3" />
                    </div>
                    Sparkles Text
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <SparklesText
                    className="text-2xl font-bold"
                    sparklesCount={8}
                  >
                    ✨ Sparkle
                  </SparklesText>
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/sparkles-text">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>

            {/* NumberTicker Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.25}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                      <TrendingIcon className="h-3 w-3" />
                    </div>
                    Number Ticker
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <div className="flex items-baseline gap-2">
                    <NumberTicker
                      value={12847}
                      className="text-3xl font-extrabold !text-foreground tracking-tight"
                    />
                    <span className="text-sm font-medium text-emerald-500">
                      +24%
                    </span>
                  </div>
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/number-ticker">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>
          </div>

          {/* ── Row 2: Wider demos ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* HyperText Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.1}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 text-white">
                      <CodeIcon className="h-3 w-3" />
                    </div>
                    Hyper Text
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <HyperText
                    className="text-xl font-bold text-foreground"
                    startOnView
                    animateOnHover
                  >
                    HOVER ME
                  </HyperText>
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/hyper-text">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>

            {/* AnimatedGradientText Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.15}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
                      <PaletteIcon className="h-3 w-3" />
                    </div>
                    Gradient Text
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <AnimatedGradientText
                    className="text-2xl font-bold"
                    speed={1.5}
                    colorFrom="#7c3aed"
                    colorTo="#ec4899"
                  >
                    Gradient Magic
                  </AnimatedGradientText>
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/animated-gradient-text">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>

            {/* SpinningText Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.2}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                      <Loader2Icon className="h-3 w-3" />
                    </div>
                    Spinning Text
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <div className="relative h-24 w-24 flex items-center justify-center">
                    <SpinningText
                      radius={3.5}
                      duration={8}
                      className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.3em]"
                    >
                      {`VIBE UI • PREMIUM • REACT • `}
                    </SpinningText>
                    <SparkIcon className="h-5 w-5 text-primary absolute" />
                  </div>
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/spinning-text">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>

            {/* TextAnimate Demo */}
            <BlurFade inView inViewMargin="-80px" delay={0.25}>
              <Card className="flex flex-col h-full border-border/50 bg-card/40 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white">
                      <WandIcon className="h-3 w-3" />
                    </div>
                    Text Animate
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center py-6">
                  <TextAnimate
                    animation="blurInUp"
                    by="character"
                    className="text-xl font-bold text-foreground"
                    startOnView
                  >
                    Character Magic
                  </TextAnimate>
                </CardContent>
                <div className="px-6 pb-4">
                  <Link href="/docs/animations/text-animate">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs border border-border h-8"
                    >
                      View Docs <ArrowIcon className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </BlurFade>
          </div>

          {/* Explore All Animations CTA */}
          <BlurFade inView inViewMargin="-50px" delay={0.1}>
            <div className="flex justify-center mt-10">
              <Link href="/docs/animations/text-animate">
                <Button
                  variant="secondary"
                  className="h-10 px-6 text-sm border border-border font-semibold group"
                >
                  <WandIcon className="mr-2 h-4 w-4" />
                  Explore All {animationCount} Animations
                  <ArrowIcon className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </BlurFade>
        </section>

        {/* ═══════════════════════════════════════════════
            WHY VIBE UI — Features Bento Grid
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 border-t border-border/60 relative z-10">
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <div className="text-center space-y-4 mb-16">
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="h2"
                className="text-3xl font-bold tracking-tight"
                startOnView
              >
                Why Choose Vibe UI?
              </TextAnimate>
              <p className="text-muted-foreground max-w-md mx-auto">
                Engineered with modern technologies and visual flexibility at
                its core.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: SparkIcon,
                title: 'Multi-Preset Visuals',
                desc: 'Toggle Glass, Retro, Neon Glow, or Clean styles across all components instantly.',
                gradient: 'from-violet-500 to-fuchsia-500',
              },
              {
                icon: TermIcon,
                title: 'Developer CLI',
                desc: 'Add components directly into your project with a single interactive npx command.',
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                icon: LayIcon,
                title: 'Tailwind CSS v4',
                desc: 'Built from day one for the speed and CSS-first architecture of Tailwind v4.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: ShieldIcon,
                title: 'Radix UI Primitives',
                desc: 'Full keyboard navigation, accessibility tags, and WAI-ARIA patterns built in.',
                gradient: 'from-amber-500 to-orange-500',
              },
              {
                icon: WandIcon,
                title: `${animationCount} Text Animations`,
                desc: 'Aurora text, typing effects, sparkle overlays, number tickers, and more — all scroll-triggered.',
                gradient: 'from-fuchsia-500 to-pink-500',
              },
            ].map((feature, i) => (
              <BlurFade
                key={feature.title}
                inView
                inViewMargin="-80px"
                delay={0.1 + i * 0.08}
              >
                <div className="group p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm space-y-3 text-left hover:border-primary/30 hover:bg-card/60 transition-all duration-300 h-full">
                  <div
                    className={`p-2.5 w-fit rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-base">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SCROLL VELOCITY BANNER
        ═══════════════════════════════════════════════ */}
        <section className="relative z-10 py-6 border-y border-border/40 overflow-hidden bg-muted/10">
          <ScrollVelocityContainer>
            <ScrollVelocityRow baseVelocity={6.0} className="py-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground/40 dark:text-foreground/35 uppercase tracking-widest mx-8 select-none">
                Vibe UI
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-primary/80 uppercase tracking-widest mx-8 select-none">
                •
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground/40 dark:text-foreground/35 uppercase tracking-widest mx-8 select-none">
                Premium Components
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-primary/80 uppercase tracking-widest mx-8 select-none">
                •
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground/40 dark:text-foreground/35 uppercase tracking-widest mx-8 select-none">
                Text Animations
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-primary/80 uppercase tracking-widest mx-8 select-none">
                •
              </span>
            </ScrollVelocityRow>
            <ScrollVelocityRow
              baseVelocity={6.0}
              direction={-1}
              className="py-2"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground/40 dark:text-foreground/35 uppercase tracking-widest mx-8 select-none">
                React
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-primary/80 uppercase tracking-widest mx-8 select-none">
                •
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground/40 dark:text-foreground/35 uppercase tracking-widest mx-8 select-none">
                Tailwind CSS v4
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-primary/80 uppercase tracking-widest mx-8 select-none">
                •
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground/40 dark:text-foreground/35 uppercase tracking-widest mx-8 select-none">
                Radix UI
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-primary/80 uppercase tracking-widest mx-8 select-none">
                •
              </span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </section>

        {/* ═══════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 relative z-10">
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card/80 via-background to-card/60 backdrop-blur-md p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-violet-500/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <BlurFade inView inViewMargin="-80px" delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    as="span"
                    startOnView
                  >
                    Ready to Build Something
                  </TextAnimate>{' '}
                  <AuroraText
                    className="text-3xl md:text-4xl font-extrabold"
                    colors={['#7c3aed', '#a855f7', '#d946ef', '#ec4899']}
                    speed={1.5}
                  >
                    Beautiful?
                  </AuroraText>
                </h2>
              </BlurFade>
              <BlurFade inView inViewMargin="-80px" delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Start crafting stunning interfaces with {componentCount}+
                  premium components and {animationCount} text animations. One
                  command is all it takes.
                </p>
              </BlurFade>
              <BlurFade inView inViewMargin="-80px" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/docs/introduction">
                    <Button
                      size="lg"
                      className="h-12 px-8 shadow-xl text-base font-semibold"
                    >
                      Get Started Free
                      <ArrowIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/jenishCoderkube/Vibe-uI"
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="h-12 px-8 border border-border text-base"
                    >
                      <StarIcon className="mr-2 h-4 w-4" />
                      Star on GitHub
                    </Button>
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
