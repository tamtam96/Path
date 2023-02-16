'use client'

import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { videos as CognitoVideos } from '../cognito/page'
import { videos as DaveVideos } from '../dave/page'
import { videos as CrashVideos } from '../crash/page'
import { videos as SistersVideos } from '../sisters/page'
import { videos as ParthVideos } from '../parth/page'
import { videos as DonVideos } from '../don/page'
import { videos as BlueBrown } from '../blue/page'
import { videos as Free } from '../free/page'
import { videos as Fuse } from '../fuse/page'
import { videos as Ninja } from '../ninja/page'
import { videos as Jared } from '../jared/page'

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
