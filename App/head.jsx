import { Favicon } from 'Base'

const Head = () => {

    const title = `${process.env.NEXT_PUBLIC_BRAND} - ${process.env.NEXT_PUBLIC_SLOGAN}`

    return <>
        <title>{title}</title>
        {/* <Favicon /> */}
    </>
}

export default Head
