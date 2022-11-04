const initialState = [
    {
        
        product: {},
        quantity: 0
    }
]


export const productReducers = (state = initialState, type) => {
    switch (type.action) {
        case 'ADD_TO_CART':
            return {
                ...state, product: action.payloads, quantity: (prevState) => prevState + 1
            }


        default: { return state }
    }
}