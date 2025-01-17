import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TanstackProvider } from '@/configs/TanstackProvider'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buh Buh Lmao',
  description: 'Generated by Buh Buh Lmao',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  )
}
