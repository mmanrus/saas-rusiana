import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      {/* Use  <SidebarTrigger className="-ml-1  text-foreground" /> To display the sidebar trigger button */}
      <SidebarTrigger className="-ml-1  text-sidebar-foreground/70" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
    </header>
  );
}
