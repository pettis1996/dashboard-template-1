"use client"
import { CustomerList } from "@/components/customer-list"
import { AddCustomerForm } from "@/components/add-customer-form"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { PieChart, Pie, Cell } from "recharts"

const customerGrowth = [
    { month: "Jan", customers: 100 },
    { month: "Feb", customers: 120 },
    { month: "Mar", customers: 150 },
    { month: "Apr", customers: 180 },
    { month: "May", customers: 220 },
    { month: "Jun", customers: 270 },
]

const customerSegments = [
    { name: "Enterprise", value: 400 },
    { name: "SMB", value: 300 },
    { name: "Startup", value: 200 },
    { name: "Individual", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Customers</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Customer Growth</h2>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={customerGrowth}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="customers" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-effect rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Customer Segmentation</h2>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={customerSegments}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {customerSegments.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CustomerList />
                <AddCustomerForm />
            </div>
        </div>
    )
}