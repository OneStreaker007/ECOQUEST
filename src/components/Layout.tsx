import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Menu,
  Leaf,
  Home,
  Book,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Settings,
  LogOut,
  Bell,
  X
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Lessons', href: '/lessons', icon: Book },
    { name: 'Quizzes', href: '/quizzes', icon: CheckCircle },
    { name: 'Challenges', href: '/challenges', icon: Award },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Progress', href: '/progress', icon: TrendingUp },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const getPageTitle = () => {
    const currentPath = location.pathname;
    const navItem = navigation.find(item => item.href === currentPath);
    return navItem ? navItem.name : 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-green-500" />
            <span className="text-xl font-bold">EcoQuest | Learn</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-1 p-4">
            {/* User Profile */}
            <div className="flex items-center space-x-3 mb-6 p-3 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={user?.avatar} alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-medium">{user?.name}</h4>
                <p className="text-xs text-gray-500">{user?.class}, {user?.school}</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-lg font-medium transition-colors
                      ${isActive
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <button
              onClick={logout}
              className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full font-medium transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline-block text-sm font-medium">{user?.name}</span>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src={user?.avatar} alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;