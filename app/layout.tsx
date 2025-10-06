import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "EST to IST Converter - Convert Eastern Time to Indian Time",
  description:
    "Free EST to IST converter tool. Instantly convert Eastern Standard Time to Indian Time. Accurate time zone conversion for EST to IST.",
  keywords: "est to ist, est to ist converter, eastern time to indian time, time zone converter, est ist conversion",
  openGraph: {
    title: "EST to IST Converter - Convert Eastern Time to Indian Time",
    description: "Free EST to IST converter tool. Instantly convert Eastern Standard Time to Indian Time.",
    url: "https://esttoist.online",
    siteName: "EST to IST Converter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EST to IST Converter",
    description: "Free EST to IST converter tool for accurate time zone conversion.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
