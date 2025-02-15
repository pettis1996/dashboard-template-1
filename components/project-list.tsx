import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const projects = [
    { id: 1, name: "Website Redesign", client: "ABC Corp", status: "In Progress" },
    { id: 2, name: "Mobile App Development", client: "XYZ Inc", status: "Planning" },
    { id: 3, name: "E-commerce Platform", client: "123 Store", status: "Completed" },
    { id: 4, name: "CRM Integration", client: "Tech Solutions", status: "In Progress" },
    { id: 5, name: "Data Analytics Dashboard", client: "Data Co", status: "Planning" },
]

export function ProjectList() {
    return (
        <div className="bg-purple-950 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Project List</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-purple-300">Name</TableHead>
                        <TableHead className="text-purple-300">Client</TableHead>
                        <TableHead className="text-purple-300">Status</TableHead>
                        <TableHead className="text-purple-300">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.id}>
                            <TableCell className="font-medium text-white">{project.name}</TableCell>
                            <TableCell className="text-purple-300">{project.client}</TableCell>
                            <TableCell className="text-purple-300">{project.status}</TableCell>
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