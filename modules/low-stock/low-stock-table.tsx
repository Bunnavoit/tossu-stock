"use client";

import { GlobalTableLayout } from "@/components/customs/global-table";
import { TableCell, TableRow } from "@/components/ui/table";
import { useGetLowStockProduct } from "@/service/product/service";
import { StockCreateDialog } from "../stock-transaction/dialog-create-stock";
import { header } from "./constants/header";

export default function LowStockTable() {
  const { data } = useGetLowStockProduct();
  console.log("low stock data", data);

  return (
    <GlobalTableLayout
      title="Low Stock Product"
      headers={header}
      data={data?.data ?? []}
      buttonSlot={null}
      filterSlot={null}
      searchSlot={null}
      paginationSlot={null}
      renderRow={(items: any, index: number) => (
        <TableRow key={items.id}>
          <TableCell className="py-4 text-center font-medium">
            {index + 1}
          </TableCell>
          <TableCell className="py-4 text-center">{items?.name}</TableCell>
          <TableCell className="py-4 text-center">{items?.sku}</TableCell>
          <TableCell className="py-4 text-center">{items?.unit}</TableCell>
          <TableCell className="py-4 text-center">{items?.quantity}</TableCell>
          <TableCell className="py-4 text-center">
            {items.minThreshold}
          </TableCell>
        </TableRow>
      )}
    />
  );
}
