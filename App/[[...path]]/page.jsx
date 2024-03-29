const fs = require('fs')
const path = require('path')
import { Breadcrumb } from 'Shared'
import { marked } from 'marked'

const markdownClasses = " prose pl-10 mb-10"

const index = ({ params }) => {

    const data = getData({ params })
    const {
        urlSegments,
        content,
        hasConcepts,
        errorCode,
        type
    } = data

    // useEffect(() => {
    //     if (hasConcepts) {
    //         const concept = Array.from(document.querySelectorAll('h3')).filter(i => i.innerText === 'Concepts')[0]
    //         concept.nextElementSibling.querySelectorAll('li').forEach(i => {
    //             const googleImageSearchLink = document.createElement('a')
    //             googleImageSearchLink.target = '_blank'
    //             googleImageSearchLink.href = `https://www.google.com/search?q=${i.innerText}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi_uLOs34n4AhWMPewKHUBLC0kQ_AUoAXoECAMQAw`
    //             googleImageSearchLink.className = 'ml-4 text-blue-400'
    //             googleImageSearchLink.innerText = '->'
    //             i.appendChild(googleImageSearchLink)
    //         })
    //     }
    // }, [])

    // set title from <h1> or first line with # in markdowns
    // include disqus maybe

    if (errorCode) {
        return <h1>Error - {errorCode}</h1>
    }

    return <>
        {
            urlSegments.length === 0
                ?
                null
                :
                <Breadcrumb urlSegments={urlSegments} />
        }
        <div className={type + (type === 'markdown' ? markdownClasses : '')} dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
}

const getData = ({ params }) => {
    //console.time('time')
    const urlSegments = params.path || []
    const diskSegments = [process.cwd(), 'Contents'].concat(urlSegments)
    var filePath = path.join.apply(null, [...diskSegments, 'index.html'])
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments, 'index.md'])
    }
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments]) + '.md'
    }
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments]) + '.html'
    }
    console.log(filePath)
    if (!fs.existsSync(filePath)) {
        const result = { urlSegments: urlSegments, errorCode: 404 }
        return result
    }
    else {
        var type = 'html'
        var hasConcepts = false
        try {
            var content = fs.readFileSync(filePath, 'utf8')
            if (filePath.endsWith('.md')) {
                type = 'markdown'
            }
            if (/###\s*Concepts/.test(content)) {
                hasConcepts = true
            }
            if (content.charCodeAt(0) == 65279) {
                content = content.slice(1)
            }
            content = content.replace('markdownClasses', markdownClasses)
            content = marked.parse(content)
            const result = {
                urlSegments: urlSegments,
                content: content,
                hasConcepts,
                type
            }
            //console.timeEnd('time')
            return result
        } catch (e) {
            console.log(e)
            const result = { urlSegments: urlSegments, errorCode: 500 }
            return result
        }
    }
}

export default index
