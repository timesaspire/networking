import Link from "next/link"

const MOCK_FOLLOWS = [
  { id: 1, name: "Zaheer Samai", date: "Monday", time: "8:00 PM", color: "bg-emerald-50 text-emerald-600" },
  { id: 2, name: "Vishal Menon", date: "Tuesday", time: "10:00 PM", color: "bg-purple-100 text-purple-700" },
  { id: 3, name: "Adil Sheikh", date: "Monday", time: "11:00 AM", color: "bg-orange-50 text-orange-600" },
  { id: 4, name: "Sarah Jenkins", date: "Wednesday", time: "2:00 PM", color: "bg-blue-50 text-blue-600" },
  { id: 5, name: "Dr. Prashant Patil", date: "Thursday", time: "9:00 AM", color: "bg-pink-50 text-pink-600" },
  { id: 6, name: "Sanjay Kadam", date: "Friday", time: "4:30 PM", color: "bg-yellow-50 text-yellow-700" },
  { id: 7, name: "Priya Patel", date: "Next Monday", time: "10:00 AM", color: "bg-cyan-50 text-cyan-600" },
  { id: 8, name: "David Chen", date: "Next Tuesday", time: "1:15 PM", color: "bg-indigo-50 text-indigo-600" },
  { id: 9, name: "Elena Rodriguez", date: "Next Wednesday", time: "3:45 PM", color: "bg-rose-50 text-rose-600" },
]

const getInitials = (name: string) => {
  return name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
}
export default function PendingFollowsPage() {
  return (
    <div className="w-full max-w-2xl md:max-w-4xl mx-auto appear">
      
      {/* Container for main card and sidebar */}
      <div className="flex gap-2 sm:gap-4 md:gap-6">
        
        {/* Main Card */}
        <div className="flex-1 bg-white rounded-none md:rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border-transparent md:border-gray-100 overflow-hidden flex flex-col pb-4 min-h-[calc(100vh-56px)] md:min-h-[600px]">
          
          {/* Header */}
          <div className="p-3 sm:p-5 flex items-center justify-between border-b border-gray-50 shrink-0">
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="text-primary hover:bg-primary/5 p-1 rounded-md transition-colors md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="font-bold text-[15px] md:text-[18px] tracking-wide text-slate-900 truncate">PENDING FOLLOWUPS</h1>
            </div>
            <button className="text-primary relative p-1 hover:bg-primary/5 rounded-full transition-colors shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1">
            
            {/* Info Box */}
            <div className="p-4 sm:p-6 md:p-8 flex gap-3 sm:gap-4 items-start bg-blue-50/30">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-slate-600 leading-relaxed pr-2">
                You have <span className="font-bold text-primary">{MOCK_FOLLOWS.length}</span> pending followups.
                Please connect with below referrals at mentioned times.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            {/* List Items */}
            <div className="flex flex-col">
              {MOCK_FOLLOWS.map((follow) => (
                <div key={follow.id} className="p-4 sm:p-5 md:p-6 flex items-center justify-between group hover:bg-gray-50/50 transition-colors cursor-pointer border-b border-gray-50">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 min-w-0">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full ${follow.color} flex items-center justify-center font-bold text-[14px] md:text-[15px] shrink-0`}>
                      {getInitials(follow.name)}
                    </div>
                    <div className="min-w-0 truncate pr-2">
                      <h3 className="font-bold text-[14px] sm:text-[15px] md:text-[16px] text-slate-900 group-hover:text-primary transition-colors truncate">{follow.name}</h3>
                      <div className="flex items-center gap-1.5 text-slate-500 mt-0.5 sm:mt-1 truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[11px] sm:text-[12.5px] md:text-[13px] truncate">{follow.date}, {follow.time}</span>
                      </div>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary shrink-0 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Bar (Desktop Only) */}
        <div className="hidden md:flex w-20 shrink-0 bg-[#F4F6F9] rounded-[24px] flex-col items-center py-8 gap-8 relative border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          
          {/* Active Tab Background (Simulated) */}
          <div className="absolute top-6 w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100/50 transition-all z-0" />
          
          {/* Tab 1: Followups (Active) */}
          <Link href="/follows" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] z-10 hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </Link>

          {/* Tab 2: Calendar / Meetings */}
          <Link href="/meetings" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] hover:bg-white hover:rounded-2xl hover:shadow-sm transition-all z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>

          {/* Tab 3: People / Contacts */}
          <Link href="/network" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] hover:bg-white hover:rounded-2xl hover:shadow-sm transition-all z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </Link>

          <div className="w-10 border-t border-gray-300 mt-auto opacity-50 z-10" />

          {/* Tab 4: Activity */}
          <button className="w-12 h-12 flex items-center justify-center text-[#5C45FD] hover:bg-white hover:rounded-2xl hover:shadow-sm transition-all z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}
