"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ListCollapse } from "lucide-react"

interface Permission {
    id: string;
    label: string;
}

export default function SettingsPage() {
    const [email, setEmail] = useState("user@example.com")
    const [notifications, setNotifications] = useState(true)

    const permissions: Permission[] = [
        { id: "notifications", label: "Enable Notifications" },
        { id: "emailAlerts", label: "Receive Email Alerts" },
        { id: "darkMode", label: "Enable Dark Mode" },
        { id: "autoUpdates", label: "Enable Auto Updates" },
        { id: "locationAccess", label: "Allow Location Access" },
        { id: "dataSync", label: "Enable Data Sync" },
    ];

    const [settings, setSettings] = useState<Record<string, boolean>>(
        permissions.reduce((acc, perm) => ({ ...acc, [perm.id]: false }), {})
    );

    const toggleSetting = (id: string) => {
        setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
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
                    <div>
                        <Label htmlFor="email" className="text-white">
                            Permissions
                        </Label>
                        <Collapsible>
                            <CollapsibleTrigger className="flex justify-center items-center gap-2">
                                <ListCollapse size={18} /> Edit Permissions 
                            </CollapsibleTrigger>
                            <CollapsibleContent className="overflow-y-auto px-5 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {permissions.map((perm) => (
                                    <div key={perm.id} className="flex items-center gap-3">
                                        <Switch id={perm.id} checked={settings[perm.id]} onCheckedChange={() => toggleSetting(perm.id)} />
                                        <Label htmlFor={perm.id} className="text-white">
                                            {perm.label}
                                        </Label>
                                    </div>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-white">
                            Notifications
                        </Label>
                        <div className="flex items-center space-x-2 pt-2">
                            <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
                            <Label htmlFor="notifications" className="text-white">
                                Enable notifications
                            </Label>
                        </div>
                    </div>
                    <div className="space-x-5 flex justify-end w-full">
                        <Button type="submit">
                            Save Settings
                        </Button>
                        <Button type="button" className="bg-red-600 text-white" onClick={() => console.log("Reset settings")}>
                            Reset Settings
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}