import axios from 'axios';
import callApi from "./api"

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import Main from "../components/Main"
import Meta from "../components/Meta"
import Nav from "../components/Nav"
import { getCart } from "../redux/actions"
import Spinner from '../components/Spinner';

export const getServerSideProps = async () => {
  const { data } = await axios.get('https://dummyjson.com/products?skip=5&limit=10')
  const { products } = data

  return {
    props: {
      products
    }
  }
}

export default function Home({ products }) {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)


  const dispatch = useDispatch()


  useEffect(() => {
    let mount = true
    const fecthProducts = async () => {
      try {
        const pro = products?.map((cart) => cart.id ? { ...cart, qtn: 1 } : cart)
        if (mount) {
          dispatch(getCart(pro))
          setIsLoading(false)
        }
      } catch (error) {
        setIsError(true)
        console.log(error, 'eroooooo')
      }
    }

    fecthProducts()
    return () => {
      mount = false
    }
  }, [])

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return (
      <div className="flex justify-center item-center h-full">
        <h3>Something is wrong</h3>
      </div>
    )
  }

  return (
    <>
      <Meta />
      <Nav />
      <Main />
    </>
  )

}

