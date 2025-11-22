import React, { useState, useEffect } from 'react';
import { SearchIcon, BellIcon, MenuIcon } from '../Icons';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick }) => {
  // FIX: Added 'mobile' to the user state type to match the object stored in localStorage, resolving the property access error.
  const [user, setUser] = useState<{firstName: string, lastName: string, mobile: string} | null>(null);

  useEffect(() => {
    const currentUserJSON = localStorage.getItem('currentUser');
    if (currentUserJSON) {
        try {
            setUser(JSON.parse(currentUserJSON));
        } catch(e) {
            console.error("Failed to parse current user from localStorage", e);
        }
    }
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-20 flex items-center justify-between px-4 sm:px-6 flex-shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden text-gray-500 hover:text-[#009688]">
          <MenuIcon className="w-6 h-6" />
        </button>
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="جستجو..."
            className="bg-gray-100 rounded-full py-2 pr-10 pl-4 w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-[#009688]"
          />
          <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>


      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative cursor-pointer">
          <BellIcon className="w-6 h-6 text-gray-500 hover:text-[#009688]" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/40?u=${user?.mobile || 'admin'}`}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden sm:block">
            <p className="font-semibold text-sm">{user ? `${user.firstName} ${user.lastName}` : 'کاربر مهمان'}</p>
            <p className="text-xs text-gray-500">جوان وب ای</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;