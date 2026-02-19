import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function DashboardNavbar({ onSearchOpen, showSearchButton = true }) {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-[68px] flex items-center justify-between px-4 sm:px-6 md:px-8 transition-all duration-300 bg-gradient-to-b from-black/95 via-black/80 to-transparent">
      {/* Logo */}
      <Link
        to="/dashboard"
        className="text-netflix-red font-display text-2xl sm:text-3xl tracking-tight hover:opacity-90 transition-opacity flex-shrink-0"
      >
        NETFLIX
      </Link>

      {/* Right section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {showSearchButton && (
          <button
            onClick={onSearchOpen}
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Search"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        )}
        <span className="text-netflix-gray text-sm sm:text-base hidden md:inline truncate max-w-[100px] lg:max-w-[150px]">
          {user?.name}
        </span>
        <button
          onClick={logout}
          className="px-4 py-2 rounded bg-netflix-red hover:bg-netflix-red-dark text-white text-sm font-medium transition-colors"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
