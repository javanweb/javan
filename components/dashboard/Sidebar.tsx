import React from 'react';
// FIX: Replaced 'SenikLogo' with 'JavanWebiLogo' as it's the correct exported member.
import { HomeIcon, UsersIcon, ChartBarIcon, VideoCameraIcon, CogIcon, ArrowUturnLeftIcon, JavanWebiLogo, DatabaseIcon, PaintBrushIcon, CloseIcon } from '../Icons';
import type { DashboardViewType } from '../../types';

interface SidebarProps {
  activeView: DashboardViewType;
  setActiveView: (view: DashboardViewType) => void;
  setView: (view: 'homepage' | 'login' | 'dashboard') => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, setView, isSidebarOpen, setIsSidebarOpen }) => {
  const navItems = [
    { name: 'داشبورد', view: 'dashboard', icon: HomeIcon },
    { name: 'کاربران', view: 'users', icon: UsersIcon },
    { name: 'گزارشات فروش', view: 'reports', icon: ChartBarIcon },
    { name: 'آموزش‌ها', view: 'tutorials', icon: VideoCameraIcon },
    { name: 'داده هاي سایت', view: 'siteData', icon: DatabaseIcon },
    { name: 'قالب سایت', view: 'theme', icon: PaintBrushIcon },
    { name: 'تنظيمات', view: 'settings', icon: CogIcon },
  ];

  const handleLinkClick = (view: DashboardViewType) => {
    setActiveView(view);
    setIsSidebarOpen(false); // Close sidebar on mobile navigation
  };

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    setView('homepage');
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      ></div>
      
      <aside className={`w-64 bg-[#263238] text-white flex flex-col flex-shrink-0 fixed lg:static inset-y-0 right-0 z-40 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}>
        <div className="h-20 flex items-center justify-center px-4 border-b border-white/10 relative">
          <JavanWebiLogo className="w-8 h-8 ml-3 text-white" />
          <h1 className="text-xl font-bold">پنل مدیریت جوان وب ای</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 lg:hidden" aria-label="Close menu">
              <CloseIcon className="w-6 h-6"/>
          </button>
        </div>
        <nav className="flex-grow px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.view as DashboardViewType);
              }}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeView === item.view
                  ? 'bg-white text-gray-800 font-bold'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 ml-3" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="px-4 py-6 border-t border-white/10">
          <a href="#" onClick={handleLogout} className="flex items-center px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200">
            <ArrowUturnLeftIcon className="w-5 h-5 ml-3" />
            <span>خروج و بازگشت به سایت</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;