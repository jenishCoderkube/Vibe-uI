export const BLOCKS_METADATA: Record<
  string,
  {
    title: string
    description: string
    vibeDeps: string
  }
> = {
  'dashboard-01': {
    title: 'Vibe Analytics Dashboard',
    description:
      'Vibe statistics dashboard featuring Total Revenue metrics, an active CPU workload sparkline graph, sync card status checkers, and an interactive data table.',
    vibeDeps:
      'sidebar, card, badge, button, input, avatar, table, checkbox, select, dropdown-menu',
  },
  'ecommerce-01': {
    title: 'Vibe E-commerce Store',
    description:
      'A premium, production-ready e-commerce experience featuring search dialog overlays, wishlist/shopping cart drawers, product sliders, specs listings, and special deals grids.',
    vibeDeps:
      'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, blur-fade',
  },
  'ecommerce-02': {
    title: 'Vibe E-commerce Product Details',
    description:
      'A high-fidelity product details layout featuring interactive thumbnail-selector galleries, custom cushions and variant options, specifications accordions, and verified customer review charts.',
    vibeDeps:
      'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, accordion, blur-fade',
  },
  'chat-01': {
    title: 'Vibe Chat Assistant',
    description:
      'A premium, responsive AI chat assistant layout featuring collapsible sidebars, streaming response states, prompt suggestion cards, file attachments, and rate inputs.',
    vibeDeps:
      'button, input, scroll-area, sheet, dropdown-menu, dialog, avatar, tooltip, theme-switcher, textarea, badge, card',
  },
  'auth-01': {
    title: 'Vibe Modern Authentication',
    description:
      'A complete authentication system block with fluid Framer Motion animations. Handles Login, Register, Forgot Password, and Reset Password views in a fully validated, routes-agnostic single-page design.',
    vibeDeps: 'button, card, input, checkbox, form, motion',
  },
  'crypto-glass-01': {
    title: 'Liquid Glass Crypto Portfolio',
    description:
      'A premium, glassmorphic portfolio dashboard block featuring asset summaries, interactive transaction tables, asset search, and a vector trend chart.',
    vibeDeps:
      'button, card, input, badge, wallet, table, switch, slider, select',
  },
  'pricing-01': {
    title: 'Vibe Modern SaaS Pricing & Tier Matrix',
    description:
      'A high-converting, professional SaaS pricing and plan comparison block featuring monthly/annual billing toggles, currency switching, interactive checkout drawer, feature matrix table, and FAQ accordion.',
    vibeDeps:
      'button, card, badge, switch, input, sheet, accordion, tooltip, table',
  },
  'kanban-01': {
    title: 'Vibe Interactive Agile Project & Kanban Board',
    description:
      'A high-performance agile sprint board featuring 4 workflow swimlanes, subtask checklists, priority badges, member workload allocation, interactive task creation modal, drawer inspector, and real-time sprint analytics.',
    vibeDeps:
      'button, card, badge, avatar, progress, input, textarea, dialog, sheet, dropdown-menu, select, tooltip, tabs, checkbox, separator, form',
  },
}

export const VALID_BLOCK_SLUGS = [
  'dashboard-01',
  'ecommerce-01',
  'ecommerce-02',
  'chat-01',
  'auth-01',
  'crypto-glass-01',
  'pricing-01',
  'kanban-01',
]
