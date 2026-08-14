import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'vibe-ui'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'vibe-ui'
import { Input, Label, Button } from 'vibe-ui'

export function TabsDemoCard() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Account Access</CardTitle>
        <CardDescription className="text-xs">Manage your profile and security.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="text-xs h-8">Profile</TabsTrigger>
            <TabsTrigger value="password" className="text-xs h-8">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4 space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" className="h-8 text-xs" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username" className="text-xs">Username</Label>
              <Input id="username" defaultValue="@peduarte" className="h-8 text-xs" />
            </div>
            <Button size="sm" className="w-full h-8 text-xs">Save changes</Button>
          </TabsContent>
          <TabsContent value="password" className="mt-4 space-y-4">
            <div className="space-y-1">
              <Label htmlFor="current" className="text-xs">Current</Label>
              <Input id="current" type="password" className="h-8 text-xs" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new" className="text-xs">New</Label>
              <Input id="new" type="password" className="h-8 text-xs" />
            </div>
            <Button size="sm" className="w-full h-8 text-xs">Update password</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
