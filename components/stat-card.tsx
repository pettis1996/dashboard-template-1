import type { LucideIcon } from "lucide-react"

interface StatCardProps {
    title: string
    value: string
    icon: LucideIcon
    trend: string
}

export function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
    return (
        <div className="glass-effect rounded-lg p-6 flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
                <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="text-sm font-semibold text-green-500">{trend}</p>
                </div>
            </div>
        </div>
    )
}