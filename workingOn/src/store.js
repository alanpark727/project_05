import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'cart',
    initialState: [
    ],
    reducers : {
        addCount(state, action){
            let idx = state.findIndex((a) => { return a.id === action.payload })
            state[idx].amount++;
        },

        minusCount(state, action){
            let idx = state.findIndex((a) => { return a.id === action.payload })
            --state[idx].amount;
        },

        sortName(state){
            state.sort((a,b) => 
                a.item > b.item ? 1: -1,
            );
        },

        addItem(state, action){
            state.push(action.payload)
        },

        minusItem(state, action){
            state.splice(action.payload,1)
        }
    }
})

export let { addCount, sortName, addItem, minusCount, minusItem } = cart.actions

export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})