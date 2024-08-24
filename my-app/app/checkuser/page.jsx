"use client"
import React, { useState } from "react"
import { UserButton } from "@clerk/nextjs"

const CheckUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [resume, setResume] = useState(null)
  const [mobno, setMobno] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!resume) return

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("resume", resume)
    formData.append("mobno", mobno)

    const response = await fetch("/api/applications", {
      method: "POST",
      body: formData,
    })

    if (response.ok) {
      alert("Application submitted successfully!")
    } else {
      alert("Failed to submit application.")
    }
  }

  return (
    <div className="w-screen h-screen relative">
      <aside className="absolute left-0 top-0 h-full w-[80px] sm:w-[100px] border-r border-black/10 flex flex-col items-center">
        <div className="px-4 my-4"></div>
      </aside>
      <div className="ml-[80px] sm:ml-[100px] h-full w-[calc(100vw-80px)] sm:w-[calc(100vw-100px)]">
        <header className="h-[50px] sm:h-[60px] border-b border-black/10 flex justify-between items-center px-2 sm:px-4">
          <h1 className="text-xl sm:text-1xl">My Application</h1>
          <nav className="h-full">
            <div className="flex items-center justify-end h-full">
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>
        </header>
        <div className="max-w-lg mx-auto my-12 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Submit Your Application</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobno" className="block font-bold mb-2">
                Mobile number:
              </label>
              <input
                type="number"
                id="mobno"
                value={mobno}
                onChange={(e) => setMobno(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="resume" className="block font-bold mb-2">
                Upload your document:
              </label>
              <input
                type="file"
                id="resume"
                onChange={(e) => setResume(e.target.files[0] || null)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 text-lg bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckUser
