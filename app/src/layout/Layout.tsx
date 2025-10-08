import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { Heart, Users, Compass, User, Sparkles } from 'lucide-react'

const navigationItems = [
  {
    title: 'Dashboard',
    url: createPageUrl('Dashboard'),
    icon: Sparkles,
    color: 'from-purple-400 to-pink-400',
  },
  {
    title: 'My Intention',
    url: createPageUrl('SetIntention'),
    icon: Compass,
    color: 'from-green-400 to-blue-400',
  },
  {
    title: 'Community',
    url: createPageUrl('Community'),
    icon: Users,
    color: 'from-blue-400 to-purple-400',
  },
  {
    title: 'Profile',
    url: createPageUrl('Profile'),
    icon: User,
    color: 'from-pink-400 to-purple-400',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        .floating-element { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .glass-morphism { background: rgba(255,255,255,0.25); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); }
      `}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 floating-element"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-200 rounded-full opacity-30 floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-pink-200 rounded-full opacity-15 floating-element" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="relative z-10">
        <header className="glass-morphism border-b-0 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mindful Intentions</h1>
                <p className="text-xs text-gray-500">Manifest together</p>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
        <nav className="fixed bottom-0 left-0 right-0 glass-morphism border-t-0 px-6 py-3">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-around">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.url || (item.title === 'Dashboard' && location.pathname === '/')
                return (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105 opacity-70'}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? `bg-gradient-to-r ${item.color} shadow-lg` : 'bg-gray-100'}`}>
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <span className={`text-xs font-medium ${isActive ? 'text-purple-600' : 'text-gray-500'}`}>{item.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

