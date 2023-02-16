'use client'

import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { videos as Envato } from "../../Components/Web/Envato"
import { videos as NetNinja } from "../../Components/Web/NetNinja"
import { videos as DaniKrossing } from "../../Components/Web/DaniKrossing"
import { videos as Traversy } from "../../Components/Web/Traversy"
import { videos as Simplified } from "../../Components/Web/Simplified"
import { videos as CoderLipi } from "../../Components/Web/CoderLipi"
import { videos as FreeCodeCamp } from "../../Components/Web/FreeCodeCamp"
import { videos as CodeEvolution } from "../../Components/Web/CodeEvolution"

const Web = () => {

    const [randomVideo, setRandomVideo] = useState()

    const all = useMemo(() => {
        return Envato
            .concat(NetNinja)
            .concat(DaniKrossing)
            .concat(Traversy)
            .concat(Simplified)
            .concat(CoderLipi)
            .concat(FreeCodeCamp)
            .concat(CodeEvolution)
    }, [])

    useEffect(() => {
        setRandomVideo(all[Math.floor(Math.random() * all.length)])
    }, [])

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
        <a ref={link} target='_blank' href={`https://youtube.com/watch?v=${randomVideo}`} className='text-5xl'>{randomVideo}</a>
        <br />
        <div>from {all.length} videos</div>
    </div>
}

export default Web
