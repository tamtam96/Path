import '../Styles/Styles.scss'
import { useLayout } from 'Base'

function Layout({ children }) {

    return useLayout({
        head: <></>,
    }).render(<>
        {children}
    </>)
}

export default Layout

/*

quran => 2 hours
coding => 4 hours
migration => 1 hour
science => 2 hours


last sections
transfer => sultanimmubin => path => quran and science
professor dave => calculus => 3 done

*/
