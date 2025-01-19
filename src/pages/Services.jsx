import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Services</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Website</TableCell>
            <TableCell>Operational</TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>API</TableCell>
            <TableCell>Degraded Performance</TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
