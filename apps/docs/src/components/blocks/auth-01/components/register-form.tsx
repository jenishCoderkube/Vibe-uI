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
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react'

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
})

type RegisterValues = z.infer<typeof registerSchema>

interface RegisterFormProps {
  onViewChange: (view: 'login' | 'register' | 'forgot-password' | 'reset-password') => void
  onSubmitSuccess?: (values: RegisterValues) => void
}

export function RegisterForm({ onViewChange, onSubmitSuccess }: RegisterFormProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      acceptTerms: false,
    },
  })

  function onSubmit(values: RegisterValues) {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (onSubmitSuccess) {
        onSubmitSuccess(values)
      } else {
        alert(`Register Success:\nName: ${values.name}\nEmail: ${values.email}`)
      }
    }, 1500)
  }

  return (
    <Card className="border-border shadow-xl bg-card/65 backdrop-blur-xl w-full max-w-md rounded-2xl relative overflow-hidden text-card-foreground">
      {/* Top micro glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <CardHeader className="space-y-2 pt-8 pb-4">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-center text-foreground">
          Create Account
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground text-sm font-light px-4">
          Enter your details below to create your free workspace account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-8 pb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-foreground text-xs font-semibold uppercase tracking-wider">Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="John Doe"
                        type="text"
                        autoComplete="name"
                        className="pl-10 h-11 bg-background/50 border-input focus:border-primary focus:ring-ring text-sm placeholder:text-muted-foreground/45 rounded-lg text-foreground"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-destructive text-xs" />
                </FormItem>
              )}
            />

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
                  <FormLabel className="text-foreground text-xs font-semibold uppercase tracking-wider">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="••••••••"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="new-password"
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

            {/* Accept Terms Checkbox */}
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1 py-2 select-none">
                  <div className="flex flex-row items-start space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-input bg-background text-primary focus-visible:ring-ring mt-0.5"
                      />
                    </FormControl>
                    <FormLabel className="text-muted-foreground text-xs cursor-pointer select-none font-medium leading-relaxed">
                      I agree to the{' '}
                      <a href="#" className="font-bold text-primary hover:underline" onClick={(e) => { e.preventDefault(); alert('Terms of Service'); }}>
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-bold text-primary hover:underline" onClick={(e) => { e.preventDefault(); alert('Privacy Policy'); }}>
                        Privacy Policy
                      </a>
                    </FormLabel>
                  </div>
                  <FormMessage className="text-destructive text-xs" />
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
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center border-t border-border/80 py-4.5 px-8">
        <p className="text-xs text-muted-foreground font-medium">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => onViewChange('login')}
            className="font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
