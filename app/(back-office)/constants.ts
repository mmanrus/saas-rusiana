import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const data = {
  header: {
    title: "Acme Inc",
    icon: "Command",
    url: "#",
  },
  sidebar: [
    {
      title: "Menu",
      items: [
        {
          title: "Home",
          url: "#",
          icon: "House",
          isActive: true,
        },
        {
          title: "Sales",
          url: "",
          icon: "ShoppingCart",
          items: [
            {
              title: "Genesis",
              url: "#",
            },
            {
              title: "Explorer",
              url: "#",
            },
            {
              title: "Quantum",
              url: "#",
            },
          ],
        },
        {
          title: "Purchases",
          url: "",
          icon: "ShoppingBag",
          items: [
            {
              title: "Introduction",
              url: "introduction",
            },
            {
              title: "Get Started",
              url: "start",
            },
            {
              title: "Tutorials",
              url: "tutorials",
            },
            {
              title: "Changelog",
              url: "changelog",
            },
          ],
        },
        {
          title: "Settings",
          url: "settings",
          icon: "Settings2",
        },
        {
          title: "Reports",
          url: "settings",
          icon: "ChartColumn",
        },
        {
          title: "Documents",
          url: "settings",
          icon: "FolderClosed",
        },
      ],
    },
  ],
};
