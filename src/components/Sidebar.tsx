"use client"

import { useState } from "react"
import Link from "next/link"

export function Sidebar() {
  const [isAddNewOpen, setIsAddNewOpen] = useState(false)

  return (
    <aside className="w-[320px] border-r border-gray-100 bg-white hidden md:flex flex-col h-screen fixed left-0 top-0 z-40 overflow-y-auto shadow-[2px_0_15px_rgba(0,0,0,0.02)]">
      
      {/* Header */}
      <div className="flex items-center p-5 border-b border-gray-100 shrink-0">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#5C45FD] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-extrabold leading-none text-foreground tracking-tight">CONNEX</h1>
          </div>
        </Link>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 pb-8">
        
        {/* Top Widgets (Search & Bell) */}
        <div className="p-5 bg-[#FAFAFA] border-b border-gray-100">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-[13px] focus:ring-2 focus:ring-[#5C45FD] focus:border-transparent transition-all shadow-sm placeholder-gray-400"
                placeholder="Search"
              />
            </div>
            <button className="relative p-2 text-gray-600 bg-white border border-gray-200 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-2 gap-2">
            <Link href="/invite" className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#5C45FD]/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#5C45FD]/10 text-[#5C45FD] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-[12px] font-bold text-foreground leading-tight">Invite<br />Connections</span>
            </Link>

            <Link href="/dashboard" className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#5C45FD]/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#5C45FD]/10 text-[#5C45FD] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <span className="text-[12px] font-bold text-foreground">Dashboard</span>
            </Link>

            <Link href="/messages" className="col-span-2 flex items-center justify-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#5C45FD]/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#5C45FD]/5 text-[#5C45FD] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-[12px] font-bold text-foreground">Messages</span>
            </Link>
          </div>
        </div>

        {/* Main Navigation Links */}
        <nav className="p-3">
          <Link href="/profile" className="flex items-center gap-4 px-4 py-3.5 mb-1 rounded-xl bg-[#F8F7FF] text-[#5C45FD] transition-colors">
            <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-[13px] font-bold tracking-wide">MY PROFILE</span>
          </Link>

          <div className="px-4">
            <Link href="/follows" className="flex items-center gap-4 py-4 border-b border-gray-100 group">
              <div className="w-9 h-9 rounded-full bg-[#5C45FD]/5 text-[#5C45FD] flex items-center justify-center group-hover:bg-[#5C45FD]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground tracking-wide group-hover:text-[#5C45FD] transition-colors">PENDING FOLLOW UPS</span>
            </Link>

            <Link href="/meetings" className="flex items-center gap-4 py-4 border-b border-gray-100 group">
              <div className="w-9 h-9 rounded-full bg-[#5C45FD]/5 text-[#5C45FD] flex items-center justify-center group-hover:bg-[#5C45FD]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground tracking-wide group-hover:text-[#5C45FD] transition-colors">PENDING MEETINGS</span>
            </Link>

            <Link href="/referrals-received" className="flex items-center gap-4 py-4 border-b border-gray-100 group">
              <div className="w-9 h-9 rounded-full bg-[#5C45FD]/5 text-[#5C45FD] flex items-center justify-center group-hover:bg-[#5C45FD]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground tracking-wide group-hover:text-[#5C45FD] transition-colors">REFERRALS RECEIVED</span>
            </Link>

            <Link href="/referrals-passed" className="flex items-center gap-4 py-4 border-b border-gray-100 group">
              <div className="w-9 h-9 rounded-full bg-[#5C45FD]/5 text-[#5C45FD] flex items-center justify-center group-hover:bg-[#5C45FD]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground tracking-wide group-hover:text-[#5C45FD] transition-colors">REFERRALS PASSED</span>
            </Link>

            <Link href="/network" className="flex items-center gap-4 py-4 group">
              <div className="w-9 h-9 rounded-full bg-[#5C45FD]/5 text-[#5C45FD] flex items-center justify-center group-hover:bg-[#5C45FD]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground tracking-wide group-hover:text-[#5C45FD] transition-colors">MY NETWORK</span>
            </Link>
          </div>

          {/* Add NEW Section */}
          <div className="px-4 mt-6 mb-4">
            <button
              onClick={() => setIsAddNewOpen(!isAddNewOpen)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm text-gray-700 flex items-center justify-center border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-[14px] font-bold text-foreground">Add NEW</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isAddNewOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Items */}
            {isAddNewOpen && (
              <div className="mt-2 pl-4 border-l-2 border-gray-100 ml-4 space-y-1 animate-in slide-in-from-top-2 fade-in duration-200">
                <Link href="/add/meeting" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  <span className="text-[13px] font-medium">Meeting</span>
                </Link>
                <Link href="/add/followup" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                  <span className="text-[13px] font-medium">Followup</span>
                </Link>
                <Link href="/add/ask" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400/40" />
                  <span className="text-[13px] font-medium">Ask</span>
                </Link>
                <Link href="/add/give" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
                  <span className="text-[13px] font-medium">Give</span>
                </Link>
              </div>
            )}
          </div>
        </nav>

      </div>
    </aside>
  )
}
