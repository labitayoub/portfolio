import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Ayoub Labit - Full Stack Developer",
  description: "Portfolio of Ayoub Labit, a passionate Full Stack Developer",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ayoub Labit - Full Stack Developer',
    description: 'Portfolio of Ayoub Labit, a passionate Full Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jetbrainsMono.variable} ${inter.variable}`}>      
      <body className="min-h-screen antialiased selection:bg-green-500/20 selection:text-green-300 font-sans relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global decorative background */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 opacity-60 mix-blend-screen" style={{ background: 'var(--gradient-secondary)' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
