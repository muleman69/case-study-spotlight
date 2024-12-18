import React from 'react';
import { Calendar } from 'lucide-react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`md:hidden fixed inset-x-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ${
        isOpen ? 'top-20 opacity-100' : '-top-full opacity-0'
      }`}
    >
      <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
        <div className="flex flex-col space-y-6">
          <NavLinks />
        </div>
        <button className="inline-flex items-center justify-center px-6 py-2.5 bg-[#F8B42E] hover:bg-[#e6a429] text-black font-medium rounded-lg transition-colors">
          <Calendar className="w-4 h-4 mr-2" />
          Book a time to talk
        </button>
      </nav>
    </div>
  );
};

export default MobileMenu;