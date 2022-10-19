export const videos = [
    "lRNv4uM6auI",
    "0-oQRSViZQE",
    "H3xgBS_kDNw",
    "qf29pqPWDOU",
    "ybkkiGtJmkM",
    "_v7YgDum2Sg",
    "24Bz5Ra5RgE",
    "GkI_2yiIb48",
    "Iod6uwUGM2E",
    "LdZLLR8AfkM",
    "taP3__Pltwg",
    "oMeXcBk1x-c",
    "cFBRawYov00",
    "CWulQ1ZSE3c",
    "SdL55HWNPRM",
    "y0hsl8C7kZw",
    "BVnrD9m3nSI",
    "O5-WI7XN6uo",
    "1jfNIBtfWDY",
    "xpzflTfm8k0",
    "sftkP4CjjZs",
    "oX8-IXdABuc",
    "cZfpWD00Hoc",
    "VJy17qZmhjE",
    "AFNh4aARIz8",
    "QvLdVWS_DsM",
    "-wqyHV3T-80",
    "QdvfiVebb_s",
    "oLrOnEmy_GA",
    "WOFMqBxJPAA",
    "bf_Wk6Wk_CI",
    "N8JpePwvuHw",
    "pJ9IXwTbt7Y",
    "Q3ZeUNDg4fQ",
    "6effL4ATZVo",
    "NDvS2V7HbnY",
    "BW6hxlThB_o",
    "smIdInCQ-kU",
    "EG8XTxus-Tw",
    "ryeRqMkHIyI",
    "lo2McnYcTTQ",
    "ukGLH_NrFH8",
    "PDL0ImZjeQc",
    "WX8NG0275R4",
    "qt_xoCXLXnI",
    "tl1KPjxKVqk",
    "8dpkmUjJ8xU",
    "GnZ3dogED7w",
    "mQwvHn_qkBA",
    "Zv5Qa2kGL04",
    "VVIesvLJjHE",
    "BBt5V7kO3j4",
    "SK-_JlxdGfk",
    "bWdeGTJxMQc",
    "GoASCMixu8A",
    "n6uPALWAyxc",
    "R7zncPFGYck",
    "bgcScY7CiMs",
    "MK5E_7hOi-k",
    "Nsq0jKuMhZE",
    "W4kb0PKPRYs",
    "SjHFIqItE6o",
    "7CbMrByB5Lk",
    "B1fj6IgfDRA",
    "Kz50S9gieBM",
    "Lt38K7XteV0",
    "lRNv4uM6auI",
    "0-oQRSViZQE",
    "qf29pqPWDOU",
    "ybkkiGtJmkM",
    "CWulQ1ZSE3c",
    "cFBRawYov00",
    "VVIesvLJjHE",
    "HyL36bH8PP8",
    "lo2McnYcTTQ",
    "FYU-N2RWfso",
    "VJy17qZmhjE",
    "WOFMqBxJPAA",
    "xpzflTfm8k0",
    "Iod6uwUGM2E",
    "oX8-IXdABuc",
    "L5XKyOsl6BA",
    "mcJC4Lra8WM",
    "I8puoKE7lg8",
    "5YIXUB44em4",
    "24Bz5Ra5RgE",
    "ukGLH_NrFH8",
    "1jfNIBtfWDY",
    "su9EVeHqizY",
    "oLrOnEmy_GA",
    "GkI_2yiIb48",
    "qHWrcECKH-E",
]

const Jared = ({ videoCode }) => {

    return <a target='_blank' href={`https://youtube.com/watch?v=${videoCode}`}>Random Video ({videoCode})</a>
}

export default Jared

export async function getServerSideProps({ params, res }) {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    return {
        props: {
            videoCode: randomVideo
        }
    }
}