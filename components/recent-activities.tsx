import { Activity } from "lucide-react"

const activities = [
    { id: 1, description: "John Doe added a new customer", time: "2 hours ago" },
    { id: 2, description: "Sarah Smith closed a deal", time: "4 hours ago" },
    { id: 3, description: "New lead assigned to Mike Johnson", time: "Yesterday" },
    { id: 4, description: "Team meeting scheduled", time: "2 days ago" },
]

export function RecentActivities() {
    return (
        <div className="glass-effect rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-4">
                {activities.map((activity) => (
                    <li key={activity.id} className="flex items-start space-x-3">
                        <Activity className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                            <p className="text-sm">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}