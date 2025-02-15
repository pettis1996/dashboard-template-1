"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
    const [email, setEmail] = useState("user@example.com")
    const [notifications, setNotifications] = useState(true)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log({ email, notifications })
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-white">Settings</h1>
            <div className="bg-purple-950 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="email" className="text-white">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-purple-900 bg-opacity-50 border-purple-700 text-white"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
                        <Label htmlFor="notifications" className="text-white">
                            Enable notifications
                        </Label>
                    </div>
                    <Button type="submit" className="w-full">
                        Save Settings
                    </Button>
                </form>
            </div>
        </div>
    )
}