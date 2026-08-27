'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

interface ForgotPasswordFormProps {
  onViewChange: (view: 'login' | 'register' | 'forgot-password' | 'reset-password') => void
  onSubmitSuccess?: (values: ForgotPasswordValues) => void
}

export function ForgotPasswordForm({ onViewChange, onSubmitSuccess }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSent, setIsSent] = React.useState(false)
  const [submittedEmail, setSubmittedEmail] = React.useState('')

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: ForgotPasswordValues) {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSent(true)
      setSubmittedEmail(values.email)
      onSubmitSuccess?.(values)
    }, 1500)
  }

  if (isSent) {
    return (
      <Card className="border-border shadow-xl bg-card/65 backdrop-blur-xl w-full max-w-md rounded-2xl relative overflow-hidden text-center text-card-foreground">
        {/* Top micro glow line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent" />
        
        <CardHeader className="space-y-4 justify-center pt-10 pb-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-emerald-500/10 p-3.5 text-emerald-600 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
              <CheckCircle2 className="h-10 w-10 animate-pulse" />
            </div>
          </div>
          <CardTitle className="text-2xl font-extrabold tracking-tight text-foreground">
            Check your email
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm font-light px-6">
            We have sent a temporary recovery link to <span className="font-semibold text-foreground">{submittedEmail}</span>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-8 pb-8">
          <Button
            type="button"
            className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm shadow-md active:scale-[0.98] transition-all rounded-lg cursor-pointer"
            onClick={() => onViewChange('reset-password')}
          >
            Go to Reset Password (Demo)
          </Button>
          <p className="text-xs text-muted-foreground font-medium">
            Didn't receive the email?{' '}
            <button
              type="button"
              onClick={() => {
                setIsSent(false)
                form.setValue('email', submittedEmail)
              }}
              className="font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              Click to resend
            </button>
          </p>
        </CardContent>
        <CardFooter className="justify-center border-t border-border/80 py-4.5">
          <button
            type="button"
            onClick={() => onViewChange('login')}
            className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to sign in
          </button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="border-border shadow-xl bg-card/65 backdrop-blur-xl w-full max-w-md rounded-2xl relative overflow-hidden text-card-foreground">
      {/* Top micro glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <CardHeader className="space-y-2 pt-8 pb-4">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-center text-foreground">
          Forgot Password
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground text-sm font-light px-4">
          Enter your email address and we will send you a reset link
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
                  Sending reset link...
                </span>
              ) : (
                'Send Reset Link'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center border-t border-border/80 py-4.5 px-8">
        <button
          type="button"
          onClick={() => onViewChange('login')}
          className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to sign in
        </button>
      </CardFooter>
    </Card>
  )
}
