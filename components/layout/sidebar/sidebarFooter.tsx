
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
   } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
export default function SidebarFooterCard(){

     return (
          <Card className='border-0 py-0 gap-0.5 flex'>
               <CardHeader className='rounded-t-md bg-sidebar-accent-foreground py-1 h-16 px-3 mb-0 flex items-center-safe'>
                     <Separator
                              orientation="vertical"
                              className="data-[orientation=vertical]:h-12 data-[orientation=vertical]:w-1 data-[orientation=vertical]:rounded-sm data-[orientation=vertical]:bg-amber-600"
                            />
                    <CardDescription className='font-medium'>
                         Your Premium plan's trial expires in <span className='text-amber-600'>13 days</span>
                    </CardDescription>
               </CardHeader>
               <CardContent className='flex items-center mt-0 space-x-0.5 px-0'>
                    <CardDescription className='font-medium rounded-bl-md h-7 bg-sidebar-accent-foreground w-full flex items-center justify-center-safe cursor-pointer'>Change Plane</CardDescription>
                    <CardDescription className='font-medium rounded-br-md h-7 bg-sidebar-accent-foreground w-full flex items-center justify-center-safe cursor-pointer'>Upgrade</CardDescription>
               </CardContent>
          </Card>
     )
     
}