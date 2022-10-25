const fs = require('fs')
const path = require('path')

const codes = [
    "MSYw502dJNY",
    "I4kz-C7GryY",
    "9J4hoAatGRQ",
    "xw9Au9OoN88",
    "cn0WZ8-0Z1Y",
    "R66eQLLOins",
    "LI1CusL7Ceo",
    "R4WwhOdk_Eg",
    "0lMlJOCNpFw",
    "MS4jk5kavy4",
    "Cj7R36s4dbM",
    "My14mZa-eq8",
    "nDCohlKUufs",
    "SyyrwoCec1k",
    "hRDjmyEvmBI",
    "Z8tqY8fX0Ec",
    "w1Kw94qjdQA",
    "oyvDYZ6hJNA",
    "3xM8hvEE2dI",
    "mDS32LEe1Ss",
    "F6g7S2W27Kc",
    "HyKhIiGKq5M",
    "6lQyPgaakY4",
    "ir0URpI9nKQ",
    "iJn0ZPd6mYo",
    "KpS_AvbMs-k",
    "zMTERytCNAU",
    "4kF0U8kIMp4",
    "WXKgBIiP8IA",
    "ak8gydUl9gM",
    "bDpW1sHrBaU",
    "WfNiQBXmPw8",
    "YWNcCs__vQg",
    "Hlpv7nKt81A",
    "hvfs4jIYHrI",
    "eAHYT5gIPZg",
    "drtZJvTC9dk",
    "3c8YoB-cyY4",
    "H9ipRaLa4Jw",
    "JBYqV2sK918",
    "PubyDwbNqYA",
    "zj05QxebnC4",
    "XJc9iprkVzg",
    "6iVGuMyKFgA",
    "rtepIKeNHPU",
    "mtHilmUa69M",
    "VPYOs0EGgJk",
    "4zdkun4xzOs",
    "5xTh44G6RYs",
    "dhgEpr87Yacs"
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
    return {
        props: {
            content
        }
    }
}
