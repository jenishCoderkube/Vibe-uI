'use client'

import React, { useState } from 'react'
import { Toggle } from 'vibe-ui'
import {
  Heart,
  Bold,
  Italic,
  Code,
  VolumeX,
  Volume2,
  Bookmark,
  Pin,
  LayoutGrid,
  List,
  Star,
  User,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Power,
} from 'lucide-react'

// Helper Frame
function ToggleDemoCard({
  title,
  desc,
  children,
}: {
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-[350px] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 p-4 shadow-xl text-left text-white select-none">
      <div className="mb-3 space-y-0.5">
        <h4 className="text-xs font-bold uppercase tracking-wider">{title}</h4>
        <p className="text-[10px] text-muted-foreground">{desc}</p>
      </div>
      {children}
    </div>
  )
}

// 1. Heart Like
export function ToggleLike() {
  const [pressed, setPressed] = useState(false)
  const HeartIcon = Heart as any

  return (
    <ToggleDemoCard
      title="Active Like Option"
      desc="Press to change liked heart status"
    >
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle pressed={pressed} onPressedChange={setPressed} variant="glow">
          <HeartIcon
            className={`h-4 w-4 transition-all ${pressed ? 'fill-primary text-primary scale-110' : 'text-zinc-400'}`}
          />
          <span className="ml-2 text-xs">{pressed ? 'Liked' : 'Like'}</span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 2. Editor Toolbar
export function ToggleToolbar() {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [code, setCode] = useState(false)
  const BoldIcon = Bold as any
  const ItalicIcon = Italic as any
  const CodeIcon = Code as any

  return (
    <ToggleDemoCard
      title="Text Formatting"
      desc="Toolbar select items matching actions"
    >
      <div className="flex gap-2 p-3 bg-zinc-900/40 rounded-lg justify-center">
        <Toggle
          pressed={bold}
          onPressedChange={setBold}
          variant="glass"
          size="sm"
        >
          <BoldIcon className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={italic}
          onPressedChange={setItalic}
          variant="glass"
          size="sm"
        >
          <ItalicIcon className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={code}
          onPressedChange={setCode}
          variant="glass"
          size="sm"
        >
          <CodeIcon className="h-4 w-4" />
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 3. Audio Mute
export function ToggleMute() {
  const [muted, setMuted] = useState(false)
  const VolX = VolumeX as any
  const Vol2 = Volume2 as any

  return (
    <ToggleDemoCard title="Sound Control" desc="Mute and unmute audio feeds">
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle pressed={muted} onPressedChange={setMuted} variant="glow">
          {muted ? (
            <VolX className="h-4 w-4 text-primary" />
          ) : (
            <Vol2 className="h-4 w-4 text-zinc-400" />
          )}
          <span className="ml-2 text-xs">{muted ? 'Muted' : 'Playing'}</span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 4. Bookmark
export function ToggleBookmark() {
  const [saved, setSaved] = useState(false)
  const BookmarkIcon = Bookmark as any

  return (
    <ToggleDemoCard title="Save Progress" desc="Bookmark directory logs">
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle pressed={saved} onPressedChange={setSaved} variant="glass">
          <BookmarkIcon
            className={`h-4 w-4 ${saved ? 'fill-white text-white' : 'text-zinc-400'}`}
          />
          <span className="ml-2 text-xs">{saved ? 'Saved' : 'Save Item'}</span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 5. Pin
export function TogglePin() {
  const [pinned, setPinned] = useState(false)
  const PinIcon = Pin as any

  return (
    <ToggleDemoCard title="Pin Topic" desc="Lock thread panel item to the top">
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle pressed={pinned} onPressedChange={setPinned} variant="glow">
          <PinIcon
            className={`h-4 w-4 ${pinned ? 'rotate-45 text-primary' : 'text-zinc-400'}`}
          />
          <span className="ml-2 text-xs">
            {pinned ? 'Pinned' : 'Pin Thread'}
          </span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 6. Glitch Overrides
export function ToggleCyberGlitch() {
  const [glitch, setGlitch] = useState(true)

  return (
    <ToggleDemoCard
      title="Cyberpunk Presets"
      desc="Glitch scanline mode selector"
    >
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle
          pressed={glitch}
          onPressedChange={setGlitch}
          variant="cyberpunk"
        >
          <span className="font-mono text-xs">
            {glitch ? 'GLITCH: ON' : 'GLITCH: OFF'}
          </span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 7. Layout View
export function ToggleGridList() {
  const [isGrid, setIsGrid] = useState(true)
  const Grid = LayoutGrid as any
  const ListIcon = List as any

  return (
    <ToggleDemoCard
      title="Grid vs List"
      desc="Control product display patterns"
    >
      <div className="flex gap-2 justify-center p-3 bg-zinc-900/40 rounded-lg">
        <Toggle
          pressed={isGrid}
          onPressedChange={() => setIsGrid(true)}
          variant="glass"
        >
          <Grid className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={!isGrid}
          onPressedChange={() => setIsGrid(false)}
          variant="glass"
        >
          <ListIcon className="h-4 w-4" />
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 8. Neobrutalist Selection
export function ToggleBrutalistGrid() {
  const [active, setActive] = useState(false)

  return (
    <ToggleDemoCard
      title="Retro Options"
      desc="Thick outline flat option panel"
    >
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle pressed={active} onPressedChange={setActive} variant="retro">
          <span className="font-bold text-xs uppercase">Choose Variant</span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 9. Star Rating
export function ToggleStar() {
  const [fav, setFav] = useState(false)
  const StarIcon = Star as any

  return (
    <ToggleDemoCard
      title="Star Favorite"
      desc="Mark components directory as starred"
    >
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle pressed={fav} onPressedChange={setFav} variant="glow">
          <StarIcon
            className={`h-4 w-4 ${fav ? 'fill-amber-400 text-amber-400' : 'text-zinc-400'}`}
          />
          <span className="ml-2 text-xs">{fav ? 'Starred' : 'Favorite'}</span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

// 10. Active status
export function ToggleActiveUser() {
  const [online, setOnline] = useState(true)
  const UserIcon = User as any

  return (
    <ToggleDemoCard
      title="Developer Status"
      desc="Show active availability settings"
    >
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Toggle pressed={online} onPressedChange={setOnline} variant="glass">
          <UserIcon className="h-4 w-4" />
          <span className="ml-2 text-xs">{online ? 'Online' : 'Away'}</span>
        </Toggle>
      </div>
    </ToggleDemoCard>
  )
}

export function ToggleVariantsDemo() {
  const BoldIcon = Bold as any
  const ItalicIcon = Italic as any

  return (
    <div className="w-full flex flex-wrap gap-4 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5">
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

export function ToggleIconShowcase() {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [muted, setMuted] = useState(false)
  const [pinned, setPinned] = useState(false)
  const [starred, setStarred] = useState(false)
  const [visible, setVisible] = useState(true)
  const [locked, setLocked] = useState(false)
  const [active, setActive] = useState(false)

  const HeartIcon = Heart as any
  const BookmarkIcon = Bookmark as any
  const VolX = VolumeX as any
  const Vol2 = Volume2 as any
  const PinIcon = Pin as any
  const StarIcon = Star as any
  const EyeIcon = Eye as any
  const EyeOffIcon = EyeOff as any
  const LockIcon = Lock as any
  const UnlockIcon = Unlock as any
  const PowerIcon = Power as any

  return (
    <div className="w-full flex flex-wrap gap-4 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5">
      {/* 1. Heart Only */}
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

      {/* 2. Save/Bookmark Only */}
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

      {/* 3. Mute Only */}
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

      {/* 5. Star Only */}
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

      {/* 6. Eye Visibility Only */}
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

      {/* 7. Lock Only */}
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

      {/* 8. Power Status */}
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
    </div>
  )
}
