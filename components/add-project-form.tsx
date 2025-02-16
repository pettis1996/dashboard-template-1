"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddProjectForm() {
    const [name, setName] = useState("")
    const [client, setClient] = useState("")
    const [status, setStatus] = useState("planning")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log({ name, client, status })
        
        setName("")
        setClient("")
        setStatus("planning")
    }

    return (
        <div className="bg-purple-950 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Add New Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name" className="text-white">
                        Project Name
                    </Label>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-purple-900 bg-opacity-50 border-purple-700 text-white"
                    />
                </div>
                <div>
                    <Label htmlFor="client" className="text-white">
                        Client
                    </Label>
                    <Input
                        id="client"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        className="bg-purple-900 bg-opacity-50 border-purple-700 text-white"
                    />
                </div>
                <div>
                    <Label htmlFor="status" className="text-white">
                        Status
                    </Label>
                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger id="status" className="bg-purple-900 bg-opacity-50 border-purple-700 text-white">
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-purple-950 text-white">
                            <SelectItem value="planning">Planning</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit" className="w-full">
                    Add Project
                </Button>
            </form>
        </div>
    )
}