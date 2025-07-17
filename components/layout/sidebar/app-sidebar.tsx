"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "../../ui/sidebar";
import Link from "next/link";
//import { data as mockData } from "./mock";
import NavMain from "./nav-main";
import clsx from "clsx";
import { useState } from "react";
import { type SidebarData } from "./constants";
import getIconComponent from "@/lib/getIcon";
import SidebarFooterCard from './sidebarFooter'
type AppSidebarProps = {
  data: SidebarData;
};

export default function AppSidebar({ data }: AppSidebarProps) {
  // doesnt work Hover
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {/* FailedHover -> expand fix later*/}
      <Sidebar
        collapsible="icon"
        className={clsx(` border-r transition-all duration-200
          border-sidebar-border data-[state=closed]:flex-col
          data-[state=closed]:justify-center
          ${hovered ? "data-[state=open]" : "data-[state=close]"}`)}
        onMouseEnter={() => setHovered(true)}
      >
        <SidebarHeader className="px-4.5 mt-5">
          <Link
            href={data.header.url}
            className={` flex items-center w-full transition-all
              group-data-[state=open]:justify-center
              group-data-[state=closed]:justify-start space-x-4 `}
          >
            <div
              className="bg-sidebar-primary text-sidebar-primary-foreground flex
                w-9 h-10 shrink-0 items-center justify-center rounded-lg
                transition-all"
            >
              {getIconComponent(data.header.icon)}
            </div>

            <div
              className="flex-1 whitespace-nowrap overflow-hidden text-left
                text-sm leading-tight transition-all duration-300
                group-data-[state=true]:opacity-0
                group-data-[state=true]:scale-95 group-data-[state=true]:w-0
                group-data-[state=true]:overflow-hidden
                data-[state=closed]:hidden"
            >
              <span className="truncate font-medium text-xl">
                {data.header.title}
              </span>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <NavMain content={data.sidebar} />
        </SidebarContent>
        <SidebarFooter>
          <div className="p-3">
            <SidebarFooterCard />
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
