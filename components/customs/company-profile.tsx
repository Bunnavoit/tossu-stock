import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function CompanyProfile() {
  return (
    <Link href="/" className="flex gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-col hidden xs:flex">
        <span className="font-semibold tracking-tight">TosSu Stock</span>
        <span className="leading-none text-sm text-muted-foreground">
          Welocom to TosSu Stock
        </span>
      </div>
    </Link>
  );
}
