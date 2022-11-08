import axios from 'axios';
import callApi from "./api"

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Main from "../components/Main"
import Meta from "../components/Meta"
import Nav from "../components/Nav"


import { products } from "../data"
import { getCart } from "../redux/actions"


export default function Home() {

  const dispatch = useDispatch()



  useEffect(() => {
    let mount = true
    const fecthProducts = async () => {
      try {
        const { data } = await axios.get('https://dummyjson.com/products?skip=5&limit=10')
        const { products } = data
        if (mount) {
          dispatch(getCart(products))
        }
      } catch (error) {
        console.log(error)
      }
    }
    fecthProducts()
    return () => {
      mount = false
    }
  }, [])


  return (
    <>
      <Meta />
      <Nav />
      <Main />
    </>
  )
}

