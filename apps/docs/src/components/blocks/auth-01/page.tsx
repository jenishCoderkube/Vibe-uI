'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { LoginForm } from './components/login-form'
import { RegisterForm } from './components/register-form'
import { ForgotPasswordForm } from './components/forgot-password-form'
import { ResetPasswordForm } from './components/reset-password-form'

export default function Auth01Page() {
  const [view, setView] = useState<'login' | 'register' | 'forgot-password' | 'reset-password'>('login')

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center py-16 px-6 bg-background text-foreground overflow-hidden font-sans">
      {/* Premium background mesh and glowing radial orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.09)_0%,transparent_70%)] blur-[80px] sm:blur-[120px] pointer-events-none" />
      {/* High-end Dotted Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25] bg-[radial-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Animated Form Container */}
      <div className="w-full max-w-md flex justify-center relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full flex justify-center"
          >
            {view === 'login' && (
              <LoginForm onViewChange={setView} />
            )}
            {view === 'register' && (
              <RegisterForm onViewChange={setView} />
            )}
            {view === 'forgot-password' && (
              <ForgotPasswordForm onViewChange={setView} />
            )}
            {view === 'reset-password' && (
              <ResetPasswordForm onViewChange={setView} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
