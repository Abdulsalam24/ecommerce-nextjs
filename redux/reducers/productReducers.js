const initialState = {
    carts: [],
    product : [],
    quantity: 0,
}


const productReducers = (state = initialState, { payload, type }) => {
    switch (type) {
        case 'GET_CART':
            return {
                ...state, product: payload, quantity: 0
            }

        case 'ADD_TO_CART':
            const exist = state.carts.find((x) => x.id === payload.id)

            if (exist) {
                const cartItems = state.carts.map((cart) => cart.id === payload.id ? { ...cart, qtn: cart.qtn + state.quantity } : cart)

                return { ...state, carts: cartItems }

            } else {
                const pro = payload
                return {
                    ...state, carts: [...state.carts, { ...pro, qtn: state.quantity }]
                }
            }

        case 'INCREMENT':
            return {
                ...state, quantity: state.quantity + 1
            }
        case 'DECREMENT':
            return state.quantity === 0 ? { ...state, quantity: 0 } : {
                ...state, quantity: state.quantity - 1
            }

        case 'DELETE_FROM_CART':
            const filtered = state.carts.filter((cart) => cart.id !== payload.id)

            return {
                ...state, carts: filtered
            }

        // return state.carts.filter((cart) => cart.id === payload.id)


        default: return state
    }
}

export default productReducers