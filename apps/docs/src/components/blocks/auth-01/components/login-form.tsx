'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  rememberMe: z.boolean().default(false),
})

type LoginValues = z.infer<typeof loginSchema>

interface LoginFormProps {
  onViewChange: (view: 'login' | 'register' | 'forgot-password' | 'reset-password') => void
  onSubmitSuccess?: (values: LoginValues) => void
}

export function LoginForm({ onViewChange, onSubmitSuccess }: LoginFormProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  function onSubmit(values: LoginValues) {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (onSubmitSuccess) {
        onSubmitSuccess(values)
      } else {
        alert(`Login Success:\nEmail: ${values.email}`)
      }
    }, 1500)
  }

  return (
    <Card className="border-border shadow-xl bg-card/65 backdrop-blur-xl w-full max-w-md rounded-2xl relative overflow-hidden text-card-foreground">
      {/* Top micro glow line using primary theme variable */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      
      <CardHeader className="space-y-2 pt-8 pb-4">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-center text-foreground">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground text-sm font-light px-4">
          Enter your credentials below to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-8 pb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-foreground text-xs font-semibold uppercase tracking-wider">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="name@example.com"
                        type="email"
                        autoComplete="email"
                        className="pl-10 h-11 bg-background/50 border-input focus:border-primary focus:ring-ring text-sm placeholder:text-muted-foreground/45 rounded-lg text-foreground"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-destructive text-xs" />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-foreground text-xs font-semibold uppercase tracking-wider">Password</FormLabel>
                    <button
                      type="button"
                      onClick={() => onViewChange('forgot-password')}
                      className="text-xs font-semibold text-primary hover:underline transition-colors cursor-pointer"
                    >
                      Forgot?
                    </button>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="••••••••"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        className="pl-10 pr-10 h-11 bg-background/50 border-input focus:border-primary focus:ring-ring text-sm placeholder:text-muted-foreground/45 rounded-lg text-foreground"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-destructive text-xs" />
                </FormItem>
              )}
            />

            {/* Remember Me Checkbox */}
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2.5 space-y-0 py-1.5 select-none">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-input bg-background text-primary focus-visible:ring-ring"
                    />
                  </FormControl>
                  <FormLabel className="text-muted-foreground text-xs cursor-pointer select-none font-medium">
                    Keep me signed in on this device
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm shadow-md active:scale-[0.98] transition-all rounded-lg cursor-pointer mt-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4.5 w-4.5 text-current" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Authenticating...
                </span>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </Form>

        {/* Separator */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <span className="relative bg-card px-3.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground select-none">
            Or Sign In With
          </span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3.5">
          <Button
            variant="glass"
            className="w-full h-10 border border-border bg-background hover:bg-muted text-xs font-semibold tracking-wide text-foreground transition-all rounded-lg flex items-center justify-center gap-2.5 cursor-pointer shadow-xs"
            onClick={() => alert('Social sign-in: GitHub')}
          >
            <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Button>
          <Button
            variant="glass"
            className="w-full h-10 border border-border bg-background hover:bg-muted text-xs font-semibold tracking-wide text-foreground transition-all rounded-lg flex items-center justify-center gap-2.5 cursor-pointer shadow-xs"
            onClick={() => alert('Social sign-in: Google')}
          >
            <svg className="h-4.5 w-4.5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.642 1.09 14.973 0 12 0 7.354 0 3.307 2.673 1.298 6.6l3.968 3.165z" />
              <path fill="#34A853" d="M16.04 15.345c-1.07.727-2.43 1.164-4.04 1.164-2.864 0-5.29-1.936-6.155-4.536L1.877 15.14c2.01 3.926 6.056 6.6 10.123 6.6 3.082 0 5.89-.99 7.927-2.736l-3.887-3.66z" />
              <path fill="#4285F4" d="M23.49 12.273c0-.818-.073-1.609-.209-2.373H12v4.582h6.455c-.278 1.482-1.114 2.736-2.373 3.582l3.886 3.66c2.273-2.1 3.522-5.19 3.522-8.864z" />
              <path fill="#FBBC05" d="M5.845 11.973a7.027 7.027 0 0 1 0-2.209L1.877 6.6a11.968 11.968 0 0 0 0 10.8l3.968-3.427z" />
            </svg>
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-center border-t border-border/80 py-4.5 px-8">
        <p className="text-xs text-muted-foreground font-medium">
          New to Vibe UI?{' '}
          <button
            type="button"
            onClick={() => onViewChange('register')}
            className="font-bold text-primary hover:underline transition-colors cursor-pointer"
          >
            Create account
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
