const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  if (users.length === 0) {
    console.log("No users in database!");
    return;
  }
  
  // Find the primary user (first user or a specific one)
  const myUser = users[0];
  console.log("Seeding connection requests for:", myUser.name);

  // Create 3 dummy users who want to connect with myUser
  const dummy1 = await prisma.user.create({
    data: { name: "Arjun Mehta", title: "VP of Engineering", email: "arjun@example.com", role: "USER" }
  });
  const dummy2 = await prisma.user.create({
    data: { name: "Neha Gupta", title: "Marketing Director", email: "neha@example.com", role: "USER" }
  });
  const dummy3 = await prisma.user.create({
    data: { name: "Rohan Singh", title: "Startup Founder", email: "rohan@example.com", role: "USER" }
  });

  // Create pending connections sent to myUser
  await prisma.connection.createMany({
    data: [
      { userAId: dummy1.id, userBId: myUser.id, status: "PENDING" },
      { userAId: dummy2.id, userBId: myUser.id, status: "PENDING" },
      { userAId: dummy3.id, userBId: myUser.id, status: "PENDING" },
    ]
  });

  // Create one accepted connection
  const dummy4 = await prisma.user.create({
    data: { name: "Priya Desai", title: "Product Manager", email: "priya@example.com", role: "USER" }
  });
  await prisma.connection.create({
    data: { userAId: myUser.id, userBId: dummy4.id, status: "ACCEPTED" }
  });

  console.log("Successfully added 3 pending requests and 1 accepted connection!");
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
