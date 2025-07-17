"use client"
import React from 'react'
import {data} from './constants'
import Sidebar from '@/components/layout/sidebar/page-test'
export default function layout({children}:React.ReactNode) {
  return (
     <>
          <Sidebar data={data}>
               {children}
          </Sidebar>
     </>
  )
}
