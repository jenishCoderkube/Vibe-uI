'use client'

import React from 'react'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Label,
} from 'vibe-ui'
import {
  Mail,
  MessageSquare,
  Globe,
  Send,
  CheckCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const validate = () => {
    const newErrors = { name: '', email: '', subject: '', message: '' }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({ name: '', email: '', subject: '', message: '' })
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMailto = () => {
    const subject = encodeURIComponent(
      formData.subject || 'Inquiry regarding Vibe UI',
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:support@vibeui.com?subject=${subject}&body=${body}`
  }

  const MailIcon = Mail as any
  const MsgIcon = MessageSquare as any
  const SendIcon = Send as any
  const CheckIcon = CheckCircle as any
  const LoaderIcon = Loader2 as any
  const LinkIcon = ExternalLink as any

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-8 sm:py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/95 to-muted-foreground bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 sm:px-0">
            Have questions about Vibe UI? Need help configuring your projects or
            wanting to contribute? Drop us a message below!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <Card variant="glass" className="h-full">
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
                <CardDescription>
                  Get in touch via official community channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4 text-left">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email Support</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      support@vibeui.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <MsgIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Discord Community</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      chat.vibeui.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Twitter / X</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      @vibe_ui
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Card className="shadow-xl">
              <form noValidate onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will respond as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 pt-4 text-left">
                  {errorMessage && (
                    <div className="p-3 text-xs rounded-lg bg-destructive/10 text-destructive border border-destructive/20 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4 bg-primary/5 rounded-xl border border-primary/20 text-center p-6">
                      <CheckIcon className="h-12 w-12 text-primary animate-bounce" />
                      <h4 className="font-bold text-xl text-foreground">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                        Thank you for contacting Vibe UI. Your message has been
                        received, and a confirmation has been dispatched.
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-name">Name</Label>
                          <Input
                            id="contact-name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              handleChange('name', e.target.value)
                            }
                            className={
                              errors.name
                                ? 'border-destructive focus-visible:ring-destructive'
                                : ''
                            }
                          />
                          {errors.name && (
                            <p className="text-[11px] text-destructive font-medium mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-email">Email</Label>
                          <Input
                            id="contact-email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleChange('email', e.target.value)
                            }
                            className={
                              errors.email
                                ? 'border-destructive focus-visible:ring-destructive'
                                : ''
                            }
                          />
                          {errors.email && (
                            <p className="text-[11px] text-destructive font-medium mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-subject">Subject</Label>
                        <Input
                          id="contact-subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) =>
                            handleChange('subject', e.target.value)
                          }
                          className={
                            errors.subject
                              ? 'border-destructive focus-visible:ring-destructive'
                              : ''
                          }
                        />
                        {errors.subject && (
                          <p className="text-[11px] text-destructive font-medium mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-message">Message</Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Your query details..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            handleChange('message', e.target.value)
                          }
                          className={
                            errors.message
                              ? 'border-destructive focus-visible:ring-destructive'
                              : ''
                          }
                        />
                        {errors.message && (
                          <p className="text-[11px] text-destructive font-medium mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </CardContent>
                {!isSubmitted && (
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleMailto}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      <LinkIcon className="h-3.5 w-3.5 mr-1.5 shrink-0" />
                      Open in Email App
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[140px]"
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderIcon className="h-4 w-4 mr-2 animate-spin shrink-0" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <SendIcon className="h-4 w-4 mr-2 shrink-0" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </CardFooter>
                )}
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
