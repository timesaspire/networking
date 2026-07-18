const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database with test accounts...')

  // Clear existing
  await prisma.ask.deleteMany()
  await prisma.give.deleteMany()
  await prisma.user.deleteMany()
  await prisma.company.deleteMany()

  // Password for all test accounts
  const password = await bcrypt.hash('password123', 10)

  // 1. Admin / Platform Manager
  await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@cirq.ai',
      password,
      role: 'ADMIN',
      title: 'Platform Administrator',
      bio: 'Managing the Cirq AI ecosystem.',
    }
  })

  // 2. Startup Founder (Looking for investment)
  await prisma.user.create({
    data: {
      name: 'Sarah Jenkins',
      email: 'sarah@startup.io',
      password,
      role: 'USER',
      title: 'Founder & CEO at InnovateTech',
      bio: 'Building the future of B2B SaaS. Currently raising our Series A.',
      gives: {
        create: [
          { category: 'B2B_SERVICES', detail: 'We offer early access to our enterprise software suite.' }
        ]
      },
      asks: {
        create: [
          { category: 'INVESTMENT', detail: 'Looking for $2M Series A lead investor with SaaS expertise.' },
          { category: 'HIRING', detail: 'Seeking a seasoned VP of Sales.' }
        ]
      }
    }
  })

  // 3. Investor (Looking to invest)
  await prisma.user.create({
    data: {
      name: 'Marcus Chen',
      email: 'marcus@vc.fund',
      password,
      role: 'USER',
      title: 'Partner at Horizon Ventures',
      bio: 'Early-stage investor focusing on B2B SaaS, AI, and developer tools.',
      gives: {
        create: [
          { category: 'INVESTMENT', detail: 'Lead checks of $1M - $3M in Seed and Series A rounds.' },
          { category: 'MENTORSHIP', detail: 'Go-to-market strategy for enterprise software.' },
          { category: 'ADVISORY', detail: 'Board member for high-growth tech startups.' }
        ]
      },
      asks: {
        create: [
          { category: 'INVESTMENT', detail: 'Looking for promising AI and B2B SaaS startups.' }
        ]
      }
    }
  })

  // 4. Service Provider / Distributor
  await prisma.user.create({
    data: {
      name: 'Elena Rodriguez',
      email: 'elena@globaldist.com',
      password,
      role: 'USER',
      title: 'VP of Partnerships at Global Distributors',
      bio: 'Connecting innovative hardware products with enterprise buyers across Europe and LATAM.',
      gives: {
        create: [
          { category: 'DISTRIBUTORS', detail: 'We have a network of 500+ enterprise retailers globally.' }
        ]
      },
      asks: {
        create: [
          { category: 'B2B_SERVICES', detail: 'Looking for innovative consumer electronics to distribute.' }
        ]
      }
    }
  })

  console.log('Seed completed successfully!')
  console.log('\n--- Test Accounts Created ---')
  console.log('1. Admin:')
  console.log('   Email: admin@cirq.ai')
  console.log('   Pass:  password123')
  console.log('\n2. Startup Founder:')
  console.log('   Email: sarah@startup.io')
  console.log('   Pass:  password123')
  console.log('\n3. Investor:')
  console.log('   Email: marcus@vc.fund')
  console.log('   Pass:  password123')
  console.log('\n4. Distributor:')
  console.log('   Email: elena@globaldist.com')
  console.log('   Pass:  password123')
  console.log('-----------------------------\n')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
