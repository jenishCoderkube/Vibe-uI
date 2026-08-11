'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Sparkles, BarChart2, ArrowRight, ExternalLink } from 'lucide-react'
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
  ScatterChartSimpleDemo,
  ScatterChartMultipleDemo,
  ScatterChartLabelDemo,
  BubbleChartDemo,
  ScatterChartTrendLineDemo,
  ScatterChartDemo,
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
} from '../../components/chart-demo'

type ChartCategory =
  'area' | 'bar' | 'line' | 'pie' | 'radar' | 'radial' | 'composed' | 'scatter'

interface ChartItem {
  title: string
  description: string
  anchor: string
  component: React.ReactNode
}

export default function ChartsPage() {
  const [activeTab, setActiveTab] = React.useState<ChartCategory>('area')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const categories: { key: ChartCategory; label: string }[] = [
    { key: 'area', label: 'Area Charts' },
    { key: 'bar', label: 'Bar Charts' },
    { key: 'line', label: 'Line Charts' },
    { key: 'pie', label: 'Pie Charts' },
    { key: 'radar', label: 'Radar Charts' },
    { key: 'radial', label: 'Radial Charts' },
    { key: 'composed', label: 'Composed Charts' },
    { key: 'scatter', label: 'Scatter Charts' },
  ]

  const chartData: Record<ChartCategory, ChartItem[]> = {
    area: [
      {
        title: 'Area Chart',
        description:
          'Ideal for displaying continuous variables, volumes, and trends over time.',
        anchor: 'area-chart',
        component: <AreaChartDemo />,
      },
      {
        title: 'Stacked Area Chart',
        description:
          'Displays multiple datasets stacked on top of each other to show cumulative totals.',
        anchor: 'stacked-area-chart',
        component: <StackedAreaChartDemo />,
      },
      {
        title: 'Simple Area Chart',
        description:
          'A clean, single-series area chart showcasing simple trend visualizations.',
        anchor: 'simple-area-chart',
        component: <SimpleAreaChartDemo />,
      },
      {
        title: 'Interactive Area Chart',
        description:
          'Advanced area chart featuring dynamic tab controls to toggle dataset filters.',
        anchor: 'interactive-area-chart',
        component: <InteractiveAreaChartDemo />,
      },
      {
        title: 'Area Chart Gradient',
        description:
          'An area chart featuring smooth gradient fills representing data ranges.',
        anchor: 'area-chart-gradient',
        component: <AreaChartGradientDemo />,
      },
      {
        title: 'Area Chart Legend',
        description:
          'Area chart displaying detailed categorised legend labels inside the canvas.',
        anchor: 'area-chart-legend',
        component: <AreaChartLegendDemo />,
      },
      {
        title: 'Area Chart Linear',
        description:
          'An area chart using linear interpolation to connect coordinates.',
        anchor: 'area-chart-linear',
        component: <AreaChartLinearDemo />,
      },
      {
        title: 'Area Chart Step',
        description:
          'An area chart using step line segments to connect coordinates.',
        anchor: 'area-chart-step',
        component: <AreaChartStepDemo />,
      },
      {
        title: 'Area Chart Stacked Expanded',
        description:
          'Stacked area chart showing relative percentage contribution of each dataset.',
        anchor: 'area-chart-stacked-expanded',
        component: <AreaChartStackedExpandDemo />,
      },
    ],
    bar: [
      {
        title: 'Bar Chart',
        description:
          'Standard vertical bar chart representing categorical data value differences.',
        anchor: 'bar-chart',
        component: <BarChartDemo />,
      },
      {
        title: 'Horizontal Bar Chart',
        description:
          'Horizontal orientation for categorised data with long label descriptions.',
        anchor: 'horizontal-bar-chart',
        component: <HorizontalBarChartDemo />,
      },
      {
        title: 'Stacked Bar Chart',
        description:
          'Concentric segment stacked bar chart showing sub-category contributions.',
        anchor: 'stacked-bar-chart',
        component: <StackedBarChartDemo />,
      },
      {
        title: 'Horizontal Stacked Bar Chart',
        description:
          'Horizontal bars containing stacked categorised sub-items.',
        anchor: 'horizontal-stacked-bar-chart',
        component: <HorizontalStackedBarChartDemo />,
      },
      {
        title: 'Interactive Bar Chart',
        description:
          'Interactive multi-series bar chart toggling datasets via card header dropdown lists.',
        anchor: 'interactive-bar-chart',
        component: <InteractiveBarChartDemo />,
      },
      {
        title: 'Linear Bar Chart',
        description: 'A simplified minimalist single-variable bar chart.',
        anchor: 'linear-bar-chart',
        component: <LinearBarChartDemo />,
      },
      {
        title: 'Biaxial Bar Chart',
        description:
          'Dual-axis bar chart displaying two datasets with completely different scale units.',
        anchor: 'biaxial-bar-chart',
        component: <BiaxialBarChartDemo />,
      },
      {
        title: 'Bar Chart with Custom Label',
        description:
          'Bar chart with text overlay labels rendered inside the rectangles.',
        anchor: 'bar-chart-with-custom-label',
        component: <BarChartCustomLabelDemo />,
      },
      {
        title: 'Bar Chart Mixed',
        description:
          'Mixed categorised horizontal bar chart representing distinct datasets.',
        anchor: 'bar-chart-mixed',
        component: <BarChartMixedDemo />,
      },
      {
        title: 'Bar Chart Negative',
        description:
          'Bar chart layout plotting both positive growth and negative deficit value segments.',
        anchor: 'bar-chart-negative',
        component: <BarChartNegativeDemo />,
      },
      {
        title: 'Bar Chart Active',
        description: 'A bar chart with custom active indices highlighted.',
        anchor: 'bar-chart-active',
        component: <BarChartActiveDemo />,
      },
      {
        title: 'Bar Chart Multiple',
        description: 'A bar chart mapping multiple data series side-by-side.',
        anchor: 'bar-chart-multiple',
        component: <BarChartMultipleDemo />,
      },
      {
        title: 'Bar Chart Label',
        description:
          'Bar chart rendering text label lists explicitly on top of columns.',
        anchor: 'bar-chart-label',
        component: <BarChartLabelDemo />,
      },
    ],
    line: [
      {
        title: 'Line Chart',
        description:
          'A clean single-series line chart representing values over time.',
        anchor: 'line-chart',
        component: <LineChartDemo />,
      },
      {
        title: 'Interactive Line Chart',
        description:
          'Interactive line chart displaying metrics customizable via control buttons.',
        anchor: 'interactive-line-chart',
        component: <InteractiveLineChartDemo />,
      },
      {
        title: 'Multi-Line Chart',
        description:
          'Multiple lines plotted together to compare trends across categories.',
        anchor: 'multi-line-chart',
        component: <MultiLineChartDemo />,
      },
      {
        title: 'Step Line Chart',
        description:
          'Plotted line utilizing step segments to connect coordinates instead of curves.',
        anchor: 'step-line-chart',
        component: <StepLineChartDemo />,
      },
      {
        title: 'Biaxial Line Chart',
        description:
          'Dual-axis line chart comparing two trend metrics on separate scales.',
        anchor: 'biaxial-line-chart',
        component: <BiaxialLineChartDemo />,
      },
      {
        title: 'Dashed Line Chart',
        description:
          'Custom styling utilizing dashed strokes to represent projection datasets.',
        anchor: 'dashed-line-chart',
        component: <DashedLineChartDemo />,
      },
      {
        title: 'Custom Dot Line Chart',
        description:
          'Customized data coordinates representing active data nodes as circles.',
        anchor: 'custom-dot-line-chart',
        component: <CustomDotLineChartDemo />,
      },
      {
        title: 'Line Chart Dots',
        description:
          'Line chart featuring active coordinate circular bullet point markers.',
        anchor: 'line-chart-dots',
        component: <LineChartDotsDemo />,
      },
      {
        title: 'Line Chart Linear',
        description: 'Line chart utilizing linear interpolation curves.',
        anchor: 'line-chart-linear',
        component: <LineChartLinearDemo />,
      },
      {
        title: 'Line Chart Step',
        description: 'Line chart utilizing step transitions.',
        anchor: 'line-chart-step',
        component: <LineChartStepDemo />,
      },
      {
        title: 'Line Chart Multiple',
        description: 'Line chart displaying multiple lines side-by-side.',
        anchor: 'line-chart-multiple',
        component: <LineChartMultipleDemo />,
      },
    ],
    pie: [
      {
        title: 'Pie Chart (Donut Chart)',
        description:
          'Standard donut-style circular segment chart plotting composition ratios.',
        anchor: 'pie-chart-donut-chart',
        component: <PieChartDemo />,
      },
      {
        title: 'Pie Chart with Custom Labels',
        description:
          'Pie chart showing responsive percentage pointers overlaying the circular graph.',
        anchor: 'pie-chart-with-custom-labels',
        component: <PieChartCustomLabelDemo />,
      },
      {
        title: 'Pie Chart with Custom Legend',
        description:
          'Pie chart with interactive aligned item indicator keys listed alongside the canvas.',
        anchor: 'pie-chart-with-custom-legend',
        component: <PieChartCustomLegendDemo />,
      },
      {
        title: 'Pie Chart with Custom Active Shape',
        description:
          'Interactive pie chart highlighting hovered nodes dynamically.',
        anchor: 'pie-chart-with-custom-active-shape',
        component: <PieChartCustomActiveShapeDemo />,
      },
      {
        title: 'Pie Chart Simple',
        description: 'Minimalist clean standard pie chart layout.',
        anchor: 'pie-chart-simple',
        component: <PieChartSimpleDemo />,
      },
      {
        title: 'Pie Chart Stacked',
        description:
          'Stacked concentric layers displaying multi-tier compositions.',
        anchor: 'pie-chart-stacked',
        component: <PieChartStackedDemo />,
      },
      {
        title: 'Pie Chart Donut Active',
        description:
          'Donut chart with custom active sector shapes on interaction.',
        anchor: 'pie-chart-donut-active',
        component: <PieChartDonutActiveDemo />,
      },
    ],
    radar: [
      {
        title: 'Radar Chart',
        description:
          'Displays multivariate data points mapped on a concentric grid web structure.',
        anchor: 'radar-chart',
        component: <RadarChartDemo />,
      },
      {
        title: 'Interactive Radar Chart',
        description:
          'Radar chart showcasing data filtered interactively with select buttons.',
        anchor: 'interactive-radar-chart',
        component: <InteractiveRadarChartDemo />,
      },
      {
        title: 'Radar Chart Dots',
        description: 'Radar chart rendering visible node circular indicators.',
        anchor: 'radar-chart-dots',
        component: <RadarChartDotsDemo />,
      },
      {
        title: 'Radar Chart Lines Only',
        description:
          'Radar chart with outer outline profiles only, skipping area fills.',
        anchor: 'radar-chart-lines-only',
        component: <RadarChartLinesOnlyDemo />,
      },
      {
        title: 'Radar Chart Legend',
        description:
          'Radar chart displaying detailed key labels aligned below the web.',
        anchor: 'radar-chart-legend',
        component: <RadarChartLegendDemo />,
      },
    ],
    radial: [
      {
        title: 'Radial Chart',
        description:
          'A clean radial progress chart plotting concentric browser visitor shares.',
        anchor: 'radial-chart',
        component: <RadialChartSimpleDemo />,
      },
      {
        title: 'Radial Chart Label',
        description:
          'Concentric ring circular progression graphs showing labels inside bars.',
        anchor: 'radial-chart-label',
        component: <RadialChartLabelDemo />,
      },
      {
        title: 'Radial Chart Grid',
        description:
          'Concentric radial graphs styled with surrounding background grid circle rings.',
        anchor: 'radial-chart-grid',
        component: <RadialChartGridDemo />,
      },
      {
        title: 'Radial Chart Text',
        description:
          'Circular progress segment gauge with centered text overlay.',
        anchor: 'radial-chart-text',
        component: <RadialChartTextDemo />,
      },
      {
        title: 'Radial Chart Shape',
        description:
          'Radial progress chart utilizing customized end boundary angles.',
        anchor: 'radial-chart-shape',
        component: <RadialChartShapeDemo />,
      },
      {
        title: 'Radial Chart Stacked',
        description:
          'Stacked radial chart displaying cumulative category visitor shares.',
        anchor: 'radial-chart-stacked',
        component: <RadialChartStackedDemo />,
      },
      {
        title: 'Radial Chart Angle',
        description:
          'A 180-degree semi-radial gauge plotting visitor progress.',
        anchor: 'radial-chart-angle',
        component: <RadialChartAngleDemo />,
      },
      {
        title: 'Radial Chart Icon',
        description:
          'Radial gauge chart rendering customized category inline icons.',
        anchor: 'radial-chart-icon',
        component: <RadialChartIconDemo />,
      },
      {
        title: 'Radial Chart Legend',
        description:
          'Radial chart detailing item indicators in an aligned list config.',
        anchor: 'radial-chart-legend',
        component: <RadialChartLegendDemo />,
      },
    ],
    composed: [
      {
        title: 'Composed Chart',
        description:
          'Combine Area, Bar, and Line elements in one single cohesive data structure.',
        anchor: 'composed-chart',
        component: <ComposedChartDemo />,
      },
      {
        title: 'Stacked Composed Chart',
        description:
          'Concentric segment stacked composed chart displaying Area, Bar, and Line elements.',
        anchor: 'stacked-composed-chart',
        component: <StackedComposedChartDemo />,
      },
      {
        title: 'Composed Line Scatter',
        description:
          'A composed chart displaying coordinate data utilizing Line and Scatter plots.',
        anchor: 'composed-line-scatter',
        component: <ComposedLineScatterChartDemo />,
      },
      {
        title: 'Biaxial Composed Chart',
        description:
          'Dual-axis composed chart comparing multiple metrics on separate scales.',
        anchor: 'biaxial-composed-chart',
        component: <BiaxialComposedChartDemo />,
      },
      {
        title: 'Scatter Chart',
        description:
          'Coordinate scatter chart plotting discrete data points along X and Y axes.',
        anchor: 'scatter-chart',
        component: <ScatterChartDemo />,
      },
      {
        title: 'Composed Chart Interactive',
        description: 'Composed chart allowing interactive series filtering.',
        anchor: 'composed-chart-interactive',
        component: <ComposedChartInteractiveDemo />,
      },
      {
        title: 'Composed Chart Horizontal',
        description:
          'A horizontal composed layout rendering bar columns and line trends.',
        anchor: 'composed-chart-horizontal',
        component: <ComposedChartHorizontalDemo />,
      },
      {
        title: 'Composed Chart Custom Label',
        description:
          'A composed chart plotting coordinates with custom floating text values.',
        anchor: 'composed-chart-custom-label',
        component: <ComposedChartCustomLabelDemo />,
      },
    ],
    scatter: [
      {
        title: 'Scatter Chart - Simple',
        description:
          'Coordinate scatter chart plotting discrete data points along X and Y axes.',
        anchor: 'scatter-chart-simple',
        component: <ScatterChartSimpleDemo />,
      },
      {
        title: 'Scatter Chart - Multiple Series',
        description:
          'Compare multiple data series using different colored scatter points.',
        anchor: 'scatter-chart-multiple-series',
        component: <ScatterChartMultipleDemo />,
      },
      {
        title: 'Scatter Chart - Label List',
        description:
          'A coordinate scatter chart displaying point label overlays.',
        anchor: 'scatter-chart-label-list',
        component: <ScatterChartLabelDemo />,
      },
      {
        title: 'Bubble Chart',
        description:
          'A scatter plot where coordinate dots have dynamic bubble sizes representing a Z-axis metric.',
        anchor: 'bubble-chart',
        component: <BubbleChartDemo />,
      },
      {
        title: 'Scatter Chart - Joint Line',
        description:
          'A scatter plot featuring a connected joint line tracking point trends.',
        anchor: 'scatter-chart-joint-line',
        component: <ScatterChartTrendLineDemo />,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="border-b border-border bg-muted/20 py-8 sm:py-12 md:py-16">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 text-center flex flex-col items-center justify-center space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-primary select-none w-fit">
              <Sparkles className="h-3 w-3" />
              <span>Beautiful Ready-to-use Charts & Graphs</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
              <BarChart2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" />
              <span>Beautiful Charts & Graphs</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto px-2 sm:px-0">
              A collection of ready-to-use chart components built with Recharts.
              From basic charts to rich data displays, copy and paste into your
              apps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#charts-section"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Browse Charts
              </a>
              <Link
                href="/docs/components/chart"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>

        {/* Charts Gallery Section */}
        <div
          id="charts-section"
          className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 space-y-6 sm:space-y-8"
        >
          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-border overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex space-x-4 sm:space-x-6 min-w-max pb-px">
              {categories.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-3 text-xs sm:text-sm font-medium transition-colors relative cursor-pointer ${
                    activeTab === tab.key
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Chart Cards */}
          <div
            key={activeTab}
            className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {mounted
              ? chartData[activeTab].map((chart) => (
                  <div
                    key={chart.title}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card/45 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                  >
                    {/* Card Header */}
                    <div className="p-4 sm:p-5 pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-sm sm:text-base text-foreground leading-tight">
                            {chart.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-normal">
                            {chart.description}
                          </p>
                        </div>
                        <Link
                          href={`/docs/components/chart#${chart.anchor}`}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground transition-colors shrink-0"
                          title="View Code & Docs"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Chart Display Area */}
                    <div className="chart-preview-container flex-1 p-4 sm:p-5 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full overflow-hidden">
                        {chart.component}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="border-t border-border/60 bg-muted/10 p-3 px-4 sm:px-5 flex items-center justify-end">
                      <Link
                        href={`/docs/components/chart#${chart.anchor}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        <span>View Code & Docs</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))
              : Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[300px] w-full rounded-xl border border-border bg-card/15 animate-pulse"
                  />
                ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
