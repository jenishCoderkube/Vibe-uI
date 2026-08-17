'use client'

import * as React from 'react'
import { ArrowRight, Search, ChevronDown } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Input,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Textarea,
} from 'vibe-ui'

export function UIElements() {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-4 p-4">
        {/* Buttons */}
        <div className="flex flex-wrap gap-1.5">
          <Button size="sm" className="h-8 text-xs gap-1.5 px-3">
            Button <ArrowRight className="size-3" />
          </Button>
          <Button size="sm" variant="secondary" className="h-8 text-xs px-3">
            Secondary
          </Button>
          <Button size="sm" variant="outline" className="h-8 text-xs px-3">
            Outline
          </Button>
        </div>

        {/* Form elements */}
        <div className="space-y-2.5">
          <div className="relative">
            <Input placeholder="Search..." className="h-8 text-xs pr-8" />
            <Search className="absolute right-2.5 top-2.5 size-3.5 text-muted-foreground" />
          </div>
          <Textarea
            placeholder="Message"
            className="resize-none min-h-[60px] text-xs p-2.5"
          />
        </div>

        {/* Badges, Radio, Checkbox, Switch */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-3">
          <div className="flex gap-1">
            <Badge variant="default" className="text-[10px] px-2">
              Badge
            </Badge>
            <Badge variant="secondary" className="text-[10px] px-2">
              Secondary
            </Badge>
          </div>
          <RadioGroup defaultValue="apple" className="flex gap-2">
            <RadioGroupItem value="apple" id="apple" className="size-3.5" />
            <RadioGroupItem value="banana" id="banana" className="size-3.5" />
          </RadioGroup>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked id="enable-alerts" className="size-3.5" />
            <Switch defaultChecked id="compact-alerts" />
          </div>
        </div>

        {/* Dialogs and actions */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/40 pt-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 text-xs px-3">
                Alert Dialog
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[360px]">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-sm">
                  Allow accessory to connect?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-xs">
                  Do you want to allow the USB accessory to connect to this
                  device and your data?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="text-xs h-8">
                  Don't allow
                </AlertDialogCancel>
                <AlertDialogAction className="text-xs h-8">
                  Allow
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <ButtonGroup className="ml-auto">
            <Button variant="outline" size="sm" className="h-8 text-xs px-3">
              Group
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 !w-8 !px-0"
                >
                  <ChevronDown className="size-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36">
                <DropdownMenuItem className="text-xs">Mute</DropdownMenuItem>
                <DropdownMenuItem className="text-xs">
                  Mark Read
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xs text-destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
      </CardContent>
    </Card>
  )
}
export default UIElements
