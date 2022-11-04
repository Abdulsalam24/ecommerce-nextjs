import React from 'react'
import product from '../assets/img/image-product-1.jpg'
import product2 from '../assets/img/image-product-2.jpg'
import Image from "next/image"
import { AiOutlineMenu } from "react-icons/ai"
import { productsImg } from '../data'


const ProductItem = ({ product }) => {

  console.log(product, 'prodcut')

  return (

    <main className="mb-10 w-full justify-between md:flex md:mx-auto md:mb-10 max-w-[1200px]">
      <div className="md:w-[40%] mx-auto max-w-xl">
        <Image src={product.image} alt="product" className="md:rounded-xl" layout="responsive" />

        <div className="hidden md:flex flex-wrap justify-between mt-10">
          {
            productsImg.map((productImg) =>
              <Image key={productImg.id} src={productImg.imgSrc} className="md:rounded-xl cursor-pointer" alt="product" width={100} height={50} />
            )
          }
        </div>

      </div>

      <div className="p-5 md:p-10 md:w-[55%]">
        <p className="text-orange font-bold sm:text-xl md:text-2xl">{product.name}</p>

        <h1 className="my-4 font-bold text-3xl sm:text-4xl lg:text-6xl xl:my-7">Fall limited edition sneakers</h1>

        <p className="text-gray-500 sm:text-lg md:text-xl">{product.info}</p>


        <div className="my-4 flex justify-between items-center md:my-6 lg:flex-col md:items-start">

          <h1 className="text-2xl sm:text-3xl font-bold">${product.price}<span className="text-lg bg-lightorange text-orange font-extrabold px-1 rounded ml-3">50%</span></h1>

          <p className="text-gray-400 md:text-xl md:my-1"><del>$250.00</del></p>
        </div>


        <div className="lg:flex items-center gap-2">

          <div className="flex justify-between items-center my-5 p-4 rounded-lg bg-gray-200 font-extrabold text-2xl sm:text-3xl md:w-40">
            <button className="text-orange">-</button>
            <p className="text-lg md:text-xl">2</p>
            <button className="text-orange">+</button>
          </div>

          <button className="bg-orange w-full p-4 rounded-lg text-white font-bold md:text-2xl md:flex-1"><AiOutlineMenu className="inline mb-1 mr-1" /> Add To Cart</button>
        </div>
      </div>

    </main>

  )
}

export default ProductItem