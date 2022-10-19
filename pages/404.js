import Link from 'next/link'

const NotFound = () => {
    return <div>
        <p>The page you're searching for is not found.</p>
        <p>Please go to the <Link href="/"><a>main page</a></Link> to start over.</p>
    </div>
}

export default NotFound