'use client'

import * as React from 'react'
import * as Recharts from 'recharts'
import { cn } from '../lib/utils'

// Format the config object type
export type ChartConfig = Record<
  string,
  {
    label: React.ReactNode
    icon?: React.ComponentType
    color?: string
    theme?: Record<string, string>
  }
>

interface ChartContextProps {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error('useChart must be used within a ChartContainer')
  }
  return context
}

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
  children: React.ReactElement
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ id, className, config, children, ...props }, ref) => {
    const uniqueId = React.useId()
    const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          ref={ref}
          data-slot="chart"
          data-chart={chartId}
          className={cn(
            'flex aspect-video justify-center text-xs [&_.recharts-cartesian-grid-horizontal_line]:stroke-border/40 [&_.recharts-cartesian-grid-vertical_line]:stroke-border/40 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid-concentric-polygon]:fill-transparent [&_.recharts-polar-grid-concentric-polygon]:stroke-border/40 [&_.recharts-polar-grid-concentric-value]:stroke-border/40 [&_.recharts-reference-line_line]:stroke-border [&_.recharts-sector]:outline-none [&_.recharts-sector.recharts-active-shape]:stroke-white/10 [&_.recharts-surface]:outline-none [&_text]:fill-muted-foreground',
            className,
          )}
          {...props}
        >
          <ChartStyle id={chartId} config={config} />
          <Recharts.ResponsiveContainer>
            {React.cloneElement(
              children as React.ReactElement<{ className?: string }>,
              {
                className: cn(
                  '[&_.recharts-bar-background-sector]:fill-zinc-800/10 [&_.recharts-bar-rectangle]:fill-primary [&_.recharts-area-rectangle]:fill-primary [&_.recharts-line-rectangle]:stroke-primary',
                  React.isValidElement<{ className?: string }>(children)
                    ? children.props.className
                    : undefined,
                ),
              },
            )}
          </Recharts.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    )
  },
)
ChartContainer.displayName = 'ChartContainer'

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorStyles = React.useMemo(() => {
    return Object.entries(config)
      .map(([key, value]) => {
        if (!value.color) return null
        return `--color-${key}: ${value.color};`
      })
      .filter(Boolean)
      .join('\n')
  }, [config])

  if (!colorStyles) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `[data-chart="${id}"] {
${colorStyles}
}`,
      }}
    />
  )
}

export const ChartTooltip = Recharts.Tooltip

export interface ChartTooltipContentProps
  extends
    Omit<React.ComponentProps<typeof Recharts.Tooltip>, 'content'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'line' | 'dot' | 'dashed'
  nameKey?: string
  labelKey?: string
  config?: ChartConfig
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      hideLabel = false,
      hideIndicator = false,
      indicator = 'dot',
      config: customConfig,
      className,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart()
    const tooltipConfig = customConfig || config

    const labelString = React.useMemo(() => {
      if (!payload || !payload.length) return ''
      const item = payload[0]
      const key = `${labelKey || item?.dataKey || item?.name || 'value'}`
      const configItem = tooltipConfig[key]
      return configItem ? configItem.label : label
    }, [payload, label, labelKey, tooltipConfig])

    if (!active || !payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        data-slot="chart-tooltip-content"
        className={cn(
          'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-[11px] text-foreground shadow-md',
          className,
        )}
      >
        {!hideLabel && (
          <div
            className={cn('font-medium text-muted-foreground', labelClassName)}
          >
            {labelFormatter
              ? labelFormatter(labelString, payload)
              : labelString}
          </div>
        )}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || 'value'}`
            const configItem = tooltipConfig[key]
            const indicatorColor = item.color || item.payload?.fill || item.fill

            return (
              <div
                key={index}
                className="flex items-center gap-1.5 [&_svg]:h-2.5 [&_svg]:w-2.5 [&_svg]:text-muted-foreground"
              >
                {!hideIndicator && (
                  <div
                    className={cn(
                      'shrink-0 rounded-[2px] border-border/40',
                      indicator === 'dot' && 'h-2 w-2 rounded-full',
                      indicator === 'line' && 'w-1 h-3',
                      indicator === 'dashed' &&
                        'h-3 w-0.5 border-r border-dashed',
                    )}
                    style={
                      {
                        backgroundColor: indicatorColor,
                      } as React.CSSProperties
                    }
                  />
                )}
                <div className="flex flex-1 items-center justify-between gap-4">
                  <span className="text-muted-foreground">
                    {configItem?.label || item.name}
                  </span>
                  {item.value !== undefined && (
                    <span className="font-bold font-mono text-foreground">
                      {formatter
                        ? formatter(
                            item.value,
                            item.name ?? '',
                            item,
                            index,
                            payload,
                          )
                        : typeof item.value === 'number'
                          ? item.value.toLocaleString()
                          : item.value}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
ChartTooltipContent.displayName = 'ChartTooltipContent'

export const ChartLegend = Recharts.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> &
    Pick<Recharts.LegendProps, 'payload' | 'verticalAlign'> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, payload, verticalAlign = 'bottom', hideIcon = false, nameKey },
    ref,
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        data-slot="chart-legend-content"
        className={cn(
          'flex items-center justify-center gap-4',
          verticalAlign === 'top' ? 'pb-3' : 'pt-3',
          className,
        )}
      >
        {payload.map((item: any, index) => {
          const key = `${nameKey || item.dataKey || item.value || 'value'}`
          const configItem = config[key]
          const color = item.color || item.payload?.fill || item.fill

          return (
            <div
              key={index}
              className="flex items-center gap-1.5 text-xs text-zinc-400"
            >
              {!hideIcon && (
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                />
              )}
              <span>{configItem?.label || item.value}</span>
            </div>
          )
        })}
      </div>
    )
  },
)
ChartLegendContent.displayName = 'ChartLegendContent'

export { ChartContainer, ChartTooltipContent, ChartLegendContent }
