"use client";
import { Building2 } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function HomeNav() {
  const pathname = usePathname()
  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/home-dashboard",
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },
    {
      title: "Anouncements",
      href: "/dashboard/home/announcement",
    },
  ];
  return (
    <div className="flex flex-col border-b border-sidebar-border pb-0">
      <div className="w-full bg-foreground p-3 px-6">
        <div className="flex flex-row space-x-2 items-center">
          <Building2 />
          <div className="flex flex-col">
            <span>Hello, Emmanuel Rusiana</span>
            <span className="text-sm">User</span>
          </div>
        </div>
      </div>
      <nav
        className="sticky flex h-10 shrink-0 items-center gap-3 px-6
          transition-colors"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.title}
              href={link.href}
              className="py-2 relative group"
            >
              <span>{link.title}</span>
              <span
                className={clsx("absolute left-0 -bottom-0.5 h-0.5 w-full scale-x-0",
                  "origin-center bg-blue-500 transition-transform duration-300",
                  isActive ? "scale-x-100 bg-blue-800": "scale-x-0 group-hover:scale-x-100"
                )}
              ></span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
