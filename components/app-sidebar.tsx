"use client";

import * as React from "react";
import { Package, Tags, Siren, GalleryVerticalEnd } from "lucide-react";

import { NavProjects } from "@/components/nav-projects";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import CompanyProfile from "./customs/company-profile";

// This is sample data.
const data = {
  dashboard: [
    {
      name: "Products",
      url: "/products",
      icon: Package,
    },
    {
      name: "Categories",
      url: "/categories",
      icon: Tags,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CompanyProfile />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.dashboard} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
