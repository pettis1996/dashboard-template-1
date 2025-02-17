"use client"
import { ProjectList } from "@/components/project-list"
import { AddProjectForm } from "@/components/add-project-form"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectTimeline = [
    { name: "Project A", start: 0, duration: 3 },
    { name: "Project B", start: 1, duration: 4 },
    { name: "Project C", start: 3, duration: 2 },
    { name: "Project D", start: 5, duration: 3 },
    { name: "Project E", start: 6, duration: 2 },
]

const projectStatus = [
    { status: "Completed", count: 12 },
    { status: "In Progress", count: 8 },
    { status: "Planning", count: 5 },
    { status: "On Hold", count: 3 },
]

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={projectTimeline} layout="vertical">
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" width={100} />
                                <Tooltip />
                                <Bar dataKey="duration" stackId="a" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-effect rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Project Status Summary</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {projectStatus.map((status) => (
                            <Card key={status.status}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{status.status}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{status.count}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProjectList />
                <AddProjectForm />
            </div>
        </div>
    )
}