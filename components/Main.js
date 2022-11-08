import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ProductItem from "./ProductItem"


const Main = () => {

    const products = useSelector((state) => state.productReducers.product)


    return (
        <>
            {products?.map((product) => <ProductItem key={product.id} product={product} />)}
        </>
    )
}

export default Main
