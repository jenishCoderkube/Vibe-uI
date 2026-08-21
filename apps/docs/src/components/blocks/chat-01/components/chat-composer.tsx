'use client'

import React, { useRef, useState, useEffect } from 'react'
import {
  Plus,
  Paperclip,
  Library,
  Image as ImageIcon,
  Globe,
  ShoppingBag,
  Sparkles,
  Search,
  Key,
  Palette,
  Mic,
  Brain,
  ChevronDown,
  ArrowUp,
  LineChart,
  FileText,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

interface AttachedFile {
  id: string
  name: string
  type: 'image' | 'document'
  size: string
  url?: string
}

interface ChatComposerProps {
  input: string
  setInput: (value: string) => void
  onSend: (text: string, attachments: AttachedFile[]) => void
  isGenerating: boolean
  onStop: () => void
  selectedModel: string
}

export function ChatComposer({
  input,
  setInput,
  onSend,
  isGenerating,
  onStop,
  selectedModel,
}: ChatComposerProps) {
  const [attachments, setAttachments] = useState<AttachedFile[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [isThinkActive, setIsThinkActive] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Reset textarea height when input is cleared externally
  useEffect(() => {
    if (!input && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }, [input])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    
    // Custom height resizing
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handleSend = () => {
    if (!input.trim() && attachments.length === 0) return
    onSend(input, attachments)
    setInput('')
    setAttachments([])
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const newAttachments: AttachedFile[] = Array.from(files).map((file, idx) => {
      const type = file.type.startsWith('image/') ? 'image' : 'document'
      const url = type === 'image' ? URL.createObjectURL(file) : undefined
      const sizeKB = Math.round(file.size / 1024)
      const sizeStr = sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${sizeKB} KB`

      return {
        id: `attach-${Date.now()}-${idx}`,
        name: file.name,
        type,
        size: sizeStr,
        url,
      }
    })

    setAttachments((prev) => [...prev, ...newAttachments])
    e.target.value = ''
  }

  const removeAttachment = (id: string) => {
    setAttachments((prev) => {
      const target = prev.find((a) => a.id === id)
      if (target?.url) {
        URL.revokeObjectURL(target.url)
      }
      return prev.filter((a) => a.id !== id)
    })
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      setTimeout(() => {
        setInput(input ? input + ' ' + 'Show me a layout preview of a data dashboard component.' : 'Show me a layout preview of a data dashboard component.')
        setIsRecording(false)
      }, 3000)
    }
  }

  const hasContent = input.trim().length > 0 || attachments.length > 0

  return (
    <div className="w-full bg-[#f4f4f4] dark:bg-[#232323] border border-zinc-200 dark:border-zinc-800 rounded-[26px] p-2 flex flex-col gap-1 focus-within:ring-0 transition-all text-left shadow-xs relative">
      
      {/* File Upload Attachment Previews Row */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 px-3 pb-2 border-b border-zinc-200/50 dark:border-zinc-800/50 max-h-40 overflow-y-auto mb-2 select-none">
          {attachments.map((file) => (
            <div
              key={file.id}
              className="relative flex items-center gap-2 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#e4e4e4] dark:bg-zinc-800 group shrink-0"
            >
              {file.type === 'image' ? (
                <div className="h-8 w-8 rounded overflow-hidden bg-muted">
                  <img src={file.url} alt={file.name} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="h-8 w-8 rounded bg-zinc-300 dark:bg-zinc-700 flex items-center justify-center">
                  <FileText className="h-4.5 w-4.5 text-foreground" />
                </div>
              )}
              <div className="text-left max-w-[100px] select-none pr-1">
                <p className="text-[10px] font-medium text-foreground truncate">{file.name}</p>
                <p className="text-[8px] text-zinc-500">{file.size}</p>
              </div>
              <button
                onClick={() => removeAttachment(file.id)}
                className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-[#ececec] dark:bg-zinc-700 hover:bg-destructive rounded-full border border-zinc-200 dark:border-zinc-800 hover:text-white flex items-center justify-center text-[9px] transition-colors cursor-pointer"
                aria-label="Remove attachment"
              >
                <X className="h-2.5 w-2.5 text-zinc-300" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Primary Input Composer Wrapper */}
      <div className="relative w-full flex items-center min-h-[38px]">
        
        {/* Plus Button on left with Controlled Dropdown Menu */}
        <div className="absolute left-1.5 bottom-0.5 z-10 select-none">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8.5 w-8.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 cursor-pointer shrink-0"
                aria-label="More plugins"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-[320px] bg-white dark:bg-[#171717] border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-200 p-2 rounded-2xl shadow-xl z-50 max-h-[420px] overflow-y-auto" 
              align="start"
              alignOffset={0}
              sideOffset={8}
            >
              <DropdownMenuItem onClick={() => { triggerFileUpload(); setIsDropdownOpen(false); }} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <Paperclip className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Add photos & files</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Upload from computer</span>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <Library className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Add from library</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Browse and search your files</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <ImageIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Create image</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Visualize anything</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <Globe className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Web search</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Find real-time news and info</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <ShoppingBag className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Shopping</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Find products you'll love</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <Sparkles className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Deep research</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Get a detailed report</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <Palette className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Canva</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Create, review, edit designs</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <Key className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">OpenAI Platform</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Manage OpenAI API keys</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3.5 py-2.5 cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:bg-zinc-100 dark:focus:bg-zinc-800/60 text-left focus:text-zinc-900 dark:focus:text-white transition-colors">
                <LineChart className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 font-bold" />
                <div className="flex items-baseline gap-2.5 truncate">
                  <span className="text-[13.5px] font-bold text-zinc-900 dark:text-white">Visualize</span>
                  <span className="text-[11px] text-zinc-500 font-normal truncate">Create visualizations and tools</span>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="bg-zinc-200 dark:bg-zinc-800/60 my-1.5" />
              <div className="px-3.5 py-2.5 flex items-center justify-between text-[12px] text-zinc-500 font-semibold cursor-default">
                <span>Type to search plugins, files...</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
        />

        {/* Standard textarea element centered inside the flex wrapper */}
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything"
          rows={1}
          className="w-full min-h-[38px] max-h-48 border-0 bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:outline-none pl-12 pr-[172px] py-2 text-[14.5px] text-foreground placeholder-zinc-500 dark:placeholder-zinc-400 resize-none overflow-y-auto outline-none align-middle"
        />

        {/* Actions on the right (Absolutely Pinned) */}
        <div className="absolute right-1.5 bottom-0.5 flex items-center gap-2 select-none z-10">
          {/* Think toggle button */}
          <Button
            onClick={() => setIsThinkActive(!isThinkActive)}
            variant="ghost"
            className={`h-8 px-3 rounded-full text-xs font-semibold gap-1.5 transition-all cursor-pointer select-none ${
              isThinkActive
                ? 'bg-zinc-350 text-[#171717] dark:bg-zinc-700 dark:text-white'
                : 'bg-zinc-200/60 text-zinc-650 hover:bg-zinc-300 dark:bg-zinc-800/80 dark:text-zinc-350 dark:hover:bg-zinc-750 dark:hover:text-white'
            }`}
          >
            <Brain className="h-3.5 w-3.5" />
            <span>Think</span>
          </Button>

          {/* Voice microphone button */}
          <Tooltip content={isRecording ? 'Listening...' : 'Use voice input'}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleRecording}
              className={`h-8 w-8 rounded-full cursor-pointer shrink-0 transition-colors ${
                isRecording
                  ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30 animate-pulse'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/85'
              }`}
              aria-label="Voice input"
            >
              <Mic className="h-4.5 w-4.5" />
            </Button>
          </Tooltip>

          {/* Circular Send Button */}
          {isGenerating ? (
            <Button
              variant="default"
              size="icon"
              onClick={onStop}
              className="h-8 w-8 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-70 transition-opacity cursor-pointer shrink-0 flex items-center justify-center shadow-xs"
              aria-label="Stop generation"
            >
              <Plus className="h-4 w-4 rotate-45 stroke-[2.5]" />
            </Button>
          ) : (
            <Button
              variant="default"
              size="icon"
              onClick={handleSend}
              disabled={!hasContent}
              className={`h-8 w-8 rounded-full cursor-pointer shrink-0 flex items-center justify-center transition-opacity shadow-xs ${
                hasContent
                  ? 'bg-black text-white hover:opacity-70 dark:bg-white dark:text-black'
                  : 'bg-[#ececec] text-white dark:bg-[#303030] dark:text-zinc-500 cursor-not-allowed'
              }`}
              aria-label="Send message"
            >
              <ArrowUp className="h-4.5 w-4.5 stroke-[2.5]" />
            </Button>
          )}
        </div>
      </div>

    </div>
  )
}
