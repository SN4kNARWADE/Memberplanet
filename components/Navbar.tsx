"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { 
      name: 'Groups', 
      dropdown: true,
      items: ['Associations', 'Nonprofits', 'Educational Institutions', 'Greek Life', 'Faith-based', 'Professional Associations', 'Clubs', 'Political Campaigns', 'Fraternal Orders', 'Service Organizations', 'Sports Teams', 'Alumni Groups']
    },
    { 
      name: 'Features', 
      dropdown: true,
      items: ['Overview', 'Membership Management', 'Events', 'Fundraising', 'Communications', 'Online Payments', 'Mobile App', 'Surveys', 'Email Newsletters', 'Support']
    },
    { name: 'Pricing', dropdown: false },
    { name: 'Blog', dropdown: false },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative w-40 h-8">
                <Image 
                  src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=160&auto=format&fit=crop"
                  alt="memberplanet logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="hidden"
                />
                <span className="text-xl font-bold text-cyan-500">memberplanet</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-cyan-500 flex items-center"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Button variant="outline" className="ml-4">Log In</Button>
            <Button className="ml-2 bg-cyan-500 hover:bg-cyan-600">Try It Free</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 w-full text-left flex justify-between items-center"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </button>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-6 pr-4 py-2 space-y-1">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block py-2 text-sm text-gray-500 hover:text-gray-800"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-4 pb-3 border-t border-gray-200">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Try It Free</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;