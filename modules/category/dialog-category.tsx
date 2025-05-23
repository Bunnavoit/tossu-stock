import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetCategory } from "@/service/category/service";

export default function DropdownMenuDemo() {
  const { data } = useGetCategory();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data?.data.map((item) => {
          return <DropdownMenuItem> {item.name} </DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
