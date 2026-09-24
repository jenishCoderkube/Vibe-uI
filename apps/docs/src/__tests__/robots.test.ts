import { describe, it, expect } from 'vitest'
import robots from '../app/robots'

describe('Robots Configuration', () => {
  it('should return valid robots configuration matching SEO rules', () => {
    const config = robots()
    expect(config).toBeDefined()
    expect(config.host).toBe('https://vibe-ui-kit.vercel.app')
    expect(config.sitemap).toBe('https://vibe-ui-kit.vercel.app/sitemap.xml')

    const rules = Array.isArray(config.rules) ? config.rules : [config.rules]
    expect(rules.length).toBeGreaterThan(0)

    const mainRule = rules[0]
    expect(mainRule.userAgent).toBe('*')

    // /_next/ MUST NOT be disallowed to allow Googlebot asset crawling
    const disallowList = Array.isArray(mainRule.disallow)
      ? mainRule.disallow
      : [mainRule.disallow]
    expect(disallowList).not.toContain('/_next/')
    expect(disallowList).not.toContain('/_next')

    // Verify sensitive and internal preview routes remain disallowed
    expect(disallowList).toContain('/api/components/')
    expect(disallowList).toContain('/api/contact/')
    expect(disallowList).toContain('/preview/')
  })
})
