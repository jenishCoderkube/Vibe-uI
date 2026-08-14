'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  Progress
} from 'vibe-ui'

export function SavingsTargets() {
  return (
    <Card className="w-full">
      <CardHeader className="p-3.5 pb-2">
        <CardTitle className="text-xs font-semibold">Milestone Targets</CardTitle>
        <CardDescription className="text-[10px]">
          Active milestones for 2024 across your portfolio.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3.5 pt-0">
        <ItemGroup className="gap-2.5">
          <Item variant="muted" className="flex-col items-stretch p-3 text-left">
            <ItemContent className="gap-2">
              <ItemDescription className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Retirement
              </ItemDescription>
              <span className="text-2xl font-semibold tabular-nums">
                $420,000
              </span>
              <Progress value={65} aria-label="Retirement savings progress" className="h-2" />
            </ItemContent>
            <ItemFooter className="border-t border-border/20 pt-1.5 mt-1.5 flex justify-between text-[10px]">
              <span className="text-muted-foreground">65% achieved</span>
              <span className="font-semibold tabular-nums">$273,000</span>
            </ItemFooter>
          </Item>
        </ItemGroup>
      </CardContent>
      <CardFooter className="p-3.5 pt-0">
        <CardDescription className="text-center w-full text-[10px]">
          You have not met your targets for this year.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
export default SavingsTargets
