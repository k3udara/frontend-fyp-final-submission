import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Access Controlled System",
  description: "An app with two views for questions and uploads",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-black">
        <header className="border-b border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Access Controlled System
            </Link>
            <div className="space-x-4">
              <a href="/question" className="text-sm hover:text-gray-600">
                Question
              </a>
              <a href="/upload" className="text-sm hover:text-gray-600">
                Upload
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

