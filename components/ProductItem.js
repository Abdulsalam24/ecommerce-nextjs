import Image from "next/image"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCart, quantityChange } from '../redux/actions'


const ProductItem = ({ product }) => {

  const dispatch = useDispatch()

  const singleProduct = useSelector(state => state.productReducers)


  const { quantity } = singleProduct

  const addToQuantity = (type) => {
    return dispatch(quantityChange(type))
  }

  const handleAddCart = () => {
    dispatch(addToCart(product))
    // dispatch(getCart(product))
  }


  console.log(product.price, product.discountPercentage, Math.floor(product.price * product.discountPercentage), 'discountPercentagediscountPercentagediscountPercentagediscountPercentage'
  )

  return (
    <main className="mb-10 w-full justify-between md:flex md:mx-auto md:mb-10 max-w-[1200px]">
      <div className="md:w-[40%] mx-auto max-w-xl">

        <Image src={product.images[0]} alt="product" width={300} height={300} layout="responsive" className="block w-full md:rounded-xl" />

        <div className="hidden md:flex flex-wrap justify-between mt-10">
          {
            product.images.map((pro) =>
              <Image src={pro} className="md:rounded-xl cursor-pointer" alt="product" width={100} height={100} />
            )
          }
        </div>

      </div>

      <div className="p-5 md:p-10 md:w-[55%]">
        <p className="text-orange font-bold sm:text-xl md:text-2xl">{product.title}</p>

        <h1 className="my-4 font-bold text-3xl sm:text-4xl lg:text-6xl xl:my-7">{product.title}</h1>

        <p className="text-gray-500 sm:text-lg md:text-xl">{product.description}</p>
        <div className="my-4 flex justify-between items-center md:my-6 lg:flex-col md:items-start">

          <h1 className="text-2xl sm:text-3xl font-bold">${product.price}<span className="text-lg bg-lightorange text-orange font-extrabold px-1 rounded ml-3">{product.discountPercentage}%</span></h1>

          <p className="text-gray-400 md:text-xl md:my-1"><del>${Math.floor(product.price * product.discountPercentage)}</del></p>
        </div>


        <div className="lg:flex items-center gap-2">

          <div className="flex justify-between items-center my-5 p-4 rounded-lg bg-gray-200 font-extrabold text-2xl sm:text-3xl md:w-40">
            <button className="text-orange" onClick={() => addToQuantity('DECREMENT')}>-</button>
            <p className="text-lg md:text-xl">{quantity}</p>
            <button className="text-orange" onClick={() => addToQuantity('INCREMENT')}>+</button>
          </div>

          <button className="bg-orange w-full p-4 rounded-lg text-white font-bold md:text-2xl md:flex-1" onClick={handleAddCart}><AiOutlineShoppingCart className="inline mb-1 mr-1" /> Add To Cart</button>
        </div>
      </div>

    </main>

  )
}

export default ProductItem