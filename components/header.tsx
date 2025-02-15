"use client"
import { Moon, Sun, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { NotificationsDropdown } from "@/components/notifications-dropdown"

export function Header() {
    const { setTheme, theme } = useTheme()

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
            <div className="flex items-center">
                <Input
                    className="w-64 mr-4"
                    placeholder="Search..."
                />
            </div>
            <div className="flex items-center space-x-4">
                <NotificationsDropdown />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}