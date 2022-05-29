import Link from "next/link"
import Image from "next/image"

const Navbar = () => <>
    <div className="flex items-center p-5 sm:py-0 sm:mt-4 container m-auto">
        <div className="flex-grow">
            <Link href="/">
                <a>
                    <Image
                        height={64}
                        width={64}
                        src='/favicon.svg'
                        alt="ushieruIconSvg"
                        className="sm:h-20 p-2 inline-block"
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