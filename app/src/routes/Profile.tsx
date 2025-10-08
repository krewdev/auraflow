import React from 'react'
import { readFromLocalStorage } from '@/utils'

type Intention = { text: string; category: string; createdAt: string }

export default function Profile() {
  const intentions = readFromLocalStorage<Intention[]>('intentions', [])
  const totals = intentions.reduce<Record<string, number>>((acc, cur) => {
    acc[cur.category] = (acc[cur.category] ?? 0) + 1
    return acc
  }, {})
  return (
    <div className="space-y-6">
      <section className="glass-morphism p-6 rounded-2xl">
        <h2 className="text-lg font-semibold mb-2">Your journey</h2>
        <p className="text-sm text-gray-600">Total intentions: {intentions.length}</p>
      </section>
      <section className="glass-morphism p-6 rounded-2xl">
        <h3 className="font-medium mb-3">By category</h3>
        <ul className="grid md:grid-cols-2 gap-2">
          {Object.keys(totals).length === 0 && <li className="text-gray-500">No data yet.</li>}
          {Object.entries(totals).map(([cat, count]) => (
            <li key={cat} className="flex items-center justify-between">
              <span>{cat}</span>
              <span className="text-gray-500">{count}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

