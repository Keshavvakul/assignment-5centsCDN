"use client"

import { useState } from "react"
import {
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { columns } from "@/constants/columns"
import { fetchPosts } from "@/api/post"
import { ToolBar } from "./toolbar"
import { DataTable } from "@/components/global/dashboard/datatable"
import { Pagination } from "@/components/global/dashboard/pagination"

  

export const Dashboard = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState({})


  // Fetch data using useQuery
  const { data = [], error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  // Handle loading and error states safely
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </div>
    )  
  if (error) return <div className="text-center p-4 text-red-500">Error loading data: {error.message}</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
            <ToolBar table={table}/>
            <DataTable table={table}/>
            <Pagination table={table}/>
        </div>
      </CardContent>
    </Card>
  )
}

