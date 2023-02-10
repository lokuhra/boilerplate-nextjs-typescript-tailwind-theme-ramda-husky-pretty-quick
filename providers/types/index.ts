import { children } from 'types'

export interface ThemeType extends children {
    theme: 'light' | 'dark'
}

export type ReduxProviderType = children
export type ReactQueryType = children
