'use client'

import * as React from 'react'
import { Lock } from 'lucide-react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Checkbox
} from 'vibe-ui'

export function AccountAccess() {
  return (
    <Card className="w-full h-[290px] flex flex-col justify-between">
      <CardHeader className="p-3.5 pb-2">
        <CardTitle className="text-xs font-semibold">Access Security</CardTitle>
        <CardDescription className="text-[10px]">
          Update credentials or re-authenticate.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3.5 text-left p-3.5 pt-0">
        <div className="space-y-1.5">
          <Label htmlFor="email-address" className="text-[11px] font-semibold">Email Address</Label>
          <Input
            id="email-address"
            type="email"
            placeholder="artist@studio.inc"
            className="h-8 text-xs"
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="current-password" className="text-[11px] font-semibold">Current Password</Label>
            <a
              href="#"
              className="text-[10px] font-semibold text-muted-foreground hover:text-foreground"
            >
              Forgot?
            </a>
          </div>
          <Input
            id="current-password"
            type="password"
            placeholder="••••••••••••••••••••••••"
            className="h-8 text-xs"
          />
          <p className="text-[9px] text-muted-foreground leading-normal">
            A confirmation code will be sent to your email to verify this update.
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-2.5 p-3.5 pt-0">
        <div className="flex items-center gap-2 justify-start w-full text-left">
          <Checkbox id="remember-device" defaultChecked className="size-3.5" />
          <Label htmlFor="remember-device" className="text-[11px] font-semibold select-none cursor-pointer">
            Remember this device
          </Label>
        </div>
        <Button className="w-full h-8 text-xs font-semibold gap-2">
          <Lock className="size-3.5" /> Update Security
        </Button>
      </CardFooter>
    </Card>
  )
}
export default AccountAccess
