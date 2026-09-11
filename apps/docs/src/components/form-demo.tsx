'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Checkbox,
} from 'vibe-ui'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  marketing_emails: z.boolean().default(false),
})

type FormValues = z.infer<typeof formSchema>

export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      marketing_emails: false,
    },
  })

  function onSubmit(values: FormValues) {
    alert('Form submitted successfully:\n' + JSON.stringify(values, null, 2))
  }

  return (
    <div className="w-full max-w-sm mx-auto p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card text-card-foreground shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="jenish" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" type="email" {...field} />
                </FormControl>
                <FormDescription>
                  We will use this for account verification.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="marketing_emails"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 p-3 shadow-xs bg-zinc-50/50 dark:bg-zinc-900/20">
                <div className="space-y-0.5 pr-2">
                  <FormLabel className="text-xs">Marketing Communications</FormLabel>
                  <FormDescription className="text-[10px]">
                    Get notified about UI component updates.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            Submit Registration
          </Button>
        </form>
      </Form>
    </div>
  )
}

const signupSchema = z.object({
  fullName: z.string().min(3, {
    message: 'Full name must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  accountType: z.enum(['personal', 'business'], {
    required_error: 'Please select an account type.',
  }),
  role: z.string().min(1, {
    message: 'Please select a role.',
  }),
  experience: z.array(z.number()).default([5]),
  marketing: z.boolean().default(false),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
  coverPhoto: z.any()
    .refine((file) => file instanceof File, {
      message: 'Cover photo is required.',
    })
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, {
      message: 'Cover photo must be less than 2MB.',
    }),
})

type SignupFormValues = z.infer<typeof signupSchema>

export function SignupFormDemo() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      accountType: 'personal',
      role: '',
      experience: [5],
      marketing: false,
      terms: false,
      coverPhoto: undefined,
    },
  })

  function onSubmit(values: SignupFormValues) {
    alert(
      `Signup Successful!\n\nName: ${values.fullName}\nEmail: ${values.email}\nAccount: ${values.accountType}\nRole: ${values.role}\nExp: ${values.experience[0]} yrs\nFile: ${values.coverPhoto?.name}`
    )
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card text-card-foreground shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jenish Patel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="jenish@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Account Type (Radio Group) */}
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel>Account Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="personal" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Personal Account
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="business" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Business Account
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Role (Select dropdown) */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Product Manager</SelectItem>
                    <SelectItem value="other">Other Professional</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Experience years (Slider) */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <div className="flex justify-between items-center">
                  <FormLabel>Years of Experience</FormLabel>
                  <span className="text-xs font-mono font-bold bg-muted px-2 py-0.5 rounded text-muted-foreground">
                    {field.value[0]} years
                  </span>
                </div>
                <FormControl>
                  <Slider
                    min={0}
                    max={20}
                    step={1}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cover Photo */}
          <FormField
            control={form.control}
            name="coverPhoto"
            render={({ field: { value: _value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Cover Photo</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      onChange(file)
                    }}
                    {...fieldProps}
                  />
                </FormControl>
                <FormDescription>
                  Upload a cover photo (JPEG/PNG, Max 2MB).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Marketing Opt-In (Checkbox) */}
          <FormField
            control={form.control}
            name="marketing"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 rounded-md border border-zinc-200 dark:border-zinc-800 p-3 shadow-xs bg-zinc-50/20 dark:bg-zinc-900/10">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none select-none">
                  <FormLabel className="text-xs cursor-pointer">
                    Subscription Emails
                  </FormLabel>
                  <FormDescription className="text-[10px]">
                    Receive updates on new components releases and feature updates.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          {/* Terms (Switch) */}
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 p-3 shadow-xs bg-zinc-50/50 dark:bg-zinc-900/20">
                <div className="space-y-0.5 pr-2">
                  <FormLabel className="text-xs">Accept Terms & Conditions</FormLabel>
                  <FormDescription className="text-[10px]">
                    I agree to the Terms of Service and Privacy Policy.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  )
}
