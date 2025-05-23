import {
  Calendar,
  Users2,
  Wallet2,
  Tag,
  Layers,
  Hash,
  Trash2,
  Archive,
} from "lucide-react";
import React from "react";

export interface Header {
  label: string;
  icon: React.ReactNode | string;
  isImage?: boolean;
  className?: string;
}

export const header: Header[] = [
  { label: "No.", icon: "", isImage: false },
  { label: "Product Name", icon: React.createElement(Users2, { size: 16 }) },
  { label: "SKU", icon: React.createElement(Hash, { size: 16 }) },
  { label: "Unit", icon: React.createElement(Layers, { size: 16 }) },
  { label: "Quantity", icon: React.createElement(Wallet2, { size: 16 }) },
  { label: "Min Threshold", icon: React.createElement(Tag, { size: 16 }) },
  { label: "Category Name", icon: React.createElement(Archive, { size: 16 }) },
  { label: "Stock", icon: React.createElement(Archive, { size: 16 }) },
  { label: "Delete", icon: React.createElement(Trash2, { size: 16 }) },
];
