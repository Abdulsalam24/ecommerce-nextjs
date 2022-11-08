

export const getCart = (product) => {
    return {
        type: 'GET_CART',
        payload: product
    }
}



export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}



export const quantityChange = (type) => {
    return {
        type
    }
}
