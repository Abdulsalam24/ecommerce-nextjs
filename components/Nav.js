import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { RiDeleteBin5Line } from "react-icons/ri"



import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../assets/img/image-avatar.png'
import { deleteFromCart } from '../redux/actions'

const Nav = () => {

    const [mobile, setMobile] = useState(false)

    const [viewCart, setViewCart] = useState(false)

    const dispatch = useDispatch()

    const products = useSelector(state => state.productReducers)

    const { carts } = products

    let check = carts.map((cart) => cart.image.src).join("")

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

    const handleDelete = (cart) => {
        dispatch(deleteFromCart(cart))
    }

    return (
        <>
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
                        <div className='flex items-center' onClick={() => setViewCart(!viewCart)}><AiOutlineShoppingCart /> <i>{carts.length}</i></div>
                        <div>
                            <Image src={avatar} alt="product" width={30} />
                        </div>
                    </div>
                </div>

                {viewCart && (<div className='absolute bg-white top-[85px] rounded-lg w-11/12 m-auto shadow-lg p-1'
                >
                    <div>
                        <h4 className='p-5 border-gray-200 border-b font-bold text-md'>Cart</h4>
                    </div>
                    {
                        carts.length > 0 ? (
                            carts.map((cart) => (
                                <div className='p-4'>
                                    <div className='flex items-center justify-between gap-3 text-gray-400'>
                                        <Image className='rounded' src={check} alt='pro-imgage' width={50} height={50} />
                                        <div className="flex-1">
                                            <p>{cart.name}</p>


                                            <p>{`${cart.price} * ${cart.qtn}`} <b className='text-black'> {`$${cart.price * cart.qtn}`}</b></p>

                                        </div>


                                        <i onClick={() => handleDelete(cart)}><RiDeleteBin5Line /></i>
                                    </div>
                                    <button className="bg-orange mt-4 w-full p-3 rounded-lg text-white font-bold md:text-2xl">checkout</button>
                                </div>
                            ))
                        ) : (
                            <div className='flex justify-center items-center py-20 text-gray-400 font-bold'>
                                <h3>Your cart is empty</h3>
                            </div>
                        )
                    }
                </div>)}
            </nav>
        </>
    )
}

export default Nav