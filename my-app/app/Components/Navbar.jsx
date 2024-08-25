import React from "react"
import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <>
      <header className="h-[50px] sm:h-[60px] border-b border-black/10 flex justify-between items-center px-2 sm:px-4 bg-[#081f46] text-cyan-50 ">
        <h1 className="text-xl sm:text-1xl">My Application</h1>
        <nav className="h-full">
          <div className="flex items-center justify-end h-full">
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
