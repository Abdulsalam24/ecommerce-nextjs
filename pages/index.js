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
    dispatch(getCart(products))
  }, [])

  return (
    <>
      <Meta />
      <Nav />
      <Main />
    </>
  )
}

