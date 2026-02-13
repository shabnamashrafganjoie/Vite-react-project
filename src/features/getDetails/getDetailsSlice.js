import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";


const initialState = {
    loading: false,
    details: {},
    error: "",
};

// ********this is better for big projects**********
// const fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     return data.products || [];



// const fetchDetails = createSlice("details/fetchDetails",(id)=>{
//     return fetch(`https://..../&{id}`)
//     .then((res) => res.json())
//     .then((data)=>data);
//})
const fetchDetails = createAsyncThunk("details/fetchdetails",(id)=>{
    return fetch(`https://dummyjson.com/products/${id}`)
.then((res) => res.json())
.then((data) => data.details);
 });

 const detailsSlice = createSlice({
    name: "details",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(fetchDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDetails.fulfilled,(state,action) => {
            state.loading = false;
            state.details = action.payload;
            state.error = "";
        });
        builder.addCase(fetchDetails.rejected,(state,action) => {
            state.loading = false;
            state.details = [];
            state.error = action.error.message;
        });
    },
 });


export default detailsSlice.reducer;
export {fetchDetails};