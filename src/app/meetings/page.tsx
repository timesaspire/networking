import Link from "next/link"

const MOCK_MEETINGS = [
  { id: 1, type: "In Person", name: "Sameer Koiplan", day: "Monday", time: "3:00 PM", title: "Meeting in person", desc: "In Person meet with Sameer Koiplan", initials: "SK" },
  { id: 2, type: "Zoom", name: "Aney Parikh", day: "Tuesday", time: "2:00 PM", title: "Zoom Meeting", desc: "Zoom meeting with Aney Parikh", initials: "AP" },
  { id: 3, type: "In Person", name: "Dr. Prashat Patil", day: "Wednesday", time: "11:30 AM", title: "Coffee Meet", desc: "In Person meet with Dr. Patil", initials: "DP" },
  { id: 4, type: "Zoom", name: "Jayesh Patel", day: "Thursday", time: "4:00 PM", title: "Sync up", desc: "Zoom meeting with Jayesh", initials: "JP" },
  { id: 5, type: "Zoom", name: "Sarah Jenkins", day: "Friday", time: "9:00 AM", title: "Weekly Sync", desc: "Zoom meeting with Sarah", initials: "SJ" },
]
export default function PendingMeetingsPage() {
  return (
    <div className="w-full max-w-2xl md:max-w-4xl mx-auto pb-24 appear">
      
      {/* Container for main card and sidebar */}
      <div className="flex gap-2 sm:gap-4 md:gap-6">
        
        {/* Main Card */}
        <div className="flex-1 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col pb-4 min-h-screen">
          
          {/* Header */}
          <div className="p-4 sm:p-5 md:p-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-slate-700 hover:bg-gray-50 p-1.5 rounded-md transition-colors md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-slate-900 truncate">Pending Meetings</h1>
            </div>
            <button className="text-slate-700 relative p-2 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 sm:px-6 md:px-8">
            
            {/* Info Box */}
            <div className="p-4 md:p-5 flex gap-3 items-center bg-[#F4F7FE] rounded-[16px] mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-700 leading-relaxed pr-2 font-medium">
                You have <span className="text-blue-600 font-bold">{MOCK_MEETINGS.length}</span> pending meetings.
              </p>
            </div>

            {/* List Items */}
            <div className="flex flex-col gap-4 md:gap-6">
              
              {MOCK_MEETINGS.map((meeting) => {
                const isInPerson = meeting.type === "In Person"
                const bgClass = isInPerson ? "bg-[#FFFBF4] border-orange-100" : "bg-[#F4F7FE] border-blue-100"
                const barClass = isInPerson ? "bg-orange-400" : "bg-blue-600"
                const avatarBg = isInPerson ? "bg-orange-100" : "bg-blue-200/50"
                const badgeBg = isInPerson ? "bg-orange-100/70 text-orange-800" : "bg-blue-100 text-blue-700 border border-blue-200/50"
                
                return (
                  <div key={meeting.id} className={`relative rounded-[16px] border p-4 sm:p-5 md:p-6 overflow-hidden group hover:shadow-md transition-shadow cursor-pointer ${bgClass}`}>
                    {/* Left accent bar */}
                    <div className={`absolute left-0 top-3 bottom-3 w-1.5 md:w-2 rounded-r-md ${barClass}`} />
                    
                    <div className="pl-3 sm:pl-4 md:pl-5">
                      {/* Top Row */}
                      <div className="flex justify-between items-start mb-3 md:mb-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full text-slate-800 flex items-center justify-center font-bold text-[15px] md:text-[17px] shrink-0 ${avatarBg}`}>
                            {meeting.initials}
                          </div>
                          <div className="min-w-0 truncate">
                            <h3 className="font-bold text-[16px] md:text-[18px] text-slate-900 truncate">{meeting.name}</h3>
                          </div>
                        </div>
                        {/* Badge */}
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full shrink-0 ${badgeBg}`}>
                          {isInPerson ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                          <span className="text-[12px] md:text-[13px] font-semibold">{meeting.type}</span>
                        </div>
                      </div>

                      {/* Middle Row: Meta */}
                      <div className="flex items-center gap-3 text-slate-600 text-[13px] md:text-[14px] mb-4 md:mb-5">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-4.5 md:w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{meeting.day}, {meeting.time}</span>
                        </div>
                        <div className="w-px h-3 md:h-4 bg-gray-300 shrink-0" />
                        <div className="flex items-center gap-1.5 min-w-0 truncate">
                          {isInPerson ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-4.5 md:w-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-4.5 md:w-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                          <span className="truncate">{meeting.title}</span>
                        </div>
                      </div>

                      {/* Bottom Row: Details & Chevron */}
                      <div className="flex justify-between items-end relative">
                        <div className="min-w-0 pr-8">
                          <p className="text-[12px] md:text-[13px] text-slate-500 mb-0.5 md:mb-1">Meeting Type</p>
                          <p className="text-[14px] md:text-[15px] text-slate-800 font-medium truncate">{meeting.desc}</p>
                        </div>
                        <div className="absolute right-0 bottom-2 text-slate-400 group-hover:text-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Side Bar (Desktop Only) */}
        <div className="hidden md:flex w-20 shrink-0 bg-[#F4F6F9] rounded-[24px] flex-col items-center py-8 gap-8 relative border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          
          {/* Active Tab Background (Simulated) */}
          <div className="absolute top-[104px] w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100/50 transition-all z-0" />
          
          {/* Tab 1: Followups */}
          <Link href="/follows" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] hover:bg-white hover:rounded-2xl hover:shadow-sm transition-all z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </Link>

          {/* Tab 2: Calendar / Meetings (Active) */}
          <Link href="/meetings" className="w-12 h-12 flex items-center justify-center text-emerald-600 z-10 hover:scale-110 transition-transform">
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
