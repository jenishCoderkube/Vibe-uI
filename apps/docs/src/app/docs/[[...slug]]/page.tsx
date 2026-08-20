import React from 'react'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { docsConfig } from '../../../config/docs'
import { Header } from '../../../components/header'
import { Sidebar } from '../../../components/sidebar'
import { ComponentPreview } from '../../../components/component-preview'
import { Installation } from '../../../components/installation'
import { ComponentPlayground } from '../../../components/playground'
import { ComponentHeader } from '../../../components/component-header'
import { PropsTable, PropRow } from '../../../components/props-table'
import {
  FrameworkGrid,
  FrameworkCard,
  Steps,
  Step,
  Callout,
} from '../../../components/installation-guide-components'
import { TableOfContents } from '../../../components/toc'
import { Footer } from '../../../components/footer'
import {
  Button,
  Input,
  FloatingInput,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Label,
  Checkbox,
  Switch,
  Textarea,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Kbd,
  Tooltip,
  Separator,
  Skeleton,
  SkeletonCircle,
  SkeletonLine,
  SkeletonCard,
  SkeletonProfile,
  SkeletonList,
  SkeletonTable,
  SkeletonPost,
  SkeletonChart,
  SkeletonForm,
  SkeletonFeed,
  SkeletonMusicPlayer,
  SkeletonDashboard,
  SkeletonECommerce,
  SkeletonChat,
  SkeletonVideoPlayer,
  SkeletonFileExplorer,
  SkeletonCalendar,
  SkeletonInvoice,
  SkeletonSettings,
  SkeletonNotifications,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Progress,
  CircularProgress,
  Slider,
  RadioGroup,
  RadioGroupItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  ScrollArea,
  ScrollBar,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastProvider,
  ToastViewport,
  Calendar,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  Uploader,
  LayoutShell,
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
  LayoutShellHeader,
  LayoutShellContent,
  InfiniteScroll,
  Marquee,
  TextGlitch,
  ThemeSwitcher,
  AspectRatio,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Toggle,
  Spinner,
  InputOTP,
  Item,
  Menubar,
  Message,
  MessageScroller,
  Marker,
  MarkerIcon,
  MarkerContent,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ButtonGroup,
  ButtonGroupItem,
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyActions,
  Combobox,
  DatePicker,
  TypingAnimation,
  HyperText,
  WordRotate,
  SparklesText,
  TextReveal,
  AuroraText,
  AnimatedShinyText,
  SpinningText,
  ScrollVelocityContainer,
  ScrollVelocityRow,
  BlurFade,
  NumberTicker,
  AnimatedGradientText,
  ComicText,
  DiaTextReveal,
  KineticText,
  LineShadowText,
  MorphingText,
  Text3DFlip,
  TextAnimate,
  VideoText,
} from 'vibe-ui'
import {
  AreaChartDemo,
  StackedAreaChartDemo,
  SimpleAreaChartDemo,
  InteractiveAreaChartDemo,
  BarChartDemo,
  HorizontalBarChartDemo,
  StackedBarChartDemo,
  HorizontalStackedBarChartDemo,
  InteractiveBarChartDemo,
  LinearBarChartDemo,
  BiaxialBarChartDemo,
  BarChartCustomLabelDemo,
  LineChartDemo,
  InteractiveLineChartDemo,
  MultiLineChartDemo,
  StepLineChartDemo,
  BiaxialLineChartDemo,
  DashedLineChartDemo,
  CustomDotLineChartDemo,
  PieChartDemo,
  PieChartCustomLabelDemo,
  PieChartCustomLegendDemo,
  PieChartCustomActiveShapeDemo,
  RadarChartDemo,
  InteractiveRadarChartDemo,
  RadialChartSimpleDemo,
  RadialChartLabelDemo,
  RadialChartGridDemo,
  RadialChartTextDemo,
  RadialChartShapeDemo,
  RadialChartStackedDemo,
  ComposedChartDemo,
  StackedComposedChartDemo,
  ComposedLineScatterChartDemo,
  BiaxialComposedChartDemo,
  ScatterChartDemo,
  ScatterChartSimpleDemo,
  ScatterChartMultipleDemo,
  ScatterChartLabelDemo,
  BubbleChartDemo,
  ScatterChartTrendLineDemo,
  AreaChartGradientDemo,
  AreaChartLegendDemo,
  BarChartMixedDemo,
  BarChartNegativeDemo,
  LineChartDotsDemo,
  AreaChartLinearDemo,
  AreaChartStepDemo,
  AreaChartStackedExpandDemo,
  BarChartActiveDemo,
  BarChartMultipleDemo,
  BarChartLabelDemo,
  LineChartLinearDemo,
  LineChartStepDemo,
  LineChartMultipleDemo,
  PieChartSimpleDemo,
  PieChartStackedDemo,
  PieChartDonutActiveDemo,
  RadarChartDotsDemo,
  RadarChartLinesOnlyDemo,
  RadarChartLegendDemo,
  RadialChartAngleDemo,
  RadialChartIconDemo,
  RadialChartLegendDemo,
  ComposedChartInteractiveDemo,
  ComposedChartHorizontalDemo,
  ComposedChartCustomLabelDemo,
} from '../../../components/chart-demo'
import { ScrollProgressDemo } from '../../../components/scroll-progress-demo'
import { InfiniteScrollDemo } from '../../../components/infinite-scroll-demo'
import { InfiniteScrollCardDemo } from '../../../components/infinite-scroll-card-demo'
import * as MarqueeDemos from '../../../components/marquee-demo'
import * as TextGlitchDemos from '../../../components/text-glitch-demo'
import * as ThemeSwitcherDemos from '../../../components/theme-switcher-demo'
import * as AspectRatioDemos from '../../../components/aspect-ratio-demo'
import * as CollapsibleDemos from '../../../components/collapsible-demo'
import * as ToggleDemos from '../../../components/toggle-demo'
import * as SpinnerDemos from '../../../components/spinner-demo'
import * as InputOTPDemos from '../../../components/input-otp-demo'
import * as ItemDemos from '../../../components/item-demo'
import * as MenubarDemos from '../../../components/menubar-demo'
import * as MessageDemos from '../../../components/message-demo'
import * as MessageScrollerDemos from '../../../components/message-scroller-demo'
import * as MarkerDemos from '../../../components/marker-demo'
import {
  LayoutDemoAnalytics,
  LayoutDemoDatabase,
  LayoutDemoDevOps,
  LayoutDemoAssets,
  LayoutDemoBilling,
} from '../../../components/layout-shell-demos'
import { SliderValueDemo } from '../../../components/slider-value-demo'
import { ProgressInteractiveDemo } from '../../../components/progress-interactive-demo'
import {
  CommandDemoBasic,
  CommandDemoThemes,
} from '../../../components/command-demo'
import * as NewDemos from '../../../components/new-components-demos'
import {
  TypingAnimationBasicDemo,
  TypingAnimationWordsDemo,
  TypingAnimationCustomDemo,
} from '../../../components/typing-animation-demo'
import {
  HyperTextBasicDemo,
  HyperTextHoverDemo,
  HyperTextTerminalDemo,
  WordRotateDemo,
  WordRotateHeroDemo,
  WordRotateAudienceDemo,
  SparklesTextDemo,
  SparklesTextCustomDemo,
  TextRevealDemo,
  AuroraTextDemo,
  AuroraTextCustomDemo,
  AnimatedShinyTextDemo,
  SpinningTextDemo,
  SpinningTextBadgeDemo,
  SpinningTextReverseDemo,
  ScrollVelocityDemo,
  ScrollVelocityImagesDemo,
  ScrollVelocityFeaturesDemo,
  BlurFadeDemo,
  BlurFadeTextDemo,
  BlurFadeGridDemo,
  NumberTickerDemo,
  NumberTickerDashboardDemo,
  NumberTickerMilestonesDemo,
  AnimatedGradientTextDemo,
  ComicTextDemo,
  DiaTextRevealDemo,
  DiaTextRevealTaglineDemo,
  DiaTextRevealNeonDemo,
  KineticTextDemo,
  KineticTextGradientDemo,
  KineticTextCustomDemo,
  LineShadowTextDemo,
  LineShadowTextLeftDemo,
  LineShadowTextRightToLeftDemo,
  MorphingTextDemo,
  Text3DFlipDemo,
  TextAnimateDemo,
  VideoTextDemo,
} from '../../../components/text-animations-demo'
import {
  LightTunnelBasicDemo,
  LightTunnelCyberDemo,
  LightTunnelSunsetDemo,
} from '../../../components/light-tunnel-demo'
import {
  WebThreadsBasicDemo,
  WebThreadsMatrixDemo,
  WebThreadsFlameDemo,
} from '../../../components/web-threads-demo'
import {
  SlicedWavesBasicDemo,
  SlicedWavesCyberDemo,
  SlicedWavesOceanDemo,
} from '../../../components/sliced-waves-demo'
import {
  ScannerBasicDemo,
  ScannerGreenRadarDemo,
  ScannerSunsetDemo,
} from '../../../components/scanner-demo'
import {
  LightTunnelCustomizer,
  WebThreadsCustomizer,
  SlicedWavesCustomizer,
  ScannerCustomizer,
} from '../../../components/background-customizers'
import { SidebarDemo } from '../../../components/sidebar-demo'
import { CodeBlockPre } from '../../../components/code-block'
import {
  ArrowUp,
  Search,
  Mail,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Layers,
  Settings,
  ShieldAlert,
  Bell,
  VolumeX,
  User,
  LogOut,
  FolderOpen,
  CreditCard,
  Keyboard,
  Inbox,
  RefreshCw,
  Globe,
} from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || ['introduction']

  const pageTitle = slug[slug.length - 1]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const isComponent = slug[0] === 'components'
  const isAnimation = slug[0] === 'animations'
  const isBackground = slug[0] === 'backgrounds'
  const descriptionText = isComponent
    ? `Explore visual styles, responsive console layouts, CLI setup instructions, API properties reference, and implementation codes for the custom ${pageTitle} component in Vibe UI.`
    : isAnimation
      ? `Learn how to integrate the dynamic, hardware-accelerated Vibe UI ${pageTitle} animation into your React and Next.js applications.`
      : isBackground
        ? `Learn how to configure, style, install, and optimize the hardware-accelerated Vibe UI ${pageTitle} background effect into your React and Next.js applications.`
        : `Learn how to configure, style, install, and optimize the Vibe UI framework for the ${pageTitle} page with modern React best practices.`

  return {
    title: pageTitle,
    description: descriptionText,
    openGraph: {
      title: `${pageTitle} ${isComponent ? 'Component' : isAnimation ? 'Animation' : isBackground ? 'Background' : 'Guide'} | Vibe UI`,
      description: descriptionText,
      url: `https://vibe-ui-kit.vercel.app/docs/${slug.join('/')}`,
      type: 'article',
      siteName: 'Vibe UI',
      images: [
        {
          url: 'https://vibe-ui-kit.vercel.app/og-image.jpg',
          width: 512,
          height: 512,
          alt: 'Vibe UI Logo',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${pageTitle} | Vibe UI`,
      description: descriptionText,
      images: ['https://vibe-ui-kit.vercel.app/og-image.jpg'],
    },
  }
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ')

const PreviewWrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'w-full max-w-md px-4 flex flex-col items-center gap-6',
      className,
    )}
    {...props}
  />
)

const PreviewRow = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex gap-4 items-center justify-center flex-wrap',
      className,
    )}
    {...props}
  />
)

const SelectAvatarDemo = () => {
  return (
    <Select defaultValue="alice">
      <SelectTrigger />
      <SelectContent showSearch={true}>
        <SelectItem value="alice">
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5 flex shrink-0">
              <AvatarFallback className="text-[9px] h-full w-full flex items-center justify-center">
                AV
              </AvatarFallback>
            </Avatar>
            <span>Alice Vance</span>
          </div>
        </SelectItem>
        <SelectItem value="bob">
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5 flex shrink-0">
              <AvatarFallback className="text-[9px] h-full w-full flex items-center justify-center">
                BS
              </AvatarFallback>
            </Avatar>
            <span>Bob Smith</span>
          </div>
        </SelectItem>
        <SelectItem value="charlie">
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5 flex shrink-0">
              <AvatarFallback className="text-[9px] h-full w-full flex items-center justify-center">
                CD
              </AvatarFallback>
            </Avatar>
            <span>Charlie Davis</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

const MultiSelectNestedDemo = () => {
  return (
    <MultiSelect>
      <MultiSelectTrigger placeholder="Browse nested directories..." />
      <MultiSelectContent showSearch={true}>
        <MultiSelectGroup
          heading="Software Engineering"
          values={['react', 'vue', 'rn', 'flutter']}
        >
          <div className="space-y-1">
            <MultiSelectGroup heading="Frontend Web" values={['react', 'vue']}>
              <MultiSelectItem value="react">React.js</MultiSelectItem>
              <MultiSelectItem value="vue">Vue.js</MultiSelectItem>
            </MultiSelectGroup>
            <MultiSelectGroup heading="Mobile Apps" values={['rn', 'flutter']}>
              <MultiSelectItem value="rn">React Native</MultiSelectItem>
              <MultiSelectItem value="flutter">Flutter</MultiSelectItem>
            </MultiSelectGroup>
          </div>
        </MultiSelectGroup>
        <MultiSelectGroup heading="Infrastructure" values={['aws', 'gcp']}>
          <MultiSelectItem value="aws">Amazon Web Services</MultiSelectItem>
          <MultiSelectItem value="gcp">Google Cloud Platform</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  )
}

const DrawerDemoBasic = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer (Right)</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader className="text-left">
          <DrawerTitle>Basic Drawer</DrawerTitle>
          <DrawerDescription>
            This is a standard right-aligned sliding side panel.
          </DrawerDescription>
        </DrawerHeader>
        <div className="py-4 text-sm text-left">
          This panel slides in from the right edge. Use it for forms, filters,
          or additional details.
        </div>
        <DrawerFooter className="mt-auto">
          <DrawerClose asChild>
            <Button className="w-full">Close Drawer</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoGlassCart = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="glow">Open Cart (Glass)</Button>
      </DrawerTrigger>
      <DrawerContent
        side="right"
        variant="glass"
        className="w-[380px] text-white flex flex-col h-full justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-white/10 pb-4">
            <DrawerTitle className="text-white">Shopping Cart</DrawerTitle>
            <DrawerDescription className="text-white/60">
              Verify your items before proceeding.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-6 space-y-4 text-left">
            <div className="flex justify-between items-center text-sm">
              <span>1x Vibe Brutalist Keyboard</span>
              <span className="font-bold">$149.99</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>2x Glow Theme Badges</span>
              <span className="font-bold">$19.98</span>
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between font-bold">
              <span>Subtotal</span>
              <span>$169.97</span>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-white/10 pt-4 mt-auto">
          <Button variant="glow" className="w-full">
            Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoRetroSettings = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="retro">Open Settings (Retro Bottom)</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom" variant="retro" className="max-h-[300px]">
        <DrawerHeader className="text-left pb-2">
          <DrawerTitle className="font-black text-xl uppercase">
            System Settings
          </DrawerTitle>
          <DrawerDescription className="text-foreground/80 font-medium">
            Configure retro terminal layouts.
          </DrawerDescription>
        </DrawerHeader>
        <div className="py-4 space-y-4 text-left">
          <div className="flex items-center justify-between">
            <Label className="font-black uppercase text-xs">
              High Contrast Mode
            </Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label className="font-black uppercase text-xs">
              Solid Box Shadows
            </Label>
            <Switch defaultChecked />
          </div>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="retro" className="font-black uppercase text-sm">
              Save & Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoGlowTerminal = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="glow">Open Terminal (Glow Bottom)</Button>
      </DrawerTrigger>
      <DrawerContent
        side="bottom"
        variant="glow"
        className="h-[350px] flex flex-col justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-primary/20 pb-3">
            <DrawerTitle className="text-primary font-mono text-base flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Vibe CLI Log Stream
            </DrawerTitle>
            <DrawerDescription className="text-primary/60 font-mono text-xs">
              Real-time compilation logs.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 font-mono text-xs text-left text-primary/80 space-y-1.5 overflow-y-auto max-h-[160px]">
            <div>[system] Starting builder in E:\Custom-Liebary...</div>
            <div>[system] Building component registry maps...</div>
            <div className="text-emerald-400">
              [success] Built registry/components/drawer.json successfully!
            </div>
            <div>[system] Spawning next-router page listener...</div>
          </div>
        </div>
        <DrawerFooter className="border-t border-primary/20 pt-3 flex gap-2 mt-auto">
          <Button variant="outline" className="text-xs">
            Clear logs
          </Button>
          <DrawerClose asChild>
            <Button variant="glow" className="text-xs">
              Dismiss
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoTopSearch = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Search Files (Top)</Button>
      </DrawerTrigger>
      <DrawerContent side="top" className="h-[260px] p-6">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex items-center gap-3 border border-border rounded-lg px-3 py-2 bg-muted/20">
            <svg
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="bg-transparent outline-none text-sm w-full text-foreground"
              placeholder="Search components, documentation, or code..."
            />
          </div>
          <div className="text-left text-xs text-muted-foreground space-y-2">
            <div className="font-semibold uppercase tracking-wider text-[10px] pb-1 border-b border-border">
              Recent Searches
            </div>
            <div className="hover:text-primary cursor-pointer flex justify-between">
              <span>components/drawer.tsx</span>
              <Kbd>Enter</Kbd>
            </div>
            <div className="hover:text-primary cursor-pointer flex justify-between">
              <span>docs/components/multi-select.mdx</span>
              <Kbd>Enter</Kbd>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoTaskPlanner = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Task Planner</Button>
      </DrawerTrigger>
      <DrawerContent
        side="right"
        className="w-[450px] flex flex-col justify-between h-full"
      >
        <div>
          <DrawerHeader className="text-left">
            <Badge variant="glow" className="w-fit text-[10px] py-0 px-2">
              FEATURE TASK
            </Badge>
            <DrawerTitle className="text-xl font-bold mt-2">
              Implement active tabs background pill sliding
            </DrawerTitle>
            <DrawerDescription>
              Resolve component animation transitions and offsets calculation.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-4 text-sm text-left px-4">
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-border">
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">
                  Assignee
                </span>
                <span className="font-semibold text-foreground">
                  AV (Antigravity)
                </span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">
                  Due Date
                </span>
                <span className="font-semibold text-foreground">
                  Today, 6:00 PM
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-muted-foreground uppercase font-bold">
                Subtasks
              </span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Checkbox id="task1" defaultChecked />
                  <label htmlFor="task1" className="text-xs">
                    Offset calculation triggers
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="task2" defaultChecked />
                  <label htmlFor="task2" className="text-xs">
                    Declare use client context
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-border pt-4 mt-auto">
          <Button className="w-full">Mark Complete</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoMobileNav = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Mobile Menu</Button>
      </DrawerTrigger>
      <DrawerContent
        side="left"
        className="w-[280px] flex flex-col justify-between h-full"
      >
        <div>
          <DrawerHeader className="text-left border-b border-border pb-4">
            <DrawerTitle className="font-black text-lg">
              VIBE UI KIT
            </DrawerTitle>
            <DrawerDescription>v0.1.4 Documentation Menu</DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-2 text-left">
            <Button variant="ghost" className="w-full justify-start text-sm">
              Getting Started
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-semibold text-primary"
            >
              Components
            </Button>
            <div className="pl-4 space-y-1">
              <div className="text-xs py-1 text-muted-foreground hover:text-foreground cursor-pointer">
                Button
              </div>
              <div className="text-xs py-1 text-muted-foreground hover:text-foreground cursor-pointer">
                Card
              </div>
              <div className="text-xs py-1 text-primary font-bold cursor-pointer">
                Drawer
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-border pt-4 mt-auto">
          <span className="text-[10px] text-muted-foreground text-center w-full">
            Designed by Coderkube
          </span>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoDiagnostics = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Telemetry</Button>
      </DrawerTrigger>
      <DrawerContent
        side="top"
        className="h-[280px] bg-background text-foreground border-border"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <DrawerHeader className="border-b border-zinc-800 pb-3 text-left">
            <DrawerTitle className="text-white text-base">
              System Telemetry Dashboard
            </DrawerTitle>
            <DrawerDescription className="text-zinc-400 text-xs">
              Live resource metrics update.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">CPU Usage</span>
                <span className="font-bold">42%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: '42%' }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Memory</span>
                <span className="font-bold">64%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: '64%' }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Disk I/O</span>
                <span className="font-bold">12%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: '12%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoMusicQueue = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Playlist Queue</Button>
      </DrawerTrigger>
      <DrawerContent
        side="bottom"
        className="h-[380px] flex flex-col justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-border pb-3">
            <DrawerTitle>Playback Playlist Queue</DrawerTitle>
            <DrawerDescription>
              Configure tracks and playback sequence.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-2 text-left max-h-[200px] overflow-y-auto">
            <div className="flex justify-between items-center text-xs py-2 px-3 bg-muted/20 rounded border border-border">
              <span className="font-semibold text-primary">
                1. Retro Synths (Active)
              </span>
              <span className="text-muted-foreground">3:42</span>
            </div>
            <div className="flex justify-between items-center text-xs py-2 px-3 hover:bg-muted/10 cursor-pointer">
              <span>2. Neon Glow Waves</span>
              <span className="text-muted-foreground">4:15</span>
            </div>
            <div className="flex justify-between items-center text-xs py-2 px-3 hover:bg-muted/10 cursor-pointer">
              <span>3. Glassmorphic Skies</span>
              <span className="text-muted-foreground">2:58</span>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-border pt-3 mt-auto">
          <Button variant="outline" className="w-full text-xs">
            Shuffle All Tracks
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoAccountNav = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="glow">Open Admin Panel (Left Glass)</Button>
      </DrawerTrigger>
      <DrawerContent
        side="left"
        variant="glass"
        className="w-[300px] text-white flex flex-col h-full justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-white/10 pb-4">
            <DrawerTitle className="text-white">Admin Console</DrawerTitle>
            <DrawerDescription className="text-white/60">
              Config key credentials.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-1 text-left">
            <div className="text-xs font-semibold py-2 px-3 rounded hover:bg-white/5 cursor-pointer text-white">
              General Overview
            </div>
            <div className="text-xs font-semibold py-2 px-3 rounded bg-white/10 text-primary cursor-pointer">
              Secret API Credentials
            </div>
            <div className="text-xs font-semibold py-2 px-3 rounded hover:bg-white/5 cursor-pointer text-white">
              Security Auditing logs
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-white/10 pt-4 mt-auto">
          <Button
            variant="ghost"
            className="text-white/80 w-full hover:text-white justify-start"
          >
            Log Out Session
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoDbSchema = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open DB Schema</Button>
      </DrawerTrigger>
      <DrawerContent
        side="right"
        className="w-[450px] flex flex-col h-full justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-border pb-3">
            <DrawerTitle className="font-mono text-base">
              table: user_accounts
            </DrawerTitle>
            <DrawerDescription>
              Entity relational schema mappings.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 font-mono text-xs text-left space-y-3 px-4">
            <div className="flex justify-between items-center py-1.5 border-b border-muted">
              <span className="font-bold">id</span>
              <span className="text-primary font-semibold">
                uuid (PRIMARY KEY)
              </span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-muted">
              <span>email</span>
              <span className="text-muted-foreground">varchar(255)</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-muted">
              <span>created_at</span>
              <span className="text-muted-foreground">timestamp</span>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-border pt-3 mt-auto">
          <span className="text-[10px] text-muted-foreground text-left w-full">
            Indexes: idx_user_accounts_email
          </span>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoEventLogs = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="glow">Open Event Logs (Glow Right)</Button>
      </DrawerTrigger>
      <DrawerContent
        side="right"
        variant="glow"
        className="w-[380px] flex flex-col h-full justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-primary/20 pb-3">
            <DrawerTitle className="text-primary">
              System Events Log
            </DrawerTitle>
            <DrawerDescription className="text-primary/60">
              Live production server logs.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 font-mono text-xs text-left text-primary/80 space-y-3 px-4 max-h-[250px] overflow-y-auto">
            <div className="text-emerald-400">
              [info] DB connection established
            </div>
            <div className="text-amber-400">
              [warn] High response time detected in API router
            </div>
            <div className="text-red-400">
              [error] Failed compilation in apps/docs cache
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-primary/20 pt-3 mt-auto">
          <Button variant="glow" className="w-full text-xs">
            Acknowledge All Warnings
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoChatTicket = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Support Ticket</Button>
      </DrawerTrigger>
      <DrawerContent
        side="right"
        className="w-[420px] flex flex-col h-full justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-border pb-3">
            <DrawerTitle>Chat Support Ticket #1204</DrawerTitle>
            <DrawerDescription>Conversation history thread.</DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-3 text-xs text-left px-4 max-h-[300px] overflow-y-auto">
            <div className="bg-muted p-2.5 rounded-lg w-3/4">
              <span className="font-semibold block text-[10px] text-muted-foreground">
                Support Agent
              </span>
              How can we assist you with Vibe UI registration today?
            </div>
            <div className="bg-primary/10 border border-primary/20 p-2.5 rounded-lg w-3/4 ml-auto text-right">
              <span className="font-semibold block text-[10px] text-primary/60">
                You
              </span>
              I got client-side hydration warning errors during compilation.
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-border flex gap-2 mt-auto">
          <Input className="text-xs" placeholder="Type reply message..." />
          <Button className="text-xs">Send</Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoInvoiceSummary = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Invoice Summary</Button>
      </DrawerTrigger>
      <DrawerContent
        side="bottom"
        variant="glass"
        className="max-h-[380px] text-white flex flex-col justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-white/10 pb-3">
            <DrawerTitle className="text-white">
              Receipt Summary Invoice
            </DrawerTitle>
            <DrawerDescription className="text-white/60">
              Monthly transaction billing breakdown.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-2 text-xs text-left px-4">
            <div className="flex justify-between">
              <span>Vibe UI Enterprise Premium License (Monthly)</span>
              <span>$49.00</span>
            </div>
            <div className="flex justify-between">
              <span>Standard Workspace Storage Add-on</span>
              <span>$10.00</span>
            </div>
            <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-sm text-primary">
              <span>Total Charge Amount</span>
              <span>$59.00</span>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-white/10 pt-3 mt-auto">
          <Button variant="glow" className="w-full">
            Download Invoice PDF
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoApiKeys = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Keys Console</Button>
      </DrawerTrigger>
      <DrawerContent
        side="right"
        className="w-[420px] flex flex-col h-full justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-border pb-3">
            <DrawerTitle>Secret Credentials Console</DrawerTitle>
            <DrawerDescription>Manage secure token headers.</DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-4 text-left px-4">
            <div className="space-y-1">
              <span className="text-[10px] text-muted-foreground uppercase font-bold block">
                Production Secret Key
              </span>
              <div className="flex gap-2">
                <Input
                  value="sk_live_51qd9bn5ritqlbH2_"
                  readOnly
                  className="font-mono text-xs"
                />
                <Button variant="outline" size="sm">
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-border pt-3 mt-auto">
          <span className="text-[10px] text-muted-foreground w-full text-center">
            Rotate your secret keys every 90 days.
          </span>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerDemoMacBookConfig = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Specifications (Left)</Button>
      </DrawerTrigger>
      <DrawerContent
        side="left"
        className="w-[360px] flex flex-col h-full justify-between"
      >
        <div>
          <DrawerHeader className="text-left border-b border-border pb-3">
            <DrawerTitle>MacBook Pro Configurator</DrawerTitle>
            <DrawerDescription>
              Select processor cores allocation.
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-4 space-y-4 text-left px-4 text-xs">
            <div className="space-y-2">
              <span className="font-semibold">Processor Specs</span>
              <RadioGroup defaultValue="m3pro">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="m3pro" id="m3pro" />
                  <label htmlFor="m3pro">
                    Apple M3 Pro (12-core CPU, 18-core GPU)
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="m3max" id="m3max" />
                  <label htmlFor="m3max">
                    Apple M3 Max (14-core CPU, 30-core GPU)
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <DrawerFooter className="border-t border-border pt-3 mt-auto">
          <Button className="w-full">Configure Device</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const AvatarDemoSizes = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <Avatar className="h-6 w-6 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop"
          alt="XS"
        />
        <AvatarFallback className="text-[8px] h-full w-full flex items-center justify-center">
          XS
        </AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          alt="MD"
        />
        <AvatarFallback className="text-xs h-full w-full flex items-center justify-center">
          MD
        </AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
          alt="LG"
        />
        <AvatarFallback className="text-lg h-full w-full flex items-center justify-center">
          LG
        </AvatarFallback>
      </Avatar>
      <Avatar className="h-24 w-24 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
          alt="XL"
        />
        <AvatarFallback className="text-3xl h-full w-full flex items-center justify-center">
          XL
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

const AvatarDemoStack = () => {
  return (
    <div className="flex -space-x-3 overflow-hidden p-2">
      <Avatar className="inline-block border-2 border-background shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          alt="User 1"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          U1
        </AvatarFallback>
      </Avatar>
      <Avatar className="inline-block border-2 border-background shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
          alt="User 2"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          U2
        </AvatarFallback>
      </Avatar>
      <Avatar className="inline-block border-2 border-background shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
          alt="User 3"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          U3
        </AvatarFallback>
      </Avatar>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-background bg-zinc-900 text-xs font-bold text-white shadow-sm select-none">
        +4
      </div>
    </div>
  )
}

const AvatarDemoStatus = () => {
  return (
    <div className="flex gap-6 items-center justify-center">
      <div className="relative">
        <Avatar className="shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            alt="Active"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            AC
          </AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar className="shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Busy"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            BS
          </AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-rose-500 ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar className="shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Idle"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            ID
          </AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-amber-500 ring-2 ring-background" />
      </div>
    </div>
  )
}

const AvatarDemoRingGlow = () => {
  return (
    <div className="flex gap-6 items-center justify-center p-2">
      <div className="rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 to-pink-500">
        <Avatar className="border-2 border-background shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            alt="Story"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            ST
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="rounded-full p-[3px] bg-primary shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        <Avatar className="border border-background shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Story"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            ST
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

const AvatarDemoNotification = () => {
  return (
    <div className="flex gap-6 items-center justify-center">
      <div className="relative">
        <Avatar className="shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            alt="Alert"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            AL
          </AvatarFallback>
        </Avatar>
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white ring-2 ring-background select-none">
          4
        </span>
      </div>
      <div className="relative">
        <Avatar className="shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Warning"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            WN
          </AvatarFallback>
        </Avatar>
        <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white ring-1.5 ring-background select-none">
          !
        </span>
      </div>
    </div>
  )
}

const AvatarDemoSquareRetro = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Avatar
        variant="retro"
        className="h-12 w-12 rounded-xl border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] shrink-0"
      >
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          alt="Retro"
        />
        <AvatarFallback className="rounded-none h-full w-full flex items-center justify-center text-xs">
          RT
        </AvatarFallback>
      </Avatar>
      <Avatar
        variant="retro"
        className="h-16 w-16 rounded-2xl border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] shrink-0"
      >
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
          alt="Retro"
        />
        <AvatarFallback className="rounded-none h-full w-full flex items-center justify-center text-xs">
          RT
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

const AvatarDemoWithInfo = () => {
  return (
    <div className="flex flex-col gap-3 max-w-sm mx-auto p-4 border border-border rounded-xl bg-card">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 ring-2 ring-primary/20 shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            alt="Sarah"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            SV
          </AvatarFallback>
        </Avatar>
        <div className="text-left">
          <div className="font-bold text-sm text-foreground flex items-center gap-1.5">
            Sarah Vance
            <Badge variant="glow" className="text-[8px] py-0 px-1">
              Pro
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            sarah.vance@vibe.dev
          </div>
        </div>
      </div>
    </div>
  )
}

const AvatarDemoHoverCard = () => {
  return (
    <Tooltip
      content={
        <div className="p-3 text-left space-y-2 max-w-[200px] whitespace-normal">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="Bob"
              />
              <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
                BS
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-bold text-xs text-white">Bob Smith</div>
              <div className="text-[10px] text-white/50">@bob_codes</div>
            </div>
          </div>
          <div className="text-[10px] text-white/70 leading-relaxed">
            Frontend Engineer working on Advanced Agentic workflows.
          </div>
        </div>
      }
    >
      <div className="cursor-pointer inline-block">
        <Avatar className="ring-2 ring-primary/10 hover:ring-primary transition-all duration-300 shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Bob"
          />
          <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
            BS
          </AvatarFallback>
        </Avatar>
      </div>
    </Tooltip>
  )
}

const AvatarDemoGroupOverlapping = () => {
  return (
    <div className="relative flex items-center h-12 w-20 justify-center">
      <Avatar className="absolute left-0 border-2 border-background z-10 hover:z-30 transition-all duration-200 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          alt="Joint 1"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          J1
        </AvatarFallback>
      </Avatar>
      <Avatar className="absolute left-6 border-2 border-background z-20 hover:z-30 transition-all duration-200 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
          alt="Joint 2"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          J2
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

const AvatarDemoGradientFallback = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Avatar className="shrink-0">
        <AvatarFallback className="bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-mono font-bold h-full w-full flex items-center justify-center text-xs">
          AV
        </AvatarFallback>
      </Avatar>
      <Avatar className="shrink-0">
        <AvatarFallback className="bg-gradient-to-tr from-pink-600 to-orange-500 text-white font-mono font-bold h-full w-full flex items-center justify-center text-xs">
          JD
        </AvatarFallback>
      </Avatar>
      <Avatar className="shrink-0">
        <AvatarFallback className="bg-gradient-to-tr from-emerald-500 to-teal-600 text-white font-mono font-bold h-full w-full flex items-center justify-center text-xs">
          CK
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

const AvatarDemoProgressRing = () => {
  return (
    <div className="relative h-16 w-16 flex items-center justify-center p-2">
      <svg className="absolute inset-0 h-full w-full rotate-[-90deg]">
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted/20"
          fill="transparent"
        />
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-primary"
          strokeDasharray="163"
          strokeDashoffset="48"
          fill="transparent"
        />
      </svg>
      <Avatar className="h-11 w-11 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          alt="Progress"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          PR
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

const AvatarDemoSoftNeomorphic = () => {
  return (
    <div className="flex gap-6 items-center justify-center p-4 bg-muted/30 rounded-xl border border-border/50">
      <Avatar className="h-12 w-12 shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)] border border-white/50 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
          alt="Neomorphic"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          NM
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

const AvatarDemoGridWorkspace = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 border border-border rounded-xl bg-card">
      <Avatar className="shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          alt="Sarah"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          SV
        </AvatarFallback>
      </Avatar>
      <Avatar className="shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
          alt="Bob"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          BS
        </AvatarFallback>
      </Avatar>
      <Avatar className="shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
          alt="Charlie"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          CD
        </AvatarFallback>
      </Avatar>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted border border-border text-xs font-bold text-muted-foreground select-none">
        +12
      </div>
    </div>
  )
}

const AvatarDemoGlassFloating = () => {
  return (
    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white max-w-sm flex items-center gap-3">
      <Avatar variant="glass" className="h-10 w-10 shrink-0">
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          alt="Sarah"
        />
        <AvatarFallback className="h-full w-full flex items-center justify-center text-xs">
          SV
        </AvatarFallback>
      </Avatar>
      <div className="text-left">
        <div className="font-bold text-xs text-white">Sarah Glass</div>
        <div className="text-[10px] text-white/50">Developer Console</div>
      </div>
    </div>
  )
}

const AvatarDemoBrandLogo = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Avatar className="bg-muted text-foreground font-black text-xs font-mono border border-border shrink-0">
        <AvatarFallback className="bg-muted text-foreground font-mono h-full w-full flex items-center justify-center">
          ▲
        </AvatarFallback>
      </Avatar>
      <Avatar className="bg-purple-950/40 text-purple-400 font-mono text-xs border border-purple-500/20 shrink-0">
        <AvatarFallback className="bg-purple-950/40 text-purple-400 font-mono font-black h-full w-full flex items-center justify-center">
          L
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

const FloatingInputFormPropsDemo = () => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-6 border border-border rounded-xl bg-card text-left shadow-sm">
      {/* Outlined Group */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
          Outlined
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <FloatingInput
            label="Required *"
            defaultValue="Hello World"
            required
          />
          <FloatingInput label="Disabled" defaultValue="Hello World" disabled />
          <FloatingInput
            label="Password"
            type="password"
            defaultValue="password"
          />
          <FloatingInput
            label="Read Only"
            defaultValue="Hello World"
            readOnly
          />
          <FloatingInput label="Search field" type="search" />
          <div className="flex flex-col">
            <FloatingInput label="Helper text" defaultValue="Default Value" />
            <span className="text-[11px] text-muted-foreground mt-1 ml-3 select-none">
              Some important text
            </span>
          </div>
        </div>
      </div>

      {/* Filled Group */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
          Filled
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <FloatingInput
            label="Required *"
            variant="filled"
            defaultValue="Hello World"
            required
          />
          <FloatingInput
            label="Disabled"
            variant="filled"
            defaultValue="Hello World"
            disabled
          />
          <FloatingInput
            label="Password"
            variant="filled"
            type="password"
            defaultValue="password"
          />
          <FloatingInput
            label="Read Only"
            variant="filled"
            defaultValue="Hello World"
            readOnly
          />
          <FloatingInput label="Search field" variant="filled" type="search" />
          <div className="flex flex-col">
            <FloatingInput
              label="Helper text"
              variant="filled"
              defaultValue="Default Value"
            />
            <span className="text-[11px] text-muted-foreground mt-1 ml-3 select-none">
              Some important text
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }
  if (Array.isArray(node)) {
    return node.map((child) => getNodeText(child)).join('')
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getNodeText(node.props.children)
  }
  return ''
}

function getHeadingId(children: React.ReactNode) {
  const id = getNodeText(children)
    .trim()
    .replace(/\s+/g, '-')
    .replace(/'/g, '')
    .replace(/\?/g, '')
    .toLowerCase()
  return id || undefined
}

function HeadingAnchor({
  id,
  children,
}: {
  id?: string
  children: React.ReactNode
}) {
  return <>{children}</>
}

const mdxComponents = {
  ...NewDemos,
  LightTunnelBasicDemo,
  LightTunnelCyberDemo,
  LightTunnelSunsetDemo,
  WebThreadsBasicDemo,
  WebThreadsMatrixDemo,
  WebThreadsFlameDemo,
  SlicedWavesBasicDemo,
  SlicedWavesCyberDemo,
  SlicedWavesOceanDemo,
  ScannerBasicDemo,
  ScannerGreenRadarDemo,
  ScannerSunsetDemo,
  LightTunnelCustomizer,
  WebThreadsCustomizer,
  SlicedWavesCustomizer,
  ScannerCustomizer,
  DrawerDemoBasic,
  DrawerDemoGlassCart,
  DrawerDemoRetroSettings,
  DrawerDemoGlowTerminal,
  DrawerDemoTopSearch,
  DrawerDemoTaskPlanner,
  DrawerDemoMobileNav,
  DrawerDemoDiagnostics,
  DrawerDemoMusicQueue,
  DrawerDemoAccountNav,
  DrawerDemoDbSchema,
  DrawerDemoEventLogs,
  DrawerDemoChatTicket,
  DrawerDemoInvoiceSummary,
  DrawerDemoApiKeys,
  DrawerDemoMacBookConfig,
  AvatarDemoSizes,
  AvatarDemoStack,
  AvatarDemoStatus,
  AvatarDemoRingGlow,
  AvatarDemoNotification,
  AvatarDemoSquareRetro,
  AvatarDemoWithInfo,
  AvatarDemoHoverCard,
  AvatarDemoGroupOverlapping,
  AvatarDemoGradientFallback,
  AvatarDemoProgressRing,
  AvatarDemoSoftNeomorphic,
  AvatarDemoGridWorkspace,
  AvatarDemoGlassFloating,
  AvatarDemoBrandLogo,
  PreviewWrapper,
  PreviewRow,
  SelectAvatarDemo,
  MultiSelectNestedDemo,
  SliderValueDemo,
  ProgressInteractiveDemo,
  CommandDemoBasic,
  CommandDemoThemes,
  Button,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  AreaChartDemo,
  StackedAreaChartDemo,
  SimpleAreaChartDemo,
  InteractiveAreaChartDemo,
  BarChartDemo,
  HorizontalBarChartDemo,
  StackedBarChartDemo,
  HorizontalStackedBarChartDemo,
  InteractiveBarChartDemo,
  LinearBarChartDemo,
  BiaxialBarChartDemo,
  BarChartCustomLabelDemo,
  LineChartDemo,
  InteractiveLineChartDemo,
  MultiLineChartDemo,
  StepLineChartDemo,
  BiaxialLineChartDemo,
  DashedLineChartDemo,
  CustomDotLineChartDemo,
  PieChartDemo,
  PieChartCustomLabelDemo,
  PieChartCustomLegendDemo,
  PieChartCustomActiveShapeDemo,
  RadarChartDemo,
  InteractiveRadarChartDemo,
  RadialChartSimpleDemo,
  RadialChartLabelDemo,
  RadialChartGridDemo,
  RadialChartTextDemo,
  RadialChartShapeDemo,
  RadialChartStackedDemo,
  ComposedChartDemo,
  StackedComposedChartDemo,
  ComposedLineScatterChartDemo,
  BiaxialComposedChartDemo,
  ScatterChartDemo,
  ScatterChartSimpleDemo,
  ScatterChartMultipleDemo,
  ScatterChartLabelDemo,
  BubbleChartDemo,
  ScatterChartTrendLineDemo,
  AreaChartGradientDemo,
  AreaChartLegendDemo,
  BarChartMixedDemo,
  BarChartNegativeDemo,
  LineChartDotsDemo,
  AreaChartLinearDemo,
  AreaChartStepDemo,
  AreaChartStackedExpandDemo,
  BarChartActiveDemo,
  BarChartMultipleDemo,
  BarChartLabelDemo,
  LineChartLinearDemo,
  LineChartStepDemo,
  LineChartMultipleDemo,
  PieChartSimpleDemo,
  PieChartStackedDemo,
  PieChartDonutActiveDemo,
  RadarChartDotsDemo,
  RadarChartLinesOnlyDemo,
  RadarChartLegendDemo,
  RadialChartAngleDemo,
  RadialChartIconDemo,
  RadialChartLegendDemo,
  ComposedChartInteractiveDemo,
  ComposedChartHorizontalDemo,
  ComposedChartCustomLabelDemo,
  Input,
  FloatingInput,
  FloatingInputFormPropsDemo,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Label,
  Checkbox,
  Switch,
  Textarea,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Kbd,
  Tooltip,
  Separator,
  Skeleton,
  SkeletonCircle,
  SkeletonLine,
  SkeletonCard,
  SkeletonProfile,
  SkeletonList,
  SkeletonTable,
  SkeletonPost,
  SkeletonChart,
  SkeletonForm,
  SkeletonFeed,
  SkeletonMusicPlayer,
  SkeletonDashboard,
  SkeletonECommerce,
  SkeletonChat,
  SkeletonVideoPlayer,
  SkeletonFileExplorer,
  SkeletonCalendar,
  SkeletonInvoice,
  SkeletonSettings,
  SkeletonNotifications,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Progress,
  CircularProgress,
  ScrollProgressDemo,
  Slider,
  RadioGroup,
  RadioGroupItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  ScrollArea,
  ScrollBar,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastProvider,
  ToastViewport,
  Calendar,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  Uploader,
  LayoutShell,
  LayoutShellSidebar,
  LayoutShellBrand,
  LayoutShellNav,
  LayoutShellNavItem,
  LayoutShellHeader,
  LayoutShellContent,
  InfiniteScroll,
  InfiniteScrollDemo,
  InfiniteScrollCardDemo,
  Marquee,
  TextGlitch,
  ThemeSwitcher,
  AspectRatio,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Toggle,
  Spinner,
  Marker,
  MarkerIcon,
  MarkerContent,
  TextGlitchBasicDemo: TextGlitchDemos.TextGlitchBasicDemo,
  TextGlitchSpeedDemo: TextGlitchDemos.TextGlitchSpeedDemo,
  TextGlitchHeaderDemo: TextGlitchDemos.TextGlitchHeaderDemo,
  ThemeSwitcherDemo: ThemeSwitcherDemos.ThemeSwitcherDemo,
  AspectRatioCinematic: AspectRatioDemos.AspectRatioCinematic,
  AspectRatioProductCard: AspectRatioDemos.AspectRatioProductCard,
  AspectRatioBlogCard: AspectRatioDemos.AspectRatioBlogCard,
  AspectRatioProfileCover: AspectRatioDemos.AspectRatioProfileCover,
  CollapsibleDemo: CollapsibleDemos.CollapsibleBasic,
  CollapsibleBasic: CollapsibleDemos.CollapsibleBasic,
  CollapsibleThemes: CollapsibleDemos.CollapsibleThemes,
  CollapsibleCode: CollapsibleDemos.CollapsibleCode,
  CollapsibleFolder: CollapsibleDemos.CollapsibleFolder,
  CollapsibleFilters: CollapsibleDemos.CollapsibleFilters,
  CollapsibleInvoice: CollapsibleDemos.CollapsibleInvoice,
  CollapsibleProfile: CollapsibleDemos.CollapsibleProfile,
  CollapsibleComments: CollapsibleDemos.CollapsibleComments,
  CollapsibleLogs: CollapsibleDemos.CollapsibleLogs,
  CollapsibleGlassSettings: CollapsibleDemos.CollapsibleGlassSettings,
  ToggleDemo: ToggleDemos.ToggleLike,
  ToggleVariantsDemo: ToggleDemos.ToggleVariantsDemo,
  ToggleIconShowcase: ToggleDemos.ToggleIconShowcase,
  ToggleLike: ToggleDemos.ToggleLike,
  SpinnerDemo: SpinnerDemos.SpinnerGlow,
  SpinnerVariantsDemo: SpinnerDemos.SpinnerVariantsDemo,
  SpinnerDefault: SpinnerDemos.SpinnerDefault,
  SpinnerGlass: SpinnerDemos.SpinnerGlass,
  SpinnerRetro: SpinnerDemos.SpinnerRetro,
  SpinnerGlow: SpinnerDemos.SpinnerGlow,
  SpinnerCyber: SpinnerDemos.SpinnerCyber,
  SpinnerGlitchText: SpinnerDemos.SpinnerGlitchText,
  SpinnerInsideButton: SpinnerDemos.SpinnerInsideButton,
  SpinnerInsideUploader: SpinnerDemos.SpinnerInsideUploader,
  SpinnerWaveEqualizer: SpinnerDemos.SpinnerWaveEqualizer,
  SpinnerCardOverlay: SpinnerDemos.SpinnerCardOverlay,
  OTP4Digit: InputOTPDemos.OTP4Digit,
  OTP6Digit: InputOTPDemos.OTP6Digit,
  OTPDouble3Digit: InputOTPDemos.OTPDouble3Digit,
  OTPDefaultTheme: InputOTPDemos.OTPDefaultTheme,
  OTPGlassTheme: InputOTPDemos.OTPGlassTheme,
  OTPRetroTheme: InputOTPDemos.OTPRetroTheme,
  OTPGlowTheme: InputOTPDemos.OTPGlowTheme,
  OTPCyberTheme: InputOTPDemos.OTPCyberTheme,
  OTPControlled: InputOTPDemos.OTPControlled,
  OTPPasswordMode: InputOTPDemos.OTPPasswordMode,
  OTPDisabled: InputOTPDemos.OTPDisabled,
  OTPCustomSlotWidths: InputOTPDemos.OTPCustomSlotWidths,
  ItemBasic: ItemDemos.ItemBasic,
  ItemDefaultTheme: ItemDemos.ItemDefaultTheme,
  ItemGlassTheme: ItemDemos.ItemGlassTheme,
  ItemRetroTheme: ItemDemos.ItemRetroTheme,
  ItemGlowTheme: ItemDemos.ItemGlowTheme,
  ItemCyberTheme: ItemDemos.ItemCyberTheme,
  ItemWithImage: ItemDemos.ItemWithImage,
  ItemWithAvatar: ItemDemos.ItemWithAvatar,
  ItemWithActions: ItemDemos.ItemWithActions,
  ItemFooterDetails: ItemDemos.ItemFooterDetails,
  ItemGroupedList: ItemDemos.ItemGroupedList,
  ItemHoverable: ItemDemos.ItemHoverable,
  MenubarDefaultTheme: MenubarDemos.MenubarDefaultTheme,
  MenubarGlassTheme: MenubarDemos.MenubarGlassTheme,
  MenubarRetroTheme: MenubarDemos.MenubarRetroTheme,
  MenubarGlowTheme: MenubarDemos.MenubarGlowTheme,
  MenubarCyberTheme: MenubarDemos.MenubarCyberTheme,
  MenubarSubmenus: MenubarDemos.MenubarSubmenus,
  MenubarCheckboxes: MenubarDemos.MenubarCheckboxes,
  MenubarRadios: MenubarDemos.MenubarRadios,
  MenubarShortcuts: MenubarDemos.MenubarShortcuts,
  MenubarDestructive: MenubarDemos.MenubarDestructive,
  MenubarDisabled: MenubarDemos.MenubarDisabled,
  MenubarDynamicTabs: MenubarDemos.MenubarDynamicTabs,
  MessageBasicStart: MessageDemos.MessageBasicStart,
  MessageBasicEnd: MessageDemos.MessageBasicEnd,
  MessageDefaultTheme: MessageDemos.MessageDefaultTheme,
  MessageGlassTheme: MessageDemos.MessageGlassTheme,
  MessageRetroTheme: MessageDemos.MessageRetroTheme,
  MessageGlowTheme: MessageDemos.MessageGlowTheme,
  MessageCyberTheme: MessageDemos.MessageCyberTheme,
  MessageWithAvatar: MessageDemos.MessageWithAvatar,
  MessageWithFooter: MessageDemos.MessageWithFooter,
  MessageWithHeader: MessageDemos.MessageWithHeader,
  MessageGroupFeed: MessageDemos.MessageGroupFeed,
  MessageStatusTick: MessageDemos.MessageStatusTick,
  MessagePremiumChatApp: MessageDemos.MessagePremiumChatApp,
  ScrollerDemo: MessageScrollerDemos.ScrollerDemo,
  ScrollerStreaming: MessageScrollerDemos.ScrollerStreaming,
  ScrollerBasic: MessageScrollerDemos.ScrollerBasic,
  ScrollerAutoScroll: MessageScrollerDemos.ScrollerAutoScroll,
  ScrollerScrollToBottom: MessageScrollerDemos.ScrollerScrollToBottom,
  ScrollerDefaultTheme: MessageScrollerDemos.ScrollerDefaultTheme,
  ScrollerGlassTheme: MessageScrollerDemos.ScrollerGlassTheme,
  ScrollerRetroTheme: MessageScrollerDemos.ScrollerRetroTheme,
  ScrollerGlowTheme: MessageScrollerDemos.ScrollerGlowTheme,
  ScrollerCyberTheme: MessageScrollerDemos.ScrollerCyberTheme,
  ScrollerLoadMore: MessageScrollerDemos.ScrollerLoadMore,
  ScrollerMaxHeight: MessageScrollerDemos.ScrollerMaxHeight,
  ScrollerScrollArrows: MessageScrollerDemos.ScrollerScrollArrows,
  ScrollerChatInterface: MessageScrollerDemos.ScrollerChatInterface,
  MarkerBasicDemo: MarkerDemos.MarkerBasicDemo,
  MarkerSeparatorDemo: MarkerDemos.MarkerSeparatorDemo,
  MarkerBorderDemo: MarkerDemos.MarkerBorderDemo,
  MarkerThemesDemo: MarkerDemos.MarkerThemesDemo,
  ThemeSwitcherGlassDemo: ThemeSwitcherDemos.ThemeSwitcherGlassDemo,
  ThemeSwitcherGlowDemo: ThemeSwitcherDemos.ThemeSwitcherGlowDemo,
  ThemeSwitcherRetroDemo: ThemeSwitcherDemos.ThemeSwitcherRetroDemo,
  ThemeSwitcherCyberpunkDemo: ThemeSwitcherDemos.ThemeSwitcherCyberpunkDemo,
  ThemeSwitcherTopRightDemo: ThemeSwitcherDemos.ThemeSwitcherTopRightDemo,
  ThemeSwitcherCustomDemo: ThemeSwitcherDemos.ThemeSwitcherCustomDemo,
  MarqueeHorizontalDemo: MarqueeDemos.MarqueeHorizontalDemo,
  MarqueeHorizontalReverseDemo: MarqueeDemos.MarqueeHorizontalReverseDemo,
  MarqueeLogosDemo: MarqueeDemos.MarqueeLogosDemo,
  MarqueeAlertDemo: MarqueeDemos.MarqueeAlertDemo,
  MarqueeVerticalUpDemo: MarqueeDemos.MarqueeVerticalUpDemo,
  MarqueeVerticalDownDemo: MarqueeDemos.MarqueeVerticalDownDemo,
  MarqueeInteractiveDemo: MarqueeDemos.MarqueeInteractiveDemo,
  MarqueeGlassmorphicDemo: MarqueeDemos.MarqueeGlassmorphicDemo,
  MarqueeNeonDemo: MarqueeDemos.MarqueeNeonDemo,
  MarqueeBrutalistDemo: MarqueeDemos.MarqueeBrutalistDemo,
  MarqueeCyberpunkDemo: MarqueeDemos.MarqueeCyberpunkDemo,
  MarqueeDoubleDemo: MarqueeDemos.MarqueeDoubleDemo,
  Marquee3DDemo: MarqueeDemos.Marquee3DDemo,
  MarqueeFadeDemo: MarqueeDemos.MarqueeFadeDemo,
  MarqueeGridDemo: MarqueeDemos.MarqueeGridDemo,
  MarqueeCodeDemo: MarqueeDemos.MarqueeCodeDemo,
  LayoutDemoAnalytics,
  LayoutDemoDatabase,
  LayoutDemoDevOps,
  LayoutDemoAssets,
  LayoutDemoBilling,
  ComponentPreview,
  Installation,
  PropsTable,
  PropRow,
  ComponentPlayground,
  ComponentHeader,
  FrameworkGrid,
  FrameworkCard,
  Steps,
  Step,
  Callout,
  ArrowUpIcon: ArrowUp,
  SearchIcon: Search,
  MailIcon: Mail,
  Loader2Icon: Loader2,
  Terminal,
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Layers,
  Settings,
  ShieldAlert,
  Bell,
  VolumeX,
  UserIcon: User,
  SettingsIcon: Settings,
  LogOutIcon: LogOut,
  CreditCardIcon: CreditCard,
  KeyboardIcon: Keyboard,
  InboxIcon: Inbox,
  RefreshCwIcon: RefreshCw,
  GlobeIcon: Globe,
  FolderOpen,
  ButtonGroup,
  ButtonGroupItem,
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyActions,
  Combobox,
  DatePicker,
  TypingAnimation,
  TypingAnimationBasicDemo,
  TypingAnimationWordsDemo,
  TypingAnimationCustomDemo,
  HyperText,
  HyperTextBasicDemo,
  HyperTextHoverDemo,
  HyperTextTerminalDemo,
  WordRotate,
  WordRotateDemo,
  WordRotateHeroDemo,
  WordRotateAudienceDemo,
  SparklesText,
  SparklesTextDemo,
  SparklesTextCustomDemo,
  TextReveal,
  TextRevealDemo,
  AuroraText,
  AuroraTextDemo,
  AuroraTextCustomDemo,
  AnimatedShinyText,
  AnimatedShinyTextDemo,
  SpinningText,
  SpinningTextDemo,
  SpinningTextBadgeDemo,
  SpinningTextReverseDemo,
  ScrollVelocityContainer,
  ScrollVelocityRow,
  ScrollVelocityDemo,
  ScrollVelocityImagesDemo,
  ScrollVelocityFeaturesDemo,
  BlurFade,
  BlurFadeDemo,
  BlurFadeTextDemo,
  BlurFadeGridDemo,
  NumberTicker,
  NumberTickerDemo,
  NumberTickerDashboardDemo,
  NumberTickerMilestonesDemo,
  AnimatedGradientText,
  AnimatedGradientTextDemo,
  ComicText,
  ComicTextDemo,
  DiaTextReveal,
  DiaTextRevealDemo,
  DiaTextRevealTaglineDemo,
  DiaTextRevealNeonDemo,
  KineticText,
  KineticTextDemo,
  KineticTextGradientDemo,
  KineticTextCustomDemo,
  LineShadowText,
  LineShadowTextDemo,
  LineShadowTextLeftDemo,
  LineShadowTextRightToLeftDemo,
  MorphingText,
  MorphingTextDemo,
  Text3DFlip,
  Text3DFlipDemo,
  TextAnimate,
  TextAnimateDemo,
  VideoText,
  VideoTextDemo,
  SidebarDemo,
  h1: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const headingId = id ?? getHeadingId(children)
    return (
      <h1
        id={headingId}
        className="scroll-m-24 text-3xl font-semibold tracking-tight text-foreground sm:text-3xl font-sans mb-1.5"
        {...props}
      >
        {children}
      </h1>
    )
  },
  h2: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const headingId = id ?? getHeadingId(children)
    return (
      <h2
        id={headingId}
        className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground first:mt-0"
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h2>
    )
  },
  h3: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const headingId = id ?? getHeadingId(children)
    return (
      <h3
        id={headingId}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground"
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h3>
    )
  },
  h4: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const headingId = id ?? getHeadingId(children)
    return (
      <h4
        id={headingId}
        className="mt-6 scroll-m-20 text-lg font-semibold tracking-tight text-foreground"
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h4>
    )
  },
  p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-[1.05rem] text-muted-foreground sm:text-base leading-relaxed font-normal [&:not(:first-child)]:mt-3"
      {...props}
    />
  ),
  ul: ({ ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm text-muted-foreground"
      {...props}
    />
  ),
  ol: ({ ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="my-6 ml-6 list-decimal [&>li]:mt-2 text-sm text-muted-foreground"
      {...props}
    />
  ),
  li: ({ ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mt-2" {...props} />
  ),
  pre: CodeBlockPre,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className
    return (
      <code
        className={
          isInline
            ? 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold text-foreground border border-border'
            : 'font-mono text-sm text-foreground bg-transparent p-0 border-0'
        }
        {...props}
      />
    )
  },
}

export default async function DocsPage({ params }: PageProps) {
  try {
    const resolvedParams = await params
    const slug = resolvedParams.slug || ['introduction']

    const mdxPath = path.join(
      process.cwd(),
      'src/content/docs',
      `${slug.join('/')}.mdx`,
    )

    if (!fs.existsSync(mdxPath)) {
      return (
        <div
          style={{
            padding: 24,
            background: '#fef3c7',
            color: '#92400e',
            fontFamily: 'sans-serif',
          }}
        >
          <h1>MDX File Not Found</h1>
          <p>
            Tried resolving path: <strong>{mdxPath}</strong>
          </p>
        </div>
      )
    }

    const fileContent = fs.readFileSync(mdxPath, 'utf8')

    // Parse title & description dynamically from MDX heading & first paragraph
    let title = slug[1]
      ? slug[1]
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ')
      : ''
    let description = ''

    const h1Match = fileContent.match(/^#\s+(.*)/m)
    if (h1Match) {
      title = h1Match[1].trim()
      const remaining = fileContent.slice(h1Match.index! + h1Match[0].length)
      const firstParaMatch = remaining.match(/^\s*([A-Za-z].*)/m)
      if (firstParaMatch) {
        description = firstParaMatch[1].trim()
      }
    }

    // Component Navigation calculation
    const isComponentPage = slug[0] === 'components'
    const componentNavItems =
      docsConfig.sidebarNav.find((group) => group.title === 'Components')
        ?.items || []
    const flatItems = componentNavItems.filter((item) => item.href) as {
      title: string
      href: string
    }[]
    const currentHref = `/docs/${slug.join('/')}`
    const currentIndex = flatItems.findIndex(
      (item) => item.href === currentHref,
    )
    const prevItem =
      isComponentPage && currentIndex > 0 ? flatItems[currentIndex - 1] : null
    const nextItem =
      isComponentPage && currentIndex < flatItems.length - 1
        ? flatItems[currentIndex + 1]
        : null

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex w-full flex-1 px-6 md:px-8 lg:px-10">
          <aside
            id="docs-sidebar-aside"
            className="fixed top-[var(--header-height)] z-30 -ml-2 hidden h-[calc(100vh-var(--header-height))] w-[220px] shrink-0 md:sticky md:block overflow-y-auto no-scrollbar border-r border-border pr-4 pt-2"
          >
            <Sidebar />
          </aside>
          <main className="relative py-6 md:py-8 lg:py-10 flex-1 min-w-0 md:pl-8 lg:pl-10">
            <div className="xl:grid xl:grid-cols-[1fr_240px] gap-10">
              <article className="min-w-0">
                {isComponentPage && (
                  <ComponentHeader
                    name={slug[1]}
                    title={title}
                    description={description}
                    prevItem={prevItem}
                    nextItem={nextItem}
                  />
                )}

                <div
                  className={cn(
                    'typeset',
                    isComponentPage && 'typeset-component',
                  )}
                >
                  <MDXRemote source={fileContent} components={mdxComponents} />
                </div>

                {/* Bottom Pagination Arrows */}
                {isComponentPage && (prevItem || nextItem) && (
                  <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 mt-12">
                    <div>
                      {prevItem ? (
                        <Link
                          href={prevItem.href}
                          className="group flex flex-col gap-1 rounded-lg border border-border p-4 hover:bg-muted/50 hover:border-primary/20 transition-all text-left w-full h-full"
                        >
                          <span className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                            <ChevronLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />{' '}
                            Previous
                          </span>
                          <span className="text-sm font-bold text-foreground">
                            {prevItem.title}
                          </span>
                        </Link>
                      ) : (
                        <div />
                      )}
                    </div>
                    <div>
                      {nextItem ? (
                        <Link
                          href={nextItem.href}
                          className="group flex flex-col gap-1 rounded-lg border border-border p-4 hover:bg-muted/50 hover:border-primary/20 transition-all text-right items-end w-full h-full"
                        >
                          <span className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                            Next{' '}
                            <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </span>
                          <span className="text-sm font-bold text-foreground">
                            {nextItem.title}
                          </span>
                        </Link>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                )}

                {/* Contributors Section */}
                <div className="mt-16 pt-8 border-t border-border/60">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Contributors
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/jenishCoderkube"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/45 hover:border-primary/30 hover:bg-card/70 transition-all cursor-pointer w-fit select-none"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background font-bold text-[10px]">
                        JS
                      </div>
                      <span className="text-xs font-medium text-foreground">
                        Jenish Sabhadiya
                      </span>
                    </a>
                  </div>
                </div>
              </article>
              <aside className="hidden text-sm xl:block sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar w-[240px]">
                <TableOfContents />
              </aside>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  } catch (error: any) {
    return (
      <div
        style={{
          padding: 24,
          background: '#fee2e2',
          color: '#991b1b',
          fontFamily: 'monospace',
        }}
      >
        <h1>Failed to Render MDX Page</h1>
        <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
          {error?.stack || error?.message || String(error)}
        </pre>
      </div>
    )
  }
}
