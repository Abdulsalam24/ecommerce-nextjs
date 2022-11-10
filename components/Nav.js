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

    const [mobile, setMobile] = useState(true)

    const [viewCart, setViewCart] = useState(false)

    const dispatch = useDispatch()

    const products = useSelector(state => state.productReducers)

    const { carts } = products

    const total = carts.map((x) => x.price * x.qtn)

    let screen

    if (typeof window !== 'undefined') {
        screen = window.screen.width
        window.addEventListener("resize", () => {

            if (screen > 768) {
                setMobile(false)
            } else {
                setMobile(true)
            }
        })
    }

    useEffect(() => {
        if (screen > 768) {
            setMobile(false)
        }
    }, [])




    const handleDelete = (cart) => {
        dispatch(deleteFromCart(cart))
    }

    return (
        <>
            <nav className='relative border-b border-gray-100 px-5 mx-auto flex justify-between md:mb-20 max-w-[1300px] z-10'>
                <div className='w-full py-4 md:py-6 flex gap-10 justify-between items-center'>
                    <div className="flex items-center gap-1">
                        <span className='z-10 md:hidden' onClick={() => setMobile((prevState) => !prevState)}>
                            {mobile ? <AiOutlineMenu /> : <FaTimes />}
                        </span>
                        <h1 className='text-3xl font-bold mb-2 ml-1'>sneakers</h1>
                    </div>

                    <div className={`absolute ${mobile ? 'hidden' : 'block'} bg-white top-0 left-0 h-screen z-[1px] w-9/12 md:static md:h-6 md:w-full`}>

                        <ul className='menu-list pt-16 px-5 font-bold md:font-medium md:flex md:p-0'>
                            <li>
                                collection
                            </li>
                            <li>
                                men
                            </li>
                            <li>
                                women
                            </li>
                            <li>
                                about
                            </li>
                            <li>
                                contact
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='relative cursor-pointer flex items-center' onClick={() => setViewCart(!viewCart)}>
                            <AiOutlineShoppingCart className='text-xl font-extrabold' />
                            <i className='absolute text-sm text-white bottom-3 left-2 b bg-orange  leading-4 w-6 h-4 text-center rounded-full'>{carts.length}</i>
                        </div>

                        <div className='w-7 md:w-10'>
                            <Image src={avatar} alt="product" width={100} />
                        </div>
                    </div>
                </div>

                {<div className={`absolute transition-all duration-300 bg-white top-[85px] ${!viewCart ? 'left-[100%] md:left-[100%] lg:md:left-[120%]' : 'left-[0px] md:left-[62%]'} right-0 rounded-lg w-[95%] max-w-lg m-auto shadow-xl p-1 z-30 md:w-[35%] md:right-0 md:m-0`}
                >
                    <div>
                        <h4 className='p-5 border-gray-200 border-b font-bold text-md'>Cart</h4>
                    </div>
                    {
                        carts.length > 0 ? (
                            <>
                                {carts.map((cart, i) => (
                                    <div className='p-4' key={i}>
                                        <div className='flex items-center justify-between gap-3 text-gray-400 w-full'>
                                            <Image className='rounded w-[20%] h-[100%]' src={cart.thumbnail} alt='pro-imgage' width={100} height={100} />
                                            <div className="flex-1 text-sm">
                                                <p>{cart.title}</p>
                                                <p>{`${cart.price} * ${cart.qtn}`} <b className='text-black'> {`$${cart.price * cart.qtn}`}</b></p>
                                            </div>
                                            <i className='text-xl cursor-pointer' onClick={() => handleDelete(cart)}><RiDeleteBin5Line /></i>
                                        </div>
                                    </div>
                                ))}
                                <h3 className='mr-3 text-right text-gray-400'>Total : <b>${total.length > 0 ? total.reduce((a, b) => a + b) : 0}</b></h3>
                            </>
                        ) : (
                            <div className='flex justify-center items-center py-20 text-gray-400 font-bold'>
                                <h3>Your cart is empty</h3>
                            </div>
                        )
                    }
                    <div className='text-center'>
                        <button className="bg-orange my-4 w-11/12 p-3 rounded-lg text-white font-bold text-sm md:text-md"><i className='not-italic'>Checkout</i></button>
                    </div>
                </div>}
            </nav>
        </>
    )
}

export default Nav