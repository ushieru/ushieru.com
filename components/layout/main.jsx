import Head from "next/head"
import Navbar from "../navbar"

const Layout = ({ children, title }) => <>
    <Head>
        <title>{title}</title>

        <meta charset="utf-8" />
        <meta name="description" content="Ushieru's personal website" />
        <meta name="author" content="Uziel Atlai Cocolan Flores (Ushieru)" />
        <meta name="robots" content="index"/>

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://ushieru.com/" />
        <meta property="og:image" content="ushieru.com/favicon.svg" />
    </Head>
    <div className="w-full h-full flex flex-col items-center justify-center">
        <Navbar />
        {children}
    </div>
</>

export default Layout