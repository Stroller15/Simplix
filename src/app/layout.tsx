export const dynamic = 'force-dynamic';

import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/lib/providers/next-theme-provider"
import db from '@/lib/supabase/db'
import { DM_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simplix',
  description: 'A productivity tool like notion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(db);
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body className={twMerge('bg-background', inter.className)}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
  )
}
