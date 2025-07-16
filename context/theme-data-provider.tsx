// Updates UI with theme color changes
"use client"

import setGlobalColorTheme from '../lib/set-theme-color.ts'

import { useTheme } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import React, {createContext, useContext, useState, useEffect} from 'react'

// Set theme color to any child component
const ThemeContext = createContext<ThemeColorsParams>({} as ThemeColorsParams)

export default function ThemeDataProvider({children}: ThemeProviderProps) {
     const getSavedThemeColor = () => {
          try {
               return (localStorage.getItem('themecolor') as ThemeColors) || 'Zinc'
          } catch(err){
               "Zinc" as ThemeColors
          }
     }

     const [themeColor, setThemeColor] = useState<ThemeColors>(
          getSavedThemeColor() as ThemeColors
     )
     const [isMounted, setIsMounted] = useState(false)
     const {theme} = useTheme();

     useEffect(()=>{
          localStorage.setItem('themecolor', themeColor)
          setGlobalColorTheme(theme as "light" | 'dark', themeColor)

          if(!isMounted){
               setIsMounted(true)
          }
     }, [themeColor, theme])

     if (!isMounted) {
          return null
     }

     return (
          <ThemeContext.Provider value={{ themeColor, setThemeColor}}>{children}</ThemeContext.Provider>
     )
}


export function useThemeContext() {
     return useContext(ThemeContext)
}