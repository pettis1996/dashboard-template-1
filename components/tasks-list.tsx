import { CheckCircle2, Circle } from "lucide-react"

const tasks = [
    { id: 1, description: "Follow up with potential clients", completed: false },
    { id: 2, description: "Prepare presentation for team meeting", completed: true },
    { id: 3, description: "Update CRM database", completed: false },
    { id: 4, description: "Schedule product demo with new lead", completed: false },
]

export function TasksList() {
    return (
        <div className="glass-effect rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Tasks</h2>
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center space-x-3">
                        {task.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                            <Circle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span className={task.completed ? "line-through text-muted-foreground" : ""}>{task.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}