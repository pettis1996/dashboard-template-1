"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 300 },
    { name: "Product D", value: 200 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Analytics</h1>
            <div className="glass-effect rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Sales by Product</h2>
                <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={150} fill="#8884d8" dataKey="value">
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}