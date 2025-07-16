import React from 'react'
import Header from '@/components/dashboard/Header'
export default function layout({children}) {
  return (
     <>
          <div className='flex'>
               <nav className='w-56 min-h-screen bg-slate-900 p-3'>
                    Sidebar
               </nav>
               <main className='w-full bg-slate-100 min-h-screen text-slate-900 p-3'>
                    <Header/>
                    {children}
               </main>
          </div>

     </>
  )
}
