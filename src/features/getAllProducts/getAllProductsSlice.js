import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
//import { build } from "vite";


const initialState = {
    loading: false,
    products: [],
    error: "",
};

// ********this is better for big projects**********
// const fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     return data.products || [];
useEffect
const fetchProducts = createAsyncThunk("products/fetchProducts",()=>{
    return fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => data.products);
 });

 const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = "";
        });
        builder.addCase(fetchProducts.rejected,(state,action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        });
    },
 });


export default productsSlice.reducer;
export {fetchProducts};