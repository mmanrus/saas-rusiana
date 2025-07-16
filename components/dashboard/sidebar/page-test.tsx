
//import {data} from "./mock";
'use client'
import  AppSidebar from './app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
} from "../../ui/sidebar"

import { SidebarData } from './constants';
import Header from '../Header';
type AppSidebarProps = {
  data: SidebarData;
  children: React.ReactNode
};

export default function Sidebar({data, children}: AppSidebarProps, ) {
  return (
    <SidebarProvider   style={{
      "--sidebar-width": "18rem",
      "--sidebar-width-icon": "4.5rem",
    }}
      className="data-[collapsed=true]:w-6rem transition-all duration-200 overflow-visible relative z-0"
      >
      <AppSidebar data={data}></AppSidebar>
      <SidebarInset>
      {/* Bread Crumb */}
        <Header />
        {children}
      </SidebarInset>
      
    </SidebarProvider>
  );
}
