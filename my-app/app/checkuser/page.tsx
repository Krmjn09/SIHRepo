"use client"
import React from "react"
import Navbar from "@/app/Components/Navbar" // Import the Navbar component
import { useRouter } from "next/navigation" // Import the useRouter hook for navigation

const CheckUser = () => {
  const router = useRouter() // Initialize the router

  // Function to handle redirection
  const handleRedirect = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen  bg-[#4682B4]">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome!</h1>
          <p className="text-gray-600 mb-8">
            Please select your role to continue:
          </p>
          <div className="space-x-4">
            <button
              onClick={() => handleRedirect("/student")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Are you a Candidate?
            </button>
            <button
              onClick={() => handleRedirect("/page2")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Are you an Interviewer?
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckUser
