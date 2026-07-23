"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { approveConnection, rejectConnection } from "@/actions/network"

type RequestItem = { id: string, userId: string, name: string, title: string, badge: string }
type ConnectionItem = { id: string, userId: string, name: string, title: string }

export function NetworkClient({ initialRequests, initialConnections }: { initialRequests: RequestItem[], initialConnections: ConnectionItem[] }) {
  const [showApprovalSuccess, setShowApprovalSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleApprove = (id: string) => {
    startTransition(async () => {
      await approveConnection(id)
      setShowApprovalSuccess(true)
    })
  }

  const handleDisapprove = (id: string) => {
    startTransition(async () => {
      await rejectConnection(id)
    })
  }

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
  }

  return (
    <div className="w-full max-w-2xl md:max-w-4xl mx-auto md:pb-24 appear">
      
      {/* Container for main card and sidebar */}
      <div className="flex gap-2 sm:gap-4 md:gap-6">
        
        {/* Main Card */}
        <div className="flex-1 bg-white rounded-none md:rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border-transparent md:border-gray-100 overflow-hidden flex flex-col pb-4 min-h-[calc(100vh-56px)] md:min-h-[600px]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 md:p-6 border-b border-gray-50 shrink-0">
            <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-slate-900 truncate tracking-wide uppercase">My Networks</h1>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 pt-6">
            
            {showApprovalSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-24 animate-in zoom-in-95 fade-in duration-300">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">Request Approved</h2>
                <p className="text-slate-500 text-[15px] max-w-[300px] leading-relaxed mb-8">
                  Waiting for your connection approval. Once approved, both parties will see each other's phone numbers.
                </p>
                <button 
                  onClick={() => setShowApprovalSuccess(false)}
                  className="px-6 py-3 bg-[#5C45FD] text-white rounded-xl font-bold hover:bg-[#5C45FD]/90 transition-colors shadow-sm"
                >
                  Back to Network
                </button>
              </div>
            ) : (
              <>
            {/* Connection Requests Section */}
            {initialRequests.length > 0 && (
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="font-bold text-[16px] text-slate-900">Connection Requests ({initialRequests.length})</h3>
                </div>

                <div className="space-y-3">
                  {initialRequests.map(req => (
                    <div key={req.id} className={`p-4 sm:p-5 bg-[#FAFCFF] border border-[#5C45FD]/10 rounded-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>
                      <div className="flex items-center gap-4">
                        <Link href={`/user/${req.userId}`} className="w-12 h-12 rounded-full bg-[#5C45FD]/10 text-[#5C45FD] flex items-center justify-center shrink-0 font-bold hover:bg-[#5C45FD]/20 transition-colors">
                          {getInitials(req.name)}
                        </Link>
                        <div>
                          <Link href={`/user/${req.userId}`}>
                            <h4 className="font-bold text-[16px] text-slate-900 hover:text-primary transition-colors cursor-pointer">{req.name}</h4>
                          </Link>
                          <p className="text-[13px] text-slate-500 mt-0.5 font-medium">{req.title}</p>
                          
                          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#5C45FD]/5 border border-[#5C45FD]/10 text-[#5C45FD] text-[11px] font-bold uppercase tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {req.badge}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                        <button 
                          onClick={() => handleDisapprove(req.id)}
                          className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors text-[13px] font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Disapprove
                        </button>
                        <button 
                          onClick={() => handleApprove(req.id)}
                          className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-200 text-emerald-600 hover:bg-emerald-50 transition-colors text-[13px] font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Approve
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* List Container */}
            <div className="flex flex-col">
              <h3 className="font-bold text-[16px] text-slate-900 mb-2">My Connections ({initialConnections.length})</h3>
              
              {initialConnections.map((conn, index) => (
                <div key={conn.id} className="py-3 sm:py-4 flex items-center justify-between border-b border-gray-100 hover:bg-[#5C45FD]/5 transition-colors group px-2 -mx-2 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#5C45FD]/10 text-[#5C45FD] flex items-center justify-center font-bold text-[14px] shrink-0 border border-[#5C45FD]/20">
                      {index + 1}
                    </div>
                    <Link href={`/user/${conn.userId}`} className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200 shrink-0 font-bold text-[14px] hover:bg-slate-200 transition-colors">
                      {getInitials(conn.name)}
                    </Link>
                    <div>
                      <Link href={`/user/${conn.userId}`}>
                        <span className="block font-semibold text-[15px] text-slate-900 group-hover:text-primary transition-colors leading-tight cursor-pointer hover:underline">{conn.name}</span>
                      </Link>
                      <span className="block text-[12px] text-slate-500 mt-0.5">{conn.title}</span>
                    </div>
                  </div>
                  <Link href={`/user/${conn.userId}`} className="text-slate-400 group-hover:text-primary transition-colors pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
              
              {initialConnections.length === 0 && (
                <p className="text-[13px] text-gray-400 italic">No connections yet.</p>
              )}
            </div>
            </>
            )}

          </div>
        </div>

        {/* Right Side Bar (Desktop Only) */}
        <div className="hidden md:flex w-20 shrink-0 bg-[#F4F6F9] rounded-[24px] flex-col items-center py-8 gap-8 relative border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          
          <Link href="/follows" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] hover:bg-white hover:rounded-2xl hover:shadow-sm transition-all z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </Link>

          <Link href="/meetings" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] hover:bg-white hover:rounded-2xl hover:shadow-sm transition-all z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>

          <Link href="/network" className="w-12 h-12 flex items-center justify-center text-[#5C45FD] bg-white rounded-2xl shadow-sm z-10 hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </Link>

          <div className="w-10 border-t border-gray-300 mt-auto opacity-50 z-10" />

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
