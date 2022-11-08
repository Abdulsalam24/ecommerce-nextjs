const initialState = {
    carts: [],
    product: {},
    quantity: 0,
}


const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CART':
            return {
                ...state, product: action.payload, quantity: 0
            }

        case 'ADD_TO_CART':
            const exist = state.carts.find((x) => x.id === action.payload.id)

            if (exist) {
                console.log(state.carts.map((cart) => cart.id === action.payload.id ? {
                    ...cart, qtn: cart.qtn + state.quantity
                } : "fhf"), 'existexistexistexistexistexist')

                state.carts.map((cart) => cart.id === action.payload.id ? { ...cart, qtn: cart.qtn + state.quantity } : cart)
            } else {
                const pro = action.payload
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
        default: return state
    }
}

export default productReducers