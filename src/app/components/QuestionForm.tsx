"use client"

import type React from "react"

import { useState } from "react"
import { Send, Sparkles } from "lucide-react"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

// Access level options
const accessLevels = [
  { id: "1", name: "CEO" },
  { id: "2", name: "C-suite level" },
  { id: "3", name: "Directors" },
  { id: "4", name: "Managers" },
  { id: "5", name: "Finance team" },
  { id: "6", name: "Human Resources team" },
  { id: "7", name: "Engineering team" },
  { id: "8", name: "Legal team" },
  { id: "9", name: "Marketing team" },
  { id: "10", name: "Product Management team" },
  { id: "11", name: "Customer Support team" },
  { id: "12", name: "IT Security team" },
  { id: "13", name: "Sales team" },
  { id: "14", name: "Quality Assurance team" },
  { id: "15", name: "Research and Development team" },
  { id: "16", name: "Compliance team" },
  { id: "17", name: "Operations team" },
  { id: "18", name: "Information Technology team" },
]

export default function QuestionForm() {
  const [question, setQuestion] = useState("")
  const [accessLevel, setAccessLevel] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!question || !accessLevel) return

    setIsLoading(true)

    try {
      const res = await fetch(`${BACKEND_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userQuestion: question, user_access_level: accessLevel }),
      })
      const data = await res.json()
      setResponse(data.answer)
    } catch (error) {
      console.error("Error:", error)
      setResponse("An error occurred while processing your request.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-600/30 to-indigo-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-blue-600/30 to-cyan-700/20 rounded-full blur-3xl"></div>

        <div className="backdrop-blur-sm bg-white/90 border-0 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] overflow-hidden rounded-xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></div>

          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(90,90,255,0.2),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(60,180,255,0.2),transparent_70%)]"></div>

            <h2 className="text-3xl font-bold flex items-center gap-3 relative z-10">
              <Sparkles className="h-6 w-6 text-cyan-300" />
              Ask a Question
            </h2>
            <p className="text-slate-300 mt-2 relative z-10">Get instant answers with advanced access control</p>
          </div>

          <div className="p-8 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label htmlFor="question" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  Your Question
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <textarea
                    id="question"
                    placeholder="What would you like to know?"
                    className="min-h-40 w-full px-4 py-3 resize-none bg-white relative border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="accessLevel" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  Access Level
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <select
                    id="accessLevel"
                    value={accessLevel}
                    onChange={(e) => setAccessLevel(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white relative border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 appearance-none"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="" disabled>
                      Select access level
                    </option>
                    {accessLevels.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.id} - {level.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <button
                    type="submit"
                    className="relative w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium py-4 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2 text-lg">
                        Ask <Send className="h-5 w-5 ml-1" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {response && (
        <div className="mt-12 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-purple-600/20 to-blue-700/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-600/20 to-cyan-700/10 rounded-full blur-3xl"></div>

          <div className="backdrop-blur-sm bg-white/90 border-0 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(90,90,255,0.2),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(60,180,255,0.2),transparent_70%)]"></div>

              <h2 className="text-2xl font-bold flex items-center gap-2 relative z-10">Response</h2>
            </div>

            <div className="p-8 relative z-10">
              <div className="prose max-w-none">
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{response}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

