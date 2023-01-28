import { ThemeProvider } from 'next-themes'
import { ThemeType } from '../types'

export const Theme = ({ children, theme }: ThemeType): JSX.Element => {
    return (
        <ThemeProvider enableSystem attribute="class" defaultTheme={theme}>
            {children}
        </ThemeProvider>
    )
}

Theme.defaultProps = {
    theme: 'light',
}
