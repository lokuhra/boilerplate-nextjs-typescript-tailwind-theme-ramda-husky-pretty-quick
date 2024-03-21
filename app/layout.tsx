'use client'

import './globals.css'

import { isNilOrEmpty, isNotNil, isNotNilOrEmpty } from 'ramda-adjunct'

import { Inter } from 'next/font/google'
import { Loading } from 'components'
import { useThemeSlice } from 'stores'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeSlice((state) => state)

    return (
        <>
            <html>
                <body data-theme={theme}>
                    <div className="mx-auto h-screen max-w-5xl  pt-4  text-2xl">{children}</div>
                </body>
            </html>
        </>
    )
}
