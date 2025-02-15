import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", status: "Inactive" },
]

export function CustomerList() {
    return (
        <div className="bg-purple-950 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Customer List</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-purple-300">Name</TableHead>
                        <TableHead className="text-purple-300">Email</TableHead>
                        <TableHead className="text-purple-300">Status</TableHead>
                        <TableHead className="text-purple-300">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {customers.map((customer) => (
                        <TableRow key={customer.id}>
                            <TableCell className="font-medium text-white">{customer.name}</TableCell>
                            <TableCell className="text-purple-300">{customer.email}</TableCell>
                            <TableCell className="text-purple-300">{customer.status}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}