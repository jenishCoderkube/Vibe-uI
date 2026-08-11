'use client'

import React from 'react'
import {
  Layers,
  Database,
  Cloud,
  Shield,
  Server,
  Code,
  Terminal,
  Cpu,
  HardDrive,
  Globe,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react'
import {
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

// HyperText Demos
export function HyperTextBasicDemo() {
  return (
    <HyperText
      className="text-6xl font-extrabold text-foreground tracking-tighter sm:text-7xl md:text-8xl leading-none"
      duration={1000}
    >
      HYPERTEXT
    </HyperText>
  )
}

export function HyperTextHoverDemo() {
  return (
    <HyperText
      className="text-6xl font-extrabold text-primary tracking-tighter sm:text-7xl md:text-8xl leading-none cursor-default"
      animateOnHover={true}
      duration={800}
    >
      HOVER ME
    </HyperText>
  )
}

export function HyperTextTerminalDemo() {
  return (
    <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl relative overflow-hidden text-left mx-auto">
      {/* Window Controls */}
      <div className="flex items-center gap-1.5 mb-4 border-b border-neutral-900 pb-3">
        <div className="h-3 w-3 rounded-full bg-rose-500/80" />
        <div className="h-3 w-3 rounded-full bg-amber-500/80" />
        <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="text-[10px] text-muted-foreground ml-2 font-mono">
          vibe-terminal - sh
        </span>
      </div>

      {/* Terminal Output Logs */}
      <div className="space-y-3.5 text-neutral-300">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">$</span>
          <span>npm run decrypt-core</span>
        </div>

        <div className="flex items-start gap-2.5">
          <Terminal className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
          <div className="flex-1">
            <span className="text-neutral-500 text-[11px] block">
              TASK LOG #2847
            </span>
            <HyperText
              className="text-emerald-500 font-bold tracking-tight text-sm cursor-default inline-block"
              duration={800}
            >
              INITIALIZING DECRYPTION ALGORITHM...
            </HyperText>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Cpu className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <div className="flex-1">
            <span className="text-neutral-500 text-[11px] block">
              SECURITY AUDIT
            </span>
            <HyperText
              className="text-primary font-bold tracking-tight text-sm cursor-default inline-block"
              duration={1200}
            >
              ESTABLISHING ENCRYPTED GATEWAY TO HOST...
            </HyperText>
          </div>
        </div>

        <div className="flex items-start gap-2.5 border-t border-neutral-900 pt-3 mt-3">
          <ShieldCheck className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
          <div className="flex-1">
            <span className="text-neutral-500 text-[11px] block">
              ACCESS STATUS
            </span>
            <HyperText
              className="text-rose-500 font-extrabold tracking-widest text-sm cursor-default inline-block"
              duration={1500}
            >
              CORE DATA ACCESS GRANTED
            </HyperText>
          </div>
        </div>
      </div>
    </div>
  )
}

// WordRotate Demos
export function WordRotateDemo() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-4xl sm:text-6xl font-extrabold tracking-tighter text-foreground leading-none">
      <span>Vibe UI is</span>
      <WordRotate
        words={['interactive', 'premium', 'dynamic', 'animated', 'responsive']}
        className="text-primary font-black"
        duration={2000}
      />
    </div>
  )
}

export function WordRotateHeroDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-center text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground leading-none py-6 px-4 max-w-2xl mx-auto">
      <span>Build websites that are</span>
      <WordRotate
        words={['faster', 'sleek', 'interactive', 'dynamic']}
        className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 font-black whitespace-nowrap"
        duration={2000}
      />
    </div>
  )
}

export function WordRotateAudienceDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-2xl sm:text-3xl font-bold tracking-tight text-muted-foreground leading-none py-4 px-4 max-w-2xl mx-auto">
      <span>Premium components for</span>
      <WordRotate
        words={['developers', 'startups', 'designers', 'creators']}
        className="text-emerald-500 dark:text-emerald-400 font-extrabold whitespace-nowrap"
        duration={2000}
      />
    </div>
  )
}

// SparklesText Demos
export function SparklesTextDemo() {
  return (
    <SparklesText
      className="text-5xl sm:text-7xl font-extrabold text-foreground tracking-tighter text-center leading-none"
      sparklesCount={12}
    >
      Premium Animations
    </SparklesText>
  )
}

export function SparklesTextCustomDemo() {
  return (
    <SparklesText
      className="text-5xl sm:text-7xl font-extrabold text-amber-500 tracking-tighter text-center leading-none"
      sparklesCount={15}
      colors={{ first: '#F59E0B', second: '#EF4444' }}
    >
      Golden Sparkles
    </SparklesText>
  )
}

// TextReveal Demos
export function TextRevealDemo() {
  return (
    <div className="w-full relative">
      <TextReveal children="Vibe UI brings your static user interfaces to life with premium, smooth text transitions." />
    </div>
  )
}

// AuroraText Demos
export function AuroraTextDemo() {
  return (
    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-center select-none text-foreground leading-none">
      Experience the <AuroraText>Vibe UI</AuroraText>
    </h1>
  )
}

export function AuroraTextCustomDemo() {
  return (
    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-center select-none text-foreground leading-none">
      Custom{' '}
      <AuroraText colors={['#3b82f6', '#10b981', '#6366f1']} speed={1.5}>
        Glow Energy
      </AuroraText>
    </h1>
  )
}

// AnimatedShinyText Demos
export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div className="group rounded-full border border-black/5 bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 px-5 py-2 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 animate-shiny-text bg-size-[100px_100%] bg-clip-text">
        <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 font-bold text-base sm:text-lg">
          <span>✨ Introducing Vibe UI Shimmer</span>
        </AnimatedShinyText>
      </div>
    </div>
  )
}

// SpinningText Demos
export function SpinningTextDemo() {
  return (
    <div className="flex items-center justify-center h-[360px] w-[360px] relative">
      <SpinningText
        radius={8}
        duration={12}
        className="font-mono text-2xl font-black text-primary uppercase tracking-widest animate-spin-slow"
      >
        interactive • modern • premium • design •
      </SpinningText>
      <div className="text-4xl font-black text-foreground absolute tracking-tighter">
        VIBE
      </div>
    </div>
  )
}

export function SpinningTextBadgeDemo() {
  return (
    <div className="relative flex items-center justify-center h-[400px] w-[400px] select-none">
      {/* Outer Circle (Clockwise) */}
      <SpinningText
        radius={10.5}
        duration={12}
        className="text-muted-foreground font-semibold text-xs sm:text-sm tracking-widest uppercase font-mono"
      >
        {'• vibe ui design system • premium components '}
      </SpinningText>

      {/* Inner Circle (Counter-Clockwise) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <SpinningText
          radius={7.5}
          duration={8}
          reverse={true}
          className="text-primary font-extrabold text-[11px] sm:text-xs tracking-wider uppercase font-mono"
        >
          {'• interactive • animated • ui '}
        </SpinningText>
      </div>

      {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border border-border bg-card/85 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
      </div>
    </div>
  )
}

export function SpinningTextReverseDemo() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 py-8">
      {/* Left: Clockwise */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center h-[220px] w-[220px]">
          <SpinningText
            radius={6.2}
            duration={10}
            className="text-foreground text-sm sm:text-base font-black uppercase font-sans"
          >
            {'clockwise spin direction • '}
          </SpinningText>
        </div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Normal (Clockwise)
        </span>
      </div>

      {/* Right: Counter-Clockwise */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center h-[220px] w-[220px]">
          <SpinningText
            radius={6.2}
            duration={10}
            reverse={true}
            className="text-primary text-sm sm:text-base font-black uppercase font-sans"
          >
            {'reverse spin direction • '}
          </SpinningText>
        </div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Reverse (Counter-Clockwise)
        </span>
      </div>
    </div>
  )
}

// ScrollVelocity Demos
export function ScrollVelocityDemo() {
  return (
    <div className="w-full space-y-4 py-4 overflow-hidden">
      <ScrollVelocityContainer>
        <ScrollVelocityRow
          baseVelocity={4}
          direction={1}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-none"
        >
          <span className="mx-4">FAST INTEGRATION</span>
          <span className="mx-4">★</span>
          <span className="mx-4">LIGHTWEIGHT</span>
          <span className="mx-4">★</span>
          <span className="mx-4">ACCESSIBLE</span>
          <span className="mx-4">★</span>
        </ScrollVelocityRow>
        <ScrollVelocityRow
          baseVelocity={4}
          direction={-1}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none"
        >
          <span className="mx-4">FLEXIBLE STYLING</span>
          <span className="mx-4">★</span>
          <span className="mx-4">COMPATIBLE</span>
          <span className="mx-4">★</span>
          <span className="mx-4">MODERN INTERFACE</span>
          <span className="mx-4">★</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  )
}

export function ScrollVelocityImagesDemo() {
  const row1Images = [
    'https://picsum.photos/id/10/250/150',
    'https://picsum.photos/id/15/250/150',
    'https://picsum.photos/id/22/250/150',
    'https://picsum.photos/id/25/250/150',
    'https://picsum.photos/id/28/250/150',
  ]
  const row2Images = [
    'https://picsum.photos/id/29/250/150',
    'https://picsum.photos/id/37/250/150',
    'https://picsum.photos/id/43/250/150',
    'https://picsum.photos/id/48/250/150',
    'https://picsum.photos/id/54/250/150',
  ]

  return (
    <div className="w-full py-6 overflow-hidden">
      <ScrollVelocityContainer className="space-y-4">
        <ScrollVelocityRow baseVelocity={3} direction={1}>
          <div className="flex gap-4 pr-4">
            {row1Images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx}`}
                className="w-[200px] h-[120px] sm:w-[250px] sm:h-[150px] object-cover rounded-xl shadow-md transition-transform hover:scale-105 duration-300"
              />
            ))}
          </div>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          <div className="flex gap-4 pr-4">
            {row2Images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx + 5}`}
                className="w-[200px] h-[120px] sm:w-[250px] sm:h-[150px] object-cover rounded-xl shadow-md transition-transform hover:scale-105 duration-300"
              />
            ))}
          </div>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  )
}

export function ScrollVelocityFeaturesDemo() {
  const row1Features = [
    { name: 'Frontend', Icon: Layers },
    { name: 'Database', Icon: Database },
    { name: 'Cloud', Icon: Cloud },
    { name: 'Security', Icon: Shield },
    { name: 'Hosting', Icon: Server },
  ]
  const row2Features = [
    { name: 'API Dev', Icon: Code },
    { name: 'DevOps', Icon: Terminal },
    { name: 'Hardware', Icon: Cpu },
    { name: 'Storage', Icon: HardDrive },
    { name: 'Network', Icon: Globe },
  ]

  return (
    <div className="w-full py-4 overflow-hidden">
      <ScrollVelocityContainer className="space-y-4">
        <ScrollVelocityRow baseVelocity={2.5} direction={1}>
          <div className="flex gap-4 pr-4">
            {row1Features.map((item, idx) => {
              const Icon = item.Icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-6 py-3 mx-2 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors duration-200 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold text-foreground text-sm tracking-tight">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2.5} direction={-1}>
          <div className="flex gap-4 pr-4">
            {row2Features.map((item, idx) => {
              const Icon = item.Icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-6 py-3 mx-2 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors duration-200 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold text-foreground text-sm tracking-tight">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  )
}

// BlurFade Demos
export function BlurFadeDemo() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-6">
      <BlurFade delay={0.1} direction="down">
        <h2 className="text-5xl font-black tracking-tighter text-foreground leading-none">
          Blur Fade-in
        </h2>
      </BlurFade>
      <BlurFade delay={0.2} direction="up">
        <p className="text-sm text-muted-foreground text-center">
          Smooth animations powered by CSS filters and motion triggers.
        </p>
      </BlurFade>
    </div>
  )
}

export function BlurFadeTextDemo() {
  const words = 'The premium motion system for React developers'.split(' ')
  return (
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-center text-3xl sm:text-5xl font-black tracking-tighter text-foreground leading-none py-10 px-4 max-w-xl mx-auto">
      {words.map((word, idx) => (
        <BlurFade
          key={idx}
          delay={0.06 * idx}
          direction="up"
          offset={6}
          className="inline-block"
          inView
        >
          <span>{word}</span>
        </BlurFade>
      ))}
    </div>
  )
}

export function BlurFadeGridDemo() {
  const items = [
    {
      title: 'Fast Delivery',
      desc: 'Global edge CDN rendering for sub-millisecond response speeds.',
      icon: Globe,
    },
    {
      title: 'Scale-Ready',
      desc: 'Autoscaling compute groups that dynamically resize with traffic.',
      icon: Server,
    },
    {
      title: 'Secure Routing',
      desc: 'Automatic SSL/TLS encryption with zero configuration required.',
      icon: Shield,
    },
    {
      title: 'Analytics Engine',
      desc: 'Real-time user insights and trend visualization out-of-the-box.',
      icon: TrendingUp,
    },
    {
      title: 'Flexible Database',
      desc: 'Edge-replicated data queries mapped directly to region origins.',
      icon: Database,
    },
    {
      title: 'Edge CPU Nodes',
      desc: 'Run arbitrary logic frames close to your client locations.',
      icon: Cpu,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl p-4 mx-auto">
      {items.map((item, idx) => {
        const Icon = item.icon
        return (
          <BlurFade
            key={idx}
            delay={0.06 * idx}
            direction="up"
            offset={10}
            inView
          >
            <div className="flex flex-col gap-2 p-5 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors h-full text-left">
              <div className="p-2 w-fit rounded bg-primary/10 text-primary mb-1">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-base text-foreground tracking-tight">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-normal">
                {item.desc}
              </p>
            </div>
          </BlurFade>
        )
      })}
    </div>
  )
}

// NumberTicker Demos
export function NumberTickerDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <span className="text-7xl sm:text-8xl font-black tracking-tight text-primary font-sans leading-none">
        <NumberTicker value={99.8} decimalPlaces={1} />
        <span className="text-5xl font-bold">%</span>
      </span>
      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
        Uptime SLA Guarantee
      </span>
    </div>
  )
}

export function NumberTickerDashboardDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full max-w-3xl p-4">
      {/* Revenue Card */}
      <div className="relative rounded-xl border border-border bg-card/45 p-6 hover:bg-card/70 transition-all select-none shadow-sm flex flex-col gap-2">
        <div className="flex justify-between items-center text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Net Revenue
          </span>
          <div className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-500">
            <span className="text-[10px] font-bold flex items-center gap-0.5">
              +14% <TrendingUp className="h-3 w-3" />
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            $
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            <NumberTicker value={45280} />
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground">
          Compared to last month
        </span>
      </div>

      {/* Active Users Card */}
      <div className="relative rounded-xl border border-border bg-card/45 p-6 hover:bg-card/70 transition-all select-none shadow-sm flex flex-col gap-2">
        <div className="flex justify-between items-center text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Active Users
          </span>
          <div className="px-2 py-0.5 rounded-lg bg-blue-500/10 text-blue-500">
            <span className="text-[10px] font-bold flex items-center gap-0.5">
              +8% <TrendingUp className="h-3 w-3" />
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            <NumberTicker value={12850} />
          </span>
          <span className="text-sm font-bold text-muted-foreground">/ day</span>
        </div>
        <span className="text-[10px] text-muted-foreground">
          Real-time sessions
        </span>
      </div>

      {/* System Load Card */}
      <div className="relative rounded-xl border border-border bg-card/45 p-6 hover:bg-card/70 transition-all select-none shadow-sm flex flex-col gap-2">
        <div className="flex justify-between items-center text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Uptime SLA
          </span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="flex items-baseline gap-0.5 mt-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            <NumberTicker value={99.9} decimalPlaces={1} />
          </span>
          <span className="text-xl font-bold text-emerald-500">%</span>
        </div>
        <span className="text-[10px] text-muted-foreground">
          High availability active
        </span>
      </div>
    </div>
  )
}

export function NumberTickerMilestonesDemo() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 w-full max-w-2xl mx-auto py-8 px-4">
      {/* Milestone 1 */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-5xl sm:text-6xl font-black tracking-tighter text-primary flex items-baseline leading-none">
          <NumberTicker value={50} />
          <span className="text-3xl sm:text-4xl font-black text-primary">
            M+
          </span>
        </div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-3">
          App Downloads
        </span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-12 w-px bg-border" />

      {/* Milestone 2 */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-5xl sm:text-6xl font-black tracking-tighter text-foreground flex items-baseline leading-none">
          <NumberTicker value={180} />
          <span className="text-3xl sm:text-4xl font-black">+</span>
        </div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-3">
          Global Servers
        </span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-12 w-px bg-border" />

      {/* Milestone 3 */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-5xl sm:text-6xl font-black tracking-tighter text-foreground flex items-baseline leading-none">
          <NumberTicker value={500} />
          <span className="text-3xl sm:text-4xl font-black">k+</span>
        </div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-3">
          GitHub Stars
        </span>
      </div>
    </div>
  )
}

// AnimatedGradientText Demos
export function AnimatedGradientTextDemo() {
  return (
    <AnimatedGradientText className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-none">
      ✨ Introducing Vibe UI Gradient
    </AnimatedGradientText>
  )
}

// ComicText Demos
export function ComicTextDemo() {
  return <ComicText fontSize={7}>BOOM!</ComicText>
}

// DiaTextReveal Demos
export function DiaTextRevealDemo() {
  return (
    <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-none">
      <DiaTextReveal
        text={['exclusive', 'modern', 'clean', 'premium']}
        duration={1.5}
        repeat
      />
    </div>
  )
}

export function DiaTextRevealTaglineDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-center text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-none py-6 max-w-2xl mx-auto px-4">
      <span>We design experiences that are</span>
      <DiaTextReveal
        text={['interactive', 'accessible', 'scalable', 'delightful']}
        duration={1.5}
        repeat
        fixedWidth
        className="text-primary font-black whitespace-nowrap"
      />
    </div>
  )
}

export function DiaTextRevealNeonDemo() {
  return (
    <div className="w-full max-w-lg bg-black border border-neutral-900 rounded-lg p-8 shadow-2xl text-center mx-auto my-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-40 animate-pulse" />
      <span className="text-[10px] tracking-[0.2em] font-bold text-rose-500 uppercase block mb-3 font-mono">
        STATUS PANEL INITIALIZED
      </span>
      <div className="text-xl sm:text-2xl font-black font-mono tracking-widest leading-none py-2">
        <DiaTextReveal
          text={[
            'SYSTEM DATA DECRYPTING',
            'NODE SECTOR CORRUPTED',
            'ACCESS PORT AUTHORIZED',
          ]}
          colors={['#ff007f', '#00f0ff', '#ad00ff', '#00ffcc']}
          duration={1.6}
          repeat
          className="text-transparent font-bold uppercase whitespace-nowrap"
        />
      </div>
    </div>
  )
}

// KineticText Demos
export function KineticTextDemo() {
  return (
    <KineticText
      text="VIBE UI"
      className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-none text-foreground"
    />
  )
}

export function KineticTextGradientDemo() {
  return (
    <div className="flex items-center justify-center p-6 text-center select-none">
      <KineticText
        text="CREATIVE VIBE"
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-500 to-pink-500 py-4"
      />
    </div>
  )
}

export function KineticTextCustomDemo() {
  return (
    <div className="flex items-center justify-center p-6 text-center select-none">
      <KineticText
        text="AMPLITUDE"
        className="text-4xl sm:text-6xl md:text-7xl font-light tracking-widest leading-none text-foreground py-4"
        style={
          {
            '--hover-padding': '1.5rem',
            '--text-stroke-width': '3px',
          } as React.CSSProperties
        }
      />
    </div>
  )
}

// LineShadowText Demos
export function LineShadowTextDemo() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center text-center overflow-hidden p-4">
      <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl leading-none text-foreground select-none">
        <LineShadowText shadowColor="#3b82f6">Vibe UI</LineShadowText>
      </h1>
    </div>
  )
}

export function LineShadowTextLeftDemo() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center text-center overflow-hidden p-4">
      <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl leading-none text-foreground select-none">
        <LineShadowText shadowColor="#ec4899" direction="left">
          Vibe UI
        </LineShadowText>
      </h1>
    </div>
  )
}

export function LineShadowTextRightToLeftDemo() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center text-center overflow-hidden p-4">
      <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl leading-none text-foreground select-none">
        <LineShadowText shadowColor="#10b981" animateDirection="right-to-left">
          Vibe UI
        </LineShadowText>
      </h1>
    </div>
  )
}

// MorphingText Demos
export function MorphingTextDemo() {
  return (
    <MorphingText
      texts={['Vibe', 'Interactive', 'Dynamic', 'Beautiful']}
      className="text-3xl font-extrabold md:text-5xl"
    />
  )
}

// Text3DFlip Demos
export function Text3DFlipDemo() {
  return (
    <Text3DFlip className="text-4xl font-extrabold text-primary">
      HOVER ME TO SPIN
    </Text3DFlip>
  )
}

// TextAnimate Demos
export function TextAnimateDemo() {
  return (
    <div className="flex min-h-[120px] w-full items-center justify-center py-4">
      <TextAnimate
        animation="blurInUp"
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center max-w-xl"
      >
        Elevate your layout styles with text animation presets.
      </TextAnimate>
    </div>
  )
}

// VideoText Demos
export function VideoTextDemo() {
  return (
    <div className="relative h-[200px] w-full flex items-center justify-center text-center">
      <VideoText src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">
        VIBE UI
      </VideoText>
    </div>
  )
}
