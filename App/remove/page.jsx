const fs = require('fs')
const path = require('path')

const codes = [
]

const Remove = () => {
    const targetFile = path.join.apply(null, [process.cwd(), "Components", "Science", "Crash.jsx"])
    if (!fs.existsSync(targetFile)) {
        console.log(`File not found: ${targetFile}`)
    }
    var content = fs.readFileSync(targetFile, 'utf8')
    codes.forEach(code => {
        const pattern = `\\s*"${code}".*`
        const reg = new RegExp(pattern, 'i')
        content = content.replace(reg, '')
    })
    try {
        fs.writeFileSync(targetFile, content);
    } catch (err) {
        console.error(err);
    }

    return <div dangerouslySetInnerHTML={{ __html: content }}>
    </div>
}

export default Remove

