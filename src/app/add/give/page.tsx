"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createGive } from "@/actions/profile"

export default function AddGivePage() {
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
      await createGive(category, detail)
      router.push("/profile")
    } catch (err: any) {
      setError(err.message || "Failed to create Give")
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto appear pt-4 pb-24">
      <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-50 bg-[#FAFCFF]">
          <div className="w-12 h-12 rounded-2xl bg-[#5C45FD]/10 text-[#5C45FD] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold font-display text-slate-900">Add a Give</h1>
          <p className="text-slate-500 mt-2 text-[15px]">What can you offer to your network? Let people know how you can help.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Category</label>
            <select 
              name="category" 
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5C45FD]/20 focus:border-[#5C45FD] outline-none transition-all appearance-none"
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
              placeholder="Describe what you are offering in more detail..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#5C45FD]/20 focus:border-[#5C45FD] outline-none transition-all resize-none"
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
              className="px-8 py-3 bg-[#5C45FD] text-white rounded-xl font-bold hover:bg-[#4A35DB] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : "Post Give"}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
