'use client'

import { useState } from 'react'
import Link from 'next/link'
import { content } from '@/lib/content'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [locale, setLocale] = useState<'en' | 'de' | 'ru'>('en')

  const nav = content[locale].navigation

  const navigationItems = [
    { href: '/', label: nav.home },
    { href: '/service', label: nav.service },
    { href: '/gallery', label: nav.gallery },
    { href: '/book', label: nav.book },
    { href: '/app', label: nav.app },
    { href: '/about', label: nav.about },
    { href: '/contact', label: nav.contact },
  ]

  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-thin text-primary">Beauty Machine</span>
            <span className="ml-2 text-sm font-light text-accent">IRL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-light hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLocale(lang.code as 'en' | 'de' | 'ru')}
                  className={`text-sm px-2 py-1 rounded transition-colors duration-200 ${
                    locale === lang.code 
                      ? 'bg-accent text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light hover:text-accent transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 