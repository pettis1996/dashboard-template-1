"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Users, FolderKanban, Settings } from "lucide-react"

const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/" },
    { icon: Users, label: "Customers", href: "/customers" },
    { icon: FolderKanban, label: "Projects", href: "/projects" },
    { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-16 bg-card border-r flex flex-col items-center py-4">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-primary">CRM</h1>
            </div>
            <nav className="flex flex-col items-center space-y-4">
                {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`p-2 rounded-md hover:bg-accent ${pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                                }`}
                        >
                            <Icon className="w-6 h-6" />
                            <span className="sr-only">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}