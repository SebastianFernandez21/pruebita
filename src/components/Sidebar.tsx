import React from 'react'
import { Link } from 'react-router-dom'
import { X, Home, Users, Settings, HelpCircle } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: Users, text: 'Users', path: '/users' },
    { icon: Settings, text: 'Settings', path: '/settings' },
    { icon: HelpCircle, text: 'Help', path: '/help' },
  ]

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-indigo-700 overflow-y-auto transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-white text-2xl font-semibold">MyApp</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-300 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="mt-5">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar