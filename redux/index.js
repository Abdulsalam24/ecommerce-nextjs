


export const addToCart = ({ newProduct }) => {
    return {
        type: "ADD_TO_CART",
        payloads: newProduct
    }
}