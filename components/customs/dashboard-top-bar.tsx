import { SidebarTrigger } from "../ui/sidebar";
import { Heading } from "./heading";

interface TopbarProps {
  title: string;
  rightHeader?: React.ReactNode;
}
export function DashboardTopBar({ title, rightHeader }: TopbarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex justify-between w-full ">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Heading title={title} />
        </div>
        <div>{rightHeader}</div>
      </div>
    </header>
  );
}
