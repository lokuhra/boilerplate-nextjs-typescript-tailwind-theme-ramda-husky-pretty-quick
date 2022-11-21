import { ThemeProvider as Theme } from 'next-themes'
import { ThemeType } from '../types'

export const ThemeProvider = ({ children, theme }: ThemeType): JSX.Element => {
    return (
        <Theme enableSystem attribute="class" defaultTheme={theme}>
            {children}
        </Theme>
    )
}

ThemeProvider.defaultProps = {
    theme: 'dark',
}
