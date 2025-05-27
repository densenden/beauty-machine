'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { content } from '@/lib/content'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [locale, setLocale] = useState<'en' | 'de' | 'ru'>('en')
  const [isScrolled, setIsScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const nav = content[locale].navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { code: 'en', flag: '🇺🇸', name: 'English', short: 'EN' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch', short: 'DE' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский', short: 'RU' },
  ]

  const currentLang = languages.find(lang => lang.code === locale)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-3xl shadow-glass border-b border-white/20' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl font-light text-primary group-hover:text-primary-light transition-colors duration-300">
              Beauty Machine
            </span>
            <span className="ml-2 text-sm font-light text-accent">IRL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-regular text-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Elegant Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-elegant border border-gray-200 hover:border-accent/50 transition-all duration-300 bg-white/50 backdrop-blur-sm group"
              >
                <span className="text-lg">{currentLang?.flag}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {currentLang?.short}
                </span>
                <ChevronDownIcon className={`w-4 h-4 text-text-muted transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white/90 backdrop-blur-xl rounded-elegant shadow-elegant border border-gray-100 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code as 'en' | 'de' | 'ru')
                        setLangOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-accent/5 transition-colors duration-200 ${
                        locale === lang.code ? 'text-accent bg-accent/5' : 'text-foreground'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span className="text-sm font-regular">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-elegant text-text-secondary hover:text-primary hover:bg-gray-50 transition-all duration-300"
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
          <div className="md:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-regular text-foreground hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close language dropdown */}
      {langOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setLangOpen(false)}
        />
      )}
    </nav>
  )
} 