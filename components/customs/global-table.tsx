"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "@/lib/utils";
import { DashboardTopBar } from "./dashboard-top-bar";
import { Container } from "./container";

export interface TableHeaderItem {
  label: string;
  icon?: ReactNode | string;
  isImage?: boolean;
  className?: string;
}

interface ReusableTableLayoutProps<T> {
  title: string;
  headers: TableHeaderItem[];
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
  searchSlot?: ReactNode;
  filterSlot?: ReactNode;
  buttonSlot?: ReactNode;
  paginationSlot?: ReactNode;
}

export function GlobalTableLayout<T>({
  title,
  headers,
  data,
  renderRow,
  filterSlot,
  buttonSlot,
  searchSlot,
  paginationSlot,
}: ReusableTableLayoutProps<T>) {
  return (
    <Container>
      <DashboardTopBar title={title} rightHeader={searchSlot} />
      <div className="border-none rounded-xl bg-white p-4">
        <Table>
          <TableHeader>
            <TableRow className="border-none px-5">
              <TableHead
                className="rounded-tr-xl py-5 text-center text-base"
                colSpan={1}
              >
                {buttonSlot}
              </TableHead>
              <TableHead
                className="rounded-tr-xl py-5 text-center text-base"
                colSpan={1}
              >
                {filterSlot}
              </TableHead>
            </TableRow>

            <TableRow className="border-none">
              {headers.map((header) => (
                <TableHead
                  className={cn("py-4", header.className)}
                  key={header.label}
                >
                  <div className="flex items-center justify-center gap-2">
                    {header.isImage ? (
                      <Image
                        alt="icon"
                        className="h-4 w-4 object-cover"
                        height={16}
                        src={header.icon as string}
                        width={16}
                      />
                    ) : (
                      header.icon
                    )}
                    <span className="text-foreground">{header.label}</span>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.length === 0 ? (
              <TableRow className="p-0">
                <TableCell colSpan={headers.length} className="p-0">
                  <div className="flex h-[300px] w-full items-center justify-center text-muted-foreground text-center ">
                    No data found.
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data.map((item, index) => renderRow(item, index))
            )}
          </TableBody>
        </Table>
        {paginationSlot}
      </div>
    </Container>
  );
}
