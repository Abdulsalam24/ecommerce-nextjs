import { createStore } from 'redux'
import productReducers from '../reducers/productReducers'


export const store = createStore({
    productReducers,
})