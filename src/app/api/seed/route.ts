import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

const mockProfiles = [
  {
    name: "Sarah Jenkins",
    email: "sarah@example.com",
    title: "VP of Sales - TechCorp",
    bio: "15+ years in B2B SaaS sales. Passionate about building high-performing revenue teams and scaling startups from $1M to $10M ARR. Always looking for innovative GTM strategies.",
    role: "USER",
    asks: [{ category: "HIRING", detail: "Looking for a seasoned Enterprise Account Executive in the APAC region." }],
    gives: [{ category: "INTRODUCTION", detail: "Can introduce founders to key decision-makers in Fortune 500 SaaS companies." }],
    status: "PENDING"
  },
  {
    name: "Dr. Prashant Patil",
    email: "prashant@example.com",
    title: "Chief Medical Officer",
    bio: "Cardiologist turned hospital administrator. Focused on leveraging AI in healthcare to improve patient outcomes. Currently leading digital transformation at City Hospital.",
    role: "USER",
    asks: [{ category: "ADVICE", detail: "Seeking advice on implementing scalable telemedicine infrastructure." }],
    gives: [{ category: "MENTORSHIP", detail: "Happy to mentor health-tech startups on clinical validation and compliance." }],
    status: "ACCEPTED"
  },
  {
    name: "Zaheer Samai",
    email: "zaheer@example.com",
    title: "Founder @ StartupInc",
    bio: "Building the future of decentralized supply chains. Previously led logistics at Amazon. YC S22 alumni.",
    role: "USER",
    asks: [{ category: "INVESTMENT", detail: "Raising a $2M Seed round. Looking for strategic angels in the logistics space." }],
    gives: [{ category: "ADVICE", detail: "Can offer advice on YC application strategy and initial product-market fit." }],
    status: "ACCEPTED"
  },
  {
    name: "Sanjay Kadam",
    email: "sanjay@example.com",
    title: "Director of Marketing - GrowthCo",
    bio: "Growth marketer specializing in performance marketing and viral loops. Have managed over $10M in ad spend across Google and Meta.",
    role: "USER",
    asks: [{ category: "SERVICES", detail: "Looking for a top-tier SEO agency to overhaul our content strategy." }],
    gives: [{ category: "MENTORSHIP", detail: "Can review your startup's paid acquisition strategy." }],
    status: "PENDING"
  },
  {
    name: "Anita Sharma",
    email: "anita@example.com",
    title: "Senior Product Manager",
    bio: "Data-driven PM with a background in engineering. I love translating complex user needs into simple, elegant product experiences.",
    role: "USER",
    asks: [{ category: "HIRING", detail: "Looking for a Senior React Native developer for a consumer social app." }],
    gives: [{ category: "SERVICES", detail: "Happy to do a free UI/UX teardown of your MVP." }],
    status: "ACCEPTED"
  },
  {
    name: "David Chen",
    email: "david@example.com",
    title: "Venture Capitalist - Blue Fund",
    bio: "Partner at Blue Fund. We invest in early-stage fintech and climate-tech startups. Former 2x founder.",
    role: "USER",
    asks: [{ category: "INTRODUCTION", detail: "Always looking for introductions to exceptional technical founders in climate-tech." }],
    gives: [{ category: "INVESTMENT", detail: "We write $500k-$1.5M checks for Seed/Pre-seed rounds." }],
    status: "PENDING"
  },
  {
    name: "Marcus Johnson",
    email: "marcus@example.com",
    title: "CEO - InnovateTech",
    bio: "Hardware enthusiast. Currently building smart IoT devices for industrial manufacturing. 20 years in supply chain hardware.",
    role: "USER",
    asks: [{ category: "SERVICES", detail: "Seeking reliable manufacturing partners in Vietnam or Mexico." }],
    gives: [{ category: "INTRODUCTION", detail: "Can connect you with top-tier hardware prototyping labs in Shenzhen." }],
    status: "ACCEPTED"
  },
  {
    name: "Priya Patel",
    email: "priyap@example.com",
    title: "Lead UX Designer",
    bio: "Designing accessible and beautiful interfaces. Previously at Google and Airbnb. I believe design is how it works, not just how it looks.",
    role: "USER",
    asks: [{ category: "HIRING", detail: "Looking for a junior UX researcher to join my team." }],
    gives: [{ category: "MENTORSHIP", detail: "I run weekly portfolio review sessions for junior designers." }],
    status: "ACCEPTED"
  },
  {
    name: "Alex Mercer",
    email: "alex@example.com",
    title: "Head of Growth",
    bio: "Specialist in B2C growth loops, referral programs, and community building. Grew last startup from 10k to 1M users in 18 months.",
    role: "USER",
    asks: [{ category: "ADVICE", detail: "Looking to connect with community managers who have successfully monetized discord servers." }],
    gives: [{ category: "INTRODUCTION", detail: "Can introduce you to some of the best freelance copywriters in the business." }],
    status: "PENDING"
  },
  {
    name: "Elena Rodriguez",
    email: "elena@example.com",
    title: "Principal Data Scientist",
    bio: "PhD in Machine Learning. Building LLM-powered applications for the legal industry. Passionate about ethical AI.",
    role: "USER",
    asks: [{ category: "INTRODUCTION", detail: "Looking to meet legal-tech founders or partners at large law firms." }],
    gives: [{ category: "ADVICE", detail: "Can advise on setting up your data pipeline and fine-tuning open-source LLMs." }],
    status: "ACCEPTED"
  }
];

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const users = await prisma.user.findMany({
      orderBy: { id: 'desc' }
    });
    
    if (users.length === 0) {
      return NextResponse.json({ message: "No primary user found to attach connections to. Please register first." }, { status: 400 });
    }
    
    // Find the primary user (the admin, or the specified email, or the latest registered user)
    let myUser;
    if (email) {
      myUser = users.find(u => u.email === email);
      if (!myUser) return NextResponse.json({ error: `User with email ${email} not found.` }, { status: 404 });
    } else {
      myUser = users.find(u => u.email === "admin@cirq.ai") || users[0];
    }

    // Clear existing mock data
    await prisma.user.deleteMany({
      where: { email: { in: mockProfiles.map(p => p.email) } }
    });

    for (const profile of mockProfiles) {
      const { asks, gives, status, ...userData } = profile;
      
      const newUser = await prisma.user.create({
        data: {
          ...userData,
          asks: { create: asks },
          gives: { create: gives }
        }
      });

      if (status === "PENDING") {
        // Send request TO the main user
        await prisma.connection.create({
          data: { userAId: newUser.id, userBId: myUser.id, status: "PENDING" }
        });
      } else if (status === "ACCEPTED") {
        // Connect with the main user
        await prisma.connection.create({
          data: { userAId: myUser.id, userBId: newUser.id, status: "ACCEPTED" }
        });
      }
    }

    return NextResponse.json({ message: `Successfully seeded 10 rich profiles and established connections for ${myUser.name}!` });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 });
  }
}
