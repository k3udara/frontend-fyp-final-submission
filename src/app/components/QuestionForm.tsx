"use client"

import { useState } from "react"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function QuestionForm() {
  const [question, setQuestion] = useState("")
  const [accessLevel, setAccessLevel] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch(`${BACKEND_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userQuestion:question, user_access_level: accessLevel }),
      })
      const data = await res.json()
    //   console.log(data)
      setResponse(data.answer)
    } catch (error) {
      console.error("Error:", error)
      setResponse("An error occurred while processing your request.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium mb-1">
            Question
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 "
          />
        </div>
        <div>
          <label htmlFor="accessLevel" className="block text-sm font-medium mb-1">
            Access Level
          </label>
          <input
            type="string"
            id="accessLevel"
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <button type="submit" className="btn w-full">
          Ask
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}

