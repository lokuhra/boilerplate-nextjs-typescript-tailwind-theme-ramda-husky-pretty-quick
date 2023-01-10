import 'styles/globals.css'

import { Redux, Theme } from 'providers'

import type { AppProps } from 'next/app'
import { Layout } from 'features'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Redux>
            <Theme theme="dark">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Theme>
        </Redux>
    )
}

export default MyApp
