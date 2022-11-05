import ProductItem from "./ProductItem"
import { products } from '../data'


const Main = () => {
    return (
        <>
            {products.map((product) => <ProductItem key={product.id} product={product} />)}
        </>
    )
}

export default Main
