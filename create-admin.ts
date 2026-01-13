import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("Connecting to MongoDB...")
  
  const superAdmin = await prisma.user.upsert({
    where: { email: 'bukunmi@datasciencenigeria.ai' },
    update: {
      role: 'superadmin',
      password: 'Admin', 
      phone: '+2348107714605'
    },
    create: {
      email: 'bukunmi@datasciencenigeria.ai',
      name: 'Bukunmi Ajiola',
      password: 'Admin',
      role: 'superadmin',
    },
  })
  
  console.log("✅ Done! Super Admin set up:", superAdmin)
}

main()
  .catch((e) => {
    console.error("❌ Error creating admin:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })



// Run with: npx ts-node create-admin.ts