"use client"
import { useState } from "react"
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const pieData = [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 300 },
    { name: "Product D", value: 200 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const lineData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 4500 },
    { name: "May", revenue: 6000 },
    { name: "Jun", revenue: 5500 },
]

const topProducts = [
    { id: 1, name: "Product A", sales: 1234, revenue: 123400 },
    { id: 2, name: "Product B", sales: 1000, revenue: 100000 },
    { id: 3, name: "Product C", sales: 876, revenue: 87600 },
    { id: 4, name: "Product D", sales: 654, revenue: 65400 },
    { id: 5, name: "Product E", sales: 543, revenue: 54300 },
]

export default function AnalyticsPage() {
    const [timeRange, setTimeRange] = useState("6m")

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Analytics</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Sales by Product</h2>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-effect rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Revenue Trend</h2>
                        <Select value={timeRange} onValueChange={setTimeRange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select time range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1m">Last Month</SelectItem>
                                <SelectItem value="3m">Last 3 Months</SelectItem>
                                <SelectItem value="6m">Last 6 Months</SelectItem>
                                <SelectItem value="1y">Last Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="glass-effect rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Top Performing Products</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Sales</TableHead>
                            <TableHead>Revenue</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {topProducts.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.sales}</TableCell>
                                <TableCell>${product.revenue.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}