export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
  isNew?: boolean
}

export interface SidebarNavItem extends NavItem {
  items: NavItem[]
}

export interface DocsConfig {
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/introduction',
        },
        {
          title: 'Installation',
          href: '/docs/installation',
        },
        {
          title: 'Next.js Setup',
          href: '/docs/installation/next',
        },
        {
          title: 'Vite Setup',
          href: '/docs/installation/vite',
        },
        {
          title: 'Manual Setup',
          href: '/docs/installation/manual',
        },
        {
          title: 'CLI Reference',
          href: '/docs/cli',
        },
        {
          title: 'Dark Mode',
          href: '/docs/dark-mode',
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
        },
        {
          title: 'Alert',
          href: '/docs/components/alert',
        },
        {
          title: 'Alert Dialog',
          href: '/docs/components/alert-dialog',
        },
        {
          title: 'Aspect Ratio',
          href: '/docs/components/aspect-ratio',
        },
        {
          title: 'Avatar',
          href: '/docs/components/avatar',
        },
        {
          title: 'Badge',
          href: '/docs/components/badge',
        },
        {
          title: 'Breadcrumb',
          href: '/docs/components/breadcrumb',
        },
        {
          title: 'Button',
          href: '/docs/components/button',
        },
        {
          title: 'Button Group',
          href: '/docs/components/button-group',
        },
        {
          title: 'Calendar',
          href: '/docs/components/calendar',
        },
        {
          title: 'Card',
          href: '/docs/components/card',
        },
        {
          title: 'Carousel',
          href: '/docs/components/carousel',
        },
        {
          title: 'Chart',
          href: '/docs/components/chart',
        },
        {
          title: 'Collapsible',
          href: '/docs/components/collapsible',
        },
        {
          title: 'Checkbox',
          href: '/docs/components/checkbox',
        },
        {
          title: 'Command',
          href: '/docs/components/command',
        },
        {
          title: 'Combobox',
          href: '/docs/components/combobox',
        },
        {
          title: 'Date Picker',
          href: '/docs/components/date-picker',
        },
        {
          title: 'Dialog',
          href: '/docs/components/dialog',
        },
        {
          title: 'Drawer',
          href: '/docs/components/drawer',
        },
        {
          title: 'Dropdown Menu',
          href: '/docs/components/dropdown-menu',
        },
        {
          title: 'Empty State',
          href: '/docs/components/empty',
        },
        {
          title: 'Hover Card',
          href: '/docs/components/hover-card',
        },
        {
          title: 'Input',
          href: '/docs/components/input',
        },
        {
          title: 'Input OTP',
          href: '/docs/components/input-otp',
        },
        {
          title: 'Item',
          href: '/docs/components/item',
        },
        {
          title: 'Kbd',
          href: '/docs/components/kbd',
        },
        {
          title: 'Label',
          href: '/docs/components/label',
        },
        {
          title: 'Marquee',
          href: '/docs/components/marquee',
        },
        {
          title: 'Menubar',
          href: '/docs/components/menubar',
        },
        {
          title: 'Message',
          href: '/docs/components/message',
        },
        {
          title: 'Message Scroller',
          href: '/docs/components/message-scroller',
        },
        {
          title: 'Multi-Select',
          href: '/docs/components/multi-select',
        },
        {
          title: 'Pagination',
          href: '/docs/components/pagination',
        },
        {
          title: 'Popover',
          href: '/docs/components/popover',
        },
        {
          title: 'Progress',
          href: '/docs/components/progress',
        },
        {
          title: 'Radio Group',
          href: '/docs/components/radio-group',
        },
        {
          title: 'Scroll Area',
          href: '/docs/components/scroll-area',
        },
        {
          title: 'Separator',
          href: '/docs/components/separator',
        },
        {
          title: 'Select',
          href: '/docs/components/select',
        },
        {
          title: 'Skeleton',
          href: '/docs/components/skeleton',
        },
        {
          title: 'Slider',
          href: '/docs/components/slider',
        },
        {
          title: 'Spinner',
          href: '/docs/components/spinner',
        },
        {
          title: 'Switch',
          href: '/docs/components/switch',
        },
        {
          title: 'Table',
          href: '/docs/components/table',
        },
        {
          title: 'Tabs',
          href: '/docs/components/tabs',
        },
        {
          title: 'Textarea',
          href: '/docs/components/textarea',
        },
        {
          title: 'Text Glitch',
          href: '/docs/components/text-glitch',
        },
        {
          title: 'Theme Switcher',
          href: '/docs/components/theme-switcher',
        },
        {
          title: 'Toast',
          href: '/docs/components/toast',
        },
        {
          title: 'Toggle',
          href: '/docs/components/toggle',
        },
        {
          title: 'Tooltip',
          href: '/docs/components/tooltip',
        },
        {
          title: 'Uploader',
          href: '/docs/components/uploader',
        },
        {
          title: 'Context Menu',
          href: '/docs/components/context-menu',
        },
        {
          title: 'Layout Shell',
          href: '/docs/components/layout-shell',
        },
        {
          title: 'Infinite Scroll',
          href: '/docs/components/infinite-scroll',
        },
        {
          title: 'Sidebar',
          href: '/docs/components/sidebar',
        },
      ],
    },
    {
      title: 'Animations',
      items: [
        {
          title: 'Typing Animation',
          href: '/docs/animations/typing-animation',
        },
        {
          title: 'Hyper Text',
          href: '/docs/animations/hyper-text',
        },
        {
          title: 'Word Rotate',
          href: '/docs/animations/word-rotate',
        },
        {
          title: 'Sparkles Text',
          href: '/docs/animations/sparkles-text',
        },
        {
          title: 'Text Reveal',
          href: '/docs/animations/text-reveal',
        },
        {
          title: 'Aurora Text',
          href: '/docs/animations/aurora-text',
        },
        {
          title: 'Animated Shiny Text',
          href: '/docs/animations/animated-shiny-text',
        },
        {
          title: 'Spinning Text',
          href: '/docs/animations/spinning-text',
        },
        {
          title: 'Scroll Velocity',
          href: '/docs/animations/scroll-based-velocity',
        },
        {
          title: 'Blur Fade',
          href: '/docs/animations/blur-fade',
        },
        {
          title: 'Number Ticker',
          href: '/docs/animations/number-ticker',
        },
        {
          title: 'Animated Gradient Text',
          href: '/docs/animations/animated-gradient-text',
        },
        {
          title: 'Comic Text',
          href: '/docs/animations/comic-text',
        },
        {
          title: 'Dia Text Reveal',
          href: '/docs/animations/dia-text-reveal',
        },
        {
          title: 'Kinetic Text',
          href: '/docs/animations/kinetic-text',
        },
        {
          title: 'Line Shadow Text',
          href: '/docs/animations/line-shadow-text',
        },
        {
          title: 'Morphing Text',
          href: '/docs/animations/morphing-text',
        },
        {
          title: 'Text 3D Flip',
          href: '/docs/animations/text-3d-flip',
        },
        {
          title: 'Text Animate',
          href: '/docs/animations/text-animate',
        },
        {
          title: 'Video Text',
          href: '/docs/animations/video-text',
        },
      ],
    },
    {
      title: 'Backgrounds',
      items: [
        {
          title: 'Light Tunnel',
          href: '/docs/backgrounds/light-tunnel',
        },
        {
          title: 'Web Threads',
          href: '/docs/backgrounds/web-threads',
        },
        {
          title: 'Sliced Waves',
          href: '/docs/backgrounds/sliced-waves',
        },
        {
          title: 'Scanner',
          href: '/docs/backgrounds/scanner',
        },
      ],
    },
  ],
}
