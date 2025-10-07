import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "EST to IST Converter - Convert Eastern Time to Indian Time",
  description:
    "Free EST to IST converter tool. Instantly convert Eastern Standard Time to Indian Time. Accurate time zone conversion for EST to IST.",
  keywords: "est to ist, est to ist converter, eastern time to indian time, time zone converter, est ist conversion",
  alternates: {
    canonical: "https://esttoist.online",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
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
        <Script
          defer
          data-domain="esttoist.online"
          src="https://app.pageview.app/js/script.js"
        />
      </body>
    </html>
  )
}
