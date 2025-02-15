"use client"

import type React from "react"

import { useState } from "react"
import { Upload, File, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FileManagerPage() {
    const [files, setFiles] = useState<File[]>([])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files))
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (e.dataTransfer.files) {
            setFiles(Array.from(e.dataTransfer.files))
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">File Manager</h1>
            <div className="glass-effect rounded-lg p-6">
                <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Drag and drop files here, or click to select files</p>
                    <Input type="file" className="hidden" onChange={handleFileChange} multiple id="file-upload" />
                    <Button className="mt-4" onClick={() => document.getElementById("file-upload")?.click()}>
                        Select Files
                    </Button>
                </div>
                {files.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Uploaded Files:</h3>
                        <ul className="space-y-2">
                            {files.map((file, index) => (
                                <li key={index} className="flex items-center justify-between bg-background p-2 rounded-md">
                                    <div className="flex items-center">
                                        <File className="h-5 w-5 mr-2" />
                                        <span>{file.name}</span>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => setFiles(files.filter((_, i) => i !== index))}>
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}