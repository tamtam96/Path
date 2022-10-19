export const videos = [
    "fib9GSbAGDM",
    "1fJwbpS_OZg",
    "Is_QH3evpXw",
    "ChrFvXsnWk4",
    "-wE3S6baKtY",
    "Ms2Y9g0VC-c",
    "MWCKKugq0v8",
    "ZdZhDxLil18",
    "j0zghSW6loQ",
    "LYs4clrQUjE",
    "Ju8SCF_ZB7U",
    "l_N6RlR-xcs",
    "j7PjaPu2qgA",
    "x2bD2QhOxd0",
    "aPnBZG2y_UM",
    "j-neq1KhuPc",
    "kG-iihrYCG4",
    "bcZyJ7yXebQ",
    "qJCh53SdS6s",
    "Iu48lfJXgww",
    "C-JnJl1FXaI",
    "zejh5yNkFpc",
    "MFq6lOuoPFw",
    "qcyAuLT1vcE",
    "EhIbCrl1pGw",
    "WDckRoz1biM",
    "At-kMCldv6c",
    "GbbKydemvOo",
    "dr85P1t24c0",
    "mG1WWZhprIo",
    "a0XUAgp_kfE",
    "F8hciwAs94A",
    "j6RUJylJAEE",
    "ocJBIXua6zQ",
    "7a6iO3EhMdw",
    "Odgg-IXwkwI",
    "qtqTPCAw7Fo",
    "3QCXVKUi7K8",
    "7rjAtuwxrEA",
    "SqACdvxJsiM",
    "YMjD8jevTUw",
    "LfKMgEZ9bKo",
    "gSI3PuHQO9A",
    "GegAvpiWd_Q",
    "INYZy6_HaQE",
    "ZAOc4eMTQiw",
    "xHEjh5fXuW4",
    "lBpxQdikm0w",
    "hI4yTE8WT88",
    "FsX38yGdGvk",
    "k91KDItxif0",
    "jzaa4_P4Z1A",
    "KpLno70oYHE",
    "b2X5lyaffQs",
    "_axrpVnGHpk",
    "Zao9JV1BLg8",
    "sPZWtZ8vt1w",
    "68QXwHZiuqY",
    "MhZXHA4BWgk",
    "eR-LrWfrXl8",
    "Ujvy2-o1I9c",
    "FJnTItLVIqQ",
    "kIbP2Sg8y18",
    "DCrvanB2UWA",
    "0hl5KtXyNvA",
    "2Z2zgv2njY8",
    "GnD3JH8Zhio",
    "fBR5HQ-Ja10",
    "w9Kyz5y_TPw",
    "5P19hROy9vk",
    "3pl_pJQDW4k",
    "mg0hueOyoAw",
    "dHptQCXdQio",
    "so1szjHu7jY",
    "ovQLMymGm5s",
    "UhHOqwijXqA",
    "4T-8gEOwZMY",
    "AvLbDnvOp2k",
    "jjjTNUNmOu8",
    "skFU7pmBOys",
    "bM4ykIumlss",
    "pTMh1yyqVC8",
    "TqTWSSBcV_4",
    "FG2TwcPdPOA",
    "ub7lok-JQJE",
    "H7hnkI5z93o",
    "sfHZyoUXvZY",
    "Z0MpmG114ik",
    "EfH8XuYbRQ0",
    "payp7simhBM",
    "C6gIbbC23Y0",
    "-WSWz1H3mJg",
    "S8FspsdFuK8",
    "X9FDiyYaXos",
    "0uHmaAgYlHk",
    "5l-viVbMIH4",
    "6Aab3k2nsOY",
    "8JRGbHF2Loc",
    "ysCyoJ0PEzs",
    "ci06S-jNn8U",
    "6BSr2DyVpxo",
    "Sniu5wbfx7U",
    "bZLKG43Qcps",
    "Dbin1Bz7WoU",
    "ah8LKH-S37g",
    "0jW74lrpeM0",
    "o33rglPvNa8",
    "DJg3sLBt96I",
    "9Mg4wZqfLOI",
    "274qr8cqlhg",
    "iZ96TuP_veY",
    "s7wjIlWI7Ic",
    "QEoqBjRZr1g",
    "BFTxP03H13k",
    "OgR67Ah9MQY",
    "oux8pdIJitY",
    "sCJOIXVGs-k",
    "4aaV7uu1-rg"
]

const Parth = ({ videoCode }) => {

    return <a target='_blank' href={`https://youtube.com/watch?v=${videoCode}`}>Random Video ({videoCode})</a>
}

export default Parth

export async function getServerSideProps({ params, res }) {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    return {
        props: {
            videoCode: randomVideo
        }
    }
}