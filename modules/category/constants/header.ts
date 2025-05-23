import { Users2, CalendarRange, BadgeMinus } from "lucide-react";
import React from "react";

export interface Header {
  label: string;
  icon: React.ReactNode | string;
  isImage?: boolean;
  className?: string;
}

export const header: Header[] = [
  { label: "ID.", icon: "", isImage: false },
  { label: "Category Name", icon: React.createElement(Users2, { size: 16 }) },
  { label: "CreateAt", icon: React.createElement(CalendarRange, { size: 16 }) },
  { label: "Action", icon: React.createElement(BadgeMinus, { size: 16 }) },
];
