'use client'

import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { videos as CognitoVideos } from '../../Components/Science/Cognito.jsx'
import { videos as DaveVideos } from '../../Components/Science/Dave.jsx'
import { videos as CrashVideos } from '../../Components/Science/Crash.jsx'
import { videos as SistersVideos } from '../../Components/Science/Sisters.jsx'
import { videos as ParthVideos } from '../../Components/Science/Parth.jsx'
import { videos as DonVideos } from '../../Components/Science/Don.jsx'
import { videos as BlueBrown } from '../../Components/Science/Blue.jsx'
import { videos as Free } from '../../Components/Science/Free.jsx'
import { videos as Fuse } from '../../Components/Science/Fuse.jsx'
import { videos as Ninja } from '../../Components/Science/Ninja.jsx'
import { videos as Jared } from '../../Components/Science/Jared.jsx'

const Random = () => {

    const [randomVideo, setRandomVideo] = useState()
    const [count, setCount] = useState()

    const all = useMemo(() => {
        return CognitoVideos
            .concat(DaveVideos)
            .concat(CrashVideos)
            .concat(SistersVideos)
            .concat(ParthVideos)
            .concat(DonVideos)
            .concat(BlueBrown)
            .concat(Free)
            .concat(Fuse)
            .concat(Ninja)
            .concat(Jared)
    }, [])

    useEffect(() => {
        const random = all[Math.floor(Math.random() * all.length)];
        setRandomVideo(random)
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
    return <div onClick={(e) => reload()} className='flex flex-col cursor-pointer w-screen h-screen items-center justify-center'>
        <a ref={link} target='_blank' href={`https://youtube.com/watch?v=${randomVideo}`} className='text-5xl'>{randomVideo}</a>
        <br />
        <div>from {all.length} videos</div>
    </div>
}

export default Random
