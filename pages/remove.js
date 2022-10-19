const fs = require('fs')
const path = require('path')

const codes = [
    "QnVjv-LIgjM",
    "_qAzXb7mA2g",
    "40cyYqqQmJ4",
    "ATK_qlg6tTY",
    "vc7xQs0MCLY",
    "JjIgNfURISY",
    "toEnT4C2uNI",
    "wbtpOhIP9Bc",
    "vk6e0pCbh1k",
    "0nLxb3ms28A",
    "zN58Uj1pxg4",
    "fXt42GzI1FU",
    "k0WGXeWPb1M",
    "EuSGImH2pG8",
    "0nSjN8GVJQM",
    "Dpah15G3LSA",
]

const Remove = ({ content }) => {
    return <div dangerouslySetInnerHTML={{ __html: content }}>
    </div>
}

export default Remove

export async function getServerSideProps({ params, res }) {
    const targetFile = path.join.apply(null, [process.cwd(), "pages", "crash.js"])
    if (!fs.existsSync(targetFile)) {
        console.log(`File not found: ${targetFile}`)
    }
    const content = fs.readFileSync(targetFile, 'utf8')
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
    return {
        props: {
            content
        }
    }
}
