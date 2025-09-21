import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Ayoub Labit - Full Stack Developer",
  description: "Portfolio of Ayoub Labit, a passionate Full Stack Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body 
        className={jetbrainsMono.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
