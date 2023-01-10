import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import {
    Favicon,
    SiteContext,
    Versions,
} from 'Base'

function App({ Component, pageProps }) {
    return <SiteContext.Provider
        value={pageProps}
    >
        <Head>
            <Favicon />
        </Head>
        <Versions />
        <Component />
    </SiteContext.Provider>
}

export default App
