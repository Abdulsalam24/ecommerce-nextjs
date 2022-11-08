export const getCart = (products) => {
    return {
        type: 'GET_CART',
        payload: products
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const deleteFromCart = (cart) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: cart
    }
}


export const quantityChange = (type) => {
    return {
        type
    }
}
