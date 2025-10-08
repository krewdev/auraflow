import React from 'react'

const sampleFeed = [
  { user: 'Ava', text: 'I am cultivating daily gratitude', category: 'Gratitude' },
  { user: 'Liam', text: 'I am attracting aligned opportunities', category: 'Wealth' },
  { user: 'Mia', text: 'I am nourishing my body and mind', category: 'Health' },
]

export default function Community() {
  return (
    <div className="space-y-4">
      {sampleFeed.map((p, i) => (
        <div key={i} className="glass-morphism p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800"><span className="font-medium">{p.user}</span> • {p.text}</p>
              <p className="text-xs text-gray-500 mt-1">{p.category}</p>
            </div>
            <button className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">Support</button>
          </div>
        </div>
      ))}
    </div>
  )
}

