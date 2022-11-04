import ProductItem from "./ProductItem"

import { products } from '../data'


const Main = () => {

    return (
        <>
            {products.map((product) => <ProductItem product={product} />)}
        </>
    )
}

export default Main
