import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"
import avatar from '../assets/img/image-avatar.png'



const Nav = () => {
    const [mobile, setMobile] = useState(false)


    let screen
    if (typeof window !== 'undefined') {
        window.addEventListener("resize", () => {
            screen = window.innerWidth
            if (screen > 768) {
                setMobile(true)
            } else {
                setMobile(false)
            }
        });
    }

    return (
        <nav className='relative border-b border-gray-100 px-5 mx-auto flex justify-between md:mb-20 max-w-[1300px] '>
            <div className='w-full py-4 md:py-6 flex gap-10 justify-between items-center'>
                <div className="flex items-center gap-1">
                    <span className='z-10 md:hidden' onClick={() => setMobile((prevState) => !prevState)}>
                        {mobile ? <FaTimes /> : <AiOutlineMenu />}
                    </span>
                    <h1 className='text-3xl font-bold mb-2 ml-1'>sneakers</h1>
                </div>

                {
                    mobile && (
                        <div className='absolute bg-white top-0 left-0 h-screen z-[1px] w-9/12 md:static md:h-6 md:w-full'>
                            <ul className='menu-list pt-16 px-5 font-bold md:font-medium md:flex md:p-0'>
                                <li>
                                    <Link href="/">collection</Link>
                                </li>
                                <li>
                                    <Link href="/about">men</Link>
                                </li>
                                <li>
                                    <Link href="/about">women</Link>
                                </li>
                                <li>
                                    <Link href="/about">about</Link>
                                </li>
                                <li>
                                    <Link href="/about">contact</Link>
                                </li>
                            </ul>
                        </div>
                    )
                }

                <div className='flex items-center gap-2'>
                    <FaTimes />
                    <div>
                        <Image src={avatar} alt="product" width={30} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav