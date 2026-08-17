import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'vibe-ui'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'vibe-ui'

export function CarouselDemoCard() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Media Gallery</CardTitle>
        <CardDescription className="text-xs">
          Swipe through the highlights.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full max-w-[200px] mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-muted/50 p-6 border border-border/40">
                    <span className="text-4xl font-semibold text-muted-foreground">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 size-6" />
          <CarouselNext className="right-2 size-6" />
        </Carousel>
      </CardContent>
    </Card>
  )
}
