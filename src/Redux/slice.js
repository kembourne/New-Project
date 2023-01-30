import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
const dataSlice = createSlice({
    name: "shopping",
    initialState: {
error:true,
        newLogin: "",
        category: {
            smartphones: [],
            laptops: [],
            homedecoration: [],
        },
        cart: []
        ,
        currentproduct: {},
        categoryselect: {},

    },
    reducers: {
        isLogin: (state, action) => {
            state.newLogin = action.payload;
        },
        Update1: (state, action) => {
            state.category.smartphones = action.payload;
        },
        Update2: (state, action) => {
            state.category.laptops = action.payload;
        },
        Update3: (state, action) => {
            state.category.homedecoration = action.payload;
        },
        addtocart: (state, action) => {
            state.cart = action.payload;
        },
        currentproduct: (state, action) => {
            state.currentproduct = action.payload;
        },
        categoryselected:(state,action)=>{
state.categoryselect=action.payload;
        },
        seterror:(state,action)=>{
            state.error=action.payload
        }
    }

})
export const { isLogin, Update1, Update2, Update3, currentproduct ,categoryselected,seterror,addtocart} = dataSlice.actions;
export default dataSlice;