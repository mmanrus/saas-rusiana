"use client"

import {
     Select,
     SelectContent,
     SelectGroup,
     SelectItem,
     SelectLabel,
     SelectTrigger,
     SelectValue,
} from '@/components/ui/select'

import { useThemeContext } from '@/context/theme-data-provider.tsx'
import { useTheme } from 'next-themes'
import {cn } from '../lib/utils.js'

const availableThemeColors = [
     { name: 'Zinc', light: "bg-zinc-900", dark: 'bg-zinc-700'},
     { name: 'Rose', light: "bg-rose-900", dark: 'bg-rose-700'},
     { name: 'Blue', light: "bg-blue-900", dark: 'bg-blue-700'},
     { name: 'Green', light: "bg-green-900", dark: 'bg-green-700'},
     {name: 'Orange', light: "bg-orange-900", dark: 'bg-orange-700'}
]

export default function ThemeColorToggle() {
     const { themeColor, setThemeColor}  = useThemeContext()
     const { theme } = useTheme()

     const createSelectItems = () => {
          return availableThemeColors.map(({name, light, dark}) =>
               <SelectItem key={name} value={name}>
                    <div className='flex items-center space-x-3'>
                         <div className={
                              cn(
                                   "rounded-full",
                                   "w-[20px]",
                                   "h-[20px]",
                                   theme === 'light' ? light:dark
                              )
                         }>
                         </div>
                         <div className='text-sm'>{name}</div>
                    </div>
               </SelectItem>
          )
     }

     return (
          <Select
               onValueChange={(value) => setThemeColor(value)}
               defaultValue={themeColor}
          >
               <SelectTrigger className="w-[100px] ring-offset-transparent focus:ring-transparent">
                    <SelectValue placeholder="Select Color"/>
               </SelectTrigger>
               <SelectContent className="border-muted">
                    {createSelectItems()}
               </SelectContent>
          </Select>
     )
}