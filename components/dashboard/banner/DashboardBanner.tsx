"use client"
import React, {useState} from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import clsx from 'clsx'
export default function DashboardBanner() {
  const [ isClosed, setIsClosed ] = useState(false)
  return (
    <Card className={clsx("border-0 rounded-none", isClosed ? 'hidden': '')}>
      <CardHeader className="flex flex-row gap-4 items-center justify-between">
        <div className='flex flex-row gap-3 items-center'>
          <span>Some ICON</span>
          <div className="flex flex-col space-y-2 max-w-sm">
            <CardTitle className="text-2xl">
              Start Accepting online payments
            </CardTitle>
            <CardDescription>
              Business are moving towards online payments as they're easy,
              secure and fast. Try them for your businesstoday.
            </CardDescription>
          </div>
        </div>
        <Button
          variant="outline"
          className="border-0 py-4 px-5 cursor-pointer bg-blue-600
            text-primary-foreground"
        >
          Enable
        </Button>
        <CardAction>
          <Button onClick={() => setIsClosed(true)} className="border-none cursor-pointer"  variant="outline">
            <X />
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
