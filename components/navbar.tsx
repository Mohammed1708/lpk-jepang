'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'id' | 'jp';
}

export default function Navbar({ lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = lang === 'id' 
    ? [
        { label: 'Home', href: `/${lang}/` },
        { label: 'Tentang Kami', href: `/${lang}//about` },
        { label: 'Berita', href: `/${lang}//news` },
        { label: 'Hubungi Kami', href: `/${lang}//contact` },
      ]
    : [
        { label: 'ホーム', href: `/${lang}/` },
        { label: '私たちについて', href: `/${lang}/about` },
        { label: 'ニュース', href: `/${lang}/news` },
        { label: 'お問い合わせ', href: `/${lang}/contact` },
      ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${lang}/`} className="flex-shrink-0">
            <img
              src="/logo/logo.png"
              alt="LPK Binawan Logo"
              className="h-12 w-auto md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors px-2 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
