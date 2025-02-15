"use client"

import { useState, useEffect } from "react"
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

interface Notification {
    id: number
    message: string
    time: string
    read: boolean
}

const initialNotifications: Notification[] = [
    { id: 1, message: "New customer signed up", time: "2 hours ago", read: false },
    { id: 2, message: "Project 'Website Redesign' is due tomorrow", time: "4 hours ago", read: false },
    { id: 3, message: "Team meeting in 30 minutes", time: "1 day ago", read: true },
]

export function NotificationsDropdown() {
    const [enabled, setEnabled] = useState(true)
    const [notifications, setNotifications] = useState(initialNotifications)
    const [hasUnread, setHasUnread] = useState(true)

    useEffect(() => {
        setHasUnread(notifications.some((notification) => !notification.read))
    }, [notifications])

    const markAsRead = (id: number) => {
        setNotifications(
            notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
        )
    }

    const markAllAsRead = () => {
        setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {hasUnread && <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />}
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
                    <>
                        {notifications.map((notification) => (
                            <DropdownMenuItem key={notification.id} className="flex flex-col items-start py-2">
                                <div className="flex items-center justify-between w-full">
                                    <span className={`text-sm ${notification.read ? "text-muted-foreground" : "font-semibold"}`}>
                                        {notification.message}
                                    </span>
                                    {!notification.read && (
                                        <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                                            Mark as read
                                        </Button>
                                    )}
                                </div>
                                <span className="text-xs text-muted-foreground mt-1">{notification.time}</span>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-center" onClick={markAllAsRead}>
                            Mark all as read
                        </DropdownMenuItem>
                    </>
                ) : (
                    <DropdownMenuItem disabled>No new notifications</DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}