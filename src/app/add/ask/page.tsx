"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createAsk } from "@/actions/profile"

export default function AddAskPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const category = formData.get("category") as string
    const detail = formData.get("detail") as string

    try {
      await createAsk(category, detail)
      router.push("/profile")
    } catch (err: any) {
      setError(err.message || "Failed to create Ask")
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto appear pt-4 pb-24">
      <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-50 bg-[#FAFCFF]">
          <div className="w-12 h-12 rounded-2xl bg-orange-400/10 text-orange-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold font-display text-slate-900">Add an Ask</h1>
          <p className="text-slate-500 mt-2 text-[15px]">What are you currently looking for? Let your network know.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Category</label>
            <select 
              name="category" 
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400 outline-none transition-all appearance-none"
            >
              <option value="" disabled selected>Select a category...</option>
              <option value="INVESTMENT">Investment / Funding</option>
              <option value="HIRING">Hiring / Talent</option>
              <option value="DISTRIBUTORS">Distributors / Partners</option>
              <option value="MENTORSHIP">Mentorship / Advice</option>
              <option value="SERVICES">B2B Services</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Details</label>
            <textarea 
              name="detail" 
              rows={4}
              required
              placeholder="Describe what you are looking for in more detail..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400 outline-none transition-all resize-none"
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
              disabled={loading}
              className="px-8 py-3 bg-orange-400 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : "Post Ask"}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
