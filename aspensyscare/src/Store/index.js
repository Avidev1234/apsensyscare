import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slices/userSlice";
import  bannerSlice  from "./Slices/bannerSlice";
import categorySclice from "./Slices/categorySclice";
import productSlice from "./Slices/productSlice";
import detailsSlice from "./Slices/productEntrySlice";
import sizeSlice from "./Slices/sizeSlice";
import cartSlice from "./Slices/cartSlice";
import imagemagnifySlice from "./Slices/imagemagnifySlice";
const store = configureStore({
    reducer: {
        users: userSlice,
        banner:bannerSlice,
        category:categorySclice,
        product:productSlice,
        productdetails:detailsSlice,
        size:sizeSlice,
        cart:cartSlice,
        imagemagnifySlice:imagemagnifySlice,
    },
});

export default store;