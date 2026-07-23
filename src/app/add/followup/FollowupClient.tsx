"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createFollowup } from "@/actions/workflows"

export function FollowupClient({ connections }: { connections: { id: string, name: string, title: string }[] }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const res = await createFollowup(formData)

    if (res.error) {
      setError(res.error)
      setLoading(false)
    } else {
      router.push("/follows")
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto appear pt-4 pb-24">
      <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-50 bg-[#FAFCFF]">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold font-display text-slate-900">Set a Follow-up</h1>
          <p className="text-slate-500 mt-2 text-[15px]">Set a reminder to follow up with one of your connections.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Connection to Follow Up With</label>
            {connections.length > 0 ? (
              <select 
                name="targetId" 
                required
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none"
              >
                <option value="" disabled selected>Select someone to follow up with...</option>
                {connections.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.title})</option>
                ))}
              </select>
            ) : (
              <div className="p-4 bg-orange-50 border border-orange-100 text-orange-800 rounded-xl text-[14px]">
                You don't have any connections yet. Head over to the Network page to connect with people first!
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Follow-up Date</label>
              <input 
                type="date" 
                name="date" 
                required
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Time</label>
              <input 
                type="time" 
                name="time" 
                required
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Notes / Reason</label>
            <textarea 
              name="notes" 
              rows={3}
              required
              placeholder="Why do you need to follow up? (e.g. Check in on the project proposal)"
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
            />
          </div>

          {error && <p className="text-red-500 text-[14px] font-medium">{error}</p>}

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
            <button 
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={loading || connections.length === 0}
              className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : "Set Follow-up"}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
