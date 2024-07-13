import { prisma } from "@/db/client"
import { NextRequest, NextResponse } from "next/server";


export  async function GET(req: Request) {

  const { page = 1, limit = 10, sort = 'certificateID', order = 'asc', filter = '' } = req.query;

  try {
    const certificates = await prisma.student_Certificate.findMany({
      where: {
        OR: [
          { name: { contains: filter, mode: 'insensitive' } },
          { email: { contains: filter, mode: 'insensitive' } },
          { certificationName: { contains: filter, mode: 'insensitive' } },
          { issuedBy: { contains: filter, mode: 'insensitive' } }
        ]
      },
      skip: (parseInt(page) - 1) * parseInt(limit),
      take: parseInt(limit),
      orderBy: {
        [sort]: order,
      }
    });

    const total = await prisma.student_Certificate.count({
      where: {
        OR: [
          { name: { contains: filter, mode: 'insensitive' } },
          { email: { contains: filter, mode: 'insensitive' } },
          { certificationName: { contains: filter, mode: 'insensitive' } },
          { issuedBy: { contains: filter, mode: 'insensitive' } }
        ]
      }
    });

    return NextResponse.json({ certificates, total }, { status: 200 }) 
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
