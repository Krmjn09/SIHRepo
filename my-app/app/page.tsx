import React from "react"
import Link from "next/link"
import { auth } from "@clerk/nextjs/server"
export default async function Home() {
  const { userId } = await auth()

  return (
    <div className="w-screen h-screen flex justify-center items-center text-white bg-black">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h1 className="text-4xl mb-4">
          Smart Speed Detection: Smiles for Safety, Alerts for Action
        </h1>
        <p className="text-1xl  mb-4">
          Our RADAR speed detection system promotes safe driving by displaying
          happy emojis for compliant speeds and capturing photos when limits are
          exceeded. All data is sent to the cloud for easy access and
          monitoring. Drive smarter with our innovative solution.
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
