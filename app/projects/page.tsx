import { ProjectList } from "@/components/project-list"
import { AddProjectForm } from "@/components/add-project-form"

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-white">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProjectList />
                <AddProjectForm />
            </div>
        </div>
    )
}