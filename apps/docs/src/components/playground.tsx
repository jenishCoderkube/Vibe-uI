'use client'

import React, { useState } from 'react'
import {
  Button,
  Switch,
  Badge,
  Slider,
  Label,
  Uploader,
  Input,
  Checkbox,
  Alert,
  AlertTitle,
  AlertDescription,
  Progress,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Marquee,
  TextGlitch,
  TypingAnimation,
  HyperText,
  WordRotate,
  AuroraText,
  SparklesText,
  TextReveal,
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
import type { AnimationVariant } from 'vibe-ui'
import { Copy, Check, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Highlight, themes } from 'prism-react-renderer'

type ComponentType =
  | 'button'
  | 'switch'
  | 'badge'
  | 'uploader'
  | 'input'
  | 'checkbox'
  | 'alert'
  | 'progress'
  | 'accordion'
  | 'tabs'
  | 'marquee'
  | 'text-glitch'
  | 'typing-animation'
  | 'hyper-text'
  | 'word-rotate'
  | 'sparkles-text'
  | 'text-reveal'
  | 'aurora-text'
  | 'animated-shiny-text'
  | 'spinning-text'
  | 'scroll-based-velocity'
  | 'blur-fade'
  | 'number-ticker'
  | 'animated-gradient-text'
  | 'comic-text'
  | 'dia-text-reveal'
  | 'kinetic-text'
  | 'line-shadow-text'
  | 'morphing-text'
  | 'text-3d-flip'
  | 'text-animate'
  | 'video-text'

interface ComponentPlaygroundProps {
  component?: ComponentType
}

export function ComponentPlayground({ component }: ComponentPlaygroundProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [activeComponent, setActiveComponent] = useState<ComponentType>(
    component || 'button',
  )

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (component) {
      setActiveComponent(component)
    }
  }, [component])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  // Common copy action state
  const [copied, setCopied] = useState(false)

  // ── component state parameters ──
  // Button
  const [btnVariant, setBtnVariant] = useState<
    'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('glow')
  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [btnLabel, setBtnLabel] = useState('Explore Vibe')

  // Switch
  const [swVariant, setSwVariant] = useState<
    'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('glow')
  const [swDisabled, setSwDisabled] = useState(false)
  const [swChecked, setSwChecked] = useState(true)

  // Badge
  const [badgeVariant, setBadgeVariant] = useState<
    'default' | 'glass' | 'retro' | 'glow' | 'destructive' | 'cyberpunk'
  >('glow')
  const [badgeText, setBadgeText] = useState('New Release')

  // Uploader
  const [upVariant, setUpVariant] = useState<
    'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('glow')
  const [upMaxSize, setUpMaxSize] = useState([5])
  const [upAccept, setUpAccept] = useState<'all' | 'images' | 'pdfs'>('all')

  // Input
  const [inpVariant, setInpVariant] = useState<
    'default' | 'filled' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('glow')
  const [inpDisabled, setInpDisabled] = useState(false)
  const [inpLabel, setInpLabel] = useState('Workspace Name')
  const [inpPlaceholder, setInpPlaceholder] = useState('my-vibe-project')

  // Checkbox
  const [chkDisabled, setChkDisabled] = useState(false)
  const [chkChecked, setChkChecked] = useState(true)
  const [chkLabel, setChkLabel] = useState('Enable advanced telemetry')

  // Alert
  const [alVariant, setAlVariant] = useState<
    'default' | 'destructive' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('glow')
  const [alTitle, setAlTitle] = useState('System Sync Complete')
  const [alDesc, setAlDesc] = useState(
    'All database schemas are updated and cached.',
  )

  // Progress
  const [progVariant, setProgVariant] = useState<'default' | 'gradient'>(
    'gradient',
  )
  const [progValue, setProgValue] = useState([70])

  // Accordion
  const [accVariant, setAccVariant] = useState<
    'default' | 'glass' | 'retro' | 'cyberpunk'
  >('default')

  // Tabs
  const [tabsVariant, setTabsVariant] = useState<
    'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  >('glow')

  // Marquee
  const [mqDirection, setMqDirection] = useState<
    'left' | 'right' | 'up' | 'down'
  >('left')
  const [mqSpeed, setMqSpeed] = useState(25)
  const [mqPauseOnHover, setMqPauseOnHover] = useState(true)
  const [mqFade, setMqFade] = useState(true)
  const [mqReverse, setMqReverse] = useState(false)

  // Text Glitch
  const [tgText, setTgText] = useState('CYBERPUNK')
  const [tgSpeed, setTgSpeed] = useState<'slow' | 'normal' | 'fast'>('normal')
  const [tgActive, setTgActive] = useState(true)

  // Typing Animation
  const [taText, setTaText] = useState('Vibe UI text animation.')
  const [taDuration, setTaDuration] = useState(100)
  const [taLoop, setTaLoop] = useState(true)
  const [taCursorStyle, setTaCursorStyle] = useState<
    'line' | 'block' | 'underscore'
  >('line')

  // Hyper Text
  const [htText, setHtText] = useState('HYPERTEXT')
  const [htDuration, setHtDuration] = useState(800)
  const [htAnimateOnHover, setHtAnimateOnHover] = useState(true)

  // Word Rotate
  const [wrWords, setWrWords] = useState(
    'interactive, premium, dynamic, animated',
  )
  const [wrDuration, setWrDuration] = useState(2000)

  // Sparkles Text
  const [stText, setStText] = useState('Sparkles text effect')
  const [stCount, setStCount] = useState(10)

  // Text Reveal
  const [trText, setTrText] = useState(
    'Vibe UI brings your static user interfaces to life.',
  )

  // Aurora Text
  const [atText, setAtText] = useState('Aurora glow effect')
  const [atSpeed, setAtSpeed] = useState(1)

  // Animated Shiny Text
  const [astText, setAstText] = useState('✨ Introducing Vibe UI Shimmer')
  const [astWidth, setAstWidth] = useState(100)

  // Spinning Text
  const [sptText, setSptText] = useState(
    'interactive • modern • premium • design •',
  )
  const [sptRadius, setSptRadius] = useState(8)
  const [sptDuration, setSptDuration] = useState(12)

  // Scroll Velocity
  const [svText, setSvText] = useState(
    'FAST INTEGRATION ★ LIGHTWEIGHT ★ ACCESSIBLE ★',
  )
  const [svVelocity, setSvVelocity] = useState(4)

  // Blur Fade
  const [bfText, setBfText] = useState('Blur Fade-in text')
  const [bfDelay, setBfDelay] = useState(0.1)

  // Number Ticker
  const [ntValue, setNtValue] = useState(99.8)
  const [ntDecimals, setNtDecimals] = useState(1)

  // Animated Gradient Text
  const [agtText, setAgtText] = useState('✨ Introducing Vibe UI Gradient')
  const [agtSpeed, setAgtSpeed] = useState(1)

  // Comic Text
  const [ctText, setCtText] = useState('BOOM!')
  const [ctFontSize, setCtFontSize] = useState(5)

  // Dia Text Reveal
  const [dtrText, setDtrText] = useState('exclusive, modern, clean, premium')
  const [dtrDuration, setDtrDuration] = useState(1.5)

  // Kinetic Text
  const [ktText, setKtText] = useState('VIBE UI')

  // Line Shadow Text
  const [lstText, setLstText] = useState('Vibe UI')
  const [lstColor, setLstColor] = useState('#3b82f6')
  const [lstDirection, setLstDirection] = useState<'left' | 'right'>('right')
  const [lstAnimateDirection, setLstAnimateDirection] = useState<
    'left-to-right' | 'right-to-left'
  >('left-to-right')

  // Morphing Text
  const [mtTexts, setMtTexts] = useState(
    'Vibe, Interactive, Dynamic, Beautiful',
  )

  // Text 3D Flip
  const [t3dText, setT3dText] = useState('HOVER ME TO SPIN')
  const [t3dStagger, setT3dStagger] = useState(0.05)

  // Text Animate
  const [tanText, setTanText] = useState(
    'Elevate your layout styles with text animation presets.',
  )
  const [tanAnimation, setTanAnimation] = useState<AnimationVariant>('blurInUp')

  // Video Text
  const [vtText, setVtText] = useState('VIBE UI')
  const [vtSrc, setVtSrc] = useState(
    'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  )

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Code generator
  const generateCode = () => {
    switch (activeComponent) {
      case 'button':
        return `import { Button } from '@/components/ui/button'

export default function ButtonDemo() {
  return (
    <Button 
      variant="${btnVariant}" 
      size="${btnSize}"${btnDisabled ? '\n      disabled' : ''}
    >
      ${btnLabel}
    </Button>
  )
}`
      case 'switch':
        return `import { Switch } from '@/components/ui/switch'

export default function SwitchDemo() {
  return (
    <Switch 
      variant="${swVariant}" 
      defaultChecked={${swChecked}}${swDisabled ? '\n      disabled' : ''}
    />
  )
}`
      case 'badge':
        return `import { Badge } from '@/components/ui/badge'

export default function BadgeDemo() {
  return (
    <Badge variant="${badgeVariant}">
      ${badgeText}
    </Badge>
  )
}`
      case 'uploader':
        const acceptStr =
          upAccept === 'images'
            ? `accept={['image/*']}`
            : upAccept === 'pdfs'
              ? `accept={['application/pdf']}`
              : ''
        return `import { Uploader } from '@/components/ui/uploader'

export default function UploaderDemo() {
  return (
    <Uploader 
      variant="${upVariant}" 
      maxSizeMB={${upMaxSize[0]}}${acceptStr ? '\n      ' + acceptStr : ''}
    />
  )
}`
      case 'input':
        return `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function InputDemo() {
  return (
    <div className="grid gap-2 w-full max-w-xs">
      <Label htmlFor="sandbox-input">${inpLabel}</Label>
      <Input 
        id="sandbox-input" 
        variant="${inpVariant}" 
        placeholder="${inpPlaceholder}"${inpDisabled ? '\n        disabled' : ''}
      />
    </div>
  )
}`
      case 'checkbox':
        return `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox 
        id="sandbox-checkbox" 
        defaultChecked={${chkChecked}}${chkDisabled ? '\n        disabled' : ''}
      />
      <Label htmlFor="sandbox-checkbox">${chkLabel}</Label>
    </div>
  )
}`
      case 'alert':
        return `import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

export default function AlertDemo() {
  return (
    <Alert variant="${alVariant}">
      <AlertTitle>${alTitle}</AlertTitle>
      <AlertDescription>
        ${alDesc}
      </AlertDescription>
    </Alert>
  )
}`
      case 'progress':
        return `import { Progress } from '@/components/ui/progress'

export default function ProgressDemo() {
  return (
    <Progress 
      value={${progValue[0]}} 
      indicatorVariant="${progVariant}" 
    />
  )
}`
      case 'accordion':
        return `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" variant="${accVariant}">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes! Transitions are powered by CSS variables under modern styling presets.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`
      case 'tabs':
        return `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2" variant="${tabsVariant}">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}`
      case 'marquee':
        return `import { Marquee } from '@/components/ui/marquee'

export default function MarqueeDemo() {
  return (
    <Marquee 
      direction="${mqDirection}" 
      speed={${mqSpeed}}${mqPauseOnHover ? '\n      pauseOnHover' : ''}${mqFade ? '\n      fade' : '\n      fade={false}'}${mqReverse ? '\n      reverse' : ''}
    >
      {['Interactive', 'Dynamic', 'High Performance', 'Vibe UI'].map((item) => (
        <span key={item} className="px-4 py-2 border border-white/10 rounded-xl bg-white/5 text-xs font-semibold whitespace-nowrap">
          {item}
        </span>
      ))}
    </Marquee>
  )
}`
      case 'text-glitch':
        return `import { TextGlitch } from '@/components/ui/text-glitch'

export default function TextGlitchDemo() {
  return (
    <TextGlitch 
      text="${tgText}" 
      speed="${tgSpeed}"${tgActive ? '' : '\n      active={false}'}
      className="text-3xl font-mono text-white uppercase tracking-widest"
    />
  )
}`
      case 'typing-animation':
        return `import { TypingAnimation } from '@/components/ui/typing-animation'

export default function TypingAnimationDemo() {
  return (
    <TypingAnimation 
      duration={${taDuration}}${taLoop ? '\n      loop' : ''}
      cursorStyle="${taCursorStyle}"
      className="text-2xl text-foreground font-semibold"
    >
      ${taText}
    </TypingAnimation>
  )
}`
      case 'hyper-text':
        return `import { HyperText } from '@/components/ui/hyper-text'

export default function HyperTextDemo() {
  return (
    <HyperText
      duration={${htDuration}}
      animateOnHover={${htAnimateOnHover}}
      className="text-4xl font-extrabold text-foreground tracking-tight"
    >
      ${htText}
    </HyperText>
  )
}`
      case 'word-rotate':
        return `import { WordRotate } from '@/components/ui/word-rotate'

export default function WordRotateDemo() {
  return (
    <WordRotate
      words={[${wrWords
        .split(',')
        .map((w) => `"${w.trim()}"`)
        .join(', ')}]}
      duration={${wrDuration}}
      className="text-3xl font-extrabold text-primary"
    />
  )
}`
      case 'sparkles-text':
        return `import { SparklesText } from '@/components/ui/sparkles-text'

export default function SparklesTextDemo() {
  return (
    <SparklesText
      sparklesCount={${stCount}}
      className="text-4xl font-extrabold text-foreground"
    >
      ${stText}
    </SparklesText>
  )
}`
      case 'text-reveal':
        return `import { TextReveal } from '@/components/ui/text-reveal'

export default function TextRevealDemo() {
  return (
    <div className="h-[200vh]">
      <TextReveal>
        ${trText}
      </TextReveal>
    </div>
  )
}`
      case 'aurora-text':
        return `import { AuroraText } from '@/components/ui/aurora-text'

export default function AuroraTextDemo() {
  return (
    <h1 className="text-4xl font-extrabold">
      Ship <AuroraText speed={${atSpeed}}>${atText}</AuroraText>
    </h1>
  )
}`
      case 'animated-shiny-text':
        return `import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'

export default function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div className="group rounded-full border border-black/5 bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 px-4 py-1.5 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 animate-shiny-text bg-size-[100px_100%] bg-clip-text">
        <AnimatedShinyText shimmerWidth={${astWidth}} className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 font-semibold text-sm">
          <span>${astText}</span>
        </AnimatedShinyText>
      </div>
    </div>
  )
}`
      case 'spinning-text':
        return `import { SpinningText } from '@/components/ui/spinning-text'

export default function SpinningTextDemo() {
  return (
    <SpinningText
      radius={${sptRadius}}
      duration={${sptDuration}}
      className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest animate-spin-slow"
    >
      ${sptText}
    </SpinningText>
  )
}`
      case 'scroll-based-velocity':
        return `import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity'

export default function ScrollVelocityDemo() {
  return (
    <ScrollVelocityContainer>
      <ScrollVelocityRow baseVelocity={${svVelocity}} direction={1} className="text-3xl font-extrabold tracking-tighter text-foreground">
        ${svText}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  )
}`
      case 'blur-fade':
        return `import { BlurFade } from '@/components/ui/blur-fade'

export default function BlurFadeDemo() {
  return (
    <BlurFade delay={${bfDelay}} direction="down">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">${bfText}</h2>
    </BlurFade>
  )
}`
      case 'number-ticker':
        return `import { NumberTicker } from '@/components/ui/number-ticker'

export default function NumberTickerDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <span className="text-5xl font-extrabold tracking-tight text-primary font-sans">
        <NumberTicker value={${ntValue}} decimalPlaces={${ntDecimals}} />
      </span>
    </div>
  )
}`
      case 'animated-gradient-text':
        return `import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'

export default function AnimatedGradientTextDemo() {
  return (
    <AnimatedGradientText speed={${agtSpeed}} className="text-4xl font-extrabold tracking-tight">
      ${agtText}
    </AnimatedGradientText>
  )
}`
      case 'comic-text':
        return `import { ComicText } from '@/components/ui/comic-text'

export default function ComicTextDemo() {
  return (
    <ComicText fontSize={${ctFontSize}}>
      ${ctText}
    </ComicText>
  )
}`
      case 'dia-text-reveal':
        return `import { DiaTextReveal } from '@/components/ui/dia-text-reveal'

export default function DiaTextRevealDemo() {
  return (
    <DiaTextReveal
      text={[${dtrText
        .split(',')
        .map((w) => `"${w.trim()}"`)
        .join(', ')}]}
      duration={${dtrDuration}}
      repeat
    />
  )
}`
      case 'kinetic-text':
        return `import { KineticText } from '@/components/ui/kinetic-text'

export default function KineticTextDemo() {
  return (
    <KineticText text="${ktText}" className="text-5xl font-light text-foreground" />
  )
}`
      case 'line-shadow-text':
        return `import { LineShadowText } from '@/components/ui/line-shadow-text'

export default function LineShadowTextDemo() {
  return (
    <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl leading-none">
      <LineShadowText 
        shadowColor="${lstColor}"${lstDirection !== 'right' ? `\n        direction="${lstDirection}"` : ''}${lstAnimateDirection !== 'left-to-right' ? `\n        animateDirection="${lstAnimateDirection}"` : ''}
      >
        ${lstText}
      </LineShadowText>
    </h1>
  )
}`
      case 'morphing-text':
        return `import { MorphingText } from '@/components/ui/morphing-text'

export default function MorphingTextDemo() {
  return (
    <MorphingText texts={[${mtTexts
      .split(',')
      .map((w) => `"${w.trim()}"`)
      .join(', ')}]} />
  )
}`
      case 'text-3d-flip':
        return `import { Text3DFlip } from '@/components/ui/text-3d-flip'

export default function Text3DFlipDemo() {
  return (
    <Text3DFlip staggerDuration={${t3dStagger}} className="text-4xl font-extrabold text-primary">
      ${t3dText}
    </Text3DFlip>
  )
}`
      case 'text-animate':
        return `import { TextAnimate } from '@/components/ui/text-animate'

export default function TextAnimateDemo() {
  return (
    <TextAnimate animation="${tanAnimation}" className="text-3xl font-extrabold text-foreground">
      ${tanText}
    </TextAnimate>
  )
}`
      case 'video-text':
        return `import { VideoText } from '@/components/ui/video-text'

export default function VideoTextDemo() {
  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <VideoText src="${vtSrc}">
        ${vtText}
      </VideoText>
    </div>
  )
}`
    }
  }

  const CopyIcon = Copy as any
  const CheckIcon = Check as any
  const RefreshIcon = RefreshCw as any

  const tabsRef = React.useRef<HTMLDivElement>(null)

  const scrollTabsLeft = () => {
    tabsRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
  }

  const scrollTabsRight = () => {
    tabsRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
  }

  return (
    <div className="w-full flex flex-col border border-border rounded-xl overflow-hidden bg-background text-left shadow-sm">
      {/* Sandbox Tabs */}
      {!component && (
        <div className="flex items-center justify-between border-b border-border bg-muted/10 px-3 py-2 gap-2 overflow-hidden">
          <div className="flex items-center gap-1 min-w-0 flex-1 overflow-hidden">
            <button
              onClick={scrollTabsLeft}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors shrink-0 cursor-pointer"
              title="Scroll Left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div
              ref={tabsRef}
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 scroll-smooth"
            >
              {(
                [
                  { id: 'button', label: 'Button' },
                  { id: 'switch', label: 'Switch' },
                  { id: 'badge', label: 'Badge' },
                  { id: 'uploader', label: 'Uploader' },
                  { id: 'input', label: 'Input' },
                  { id: 'checkbox', label: 'Checkbox' },
                  { id: 'alert', label: 'Alert' },
                  { id: 'progress', label: 'Progress' },
                  { id: 'accordion', label: 'Accordion' },
                  { id: 'tabs', label: 'Tabs' },
                  { id: 'marquee', label: 'Marquee' },
                  { id: 'text-glitch', label: 'Glitch' },
                  { id: 'typing-animation', label: 'Typing' },
                  { id: 'hyper-text', label: 'HyperText' },
                  { id: 'word-rotate', label: 'WordRotate' },
                  { id: 'sparkles-text', label: 'Sparkles' },
                  { id: 'text-reveal', label: 'TextReveal' },
                  { id: 'aurora-text', label: 'AuroraText' },
                  { id: 'animated-shiny-text', label: 'ShinyText' },
                  { id: 'spinning-text', label: 'Spinning' },
                  { id: 'scroll-based-velocity', label: 'Velocity' },
                  { id: 'blur-fade', label: 'BlurFade' },
                  { id: 'number-ticker', label: 'Ticker' },
                  { id: 'animated-gradient-text', label: 'GradientText' },
                  { id: 'comic-text', label: 'ComicText' },
                  { id: 'dia-text-reveal', label: 'DiaReveal' },
                  { id: 'kinetic-text', label: 'Kinetic' },
                  { id: 'line-shadow-text', label: 'LineShadow' },
                  { id: 'morphing-text', label: 'Morphing' },
                  { id: 'text-3d-flip', label: '3DFlip' },
                  { id: 'text-animate', label: 'TextAnimate' },
                  { id: 'video-text', label: 'VideoText' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveComponent(item.id as ComponentType)
                    setCopied(false)
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    activeComponent === item.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={scrollTabsRight}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors shrink-0 cursor-pointer"
              title="Scroll Right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <span className="text-[10px] uppercase font-bold tracking-widest text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full select-none shrink-0 ml-2">
            Live Sandbox
          </span>
        </div>
      )}

      {/* Main Sandbox Workspace */}
      <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5 items-stretch min-h-[350px]">
        {/* Visual Live Preview (3/5 columns) */}
        <div className="md:col-span-3 flex flex-col justify-between p-6 sm:p-8 py-10 bg-zinc-50/50 dark:bg-zinc-950/20 relative">
          <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-40" />
          <div className="relative z-10 flex-1 flex items-center justify-center min-h-[240px] w-full p-4 overflow-visible">
            {activeComponent === 'button' && (
              <Button
                variant={btnVariant}
                size={btnSize as any}
                disabled={btnDisabled}
              >
                {btnLabel}
              </Button>
            )}
            {activeComponent === 'switch' && (
              <Switch
                key={`${swVariant}-${swChecked}-${swDisabled}`}
                variant={swVariant}
                defaultChecked={swChecked}
                disabled={swDisabled}
              />
            )}
            {activeComponent === 'badge' && (
              <Badge variant={badgeVariant as any}>{badgeText}</Badge>
            )}
            {activeComponent === 'uploader' && (
              <div className="w-full px-4">
                <Uploader
                  key={`${upVariant}-${upMaxSize[0]}-${upAccept}`}
                  variant={upVariant}
                  maxSizeMB={upMaxSize[0]}
                  accept={
                    upAccept === 'images'
                      ? ['image/*']
                      : upAccept === 'pdfs'
                        ? ['application/pdf']
                        : undefined
                  }
                />
              </div>
            )}
            {activeComponent === 'input' && (
              <div className="w-full max-w-xs space-y-2 text-left">
                <Label htmlFor="sb-inp" className="text-xs font-semibold">
                  {inpLabel}
                </Label>
                <Input
                  id="sb-inp"
                  variant={inpVariant as any}
                  placeholder={inpPlaceholder}
                  disabled={inpDisabled}
                />
              </div>
            )}
            {activeComponent === 'checkbox' && (
              <div className="flex items-center gap-2">
                <Checkbox
                  key={`${chkChecked}-${chkDisabled}`}
                  id="sb-chk"
                  defaultChecked={chkChecked}
                  disabled={chkDisabled}
                />
                <Label
                  htmlFor="sb-chk"
                  className="cursor-pointer text-xs font-semibold"
                >
                  {chkLabel}
                </Label>
              </div>
            )}
            {activeComponent === 'alert' && (
              <div className="w-full max-w-sm py-2">
                <Alert variant={alVariant as any} className="text-left">
                  <AlertTitle>{alTitle}</AlertTitle>
                  <AlertDescription>{alDesc}</AlertDescription>
                </Alert>
              </div>
            )}
            {activeComponent === 'progress' && (
              <div className="w-full max-w-xs space-y-3 py-2">
                <Progress value={progValue[0]} indicatorVariant={progVariant} />
                <p className="text-[10px] text-right font-mono text-muted-foreground">
                  {progValue[0]}% Loaded
                </p>
              </div>
            )}
            {activeComponent === 'accordion' && (
              <div className="w-full max-w-xs text-left p-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" variant={accVariant}>
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Transitions are powered by CSS variables under modern
                      styling presets.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
            {activeComponent === 'tabs' && (
              <div className="w-full max-w-xs py-2">
                <Tabs defaultValue="account" className="w-full">
                  <TabsList
                    className="grid w-full grid-cols-2"
                    variant={tabsVariant}
                  >
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            )}
            {activeComponent === 'marquee' && (
              <div className="w-full max-w-md overflow-hidden border border-border bg-background/50 rounded-xl p-2">
                <Marquee
                  key={`${mqDirection}-${mqSpeed}-${mqPauseOnHover}-${mqFade}-${mqReverse}`}
                  direction={mqDirection}
                  speed={mqSpeed}
                  pauseOnHover={mqPauseOnHover}
                  fade={mqFade}
                  reverse={mqReverse}
                >
                  {[
                    'Interactive',
                    'Dynamic',
                    'High Performance',
                    'Vibe UI',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-border rounded-xl bg-muted/50 text-foreground text-xs font-semibold whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </Marquee>
              </div>
            )}
            {activeComponent === 'text-glitch' && (
              <div className="w-full text-center font-mono">
                <TextGlitch
                  key={`${tgText}-${tgSpeed}-${tgActive}`}
                  text={tgText}
                  speed={tgSpeed}
                  active={tgActive}
                  className="text-3xl text-foreground uppercase tracking-widest"
                />
              </div>
            )}
            {activeComponent === 'typing-animation' && (
              <div className="w-full text-center">
                <TypingAnimation
                  key={`${taText}-${taDuration}-${taLoop}-${taCursorStyle}`}
                  duration={taDuration}
                  loop={taLoop}
                  cursorStyle={taCursorStyle}
                  className="text-2xl text-foreground font-semibold"
                >
                  {taText}
                </TypingAnimation>
              </div>
            )}
            {activeComponent === 'hyper-text' && (
              <div className="w-full text-center">
                <HyperText
                  key={`${htText}-${htDuration}-${htAnimateOnHover}`}
                  duration={htDuration}
                  animateOnHover={htAnimateOnHover}
                  className="text-4xl font-extrabold text-foreground tracking-tight"
                >
                  {htText}
                </HyperText>
              </div>
            )}
            {activeComponent === 'word-rotate' && (
              <div className="w-full text-center">
                <WordRotate
                  key={`${wrWords}-${wrDuration}`}
                  words={wrWords.split(',').map((w) => w.trim())}
                  duration={wrDuration}
                  className="text-3xl font-extrabold text-primary"
                />
              </div>
            )}
            {activeComponent === 'sparkles-text' && (
              <div className="w-full text-center flex justify-center">
                <SparklesText
                  key={`${stText}-${stCount}`}
                  sparklesCount={stCount}
                  className="text-4xl font-extrabold text-foreground"
                >
                  {stText}
                </SparklesText>
              </div>
            )}
            {activeComponent === 'text-reveal' && (
              <div className="w-full max-h-[300px] overflow-y-auto no-scrollbar rounded-xl bg-muted/10 relative">
                <div className="text-[10px] text-muted-foreground sticky top-0 text-right font-semibold select-none z-10">
                  Scroll Down Inside ↓
                </div>
                <TextReveal
                  key={trText}
                  className="h-[600px] flex items-center justify-center"
                >
                  {trText}
                </TextReveal>
              </div>
            )}
            {activeComponent === 'aurora-text' && (
              <div className="w-full text-center">
                <h1 className="text-3xl font-extrabold text-foreground animate-aurora">
                  Ship{' '}
                  <AuroraText key={`${atText}-${atSpeed}`} speed={atSpeed}>
                    {atText}
                  </AuroraText>
                </h1>
              </div>
            )}
            {activeComponent === 'animated-shiny-text' && (
              <div className="w-full text-center flex justify-center">
                <div className="group rounded-full border border-black/5 bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 px-4 py-1.5 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50">
                  <AnimatedShinyText
                    key={`${astText}-${astWidth}`}
                    shimmerWidth={astWidth}
                    className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 font-semibold text-sm"
                  >
                    <span>{astText}</span>
                  </AnimatedShinyText>
                </div>
              </div>
            )}
            {activeComponent === 'spinning-text' && (
              <div className="w-full flex justify-center">
                <div className="flex items-center justify-center h-[360px] w-[360px] relative">
                  <SpinningText
                    key={`${sptText}-${sptRadius}-${sptDuration}`}
                    radius={sptRadius}
                    duration={sptDuration}
                    className="font-mono text-2xl font-black text-primary uppercase tracking-widest animate-spin-slow"
                  >
                    {sptText}
                  </SpinningText>
                  <div className="text-4xl font-black text-foreground absolute tracking-tighter">
                    VIBE
                  </div>
                </div>
              </div>
            )}
            {activeComponent === 'scroll-based-velocity' && (
              <div className="w-full space-y-4 py-4 overflow-hidden">
                <ScrollVelocityContainer>
                  <ScrollVelocityRow
                    key={`${svText}-${svVelocity}`}
                    baseVelocity={svVelocity}
                    direction={1}
                    className="text-3xl font-extrabold tracking-tighter text-foreground"
                  >
                    <span className="mx-4">{svText}</span>
                  </ScrollVelocityRow>
                </ScrollVelocityContainer>
              </div>
            )}
            {activeComponent === 'blur-fade' && (
              <div className="w-full text-center flex justify-center">
                <BlurFade
                  key={`${bfText}-${bfDelay}`}
                  delay={bfDelay}
                  direction="down"
                >
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {bfText}
                  </h2>
                </BlurFade>
              </div>
            )}
            {activeComponent === 'number-ticker' && (
              <div className="w-full text-center flex justify-center">
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-primary font-sans">
                    <NumberTicker
                      key={`${ntValue}-${ntDecimals}`}
                      value={ntValue}
                      decimalPlaces={ntDecimals}
                    />
                  </span>
                </div>
              </div>
            )}
            {activeComponent === 'animated-gradient-text' && (
              <div className="w-full text-center flex justify-center">
                <AnimatedGradientText
                  key={`${agtText}-${agtSpeed}`}
                  speed={agtSpeed}
                  className="text-4xl font-extrabold tracking-tight"
                >
                  {agtText}
                </AnimatedGradientText>
              </div>
            )}
            {activeComponent === 'comic-text' && (
              <div className="w-full text-center flex justify-center py-4">
                <ComicText
                  key={`${ctText}-${ctFontSize}`}
                  fontSize={ctFontSize}
                >
                  {ctText}
                </ComicText>
              </div>
            )}
            {activeComponent === 'dia-text-reveal' && (
              <div className="w-full text-center flex justify-center text-4xl font-extrabold">
                <DiaTextReveal
                  key={`${dtrText}-${dtrDuration}`}
                  text={dtrText.split(',').map((w) => w.trim())}
                  duration={dtrDuration}
                  repeat
                />
              </div>
            )}
            {activeComponent === 'kinetic-text' && (
              <div className="w-full text-center flex justify-center py-4">
                <KineticText
                  key={ktText}
                  text={ktText}
                  className="text-5xl font-light text-foreground"
                />
              </div>
            )}
            {activeComponent === 'line-shadow-text' && (
              <div className="w-full text-center flex justify-center overflow-hidden p-4">
                <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl leading-none text-foreground select-none">
                  <LineShadowText
                    key={`${lstText}-${lstColor}-${lstDirection}-${lstAnimateDirection}`}
                    shadowColor={lstColor}
                    direction={lstDirection}
                    animateDirection={lstAnimateDirection}
                  >
                    {lstText}
                  </LineShadowText>
                </h1>
              </div>
            )}
            {activeComponent === 'morphing-text' && (
              <div className="w-full text-center flex justify-center py-6">
                <MorphingText
                  key={mtTexts}
                  texts={mtTexts.split(',').map((w) => w.trim())}
                  className="text-3xl font-extrabold md:text-5xl"
                />
              </div>
            )}
            {activeComponent === 'text-3d-flip' && (
              <div className="w-full text-center flex justify-center">
                <Text3DFlip
                  key={`${t3dText}-${t3dStagger}`}
                  staggerDuration={t3dStagger}
                  className="text-4xl font-extrabold text-primary select-none cursor-pointer"
                >
                  {t3dText}
                </Text3DFlip>
              </div>
            )}
            {activeComponent === 'text-animate' && (
              <div className="w-full text-center flex justify-center">
                <TextAnimate
                  key={`${tanText}-${tanAnimation}`}
                  animation={tanAnimation}
                  className="text-3xl font-extrabold text-foreground"
                >
                  {tanText}
                </TextAnimate>
              </div>
            )}
            {activeComponent === 'video-text' && (
              <div className="w-full text-center flex justify-center">
                <div className="relative h-[200px] w-full overflow-hidden flex items-center justify-center">
                  <VideoText key={`${vtText}-${vtSrc}`} src={vtSrc}>
                    {vtText}
                  </VideoText>
                </div>
              </div>
            )}
          </div>
          <div className="text-[10px] text-muted-foreground text-center relative z-10">
            Interactive visual preview wrapper
          </div>
        </div>

        {/* Options Controller Panel (2/5 columns) */}
        <div className="md:col-span-2 p-6 flex flex-col gap-5 bg-card">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-0.5">
            Configurator Options
          </h3>

          {/* BUTTON CONTROLS */}
          {activeComponent === 'button' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Label Text</Label>
                <input
                  type="text"
                  value={btnLabel}
                  onChange={(e) => setBtnLabel(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    ['default', 'glass', 'retro', 'glow', 'cyberpunk'] as const
                  ).map((v) => (
                    <button
                      key={v}
                      onClick={() => setBtnVariant(v)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        btnVariant === v
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Size</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['sm', 'md', 'lg'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setBtnSize(s)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        btnSize === s
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Disabled state</Label>
                <Switch
                  variant="glow"
                  defaultChecked={btnDisabled}
                  onCheckedChange={setBtnDisabled}
                />
              </div>
            </div>
          )}

          {/* SWITCH CONTROLS */}
          {activeComponent === 'switch' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    ['default', 'glass', 'retro', 'glow', 'cyberpunk'] as const
                  ).map((v) => (
                    <button
                      key={v}
                      onClick={() => setSwVariant(v)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        swVariant === v
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Default Checked</Label>
                <Switch
                  variant="glow"
                  defaultChecked={swChecked}
                  onCheckedChange={setSwChecked}
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Disabled state</Label>
                <Switch
                  variant="glow"
                  defaultChecked={swDisabled}
                  onCheckedChange={setSwDisabled}
                />
              </div>
            </div>
          )}

          {/* BADGE CONTROLS */}
          {activeComponent === 'badge' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Badge Label</Label>
                <input
                  type="text"
                  value={badgeText}
                  onChange={(e) => setBadgeText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    [
                      'default',
                      'glass',
                      'retro',
                      'glow',
                      'destructive',
                      'cyberpunk',
                    ] as const
                  ).map((v) => (
                    <button
                      key={v}
                      onClick={() => setBadgeVariant(v)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        badgeVariant === v
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* UPLOADER CONTROLS */}
          {activeComponent === 'uploader' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    ['default', 'glass', 'retro', 'glow', 'cyberpunk'] as const
                  ).map((v) => (
                    <button
                      key={v}
                      onClick={() => setUpVariant(v)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        upVariant === v
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Max File Size</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {upMaxSize[0]} MB
                  </span>
                </div>
                <Slider
                  max={20}
                  min={1}
                  step={1}
                  value={upMaxSize}
                  onValueChange={setUpMaxSize}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Accepted File Formats
                </Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: 'All Files', value: 'all' as const },
                    { label: 'Images Only', value: 'images' as const },
                    { label: 'PDFs Only', value: 'pdfs' as const },
                  ].map((a) => (
                    <button
                      key={a.value}
                      onClick={() => setUpAccept(a.value)}
                      className={`px-2 py-1.5 rounded border text-[9px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        upAccept === a.value
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* INPUT CONTROLS */}
          {activeComponent === 'input' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Label text</Label>
                <input
                  type="text"
                  value={inpLabel}
                  onChange={(e) => setInpLabel(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Placeholder</Label>
                <input
                  type="text"
                  value={inpPlaceholder}
                  onChange={(e) => setInpPlaceholder(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    [
                      'default',
                      'filled',
                      'glass',
                      'retro',
                      'glow',
                      'cyberpunk',
                    ] as const
                  ).map((v) => (
                    <button
                      key={v}
                      onClick={() => setInpVariant(v)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        inpVariant === v
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Disabled state</Label>
                <Switch
                  variant="glow"
                  defaultChecked={inpDisabled}
                  onCheckedChange={setInpDisabled}
                />
              </div>
            </div>
          )}

          {/* CHECKBOX CONTROLS */}
          {activeComponent === 'checkbox' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Label text</Label>
                <input
                  type="text"
                  value={chkLabel}
                  onChange={(e) => setChkLabel(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Default Checked</Label>
                <Switch
                  variant="glow"
                  defaultChecked={chkChecked}
                  onCheckedChange={setChkChecked}
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Disabled state</Label>
                <Switch
                  variant="glow"
                  defaultChecked={chkDisabled}
                  onCheckedChange={setChkDisabled}
                />
              </div>
            </div>
          )}

          {/* ALERT CONTROLS */}
          {activeComponent === 'alert' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Alert Title</Label>
                <input
                  type="text"
                  value={alTitle}
                  onChange={(e) => setAlTitle(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Alert Description
                </Label>
                <textarea
                  value={alDesc}
                  onChange={(e) => setAlDesc(e.target.value)}
                  rows={2}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    [
                      'default',
                      'destructive',
                      'glass',
                      'retro',
                      'glow',
                      'cyberpunk',
                    ] as const
                  ).map((v) => (
                    <button
                      key={v}
                      onClick={() => setAlVariant(v)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        alVariant === v
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PROGRESS CONTROLS */}
          {activeComponent === 'progress' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Loading value</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {progValue[0]}%
                  </span>
                </div>
                <Slider
                  max={100}
                  min={0}
                  step={1}
                  value={progValue}
                  onValueChange={setProgValue}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Indicator style</Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { label: 'Solid Default', value: 'default' as const },
                    { label: 'Gradient Glow', value: 'gradient' as const },
                  ].map((s) => (
                    <button
                      key={s.value}
                      onClick={() => setProgVariant(s.value)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        progVariant === s.value
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ACCORDION CONTROLS */}
          {activeComponent === 'accordion' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['default', 'glass', 'retro', 'cyberpunk'] as const).map(
                    (v) => (
                      <button
                        key={v}
                        onClick={() => setAccVariant(v)}
                        className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          accVariant === v
                            ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                            : 'border-border bg-background text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {v}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TABS CONTROLS */}
          {activeComponent === 'tabs' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">
                  Visual Preset Variant
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    ['default', 'glass', 'retro', 'glow', 'cyberpunk'] as const
                  ).map((v) => (
                    <button
                      key={v}
                      onClick={() => setTabsVariant(v)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        tabsVariant === v
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MARQUEE CONTROLS */}
          {activeComponent === 'marquee' && (
            <div className="space-y-4 text-left">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Direction</Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['left', 'right', 'up', 'down'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setMqDirection(d)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        mqDirection === d
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">
                    Animation Speed (duration)
                  </Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {mqSpeed}s
                  </span>
                </div>
                <Slider
                  max={100}
                  min={5}
                  step={5}
                  value={[mqSpeed]}
                  onValueChange={(val) => setMqSpeed(val[0])}
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Pause on Hover</Label>
                <Switch
                  variant="glow"
                  defaultChecked={mqPauseOnHover}
                  onCheckedChange={setMqPauseOnHover}
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">
                  Fade Edge Gradients
                </Label>
                <Switch
                  variant="glow"
                  defaultChecked={mqFade}
                  onCheckedChange={setMqFade}
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">
                  Reverse Flow Direction
                </Label>
                <Switch
                  variant="glow"
                  defaultChecked={mqReverse}
                  onCheckedChange={setMqReverse}
                />
              </div>
            </div>
          )}
          {activeComponent === 'text-glitch' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={tgText}
                  onChange={(e) => setTgText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Glitch Speed</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['slow', 'normal', 'fast'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setTgSpeed(s)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        tgSpeed === s
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <Label className="text-xs font-semibold">Glitch Active</Label>
                <Switch
                  variant="glow"
                  checked={tgActive}
                  onCheckedChange={setTgActive}
                />
              </div>
            </div>
          )}

          {/* TYPING ANIMATION CONTROLS */}
          {activeComponent === 'typing-animation' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={taText}
                  onChange={(e) => setTaText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">
                    Typing Speed (duration)
                  </Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {taDuration}ms
                  </span>
                </div>
                <Slider
                  max={300}
                  min={20}
                  step={10}
                  value={[taDuration]}
                  onValueChange={(val) => setTaDuration(val[0])}
                />
              </div>
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Cursor Style</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['line', 'block', 'underscore'] as const).map((cs) => (
                    <button
                      key={cs}
                      onClick={() => setTaCursorStyle(cs)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        taCursorStyle === cs
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cs}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 text-left">
                <Label className="text-xs font-semibold">Loop Infinite</Label>
                <Switch
                  variant="glow"
                  checked={taLoop}
                  onCheckedChange={setTaLoop}
                />
              </div>
            </div>
          )}

          {/* HYPER TEXT CONTROLS */}
          {activeComponent === 'hyper-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={htText}
                  onChange={(e) => setHtText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">
                    Scramble Speed (duration)
                  </Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {htDuration}ms
                  </span>
                </div>
                <Slider
                  max={2000}
                  min={200}
                  step={50}
                  value={[htDuration]}
                  onValueChange={(val) => setHtDuration(val[0])}
                />
              </div>
              <div className="flex items-center justify-between pt-1 text-left">
                <Label className="text-xs font-semibold">
                  Animate on Hover
                </Label>
                <Switch
                  variant="glow"
                  checked={htAnimateOnHover}
                  onCheckedChange={setHtAnimateOnHover}
                />
              </div>
            </div>
          )}

          {/* WORD ROTATE CONTROLS */}
          {activeComponent === 'word-rotate' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Rotation Words (comma separated)
                </Label>
                <input
                  type="text"
                  value={wrWords}
                  onChange={(e) => setWrWords(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Rotation Delay</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {wrDuration}ms
                  </span>
                </div>
                <Slider
                  max={5000}
                  min={500}
                  step={100}
                  value={[wrDuration]}
                  onValueChange={(val) => setWrDuration(val[0])}
                />
              </div>
            </div>
          )}

          {/* SPARKLES TEXT CONTROLS */}
          {activeComponent === 'sparkles-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={stText}
                  onChange={(e) => setStText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Twinkle Star Count</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {stCount} stars
                  </span>
                </div>
                <Slider
                  max={30}
                  min={3}
                  step={1}
                  value={[stCount]}
                  onValueChange={(val) => setStCount(val[0])}
                />
              </div>
            </div>
          )}

          {/* TEXT REVEAL CONTROLS */}
          {activeComponent === 'text-reveal' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Display Reveal Text
                </Label>
                <textarea
                  value={trText}
                  onChange={(e) => setTrText(e.target.value)}
                  rows={3}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* AURORA TEXT CONTROLS */}
          {activeComponent === 'aurora-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={atText}
                  onChange={(e) => setAtText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">
                    Wave Shift Speed multiplier
                  </Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {atSpeed}x
                  </span>
                </div>
                <Slider
                  max={3}
                  min={0.5}
                  step={0.1}
                  value={[atSpeed]}
                  onValueChange={(val) => setAtSpeed(val[0])}
                />
              </div>
            </div>
          )}

          {/* ANIMATED SHINY TEXT CONTROLS */}
          {activeComponent === 'animated-shiny-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={astText}
                  onChange={(e) => setAstText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Shimmer Width</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {astWidth}px
                  </span>
                </div>
                <Slider
                  max={300}
                  min={50}
                  step={10}
                  value={[astWidth]}
                  onValueChange={(val) => setAstWidth(val[0])}
                />
              </div>
            </div>
          )}

          {/* SPINNING TEXT CONTROLS */}
          {activeComponent === 'spinning-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Display Circular Text
                </Label>
                <input
                  type="text"
                  value={sptText}
                  onChange={(e) => setSptText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Radius (ch offset)</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {sptRadius} ch
                  </span>
                </div>
                <Slider
                  max={15}
                  min={2}
                  step={1}
                  value={[sptRadius]}
                  onValueChange={(val) => setSptRadius(val[0])}
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">
                    Rotation Speed (duration)
                  </Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {sptDuration}s
                  </span>
                </div>
                <Slider
                  max={30}
                  min={2}
                  step={1}
                  value={[sptDuration]}
                  onValueChange={(val) => setSptDuration(val[0])}
                />
              </div>
            </div>
          )}

          {/* SCROLL VELOCITY CONTROLS */}
          {activeComponent === 'scroll-based-velocity' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Marquee Text</Label>
                <input
                  type="text"
                  value={svText}
                  onChange={(e) => setSvText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Base Velocity Speed</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {svVelocity}
                  </span>
                </div>
                <Slider
                  max={15}
                  min={1}
                  step={1}
                  value={[svVelocity]}
                  onValueChange={(val) => setSvVelocity(val[0])}
                />
              </div>
            </div>
          )}

          {/* BLUR FADE CONTROLS */}
          {activeComponent === 'blur-fade' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={bfText}
                  onChange={(e) => setBfText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">
                    Animation Trigger Delay
                  </Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {bfDelay}s
                  </span>
                </div>
                <Slider
                  max={2}
                  min={0}
                  step={0.05}
                  value={[bfDelay]}
                  onValueChange={(val) => setBfDelay(val[0])}
                />
              </div>
            </div>
          )}

          {/* NUMBER TICKER CONTROLS */}
          {activeComponent === 'number-ticker' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Ticker Target Value</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {ntValue}
                  </span>
                </div>
                <Slider
                  max={1000}
                  min={1}
                  step={0.5}
                  value={[ntValue]}
                  onValueChange={(val) => setNtValue(val[0])}
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Decimal Places</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {ntDecimals}
                  </span>
                </div>
                <Slider
                  max={3}
                  min={0}
                  step={1}
                  value={[ntDecimals]}
                  onValueChange={(val) => setNtDecimals(val[0])}
                />
              </div>
            </div>
          )}

          {/* ANIMATED GRADIENT TEXT CONTROLS */}
          {activeComponent === 'animated-gradient-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={agtText}
                  onChange={(e) => setAgtText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">
                    Wave Gradient Speed multiplier
                  </Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {agtSpeed}x
                  </span>
                </div>
                <Slider
                  max={3}
                  min={0.5}
                  step={0.1}
                  value={[agtSpeed]}
                  onValueChange={(val) => setAgtSpeed(val[0])}
                />
              </div>
            </div>
          )}

          {/* COMIC TEXT CONTROLS */}
          {activeComponent === 'comic-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={ctText}
                  onChange={(e) => setCtText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Font Size (rem)</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {ctFontSize}rem
                  </span>
                </div>
                <Slider
                  max={8}
                  min={2}
                  step={0.5}
                  value={[ctFontSize]}
                  onValueChange={(val) => setCtFontSize(val[0])}
                />
              </div>
            </div>
          )}

          {/* DIA TEXT REVEAL CONTROLS */}
          {activeComponent === 'dia-text-reveal' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Display Words (comma separated)
                </Label>
                <input
                  type="text"
                  value={dtrText}
                  onChange={(e) => setDtrText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Sweep Duration</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {dtrDuration}s
                  </span>
                </div>
                <Slider
                  max={4}
                  min={0.5}
                  step={0.1}
                  value={[dtrDuration]}
                  onValueChange={(val) => setDtrDuration(val[0])}
                />
              </div>
            </div>
          )}

          {/* KINETIC TEXT CONTROLS */}
          {activeComponent === 'kinetic-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Hover Interaction Text
                </Label>
                <input
                  type="text"
                  value={ktText}
                  onChange={(e) => setKtText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
          )}

          {/* LINE SHADOW TEXT CONTROLS */}
          {activeComponent === 'line-shadow-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <input
                  type="text"
                  value={lstText}
                  onChange={(e) => setLstText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Shadow Custom Color
                </Label>
                <input
                  type="text"
                  value={lstColor}
                  onChange={(e) => setLstColor(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors font-mono"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Shadow Direction
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['left', 'right'] as const).map((dir) => (
                    <button
                      key={dir}
                      onClick={() => setLstDirection(dir)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        lstDirection === dir
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {dir}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Animation Direction
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['left-to-right', 'right-to-left'] as const).map((dir) => (
                    <button
                      key={dir}
                      onClick={() => setLstAnimateDirection(dir)}
                      className={`px-2 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        lstAnimateDirection === dir
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {dir}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MORPHING TEXT CONTROLS */}
          {activeComponent === 'morphing-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Morph Words (comma separated)
                </Label>
                <input
                  type="text"
                  value={mtTexts}
                  onChange={(e) => setMtTexts(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
          )}

          {/* TEXT 3D FLIP CONTROLS */}
          {activeComponent === 'text-3d-flip' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Display Hover Text
                </Label>
                <input
                  type="text"
                  value={t3dText}
                  onChange={(e) => setT3dText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <Label className="font-semibold">Stagger Delay</Label>
                  <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    {t3dStagger}s
                  </span>
                </div>
                <Slider
                  max={0.2}
                  min={0.01}
                  step={0.01}
                  value={[t3dStagger]}
                  onValueChange={(val) => setT3dStagger(val[0])}
                />
              </div>
            </div>
          )}

          {/* TEXT ANIMATE CONTROLS */}
          {activeComponent === 'text-animate' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">Display Text</Label>
                <textarea
                  value={tanText}
                  onChange={(e) => setTanText(e.target.value)}
                  rows={3}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Animation Style Preset
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    [
                      'fadeIn',
                      'blurIn',
                      'blurInUp',
                      'blurInDown',
                      'slideUp',
                      'slideDown',
                      'slideLeft',
                      'slideRight',
                      'scaleUp',
                      'scaleDown',
                    ] as const
                  ).map((a) => (
                    <button
                      key={a}
                      onClick={() => setTanAnimation(a)}
                      className={`px-1.5 py-1 rounded border text-[10px] font-semibold transition-all cursor-pointer truncate ${
                        tanAnimation === a
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIDEO TEXT CONTROLS */}
          {activeComponent === 'video-text' && (
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Display Masked Text
                </Label>
                <input
                  type="text"
                  value={vtText}
                  onChange={(e) => setVtText(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold">
                  Video URL Source
                </Label>
                <input
                  type="text"
                  value={vtSrc}
                  onChange={(e) => setVtSrc(e.target.value)}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2 text-foreground outline-none focus:border-primary/50 transition-colors font-mono"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Real-time Compiled Code Block (Bottom) */}
      <div className="border-t border-border bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-zinc-100/20 dark:bg-zinc-900/10">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
            Generated Code
          </span>
          <button
            onClick={() => copyToClipboard(generateCode())}
            className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground bg-background hover:bg-muted border border-border px-2 py-1 rounded cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <CheckIcon className="h-3 w-3 text-emerald-500" />
                Copied!
              </>
            ) : (
              <>
                <CopyIcon className="h-3 w-3" />
                Copy Snippet
              </>
            )}
          </button>
        </div>

        {/* Code Renderer */}
        <div className="relative">
          <Highlight
            theme={isDark ? themes.vsDark : themes.github}
            code={generateCode()}
            language="tsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`overflow-x-auto p-4 text-xs font-mono leading-relaxed max-h-[190px]`}
                style={{ ...style, backgroundColor: 'transparent' }}
              >
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className="table-row"
                  >
                    <span className="table-cell select-none text-right pr-4 text-muted-foreground/40 text-[10px] w-6 align-top pt-0.5">
                      {i + 1}
                    </span>
                    <span className="table-cell align-top whitespace-pre">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  )
}
