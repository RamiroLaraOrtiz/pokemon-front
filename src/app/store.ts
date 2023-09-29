import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "../reducers/favoriteSlice";

export default configureStore({
    reducer:{
        favorite:favoriteReducer
    }
})