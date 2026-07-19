import { MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import { formatCurrency } from "@/utils/helpers";

export const menuColumns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = formatCurrency(price);
      return formatted;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "category_id",
    header: "Category Id",
  },
  {
    accessorKey: "spice_level",
    header: "Spice Level",
  },
  {
    accessorKey: "is_available",
    header: "Is Available",
  },
  {
    accessorKey: "is_vegetarian",
    header: "Is Vegetarian",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "size-8",
            })}
          >
            <MoreHorizontalIcon />
            <span className='sr-only'>Open menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant='destructive'>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
