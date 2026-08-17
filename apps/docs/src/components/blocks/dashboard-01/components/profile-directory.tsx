'use client'

import React, { useState } from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Mail,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  ShieldCheck,
  Settings,
  ExternalLink,
  Send,
  Share2,
  Globe,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function ProfileDirectory() {
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const profileUrl = 'https://github.com/vibeui'

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6 w-full text-left">
      {/* Cover and Profile Header Card */}
      <Card className="bg-muted/40 border-border overflow-hidden p-0 relative">
        {/* Modern Sleek Cover Background Grid */}
        <div className="h-32 w-full bg-gradient-to-r from-muted-foreground/10 via-muted/50 to-muted-foreground/10 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>

        {/* Profile Avatar & Actions Stack */}
        <div className="px-6 pb-6 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 mb-4">
            <Avatar className="h-24 w-24 border-4 border-background shadow-xl">
              <AvatarImage src="https://github.com/vibeui.png" alt="vibe ui" />
              <AvatarFallback className="bg-muted text-foreground font-bold text-2xl">
                VU
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1.5 w-auto">
              <Button
                variant="outline"
                className="h-8 text-[11px] sm:text-xs bg-background border-border text-foreground hover:bg-muted cursor-pointer flex items-center justify-center gap-1 px-2 sm:px-3"
                onClick={() => alert('Settings Panel Triggered')}
              >
                <Settings className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden sm:inline">Account Settings</span>
                <span className="inline sm:hidden">Settings</span>
              </Button>
              <Button
                className="h-8 text-[11px] sm:text-xs bg-primary text-primary-foreground hover:bg-primary/95 cursor-pointer flex items-center justify-center gap-1 px-2 sm:px-3"
                onClick={() => setIsShareOpen(true)}
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden sm:inline">Share Profile</span>
                <span className="inline sm:hidden">Share</span>
              </Button>
            </div>
          </div>

          {/* User Bio Details */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-black text-foreground">vibe ui</h2>
              <Badge
                variant="outline"
                className="text-[9px] font-mono py-0.5 px-2 bg-foreground text-background border-0 font-bold"
              >
                CORE REVIEWER
              </Badge>
              <Badge
                variant="secondary"
                className="text-[9px] font-mono py-0.5 px-2 border border-border/40"
              >
                Active Contributor
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
              Senior Frontend Architect & Developer Advocate. Specializing in
              responsive component engineering, custom compilation pipelines,
              and elegant user experience paradigms.
            </p>
          </div>
        </div>
      </Card>

      {/* Profile Details and Stats split layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Info Column */}
        <Card className="bg-muted/40 border-border p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>m@example.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <ExternalLink className="h-4 w-4 shrink-0" />
                <a
                  href="https://github.com/vibeui"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground underline transition-colors"
                >
                  github.com/vibeui
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0" />
                <span>Joined August 2026</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40 space-y-2">
            <span className="text-[10px] text-muted-foreground block font-mono uppercase tracking-wider">
              VERIFIED ROLE
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-foreground" />
              <span>Admin Account Host</span>
            </div>
          </div>
        </Card>

        {/* Stats Overview */}
        <Card className="md:col-span-2 bg-muted/40 border-border p-5 space-y-5">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground">
            Contribution Activity Overview
          </h3>

          <div className="grid grid-cols-2 gap-4 py-1 border-b border-border/40 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] text-muted-foreground block font-mono uppercase tracking-wider">
                COMMITS AUTHORED
              </span>
              <span className="text-2xl font-black text-foreground">1,248</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-muted-foreground block font-mono uppercase tracking-wider">
                COMPONENTS DESIGNED
              </span>
              <span className="text-2xl font-black text-foreground">42</span>
            </div>
          </div>

          {/* Code Quality indices progress trackers */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">
                  UI Component Coverage
                </span>
                <span className="font-bold text-foreground">98%</span>
              </div>
              <Progress value={98} className="h-2 min-w-0" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">
                  Documentation Quality Index
                </span>
                <span className="font-bold text-foreground">95%</span>
              </div>
              <Progress value={95} className="h-2 min-w-0" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">
                  Release Pipeline Success
                </span>
                <span className="font-bold text-foreground">100%</span>
              </div>
              <Progress value={100} className="h-2 min-w-0" />
            </div>
          </div>
        </Card>
      </div>

      {/* Accomplishments Section */}
      <Card className="bg-muted/40 border-border p-5 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Workspace Accomplishments & Badges
          </h3>
          <p className="text-[11px] text-muted-foreground">
            Developer credentials and certified contributions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="p-4 bg-muted/60 border border-border/80 rounded-lg space-y-2 flex flex-col justify-between">
            <Award className="h-5 w-5 text-foreground shrink-0" />
            <div className="space-y-1 text-left">
              <span className="text-xs font-bold text-foreground block">
                Founding Member
              </span>
              <span className="text-[10px] text-muted-foreground block">
                Contributed to initial monorepo workspace release tags.
              </span>
            </div>
          </div>
          <div className="p-4 bg-muted/60 border border-border/80 rounded-lg space-y-2 flex flex-col justify-between">
            <Award className="h-5 w-5 text-foreground shrink-0" />
            <div className="space-y-1 text-left">
              <span className="text-xs font-bold text-foreground block">
                Registry Creator
              </span>
              <span className="text-[10px] text-muted-foreground block">
                Designed the CLI template compiler bundle script.
              </span>
            </div>
          </div>
          <div className="p-4 bg-muted/60 border border-border/80 rounded-lg space-y-2 flex flex-col justify-between">
            <Award className="h-5 w-5 text-foreground shrink-0" />
            <div className="space-y-1 text-left">
              <span className="text-xs font-bold text-foreground block">
                Clean Architect
              </span>
              <span className="text-[10px] text-muted-foreground block">
                Refactored components to standard high-contrast variants.
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Share Dialog */}
      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogContent className="sm:max-w-md bg-background border-border text-foreground">
          <DialogHeader>
            <DialogTitle className="text-sm font-bold text-foreground">
              Share Profile
            </DialogTitle>
            <DialogDescription className="text-[11px] text-muted-foreground">
              Copy the profile link or share it directly to your social
              networks.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 pt-2">
            <div className="grid flex-1 gap-2">
              <label htmlFor="link" className="sr-only">
                Link
              </label>
              <input
                id="link"
                defaultValue={profileUrl}
                readOnly
                className="h-8 px-3 rounded-md bg-muted/40 border border-border text-[11px] text-foreground focus:outline-none w-full font-mono"
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-1.5 cursor-pointer"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </Button>
          </div>
          <div className="flex items-center justify-around py-4 border-t border-border/40 mt-4">
            <button
              onClick={() => alert('Sharing to Telegram...')}
              className="flex flex-col items-center gap-1 hover:text-foreground text-muted-foreground transition-colors cursor-pointer border-0 bg-transparent"
            >
              <div className="size-8 rounded-full border border-border bg-muted/30 flex items-center justify-center">
                <Send className="h-4 w-4" />
              </div>
              <span className="text-[9px] font-medium font-sans">Telegram</span>
            </button>
            <button
              onClick={() => alert('Sharing via Direct Link...')}
              className="flex flex-col items-center gap-1 hover:text-foreground text-muted-foreground transition-colors cursor-pointer border-0 bg-transparent"
            >
              <div className="size-8 rounded-full border border-border bg-muted/30 flex items-center justify-center">
                <Share2 className="h-4 w-4" />
              </div>
              <span className="text-[9px] font-medium font-sans">
                Direct Share
              </span>
            </button>
            <button
              onClick={() => alert('Sharing via Email...')}
              className="flex flex-col items-center gap-1 hover:text-foreground text-muted-foreground transition-colors cursor-pointer border-0 bg-transparent"
            >
              <div className="size-8 rounded-full border border-border bg-muted/30 flex items-center justify-center">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-[9px] font-medium font-sans">Email</span>
            </button>
            <button
              onClick={() => alert('Sharing to Slack...')}
              className="flex flex-col items-center gap-1 hover:text-foreground text-muted-foreground transition-colors cursor-pointer border-0 bg-transparent"
            >
              <div className="size-8 rounded-full border border-border bg-muted/30 flex items-center justify-center">
                <MessageSquare className="h-4 w-4" />
              </div>
              <span className="text-[9px] font-medium font-sans">Slack</span>
            </button>
            <button
              onClick={() => alert('Sharing to Web...')}
              className="flex flex-col items-center gap-1 hover:text-foreground text-muted-foreground transition-colors cursor-pointer border-0 bg-transparent"
            >
              <div className="size-8 rounded-full border border-border bg-muted/30 flex items-center justify-center">
                <Globe className="h-4 w-4" />
              </div>
              <span className="text-[9px] font-medium font-sans">Website</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
