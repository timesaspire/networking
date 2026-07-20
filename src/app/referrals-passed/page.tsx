"use client"

import Link from "next/link"

const MOCK_PASSED = [
  { id: 1, name: "Sonnam Wanchuk", receiver: "Zaheer S.", date: "15 Jul, 2026" },
  { id: 2, name: "Dr. Prashat Patil", receiver: "Ninad P.", date: "10 Jul, 2026" },
  { id: 3, name: "Sanjay Kadam", receiver: "Abhay", date: "02 Jul, 2026" },
  { id: 4, name: "Rugwed Deshpande", receiver: "Zaheer S.", date: "28 Jun, 2026" },
  { id: 5, name: "David Johnson", receiver: "Sanjay K.", date: "15 Jun, 2026" },
  { id: 6, name: "Maria Garcia", receiver: "Anita M.", date: "05 Jun, 2026" },
  { id: 7, name: "Kenji Sato", receiver: "Abhay", date: "22 May, 2026" },
]

export default function ReferralsPassedPage() {
  return (
    <div className="w-full max-w-2xl md:max-w-4xl mx-auto pb-24 appear">
      
      {/* Container for main card and sidebar */}
      <div className="flex gap-2 sm:gap-4 md:gap-6">
        
        {/* Main Card */}
        <div className="flex-1 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col pb-4 min-h-screen">
          
          {/* Header */}
          <div className="p-4 sm:p-5 md:p-6 flex items-center justify-between border-b border-gray-50 shrink-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-slate-700 hover:bg-gray-50 p-1.5 rounded-md transition-colors md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-slate-900 truncate tracking-wide uppercase">Referrals Passed</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="text-slate-700 relative p-2 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">
                  <span className="sr-only">3</span>
                </span>
              </button>
              
              {/* Profile Avatar (Visible on Mobile) */}
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50 md:hidden shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 pt-6">
            
            {/* List Container */}
            <div className="border border-gray-100 rounded-[20px] bg-white overflow-hidden flex flex-col shadow-sm">
              
              {MOCK_PASSED.map((ref, index) => (
                <div key={ref.id} className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-50 hover:bg-[#5C45FD]/5 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-12 rounded-xl bg-[#5C45FD]/5 text-[#5C45FD] flex items-center justify-center font-bold text-[18px] shrink-0 border border-[#5C45FD]/10">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[16px] text-slate-900">{ref.name}</h3>
                      <p className="text-[14px] text-slate-600 mt-0.5">Given to {ref.receiver}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[13px] font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                      {ref.date}
                    </span>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Right Side Bar (Desktop Only) */}
        <div className="hidden md:flex w-20 shrink-0 bg-[#F4F6F9] rounded-[24px] flex-col items-center py-8 gap-8 relative border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          
          {/* Tab 1: Followups */}
          <Link href="/follows" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] hover:bg-white hover:rounded-2xl hover:shadow-sm transition-all z-10">
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
