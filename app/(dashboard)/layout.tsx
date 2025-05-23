"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import LowStockListener from "@/modules/product/low-stock-listener";
import { Providers } from "@/provider/provider";
import toast, { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Providers>
            <main className="flex-1 flex flex-col justify-start items-start bg-gray-50">
              {children}
              <Toaster />
              <LowStockListener />
            </main>
          </Providers>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
