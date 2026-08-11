import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChartContainer } from '../chart'
import { LineChart, Line } from 'recharts'

describe('Chart Components', () => {
  it('renders container with ResponsiveContainer children correctly', () => {
    const config = {
      views: {
        label: 'ViewsCount',
        color: '#8884d8',
      },
    }

    render(
      <ChartContainer config={config} data-testid="chart-container">
        <LineChart data={[{ x: 1, y: 1 }]}>
          <Line dataKey="y" />
        </LineChart>
      </ChartContainer>,
    )

    expect(screen.getByTestId('chart-container')).toBeInTheDocument()
  })
})
