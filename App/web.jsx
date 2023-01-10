import { useRef } from 'react'
import { videos as Envato } from "../components/Web/Envato"
import { videos as NetNinja } from "../components/Web/NetNinja"
import { videos as DaniKrossing } from "../components/Web/DaniKrossing"
import { videos as Traversy } from "../components/Web/Traversy"
import { videos as Simplified } from "../components/Web/Simplified"
import { videos as CoderLipi } from "../components/Web/CoderLipi"
import { videos as FreeCodeCamp } from "../components/Web/FreeCodeCamp"
import { videos as CodeEvolution } from "../components/Web/CodeEvolution"

const Web = ({ videoCode, from }) => {

    const link = useRef()

    const reload = (e) => {
        link.current.click()
        setTimeout(() => {
            window.location.reload()
        }, 1000)
        e.stopPropagation()
        e.preventDefault()
    }
    return <div onClick={(e) => reload()} className="flex flex-col cursor-pointer w-screen h-screen items-center justify-center">
        <a ref={link} target='_blank' href={`https://youtube.com/watch?v=${videoCode}`} className='text-5xl'>{videoCode}</a>
        <br />
        <div>from {from} videos</div>
    </div>
}

export default Web

export async function getServerSideProps({ params, res }) {
    const all =
        Envato
            .concat(NetNinja)
            .concat(DaniKrossing)
            .concat(Traversy)
            .concat(Simplified)
            .concat(CoderLipi)
            .concat(FreeCodeCamp)
            .concat(CodeEvolution)

    const randomVideo = all[Math.floor(Math.random() * all.length)];
    return {
        props: {
            videoCode: randomVideo,
            from: all.length
        }
    }
}
