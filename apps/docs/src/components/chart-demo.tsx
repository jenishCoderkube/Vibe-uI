'use client'

import * as React from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ComposedChart,
  ScatterChart,
  Scatter,
  ZAxis,
  CartesianGrid,
  XAxis,
  YAxis,
  Sector,
  Label,
  LabelList,
  Rectangle,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from 'vibe-ui'

// Intersection Observer reveal wrapper to trigger Recharts draw animations on scroll
function AnimateOnReveal({ children }: { children: React.ReactNode }) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full min-h-[300px]">
      {isIntersecting ? (
        children
      ) : (
        <div className="h-[300px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 border border-border rounded-xl animate-pulse" />
      )}
    </div>
  )
}

// 1. Area Chart
export function AreaChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.15}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.3}
            stroke="var(--chart-1)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 2. Stacked Area Chart
export function StackedAreaChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            dataKey="mobile"
            type="monotone"
            fill="var(--color-mobile)"
            fillOpacity={0.15}
            stroke="var(--color-mobile)"
            stackId="1"
          />
          <Area
            dataKey="desktop"
            type="monotone"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--chart-1)"
            stackId="1"
          />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 3. Simple Area Chart
export function SimpleAreaChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            dataKey="desktop"
            type="monotone"
            fill="var(--color-mobile)"
            fillOpacity={0.15}
            stroke="var(--chart-1)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 4. Interactive Area Chart
export function InteractiveAreaChartDemo() {
  const [activeTab, setActiveTab] = React.useState<'desktop' | 'mobile'>(
    'desktop',
  )
  const chartConfig = {
    desktop: {
      label: 'Desktop traffic',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile traffic',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { date: '2026-07-01', desktop: 222, mobile: 150 },
    { date: '2026-07-02', desktop: 345, mobile: 120 },
    { date: '2026-07-03', desktop: 230, mobile: 290 },
    { date: '2026-07-04', desktop: 180, mobile: 320 },
    { date: '2026-07-05', desktop: 390, mobile: 180 },
    { date: '2026-07-06', desktop: 420, mobile: 250 },
  ]

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    [],
  )

  return (
    <AnimateOnReveal>
      <div className="flex flex-col w-full bg-zinc-50/50 dark:bg-zinc-950/40 border border-border rounded-xl p-4 gap-4">
        <div className="flex justify-between items-center border-b border-border pb-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Interactive Audience
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Total sessions breakdown
            </p>
          </div>
          <div className="flex gap-2">
            {(['desktop', 'mobile'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  activeTab === key
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {chartConfig[key].label} ({total[key].toLocaleString()})
              </button>
            ))}
          </div>
        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart data={chartData} margin={{ left: 0, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={40}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey={activeTab}
              type="monotone"
              fill="var(--color-mobile)"
              fillOpacity={0.15}
              stroke="var(--chart-1)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </AnimateOnReveal>
  )
}

// 5. Bar Chart
export function BarChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--chart-1)" radius={4} />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 6. Horizontal Bar Chart
export function HorizontalBarChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} layout="vertical" margin={{ left: 10 }}>
          <CartesianGrid horizontal={false} />
          <XAxis type="number" tickLine={false} axisLine={false} />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--chart-1)" radius={4} />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 7. Stacked Bar Chart
export function StackedBarChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--chart-1)" stackId="a" />
          <Bar
            dataKey="mobile"
            fill="var(--chart-2)"
            stackId="a"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 8. Horizontal Stacked Bar Chart
export function HorizontalStackedBarChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickLine={false} axisLine={false} />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--chart-1)" stackId="a" />
          <Bar
            dataKey="mobile"
            fill="var(--chart-2)"
            stackId="a"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 9. Interactive Bar Chart
export function InteractiveBarChartDemo() {
  const [activeTab, setActiveTab] = React.useState<'desktop' | 'mobile'>(
    'desktop',
  )
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { date: '2026-07-01', desktop: 222, mobile: 150 },
    { date: '2026-07-02', desktop: 345, mobile: 120 },
    { date: '2026-07-03', desktop: 230, mobile: 290 },
    { date: '2026-07-04', desktop: 180, mobile: 320 },
    { date: '2026-07-05', desktop: 390, mobile: 180 },
    { date: '2026-07-06', desktop: 420, mobile: 250 },
  ]

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    [],
  )

  return (
    <AnimateOnReveal>
      <div className="flex flex-col w-full bg-zinc-50/50 dark:bg-zinc-950/40 border border-border rounded-xl p-4 gap-4">
        <div className="flex justify-between items-center border-b border-border pb-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Interactive Performance
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Select parameter to view statistics
            </p>
          </div>
          <div className="flex gap-2">
            {(['desktop', 'mobile'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  activeTab === key
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {chartConfig[key].label} ({total[key].toLocaleString()})
              </button>
            ))}
          </div>
        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey={activeTab}
              fill={
                activeTab === 'desktop' ? 'var(--chart-1)' : 'var(--chart-2)'
              }
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </AnimateOnReveal>
  )
}

// 10. Linear Bar Chart
export function LinearBarChartDemo() {
  const chartConfig = {
    value: {
      label: 'Progress',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { name: 'Task Alpha', value: 85 },
    { name: 'Task Beta', value: 62 },
    { name: 'Task Gamma', value: 95 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
            domain={[0, 100]}
          />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--chart-1)" radius={4} />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 11. Biaxial Bar Chart
export function BiaxialBarChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop clicks',
      color: 'var(--chart-1)',
    },
    revenue: {
      label: 'Revenue ($)',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, revenue: 1800 },
    { month: 'February', desktop: 305, revenue: 3200 },
    { month: 'March', desktop: 237, revenue: 2500 },
    { month: 'April', desktop: 73, revenue: 900 },
    { month: 'May', desktop: 209, revenue: 2100 },
    { month: 'June', desktop: 214, revenue: 2200 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} margin={{ left: 0, right: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="var(--chart-1)"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={40}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="var(--chart-2)"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={40}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            yAxisId="left"
            dataKey="desktop"
            fill="var(--chart-1)"
            radius={4}
          />
          <Bar
            yAxisId="right"
            dataKey="revenue"
            fill="var(--chart-2)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 12. Bar Chart with Custom Label
export function BarChartCustomLabelDemo() {
  const chartConfig = {
    desktop: {
      label: 'Signups',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'Jan', desktop: 186 },
    { month: 'Feb', desktop: 305 },
    { month: 'Mar', desktop: 237 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--chart-1)" radius={4}>
            <g>
              {chartData.map((entry, index) => (
                <text
                  key={index}
                  x={150 + index * 180}
                  y={100}
                  fill="#fff"
                  textAnchor="middle"
                  className="text-xs font-mono font-bold"
                >
                  {entry.desktop}
                </text>
              ))}
            </g>
          </Bar>
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 13. Line Chart
export function LineChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: -10, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 14. Interactive Line Chart
export function InteractiveLineChartDemo() {
  const [activeTab, setActiveTab] = React.useState<'desktop' | 'mobile'>(
    'desktop',
  )
  const chartConfig = {
    desktop: {
      label: 'Desktop Traffic',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile Traffic',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { date: '2026-07-01', desktop: 222, mobile: 150 },
    { date: '2026-07-02', desktop: 345, mobile: 120 },
    { date: '2026-07-03', desktop: 230, mobile: 290 },
    { date: '2026-07-04', desktop: 180, mobile: 320 },
    { date: '2026-07-05', desktop: 390, mobile: 180 },
    { date: '2026-07-06', desktop: 420, mobile: 250 },
  ]

  return (
    <AnimateOnReveal>
      <div className="flex flex-col w-full bg-zinc-50/50 dark:bg-zinc-950/40 border border-border rounded-xl p-4 gap-4">
        <div className="flex justify-between items-center border-b border-border pb-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Interactive Line Performance
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Total sessions details
            </p>
          </div>
          <div className="flex gap-2">
            {(['desktop', 'mobile'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  activeTab === key
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {chartConfig[key].label}
              </button>
            ))}
          </div>
        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <LineChart data={chartData} margin={{ left: 0, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={40}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={activeTab}
              type="monotone"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </AnimateOnReveal>
  )
}

// 15. Multi-Line Chart
export function MultiLineChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 16. Step Line Chart
export function StepLineChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Value progression',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 100 },
    { month: 'February', desktop: 100 },
    { month: 'March', desktop: 250 },
    { month: 'April', desktop: 250 },
    { month: 'May', desktop: 180 },
    { month: 'June', desktop: 300 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            type="step"
            dataKey="desktop"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 17. Biaxial Line Chart
export function BiaxialLineChartDemo() {
  const chartConfig = {
    temp: {
      label: 'Temperature (°C)',
      color: 'var(--chart-1)',
    },
    humidity: {
      label: 'Humidity (%)',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { hour: '00:00', temp: 15, humidity: 80 },
    { hour: '04:00', temp: 12, humidity: 85 },
    { hour: '08:00', temp: 18, humidity: 70 },
    { hour: '12:00', temp: 25, humidity: 55 },
    { hour: '16:00', temp: 22, humidity: 60 },
    { hour: '20:00', temp: 17, humidity: 75 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="hour" tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="var(--chart-1)"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="var(--chart-2)"
            tickLine={false}
            axisLine={false}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="temp"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="humidity"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 18. Dashed Line Chart
export function DashedLineChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop Projections',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 120 },
    { month: 'February', desktop: 180 },
    { month: 'March', desktop: 240 },
    { month: 'April', desktop: 220 },
    { month: 'May', desktop: 310 },
    { month: 'June', desktop: 400 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="desktop"
            stroke="var(--chart-1)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 19. Custom Dot Line Chart
export function CustomDotLineChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Signups',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 100 },
    { month: 'February', desktop: 140 },
    { month: 'March', desktop: 120 },
    { month: 'April', desktop: 260 },
    { month: 'May', desktop: 180 },
    { month: 'June', desktop: 320 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="desktop"
            stroke="var(--chart-1)"
            strokeWidth={2.5}
            dot={{
              r: 6,
              fill: 'var(--chart-1)',
              stroke: '#18181b',
              strokeWidth: 2,
            }}
            activeDot={{ r: 8, fill: 'var(--chart-1)' }}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 20. Pie Chart (Donut Chart)
export function PieChartDemo() {
  const chartConfig = {
    chrome: {
      label: 'Chrome',
      color: '#a855f7',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
    firefox: {
      label: 'Firefox',
      color: '#e9d5ff',
    },
    edge: {
      label: 'Edge',
      color: '#f3e8ff',
    },
  }

  const chartData = [
    { browser: 'chrome', visitors: 275, fill: '#a855f7' },
    { browser: 'safari', visitors: 200, fill: 'var(--chart-2)' },
    { browser: 'firefox', visitors: 187, fill: '#e9d5ff' },
    { browser: 'edge', visitors: 173, fill: '#f3e8ff' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey="browser" />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            outerRadius={80}
            strokeWidth={2}
            stroke="#18181b"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 21. Pie Chart with Custom Labels
export function PieChartCustomLabelDemo() {
  const chartConfig = {
    chrome: {
      label: 'Chrome',
      color: '#a855f7',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
    firefox: {
      label: 'Firefox',
      color: '#e9d5ff',
    },
  }

  const chartData = [
    { browser: 'chrome', visitors: 275, fill: '#a855f7' },
    { browser: 'safari', visitors: 200, fill: 'var(--chart-2)' },
    { browser: 'firefox', visitors: 187, fill: '#e9d5ff' },
  ]

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const RADIAN = Math.PI / 180
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[10px] font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey="browser" />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            strokeWidth={2}
            stroke="#18181b"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 22. Pie Chart with Custom Legend
export function PieChartCustomLegendDemo() {
  const chartConfig = {
    active: {
      label: 'Active Users',
      color: 'var(--chart-1)',
    },
    idle: {
      label: 'Idle Users',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { name: 'active', value: 680, fill: 'var(--chart-1)' },
    { name: 'idle', value: 320, fill: 'var(--chart-2)' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey="name" />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={80}
            strokeWidth={2}
            stroke="#18181b"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 23. Pie Chart with Custom Active Shape
export function PieChartCustomActiveShapeDemo() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const chartConfig = {
    chrome: {
      label: 'Chrome',
      color: '#a855f7',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { browser: 'chrome', visitors: 275, fill: '#a855f7' },
    { browser: 'safari', visitors: 200, fill: 'var(--chart-2)' },
  ]

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      value,
    } = props
    const sin = Math.sin(-RADIAN * midAngle)
    const cos = Math.cos(-RADIAN * midAngle)
    const sx = cx + (outerRadius + 10) * cos
    const sy = cy + (outerRadius + 10) * sin
    const mx = cx + (outerRadius + 30) * cos
    const my = cy + (outerRadius + 30) * sin
    const ex = mx + (cos >= 0 ? 1 : -1) * 22
    const ey = my
    const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill="#fff"
          className="text-xs font-bold"
        >
          {payload.browser}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#a855f7"
          className="text-[10px] font-bold"
        >
          {`Visitors: ${value}`}
        </text>
      </g>
    )
  }

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="visitors"
            onMouseEnter={(_, index) => setActiveIndex(index)}
          />
        </PieChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 24. Radar Chart
export function RadarChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 273 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadarChart data={chartData}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="month" stroke="#888888" fontSize={11} />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 350]}
            stroke="#888888"
            fontSize={10}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Desktop"
            dataKey="desktop"
            stroke="var(--chart-1)"
            fill="var(--chart-2)"
            fillOpacity={0.6}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        </RadarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 25. Interactive Radar Chart
export function InteractiveRadarChartDemo() {
  const [activeTab, setActiveTab] = React.useState<'desktop' | 'mobile'>(
    'desktop',
  )

  const chartConfig = {
    desktop: {
      label: 'Desktop Focus',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile Focus',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 110 },
    { month: 'February', desktop: 305, mobile: 240 },
    { month: 'March', desktop: 237, mobile: 180 },
    { month: 'April', desktop: 273, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 150 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <div className="flex flex-col w-full bg-zinc-50/50 dark:bg-zinc-950/40 border border-border rounded-xl p-4 gap-4">
        <div className="flex justify-between items-center border-b border-border pb-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Interactive Radar
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Parameter specific focus maps
            </p>
          </div>
          <div className="flex gap-2">
            {(['desktop', 'mobile'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  activeTab === key
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {key === 'desktop' ? 'Desktop' : 'Mobile'}
              </button>
            ))}
          </div>
        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <RadarChart data={chartData}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="month" stroke="#888888" fontSize={10} />
            <Radar
              name={activeTab === 'desktop' ? 'Desktop' : 'Mobile'}
              dataKey={activeTab}
              stroke="var(--chart-1)"
              fill="var(--chart-2)"
              fillOpacity={0.6}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          </RadarChart>
        </ChartContainer>
      </div>
    </AnimateOnReveal>
  )
}

// 26. Radial Chart - Simple
export function RadialChartSimpleDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: 'var(--chart-1)',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
    firefox: {
      label: 'Firefox',
      color: 'var(--chart-3)',
    },
    edge: {
      label: 'Edge',
      color: 'var(--chart-4)',
    },
    other: {
      label: 'Other',
      color: 'var(--chart-5)',
    },
  }

  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel nameKey="browser" />}
          />
          <RadialBar dataKey="visitors" background />
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 27. Radial Chart - Label
export function RadialChartLabelDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: 'var(--chart-1)',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
    firefox: {
      label: 'Firefox',
      color: 'var(--chart-3)',
    },
    edge: {
      label: 'Edge',
      color: 'var(--chart-4)',
    },
    other: {
      label: 'Other',
      color: 'var(--chart-5)',
    },
  }

  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart
          data={chartData}
          startAngle={-90}
          endAngle={380}
          innerRadius={30}
          outerRadius={110}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel nameKey="browser" />}
          />
          <RadialBar dataKey="visitors" background>
            <LabelList
              position="insideStart"
              dataKey="browser"
              className="fill-white capitalize mix-blend-luminosity"
              fontSize={11}
            />
          </RadialBar>
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 28. Radial Chart - Grid
export function RadialChartGridDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: 'var(--chart-1)',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
    firefox: {
      label: 'Firefox',
      color: 'var(--chart-3)',
    },
    edge: {
      label: 'Edge',
      color: 'var(--chart-4)',
    },
    other: {
      label: 'Other',
      color: 'var(--chart-5)',
    },
  }

  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel nameKey="browser" />}
          />
          <PolarGrid gridType="circle" />
          <RadialBar dataKey="visitors" />
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 29. Radial Chart - Text
export function RadialChartTextDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={250}
          outerRadius={90}
          innerRadius={80}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[90, 80]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {chartData[0].visitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 30. Radial Chart - Shape
export function RadialChartShapeDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { browser: 'safari', visitors: 1260, fill: 'var(--color-safari)' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart
          data={chartData}
          endAngle={100}
          innerRadius={65}
          outerRadius={95}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar dataKey="visitors" background />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {chartData[0].visitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 31. Radial Chart - Stacked
export function RadialChartStackedDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [{ month: 'january', mobile: 570, desktop: 1260 }]
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart
          data={chartData}
          endAngle={180}
          innerRadius={80}
          outerRadius={110}
        >
          <RadialBar
            dataKey="mobile"
            fill="var(--color-mobile)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="desktop"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-desktop)"
            className="stroke-transparent stroke-2"
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 30. Composed Chart (Line + Bar + Area)
export function ComposedChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
    average: {
      label: 'Average',
      color: '#f3e8ff',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80, average: 133 },
    { month: 'February', desktop: 305, mobile: 200, average: 252 },
    { month: 'March', desktop: 237, mobile: 120, average: 178 },
    { month: 'April', desktop: 73, mobile: 190, average: 131 },
    { month: 'May', desktop: 209, mobile: 130, average: 169 },
    { month: 'June', desktop: 214, mobile: 140, average: 177 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ComposedChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area dataKey="mobile" fill="rgba(168,85,247,0.1)" stroke="none" />
          <Bar
            dataKey="desktop"
            fill="var(--chart-1)"
            radius={4}
            barSize={20}
          />
          <Line
            dataKey="average"
            type="monotone"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 31. Stacked Composed Chart
export function StackedComposedChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
    average: {
      label: 'Average',
      color: '#f3e8ff',
    },
  }

  const chartData = [
    { month: 'January', desktop: 180, mobile: 60, average: 240 },
    { month: 'February', desktop: 220, mobile: 80, average: 300 },
    { month: 'March', desktop: 190, mobile: 70, average: 260 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ComposedChart data={chartData} margin={{ left: 0, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey="desktop"
            fill="var(--chart-1)"
            stackId="a"
            barSize={24}
          />
          <Bar
            dataKey="mobile"
            fill="var(--chart-2)"
            stackId="a"
            radius={[4, 4, 0, 0]}
          />
          <Line
            dataKey="average"
            type="monotone"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 32. Composed Line Scatter
export function ComposedLineScatterChartDemo() {
  const chartConfig = {
    signups: {
      label: 'Signups',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { x: 10, y: 30 },
    { x: 30, y: 70 },
    { x: 50, y: 150 },
    { x: 70, y: 220 },
    { x: 90, y: 310 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" tickLine={false} axisLine={false} />
          <YAxis type="number" dataKey="y" tickLine={false} axisLine={false} />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<ChartTooltipContent />}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={false}
          />
          <Scatter dataKey="y" fill="var(--chart-1)" />
        </ComposedChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 33. Biaxial Composed Chart
export function BiaxialComposedChartDemo() {
  const chartConfig = {
    clicks: {
      label: 'Clicks',
      color: 'var(--chart-1)',
    },
    conversion: {
      label: 'Conversion Ratio (%)',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'Jan', clicks: 400, conversion: 2.4 },
    { month: 'Feb', clicks: 550, conversion: 3.1 },
    { month: 'Mar', clicks: 700, conversion: 2.8 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ComposedChart data={chartData} margin={{ left: 0, right: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="var(--chart-1)"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={40}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="var(--chart-2)"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={40}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            yAxisId="left"
            dataKey="clicks"
            fill="var(--chart-1)"
            radius={4}
            barSize={20}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="conversion"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 34. Scatter Chart (Coordinate Plotting)
export function ScatterChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="x"
            name="stature"
            unit="cm"
            stroke="#888888"
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            stroke="#888888"
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <ZAxis
            type="number"
            dataKey="z"
            range={[60, 400]}
            name="score"
            unit="pts"
          />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<ChartTooltipContent />}
          />
          <Scatter name="A school" data={chartData} fill="var(--chart-1)" />
        </ScatterChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 35. Area Chart - Gradient
export function AreaChartGradientDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="mobile"
            type="natural"
            fill="url(#fillMobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="url(#fillDesktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 36. Area Chart - Legend
export function AreaChartLegendDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 37. Bar Chart - Mixed
export function BarChartMixedDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: 'var(--chart-1)',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
    firefox: {
      label: 'Firefox',
      color: 'var(--chart-3)',
    },
    edge: {
      label: 'Edge',
      color: 'var(--chart-4)',
    },
    other: {
      label: 'Other',
      color: 'var(--chart-5)',
    },
  }

  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} layout="vertical" margin={{ left: 0 }}>
          <YAxis
            dataKey="browser"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label || value
            }
          />
          <XAxis dataKey="visitors" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="visitors" radius={5} />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 38. Bar Chart - Negative
export function BarChartNegativeDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
  }

  const chartData = [
    { month: 'January', visitors: 186 },
    { month: 'February', visitors: 205 },
    { month: 'March', visitors: -207 },
    { month: 'April', visitors: 173 },
    { month: 'May', visitors: -209 },
    { month: 'June', visitors: 214 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel hideIndicator />}
          />
          <Bar dataKey="visitors">
            <LabelList position="top" dataKey="month" fillOpacity={1} />
            {chartData.map((item) => (
              <Cell
                key={item.month}
                fill={item.visitors > 0 ? 'var(--chart-1)' : 'var(--chart-2)'}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 39. Line Chart - Dots
export function LineChartDotsDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={{ fill: 'var(--color-desktop)' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 40. Area Chart - Linear
export function AreaChartLinearDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" hideLabel />}
          />
          <Area
            dataKey="desktop"
            type="linear"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 41. Area Chart - Step
export function AreaChartStepDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            dataKey="desktop"
            type="step"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 42. Area Chart - Stacked Expand
export function AreaChartStackedExpandDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
    other: {
      label: 'Other',
      color: 'var(--chart-3)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186, mobile: 80, other: 45 },
    { month: 'February', desktop: 305, mobile: 200, other: 100 },
    { month: 'March', desktop: 237, mobile: 120, other: 150 },
    { month: 'April', desktop: 73, mobile: 190, other: 50 },
    { month: 'May', desktop: 209, mobile: 130, other: 100 },
    { month: 'June', desktop: 214, mobile: 140, other: 160 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <AreaChart
          data={chartData}
          margin={{ left: 12, right: 12 }}
          stackOffset="expand"
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="other"
            type="natural"
            fill="var(--color-other)"
            fillOpacity={0.1}
            stroke="var(--color-other)"
            stackId="a"
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 43. Bar Chart - Active
export function BarChartActiveDemo() {
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: 'var(--chart-1)',
    },
    safari: {
      label: 'Safari',
      color: 'var(--chart-2)',
    },
    firefox: {
      label: 'Firefox',
      color: 'var(--chart-3)',
    },
    edge: {
      label: 'Edge',
      color: 'var(--chart-4)',
    },
    other: {
      label: 'Other',
      color: 'var(--chart-5)',
    },
  }
  const chartData = [
    { browser: 'chrome', visitors: 187, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 275, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
  ]
  const ACTIVE_INDEX = 2
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="browser"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label || value
            }
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="visitors"
            strokeWidth={2}
            radius={8}
            shape={(props: any) => {
              const { index, ...restProps } = props
              return index === ACTIVE_INDEX ? (
                <Rectangle
                  {...restProps}
                  fillOpacity={0.8}
                  stroke={props.payload.fill}
                  strokeDasharray={4}
                  strokeDashoffset={4}
                />
              ) : (
                <Rectangle {...restProps} />
              )
            }}
          />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 44. Bar Chart - Multiple
export function BarChartMultipleDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 45. Bar Chart - Label
export function BarChartLabelDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <BarChart data={chartData} margin={{ top: 20 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 46. Line Chart - Linear
export function LineChartLinearDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="linear"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 47. Line Chart - Step
export function LineChartStepDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="step"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 48. Line Chart - Multiple
export function LineChartMultipleDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 49. Pie Chart - Simple
export function PieChartSimpleDemo() {
  const chartConfig = {
    visitors: { label: 'Visitors' },
    chrome: { label: 'Chrome', color: 'var(--chart-1)' },
    safari: { label: 'Safari', color: 'var(--chart-2)' },
    firefox: { label: 'Firefox', color: 'var(--chart-3)' },
    edge: { label: 'Edge', color: 'var(--chart-4)' },
    other: { label: 'Other', color: 'var(--chart-5)' },
  }
  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey="visitors" nameKey="browser" />
        </PieChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 50. Pie Chart - Stacked
export function PieChartStackedDemo() {
  const chartConfig = {
    visitors: { label: 'Visitors' },
    desktop: { label: 'Desktop', color: 'var(--chart-1)' },
    mobile: { label: 'Mobile', color: 'var(--chart-2)' },
  }
  const chartData1 = [
    { name: 'Jan-March', visitors: 400, fill: 'var(--color-desktop)' },
    { name: 'Apr-June', visitors: 300, fill: 'var(--color-mobile)' },
  ]
  const chartData2 = [
    { name: 'Chrome', visitors: 150, fill: 'var(--chart-3)' },
    { name: 'Safari', visitors: 120, fill: 'var(--chart-4)' },
    { name: 'Firefox', visitors: 80, fill: 'var(--chart-5)' },
    { name: 'Edge', visitors: 50, fill: 'var(--chart-1)' },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Pie
            data={chartData1}
            dataKey="visitors"
            nameKey="name"
            outerRadius={50}
          />
          <Pie
            data={chartData2}
            dataKey="visitors"
            nameKey="name"
            innerRadius={60}
            outerRadius={80}
          />
        </PieChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 51. Pie Chart - Donut Active
export function PieChartDonutActiveDemo() {
  const chartConfig = {
    visitors: { label: 'Visitors' },
    chrome: { label: 'Chrome', color: 'var(--chart-1)' },
    safari: { label: 'Safari', color: 'var(--chart-2)' },
    firefox: { label: 'Firefox', color: 'var(--chart-3)' },
    edge: { label: 'Edge', color: 'var(--chart-4)' },
    other: { label: 'Other', color: 'var(--chart-5)' },
  }
  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            outerRadius={80}
            strokeWidth={5}
            activeIndex={0}
            activeShape={({
              cx,
              cy,
              innerRadius,
              outerRadius,
              startAngle,
              endAngle,
              fill,
            }: any) => (
              <g>
                <Sector
                  cx={cx}
                  cy={cy}
                  innerRadius={innerRadius - 4}
                  outerRadius={outerRadius + 4}
                  startAngle={startAngle}
                  endAngle={endAngle}
                  fill={fill}
                />
              </g>
            )}
          />
        </PieChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 52. Radar Chart - Dots
export function RadarChartDotsDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 273 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.6}
            dot={{ r: 4, fillOpacity: 1 }}
          />
        </RadarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 53. Radar Chart - Lines Only
export function RadarChartLinesOnlyDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186, mobile: 160 },
    { month: 'February', desktop: 305, mobile: 240 },
    { month: 'March', desktop: 237, mobile: 180 },
    { month: 'April', desktop: 273, mobile: 210 },
    { month: 'May', desktop: 209, mobile: 150 },
    { month: 'June', desktop: 214, mobile: 190 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            stroke="var(--color-desktop)"
            fill="none"
            strokeWidth={2}
          />
          <Radar
            dataKey="mobile"
            stroke="var(--color-mobile)"
            fill="none"
            strokeWidth={2}
          />
        </RadarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 54. Radar Chart - Legend
export function RadarChartLegendDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 273, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.5}
            stroke="var(--color-desktop)"
          />
          <Radar
            dataKey="mobile"
            fill="var(--color-mobile)"
            fillOpacity={0.5}
            stroke="var(--color-mobile)"
          />
          <ChartLegend content={<ChartLegendContent />} />
        </RadarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 55. Radial Chart - Angle
export function RadialChartAngleDemo() {
  const chartConfig = {
    visitors: { label: 'Visitors' },
    safari: { label: 'Safari', color: 'var(--chart-2)' },
  }
  const chartData = [
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart
          data={chartData}
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={110}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 56. Radial Chart - Icon
export function RadialChartIconDemo() {
  const chartConfig = {
    chrome: { label: 'Chrome', color: 'var(--chart-1)' },
    safari: { label: 'Safari', color: 'var(--chart-2)' },
    firefox: { label: 'Firefox', color: 'var(--chart-3)' },
  }
  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <RadialBar dataKey="visitors" background cornerRadius={5} />
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 57. Radial Chart - Legend
export function RadialChartLegendDemo() {
  const chartConfig = {
    chrome: { label: 'Chrome', color: 'var(--chart-1)' },
    safari: { label: 'Safari', color: 'var(--chart-2)' },
    firefox: { label: 'Firefox', color: 'var(--chart-3)' },
  }
  const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <RadialBarChart data={chartData} innerRadius={40} outerRadius={90}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <RadialBar dataKey="visitors" background cornerRadius={5} />
          <ChartLegend content={<ChartLegendContent nameKey="browser" />} />
        </RadialBarChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 58. Composed Chart - Interactive
export function ComposedChartInteractiveDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }
  const chartData = [
    { month: 'Jan', desktop: 186, mobile: 80 },
    { month: 'Feb', desktop: 305, mobile: 200 },
    { month: 'Mar', desktop: 237, mobile: 120 },
    { month: 'Apr', desktop: 73, mobile: 190 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ComposedChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={4}
            barSize={20}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2.5}
            dot={true}
          />
        </ComposedChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 59. Composed Chart - Horizontal
export function ComposedChartHorizontalDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    average: {
      label: 'Average',
      color: 'var(--chart-2)',
    },
  }
  const chartData = [
    { month: 'January', desktop: 186, average: 150 },
    { month: 'February', desktop: 305, average: 250 },
    { month: 'March', desktop: 237, average: 210 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ComposedChart data={chartData} layout="vertical" margin={{ left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickLine={false} axisLine={false} />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            axisLine={false}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={4}
            barSize={16}
          />
          <Line
            dataKey="average"
            type="monotone"
            stroke="var(--color-average)"
            strokeWidth={2}
            dot={true}
          />
        </ComposedChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 60. Composed Chart - Custom Label
export function ComposedChartCustomLabelDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }
  const chartData = [
    { month: 'Jan', desktop: 100, mobile: 50 },
    { month: 'Feb', desktop: 150, mobile: 90 },
    { month: 'Mar', desktop: 120, mobile: 80 },
  ]
  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ComposedChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={4}
            barSize={20}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={true}
          >
            <LabelList
              dataKey="mobile"
              position="top"
              fontSize={11}
              className="fill-foreground font-bold"
            />
          </Line>
        </ComposedChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 61. Scatter Chart - Simple
export function ScatterChartSimpleDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 80, y: 250 },
    { x: 95, y: 320 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ScatterChart margin={{ left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" dataKey="x" tickLine={false} axisLine={false} />
          <YAxis
            type="number"
            dataKey="y"
            tickLine={false}
            axisLine={false}
            width={40}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<ChartTooltipContent />}
          />
          <Scatter
            name="Desktop"
            data={chartData}
            fill="var(--color-desktop)"
          />
        </ScatterChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 62. Scatter Chart - Multiple Series
export function ScatterChartMultipleDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const desktopData = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 90, y: 320 },
  ]

  const mobileData = [
    { x: 15, y: 80 },
    { x: 35, y: 150 },
    { x: 45, y: 220 },
    { x: 75, y: 380 },
    { x: 85, y: 200 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ScatterChart margin={{ left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" dataKey="x" tickLine={false} axisLine={false} />
          <YAxis
            type="number"
            dataKey="y"
            tickLine={false}
            axisLine={false}
            width={40}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<ChartTooltipContent />}
          />
          <Scatter
            name="Desktop"
            data={desktopData}
            fill="var(--color-desktop)"
          />
          <Scatter name="Mobile" data={mobileData} fill="var(--color-mobile)" />
          <ChartLegend content={<ChartLegendContent />} />
        </ScatterChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 63. Scatter Chart - Label List
export function ScatterChartLabelDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { x: 20, y: 100, label: 'A' },
    { x: 40, y: 300, label: 'B' },
    { x: 60, y: 200, label: 'C' },
    { x: 80, y: 400, label: 'D' },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ScatterChart margin={{ left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" dataKey="x" tickLine={false} axisLine={false} />
          <YAxis
            type="number"
            dataKey="y"
            tickLine={false}
            axisLine={false}
            width={40}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<ChartTooltipContent />}
          />
          <Scatter name="Desktop" data={chartData} fill="var(--color-desktop)">
            <LabelList
              dataKey="label"
              position="top"
              fontSize={11}
              className="fill-foreground font-bold"
            />
          </Scatter>
        </ScatterChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 64. Bubble Chart (Scatter with ZAxis)
export function BubbleChartDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  }

  const desktopData = [
    { x: 10, y: 80, z: 200 },
    { x: 30, y: 160, z: 600 },
    { x: 50, y: 240, z: 800 },
    { x: 70, y: 120, z: 300 },
    { x: 90, y: 360, z: 900 },
  ]

  const mobileData = [
    { x: 20, y: 120, z: 300 },
    { x: 40, y: 200, z: 500 },
    { x: 60, y: 80, z: 200 },
    { x: 80, y: 300, z: 700 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ScatterChart margin={{ left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" dataKey="x" tickLine={false} axisLine={false} />
          <YAxis
            type="number"
            dataKey="y"
            tickLine={false}
            axisLine={false}
            width={40}
            tickMargin={8}
          />
          <ZAxis type="number" dataKey="z" range={[60, 400]} />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<ChartTooltipContent />}
          />
          <Scatter
            name="Desktop"
            data={desktopData}
            fill="var(--color-desktop)"
          />
          <Scatter name="Mobile" data={mobileData} fill="var(--color-mobile)" />
          <ChartLegend content={<ChartLegendContent />} />
        </ScatterChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}

// 65. Scatter Chart - Joint Line
export function ScatterChartTrendLineDemo() {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
  }

  const chartData = [
    { x: 10, y: 50 },
    { x: 30, y: 120 },
    { x: 50, y: 180 },
    { x: 70, y: 290 },
    { x: 90, y: 350 },
  ]

  return (
    <AnimateOnReveal>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 border border-border rounded-xl"
      >
        <ScatterChart margin={{ left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" dataKey="x" tickLine={false} axisLine={false} />
          <YAxis
            type="number"
            dataKey="y"
            tickLine={false}
            axisLine={false}
            width={40}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<ChartTooltipContent />}
          />
          <Scatter
            name="Desktop"
            data={chartData}
            fill="var(--color-desktop)"
            line
            lineJointType="monotone"
          />
        </ScatterChart>
      </ChartContainer>
    </AnimateOnReveal>
  )
}
