import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@/components/ui': path.resolve(__dirname, '../../packages/ui/src/components'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
