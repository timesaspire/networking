import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"

export default function LandingPage() {
  const industries = ["Artificial Intelligence", "Fintech", "SaaS", "HealthTech", "Web3", "Supply Chain"]
  const opportunities = [
    { title: "Looking for Series A Lead ($2M)", type: "Investment", company: "DataFlow AI", author: "Sarah J." },
    { title: "Seeking VP of Engineering", type: "Hiring", company: "CyberShield", author: "Marcus C." },
    { title: "Enterprise Distributor in LATAM", type: "B2B Services", company: "Global Reach", author: "Elena R." },
  ]
  const testimonials = [
    { quote: "CONNEX completely changed how we find investors. No more cold outreach.", author: "Founder, Series A Startup" },
    { quote: "The AI matching connects me exactly with the founders I'm looking for.", author: "Partner, Venture Capital" },
  ]

  return (
    <div className="space-y-24 pb-20 appear">
      
      {/* Hero Section */}
      <section className="pt-20 text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-gold-50 text-gold-700 text-sm font-semibold mb-4 border border-gold-100">
          ✨ The AI Relationship Intelligence Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-foreground">
          Find your next big <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-primary">opportunity.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Describe who you want to connect with in natural language. Our AI instantly matches you with the right people, companies, and opportunities.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link href="/register">
            <Button size="lg" className="h-12 px-8 text-base">Get Started Free</Button>
          </Link>
          <Link href="/explore">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white">Explore Directory</Button>
          </Link>
        </div>
      </section>

      {/* Live Opportunities */}
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-display font-bold">Live Opportunities</h2>
            <p className="text-muted-foreground mt-2">Real-time asks and gives from the network.</p>
          </div>
          <Link href="/explore" className="text-gold-700 font-medium hover:underline">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunities.map((opp, i) => (
            <Card key={i} className="glass hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold bg-emerald-soft/10 text-emerald-ink px-2 py-1 rounded">
                    {opp.type}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{opp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{opp.company} • Posted by {opp.author}</p>
                <Link href="/explore">
                  <Button variant="outline" className="w-full">View Match</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industry Explorer */}
      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-display font-bold text-center">Trending Industries</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map(ind => (
            <div key={ind} className="px-6 py-3 bg-white border border-input rounded-full font-medium text-sm shadow-sm hover:border-gold-300 hover:text-gold-700 transition-colors cursor-pointer">
              {ind}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-display font-bold text-center">What Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test, i) => (
            <Card key={i} className="glass beam-border">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg italic font-medium text-foreground/80">"{test.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-300 to-gold-700" />
                  <p className="text-sm font-semibold">{test.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  )
}
