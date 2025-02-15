"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
    { stage: "Leads", value: 500 },
    { stage: "Qualified", value: 350 },
    { stage: "Proposal", value: 200 },
    { stage: "Negotiation", value: 100 },
    { stage: "Closed", value: 50 },
]

export function SalesFunnelChart() {
    return (
        <div className="glass-effect rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Sales Funnel</h2>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis dataKey="stage" type="category" width={100} />
                        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}