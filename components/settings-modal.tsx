"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SettingsModalProps {
    isOpen: boolean
    onClose: () => void
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const [emailNotifications, setEmailNotifications] = useState(true)
    const [language, setLanguage] = useState("en")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        console.log("Settings updated:", { emailNotifications, language })
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                    <DialogDescription>Manage your account settings and preferences here.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                                <span>Email Notifications</span>
                                <span className="font-normal text-sm text-muted-foreground">
                                    Receive email about your account activity.
                                </span>
                            </Label>
                            <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="language">Language</Label>
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger id="language">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es">Spanish</SelectItem>
                                    <SelectItem value="fr">French</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}