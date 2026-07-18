import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const mockProfiles = [
  { id: 1, name: "Sarah Jenkins", role: "Founder & CEO", company: "InnovateTech", industry: "SaaS", country: "US", matchScore: 94 },
  { id: 2, name: "Marcus Chen", role: "Partner", company: "Horizon Ventures", industry: "Venture Capital", country: "UK", matchScore: 88 },
  { id: 3, name: "Elena Rodriguez", role: "VP Partnerships", company: "Global Distributors", industry: "Supply Chain", country: "ES", matchScore: 76 },
  { id: 4, name: "David Kim", role: "CTO", company: "DataFlow AI", industry: "Artificial Intelligence", country: "CA", matchScore: 91 },
  { id: 5, name: "Aisha Patel", role: "Product Manager", company: "HealthSync", industry: "HealthTech", country: "US", matchScore: 82 },
  { id: 6, name: "James Wilson", role: "Angel Investor", company: "Independent", industry: "Fintech", country: "UK", matchScore: 65 },
]

export default function Explore() {
  return (
    <div className="space-y-8 appear max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Directory</h1>
          <p className="text-muted-foreground mt-2">Discover people and companies in the network.</p>
        </div>
        
        <div className="flex gap-2">
          <select className="border border-input rounded-md px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-gold-500 outline-none">
            <option>All Industries</option>
            <option>SaaS</option>
            <option>Artificial Intelligence</option>
            <option>Venture Capital</option>
            <option>HealthTech</option>
          </select>
          <select className="border border-input rounded-md px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-gold-500 outline-none">
            <option>All Countries</option>
            <option>US</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Spain</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProfiles.map((profile) => (
          <Card key={profile.id} className="glass hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-soft to-sky-ink flex items-center justify-center text-white font-semibold">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold">{profile.name}</h3>
                    <p className="text-xs text-muted-foreground">{profile.role}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-emerald-soft/10 text-emerald-ink px-2 py-1 rounded">
                  {profile.matchScore}% Match
                </span>
              </div>
              <div className="space-y-1 mb-6 text-sm">
                <p><span className="text-muted-foreground">Company:</span> {profile.company}</p>
                <p><span className="text-muted-foreground">Industry:</span> {profile.industry}</p>
                <p><span className="text-muted-foreground">Location:</span> {profile.country}</p>
              </div>
              <Link href={`/profile/${profile.id}`}>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">View Profile</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
