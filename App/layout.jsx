import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import {
    Favicon,
    SiteContext,
    Versions,
} from 'Base'

function App({ Component, pageProps }) {

    const title = `${process.env.NEXT_PUBLIC_BRAND} - ${process.env.NEXT_PUBLIC_SLOGAN}`

    return <SiteContext.Provider
        value={pageProps}
    >
        <Head>
            <title>{title}</title>
            <Favicon />
        </Head>
        <Versions />
        <Component />
    </SiteContext.Provider>
}

export default App

/*

quran => 2 hours
coding => 4 hours
migration => 1 hour
science => 2 hours


last sections
transfer => sultanimmubin => path => quran and science
professor dave => calculus => 3 done

*/
