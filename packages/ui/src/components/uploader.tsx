'use client'

import * as React from 'react'
import { UploadCloud, File, X, CheckCircle, AlertCircle } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Progress } from './progress'
import { Badge } from './badge'

const uploaderVariants = tv({
  base: 'flex flex-col gap-4 w-full transition-all duration-300',
  variants: {
    variant: {
      default: '',
      glass: '',
      retro: 'text-foreground font-bold',
      glow: '',
      cyberpunk: 'text-emerald-500 font-mono',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const dropzoneVariants = tv({
  base: 'flex flex-col items-center justify-center border border-dashed rounded-lg p-8 cursor-pointer transition-all duration-200 select-none text-center',
  variants: {
    variant: {
      default:
        'border-input hover:border-primary/50 bg-muted/20 hover:bg-muted/40',
      glass:
        'border-white/30 hover:border-white/50 bg-white/[0.02] hover:bg-white/[0.05]',
      retro:
        'border-2 border-dashed border-foreground bg-background hover:bg-muted/10 rounded-none',
      glow: 'border-primary/30 hover:border-primary/60 bg-primary/[0.02] hover:bg-primary/[0.06]',
      cyberpunk:
        'border-2 border-dashed border-emerald-500/40 hover:border-emerald-400 bg-black hover:bg-emerald-950/20 rounded-none',
    },
    isDragActive: {
      true: 'scale-[0.99]',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      isDragActive: true,
      class: 'border-primary bg-primary/5',
    },
    {
      variant: 'glass',
      isDragActive: true,
      class: 'border-white bg-white/10',
    },
    {
      variant: 'retro',
      isDragActive: true,
      class:
        'bg-accent/25 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    },
    {
      variant: 'glow',
      isDragActive: true,
      class:
        'border-primary bg-primary/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    },
    {
      variant: 'cyberpunk',
      isDragActive: true,
      class:
        'border-emerald-400 bg-emerald-950/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
    },
  ],
  defaultVariants: {
    variant: 'default',
    isDragActive: false,
  },
})

export interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  progress: number
  status: 'uploading' | 'completed' | 'error'
  error?: string
}

export interface UploaderProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof uploaderVariants> {
  maxSizeMB?: number
  accept?: string[] // e.g. ['image/*', 'application/pdf']
  onFilesSelected?: (files: File[]) => void
  onFileRemoved?: (fileId: string) => void
  files?: UploadedFile[]
}

const Uploader = React.forwardRef<HTMLDivElement, UploaderProps>(
  (
    {
      className,
      variant = 'default',
      maxSizeMB = 5,
      accept,
      onFilesSelected,
      onFileRemoved,
      files = [],
      ...props
    },
    ref,
  ) => {
    const [isDragActive, setIsDragActive] = React.useState(false)
    const [localFiles, setLocalFiles] = React.useState<UploadedFile[]>(files)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    // Sync external files state if provided
    React.useEffect(() => {
      if (files.length > 0) {
        setLocalFiles(files)
      }
    }, [files])

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragActive(true)
    }

    const handleDragLeave = () => {
      setIsDragActive(false)
    }

    const validateFile = (file: File): { isValid: boolean; error?: string } => {
      // Size check
      if (file.size > maxSizeMB * 1024 * 1024) {
        return {
          isValid: false,
          error: `File size exceeds the limit of ${maxSizeMB}MB`,
        }
      }

      // Type check
      if (accept && accept.length > 0) {
        const isMatched = accept.some((pattern) => {
          if (pattern.endsWith('/*')) {
            const baseType = pattern.split('/')[0]
            return file.type.startsWith(baseType + '/')
          }
          return file.type === pattern || file.name.endsWith(pattern)
        })
        if (!isMatched) {
          return { isValid: false, error: 'Unsupported file format' }
        }
      }

      return { isValid: true }
    }

    const processFiles = (selectedFiles: FileList | null) => {
      if (!selectedFiles) return

      const validFiles: File[] = []
      const newUploads: UploadedFile[] = []

      Array.from(selectedFiles).forEach((file) => {
        const validation = validateFile(file)
        const id = Math.random().toString(36).substring(7)

        if (validation.isValid) {
          validFiles.push(file)
          newUploads.push({
            id,
            name: file.name,
            size: file.size,
            type: file.type,
            progress: 0,
            status: 'uploading',
          })

          // Simulate dynamic progress upload bar
          simulateUpload(id)
        } else {
          newUploads.push({
            id,
            name: file.name,
            size: file.size,
            type: file.type,
            progress: 0,
            status: 'error',
            error: validation.error,
          })
        }
      })

      setLocalFiles((prev) => [...prev, ...newUploads])
      if (onFilesSelected && validFiles.length > 0) {
        onFilesSelected(validFiles)
      }
    }

    const simulateUpload = (id: string) => {
      let currentProgress = 0
      const interval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 15) + 5
        if (currentProgress >= 100) {
          currentProgress = 100
          clearInterval(interval)
          setLocalFiles((prev) =>
            prev.map((f) =>
              f.id === id ? { ...f, progress: 100, status: 'completed' } : f,
            ),
          )
        } else {
          setLocalFiles((prev) =>
            prev.map((f) =>
              f.id === id ? { ...f, progress: currentProgress } : f,
            ),
          )
        }
      }, 250)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragActive(false)
      processFiles(e.dataTransfer.files)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      processFiles(e.target.files)
    }

    const triggerFilePicker = () => {
      fileInputRef.current?.click()
    }

    const removeFile = (id: string) => {
      setLocalFiles((prev) => prev.filter((f) => f.id !== id))
      if (onFileRemoved) {
        onFileRemoved(id)
      }
    }

    const formatSize = (bytes: number): string => {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
    }

    return (
      <div
        ref={ref}
        data-slot="uploader"
        className={cn(uploaderVariants({ variant }), className)}
        {...props}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleInputChange}
          className="hidden"
          multiple
          accept={accept?.join(',')}
        />

        {/* Dropzone Container */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFilePicker}
          data-slot="uploader-dropzone"
          className={cn(dropzoneVariants({ variant, isDragActive }))}
        >
          <div className="flex flex-col items-center gap-3">
            <div
              className={cn(
                'p-3 transition-all duration-300 border',
                variant === 'default' && 'rounded-full bg-muted border-border',
                variant === 'glass' &&
                  'rounded-full bg-white/10 border-white/20',
                variant === 'retro' &&
                  'rounded-none bg-background border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
                variant === 'glow' &&
                  'rounded-full bg-primary/5 border-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.15)]',
                variant === 'cyberpunk' &&
                  'rounded-none bg-black border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
              )}
            >
              <UploadCloud
                className={cn(
                  'h-6 w-6',
                  variant === 'cyberpunk' && 'text-emerald-500',
                  variant === 'glow' && 'text-primary animate-pulse',
                  variant === 'retro' && 'text-foreground',
                  variant !== 'cyberpunk' &&
                    variant !== 'glow' &&
                    variant !== 'retro' &&
                    'text-muted-foreground',
                )}
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                Drag & drop files here, or{' '}
                <span
                  className={cn(
                    'hover:underline font-bold',
                    variant === 'cyberpunk' && 'text-emerald-500',
                    variant === 'retro' && 'text-foreground underline',
                    variant !== 'cyberpunk' &&
                      variant !== 'retro' &&
                      'text-primary',
                  )}
                >
                  browse
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                Supports image, PDF or files up to {maxSizeMB}MB
              </p>
            </div>
          </div>
        </div>

        {/* Uploaded File List */}
        {localFiles.length > 0 && (
          <div className="space-y-2.5" data-slot="uploader-queue">
            <h4
              className={cn(
                'text-xs font-bold text-muted-foreground uppercase tracking-wider pl-1',
                variant === 'cyberpunk' && 'text-emerald-500 font-mono',
                variant === 'retro' && 'text-foreground font-bold',
              )}
            >
              Files Queue ({localFiles.length})
            </h4>
            <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1 select-none">
              {localFiles.map((file) => (
                <div
                  key={file.id}
                  data-slot="uploader-file-item"
                  className={cn(
                    'flex flex-col gap-2 p-3 rounded-lg border transition-all duration-200',
                    variant === 'default' && 'bg-muted/30 border-border/40',
                    variant === 'glass' && 'bg-white/[0.02] border-white/10',
                    variant === 'retro' &&
                      'border-2 border-foreground bg-background text-foreground rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold',
                    variant === 'glow' &&
                      'bg-primary/[0.01] border-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.05)]',
                    variant === 'cyberpunk' &&
                      'border border-emerald-500/30 bg-black rounded-none shadow-[0_0_10px_rgba(16,185,129,0.1)] text-emerald-400 font-mono',
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={cn(
                          'p-2 rounded-md shrink-0',
                          variant === 'default' && 'bg-primary/10 text-primary',
                          variant === 'glass' && 'bg-white/10 text-white',
                          variant === 'retro' &&
                            'bg-foreground text-background rounded-none border border-foreground',
                          variant === 'glow' && 'bg-primary/15 text-primary',
                          variant === 'cyberpunk' &&
                            'bg-emerald-950/30 text-emerald-500 rounded-none border border-emerald-500/20',
                        )}
                      >
                        <File className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 text-left">
                        <p
                          className={cn(
                            'text-xs font-semibold text-foreground truncate max-w-[200px] sm:max-w-xs',
                            variant === 'cyberpunk' &&
                              'text-emerald-400 font-mono',
                            variant === 'retro' && 'text-foreground font-bold',
                          )}
                        >
                          {file.name}
                        </p>
                        <p
                          className={cn(
                            'text-[10px] text-muted-foreground',
                            variant === 'cyberpunk' &&
                              'text-emerald-600 font-mono',
                            variant === 'retro' && 'text-muted-foreground',
                          )}
                        >
                          {formatSize(file.size)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {file.status === 'completed' && (
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                      )}
                      {file.status === 'error' && (
                        <div className="flex items-center gap-1.5">
                          <Badge
                            variant={
                              variant === 'cyberpunk'
                                ? 'outline'
                                : 'destructive'
                            }
                            className={cn(
                              'text-[9px] px-1.5 py-0',
                              variant === 'cyberpunk' &&
                                'border-emerald-500 text-emerald-500 rounded-none bg-emerald-950/20 font-mono',
                              variant === 'retro' &&
                                'border-2 border-foreground bg-destructive text-destructive-foreground rounded-none',
                            )}
                          >
                            Error
                          </Badge>
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile(file.id)
                        }}
                        className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {file.status === 'uploading' && (
                    <div className="space-y-1.5 w-full">
                      <div
                        className={cn(
                          'flex items-center justify-between text-[10px] font-mono text-muted-foreground',
                          variant === 'cyberpunk' && 'text-emerald-500',
                          variant === 'retro' &&
                            'text-foreground font-bold font-sans',
                        )}
                      >
                        <span>Uploading...</span>
                        <span>{file.progress}%</span>
                      </div>
                      <Progress
                        value={file.progress}
                        indicatorVariant={
                          variant === 'cyberpunk' ? 'default' : 'default'
                        }
                        className={cn(
                          variant === 'retro' &&
                            'border-2 border-foreground rounded-none bg-muted',
                          variant === 'cyberpunk' &&
                            'border border-emerald-500/20 rounded-none bg-emerald-950/10 [&_[data-slot=progress-indicator]]:bg-emerald-500',
                        )}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  },
)
Uploader.displayName = 'Uploader'

export { Uploader }
