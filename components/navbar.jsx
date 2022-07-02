import Link from "next/link"
import Image from "next/image"

const Navbar = () => <>
    <div className="flex justify-between items-center py-1 px-3 sm:p-5 sm:py-0 sm:mt-4 container m-auto">
        <div className="w-12 sm:w-16">
            <Link href="/">
                <a>
                    <Image
                        layout='responsive'
                        width={64}
                        height={64}
                        src='/favicon.svg'
                        alt="ushieruIconSvg"
                    />
                </a>
            </Link>
        </div>
        <div className="flex-shrink text-lg md:text-2xl font-bold">
            <Link href="/blog">
                <a className="mr-5 md:mr-14">Blog</a>
            </Link>
        </div>
    </div>
</>

export default Navbar