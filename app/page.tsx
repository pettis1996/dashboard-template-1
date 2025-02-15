import { StatCard } from "@/components/stat-card"
import { PageViewsChart } from "@/components/page-views-chart"
import { RecentCustomersTable } from "@/components/recent-customers-table"
import { BarChart3, Users, ArrowUpRight, DollarSign } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="10,483" icon={Users} trend="+12%" />
        <StatCard title="Total Revenue" value="$54,237" icon={DollarSign} trend="+8%" />
        <StatCard title="Page Views" value="1.2M" icon={BarChart3} trend="+23%" />
        <StatCard title="Conversion Rate" value="3.42%" icon={ArrowUpRight} trend="+7%" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PageViewsChart />
        <RecentCustomersTable />
      </div>
    </div>
  )
}