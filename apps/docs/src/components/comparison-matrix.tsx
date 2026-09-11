'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import {
  Check,
  Minus,
  Search,
  Sparkles,
  Copy,
  CheckCheck,
  ArrowRight,
  Layers,
  Palette,
  Cpu,
  Terminal,
  ShieldCheck,
  LayoutGrid,
  Table as TableIcon,
} from 'lucide-react'

export interface ComparisonFeature {
  id: string
  category: 'ecosystem' | 'styling' | 'motion' | 'dx' | 'architecture'
  name: string
  hint: string
  vibe: {
    status: 'check' | 'badge'
    value: string
    subtext?: string
  }
  competitor: {
    status: 'check' | 'dash' | 'badge' | 'partial'
    value: string
    subtext?: string
  }
}

interface TargetPreset {
  name: string
  badge: string
  summary: string
  features: ComparisonFeature[]
}

const COMPARISON_DATA: Record<'shadcn' | 'magic-ui' | 'aceternity', TargetPreset> = {
  shadcn: {
    name: 'shadcn/ui',
    badge: 'Minimalist Primitives',
    summary:
      'The foundational copy-paste library. Focuses on monochromatic neutral primitives, requiring developers to self-assemble animations, presets, and WebGL effects.',
    features: [
      {
        id: 'total-components',
        category: 'ecosystem',
        name: 'Total Components & Primitives',
        hint: 'Total catalog of production-ready, copy-paste React components.',
        vibe: {
          status: 'badge',
          value: '92+ Primitives',
          subtext: 'Complete app UI, kinetic text, & shaders',
        },
        competitor: {
          status: 'badge',
          value: '~48 Primitives',
          subtext: 'Core form & layout components only',
        },
      },
      {
        id: 'blocks-templates',
        category: 'ecosystem',
        name: 'Application Blocks & Templates',
        hint: 'Pre-composed enterprise screen templates ready to copy into projects.',
        vibe: {
          status: 'badge',
          value: '7+ Full Blocks',
          subtext: 'Analytics dashboard, Auth, Commerce, Chat',
        },
        competitor: {
          status: 'partial',
          value: 'Partial (Preview)',
          subtext: 'Community blocks without unified token integration',
        },
      },
      {
        id: 'skeleton-suite',
        category: 'ecosystem',
        name: 'Pre-built Skeleton Loaders',
        hint: 'Purpose-built skeleton loading states for distinct UI paradigms.',
        vibe: {
          status: 'badge',
          value: '18 Specialized Skeletons',
          subtext: 'Feeds, Invoices, Music Player, Profile, Tables',
        },
        competitor: {
          status: 'dash',
          value: '1 Generic Skeleton',
          subtext: 'Requires manual assembly for custom layouts',
        },
      },
      {
        id: 'styling-presets',
        category: 'styling',
        name: 'Built-in Styling Variants',
        hint: 'Multi-theme presets switchable via simple component variant props.',
        vibe: {
          status: 'badge',
          value: '5 Design Presets',
          subtext: 'Glassmorphism, Neon Glow, Retro, Minimal, Cyber',
        },
        competitor: {
          status: 'dash',
          value: 'Monochromatic Only',
          subtext: 'Neutral Slate/Zinc default; custom styling requires manual overrides',
        },
      },
      {
        id: 'tailwind-v4',
        category: 'styling',
        name: 'Tailwind CSS v4 Native Support',
        hint: 'Architecture leveraging the modern @theme inline directive and CSS variables.',
        vibe: {
          status: 'check',
          value: 'Native Tailwind v4',
          subtext: 'Built for @theme inline with backwards v3 support',
        },
        competitor: {
          status: 'partial',
          value: 'In Transition',
          subtext: 'Primarily designed around Tailwind v3 tailwind.config.js',
        },
      },
      {
        id: 'theme-studio',
        category: 'styling',
        name: 'Interactive Studio & Exporter',
        hint: 'Visual theme designer with real-time CSS variable and Tailwind token export.',
        vibe: {
          status: 'check',
          value: 'Web Studio (/studio)',
          subtext: 'Live token editor, @theme generator, & .css download',
        },
        competitor: {
          status: 'partial',
          value: 'Basic Previewer',
          subtext: 'Limited to predefined color palette selection',
        },
      },
      {
        id: 'webgl-shaders',
        category: 'motion',
        name: 'GPU WebGL Background Shaders',
        hint: 'Interactive 3D shaders running directly on the GPU without heavy 3D engine bloat.',
        vibe: {
          status: 'check',
          value: '5 OGL Shaders (<25KB)',
          subtext: 'LightTunnel, WebThreads, SlicedWaves, Lightfall',
        },
        competitor: {
          status: 'dash',
          value: 'None',
          subtext: 'Requires manual third-party canvas or Three.js setup',
        },
      },
      {
        id: 'motion-typography',
        category: 'motion',
        name: 'Kinetic Motion Typography',
        hint: 'Animated text and headline primitives for high-converting landing pages.',
        vibe: {
          status: 'badge',
          value: '20+ Motion Primitives',
          subtext: 'AuroraText, HyperText, NumberTicker, WordRotate',
        },
        competitor: {
          status: 'dash',
          value: 'None',
          subtext: 'Standard static typography only',
        },
      },
      {
        id: 'cli-doctor',
        category: 'dx',
        name: 'Project Diagnostics CLI (doctor)',
        hint: 'Automated inspection of package managers, peer dependencies, and Tailwind directives.',
        vibe: {
          status: 'check',
          value: 'vibe-ui-kit doctor',
          subtext: 'Automated health audit with one-click resolution',
        },
        competitor: {
          status: 'dash',
          value: 'None',
          subtext: 'No automated dependency diagnostics',
        },
      },
      {
        id: 'cli-update',
        category: 'dx',
        name: 'Batch Component Upgrades (update)',
        hint: 'CLI command to safely upgrade installed components against upstream improvements.',
        vibe: {
          status: 'check',
          value: 'vibe-ui-kit update --all',
          subtext: 'Inspects local files and installs missing peers',
        },
        competitor: {
          status: 'partial',
          value: 'Manual Diff',
          subtext: 'Requires manual git diff or component re-add',
        },
      },
      {
        id: 'radix-a11y',
        category: 'architecture',
        name: 'Radix UI Accessibility Primitives',
        hint: '100% WAI-ARIA compliance, screen reader support, and full keyboard navigation.',
        vibe: {
          status: 'check',
          value: '100% WAI-ARIA Compliant',
          subtext: 'Built on battle-tested Radix UI primitives',
        },
        competitor: {
          status: 'check',
          value: '100% WAI-ARIA Compliant',
          subtext: 'Built on battle-tested Radix UI primitives',
        },
      },
      {
        id: 'lock-in',
        category: 'architecture',
        name: 'Zero Runtime Lock-in',
        hint: 'Direct code ownership in your project with zero node_modules runtime wrapper.',
        vibe: {
          status: 'check',
          value: '100% Code Ownership',
          subtext: 'Components live in your @/components folder',
        },
        competitor: {
          status: 'check',
          value: '100% Code Ownership',
          subtext: 'Components live in your @/components folder',
        },
      },
    ],
  },
  'magic-ui': {
    name: 'Magic UI',
    badge: 'Landing Page Effects',
    summary:
      'Specialized in decorative visual effects and animated beams for hero sections. Requires external libraries for form controls, tables, and application interfaces.',
    features: [
      {
        id: 'core-primitives',
        category: 'ecosystem',
        name: 'Core Application Primitives',
        hint: 'Essential form, input, navigation, and modal components for real applications.',
        vibe: {
          status: 'badge',
          value: '60+ Core Primitives',
          subtext: 'Buttons, Inputs, Dialogs, Tables, Selects, Drawers',
        },
        competitor: {
          status: 'dash',
          value: 'None',
          subtext: 'Relies entirely on shadcn/ui for core application UI',
        },
      },
      {
        id: 'motion-typography',
        category: 'motion',
        name: 'Kinetic Typography & Text Effects',
        hint: 'Eye-catching headline effects and animated characters.',
        vibe: {
          status: 'badge',
          value: '20+ Text Effects',
          subtext: 'AuroraText, HyperText, BlurReveal, SparklesText',
        },
        competitor: {
          status: 'badge',
          value: '~15 Text Effects',
          subtext: 'Good selection of animated text primitives',
        },
      },
      {
        id: 'webgl-shaders',
        category: 'motion',
        name: 'GPU WebGL Background Shaders',
        hint: 'Hardware-accelerated fragment and vertex shaders running at 60fps.',
        vibe: {
          status: 'check',
          value: '5 OGL Shaders (<25KB)',
          subtext: 'LightTunnel, WebThreads, SlicedWaves, Lightfall',
        },
        competitor: {
          status: 'dash',
          value: 'None',
          subtext: 'Canvas 2D / CSS borders only (no 3D WebGL)',
        },
      },
      {
        id: 'app-blocks',
        category: 'ecosystem',
        name: 'Full Application Blocks',
        hint: 'Ready-to-use production blocks including dashboards and auth screens.',
        vibe: {
          status: 'badge',
          value: '7+ Full Blocks',
          subtext: 'Dashboards, Pricing, Auth, Settings, Support',
        },
        competitor: {
          status: 'dash',
          value: 'None',
          subtext: 'Hero components only; no full application screens',
        },
      },
      {
        id: 'single-ecosystem',
        category: 'architecture',
        name: 'Single Cohesive Token System',
        hint: 'Unified design tokens bridging both landing pages and inner dashboard views.',
        vibe: {
          status: 'check',
          value: 'Unified Token Engine',
          subtext: 'One theme configuration for landing and SaaS app',
        },
        competitor: {
          status: 'dash',
          value: 'Fragmented Setup',
          subtext: 'Requires bridging Magic UI with separate component libraries',
        },
      },
      {
        id: 'theme-studio',
        category: 'styling',
        name: 'Interactive Theme Studio & CSS Exporter',
        hint: 'Web-based studio for creating custom color presets with one-click export.',
        vibe: {
          status: 'check',
          value: 'Web Studio (/studio)',
          subtext: 'Multi-format export (@theme, CSS variables, tailwind)',
        },
        competitor: {
          status: 'dash',
          value: 'Showcase Only',
          subtext: 'No interactive theme generator or token exporter',
        },
      },
      {
        id: 'cli-doctor',
        category: 'dx',
        name: 'Automated Project Diagnostics CLI',
        hint: 'CLI health audits for Tailwind directives and missing dependencies.',
        vibe: {
          status: 'check',
          value: 'vibe-ui-kit doctor',
          subtext: 'Validates peer dependencies and config sanity',
        },
        competitor: {
          status: 'dash',
          value: 'None',
          subtext: 'Standard copy-paste CLI without diagnostics',
        },
      },
    ],
  },
  aceternity: {
    name: 'Aceternity UI',
    badge: 'Landing Page Motion',
    summary:
      'Pioneered creative micro-interactions in Next.js. Many components rely on heavy Three.js dependencies, posing bundle-size and performance considerations for core applications.',
    features: [
      {
        id: 'bundle-size',
        category: 'motion',
        name: 'WebGL Shader Footprint & Overhead',
        hint: 'JavaScript bundle weight introduced by 3D background effects.',
        vibe: {
          status: 'badge',
          value: 'OGL Shaders (<25KB)',
          subtext: 'Lightweight GPU shaders with zero Three.js bloat',
        },
        competitor: {
          status: 'dash',
          value: 'Three.js (~400KB+)',
          subtext: 'Significant JavaScript bundle weight for 3D canvases',
        },
      },
      {
        id: 'app-primitives',
        category: 'ecosystem',
        name: 'Application Form & Data Primitives',
        hint: 'Production-ready inputs, dialogs, dropdowns, and data display.',
        vibe: {
          status: 'badge',
          value: '60+ Core Primitives',
          subtext: 'Form controls, tables, dialogs, accessible selects',
        },
        competitor: {
          status: 'dash',
          value: 'Minimal Application Primitives',
          subtext: 'Focused heavily on landing page hero cards',
        },
      },
      {
        id: 'radix-a11y',
        category: 'architecture',
        name: 'WAI-ARIA Accessibility Standards',
        hint: 'Keyboard navigation, ARIA attributes, and screen-reader readiness.',
        vibe: {
          status: 'check',
          value: 'Radix UI Compliance',
          subtext: 'Industry-standard accessibility out of the box',
        },
        competitor: {
          status: 'partial',
          value: 'Custom Motion Divs',
          subtext: 'Framer Motion wrappers often lack full ARIA roles',
        },
      },
      {
        id: 'tailwind-v4',
        category: 'styling',
        name: 'Tailwind CSS v4 Native Compatibility',
        hint: 'Native integration with modern Tailwind CSS v4 CSS variables and @theme.',
        vibe: {
          status: 'check',
          value: 'Native Tailwind v4',
          subtext: 'Zero-config support for @theme inline',
        },
        competitor: {
          status: 'partial',
          value: 'Tailwind v3 Config',
          subtext: 'Requires manual porting of custom Tailwind plugins',
        },
      },
      {
        id: 'cli-suite',
        category: 'dx',
        name: 'CLI Maintenance Suite (doctor, update)',
        hint: 'CLI capabilities to diagnose projects and perform batch upgrades.',
        vibe: {
          status: 'check',
          value: 'Full CLI Suite',
          subtext: 'doctor, update --all, init, and registry add',
        },
        competitor: {
          status: 'dash',
          value: 'Manual / Basic Add',
          subtext: 'No automated diagnostics or batch upgrade tooling',
        },
      },
      {
        id: 'product-lifecycle',
        category: 'ecosystem',
        name: 'Full Application Lifecycle',
        hint: 'Suitability for scaling from landing page into high-density SaaS dashboards.',
        vibe: {
          status: 'check',
          value: 'Landing + Admin App',
          subtext: 'Scales from flashy hero sections to deep business apps',
        },
        competitor: {
          status: 'partial',
          value: 'Landing Page Focused',
          subtext: 'Optimized for marketing pages; less suited for complex data apps',
        },
      },
    ],
  },
}

const CATEGORIES = [
  { id: 'all', label: 'All Features', icon: Sparkles },
  { id: 'ecosystem', label: 'Ecosystem', icon: Layers },
  { id: 'styling', label: 'Theming & Presets', icon: Palette },
  { id: 'motion', label: 'WebGL & Motion', icon: Cpu },
  { id: 'dx', label: 'Developer CLI', icon: Terminal },
  { id: 'architecture', label: 'Architecture', icon: ShieldCheck },
]

export function ComparisonMatrix({
  target = 'shadcn',
}: {
  target?: 'shadcn' | 'magic-ui' | 'aceternity'
}) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [viewMode, setViewMode] = useState<'matrix' | 'cards'>('matrix')
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setViewMode('cards')
    }
  }, [])

  const preset = COMPARISON_DATA[target] || COMPARISON_DATA.shadcn

  const filteredFeatures = useMemo(() => {
    return preset.features.filter((f) => {
      const matchesCategory =
        activeCategory === 'all' || f.category === activeCategory
      const matchesSearch =
        searchQuery.trim() === '' ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.hint.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.vibe.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.competitor.value.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [preset, activeCategory, searchQuery])

  const copyInitCommand = () => {
    navigator.clipboard.writeText('npx vibe-ui-kit init')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-8 rounded-2xl border border-border bg-card/50 shadow-sm overflow-hidden backdrop-blur-xs">
      {/* Header Banner */}
      <div className="p-6 md:p-8 border-b border-border/80 bg-gradient-to-br from-primary/10 via-background to-card/60">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/20 text-primary border border-primary/30 tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                Architectural Breakdown
              </span>
              <span className="text-xs text-muted-foreground">
                Vibe UI vs {preset.name}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
              Feature Comparison Matrix
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
              {preset.summary}
            </p>
          </div>

          {/* View Mode Switcher on Desktop/Tablet */}
          <div className="flex items-center self-start md:self-auto gap-1 p-1 rounded-xl border border-border bg-muted/40">
            <button
              type="button"
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'matrix'
                  ? 'bg-background text-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Matrix View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'cards'
                  ? 'bg-background text-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Card View</span>
            </button>
          </div>
        </div>

        {/* Filter Controls: Category Badges & Instant Search */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-border/40">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const count =
                cat.id === 'all'
                  ? preset.features.length
                  : preset.features.filter((f) => f.category === cat.id).length
              if (count === 0 && cat.id !== 'all') return null

              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                      : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                  <span
                    className={`ml-0.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground font-bold'
                        : 'bg-background/80 text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-border bg-background/80 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
            />
          </div>
        </div>
      </div>

      {/* MATRIX VIEW (Default Desktop/Tablet) */}
      {viewMode === 'matrix' && (
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-xs font-semibold text-muted-foreground">
                <th className="py-4 px-6 w-[42%] uppercase tracking-wider font-bold">
                  Feature & Capability
                </th>
                <th className="py-4 px-6 w-[29%] bg-primary/[0.04] border-x border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-primary-foreground font-extrabold text-[11px] shadow-xs">
                      V
                    </div>
                    <span className="font-extrabold text-foreground text-sm">
                      Vibe UI
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-primary text-primary-foreground uppercase tracking-widest">
                      All-in-One
                    </span>
                  </div>
                </th>
                <th className="py-4 px-6 w-[29%] uppercase tracking-wider font-bold text-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-sm">
                      {preset.name}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-muted text-muted-foreground border border-border">
                      {preset.badge}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-sm">
              {filteredFeatures.map((f) => (
                <tr
                  key={f.id}
                  className="group hover:bg-muted/20 transition-colors"
                >
                  {/* Feature Title & Hint */}
                  <td className="py-4 px-6 align-top">
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {f.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-normal">
                      {f.hint}
                    </div>
                  </td>

                  {/* Vibe UI Status (Highlighted Column) */}
                  <td className="py-4 px-6 align-top bg-primary/[0.02] border-x border-primary/20">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground text-xs md:text-sm">
                          {f.vibe.value}
                        </span>
                        {f.vibe.subtext && (
                          <div className="text-[11px] text-muted-foreground font-normal mt-0.5 leading-snug">
                            {f.vibe.subtext}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Competitor Status */}
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-start gap-2">
                      {f.competitor.status === 'check' ? (
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                      ) : f.competitor.status === 'partial' ? (
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
                          <Minus className="h-3 w-3 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <Minus className="h-3 w-3 stroke-[2]" />
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-foreground text-xs md:text-sm">
                          {f.competitor.value}
                        </span>
                        {f.competitor.subtext && (
                          <div className="text-[11px] text-muted-foreground font-normal mt-0.5 leading-snug">
                            {f.competitor.subtext}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredFeatures.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-muted-foreground text-sm">
                    No features matched &ldquo;{searchQuery}&rdquo;. Try another search keyword.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* CARD VIEW (Great on Mobile & Alternative View) */}
      {viewMode === 'cards' && (
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFeatures.map((f) => (
            <div
              key={f.id}
              className="p-4 rounded-xl border border-border bg-card/60 hover:border-primary/40 transition-all flex flex-col justify-between gap-3 shadow-2xs"
            >
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                  {f.category}
                </div>
                <h4 className="text-sm font-bold text-foreground mt-0.5">{f.name}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-normal">{f.hint}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/60">
                {/* Vibe UI Card Column */}
                <div className="p-2.5 rounded-lg bg-primary/[0.05] border border-primary/20 flex flex-col">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-500 stroke-[3]" /> Vibe UI
                  </span>
                  <span className="text-xs font-bold text-foreground mt-1">{f.vibe.value}</span>
                  {f.vibe.subtext && (
                    <span className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                      {f.vibe.subtext}
                    </span>
                  )}
                </div>

                {/* Competitor Card Column */}
                <div className="p-2.5 rounded-lg bg-muted/40 border border-border flex flex-col">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    {preset.name}
                  </span>
                  <span className="text-xs font-medium text-foreground mt-1">
                    {f.competitor.value}
                  </span>
                  {f.competitor.subtext && (
                    <span className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                      {f.competitor.subtext}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          {filteredFeatures.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground text-sm">
              No features matched &ldquo;{searchQuery}&rdquo;. Try another search keyword.
            </div>
          )}
        </div>
      )}

      {/* Footer CTA & CLI Quick Launcher */}
      <div className="p-4 sm:p-6 bg-muted/30 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">
              Ready to experience Vibe UI?
            </div>
            <div className="text-[11px] text-muted-foreground">
              Add components with zero runtime lock-in and 100% source ownership.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={copyInitCommand}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted font-mono text-xs font-semibold text-foreground transition-all cursor-pointer shadow-xs"
          >
            {copied ? (
              <CheckCheck className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-muted-foreground" />
            )}
            <span>npx vibe-ui-kit init</span>
          </button>
          <Link
            href="/docs/components"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition-all shadow-xs"
          >
            <span>Explore 92+ Components</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
