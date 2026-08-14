'use client'

import * as React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Uploader
} from 'vibe-ui'

export function FileUploadCard() {
  return (
    <Card className="w-full text-left">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold">Upload Documents</CardTitle>
        <CardDescription className="text-xs">
          Select files to upload to your workspace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Uploader maxSizeMB={10} accept={['image/*', 'application/pdf']} />
      </CardContent>
    </Card>
  )
}
export default FileUploadCard
