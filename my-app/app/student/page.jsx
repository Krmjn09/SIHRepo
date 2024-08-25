"use client"
import React, { useState } from "react"
import Navbar from "@/app/Components/Navbar" // Import the Navbar component

const Student = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [resume, setResume] = useState(null)
  const [mobno, setMobno] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resumeBuffer = await resume.arrayBuffer()

    const response = await fetch("/api/applications", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        mobno,
        resume: Array.from(new Uint8Array(resumeBuffer)), // Convert buffer to array
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      alert("Application submitted successfully!")
    } else {
      alert("Failed to submit application.")
    }
  }


  return (
    <>
      <div className="w-screen h-screen bg-[#6a9ac9] overflow-hidden">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Submit Your Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
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
              <div>
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
              <div>
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
              <div>
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
    </>
  )
}

export default Student
