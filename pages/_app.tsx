import 'styles/globals.css'

import type { AppProps } from 'next/app'
import { Layout } from 'features'
import { ThemeProvider } from 'providers'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme="dark">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
