"use client"

import { useState, useTransition } from "react"
import { updateProfileInfo } from "@/actions/profile"

export function ProfileBio({ bio, title }: { bio: string | null, title: string | null }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editBio, setEditBio] = useState(bio || "")
  const [editTitle, setEditTitle] = useState(title || "")
  const [isPending, startTransition] = useTransition()

  const handleSave = async () => {
    startTransition(async () => {
      await updateProfileInfo(editTitle, editBio)
      setIsEditing(false)
    })
  }

  return (
    <div className="px-5 py-5 group">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-foreground text-[16px]">About</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-slate-400 hover:text-primary transition-colors p-1"
        >
          {isEditing ? (
            <span className="text-xs font-bold text-red-500">CANCEL</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          )}
        </button>
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Title</label>
            <input 
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="e.g. Founder, CEO"
              className="w-full p-2 border border-gray-200 rounded-lg text-sm mt-1"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Bio</label>
            <textarea
              value={editBio}
              onChange={(e) => setEditBio(e.target.value)}
              placeholder="Tell us about yourself..."
              className="w-full p-2 border border-gray-200 rounded-lg text-sm min-h-[120px] mt-1"
            />
          </div>
          <button 
            onClick={handleSave}
            disabled={isPending}
            className="w-full bg-primary text-white py-2 rounded-lg text-sm font-bold disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save About"}
          </button>
        </div>
      ) : (
        <p className="text-[14px] text-slate-700 leading-relaxed whitespace-pre-wrap">
          {bio || <span className="text-gray-400 italic">No bio added yet.</span>}
        </p>
      )}
    </div>
  )
}
