export function getComponentCategory(
  name: string,
): 'components' | 'animations' | 'backgrounds' | 'blocks' {
  const backgrounds = [
    'light-tunnel',
    'web-threads',
    'sliced-waves',
    'scanner',
    'lightfall',
  ]
  const blocks = [
    'dashboard-01',
    'dashboard-02',
    'ecommerce-01',
    'ecommerce-02',
    'chat-01',
    'auth-01',
    'crypto-glass-01',
    'pricing-01',
    'kanban-01',
  ]
  const animations = [
    'animated-gradient-text',
    'animated-shiny-text',
    'aurora-text',
    'blur-fade',
    'comic-text',
    'dia-text-reveal',
    'hyper-text',
    'kinetic-text',
    'line-shadow-text',
    'marquee',
    'message-scroller',
    'morphing-text',
    'number-ticker',
    'scroll-based-velocity',
    'sparkles-text',
    'spinning-text',
    'text-3d-flip',
    'text-animate',
    'text-glitch',
    'text-reveal',
    'typing-animation',
    'video-text',
    'word-rotate',
  ]
  if (backgrounds.includes(name)) return 'backgrounds'
  if (blocks.includes(name)) return 'blocks'
  if (animations.includes(name)) return 'animations'
  return 'components'
}
