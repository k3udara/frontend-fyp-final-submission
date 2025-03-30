"use client"

import { useState } from "react"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function UploadForm() {
  const [content, setContent] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`${BACKEND_URL}/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: content }),
      })
      const data = await res.json()
      setResponse(data.message || "Upload successful")
    } catch (error) {
      console.error("Error:", error)
      setResponse("An error occurred while processing your request.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>
        <button type="submit" className="btn w-full">
          Enter
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}

