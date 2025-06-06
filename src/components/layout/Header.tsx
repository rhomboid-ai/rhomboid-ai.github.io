'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Rhomboid-AI Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold">Rhomboid-AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link href="#intro" className="nav-link">
              Home
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#services" className="nav-link">
              Services
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link href="#intro" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link
                href="#services"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
