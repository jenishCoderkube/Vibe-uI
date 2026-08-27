'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Search, FileText, Component, ArrowRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from 'vibe-ui'

interface SearchItem {
  title: string
  subtitle?: string
  category: 'Documentation' | 'Components'
  href: string
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    title: 'Introduction',
    category: 'Documentation',
    href: '/docs/introduction',
  },
  {
    title: 'CLI Installer',
    category: 'Documentation',
    href: '/docs/introduction#cli-installation',
  },

  {
    title: 'Accordion',
    category: 'Components',
    href: '/docs/components/accordion',
  },
  { title: 'Alert', category: 'Components', href: '/docs/components/alert' },
  {
    title: 'Alert Dialog',
    category: 'Components',
    href: '/docs/components/alert-dialog',
  },
  { title: 'Avatar', category: 'Components', href: '/docs/components/avatar' },
  { title: 'Badge', category: 'Components', href: '/docs/components/badge' },
  {
    title: 'Breadcrumb',
    category: 'Components',
    href: '/docs/components/breadcrumb',
  },
  { title: 'Button', category: 'Components', href: '/docs/components/button' },
  {
    title: 'Calendar',
    category: 'Components',
    href: '/docs/components/calendar',
  },
  { title: 'Card', category: 'Components', href: '/docs/components/card' },
  {
    title: 'Carousel',
    category: 'Components',
    href: '/docs/components/carousel',
  },

  // 34 Charts Indexing
  { title: 'Chart', category: 'Components', href: '/docs/components/chart' },
  {
    title: 'Chart',
    subtitle: 'Area Chart',
    category: 'Components',
    href: '/docs/components/chart#area-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Stacked Area Chart',
    category: 'Components',
    href: '/docs/components/chart#stacked-area-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Simple Area Chart',
    category: 'Components',
    href: '/docs/components/chart#simple-area-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Interactive Area Chart',
    category: 'Components',
    href: '/docs/components/chart#interactive-area-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Area Chart - Gradient',
    category: 'Components',
    href: '/docs/components/chart#area-chart-gradient',
  },
  {
    title: 'Chart',
    subtitle: 'Area Chart - Legend',
    category: 'Components',
    href: '/docs/components/chart#area-chart-legend',
  },
  {
    title: 'Chart',
    subtitle: 'Bar Chart',
    category: 'Components',
    href: '/docs/components/chart#bar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Horizontal Bar Chart',
    category: 'Components',
    href: '/docs/components/chart#horizontal-bar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Stacked Bar Chart',
    category: 'Components',
    href: '/docs/components/chart#stacked-bar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Horizontal Stacked Bar Chart',
    category: 'Components',
    href: '/docs/components/chart#horizontal-stacked-bar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Interactive Bar Chart',
    category: 'Components',
    href: '/docs/components/chart#interactive-bar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Linear Bar Chart',
    category: 'Components',
    href: '/docs/components/chart#linear-bar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Biaxial Bar Chart',
    category: 'Components',
    href: '/docs/components/chart#biaxial-bar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Bar Chart with Custom Label',
    category: 'Components',
    href: '/docs/components/chart#bar-chart-with-custom-label',
  },
  {
    title: 'Chart',
    subtitle: 'Bar Chart - Mixed',
    category: 'Components',
    href: '/docs/components/chart#bar-chart-mixed',
  },
  {
    title: 'Chart',
    subtitle: 'Bar Chart - Negative',
    category: 'Components',
    href: '/docs/components/chart#bar-chart-negative',
  },
  {
    title: 'Chart',
    subtitle: 'Line Chart',
    category: 'Components',
    href: '/docs/components/chart#line-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Interactive Line Chart',
    category: 'Components',
    href: '/docs/components/chart#interactive-line-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Multi-Line Chart',
    category: 'Components',
    href: '/docs/components/chart#multi-line-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Step Line Chart',
    category: 'Components',
    href: '/docs/components/chart#step-line-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Biaxial Line Chart',
    category: 'Components',
    href: '/docs/components/chart#biaxial-line-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Dashed Line Chart',
    category: 'Components',
    href: '/docs/components/chart#dashed-line-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Custom Dot Line Chart',
    category: 'Components',
    href: '/docs/components/chart#custom-dot-line-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Line Chart - Dots',
    category: 'Components',
    href: '/docs/components/chart#line-chart-dots',
  },
  {
    title: 'Chart',
    subtitle: 'Pie Chart (Donut Chart)',
    category: 'Components',
    href: '/docs/components/chart#pie-chart-donut-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Pie Chart with Custom Labels',
    category: 'Components',
    href: '/docs/components/chart#pie-chart-with-custom-labels',
  },
  {
    title: 'Chart',
    subtitle: 'Pie Chart with Custom Legend',
    category: 'Components',
    href: '/docs/components/chart#pie-chart-with-custom-legend',
  },
  {
    title: 'Chart',
    subtitle: 'Pie Chart with Custom Active Shape',
    category: 'Components',
    href: '/docs/components/chart#pie-chart-with-custom-active-shape',
  },
  {
    title: 'Chart',
    subtitle: 'Radar Chart',
    category: 'Components',
    href: '/docs/components/chart#radar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Interactive Radar Chart',
    category: 'Components',
    href: '/docs/components/chart#interactive-radar-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart',
    category: 'Components',
    href: '/docs/components/chart#radial-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Label',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-label',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Grid',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-grid',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Text',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-text',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Shape',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-shape',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Stacked',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-stacked',
  },
  {
    title: 'Chart',
    subtitle: 'Composed Chart',
    category: 'Components',
    href: '/docs/components/chart#composed-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Stacked Composed Chart',
    category: 'Components',
    href: '/docs/components/chart#stacked-composed-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Composed Line Scatter',
    category: 'Components',
    href: '/docs/components/chart#composed-line-scatter',
  },
  {
    title: 'Chart',
    subtitle: 'Biaxial Composed Chart',
    category: 'Components',
    href: '/docs/components/chart#biaxial-composed-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Scatter Chart',
    category: 'Components',
    href: '/docs/components/chart#scatter-chart',
  },
  {
    title: 'Chart',
    subtitle: 'Area Chart - Linear',
    category: 'Components',
    href: '/docs/components/chart#area-chart-linear',
  },
  {
    title: 'Chart',
    subtitle: 'Area Chart - Step',
    category: 'Components',
    href: '/docs/components/chart#area-chart-step',
  },
  {
    title: 'Chart',
    subtitle: 'Area Chart - Stacked Expanded',
    category: 'Components',
    href: '/docs/components/chart#area-chart-stacked-expanded',
  },
  {
    title: 'Chart',
    subtitle: 'Bar Chart - Active',
    category: 'Components',
    href: '/docs/components/chart#bar-chart-active',
  },
  {
    title: 'Chart',
    subtitle: 'Bar Chart - Multiple',
    category: 'Components',
    href: '/docs/components/chart#bar-chart-multiple',
  },
  {
    title: 'Chart',
    subtitle: 'Bar Chart - Label',
    category: 'Components',
    href: '/docs/components/chart#bar-chart-label',
  },
  {
    title: 'Chart',
    subtitle: 'Line Chart - Linear',
    category: 'Components',
    href: '/docs/components/chart#line-chart-linear',
  },
  {
    title: 'Chart',
    subtitle: 'Line Chart - Step',
    category: 'Components',
    href: '/docs/components/chart#line-chart-step',
  },
  {
    title: 'Chart',
    subtitle: 'Line Chart - Multiple',
    category: 'Components',
    href: '/docs/components/chart#line-chart-multiple',
  },
  {
    title: 'Chart',
    subtitle: 'Pie Chart - Simple',
    category: 'Components',
    href: '/docs/components/chart#pie-chart-simple',
  },
  {
    title: 'Chart',
    subtitle: 'Pie Chart - Stacked',
    category: 'Components',
    href: '/docs/components/chart#pie-chart-stacked',
  },
  {
    title: 'Chart',
    subtitle: 'Pie Chart - Donut Active',
    category: 'Components',
    href: '/docs/components/chart#pie-chart-donut-active',
  },
  {
    title: 'Chart',
    subtitle: 'Radar Chart - Dots',
    category: 'Components',
    href: '/docs/components/chart#radar-chart-dots',
  },
  {
    title: 'Chart',
    subtitle: 'Radar Chart - Lines Only',
    category: 'Components',
    href: '/docs/components/chart#radar-chart-lines-only',
  },
  {
    title: 'Chart',
    subtitle: 'Radar Chart - Legend',
    category: 'Components',
    href: '/docs/components/chart#radar-chart-legend',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Angle',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-angle',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Icon',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-icon',
  },
  {
    title: 'Chart',
    subtitle: 'Radial Chart - Legend',
    category: 'Components',
    href: '/docs/components/chart#radial-chart-legend',
  },
  {
    title: 'Chart',
    subtitle: 'Composed Chart - Interactive',
    category: 'Components',
    href: '/docs/components/chart#composed-chart-interactive',
  },
  {
    title: 'Chart',
    subtitle: 'Composed Chart - Horizontal',
    category: 'Components',
    href: '/docs/components/chart#composed-chart-horizontal',
  },
  {
    title: 'Chart',
    subtitle: 'Composed Chart - Custom Label',
    category: 'Components',
    href: '/docs/components/chart#composed-chart-custom-label',
  },

  {
    title: 'Checkbox',
    category: 'Components',
    href: '/docs/components/checkbox',
  },
  {
    title: 'Command',
    category: 'Components',
    href: '/docs/components/command',
  },
  { title: 'Dialog', category: 'Components', href: '/docs/components/dialog' },
  { title: 'Drawer', category: 'Components', href: '/docs/components/drawer' },
  {
    title: 'Dropdown Menu',
    category: 'Components',
    href: '/docs/components/dropdown-menu',
  },
  {
    title: 'Hover Card',
    category: 'Components',
    href: '/docs/components/hover-card',
  },
  { title: 'Input', category: 'Components', href: '/docs/components/input' },
  {
    title: 'Input OTP',
    category: 'Components',
    href: '/docs/components/input-otp',
  },
  { title: 'Item', category: 'Components', href: '/docs/components/item' },
  { title: 'Kbd', category: 'Components', href: '/docs/components/kbd' },
  { title: 'Label', category: 'Components', href: '/docs/components/label' },
  { title: 'Marker', category: 'Components', href: '/docs/components/marker' },
  {
    title: 'Menubar',
    category: 'Components',
    href: '/docs/components/menubar',
  },
  {
    title: 'Message',
    category: 'Components',
    href: '/docs/components/message',
  },
  {
    title: 'Message Scroller',
    category: 'Components',
    href: '/docs/components/message-scroller',
  },
  {
    title: 'Multi-Select',
    category: 'Components',
    href: '/docs/components/multi-select',
  },
  {
    title: 'Pagination',
    category: 'Components',
    href: '/docs/components/pagination',
  },
  {
    title: 'Popover',
    category: 'Components',
    href: '/docs/components/popover',
  },
  {
    title: 'Progress',
    category: 'Components',
    href: '/docs/components/progress',
  },
  {
    title: 'Radio Group',
    category: 'Components',
    href: '/docs/components/radio-group',
  },
  {
    title: 'Scroll Area',
    category: 'Components',
    href: '/docs/components/scroll-area',
  },
  { title: 'Select', category: 'Components', href: '/docs/components/select' },
  {
    title: 'Separator',
    category: 'Components',
    href: '/docs/components/separator',
  },
  {
    title: 'Skeleton',
    category: 'Components',
    href: '/docs/components/skeleton',
  },
  { title: 'Slider', category: 'Components', href: '/docs/components/slider' },
  { title: 'Switch', category: 'Components', href: '/docs/components/switch' },
  { title: 'Table', category: 'Components', href: '/docs/components/table' },
  { title: 'Tabs', category: 'Components', href: '/docs/components/tabs' },
  {
    title: 'Textarea',
    category: 'Components',
    href: '/docs/components/textarea',
  },
  { title: 'Toast', category: 'Components', href: '/docs/components/toast' },
  {
    title: 'Tooltip',
    category: 'Components',
    href: '/docs/components/tooltip',
  },
  {
    title: 'Uploader',
    category: 'Components',
    href: '/docs/components/uploader',
  },
  {
    title: 'Context Menu',
    subtitle: 'Right-Click Desktop Menu',
    category: 'Components',
    href: '/docs/components/context-menu',
  },

  {
    title: 'Button Group',
    subtitle: 'Grouped Action Buttons',
    category: 'Components',
    href: '/docs/components/button-group',
  },
  {
    title: 'Empty State',
    subtitle: 'Zero Data Placeholder',
    category: 'Components',
    href: '/docs/components/empty',
  },
  {
    title: 'Combobox',
    subtitle: 'Searchable Select Dropdown',
    category: 'Components',
    href: '/docs/components/combobox',
  },
  {
    title: 'Date Picker',
    subtitle: 'Calendar Selection',
    category: 'Components',
    href: '/docs/components/date-picker',
  },
  {
    title: 'Date Range Picker',
    subtitle: 'Multi-Month Date Interval Picker',
    category: 'Components',
    href: '/docs/components/date-picker#date-range-picker',
  },
  {
    title: 'Layout Shell',
    subtitle: 'App Sidebar Layout Container',
    category: 'Components',
    href: '/docs/components/layout-shell',
  },
  {
    title: 'Infinite Scroll',
    subtitle: 'Dynamic Virtual List Scrolling',
    category: 'Components',
    href: '/docs/components/infinite-scroll',
  },
  {
    title: 'Collapsible',
    subtitle: 'Expand/Collapse Content Panel',
    category: 'Components',
    href: '/docs/components/collapsible',
  },
  {
    title: 'Checkbox',
    subtitle: 'Toggled Check Selection',
    category: 'Components',
    href: '/docs/components/checkbox',
  },
  {
    title: 'Command',
    subtitle: 'Fast Interactive Command Menu Dialog',
    category: 'Components',
    href: '/docs/components/command',
  },
  {
    title: 'Dialog',
    subtitle: 'Modal Dialog Overlay',
    category: 'Components',
    href: '/docs/components/dialog',
  },
  {
    title: 'Drawer',
    subtitle: 'Bottom/Side Sliding Sheet Container',
    category: 'Components',
    href: '/docs/components/drawer',
  },
  {
    title: 'Form',
    subtitle: 'Form validation and state control integration',
    category: 'Components',
    href: '/docs/components/form',
  },
  {
    title: 'Sheet',
    subtitle: 'Sliding Side Drawer Content Overlay',
    category: 'Components',
    href: '/docs/components/sheet',
  },
  {
    title: 'Dropdown Menu',
    subtitle: 'Contextual Action Options Overlay',
    category: 'Components',
    href: '/docs/components/dropdown-menu',
  },
  {
    title: 'Hover Card',
    subtitle: 'Preview Content On Mouse Hover',
    category: 'Components',
    href: '/docs/components/hover-card',
  },
  {
    title: 'Input',
    subtitle: 'Single-line Form Text Input Field',
    category: 'Components',
    href: '/docs/components/input',
  },
  {
    title: 'Input OTP',
    subtitle: 'One-Time Password Code Verification Field',
    category: 'Components',
    href: '/docs/components/input-otp',
  },
  {
    title: 'Item',
    subtitle: 'List or Menu Item Container Block',
    category: 'Components',
    href: '/docs/components/item',
  },
  {
    title: 'Kbd',
    subtitle: 'Keyboard Shortcut Key Cap Style',
    category: 'Components',
    href: '/docs/components/kbd',
  },
  {
    title: 'Label',
    subtitle: 'Accessible Form Field Associated Text Label',
    category: 'Components',
    href: '/docs/components/label',
  },
  {
    title: 'Marquee',
    subtitle: 'Continuous Horizontal Scrolling Banner',
    category: 'Components',
    href: '/docs/components/marquee',
  },
  {
    title: 'Menubar',
    subtitle: 'Top-level Desktop Style Menu Header Bar',
    category: 'Components',
    href: '/docs/components/menubar',
  },
  {
    title: 'Message',
    subtitle: 'Alert notification toast message text banner',
    category: 'Components',
    href: '/docs/components/message',
  },
  {
    title: 'Message Scroller',
    subtitle: 'Vertically Scrolling Message List Stream',
    category: 'Components',
    href: '/docs/components/message-scroller',
  },
  {
    title: 'Multi-Select',
    subtitle: 'Multiple Options Selector Pill Combobox',
    category: 'Components',
    href: '/docs/components/multi-select',
  },
  {
    title: 'Pagination',
    subtitle: 'Multi-page content navigation selector footer',
    category: 'Components',
    href: '/docs/components/pagination',
  },
  {
    title: 'Popover',
    subtitle: 'Inline interactive contextual information card',
    category: 'Components',
    href: '/docs/components/popover',
  },
  {
    title: 'Progress',
    subtitle: 'Horizontal status progression load bar indicator',
    category: 'Components',
    href: '/docs/components/progress',
  },
  {
    title: 'Radio Group',
    subtitle: 'Mutually exclusive radio selection options set',
    category: 'Components',
    href: '/docs/components/radio-group',
  },
  {
    title: 'Scroll Area',
    subtitle: 'Custom styled overflow scroll content viewport',
    category: 'Components',
    href: '/docs/components/scroll-area',
  },
  {
    title: 'Separator',
    subtitle: 'Visual divider line separating elements content',
    category: 'Components',
    href: '/docs/components/separator',
  },
  {
    title: 'Select',
    subtitle: 'Standard dropdown trigger selection menu options',
    category: 'Components',
    href: '/docs/components/select',
  },
  {
    title: 'Skeleton',
    subtitle: 'Asynchronous load placeholder layout frame card',
    category: 'Components',
    href: '/docs/components/skeleton',
  },
  {
    title: 'Slider',
    subtitle: 'Numeric value range select sliding knob scale',
    category: 'Components',
    href: '/docs/components/slider',
  },
  {
    title: 'Spinner',
    subtitle: 'Circular loading progress animation indicator',
    category: 'Components',
    href: '/docs/components/spinner',
  },
  {
    title: 'Switch',
    subtitle: 'Toggle option status ON/OFF control button',
    category: 'Components',
    href: '/docs/components/switch',
  },
  {
    title: 'Table',
    subtitle: 'Tabular structure data row grid sheet format',
    category: 'Components',
    href: '/docs/components/table',
  },
  {
    title: 'Tabs',
    subtitle: 'Segmented tab content view toggle buttons set',
    category: 'Components',
    href: '/docs/components/tabs',
  },
  {
    title: 'Textarea',
    subtitle: 'Multi-line form text input content text area',
    category: 'Components',
    href: '/docs/components/textarea',
  },
  {
    title: 'Text Glitch',
    subtitle: 'Vibrant cyberpunk style text glitch visual design',
    category: 'Components',
    href: '/docs/components/text-glitch',
  },
  {
    title: 'Theme Switcher',
    subtitle: 'Light/Dark/System appearance mode select button',
    category: 'Components',
    href: '/docs/components/theme-switcher',
  },
  {
    title: 'Toast',
    subtitle: 'Push notification popups overlay message banner',
    category: 'Components',
    href: '/docs/components/toast',
  },
  {
    title: 'Toggle',
    subtitle: 'Two-state selected/unselected action action button',
    category: 'Components',
    href: '/docs/components/toggle',
  },
  {
    title: 'Tooltip',
    subtitle: 'Contextual label note displayed on hover cursor',
    category: 'Components',
    href: '/docs/components/tooltip',
  },
  {
    title: 'Uploader',
    subtitle: 'Drag and drop single/multi files upload zone',
    category: 'Components',
    href: '/docs/components/uploader',
  },
  {
    title: 'Context Menu',
    subtitle: 'Right-click trigger action options selection overlay',
    category: 'Components',
    href: '/docs/components/context-menu',
  },
  {
    title: 'Sidebar',
    subtitle: 'Collapsible application sidebar navigation pane',
    category: 'Components',
    href: '/docs/components/sidebar',
  },
  // Animations
  {
    title: 'Typing Animation',
    subtitle: 'Dynamic Typing Text Effect',
    category: 'Components',
    href: '/docs/animations/typing-animation',
  },
  {
    title: 'Hyper Text',
    subtitle: 'Randomizing Letter Reveal Animation',
    category: 'Components',
    href: '/docs/animations/hyper-text',
  },
  {
    title: 'Word Rotate',
    subtitle: 'Looping Word Rotation Text Effect',
    category: 'Components',
    href: '/docs/animations/word-rotate',
  },
  {
    title: 'Sparkles Text',
    subtitle: 'Glittery Sparkle Accent Text Effect',
    category: 'Components',
    href: '/docs/animations/sparkles-text',
  },
  {
    title: 'Text Reveal',
    subtitle: 'Scroll-triggered Text Opacity Fade Reveal',
    category: 'Components',
    href: '/docs/animations/text-reveal',
  },
  {
    title: 'Aurora Text',
    subtitle: 'Colorful Dynamic Gradient Flow Text Effect',
    category: 'Components',
    href: '/docs/animations/aurora-text',
  },
  {
    title: 'Animated Shiny Text',
    subtitle: 'Metallic Shimmer Gloss Light Effect',
    category: 'Components',
    href: '/docs/animations/animated-shiny-text',
  },
  {
    title: 'Spinning Text',
    subtitle: 'Circular Rotating Text Layout Effect',
    category: 'Components',
    href: '/docs/animations/spinning-text',
  },
  {
    title: 'Scroll Velocity',
    subtitle: 'Text Scroll Speed Dynamic Speed Lines',
    category: 'Components',
    href: '/docs/animations/scroll-based-velocity',
  },
  {
    title: 'Blur Fade',
    subtitle: 'Staggered Blur and Fade Entry Animation',
    category: 'Components',
    href: '/docs/animations/blur-fade',
  },
  {
    title: 'Number Ticker',
    subtitle: 'Dynamic Scrolling Numeric Value counter',
    category: 'Components',
    href: '/docs/animations/number-ticker',
  },
  {
    title: 'Animated Gradient Text',
    subtitle: 'Dynamic Moving Color Hue Text Effect',
    category: 'Components',
    href: '/docs/animations/animated-gradient-text',
  },
  {
    title: 'Comic Text',
    subtitle: 'Bold Retro Pop Art Action Style Text',
    category: 'Components',
    href: '/docs/animations/comic-text',
  },
  {
    title: 'Dia Text Reveal',
    subtitle: 'Slide and Fade Block Letter Reveal',
    category: 'Components',
    href: '/docs/animations/dia-text-reveal',
  },
  {
    title: 'Kinetic Text',
    subtitle: 'Active Kinetic Dynamic Text Deformation',
    category: 'Components',
    href: '/docs/animations/kinetic-text',
  },
  {
    title: 'Line Shadow Text',
    subtitle: 'Continuous Diagonal Line Shadow Typography',
    category: 'Components',
    href: '/docs/animations/line-shadow-text',
  },
  {
    title: 'Morphing Text',
    subtitle: 'Smooth Word Metamorphosis Transitions',
    category: 'Components',
    href: '/docs/animations/morphing-text',
  },
  {
    title: 'Text 3D Flip',
    subtitle: '3D Axis Rotation Text Flip Transitions',
    category: 'Components',
    href: '/docs/animations/text-3d-flip',
  },
  {
    title: 'Text Animate',
    subtitle: 'Configurable Motion CSS/JS Letter Transitions',
    category: 'Components',
    href: '/docs/animations/text-animate',
  },
  {
    title: 'Video Text',
    subtitle: 'Background Video Text Mask Clipping Effect',
    category: 'Components',
    href: '/docs/animations/video-text',
  },
  // Backgrounds
  {
    title: 'Light Tunnel',
    subtitle: 'Perspective Speed Lines Warp Shader Background',
    category: 'Components',
    href: '/docs/backgrounds/light-tunnel',
  },
  {
    title: 'Web Threads',
    subtitle: 'Abstract Interactive Nodes Constellation Web',
    category: 'Components',
    href: '/docs/backgrounds/web-threads',
  },
  {
    title: 'Sliced Waves',
    subtitle: 'Layered Liquid Moving Sine Wave Ribbon Background',
    category: 'Components',
    href: '/docs/backgrounds/sliced-waves',
  },
  {
    title: 'Scanner',
    subtitle: 'Moving Light Grid Line Sweep Radar Effect',
    category: 'Components',
    href: '/docs/backgrounds/scanner',
  },
  {
    title: 'Lightfall',
    subtitle: 'Matrix Style Cascading Vertical Beam Rain',
    category: 'Components',
    href: '/docs/backgrounds/lightfall',
  },
]

export function SearchDialog() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const router = useRouter()
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [open])

  const filteredItems = React.useMemo(() => {
    if (!query.trim()) return SEARCH_ITEMS.slice(0, 6)
    const terms = query.toLowerCase().split(/\s+/)
    return SEARCH_ITEMS.filter((item) =>
      terms.every(
        (term) =>
          item.title.toLowerCase().includes(term) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(term)) ||
          item.category.toLowerCase().includes(term),
      ),
    )
  }, [query])

  const handleSelect = (href: string) => {
    setOpen(false)
    setQuery('')
    router.push(href)
  }

  const docsResults = filteredItems.filter(
    (i) => i.category === 'Documentation',
  )
  const componentResults = filteredItems.filter(
    (i) => i.category === 'Components',
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="hidden sm:flex items-center gap-2 h-9 w-60 rounded-lg border border-input bg-background/50 px-3 text-sm text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground transition-all duration-200 cursor-pointer">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground/55" />
          <span className="flex-1 text-left text-xs text-muted-foreground/75">
            Search documentation...
          </span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[9px] font-medium text-muted-foreground opacity-100 shadow-sm">
            <span>⌘</span>K
          </kbd>
        </button>
      </DialogTrigger>

      <DialogContent className="!p-0 overflow-hidden w-[calc(100%-2rem)] sm:w-full sm:max-w-xl border-border bg-background shadow-2xl !top-[12%] !translate-y-0 transition-all duration-200">
        <div className="flex items-center border-b border-border/80 bg-muted/20 px-4 py-3.5">
          <Search className="mr-3 h-4.5 w-4.5 shrink-0 text-muted-foreground/60" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search pages or components..."
            className="flex-1 bg-transparent py-1 text-base sm:text-sm outline-none placeholder:text-muted-foreground/55 text-foreground"
          />
        </div>

        <div className="max-h-[350px] overflow-y-auto p-2 space-y-4 no-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No results found for &ldquo;
              <span className="font-semibold text-foreground">{query}</span>
              &rdquo;
            </div>
          ) : (
            <>
              {docsResults.length > 0 && (
                <div className="space-y-1">
                  <div className="px-3 py-1 text-[10px] font-bold text-muted-foreground/80 tracking-wider uppercase select-none">
                    Documentation
                  </div>
                  <div className="space-y-0.5">
                    {docsResults.map((item, idx) => (
                      <button
                        key={`${item.href}-${idx}`}
                        onClick={() => handleSelect(item.href)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-foreground hover:bg-secondary/70 dark:hover:bg-secondary/20 rounded-md transition-all duration-150 text-left cursor-pointer group hover:pl-4"
                      >
                        <div className="flex items-center gap-2.5">
                          <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            {item.subtitle && (
                              <span className="text-[10px] text-muted-foreground/80">
                                {item.subtitle}
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all text-muted-foreground group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {componentResults.length > 0 && (
                <div className="space-y-1">
                  <div className="px-3 py-1 text-[10px] font-bold text-muted-foreground/80 tracking-wider uppercase select-none">
                    Components
                  </div>
                  <div className="space-y-0.5">
                    {componentResults.map((item, idx) => (
                      <button
                        key={`${item.href}-${idx}`}
                        onClick={() => handleSelect(item.href)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-foreground hover:bg-secondary/70 dark:hover:bg-secondary/20 rounded-md transition-all duration-150 text-left cursor-pointer group hover:pl-4"
                      >
                        <div className="flex items-center gap-2.5">
                          <Component className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            {item.subtitle && (
                              <span className="text-[10px] text-muted-foreground/80">
                                {item.subtitle}
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all text-muted-foreground group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border/80 px-4 py-2.5 bg-muted/20 text-[10px] text-muted-foreground select-none">
          <div>
            Search matching{' '}
            <span className="font-semibold text-foreground">
              {SEARCH_ITEMS.length}
            </span>{' '}
            index sources
          </div>
          <div className="flex items-center gap-1">
            Press{' '}
            <kbd className="border rounded bg-background px-1 py-0.5 font-mono text-[9px] shadow-sm">
              Esc
            </kbd>{' '}
            to exit
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
