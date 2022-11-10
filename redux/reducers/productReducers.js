const initialState = {
    carts: [],
    product: [],
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

            const productQtn = state.product.map((x) => x.id === payload.id ? { ...x, qtn: 1 } : x)

            if (exist) {
                const cartItems = state.carts.map((cart) => cart.id === payload.id ? { ...cart, qtn: cart.qtn + payload.qtn } : cart)

                return { ...state, carts: cartItems, product: productQtn, quantity: 0 }

            } else {
                const pro = payload
                return {
                    ...state,product: productQtn, carts: [...state.carts, { ...pro }], quantity: 0
                }
            }



        case 'INCREMENT':
            const check = state.product.map((x) => x.id === payload ? { ...x, qtn: x.qtn + 1 } : x)

            return { ...state, product: check }

        case 'DECREMENT':
            const check1 = state.product.map((x) => x.id === payload ? { ...x, qtn: --x.qtn } : x)
            const checkItem = state.product.find((x) => x.id === payload)


            if (checkItem.qtn < 2) {
                const productQtn = state.product.map((x) => x.id === payload ? { ...x, qtn: 1 } : x)
                return { ...state, product: productQtn }
            }

            return { ...state, product: check1 }

        case 'DELETE_FROM_CART':
            const filtered = state.carts.filter((cart) => cart.id !== payload.id)

            return {
                ...state, carts: filtered
            }

        default: return state
    }
}

export default productReducers