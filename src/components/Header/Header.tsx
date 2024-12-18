import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://ik.imagekit.io/buildable/buildable-logo-white.png?updatedAt=1734077583752"
              alt="Buildable Logo"
              className="h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="inline-flex items-center px-6 py-2.5 bg-[#F8B42E] hover:bg-[#e6a429] text-black font-medium rounded-lg transition-colors">
              <Calendar className="w-4 h-4 mr-2" />
              Book a time to talk
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#F8B42E] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;