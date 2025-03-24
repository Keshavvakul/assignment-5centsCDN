import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Post = {
    id: number
    title: string
    body: string
}

export const columns: ColumnDef<Post>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="text-center">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "title",
      header: "TITLE",
      cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "body",
      header: "Body",
      cell: ({ row }) => {
        const body = row.getValue("body") as string
        // Truncate long text for better display
        const truncated = body.length > 100 ? body.substring(0, 100) + "..." : body
  
        return <div className="text-sm text-muted-foreground">{truncated}</div>
      },
    },
  ]