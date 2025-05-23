import ProductTable from "@/modules/product/product-table";

export default function ProductsPage() {
  return (
    <div className="flex flex-1 w-full flex-col gap-4 p-2 pt-0">
      <ProductTable />
    </div>
  );
}
