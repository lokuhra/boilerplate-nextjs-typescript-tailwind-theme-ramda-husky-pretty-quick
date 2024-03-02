import { createJSONStorage, persist } from 'zustand/middleware'

import { create } from 'zustand'

interface ThemeTypes {
    theme: string
}

const initialState: ThemeTypes = {
    theme: '',
}

type hemeSliceActions = {
    setTheme: (sample: string) => void
    reset: () => void
}

export const useThemeSlice = create<ThemeTypes & hemeSliceActions>()(
    persist(
        (set) => ({
            ...initialState,
            setTheme: (theme: string) => set({ theme }),
            reset: () => set(initialState),
        }),
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
