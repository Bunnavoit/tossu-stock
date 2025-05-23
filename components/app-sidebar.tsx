"use client";

import * as React from "react";
import {
  Package,
  Tags,
  Siren,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "TosSu Stock",
      logo: GalleryVerticalEnd,
      plan: "",
    },
  ],
  dashboard: [
    {
      name: "Products",
      url: "Products",
      icon: Package,
    },
    {
      name: "Categories",
      url: "#",
      icon: Tags,
    },
    {
      name: "Low Stock",
      url: "#",
      icon: Siren,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.dashboard} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
