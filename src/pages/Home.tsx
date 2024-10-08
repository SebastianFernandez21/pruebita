import React from 'react'
import { 
  Home as HomeIcon, 
  User, 
  Settings, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Music, 
  Video, 
  Folder, 
  Globe, 
  ShoppingCart 
} from 'lucide-react'
import DashboardCharts from '../components/DashboardCharts'

const iconComponents = [
  { icon: HomeIcon, label: 'Home' },
  { icon: User, label: 'User' },
  { icon: Settings, label: 'Settings' },
  { icon: Mail, label: 'Mail' },
  { icon: Calendar, label: 'Calendar' },
  { icon: FileText, label: 'Documents' },
  { icon: Image, label: 'Images' },
  { icon: Music, label: 'Music' },
  { icon: Video, label: 'Video' },
  { icon: Folder, label: 'Folder' },
  { icon: Globe, label: 'Web' },
  { icon: ShoppingCart, label: 'Shop' },
]

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {iconComponents.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <item.icon className="w-10 h-10 text-indigo-600 mb-2 transition-all duration-300 ease-in-out group-hover:scale-110" />
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <DashboardCharts />
    </div>
  )
}

export default Home