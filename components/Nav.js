import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { RiDeleteBin5Line } from "react-icons/ri"


import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../assets/img/image-avatar.png'
import { deleteFromCart } from '../redux/actions'

import { checkout } from '../checkout'
// import { useSession, signIn, signOut } from "next-auth/react"

const Nav = () => {

    // const { data: session } = useSession()
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

    const ids = [{
        id: 'price_1M3yfmHx4K5uGuw5q7nBHOP5',
        num: 6
    }, {
        id: "price_1M3yhkHx4K5uGuw53AJp1TzT",
        num: 7
    }, {
        id: "price_1M3yjKHx4K5uGuw5NnnZW25p",
        num: 8
    }, {
        id: "price_1M3ykCHx4K5uGuw5oWmIOebf",
        num: 9
    }, {
        id: "price_1M3yl9Hx4K5uGuw5GBaWrcn6",
        num: 10
    }, {
        id: "price_1M3ymAHx4K5uGuw56l2oPBaX",
        num: 11
    }, {
        id: "price_1M3ynLHx4K5uGuw5dK34SyFY",
        num: 12
    }, {
        id: "price_1M3ypoHx4K5uGuw5rCIB2j39",
        num: 13
    }, {
        id: "price_1M3yqhHx4K5uGuw5DaS7uewR",
        num: 14
    }, {
        id: "price_1M3yrSHx4K5uGuw5vk5ZxUbp",
        num: 15
    },
    ]


    let pro = []

    ids.map((id) => {
        products.carts.map((fruit) => {
            if (id.num === fruit.id) {
                pro.push({ price: id.id, quantity: fruit.qtn })
            }
        });
    });



    return (
        <>
            <nav className='relative border-b border-gray-100 px-2 mx-auto flex justify-between md:mb-20 max-w-[1300px] z-10'>
                <div className='w-full py-4 flex gap-10 justify-between items-center md:py-6'>
                    <div className="flex items-center gap-1 w-[30%] md:w-[10%]">
                        <span className='z-10 md:hidden' onClick={() => setMobile((prevState) => !prevState)}>
                            {mobile ? <AiOutlineMenu /> : <FaTimes />}
                        </span>
                        <h1 className='text-black text-3xl font-bold mb-2 ml-1 flex items-center'><i className='not-italic'>shoppy</i> <AiOutlineShoppingCart /></h1>
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

                        </ul>
                    </div>

                    <div className='flex items-center gap-4 md:w-[10%]'>
                        {/* {
                            session ? (<>

                                <li className='font-bold list-none cursor-pointer py-1 px-2 rounded-lg bg-gray-300 hover:shadow-md text-center text-sm' onClick={() => signOut()}>Sign out </li>

                            </>) : (<>
                                <li className='font-bold list-none cursor-pointer py-1 px-2 rounded-lg bg-gray-300 hover:shadow-md text-center text-sm' onClick={() => signIn()}>Sign in</li>
                            </>)
                        } */}

                        <div className='relative cursor-pointer flex items-center' onClick={() => setViewCart(!viewCart)}>
                            <AiOutlineShoppingCart className='text-xl font-extrabold' />
                            <i className='absolute text-sm text-white bottom-3 left-2 b bg-orange  leading-4 w-6 h-4 text-center rounded-full'>{carts.length}</i>
                        </div>

                        <div className='w-7 md:w-10'>
                            <Image className='rounded-full' src={avatar} alt="product" width={100} height={100} />
                        </div>

                    </div>
                </div>

                {<div className={`absolute transition-all duration-300 bg-white top-[85px] ${!viewCart ? 'left-[100%] md:left-[100%] lg:md:left-[120%]' : 'left-[0px] md:left-[62%]'} right-0 rounded-lg w-[95%] max-w-lg m-auto shadow-xl p-1 z-30 md:w-[35%] md:right-0 md:m-0`}
                >
                    <div>
                        <h4 className='text-black p-5 border-gray-200 border-b font-bold text-md'>Cart</h4>
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
                                <h3 className='mr-3 text-right text-gray-400'>Total : <b className='text-black '>${total.length > 0 ? total.reduce((a, b) => a + b) : 0}</b></h3>
                                <span className='ml-2 text-gray-400 text-xs'>card info: 4242424242424242 (test)</span>
                            </>
                        ) : (
                            <div className='flex justify-center items-center py-20 text-gray-400 font-bold'>
                                <h3>Your cart is empty</h3>
                            </div>
                        )
                    }
                    <div className='text-center'>

                        <button
                            onClick={() => checkout({
                                lineItems: pro
                            })}

                            className="bg-orange my-4 w-11/12 p-3 rounded-lg text-white font-bold text-sm md:text-md"
                        >
                            <i className='not-italic'>Checkout</i>
                        </button>


                    </div>
                </div>}
            </nav>
        </>
    )
}

export default Nav