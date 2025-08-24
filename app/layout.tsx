import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Dashboard Bitcoin - Investor Alisha",
  description: "Painel de Investimento Bitcoin Profissional",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={dmSans.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="min-h-screen bg-gradient-to-br from-background to-muted">{children}</div>
      </body>
    </html>
  )
}
