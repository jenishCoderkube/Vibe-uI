// Enable React act environment for testing
globalThis.IS_REACT_ACT_ENVIRONMENT = true

import '@testing-library/jest-dom'
import React from 'react'

// Mock ResizeObserver for Radix UI primitives like Slider
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock Pointer Capture methods for JSDOM which are missing and cause errors in Radix UI + userEvent tests
if (typeof window !== 'undefined') {
  window.Element.prototype.hasPointerCapture = () => false
  window.Element.prototype.setPointerCapture = () => {}
  window.Element.prototype.releasePointerCapture = () => {}
}

// Mock elementFromPoint for libraries like input-otp
if (typeof document !== 'undefined') {
  document.elementFromPoint = () => null
}

// Mock scrollIntoView for libraries like cmdk (Command component)
window.HTMLElement.prototype.scrollIntoView = function () {}

// Mock IntersectionObserver for InfiniteScroll component
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback: any) {
    this.callback = callback
  }
  callback: any
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock matchMedia for responsive layouts and libraries like Vaul Drawer
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock ResponsiveContainer for Recharts to avoid console warnings in JSDOM testing
vi.mock('recharts', async () => {
  const original = (await vi.importActual('recharts')) as any
  return {
    ...original,
    ResponsiveContainer: ({ children }: any) =>
      React.createElement(
        'div',
        { style: { width: '800px', height: '400px' } },
        children,
      ),
  }
})
