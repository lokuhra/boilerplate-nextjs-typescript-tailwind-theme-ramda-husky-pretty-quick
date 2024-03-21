'use client'

import { useThemeSlice } from 'stores'

export function ChangeTheme() {
    const { theme, setTheme } = useThemeSlice((state) => state)
    return (
        <div className="flex	 flex-col">
            <div className="flex justify-between gap-2">
                <button onClick={() => setTheme('light')} className="btn btn-primary">
                    Change Theme light
                </button>
                <button onClick={() => setTheme('dark')} className="btn btn-primary">
                    Change Theme dark
                </button>
                <button onClick={() => setTheme('lofi')} className="btn btn-primary">
                    Change Theme lofi
                </button>
                <button onClick={() => setTheme('luxury')} className="btn btn-primary">
                    Change Theme luxury
                </button>
            </div>
            <p>Current Theme: {theme}</p>
        </div>
    )
}
