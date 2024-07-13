"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"

const Pagination = ({ currentPage, totalPages , onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button size="sm" onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button size="sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  )
}

export default function Component() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      createdAt: "2023-04-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      createdAt: "2023-05-15",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
      createdAt: "2023-06-30",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "User",
      createdAt: "2023-07-01",
    },
    {
      id: 5,
      name: "Tom Davis",
      email: "tom@example.com",
      role: "Admin",
      createdAt: "2023-08-10",
    },
  ])
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [filterText, setFilterText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [editingRow, setEditingRow] = useState(null)
  const [deletingRow, setDeletingRow] = useState(null)

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleFilter = (e) => {
    setFilterText(e.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleRowUpdate = (row) => {
    setEditingRow(row)
  }

  const handleRowDelete = (row) => {
    setDeletingRow(row)
  }

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) => value.toString().toLowerCase().includes(filterText.toLowerCase())),
  )

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const paginatedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  const handleUpdateSubmit = (updatedRow) => {
    setData(data.map((row) => (row.id === updatedRow.id ? { ...row, ...updatedRow } : row)))
    setEditingRow(null)
  }

  const handleDeleteConfirm = () => {
    setData(data.filter((row) => row.id !== deletingRow.id))
    setDeletingRow(null)
  }

  return (
    <div className="w-full mt-10">
      <div className="flex items-center justify-between mb-4">
        <Input placeholder="Filter table..." value={filterText} onChange={handleFilter} className="w-full max-w-sm" />
        <div className="flex items-center gap-2">
          <Label htmlFor="rows-per-page">Rows per page:</Label>
          <Select
            id="rows-per-page"
            value={rowsPerPage.toString()}
            className="w-auto"
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
              Name
              {sortColumn === "name" && <span className="ml-2">{sortDirection === "asc" ? "▲" : "▼"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("email")}>
              Email
              {sortColumn === "email" && <span className="ml-2">{sortDirection === "asc" ? "▲" : "▼"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("role")}>
              Role
              {sortColumn === "role" && <span className="ml-2">{sortDirection === "asc" ? "▲" : "▼"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("createdAt")}>
              Created At
              {sortColumn === "createdAt" && <span className="ml-2">{sortDirection === "asc" ? "▲" : "▼"}</span>}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleRowUpdate(row)}>
                    Update
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleRowDelete(row)}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredData.length / rowsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      {editingRow && (
        <Sheet open={!!editingRow} onOpenChange={() => setEditingRow(null)}>
          <SheetContent side="right" className="h-full bg-white">
            <SheetHeader>
              <SheetTitle>Edit User</SheetTitle>
              <SheetDescription>Update the details for {editingRow.name}.</SheetDescription>
            </SheetHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const updatedRow = {
                  id: editingRow.id,
                  name: formData.get("name"),
                  email: formData.get("email"),
                  role: formData.get("role"),
                  createdAt: editingRow.createdAt,
                }
                handleUpdateSubmit(updatedRow)
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" name="name" defaultValue={editingRow.name} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" name="email" defaultValue={editingRow.email} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Select id="role" name="role" defaultValue={editingRow.role} className="col-span-3">
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="User">User</option>
                  </Select>
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save Changes</Button>
                <SheetClose asChild>
                  <Button variant="outline" onClick={() => setEditingRow(null)}>Cancel</Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      )}
      {deletingRow && (
        <Dialog open={!!deletingRow} onOpenChange={() => setDeletingRow(null)}>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Delete User</DialogTitle>
              <DialogDescription>Are you sure you want to delete {deletingRow.name}?</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="destructive" onClick={handleDeleteConfirm}>
                Confirm
              </Button>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => setDeletingRow(null)}>Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
