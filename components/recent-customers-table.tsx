import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active" },
]

export function RecentCustomersTable() {
    return (
        <div className="bg-purple-950 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Recent Customers</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-purple-300">Name</TableHead>
                        <TableHead className="text-purple-300">Email</TableHead>
                        <TableHead className="text-purple-300">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="font-medium text-white">{row.name}</TableCell>
                            <TableCell className="text-purple-300">{row.email}</TableCell>
                            <TableCell className="text-purple-300">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}