'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const mainNav = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Notifications', href: '#' },
    { name: 'Press Releases', href: '/whats-new' },
    { name: 'Speeches & Media Interactions', href: '#' },
    { name: 'Publications', href: '#' },
    { name: 'Legal Framework', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Statistics', href: '#' },
    { name: 'Regulatory Reporting', href: '#' },
  ];

  return (
    <header className="bg-white">
      {/* Top Accessibility Bar */}
      <div className="bg-[#f8f8f8] border-b py-2 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="#" className="text-blue-600 hover:underline font-medium">
            Skip to main content
          </Link>

          {/* Font Size Controls */}
          <div className="flex items-center gap-1 text-gray-700">
            <button className="px-2 py-1 hover:bg-gray-200 rounded">T</button>
            <button className="px-2 py-1 hover:bg-gray-200 rounded text-lg">A+</button>
            <button className="px-2 py-1 hover:bg-gray-200 rounded text-xl">A</button>
            <button className="px-2 py-1 hover:bg-gray-200 rounded text-2xl">A</button>
            <button className="px-2 py-1 hover:bg-gray-200 rounded">A</button>
            <button className="ml-3 px-2 py-1 hover:bg-gray-200 rounded">🖨️</button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-4 text-sm">
            <span className="font-medium">Language</span>
            <Link href="#" className="text-blue-600 hover:underline font-medium">हिंदी</Link>
          </div>
        </div>
      </div>

      {/* Logo + Search Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* Official Emblem (Left) */}
          <div className="w-20 h-20 bg-linear-to-br from-amber-900 to-amber-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow">
            RBI
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold text-[#002366]">Reserve Bank of India</h1>
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-inner">
                बच्चे
              </div>
            </div>
            <p className="text-sm text-gray-600 -mt-1">India&apos;s Central Bank</p>
            <p className="text-xs text-gray-500">भारतीय रिज़र्व बैंक</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border border-gray-300 px-5 py-3 rounded-l-md focus:outline-none focus:border-[#c8102e] text-sm"
          />
          <button className="bg-[#c8102e] hover:bg-red-700 text-white px-8 py-3 rounded-r-md font-medium text-sm transition">
            SEARCH
          </button>
        </div>
      </div>

      {/* Orange Navigation Bar */}
      <nav className="bg-accent text-white py-3 shadow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#002366] transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {(item.name.includes('Notifications') || 
                    item.name.includes('Speeches') || 
                    item.name.includes('Publications') || 
                    item.name.includes('Regulatory')) && (
                    <span className="text-xs">▼</span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-6 shadow-lg">
          <div className="flex flex-col gap-4 text-base font-medium">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 hover:text-[#c8102e]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}