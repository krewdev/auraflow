import React, { useMemo, useState } from 'react'
import { saveToLocalStorage, readFromLocalStorage } from '@/utils'

type Intention = { text: string; category: string; createdAt: string }

const categories = ['Health', 'Wealth', 'Love', 'Growth', 'Gratitude']

export default function SetIntention() {
  const existing = readFromLocalStorage<Intention[]>('intentions', [])
  const [text, setText] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [saved, setSaved] = useState(false)

  const canSave = useMemo(() => text.trim().length > 0, [text])

  function onSave() {
    const next: Intention[] = [
      { text: text.trim(), category, createdAt: new Date().toISOString() },
      ...existing,
    ]
    saveToLocalStorage('intentions', next)
    setText('')
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="glass-morphism p-6 rounded-2xl">
        <h2 className="text-lg font-semibold mb-4">Set your intention</h2>
        <div className="space-y-4">
          <textarea
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 min-h-[120px]"
            placeholder="I am attracting..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1 rounded-full border ${category === c ? 'bg-purple-600 text-white border-purple-600' : 'border-gray-200 text-gray-700'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <button
            onClick={onSave}
            disabled={!canSave}
            className={`px-4 py-2 rounded-xl text-white transition ${canSave ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Save Intention
          </button>
          {saved && <p className="text-green-600 text-sm">Saved!</p>}
        </div>
      </div>

      <div className="glass-morphism p-6 rounded-2xl">
        <h3 className="font-medium mb-2">Recent intentions</h3>
        <ul className="space-y-2">
          {existing.length === 0 && <li className="text-gray-500">No intentions yet.</li>}
          {existing.slice(0, 5).map((i, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <span className="text-gray-700">{i.text}</span>
              <span className="text-xs text-gray-500">{i.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

