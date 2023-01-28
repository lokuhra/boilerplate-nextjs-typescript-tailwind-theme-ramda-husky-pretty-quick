import React from 'react'
import { TooltipTypes } from './types'

export const Tooltip = ({ text, children, position }: TooltipTypes): JSX.Element => {
    return (
        <span className="group relative">
            {position === 'left' && (
                <span className="pointer-events-none absolute top-3 -left-full -translate-x-[41%] whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-[104%] before:top-[40%] before:-translate-x-1/2 before:-rotate-90 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    {text}
                </span>
            )}
            {position === 'top' && (
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    {text}
                </span>
            )}

            {children}
        </span>
    )
}
