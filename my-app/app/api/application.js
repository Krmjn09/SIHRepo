// pages/api/applications.js
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, mobno, resume } = req.body

  try {
    // Save candidate data in Neon DB using Prisma
    await prisma.candidate.create({
      data: {
        name,
        email,
        mobno,
        resume: Buffer.from(resume), // Convert resume to a buffer
      },
    })

    res.status(200).json({ message: "Application submitted successfully!" })
  } catch (error) {
    console.error("Database error:", error)
    res.status(500).json({ message: "Failed to submit application." })
  } finally {
    await prisma.$disconnect()
  }
}

export default handler
