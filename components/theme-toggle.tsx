"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-9 h-9 opacity-0" aria-label="Toggle theme" />
    )
  }

  const isDark = resolvedTheme === 'dark'
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-9 h-9 border border-green-500/40 hover:border-green-500 focus-ring-custom overflow-hidden group bg-black/20 backdrop-blur-sm"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ y: 10, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="text-yellow-300"
          >
            <Sun className="h-[1.1rem] w-[1.1rem]" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ y: 10, opacity: 0, rotate: 30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: -30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="text-blue-300"
          >
            <Moon className="h-[1.1rem] w-[1.1rem]" />
          </motion.span>
        )}
      </AnimatePresence>
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  )
}
