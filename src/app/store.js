import { configureStore  } from "@reduxjs/toolkit";
import productsReducer from "../features/getAllProducts/getAllProductsSlice";
import detailsReducer from "../features/getDetails/getDetailsSlice"
const store = configureStore({
    reducer:{
        products: productsReducer,
        details:detailsReducer,
    },
});

export default store;