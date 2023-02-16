// import fs from 'fs'
// import path from 'path'
// import { JSDOM } from 'jsdom'

// const links = [
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9Gn1tz2WIe-75UuZSL3wSJK",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9GlYQJWEhxOBtNXH5DKeNsN",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HpCr9iU9YXHa5kXj0Pp2dA",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HjfcQeJcNzLUFxa4m3i7FW",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9FAFBqQGf5-4YbfKpWbJtGn",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9E9BcCODbTNw2xU4b1cWSi6",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HEEz7qAKsnyREbdtZQGQP9",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9GtvOUYLW601u1Oiaoat2UF",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9GlYQJWEhxOBtNXH5DKeNsN",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9Gn1tz2WIe-75UuZSL3wSJK",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9H-HhKkr-peYKxTeE3XUeQf",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9Hkihn7mQnLBl2YJKbU1cjO",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9E_NbG76suOTxi5ezJ96odm",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9Fazvaf8unWl9J2soXCAvy4",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HH3IbmPRCfU4knUiBJPq1Z",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HVbNobTmFnOxXRn1dIpffc",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9EQp4lGx2kxTvA4Y7HUo5VY",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HXK4wzEIrLCc4gYxq-gUhX",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9G9v5KJ6ya2fWymeZw8DcN4",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HH55nqS_y_0ryk3foJ3kSX",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9Ha_e6t4NvnCjCyNmJyAvhO",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9FzGNgCH4PP8EX8ZyJPa6sE",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9Hyyv_MD2Y7OPFxhnrKFsD6",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HpCr9iU9YXHa5kXj0Pp2dA",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9E5VK94UujanWk45qM8rQuz",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9ELZEe9s2NXTKr41Yedbw7M",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9GzztfmHCkH_5e6TLE9CfpK",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9FoUSDODs14ck3OzSje4WZb",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9GXX6XP_-m7GDS4N1iSdQ2g",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9En46TNCXL2n6SiqRc_iMB8",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9E-ZM1U6PAjgPUmz-V4-Yja",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9HEzpCcK6AywSowO7BvvZD_",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9Hbvjsj-mqGNeezm67GgPv2",
//     "https://www.youtube.com/playlist?list=PLybg94GvOJ9FtPwX7d__ppo-ke_iwAqIA",
// ]

// const Playlist = async () => {

//     const targetFile = path.join.apply(null, [process.cwd(), "html"])

//     const getTitle = async (link) => {
//         const html = await fetch(link).then(response => {
//             if (response.ok) {
//                 return response.text()
//             }
//             throw new Error('Invalid response', response)
//         }).catch(e => console.log(e))

//         // try {
//         //     fs.writeFileSync(targetFile, html);
//         // } catch (err) {
//         //     console.error(err);
//         // }
//         const dom = new JSDOM(html)
//         const title = dom.window.document.title
//         return (title || "").replace('- YouTube', '')
//     }

//     const linksAndTitles = await Promise.all(links.map(async (link) => {
//         const title = await getTitle(link)
//         const result = { link, title }
//         return result
//     }))

//     console.log(linksAndTitles)

//     return <ul className="m-10">
//         {
//             linksAndTitles?.map((i, index) => <li
//                 key={index}
//                 className="border-b mt-2"
//             >
//                 <a href={i.link}>
//                     <b>
//                         {i.title}
//                     </b>
//                 </a>
//                 <span className="text-xs text-gray-600 mt-0.5 block pb-2">
//                     {i.link}
//                 </span>
//             </li>)
//         }
//     </ul>
// }

// export default Playlist
