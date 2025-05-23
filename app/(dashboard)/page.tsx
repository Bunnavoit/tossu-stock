import LowStockTable from "@/modules/low-stock/low-stock-table";

export default function Page() {
  return (
    <div className="flex flex-1 w-full flex-col gap-4 p-2 pt-0">
      <LowStockTable />
    </div>
  );
}
