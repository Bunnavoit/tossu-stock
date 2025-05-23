import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchSlot?: React.ReactNode;
  filterSlot?: React.ReactNode;
  pagination?: React.ReactNode;
}

export function DataTable<T extends { id: React.Key }>({
  columns,
  data,
  searchSlot,
  filterSlot,
  pagination,
}: DataTableProps<T>) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 gap-2">
        {searchSlot}
        {filterSlot}
      </div>
      <div className="w-full border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={String(col.key)}>{col.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} className="odd:bg-muted/50">
                {columns.map((col) => (
                  <TableCell key={String(col.key)}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {pagination && <div className="mt-4">{pagination}</div>}
    </div>
  );
}
