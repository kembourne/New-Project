import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import dataSlice from "./slice"; 
const store= configureStore({
    reducer:{
        alldata:dataSlice.reducer
    }
})
export default store;
