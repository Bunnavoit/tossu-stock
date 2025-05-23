import { cn } from "@/lib/utils";
import type React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn("flex flex-1 flex-col space-y-4 p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};
