import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'S T O I C',
  description: 'Amplify your social media impact, get more views and make more money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='!scroll-smooth' lang="en">
      <body className={GeistSans.className}>
          <div className="min-w-[320px]">
            {children}
          </div>
      </body>
    </html>
  )
}
