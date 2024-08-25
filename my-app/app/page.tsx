import React from "react"
import Link from "next/link"
import { auth } from "@clerk/nextjs/server"
export default async function Home() {
  const { userId } = await auth()

  return (
    <div className=" w-screen h-screen flex justify-center items-center text-white bg-black/90">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h1 className="text-6xl mb-4">Smart india hackathon SIH</h1>
        <p className="text-1xl  mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          error, culpa quidem ipsa sit amet sint ratione aliquid laborum
          quibusdam aperiam soluta? Inventore ad assumenda harum voluptas
          architecto nesciunt aperiam!
        </p>
        <div>
          <Link href="/checkuser">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
