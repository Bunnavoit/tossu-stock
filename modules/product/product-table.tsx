"use client";

import { GlobalTableLayout } from "@/components/customs/global-table";
import { header } from "./constants/header";
import { TableCell, TableRow } from "@/components/ui/table";
import { useGetProduct } from "@/service/product/service";
import { ProductCreateDialog } from "./dialog-create-product";
import { StockCreateDialog } from "../stock-transaction/dialog-create-stock";
import DeletedProductAlert from "./delete-product-alert";
import { Paginator } from "@/components/customs/paginator";

export default function ProductTable() {
  const { data } = useGetProduct();
  return (
    <GlobalTableLayout
      title="Product Management"
      headers={header}
      data={data?.data ?? []}
      buttonSlot={<ProductCreateDialog />}
      filterSlot={null}
      searchSlot={null}
      paginationSlot={null}
      renderRow={(items, index) => (
        <TableRow key={items.id}>
          <TableCell className="py-4 text-center font-medium">
            {index + 1}
          </TableCell>
          <TableCell className="py-4 text-center">{items.name}</TableCell>
          <TableCell className="py-4 text-center">{items.sku}</TableCell>
          <TableCell className="py-4 text-center">{items.unit}</TableCell>
          <TableCell className="py-4 text-center">{items.quantity}</TableCell>
          <TableCell className="py-4 text-center">
            {items.minThreshold}
          </TableCell>
          <TableCell className="py-4 text-center">
            {items.category.name}
          </TableCell>
          <TableCell className="py-4 text-center">
            <StockCreateDialog productIdIn={items.id} />
          </TableCell>
          <TableCell className="py-4 text-center">
            <DeletedProductAlert id={items.id} />
          </TableCell>
        </TableRow>
      )}
    />
  );
}
