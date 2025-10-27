'use client'

import React, { useState } from 'react'
import { HiMoon, HiSun, HiGlobeAlt } from 'react-icons/hi'

const FixedButtons = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    // Add your theme toggle logic here
    console.log('Theme toggled:', !isDarkMode ? 'Dark' : 'Light')
  }

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
    // Add your language toggle logic here
    console.log('Language toggled:', !isEnglish ? 'English' : 'French')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/80 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 shadow-lg group"
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <HiSun className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-primary transition-colors duration-300" />
        ) : (
          <HiMoon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-primary transition-colors duration-300" />
        )}
      </button>

      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/80 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 shadow-lg group relative"
        aria-label={isEnglish ? "Switch to French" : "Switch to English"}
      >
        <HiGlobeAlt className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-primary transition-colors duration-300" />
        
        {/* Language indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent text-primary rounded-full flex items-center justify-center text-xs font-bold">
          {isEnglish ? 'EN' : 'FR'}
        </span>
      </button>
    </div>
  )
}

export default FixedButtons