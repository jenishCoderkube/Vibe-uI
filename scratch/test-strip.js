const fs = require('fs')
const path = require('path')

// Read stripTypeScript source
let fileContent = fs.readFileSync(
  path.join(__dirname, '../apps/docs/src/lib/strip-typescript.ts'),
  'utf8',
)
// Strip TS annotations from strip-typescript.ts itself safely
fileContent = fileContent.replace(
  'export function stripTypeScript(code: string): string',
  'function stripTypeScript(code)',
)

eval(fileContent)

const tsCode = `import React from 'react'
import { MessageGroup, Message, MessageContent, MessageFooter } from '@/components/ui/message'
import { Marker, MarkerContent } from '@/components/ui/marker'

function AvatarPlaceholder({ text }: { text: string }) {
  return (
    <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-xs font-bold text-white uppercase select-none">
      {text}
    </div>
  )
}

export default function GroupDemo() {
  return (
    <MessageGroup className="p-0 gap-3 max-w-md w-full bg-zinc-950 p-6 rounded-2xl border border-zinc-900 relative">
      <Message align="end" variant="default" className="items-end gap-2">
        <AvatarPlaceholder text="ME" />
        <MessageContent className="bg-blue-600 border-transparent text-white rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[70%]">
          Deploying to prod real quick.
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}`

console.log('--- STRIPPED JS CODE ---')
console.log(stripTypeScript(tsCode))
