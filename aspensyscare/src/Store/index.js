import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slices/userSlice";
import  bannerSlice  from "./Slices/bannerSlice";
import categorySclice from "./Slices/categorySclice";
import productSlice from "./Slices/productSlice";
const store = configureStore({
    reducer: {
        users: userSlice,
        banner:bannerSlice,
        category:categorySclice,
        product:productSlice,
    },
});

export default store;