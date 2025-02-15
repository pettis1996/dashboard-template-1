"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

const notifications = [
    { id: 1, message: "New customer signed up" },
    { id: 2, message: "Project 'Website Redesign' is due tomorrow" },
    { id: 3, message: "Team meeting in 30 minutes" },
]

export function NotificationsDropdown() {
    const [enabled, setEnabled] = useState(true)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                    Notifications
                    <div className="flex items-center space-x-2">
                        <Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Toggle notifications" />
                        <span className="text-sm text-muted-foreground">{enabled ? "On" : "Off"}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <DropdownMenuItem key={notification.id}>{notification.message}</DropdownMenuItem>
                    ))
                ) : (
                    <DropdownMenuItem disabled>No new notifications</DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}