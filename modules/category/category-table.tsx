"use client";

import { GlobalTableLayout } from "@/components/customs/global-table";
import { TableCell, TableRow } from "@/components/ui/table";

import { header } from "./constants/header";
import { useGetCategory } from "@/service/category/service";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { CategoryCreateDialog } from "./dialog-create-category";
import DeletedAlert from "./delete-alert";

export default function CategoryTable() {
  const { data } = useGetCategory();

  return (
    <GlobalTableLayout
      title="Category Management"
      headers={header}
      data={data?.data ?? []}
      buttonSlot={<CategoryCreateDialog />}
      filterSlot={null}
      searchSlot={null}
      paginationSlot={null}
      renderRow={(items, index) => (
        <TableRow key={items.id}>
          <TableCell className="py-4 text-center font-medium">
            {index + 1}
          </TableCell>
          <TableCell className="py-4 text-center">{items.name}</TableCell>
          <TableCell className="py-4 text-center">
            {moment(items.createdAt).format("ll")}
          </TableCell>
          <TableCell className="py-4 text-center">
            <DeletedAlert id={items.id} />
          </TableCell>
        </TableRow>
      )}
    />
  );
}
