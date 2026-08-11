'use client'

import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login03Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-zinc-950">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="#"
          className="flex items-center gap-2 self-center font-bold text-white no-underline"
        >
          <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
            V
          </div>
          <span>Vibe Inc.</span>
        </a>
        <Card className="bg-zinc-900/50 border-border p-6 space-y-4 text-left">
          <div className="text-center space-y-1">
            <CardTitle className="text-xl font-bold text-white">
              Welcome back
            </CardTitle>
            <CardDescription className="text-xs">
              Login with your Apple or Google account
            </CardDescription>
          </div>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 h-9 text-xs bg-zinc-800/40 border-border text-white hover:bg-zinc-800"
            >
              <svg
                className="size-4 shrink-0 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <span>Login with Apple</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 h-9 text-xs bg-zinc-800/40 border-border text-white hover:bg-zinc-800"
            >
              <svg
                className="size-4 shrink-0 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span>Login with Google</span>
            </Button>
          </div>

          <div className="relative flex items-center justify-center py-2.5">
            <div className="absolute inset-x-0 h-[1px] bg-border" />
            <span className="relative z-10 bg-zinc-900 px-3 text-[10px] text-muted-foreground uppercase font-semibold">
              Or continue with
            </span>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="email-03"
                className="text-xs text-muted-foreground font-semibold"
              >
                Email
              </label>
              <Input
                id="email-03"
                type="email"
                placeholder="m@example.com"
                className="h-9 text-xs bg-zinc-900 border-border text-white"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password-03"
                  className="text-xs text-muted-foreground font-semibold"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-[11px] text-muted-foreground hover:text-white underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password-03"
                type="password"
                className="h-9 text-xs bg-zinc-900 border-border text-white"
              />
            </div>
            <Button className="w-full h-9 text-xs bg-primary hover:bg-primary/95 text-primary-foreground font-bold">
              Login
            </Button>
            <div className="text-center text-xs text-muted-foreground pt-1 select-none">
              Don't have an account?{' '}
              <a href="#" className="text-white hover:underline">
                Sign up
              </a>
            </div>
          </div>
        </Card>
        <div className="text-[10px] text-muted-foreground text-center select-none leading-relaxed">
          By clicking continue, you agree to our{' '}
          <a href="#" className="underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  )
}
