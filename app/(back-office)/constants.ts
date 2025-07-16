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
             title: "Playground",
             url: "#",
             icon: "SquareTerminal",
             isActive: true,
           },
           {
             title: "Models",
             url: "",
             icon: "Bot",
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
             title: "Documentation",
             url: "",
             icon: "BookOpen",
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
             items: [
               {
                 title: "General",
                 url: "#",
               },
               {
                 title: "Team",
                 url: "#",
               },
               {
                 title: "Billing",
                 url: "#",
               },
               {
                 title: "Limits",
                 url: "#",
               },
             ],
           },
         ],
       },
       {
         title: "Hello World",
         items: [
           {
             title: "Audio",
             url: "#",
             icon: "AudioWaveform",
             items: [
               { title: "Audio 1", url: "#" },
               { title: "Audio 2", url: "#" },
             ],
           },
           {
             title: "Visuals",
             url: "#",
             icon: "GalleryVerticalEnd",
           },
           {
             title: "Analytics",
             url: "#",
             icon: "PieChart",
           },
           {
             title: "Map",
             url: "#",
             icon: "Map",
           },
           {
             title: "Frame",
             url: "#",
             icon: "Frame",
           },
         ],
       },
     ],
   
   };
   