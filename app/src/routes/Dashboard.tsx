import React from 'react'
import { readFromLocalStorage } from '@/utils'

type Intention = { text: string; category: string; createdAt: string }

export default function Dashboard() {
  const intentions = readFromLocalStorage<Intention[]>('intentions', [])
  const latest = intentions[0]
  return (
    <div className="space-y-6">
      <section className="glass-morphism p-6 rounded-2xl">
        <h2 className="text-lg font-semibold mb-2">Your latest intention</h2>
        {latest ? (
          <div>
            <p className="text-gray-700">{latest.text}</p>
            <div className="text-xs text-gray-500 mt-2">
              <span className="px-2 py-1 bg-gray-100 rounded-full mr-2">{latest.category}</span>
              <span>{new Date(latest.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No intention yet. Set one to begin.</p>
        )}
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {["Health", "Wealth", "Love"].map((k) => (
          <div key={k} className="glass-morphism p-4 rounded-xl">
            <h3 className="font-medium">{k}</h3>
            <p className="text-sm text-gray-500">Tips and curated prompts</p>
          </div>
        ))}
      </section>
    </div>
  )
}

