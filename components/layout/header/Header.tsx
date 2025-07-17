import React from "react";
import { SidebarTrigger } from "../../ui/sidebar";
import { Separator } from "../../ui/separator";
import { 
  Bell, 
  ChevronLeft,
  History,
  Plus,
  Settings,
  User,
  LayoutGrid } from "lucide-react";
import SearchInput from "../input/SearchInput";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Header() {
  return (
    <header
      className="flex h-16 shrink-0 items-center gap-2 justify-between border-b
        px-4 border-sidebar-border shadow-sm bg-theme-blue"
    >
      {/* Use  <SidebarTrigger className="-ml-1  text-foreground" /> To display the sidebar trigger button */}
      <div className="flex flex-row items-center just gap-3">
        <div className="flex flex-row items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10 text-sidebar-foreground"
          />
        </div>
        <button>
          <History size={16} className="text-gray-700 dark:text-gray-400" />
        </button>
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        {/* Plus Icon*/}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus size={16} className="text-gray-500 dark:text-gray-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-10 text-sidebar-foreground"
        />
        <Button variant="ghost" size="icon">
          <User size={16} className="text-gray-700 dark:text-gray-400" />
        </Button>

        <Button variant="ghost" size="icon">
          <Bell size={16} className="text-gray-700 dark:text-gray-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings size={16} className="text-gray-700 dark:text-gray-400" />
        </Button>

        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-10 text-sidebar-foreground"
        />

        <div className="flex mx-3 gap-1.5">
          <Button variant="ghost" size="icon">
            Name
            <ChevronLeft size={16} />
          </Button>
          <Button>
            <Image
              alt="User Image"
              src="/favicon.ico"
              width={96}
              height={96}
              className="w-8 h-8 rounded-full border border-accent-foreground"
            />
          </Button>
          <Button size='icon' variant='ghost'>
              <LayoutGrid size='16' className='text-gray-700 dark:text-gray-400'/>
          </Button>
        </div>
      </div>
    </header>
  );
}
