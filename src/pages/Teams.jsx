import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function Teams() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Teams</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Team Member</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
