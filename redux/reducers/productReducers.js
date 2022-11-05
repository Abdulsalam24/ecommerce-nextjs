
const initialState = {
    carts: [],
    product: {},
    quantity: 0
}


const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, quantity: 0, carts: [{ items: action.payload, qtn: state.quantity }]
            }

        case 'INCREMENT':
            return {
                ...state, quantity: state.quantity + 1
            }
        case 'DECREMENT':
            return state.quantity === 0 ? { ...state, quantity: 0 } : {
                ...state, quantity: state.quantity - 1
            }
        default: return state
    }
}

export default productReducers