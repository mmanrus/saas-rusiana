"use client"
import React from 'react'
import {data} from './constants'
import Sidebar from '@/components/dashboard/sidebar/page-test'
export default function layout({children}) {
  return (
     <>
          <Sidebar data={data}>
               {children}
          </Sidebar>
     </>
  )
}
