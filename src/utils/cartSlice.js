import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items:[]
    },
    reducers:{
        addItem : (State,action) => {
            State.items.push(action.payload);
        },
        clearCart : (State) => {
            State.items = []
        },
        removeItem: (State, action) => {
            State.items = State.items.filter((item) => item.id !== action.payload.id);
        }
        
    }

});

export const{addItem, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;