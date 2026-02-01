import { configureStore  } from "@reduxjs/toolkit";
import productsReducer from "../features/getAllProducts/getAllProductsSlice";
const store = configureStore({
    reducer:{
        products: productsReducer,
    },
});

export default store;