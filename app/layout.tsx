import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QueryProvider } from '@/lib/Providers/QueryProvider'

import './globals.css'
import { NextAuthProvider } from '@/lib/Providers/NextAuthProvider'
import { CheckAuthProvider } from '@/lib/Providers/CheckAuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Nightcrawlers',
    description: 'app for beatmakers'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
 
    return (
        <html lang="en" className='dark'>
            <body className={inter.className} >
                <NextAuthProvider>
                    <CheckAuthProvider>
                    <QueryProvider>               
                        {children}           
                    </QueryProvider>
                    </CheckAuthProvider>
                </NextAuthProvider>
            </body>
        </html>
    )
}
