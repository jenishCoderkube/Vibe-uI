'use client'

import React from 'react'
import { Marquee } from 'vibe-ui'
import {
  Code,
  Activity,
  Shield,
  Layers,
  Heart,
  Star,
  Sparkles,
  Command,
  Globe,
  Hexagon,
  Cpu,
  Terminal,
  Zap,
  Flame,
  User,
  Coffee,
} from 'lucide-react'
import { cn } from '../lib/utils'

// Types and icons definition
const ShieldIcon = Shield as any
const SparkIcon = Sparkles as any
const ActivityIcon = Activity as any
const TerminalIcon = Terminal as any
const StarIcon = Star as any

const BRANDS = [
  { name: 'Vercel', icon: Hexagon, color: 'text-white' },
  { name: 'Framer', icon: Globe, color: 'text-purple-400' },
  { name: 'Next.js', icon: Command, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: Sparkles, color: 'text-sky-400' },
  { name: 'TypeScript', icon: Code, color: 'text-blue-400' },
  { name: 'Radix UI', icon: Layers, color: 'text-rose-400' },
  { name: 'Core CPU', icon: Cpu, color: 'text-emerald-400' },
]

const REVIEWS = [
  {
    name: 'Sarah Connor',
    handle: '@sarahc',
    body: 'Vibe UI has completely transformed how we design dashboards. The neon presets are breathtaking!',
    avatar: 'bg-gradient-to-tr from-purple-500 to-pink-500',
  },
  {
    name: 'Neo Watson',
    handle: '@cyberneo',
    body: 'The cyberpunk matrix configurations are insanely detailed. Pure magic out of the box!',
    avatar: 'bg-gradient-to-tr from-emerald-500 to-teal-500',
  },
  {
    name: 'Amélie Poulain',
    handle: '@amelie_p',
    body: 'Stunning design and effortless animations. Our client feedback has been off the charts.',
    avatar: 'bg-gradient-to-tr from-yellow-500 to-orange-500',
  },
  {
    name: 'Bruce Wayne',
    handle: '@darkknight',
    body: 'Extremely clean architecture. The glassmorphic components render perfectly on modern engines.',
    avatar: 'bg-gradient-to-tr from-zinc-700 to-slate-900',
  },
]

const IMAGES = [
  {
    title: 'Solaris',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80',
    tag: 'Web3',
  },
  {
    title: 'Abstract #4',
    url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=200&q=80',
    tag: 'AI Art',
  },
  {
    title: 'Neon Oasis',
    url: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=200&q=80',
    tag: 'Cyberpunk',
  },
  {
    title: 'Gold Liquid',
    url: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=200&q=80',
    tag: '3D Art',
  },
]

// 1. Basic Horizontal (Left)
export function MarqueeHorizontalDemo() {
  return (
    <Marquee direction="left" speed={12} fade={false}>
      {[
        'Left-Scrolling Text Strip',
        'Custom Layouts',
        'High Framerates',
        'Radix Primitives',
      ].map((t, i) => (
        <span
          key={i}
          className="text-xs text-zinc-300 font-medium px-4 py-1.5 bg-white/5 border border-white/5 rounded-full whitespace-nowrap"
        >
          {t}
        </span>
      ))}
    </Marquee>
  )
}

// 2. Basic Horizontal (Right)
export function MarqueeHorizontalReverseDemo() {
  return (
    <Marquee direction="right" speed={12} fade={false}>
      {[
        'Right-Scrolling Text Strip',
        'Reversed Motion',
        'Fluid CSS Keyframes',
        'Fully Controlled',
      ].map((t, i) => (
        <span
          key={i}
          className="text-xs text-purple-300 font-medium px-4 py-1.5 bg-purple-500/10 border border-purple-500/10 rounded-full whitespace-nowrap"
        >
          {t}
        </span>
      ))}
    </Marquee>
  )
}

// 3. Slow Grayscale Brand Ticker
export function MarqueeLogosDemo() {
  return (
    <Marquee direction="left" speed={12} gap="3rem" pauseOnHover={true}>
      {BRANDS.map((brand, idx) => {
        const IconComponent = brand.icon
        return (
          <div
            key={idx}
            className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <IconComponent className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide font-sans">
              {brand.name}
            </span>
          </div>
        )
      })}
    </Marquee>
  )
}

// 4. Fast Warning Ticker
export function MarqueeAlertDemo() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-yellow-500 text-black py-2.5 font-bold tracking-widest text-[10px] shadow-lg shadow-yellow-500/5 select-none">
      <Marquee direction="left" speed={12} fade={false} gap="2rem">
        {[
          'SYSTEM WARNING: INCOMING DEPLOYMENT SYNC',
          'SECURE GATEWAY LOCKED',
          'VPN CONNECTION ESTABLISHED',
          'PORT STATUS CHECK PASS',
        ].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 uppercase whitespace-nowrap"
          >
            <ShieldIcon className="h-4 w-4 fill-current" />
            <span>{text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// 5. Vertical Ticker (Up)
export function MarqueeVerticalUpDemo() {
  return (
    <div className="h-[180px] w-full border border-white/10 rounded-xl bg-black/40 relative overflow-hidden flex items-center justify-center">
      <Marquee direction="up" speed={12} gap="1rem" className="h-full">
        {REVIEWS.map((review, idx) => (
          <div
            key={idx}
            className="p-3 bg-white/5 border border-white/10 rounded-lg text-xs w-[240px] space-y-1 text-left"
          >
            <div className="flex items-center gap-2">
              <div className={cn('h-5 w-5 rounded-full', review.avatar)} />
              <span className="font-semibold text-white truncate">
                {review.name}
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground truncate">
              {review.body}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// 6. Vertical Ticker (Down)
export function MarqueeVerticalDownDemo() {
  return (
    <div className="h-[180px] w-full border border-white/10 rounded-xl bg-black/40 relative overflow-hidden flex items-center justify-center">
      <Marquee direction="down" speed={12} gap="1rem" className="h-full">
        {['React.js', 'TypeScript', 'Next.js', 'Vite', 'Tailwind', 'Turbo'].map(
          (tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400 font-mono text-center text-xs w-[180px] font-bold whitespace-nowrap"
            >
              [ {tech.toUpperCase()} ]
            </div>
          ),
        )}
      </Marquee>
    </div>
  )
}

// 7. Interactive Cards (Pause & Scale)
export function MarqueeInteractiveDemo() {
  return (
    <Marquee direction="left" speed={12} pauseOnHover={true} gap="1.5rem">
      {IMAGES.map((img, idx) => (
        <div
          key={idx}
          className="relative group/card w-[180px] aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-zinc-900 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-purple-500/40"
        >
          <img
            src={img.url}
            alt={img.title}
            className="object-cover w-full h-full opacity-80 group-hover/card:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex flex-col justify-end text-left">
            <span className="text-[9px] text-purple-400 font-mono font-bold uppercase">
              {img.tag}
            </span>
            <h4 className="text-xs font-bold text-white">{img.title}</h4>
          </div>
        </div>
      ))}
    </Marquee>
  )
}

// 8. Glassmorphic Review Cards
export function MarqueeGlassmorphicDemo() {
  return (
    <div className="w-full border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-4">
      <Marquee direction="left" speed={12} pauseOnHover={true} gap="2rem">
        {REVIEWS.map((review, idx) => (
          <div
            key={idx}
            className="w-[280px] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg space-y-3 text-left"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold',
                  review.avatar,
                )}
              >
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-none">
                  {review.name}
                </h4>
                <span className="text-[9px] text-muted-foreground">
                  {review.handle}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-2.5 w-2.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
              {review.body}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// 9. Neon Glow Accent Strips
export function MarqueeNeonDemo() {
  return (
    <div className="w-full border border-purple-500/20 rounded-xl bg-zinc-950 p-4 shadow-[inset_0_0_20px_rgba(168,85,247,0.05)]">
      <Marquee direction="left" speed={12} gap="1.5rem">
        {[
          {
            label: 'Neon Glow Presets',
            color: 'from-purple-500 to-indigo-500',
          },
          {
            label: 'Retro Brutalism Layouts',
            color: 'from-pink-500 to-rose-500',
          },
          {
            label: 'Glassmorphism Primitives',
            color: 'from-cyan-500 to-blue-500',
          },
          {
            label: 'Cyberpunk Matrix Themes',
            color: 'from-emerald-500 to-teal-500',
          },
        ].map((accent, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] whitespace-nowrap"
          >
            <div
              className={cn(
                'h-2.5 w-2.5 rounded-full bg-gradient-to-r',
                accent.color,
              )}
            />
            <span className="text-xs text-white font-medium">
              {accent.label}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// 10. Retro Brutalist Badge Strip
export function MarqueeBrutalistDemo() {
  return (
    <div className="w-full border-2 border-white bg-zinc-950 p-3 rounded-none">
      <Marquee direction="left" speed={12} fade={false} gap="2rem">
        {[
          { text: 'TRENDING #1', bg: 'bg-yellow-400' },
          { text: 'BRUTAL DESIGN', bg: 'bg-orange-500' },
          { text: '100% TYPOGRAPHY', bg: 'bg-teal-400' },
          { text: 'NO RADIAL GLOWS', bg: 'bg-pink-500' },
          { text: 'RAW MARKDOWN', bg: 'bg-indigo-400' },
        ].map((badge, idx) => (
          <div
            key={idx}
            className={cn(
              'px-4 py-2 border-2 border-white font-black text-xs text-black tracking-wider shadow-[3px_3px_0px_#ffffff] uppercase whitespace-nowrap',
              badge.bg,
            )}
          >
            {badge.text}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// 11. Cyberpunk Terminal Stream
export function MarqueeCyberpunkDemo() {
  return (
    <div className="w-full relative overflow-hidden border border-emerald-500/30 bg-black p-3.5 font-mono text-[11px] text-emerald-400 rounded-none after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(rgba(16,185,129,0.03)_50%,rgba(16,185,129,0)_50%)] after:bg-[length:100%_4px]">
      <Marquee direction="left" speed={12} gap="3rem" fade={false}>
        {[
          'SYS_STREAM_ONLINE :: [OK]',
          'DECRYPT_KEYS_INIT :: 0x8F2F',
          'CONNECT_IP :: 192.168.1.100',
          'CACHE_HIT_RATE :: 99.4%',
          'SECURE_AUTHENTICATION :: CONNECTED',
        ].map((log, idx) => (
          <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 bg-emerald-400 inline-block animate-pulse" />
            <span>{log}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// 12. Dual Row Reverse Ticker
export function MarqueeDoubleDemo() {
  return (
    <div className="w-full space-y-3 border border-white/10 p-4 rounded-xl bg-black/40">
      <Marquee direction="left" speed={12} fade={true}>
        {['TailwindCSS', 'TypeScript', 'React.js', 'Next.js', 'Vite'].map(
          (t, idx) => (
            <span
              key={idx}
              className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-4 py-2 rounded-lg whitespace-nowrap"
            >
              {t}
            </span>
          ),
        )}
      </Marquee>
      <Marquee direction="right" speed={12} fade={true}>
        {['ESLint', 'Prettier', 'Turborepo', 'PostCSS', 'MDX'].map((t, idx) => (
          <span
            key={idx}
            className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-4 py-2 rounded-lg whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </Marquee>
    </div>
  )
}

// 13. 3D Perspective Floating Strip
export function Marquee3DDemo() {
  return (
    <div className="w-full h-[200px] border border-white/10 rounded-2xl bg-zinc-950/50 flex items-center justify-center [perspective:800px] overflow-hidden">
      <div className="w-full rotate-x-[15deg] rotate-y-[-10deg] rotate-z-[2deg] scale-95 border-y border-purple-500/20 bg-purple-500/5 py-4 backdrop-blur shadow-[0_20px_50px_rgba(168,85,247,0.1)]">
        <Marquee direction="left" speed={12} gap="2rem">
          {[
            '3D PERSPECTIVE',
            'ROTATED VIEWPORTS',
            'premium visual presets',
            'VIBE-UI DECORATIVE',
          ].map((t, i) => (
            <span
              key={i}
              className="text-sm font-black tracking-widest text-purple-400 uppercase whitespace-nowrap"
            >
              ★ {t}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

// 14. Gradient Fade-Masked Gallery
export function MarqueeFadeDemo() {
  return (
    <div className="w-full border border-white/10 rounded-xl bg-black/40 p-4">
      <Marquee direction="left" speed={12} fade={true} gap="2rem">
        {IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-zinc-900 border border-white/10 p-2 rounded-xl w-[220px]"
          >
            <img
              src={img.url}
              alt={img.title}
              className="h-12 w-16 object-cover rounded-lg"
            />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white">{img.title}</h4>
              <span className="text-[10px] text-muted-foreground">
                {img.tag}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

// 15. Multi-Row Staggered Grid
export function MarqueeGridDemo() {
  return (
    <div className="w-full border border-white/10 rounded-xl bg-zinc-950/40 p-4 space-y-2">
      <Marquee direction="left" speed={12} gap="1rem" fade={true}>
        {['Design Systems', 'Web Components', 'Visual Quality'].map((t, i) => (
          <span
            key={i}
            className="text-[11px] font-semibold text-zinc-300 bg-white/5 px-3 py-1 rounded whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </Marquee>
      <Marquee direction="left" speed={12} gap="1rem" fade={true}>
        {['Radix Primitives', 'Tailwind CSS', 'Next.js App Router'].map(
          (t, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded whitespace-nowrap"
            >
              {t}
            </span>
          ),
        )}
      </Marquee>
      <Marquee direction="left" speed={12} gap="1rem" fade={true}>
        {['Production Ready', 'Fully Accessible', 'Premium Presets'].map(
          (t, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded whitespace-nowrap"
            >
              {t}
            </span>
          ),
        )}
      </Marquee>
    </div>
  )
}

// 16. Monospace Code Ticker
export function MarqueeCodeDemo() {
  return (
    <div className="w-full border border-white/10 rounded-xl bg-black p-4 font-mono text-[10px] text-zinc-400 select-all overflow-hidden">
      <Marquee direction="left" speed={12} gap="4rem" fade={true}>
        {[
          '{"component": "Marquee", "theme": "neon"}',
          'const marquee = <Marquee fade={true} />',
          'npx vibe-ui-kit@latest add marquee',
          'import { Marquee } from "@/components/ui/marquee"',
        ].map((codeStr, idx) => (
          <span
            key={idx}
            className="bg-zinc-900 border border-white/10 px-3 py-1.5 rounded text-yellow-300 whitespace-nowrap"
          >
            <code>{codeStr}</code>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
