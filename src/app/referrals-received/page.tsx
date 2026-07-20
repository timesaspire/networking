"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function ReferralsReceivedPage() {
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [isScoreOpen, setIsScoreOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [sortBy, setSortBy] = useState<"Date" | "Score">("Date")
  const [scoreFilter, setScoreFilter] = useState<"All Score" | "90+ Score" | "Under 90">("All Score")
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Pending" | "Completed">("All")

  const MOCK_RECEIVED = [
    { id: 1, name: "ABHISHEK JOSHI", company: "Times Internet", reason: "Looking for SEO services", score: 91, initials: "AJ", date: "2026-07-18", location: "Mumbai", status: "Active" },
    { id: 2, name: "PRIYA SHARMA", company: "Tech Solutions Inc", reason: "Needs a new website revamp", score: 85, initials: "PS", date: "2026-07-16", location: "Bangalore", status: "Pending" },
    { id: 3, name: "ROHAN MEHTA", company: "Startup Hub", reason: "Consulting for digital marketing", score: 94, initials: "RM", date: "2026-07-15", location: "Delhi", status: "Active" },
    { id: 4, name: "ANITA KUMAR", company: "Retail Ventures", reason: "E-commerce platform build", score: 88, initials: "AK", date: "2026-07-14", location: "Pune", status: "Completed" },
    { id: 5, name: "DAVID SMITH", company: "Global Tech", reason: "Cloud migration assistance", score: 96, initials: "DS", date: "2026-07-10", location: "New York", status: "Active" },
    { id: 6, name: "KAVITA SINGH", company: "Design Studio", reason: "UI/UX refresh project", score: 79, initials: "KS", date: "2026-07-05", location: "Chennai", status: "Pending" },
  ]

  const filteredAndSorted = MOCK_RECEIVED.filter(ref => {
    if (scoreFilter === "90+ Score" && ref.score < 90) return false
    if (scoreFilter === "Under 90" && ref.score >= 90) return false
    if (statusFilter !== "All" && ref.status !== statusFilter) return false
    return true
  }).sort((a, b) => {
    if (sortBy === "Date") return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sortBy === "Score") return b.score - a.score
    return 0
  })

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsSortOpen(false)
        setIsScoreOpen(false)
        setIsFilterOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="w-full max-w-2xl md:max-w-4xl mx-auto md:pb-24 appear">
      
      {/* Container for main card and sidebar */}
      <div className="flex gap-2 sm:gap-4 md:gap-6">
        
        {/* Main Card */}
        <div className="flex-1 bg-white rounded-none md:rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border-transparent md:border-gray-100 overflow-hidden flex flex-col pb-4 min-h-[calc(100vh-56px)] md:min-h-[600px]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 md:p-6 flex items-center justify-between border-b border-gray-50 shrink-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-slate-700 hover:bg-gray-50 p-1.5 rounded-md transition-colors md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-slate-900 truncate tracking-wide">REFERRALS RECEIVED</h1>
            </div>
            <button className="text-slate-700 relative p-2 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">
                <span className="sr-only">3</span>
              </span>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 pt-4">
            
            {/* Toolbar */}
            <div ref={menuRef} className="flex items-center mb-6 flex-wrap gap-2 sm:gap-3 relative">
              
              {/* Sort By Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => { setIsSortOpen(!isSortOpen); setIsScoreOpen(false); setIsFilterOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg text-slate-700 hover:bg-gray-50 transition-colors text-[13px] sm:text-[14px] font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                  Sort: {sortBy}
                </button>
                {isSortOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 animate-in fade-in slide-in-from-top-2">
                    <button onClick={() => { setSortBy("Date"); setIsSortOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors ${sortBy === 'Date' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>Date</button>
                    <button onClick={() => { setSortBy("Score"); setIsSortOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors ${sortBy === 'Score' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>Score</button>
                  </div>
                )}
              </div>

              {/* Score Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => { setIsScoreOpen(!isScoreOpen); setIsSortOpen(false); setIsFilterOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg text-slate-700 hover:bg-gray-50 transition-colors text-[13px] sm:text-[14px] font-medium"
                >
                  {scoreFilter}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-400 transition-transform ${isScoreOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isScoreOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 animate-in fade-in slide-in-from-top-2">
                    <button onClick={() => { setScoreFilter("All Score"); setIsScoreOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors ${scoreFilter === 'All Score' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>All Score</button>
                    <button onClick={() => { setScoreFilter("90+ Score"); setIsScoreOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors ${scoreFilter === '90+ Score' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>90+ Score</button>
                    <button onClick={() => { setScoreFilter("Under 90"); setIsScoreOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors ${scoreFilter === 'Under 90' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>Under 90</button>
                  </div>
                )}
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => { setIsFilterOpen(!isFilterOpen); setIsSortOpen(false); setIsScoreOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg text-slate-700 hover:bg-gray-50 transition-colors text-[13px] sm:text-[14px] font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  {statusFilter === 'All' ? 'Filter' : statusFilter}
                </button>
                {isFilterOpen && (
                  <div className="absolute top-full left-0 sm:right-0 sm:left-auto mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 animate-in fade-in slide-in-from-top-2">
                    <button onClick={() => { setStatusFilter("All"); setIsFilterOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors flex items-center justify-between ${statusFilter === 'All' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>
                      All
                    </button>
                    <button onClick={() => { setStatusFilter("Active"); setIsFilterOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors flex items-center justify-between ${statusFilter === 'Active' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>
                      Active <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </button>
                    <button onClick={() => { setStatusFilter("Pending"); setIsFilterOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors flex items-center justify-between ${statusFilter === 'Pending' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>
                      Pending <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    </button>
                    <button onClick={() => { setStatusFilter("Completed"); setIsFilterOpen(false) }} className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors flex items-center justify-between ${statusFilter === 'Completed' ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'}`}>
                      Completed <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* List Items */}
            <div className="flex flex-col gap-4">
              
              {filteredAndSorted.map(ref => (
                <div key={ref.id} className="p-4 sm:p-5 md:p-6 bg-[#FAFCFF] border border-blue-100 rounded-[16px] shadow-sm hover:shadow-md transition-shadow flex items-start justify-between cursor-pointer group">
                  <div className="flex gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[16px] sm:text-[18px] shrink-0 border border-blue-200/50">
                      {ref.initials}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-bold text-[16px] md:text-[18px] text-slate-900 group-hover:text-primary transition-colors">{ref.name}</h3>
                      <p className="text-[13px] md:text-[14px] text-slate-500 mt-1 font-medium">{ref.company}</p>
                      <p className="text-[13px] md:text-[14px] text-slate-400 mt-1">Why - {ref.reason}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 min-w-[56px] border border-gray-200 rounded-xl bg-white shadow-sm shrink-0">
                    <span className="text-[11px] text-slate-500 font-medium mb-0.5">Score</span>
                    <span className="font-bold text-[20px] text-blue-600 leading-none tracking-tight">{ref.score}</span>
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
          <Link href="/meetings" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] z-10 hover:scale-110 transition-transform">
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
