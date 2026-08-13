'use client'

import React, { useState } from 'react'
import { Toggle } from 'vibe-ui'
import {
  Heart,
  Bold,
  Italic,
  VolumeX,
  Volume2,
  Bookmark,
  Pin,
  Star,
  Power,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Bell,
  BellOff,
  Sun,
  Moon,
  Mic,
  MicOff,
  Wifi,
  WifiOff,
  Play,
  Pause,
  Shield,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Flame,
  HeartCrack,
  Sparkles,
  Trash2,
  HelpCircle,
} from 'lucide-react'

// 1. Heart Like (Main Preview)
export function ToggleLike() {
  const [pressed, setPressed] = useState(false)
  const HeartIcon = Heart as any

  return (
    <Toggle pressed={pressed} onPressedChange={setPressed} variant="glow">
      <HeartIcon
        className={`h-4 w-4 transition-all ${pressed ? 'fill-primary text-primary scale-110' : 'text-zinc-400'}`}
      />
      <span className="ml-2 text-xs">{pressed ? 'Liked' : 'Like'}</span>
    </Toggle>
  )
}

// 2. Theme Variants Comparison Grid
export function ToggleVariantsDemo() {
  const BoldIcon = Bold as any
  const ItalicIcon = Italic as any

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center p-0">
      <Toggle variant="default">
        <BoldIcon className="h-4 w-4" />
      </Toggle>
      <Toggle variant="glass">
        <ItalicIcon className="h-4 w-4" />
      </Toggle>
      <Toggle variant="retro">
        <BoldIcon className="h-4 w-4" />
      </Toggle>
      <Toggle variant="glow">
        <ItalicIcon className="h-4 w-4" />
      </Toggle>
      <Toggle variant="cyberpunk">
        <span className="font-mono text-xs">EXE</span>
      </Toggle>
    </div>
  )
}

// 3. Icon-Only Grid Showcase (4 Rows)
export function ToggleIconShowcase() {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [muted, setMuted] = useState(false)
  const [pinned, setPinned] = useState(false)
  const [starred, setStarred] = useState(false)

  const [locked, setLocked] = useState(false)
  const [visible, setVisible] = useState(true)
  const [active, setActive] = useState(false)
  const [notified, setNotified] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const [micActive, setMicActive] = useState(false)
  const [wifiActive, setWifiActive] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [shieldActive, setShieldActive] = useState(true)
  const [statusChecked, setStatusChecked] = useState(false)

  const [flameActive, setFlameActive] = useState(false)
  const [heartBroken, setHeartBroken] = useState(false)
  const [sparkleActive, setSparkleActive] = useState(false)
  const [trashActive, setTrashActive] = useState(false)
  const [helpActive, setHelpActive] = useState(false)

  const HeartIcon = Heart as any
  const BookmarkIcon = Bookmark as any
  const VolX = VolumeX as any
  const Vol2 = Volume2 as any
  const PinIcon = Pin as any
  const StarIcon = Star as any
  const PowerIcon = Power as any
  const LockIcon = Lock as any
  const UnlockIcon = Unlock as any
  const EyeIcon = Eye as any
  const EyeOffIcon = EyeOff as any
  const BellIcon = Bell as any
  const BellOffIcon = BellOff as any
  const SunIcon = Sun as any
  const MoonIcon = Moon as any

  const MicIcon = Mic as any
  const MicOffIcon = MicOff as any
  const WifiIcon = Wifi as any
  const WifiOffIcon = WifiOff as any
  const PlayIcon = Play as any
  const PauseIcon = Pause as any
  const ShieldIcon = Shield as any
  const ShieldAlertIcon = ShieldAlert as any
  const CheckCircleIcon = CheckCircle2 as any
  const XCircleIcon = XCircle as any

  const FlameIcon = Flame as any
  const HeartCrackIcon = HeartCrack as any
  const SparklesIcon = Sparkles as any
  const TrashIcon = Trash2 as any
  const HelpIcon = HelpCircle as any

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-0 w-full">
      {/* Row 1 */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {/* Heart */}
        <Toggle
          pressed={liked}
          onPressedChange={setLiked}
          variant="glow"
          size="lg"
          className="rounded-full h-11 w-11 p-0 flex items-center justify-center"
        >
          <HeartIcon
            className={`h-5 w-5 transition-transform duration-200 ${liked ? 'fill-red-500 text-red-500 scale-110' : 'text-zinc-400'}`}
          />
        </Toggle>

        {/* Save/Bookmark */}
        <Toggle
          pressed={saved}
          onPressedChange={setSaved}
          variant="glass"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          <BookmarkIcon
            className={`h-5 w-5 transition-transform duration-200 ${saved ? 'fill-primary text-primary scale-110' : 'text-zinc-400'}`}
          />
        </Toggle>

        {/* Mute */}
        <Toggle
          pressed={muted}
          onPressedChange={setMuted}
          variant="glow"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {muted ? (
            <VolX className="h-5 w-5 text-red-400" />
          ) : (
            <Vol2 className="h-5 w-5 text-zinc-400" />
          )}
        </Toggle>

        {/* Pin */}
        <Toggle
          pressed={pinned}
          onPressedChange={setPinned}
          variant="retro"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          <PinIcon
            className={`h-5 w-5 transition-transform duration-200 ${pinned ? 'rotate-45' : 'text-muted-foreground/60'}`}
          />
        </Toggle>

        {/* Star */}
        <Toggle
          pressed={starred}
          onPressedChange={setStarred}
          variant="glow"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          <StarIcon
            className={`h-5 w-5 transition-transform duration-200 ${starred ? 'fill-amber-400 text-amber-400 scale-110' : 'text-zinc-400'}`}
          />
        </Toggle>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {/* Lock/Unlock */}
        <Toggle
          pressed={locked}
          onPressedChange={setLocked}
          variant="cyberpunk"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {locked ? (
            <LockIcon className="h-5 w-5 text-emerald-400" />
          ) : (
            <UnlockIcon className="h-5 w-5 text-zinc-500" />
          )}
        </Toggle>

        {/* Eye/EyeOff */}
        <Toggle
          pressed={visible}
          onPressedChange={setVisible}
          variant="glass"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {visible ? (
            <EyeIcon className="h-5 w-5 text-emerald-400" />
          ) : (
            <EyeOffIcon className="h-5 w-5 text-zinc-500" />
          )}
        </Toggle>

        {/* Power Status */}
        <Toggle
          pressed={active}
          onPressedChange={setActive}
          variant="retro"
          size="lg"
          className="rounded-full h-11 w-11 p-0 flex items-center justify-center"
        >
          <PowerIcon
            className={`h-5 w-5 transition-transform duration-200 ${active ? 'text-emerald-500 scale-110' : 'text-muted-foreground'}`}
          />
        </Toggle>

        {/* Bell/BellOff */}
        <Toggle
          pressed={notified}
          onPressedChange={setNotified}
          variant="glow"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {notified ? (
            <BellIcon className="h-5 w-5 text-purple-400 animate-bounce" />
          ) : (
            <BellOffIcon className="h-5 w-5 text-zinc-500" />
          )}
        </Toggle>

        {/* Sun/Moon */}
        <Toggle
          pressed={darkMode}
          onPressedChange={setDarkMode}
          variant="glass"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {darkMode ? (
            <MoonIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <SunIcon className="h-5 w-5 text-zinc-400" />
          )}
        </Toggle>
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {/* Mic/MicOff */}
        <Toggle
          pressed={micActive}
          onPressedChange={setMicActive}
          variant="glow"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {micActive ? (
            <MicIcon className="h-5 w-5 text-purple-400" />
          ) : (
            <MicOffIcon className="h-5 w-5 text-zinc-500" />
          )}
        </Toggle>

        {/* Wifi/WifiOff */}
        <Toggle
          pressed={wifiActive}
          onPressedChange={setWifiActive}
          variant="cyberpunk"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {wifiActive ? (
            <WifiIcon className="h-5 w-5 text-emerald-400" />
          ) : (
            <WifiOffIcon className="h-5 w-5 text-red-500" />
          )}
        </Toggle>

        {/* Play/Pause */}
        <Toggle
          pressed={isPlaying}
          onPressedChange={setIsPlaying}
          variant="retro"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {isPlaying ? (
            <PauseIcon className="h-5 w-5 transition-transform duration-200 scale-110" />
          ) : (
            <PlayIcon className="h-5 w-5 transition-transform duration-200" />
          )}
        </Toggle>

        {/* Shield/ShieldAlert */}
        <Toggle
          pressed={shieldActive}
          onPressedChange={setShieldActive}
          variant="glass"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          {shieldActive ? (
            <ShieldIcon className="h-5 w-5 text-emerald-400" />
          ) : (
            <ShieldAlertIcon className="h-5 w-5 text-red-500" />
          )}
        </Toggle>

        {/* CheckCircle2/XCircle */}
        <Toggle
          pressed={statusChecked}
          onPressedChange={setStatusChecked}
          variant="glow"
          size="lg"
          className="rounded-full h-11 w-11 p-0 flex items-center justify-center"
        >
          {statusChecked ? (
            <CheckCircleIcon className="h-5 w-5 text-emerald-400" />
          ) : (
            <XCircleIcon className="h-5 w-5 text-zinc-500" />
          )}
        </Toggle>
      </div>

      {/* Row 4 */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {/* Flame */}
        <Toggle
          pressed={flameActive}
          onPressedChange={setFlameActive}
          variant="glow"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          <FlameIcon
            className={`h-5 w-5 transition-transform duration-200 ${flameActive ? 'text-orange-500 fill-orange-500 scale-110' : 'text-zinc-400'}`}
          />
        </Toggle>

        {/* HeartCrack */}
        <Toggle
          pressed={heartBroken}
          onPressedChange={setHeartBroken}
          variant="glow"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          <HeartCrackIcon
            className={`h-5 w-5 transition-transform duration-200 ${heartBroken ? 'text-red-500 scale-110' : 'text-zinc-400'}`}
          />
        </Toggle>

        {/* Sparkles */}
        <Toggle
          pressed={sparkleActive}
          onPressedChange={setSparkleActive}
          variant="glass"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          <SparklesIcon
            className={`h-5 w-5 transition-transform duration-200 ${sparkleActive ? 'text-purple-400 fill-purple-400 scale-110' : 'text-zinc-400'}`}
          />
        </Toggle>

        {/* Trash */}
        <Toggle
          pressed={trashActive}
          onPressedChange={setTrashActive}
          variant="retro"
          size="lg"
          className="h-11 w-11 p-0 flex items-center justify-center"
        >
          <TrashIcon
            className={`h-5 w-5 transition-transform duration-200 ${trashActive ? 'text-red-500 scale-110' : 'text-muted-foreground'}`}
          />
        </Toggle>

        {/* Help */}
        <Toggle
          pressed={helpActive}
          onPressedChange={setHelpActive}
          variant="glass"
          size="lg"
          className="rounded-full h-11 w-11 p-0 flex items-center justify-center"
        >
          <HelpIcon
            className={`h-5 w-5 transition-transform duration-200 ${helpActive ? 'text-blue-400 scale-110' : 'text-zinc-500'}`}
          />
        </Toggle>
      </div>
    </div>
  )
}
