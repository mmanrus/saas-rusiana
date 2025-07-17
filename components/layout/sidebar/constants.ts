import type * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;
type NavSubItem = {
  title: string;
  url: string;
};
type NavItem =
  | {
      title: string;
      url: string;
      icon: IconName;
      isActive?: boolean;
      items?: never;
    }
  | {
      title: string;
      url?: never;
      icon: IconName;
      isActive?: boolean;
      items: NavSubItem[];
    };
type NavHeader = {
  title: string;
  icon: IconName;
  url: string;
};
export type NavSection = {
  title: string;
  items: NavItem[];
};
export type SidebarData = {
  header: NavHeader;
  sidebar: NavSection[];
};
