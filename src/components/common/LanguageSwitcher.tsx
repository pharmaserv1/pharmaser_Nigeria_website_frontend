'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'en', name: 'En', flag: '🇺🇸' },
  { code: 'fr', name: 'Fr', flag: '🇫🇷' },
];

export function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get locale from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('locale') || 'en';
    setCurrentLocale(savedLocale);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        showDropdown
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  const handleLanguageChange = (locale: string) => {
    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);

    // Set cookie for server-side rendering
    document.cookie = `locale=${locale}; path=/; max-age=31536000`; // 1 year

    // Force a page refresh to apply the new locale
    window.location.reload();
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-sm">{currentLanguage.name}</span>
        <Image
          src="/assets/images/icons/dropdown-icon.svg"
          alt="arrow down"
          className={`w-3 transition-all duration-300 ease-in-out ${
            !showDropdown ? 'rotate-0' : 'rotate-180'
          }`}
          width={12}
          height={12}
        />
      </button>

      {showDropdown && (
        <div className="absolute top-12 right-0 w-32 bg-white rounded-lg p-2 space-y-1 shadow-[0px_19px_38px_-7px_#10182824] transition-all duration-300 ease-in-out z-[100]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors duration-200 ${
                currentLocale === language.code
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
