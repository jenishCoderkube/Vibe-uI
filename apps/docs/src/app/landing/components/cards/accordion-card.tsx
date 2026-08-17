import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'vibe-ui'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'vibe-ui'

export function AccordionDemoCard() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">FAQ</CardTitle>
        <CardDescription className="text-xs">
          Frequently asked questions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm py-3">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground pb-3">
              Yes. It adheres to the WAI-ARIA design pattern and supports
              keyboard navigation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm py-3">
              Can it be customized?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground pb-3">
              Yes. You can style the components using Tailwind CSS classes and
              CSS variables.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="text-sm py-3">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground pb-3">
              Yes. It's animated by default with smooth height transitions when
              expanded.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
